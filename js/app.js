/**
 * Bharat Electric Motors - Flagship EV Showroom Main Application
 * Controller for single-brand showroom, models line-up, motor tech, modals & comparisons
 * Showroom: Pillar no. 8, Lala Bazar, GT Road, Handiya Prayagraj (WhatsApp: 8009579794)
 */

const App = {
  selectedCategory: "all",
  searchQuery: "",
  maxPrice: 200000,
  minRange: 0,
  removableBatteryOnly: false,
  selectedForCompare: [],
  activeHeroModel: "bharat-veloce-pro",
  activeHeroColor: "#10B981",

  init: function() {
    this.initHeroStudio();
    this.renderCatalog();
    this.renderMotorTech();
    this.initFilterEvents();
    this.initModalEvents();
    this.initFaqEvents();
    this.initDealershipTabs();
    this.initStickyNav();

    if (window.Calculators) {
      window.Calculators.initEmiCalculator();
      window.Calculators.initSavingsCalculator();
      window.Calculators.initExchangeEstimator();
    }
    if (window.BookingEngine) {
      window.BookingEngine.init();
    }
    if (window.InvoiceGenerator) {
      window.InvoiceGenerator.init();
    }
  },

  // ==================== HERO 360° & COLOR STUDIO ====================
  initHeroStudio: function() {
    this.updateHeroVehicleVisual();

    // Color buttons
    const colorButtons = document.querySelectorAll(".hero-color-btn");
    colorButtons.forEach(btn => {
      btn.addEventListener("click", (e) => {
        const hex = btn.getAttribute("data-color");
        this.activeHeroColor = hex;
        colorButtons.forEach(b => b.classList.remove("ring-4", "ring-emerald-400"));
        btn.classList.add("ring-4", "ring-emerald-400");
        this.updateHeroVehicleVisual();
      });
    });

    // Model Quick Selector buttons
    const modelSelectors = document.querySelectorAll(".hero-model-select-btn");
    modelSelectors.forEach(btn => {
      btn.addEventListener("click", () => {
        const modelId = btn.getAttribute("data-model-id");
        this.switchHeroModel(modelId);
      });
    });
  },

  switchHeroModel: function(modelId) {
    const list = window.BHARAT_VEHICLES || [];
    const ev = list.find(m => m.id === modelId);
    if (!ev) return;

    this.activeHeroModel = modelId;
    this.activeHeroColor = ev.colors[0]?.hex || "#10B981";

    // Update active button state
    document.querySelectorAll(".hero-model-select-btn").forEach(btn => {
      if (btn.getAttribute("data-model-id") === modelId) {
        btn.classList.add("bg-emerald-500", "text-slate-950", "font-black");
        btn.classList.remove("bg-slate-900/80", "text-slate-300");
      } else {
        btn.classList.remove("bg-emerald-500", "text-slate-950", "font-black");
        btn.classList.add("bg-slate-900/80", "text-slate-300");
      }
    });

    // Update hero text fields
    const titleEl = document.getElementById("hero-vehicle-name");
    const tagEl = document.getElementById("hero-vehicle-tagline");
    const speedEl = document.getElementById("hero-stat-speed");
    const rangeEl = document.getElementById("hero-stat-range");
    const accelEl = document.getElementById("hero-stat-accel");
    const priceEl = document.getElementById("hero-stat-price");

    if (titleEl) titleEl.textContent = ev.name;
    if (tagEl) tagEl.textContent = ev.tagline;
    if (speedEl) speedEl.textContent = `${ev.topSpeed} km/h`;
    if (rangeEl) rangeEl.textContent = `${ev.certifiedRange} km`;
    if (accelEl) accelEl.textContent = ev.acceleration;
    if (priceEl && window.Calculators) priceEl.textContent = Calculators.formatINR(ev.exShowroomPrice);

    this.updateHeroVehicleVisual();
  },

  updateHeroVehicleVisual: function() {
    const container = document.getElementById("hero-vehicle-svg-canvas");
    if (!container || !window.VEHICLE_GRAPHICS) return;

    const list = window.BHARAT_VEHICLES || [];
    const ev = list.find(m => m.id === this.activeHeroModel) || list[0];
    if (!ev) return;

    if (ev.category === "scooter") {
      container.innerHTML = window.VEHICLE_GRAPHICS.getScooterSVG(this.activeHeroColor);
    } else if (ev.category === "bike") {
      container.innerHTML = window.VEHICLE_GRAPHICS.getMotorcycleSVG(this.activeHeroColor);
    } else {
      container.innerHTML = window.VEHICLE_GRAPHICS.getCycleSVG(this.activeHeroColor);
    }
  },

  // ==================== BHARAT FLEET CATALOG RENDERING ====================
  getFilteredProducts: function() {
    const list = window.BHARAT_VEHICLES || window.EV_CATALOG || [];

    return list.filter(ev => {
      if (this.selectedCategory !== "all" && ev.category !== this.selectedCategory) return false;
      if (this.searchQuery) {
        const q = this.searchQuery.toLowerCase();
        const matchesName = ev.name.toLowerCase().includes(q);
        const matchesTag = ev.tagline.toLowerCase().includes(q);
        const matchesMotor = ev.motorName?.toLowerCase().includes(q);
        if (!matchesName && !matchesTag && !matchesMotor) return false;
      }
      if (ev.exShowroomPrice > this.maxPrice) return false;
      if (ev.certifiedRange < this.minRange) return false;
      if (this.removableBatteryOnly && !ev.batteryRemovable) return false;
      return true;
    });
  },

  renderCatalog: function() {
    const grid = document.getElementById("ev-products-grid");
    const countEl = document.getElementById("catalog-results-count");
    if (!grid) return;

    const products = this.getFilteredProducts();

    if (countEl) {
      countEl.textContent = `Displaying ${products.length} Bharat Signature Models`;
    }

    if (products.length === 0) {
      grid.innerHTML = `
        <div class="col-span-full py-16 text-center">
          <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-slate-800 flex items-center justify-center text-slate-500 text-2xl font-black">
            ⚡
          </div>
          <h3 class="text-lg font-bold text-white">No Models Matched Your Filter</h3>
          <p class="text-sm text-slate-400 max-w-md mx-auto mt-1">Try resetting your filter parameters to browse the complete Bharat electric fleet.</p>
          <button onclick="App.resetFilters()" class="mt-4 px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl transition-colors">
            Reset Filters
          </button>
        </div>
      `;
      return;
    }

    grid.innerHTML = products.map(ev => this.renderProductCard(ev)).join("");
  },

  renderProductCard: function(ev) {
    const isComparing = this.selectedForCompare.includes(ev.id);
    const primaryColor = ev.colors && ev.colors.length > 0 ? ev.colors[0].hex : (ev.accentColor || "#10B981");

    const onRoadEst = (ev.exShowroomPrice - ev.subsidy + ev.rtoCharges + ev.insurance);

    let vehicleSVG = "";
    if (window.VEHICLE_GRAPHICS) {
      if (ev.category === "scooter") vehicleSVG = window.VEHICLE_GRAPHICS.getScooterSVG(primaryColor);
      else if (ev.category === "bike") vehicleSVG = window.VEHICLE_GRAPHICS.getMotorcycleSVG(primaryColor);
      else vehicleSVG = window.VEHICLE_GRAPHICS.getCycleSVG(primaryColor);
    }

    return `
      <div class="product-card group relative bg-slate-900/95 border border-slate-800 hover:border-emerald-500/50 rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10">
        
        <div>
          <!-- Header Badges -->
          <div class="flex items-start justify-between gap-2 mb-3">
            <div>
              <span class="text-[10px] font-black uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-0.5 rounded-full inline-block">
                ${ev.series || 'Bharat EV'}
              </span>
              <h3 class="font-black text-white text-xl mt-1 tracking-tight group-hover:text-emerald-400 transition-colors">
                ${ev.name}
              </h3>
            </div>
            <div class="flex flex-col items-end gap-1">
              <span class="text-[10px] font-bold px-2.5 py-0.5 rounded-md ${
                ev.badge === "Flagship Performance" || ev.badge === "Electric Superbike" ? "bg-amber-500/20 text-amber-300 border border-amber-500/30" :
                ev.badge === "Removable Battery" ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30" :
                "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
              }">
                ${ev.badge}
              </span>
              ${ev.batteryRemovable ? `
                <span class="text-[10px] font-semibold text-teal-300 bg-teal-950/60 px-2 py-0.5 rounded border border-teal-800/60 flex items-center gap-1" title="Portable battery you can charge in your room">
                  ⚡ Detachable Pack
                </span>
              ` : ''}
            </div>
          </div>

          <p class="text-xs text-slate-400 line-clamp-2 mb-4 leading-relaxed">
            ${ev.tagline}
          </p>

          <!-- Interactive Vehicle Visual Canvas -->
          <div class="relative bg-slate-950/90 rounded-2xl p-4 border border-slate-800/80 group-hover:border-slate-700/80 transition-colors mb-5 overflow-hidden">
            <div id="svg-container-${ev.id}" class="w-full h-44 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              ${vehicleSVG}
            </div>

            <!-- Color Swatches -->
            <div class="absolute bottom-3 right-3 flex items-center gap-1.5 bg-slate-900/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-slate-800">
              ${ev.colors.map((c, i) => `
                <button 
                  onclick="App.changeCardVehicleColor('${ev.id}', '${c.hex}')" 
                  title="${c.name}"
                  class="w-4 h-4 rounded-full border border-white/30 hover:scale-125 transition-transform ${i === 0 ? 'ring-2 ring-emerald-400' : ''}" 
                  style="background-color: ${c.hex}">
                </button>
              `).join("")}
            </div>

            <div class="absolute top-3 left-3">
              <span class="text-[10px] font-mono font-bold text-slate-300 bg-slate-900/90 px-2 py-0.5 rounded border border-slate-800">
                ${ev.acceleration}
              </span>
            </div>
          </div>

          <!-- Essential 4 Specs Grid -->
          <div class="grid grid-cols-2 gap-2.5 mb-4">
            <div class="bg-slate-800/50 rounded-xl p-2.5 border border-slate-700/40">
              <span class="text-[10px] text-slate-400 block font-medium">Certified Range</span>
              <div class="flex items-baseline gap-1 mt-0.5">
                <span class="text-lg font-black text-emerald-400">${ev.certifiedRange}</span>
                <span class="text-[10px] font-semibold text-slate-400">km / charge</span>
              </div>
            </div>

            <div class="bg-slate-800/50 rounded-xl p-2.5 border border-slate-700/40">
              <span class="text-[10px] text-slate-400 block font-medium">Top Speed</span>
              <div class="flex items-baseline gap-1 mt-0.5">
                <span class="text-lg font-black text-cyan-400">${ev.topSpeed}</span>
                <span class="text-[10px] font-semibold text-slate-400">km/h</span>
              </div>
            </div>

            <div class="bg-slate-800/50 rounded-xl p-2.5 border border-slate-700/40">
              <span class="text-[10px] text-slate-400 block font-medium">Bharat PowerCell™</span>
              <div class="flex items-baseline gap-1 mt-0.5">
                <span class="text-sm font-black text-white">${ev.batteryCapacity}</span>
                <span class="text-[10px] font-semibold text-slate-400">kWh</span>
              </div>
            </div>

            <div class="bg-slate-800/50 rounded-xl p-2.5 border border-slate-700/40">
              <span class="text-[10px] text-slate-400 block font-medium">HyperDrive Motor</span>
              <div class="flex items-baseline gap-1 mt-0.5">
                <span class="text-sm font-black text-white">${ev.motorPower.split(' ')[0]}</span>
                <span class="text-[10px] font-semibold text-slate-400">${ev.motorPower.includes('kW') ? 'kW' : 'W'}</span>
              </div>
            </div>
          </div>

          <!-- Warranty & Motor Tag -->
          <div class="flex items-center justify-between text-[11px] text-slate-300 bg-slate-950/60 border border-slate-800 rounded-xl p-2.5 mb-4">
            <span class="text-slate-400">Motor: <strong class="text-white">${ev.motorName}</strong></span>
            <span class="text-emerald-400 font-bold">${ev.warrantyBattery.split('(')[0]}</span>
          </div>

          <!-- Price & Subsidy Section -->
          <div class="border-t border-slate-800/80 pt-3.5 mb-4">
            <div class="flex items-baseline justify-between">
              <div>
                <span class="text-[10px] uppercase font-bold text-slate-400 block">Ex-Showroom Factory Price</span>
                <span class="text-2xl font-black text-white tracking-tight">
                  ${Calculators.formatINR(ev.exShowroomPrice)}
                </span>
              </div>
              <div class="text-right">
                <span class="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  Instant Subsidy: -${Calculators.formatINR(ev.subsidy)}
                </span>
                <div class="text-[11px] text-slate-400 mt-1">
                  Est. Net On-Road: <strong class="text-white">${Calculators.formatINR(onRoadEst)}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Action CTAs -->
        <div class="space-y-2 pt-2 border-t border-slate-800/80">
          <div class="grid grid-cols-2 gap-2">
            <button 
              onclick="App.openProductModal('${ev.id}')"
              class="w-full py-2.5 px-3 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-1.5 border border-slate-700/60">
              Tech Specs
            </button>

            <button 
              onclick="BookingEngine.openTestRideModal('${ev.id}')"
              class="w-full py-2.5 px-3 bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-black rounded-xl text-xs transition-all shadow-md shadow-emerald-500/20 flex items-center justify-center gap-1">
              ⚡ Test Ride
            </button>
          </div>

          <div class="flex items-center justify-between pt-1">
            <button 
              onclick="Calculators.setEmiFromProduct('${ev.id}')"
              class="text-[11px] font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1">
              Calculate EMI &rarr;
            </button>

            <label class="inline-flex items-center gap-1.5 cursor-pointer text-[11px] font-medium text-slate-400 hover:text-slate-200">
              <input 
                type="checkbox" 
                ${isComparing ? 'checked' : ''}
                onchange="App.toggleCompare('${ev.id}')"
                class="rounded border-slate-700 bg-slate-900 text-emerald-500 focus:ring-0 w-3.5 h-3.5">
              <span>Compare</span>
            </label>
          </div>
        </div>

      </div>
    `;
  },

  changeCardVehicleColor: function(evId, hexColor) {
    const list = window.BHARAT_VEHICLES || [];
    const ev = list.find(item => item.id === evId);
    const container = document.getElementById(`svg-container-${evId}`);
    if (!ev || !container || !window.VEHICLE_GRAPHICS) return;

    if (ev.category === "scooter") container.innerHTML = window.VEHICLE_GRAPHICS.getScooterSVG(hexColor);
    else if (ev.category === "bike") container.innerHTML = window.VEHICLE_GRAPHICS.getMotorcycleSVG(hexColor);
    else container.innerHTML = window.VEHICLE_GRAPHICS.getCycleSVG(hexColor);
  },

  // ==================== BHARAT MOTORS & POWERTRAIN SECTION ====================
  renderMotorTech: function() {
    const container = document.getElementById("bharat-motors-container");
    const diagramContainer = document.getElementById("motor-diagram-canvas");
    if (!container || !window.BHARAT_MOTOR_TECH) return;

    if (diagramContainer && window.VEHICLE_GRAPHICS?.getMotorDiagramSVG) {
      diagramContainer.innerHTML = window.VEHICLE_GRAPHICS.getMotorDiagramSVG();
    }

    container.innerHTML = window.BHARAT_MOTOR_TECH.map(m => `
      <div class="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 hover:border-emerald-500/50 transition-all flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-3">
            <span class="text-2xl">${m.icon}</span>
            <span class="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
              ${m.efficiency}
            </span>
          </div>
          <h3 class="text-xl font-black text-white">${m.name}</h3>
          <span class="text-xs text-slate-400 block mb-3">${m.type}</span>

          <div class="grid grid-cols-2 gap-2 text-xs mb-4">
            <div class="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
              <span class="text-[10px] text-slate-500 block">Peak Power</span>
              <strong class="text-white text-xs">${m.powerRange}</strong>
            </div>
            <div class="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
              <span class="text-[10px] text-slate-500 block">Instant Torque</span>
              <strong class="text-cyan-400 text-xs">${m.torque}</strong>
            </div>
          </div>

          <ul class="space-y-1.5 text-xs text-slate-300">
            ${m.features.map(f => `
              <li class="flex items-start gap-2">
                <span class="text-emerald-400 font-bold">✓</span>
                <span>${f}</span>
              </li>
            `).join("")}
          </ul>
        </div>

        <div class="mt-5 pt-3 border-t border-slate-800 text-[11px] text-slate-400">
          <strong>Application:</strong> ${m.application}
        </div>
      </div>
    `).join("");
  },

  // ==================== FILTER CONTROLS ====================
  initFilterEvents: function() {
    const catButtons = document.querySelectorAll(".category-tab-btn");
    catButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        catButtons.forEach(b => {
          b.classList.remove("active", "bg-emerald-500", "text-slate-950", "font-black");
          b.classList.add("bg-slate-800/80", "text-slate-300");
        });
        btn.classList.add("active", "bg-emerald-500", "text-slate-950", "font-black");
        btn.classList.remove("bg-slate-800/80", "text-slate-300");
        this.selectedCategory = btn.getAttribute("data-category");
        this.renderCatalog();
      });
    });

    const searchInput = document.getElementById("catalog-search-input");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        this.searchQuery = e.target.value.trim();
        this.renderCatalog();
      });
    }

    const priceSlider = document.getElementById("filter-price-slider");
    const priceDisplay = document.getElementById("filter-price-display");
    if (priceSlider) {
      priceSlider.addEventListener("input", (e) => {
        this.maxPrice = parseFloat(e.target.value);
        if (priceDisplay && window.Calculators) {
          priceDisplay.textContent = `Up to ${Calculators.formatINR(this.maxPrice)}`;
        }
        this.renderCatalog();
      });
    }

    const rangeSlider = document.getElementById("filter-range-slider");
    const rangeDisplay = document.getElementById("filter-range-display");
    if (rangeSlider) {
      rangeSlider.addEventListener("input", (e) => {
        this.minRange = parseInt(e.target.value);
        if (rangeDisplay) {
          rangeDisplay.textContent = `Min ${this.minRange} km`;
        }
        this.renderCatalog();
      });
    }

    const removableCheck = document.getElementById("filter-removable-toggle");
    if (removableCheck) {
      removableCheck.addEventListener("change", (e) => {
        this.removableBatteryOnly = e.target.checked;
        this.renderCatalog();
      });
    }
  },

  resetFilters: function() {
    this.selectedCategory = "all";
    this.searchQuery = "";
    this.maxPrice = 200000;
    this.minRange = 0;
    this.removableBatteryOnly = false;

    const searchInput = document.getElementById("catalog-search-input");
    if (searchInput) searchInput.value = "";
    const priceSlider = document.getElementById("filter-price-slider");
    if (priceSlider) {
      priceSlider.value = 200000;
      document.getElementById("filter-price-display").textContent = "Up to ₹2,00,000";
    }
    const rangeSlider = document.getElementById("filter-range-slider");
    if (rangeSlider) {
      rangeSlider.value = 0;
      document.getElementById("filter-range-display").textContent = "Min 0 km";
    }
    const removableCheck = document.getElementById("filter-removable-toggle");
    if (removableCheck) removableCheck.checked = false;

    document.querySelectorAll(".category-tab-btn").forEach(b => {
      b.classList.remove("active", "bg-emerald-500", "text-slate-950", "font-black");
      b.classList.add("bg-slate-800/80", "text-slate-300");
      if (b.getAttribute("data-category") === "all") {
        b.classList.add("active", "bg-emerald-500", "text-slate-950", "font-black");
        b.classList.remove("bg-slate-800/80", "text-slate-300");
      }
    });

    this.renderCatalog();
  },

  // ==================== PRODUCT DETAIL SPEC MODAL ====================
  openProductModal: function(productId) {
    const list = window.BHARAT_VEHICLES || [];
    const ev = list.find(item => item.id === productId);
    const modal = document.getElementById("product-detail-modal");
    const container = document.getElementById("product-detail-container");
    if (!ev || !modal || !container) return;

    const primaryColor = ev.colors && ev.colors.length > 0 ? ev.colors[0].hex : (ev.accentColor || "#10B981");
    let modalSVG = "";
    if (window.VEHICLE_GRAPHICS) {
      if (ev.category === "scooter") modalSVG = window.VEHICLE_GRAPHICS.getScooterSVG(primaryColor);
      else if (ev.category === "bike") modalSVG = window.VEHICLE_GRAPHICS.getMotorcycleSVG(primaryColor);
      else modalSVG = window.VEHICLE_GRAPHICS.getCycleSVG(primaryColor);
    }

    const netOnRoad = (ev.exShowroomPrice - ev.subsidy + ev.rtoCharges + ev.insurance);

    container.innerHTML = `
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        <!-- Left: Visual & Interactive Swatches -->
        <div class="lg:col-span-5 flex flex-col justify-between">
          <div class="bg-slate-950/90 border border-slate-800 rounded-2xl p-6 relative overflow-hidden flex flex-col items-center">
            <div class="w-full flex items-center justify-between mb-2">
              <span class="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                ${ev.series}
              </span>
              <span class="text-xs font-semibold text-slate-300 bg-slate-800 px-2.5 py-1 rounded-md">
                ${ev.category.toUpperCase()}
              </span>
            </div>

            <div id="modal-svg-canvas" class="w-full h-56 flex items-center justify-center my-4">
              ${modalSVG}
            </div>

            <div class="w-full flex items-center justify-between pt-3 border-t border-slate-800">
              <span class="text-xs text-slate-400 font-medium">Select Signature Color:</span>
              <div class="flex items-center gap-2">
                ${ev.colors.map(c => `
                  <button 
                    onclick="App.changeModalVehicleColor('${ev.id}', '${c.hex}')" 
                    title="${c.name}"
                    class="w-5 h-5 rounded-full border-2 border-slate-700 hover:scale-125 transition-transform" 
                    style="background-color: ${c.hex}">
                  </button>
                `).join("")}
              </div>
            </div>
          </div>

          <!-- Price & Subsidy Breakdown -->
          <div class="mt-4 bg-slate-900/90 border border-slate-800 rounded-2xl p-4">
            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2.5 flex items-center gap-1.5">
              Transparent On-Road Pricing
            </h4>

            <div class="space-y-1.5 text-xs">
              <div class="flex justify-between py-1 border-b border-slate-800 text-slate-300">
                <span>Ex-Showroom Price:</span>
                <span class="font-bold text-white">${Calculators.formatINR(ev.exShowroomPrice)}</span>
              </div>
              <div class="flex justify-between py-1 border-b border-slate-800 text-emerald-400 font-medium">
                <span>Direct Central & State EV Subsidy:</span>
                <span>-${Calculators.formatINR(ev.subsidy)}</span>
              </div>
              <div class="flex justify-between py-1 border-b border-slate-800 text-slate-300">
                <span>State Road Tax (EV Green Waiver):</span>
                <span class="text-emerald-400 font-semibold">₹0 (100% Tax Exempt)</span>
              </div>
              <div class="flex justify-between py-1 border-b border-slate-800 text-slate-300">
                <span>RTO Green Plate & Registration:</span>
                <span>${Calculators.formatINR(ev.rtoCharges)}</span>
              </div>
              <div class="flex justify-between py-1 border-b border-slate-800 text-slate-300">
                <span>5-Year Comprehensive Insurance:</span>
                <span>${Calculators.formatINR(ev.insurance)}</span>
              </div>
              <div class="flex justify-between pt-2 text-sm font-black text-white">
                <span class="text-emerald-400">Total Subsidized On-Road:</span>
                <span class="text-base text-emerald-400">${Calculators.formatINR(netOnRoad)}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Technical Specifications -->
        <div class="lg:col-span-7 flex flex-col justify-between">
          <div>
            <h2 class="text-3xl font-black text-white tracking-tight">${ev.name}</h2>
            <p class="text-xs text-slate-400 mt-1">${ev.description}</p>

            <!-- Highlights -->
            <div class="grid grid-cols-4 gap-2.5 my-4">
              <div class="bg-slate-950/80 border border-slate-800 rounded-xl p-2.5 text-center">
                <span class="text-[10px] text-slate-400 uppercase font-bold block">Range</span>
                <span class="text-lg font-black text-emerald-400">${ev.certifiedRange}</span>
                <span class="text-[10px] text-slate-500 block">km</span>
              </div>
              <div class="bg-slate-950/80 border border-slate-800 rounded-xl p-2.5 text-center">
                <span class="text-[10px] text-slate-400 uppercase font-bold block">Speed</span>
                <span class="text-lg font-black text-cyan-400">${ev.topSpeed}</span>
                <span class="text-[10px] text-slate-500 block">km/h</span>
              </div>
              <div class="bg-slate-950/80 border border-slate-800 rounded-xl p-2.5 text-center">
                <span class="text-[10px] text-slate-400 uppercase font-bold block">Battery</span>
                <span class="text-lg font-black text-white">${ev.batteryCapacity}</span>
                <span class="text-[10px] text-slate-500 block">kWh</span>
              </div>
              <div class="bg-slate-950/80 border border-slate-800 rounded-xl p-2.5 text-center">
                <span class="text-[10px] text-slate-400 uppercase font-bold block">Torque</span>
                <span class="text-lg font-black text-white">${ev.motorTorque}</span>
              </div>
            </div>

            <!-- Detailed Specifications Grid -->
            <div class="space-y-3 mt-4 text-xs">
              <div class="bg-slate-950/60 rounded-xl p-3 border border-slate-800">
                <h4 class="font-bold text-emerald-400 uppercase tracking-wider text-[11px] mb-2">Bharat PowerCell™ Battery & Charging</h4>
                <div class="grid grid-cols-2 gap-2 text-slate-300">
                  <div><strong>Chemistry:</strong> ${ev.batteryType}</div>
                  <div><strong>Removable:</strong> ${ev.batteryRemovable ? 'Yes, Portable Detachable' : 'Integrated Pack'}</div>
                  <div><strong>Standard Home Charging:</strong> ${ev.chargingTimeStandard}</div>
                  <div><strong>Fast Charging:</strong> ${ev.chargingTimeFast}</div>
                  <div><strong>Real-World Range:</strong> ${ev.realWorldRange} km</div>
                  <div><strong>Water Resistance:</strong> IP67 Sealed Pack</div>
                </div>
              </div>

              <div class="bg-slate-950/60 rounded-xl p-3 border border-slate-800">
                <h4 class="font-bold text-cyan-400 uppercase tracking-wider text-[11px] mb-2">Bharat HyperDrive™ Motor & Transmission</h4>
                <div class="grid grid-cols-2 gap-2 text-slate-300">
                  <div><strong>Motor Model:</strong> ${ev.motorName}</div>
                  <div><strong>Peak Power:</strong> ${ev.motorPower}</div>
                  <div><strong>Motor Type:</strong> ${ev.motorType}</div>
                  <div><strong>Riding Modes:</strong> ${ev.ridingModes ? ev.ridingModes.join(', ') : 'Eco, Sport'}</div>
                  <div><strong>Payload Capacity:</strong> ${ev.carryingCapacity} kg</div>
                  <div><strong>Kerb Weight:</strong> ${ev.kerbWeight} kg</div>
                </div>
              </div>

              <div class="bg-slate-950/60 rounded-xl p-3 border border-slate-800">
                <h4 class="font-bold text-amber-400 uppercase tracking-wider text-[11px] mb-2">Warranty & Support</h4>
                <div class="grid grid-cols-2 gap-2 text-slate-300">
                  <div><strong>Battery Warranty:</strong> <span class="text-emerald-400 font-semibold">${ev.warrantyBattery}</span></div>
                  <div><strong>Vehicle Warranty:</strong> <span class="text-emerald-400 font-semibold">${ev.warrantyVehicle}</span></div>
                  <div><strong>Braking System:</strong> ${ev.brakes}</div>
                  <div><strong>Suspension:</strong> ${ev.suspension}</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Modal Action Bar -->
          <div class="mt-6 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <button 
              onclick="App.closeProductModal(); Calculators.setEmiFromProduct('${ev.id}');"
              class="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-cyan-400 rounded-xl text-xs font-bold border border-slate-700 transition-colors">
              Calculate Loan EMI
            </button>

            <div class="flex items-center gap-2">
              <a 
                href="https://wa.me/918009579794?text=Hi%20Bharat%20Electric%20Motors,%20I%20am%20interested%20in%20${encodeURIComponent(ev.name)}.%20Please%20share%20quotation%20with%20subsidy."
                target="_blank"
                class="px-4 py-2.5 bg-emerald-600/30 hover:bg-emerald-600/50 text-emerald-300 rounded-xl text-xs font-bold border border-emerald-500/40 transition-colors">
                WhatsApp Quote
              </a>

              <button 
                onclick="App.closeProductModal(); BookingEngine.openTestRideModal('${ev.id}');"
                class="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black rounded-xl text-xs transition-colors shadow-lg shadow-emerald-500/20">
                ⚡ Book Free Test Ride
              </button>
            </div>
          </div>
        </div>

      </div>
    `;

    modal.classList.remove("hidden");
    document.body.classList.add("modal-open");
  },

  changeModalVehicleColor: function(evId, hexColor) {
    const list = window.BHARAT_VEHICLES || [];
    const ev = list.find(item => item.id === evId);
    const canvas = document.getElementById("modal-svg-canvas");
    if (!ev || !canvas || !window.VEHICLE_GRAPHICS) return;

    if (ev.category === "scooter") canvas.innerHTML = window.VEHICLE_GRAPHICS.getScooterSVG(hexColor);
    else if (ev.category === "bike") canvas.innerHTML = window.VEHICLE_GRAPHICS.getMotorcycleSVG(hexColor);
    else canvas.innerHTML = window.VEHICLE_GRAPHICS.getCycleSVG(hexColor);
  },

  closeProductModal: function() {
    const modal = document.getElementById("product-detail-modal");
    if (modal) {
      modal.classList.add("hidden");
      document.body.classList.remove("modal-open");
    }
  },

  // ==================== SIDE-BY-SIDE COMPARISON ====================
  toggleCompare: function(productId) {
    const index = this.selectedForCompare.indexOf(productId);
    if (index > -1) {
      this.selectedForCompare.splice(index, 1);
    } else {
      if (this.selectedForCompare.length >= 3) {
        alert("You can compare up to 3 Bharat EV models side-by-side.");
        this.renderCatalog();
        return;
      }
      this.selectedForCompare.push(productId);
    }
    this.renderCompareDock();
    this.renderCatalog();
  },

  renderCompareDock: function() {
    const dock = document.getElementById("compare-dock");
    const countEl = document.getElementById("compare-count");
    const thumbsContainer = document.getElementById("compare-dock-thumbs");
    if (!dock) return;

    if (this.selectedForCompare.length > 0) {
      dock.classList.remove("hidden");
      if (countEl) countEl.textContent = this.selectedForCompare.length;

      if (thumbsContainer) {
        const list = window.BHARAT_VEHICLES || [];
        thumbsContainer.innerHTML = this.selectedForCompare.map(id => {
          const ev = list.find(m => m.id === id);
          return `
            <div class="flex items-center gap-1.5 bg-slate-800 px-2.5 py-1 rounded-lg text-xs text-slate-200 border border-slate-700">
              <span class="font-bold truncate max-w-[120px]">${ev.name}</span>
              <button onclick="App.toggleCompare('${ev.id}')" class="text-slate-400 hover:text-rose-400 font-black ml-1">&times;</button>
            </div>
          `;
        }).join("");
      }
    } else {
      dock.classList.add("hidden");
    }
  },

  openCompareModal: function() {
    const modal = document.getElementById("compare-modal");
    const container = document.getElementById("compare-table-container");
    const list = window.BHARAT_VEHICLES || [];
    if (!modal || !container || this.selectedForCompare.length === 0) return;

    const models = this.selectedForCompare.map(id => list.find(m => m.id === id));

    container.innerHTML = `
      <div class="overflow-x-auto">
        <table class="w-full text-left text-xs border-collapse">
          <thead>
            <tr class="border-b border-slate-800 bg-slate-950/80">
              <th class="p-3 text-slate-400 font-bold uppercase tracking-wider w-48">Specification</th>
              ${models.map(m => `
                <th class="p-3 font-extrabold text-white text-sm">
                  <div class="text-emerald-400 text-[10px] uppercase">${m.series}</div>
                  <div>${m.name}</div>
                  <div class="text-xs text-slate-400 font-normal mt-0.5">${Calculators.formatINR(m.exShowroomPrice)}</div>
                </th>
              `).join("")}
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-800/60">
            <tr>
              <td class="p-3 font-semibold text-slate-400 bg-slate-950/30">Category</td>
              ${models.map(m => `<td class="p-3 text-white uppercase font-bold">${m.category}</td>`).join("")}
            </tr>
            <tr>
              <td class="p-3 font-semibold text-slate-400 bg-slate-950/30">Certified Range</td>
              ${models.map(m => `<td class="p-3 text-emerald-400 font-black text-sm">${m.certifiedRange} km</td>`).join("")}
            </tr>
            <tr>
              <td class="p-3 font-semibold text-slate-400 bg-slate-950/30">Real-World City Range</td>
              ${models.map(m => `<td class="p-3 text-slate-200">${m.realWorldRange} km</td>`).join("")}
            </tr>
            <tr>
              <td class="p-3 font-semibold text-slate-400 bg-slate-950/30">Top Speed</td>
              ${models.map(m => `<td class="p-3 text-cyan-400 font-bold text-sm">${m.topSpeed} km/h</td>`).join("")}
            </tr>
            <tr>
              <td class="p-3 font-semibold text-slate-400 bg-slate-950/30">PowerCell™ Capacity</td>
              ${models.map(m => `<td class="p-3 text-white font-bold">${m.batteryCapacity} kWh</td>`).join("")}
            </tr>
            <tr>
              <td class="p-3 font-semibold text-slate-400 bg-slate-950/30">Detachable / Portable</td>
              ${models.map(m => `
                <td class="p-3 font-medium ${m.batteryRemovable ? 'text-teal-400 font-bold' : 'text-slate-400'}">
                  ${m.batteryRemovable ? '✓ Removable Packs' : 'Fixed Floorboard Pack'}
                </td>
              `).join("")}
            </tr>
            <tr>
              <td class="p-3 font-semibold text-slate-400 bg-slate-950/30">HyperDrive Motor</td>
              ${models.map(m => `<td class="p-3 text-slate-200">${m.motorName} (${m.motorPower})</td>`).join("")}
            </tr>
            <tr>
              <td class="p-3 font-semibold text-slate-400 bg-slate-950/30">Battery Warranty</td>
              ${models.map(m => `<td class="p-3 text-emerald-300 font-semibold">${m.warrantyBattery}</td>`).join("")}
            </tr>
            <tr>
              <td class="p-3 font-semibold text-slate-400 bg-slate-950/30">Subsidy Deduction</td>
              ${models.map(m => `<td class="p-3 text-emerald-400 font-bold">-${Calculators.formatINR(m.subsidy)}</td>`).join("")}
            </tr>
            <tr>
              <td class="p-3 font-semibold text-slate-400 bg-slate-950/30">Estimated Net On-Road</td>
              ${models.map(m => `
                <td class="p-3 text-white font-extrabold text-sm">
                  ${Calculators.formatINR(m.exShowroomPrice - m.subsidy + m.rtoCharges + m.insurance)}
                </td>
              `).join("")}
            </tr>
            <tr>
              <td class="p-3 font-semibold text-slate-400 bg-slate-950/30">Action</td>
              ${models.map(m => `
                <td class="p-3">
                  <button onclick="App.closeCompareModal(); BookingEngine.openTestRideModal('${m.id}')" class="px-3.5 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl text-xs transition-colors">
                    Test Ride
                  </button>
                </td>
              `).join("")}
            </tr>
          </tbody>
        </table>
      </div>
    `;

    modal.classList.remove("hidden");
    document.body.classList.add("modal-open");
  },

  closeCompareModal: function() {
    const modal = document.getElementById("compare-modal");
    if (modal) {
      modal.classList.add("hidden");
      document.body.classList.remove("modal-open");
    }
  },

  clearCompare: function() {
    this.selectedForCompare = [];
    this.renderCompareDock();
    this.renderCatalog();
    this.closeCompareModal();
  },

  // ==================== DEALERSHIP TABS ====================
  initDealershipTabs: function() {
    const flagshipBtn = document.getElementById("branch-tab-flagship");
    const serviceBtn = document.getElementById("branch-tab-service");
    const flagshipView = document.getElementById("branch-view-flagship");
    const serviceView = document.getElementById("branch-view-service");

    if (!flagshipBtn || !serviceBtn) return;

    flagshipBtn.addEventListener("click", () => {
      flagshipBtn.classList.add("bg-emerald-500", "text-slate-950", "font-bold");
      flagshipBtn.classList.remove("bg-slate-800", "text-slate-300");
      serviceBtn.classList.remove("bg-emerald-500", "text-slate-950", "font-bold");
      serviceBtn.classList.add("bg-slate-800", "text-slate-300");
      if (flagshipView) flagshipView.classList.remove("hidden");
      if (serviceView) serviceView.classList.add("hidden");
    });

    serviceBtn.addEventListener("click", () => {
      serviceBtn.classList.add("bg-emerald-500", "text-slate-950", "font-bold");
      serviceBtn.classList.remove("bg-slate-800", "text-slate-300");
      flagshipBtn.classList.remove("bg-emerald-500", "text-slate-950", "font-bold");
      flagshipBtn.classList.add("bg-slate-800", "text-slate-300");
      if (serviceView) serviceView.classList.remove("hidden");
      if (flagshipView) flagshipView.classList.add("hidden");
    });
  },

  // ==================== FAQ ACCORDIONS ====================
  initFaqEvents: function() {
    const container = document.getElementById("faq-accordion-list");
    const faqs = window.BHARAT_FAQS || window.EV_FAQS || [];
    if (!container || faqs.length === 0) return;

    container.innerHTML = faqs.map((faq, i) => `
      <div class="faq-item border border-slate-800/90 rounded-2xl bg-slate-900/60 overflow-hidden transition-colors">
        <button 
          onclick="App.toggleFaq(${i})" 
          class="w-full p-4 md:p-5 text-left flex items-center justify-between gap-4 focus:outline-none hover:bg-slate-800/60">
          <span class="font-bold text-white text-sm md:text-base flex items-center gap-3">
            <span class="w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-xs font-mono font-bold shrink-0">
              Q${i + 1}
            </span>
            ${faq.question}
          </span>
          <svg id="faq-chevron-${i}" class="w-5 h-5 text-slate-400 transition-transform duration-200 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
          </svg>
        </button>
        <div id="faq-content-${i}" class="hidden p-4 md:p-5 pt-0 text-slate-300 text-xs md:text-sm leading-relaxed border-t border-slate-800/40">
          <p class="pt-2">${faq.answer}</p>
        </div>
      </div>
    `).join("");
  },

  toggleFaq: function(index) {
    const content = document.getElementById(`faq-content-${index}`);
    const chevron = document.getElementById(`faq-chevron-${index}`);
    if (!content) return;

    const isHidden = content.classList.contains("hidden");
    content.classList.toggle("hidden");

    if (chevron) {
      chevron.style.transform = isHidden ? "rotate(180deg)" : "rotate(0deg)";
    }
  },

  initModalEvents: function() {
    window.addEventListener("click", (e) => {
      const prodModal = document.getElementById("product-detail-modal");
      const rideModal = document.getElementById("test-ride-modal");
      const compareModal = document.getElementById("compare-modal");
      const ticketModal = document.getElementById("confirmation-ticket-modal");
      const invoiceModal = document.getElementById("invoice-generator-modal");

      if (e.target === prodModal) App.closeProductModal();
      if (e.target === rideModal && window.BookingEngine) window.BookingEngine.closeTestRideModal();
      if (e.target === compareModal) App.closeCompareModal();
      if (e.target === ticketModal && window.BookingEngine) window.BookingEngine.closeTicketModal();
      if (e.target === invoiceModal && window.InvoiceGenerator) window.InvoiceGenerator.closeModal();
    });

    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        App.closeProductModal();
        App.closeCompareModal();
        if (window.BookingEngine) {
          window.BookingEngine.closeTestRideModal();
          window.BookingEngine.closeTicketModal();
          window.BookingEngine.closeMyBookingsDrawer();
        }
        if (window.InvoiceGenerator) {
          window.InvoiceGenerator.closeModal();
        }
      }
    });
  },

  initStickyNav: function() {
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    const mobileMenu = document.getElementById("mobile-menu-drawer");
    const closeMobileMenu = document.getElementById("close-mobile-menu-btn");

    if (mobileMenuBtn && mobileMenu) {
      mobileMenuBtn.addEventListener("click", () => mobileMenu.classList.remove("hidden"));
    }
    if (closeMobileMenu && mobileMenu) {
      closeMobileMenu.addEventListener("click", () => mobileMenu.classList.add("hidden"));
    }

    document.querySelectorAll(".mobile-nav-link").forEach(link => {
      link.addEventListener("click", () => {
        if (mobileMenu) mobileMenu.classList.add("hidden");
      });
    });
  }
};

document.addEventListener("DOMContentLoaded", () => {
  App.init();
});

if (typeof window !== "undefined") {
  window.App = App;
}
