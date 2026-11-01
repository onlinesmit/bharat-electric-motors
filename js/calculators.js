/**
 * Bharat Electric Motors - Interactive Decision Tools
 * 1. Smart EMI Calculator (Direct Bank Loans at 6.99% p.a.)
 * 2. Fuel vs Bharat EV Savings Calculator (with CO2 & Tree Impact)
 * 3. Old Petrol Vehicle Exchange Evaluator (+₹3,000 Bharat Green Bonus)
 */

const Calculators = {
  formatINR: function(num) {
    if (isNaN(num)) return "₹0";
    return "₹" + Math.round(num).toLocaleString('en-IN');
  },

  // ==================== 1. SMART EMI CALCULATOR ====================
  initEmiCalculator: function() {
    const modelSelect = document.getElementById("emi-vehicle-select");
    const priceInput = document.getElementById("emi-price-input");
    const dpSlider = document.getElementById("emi-dp-slider");
    const tenureSlider = document.getElementById("emi-tenure-slider");
    const rateSlider = document.getElementById("emi-rate-slider");

    if (!priceInput || !dpSlider || !tenureSlider || !rateSlider) return;

    // Populate model select
    const list = window.BHARAT_VEHICLES || window.EV_CATALOG || [];
    if (modelSelect && list.length > 0) {
      modelSelect.innerHTML = `<option value="custom">-- Custom Price / Select Bharat Model --</option>` +
        list.map(ev => `
          <option value="${ev.id}" data-price="${ev.exShowroomPrice}">
            ${ev.name} (${Calculators.formatINR(ev.exShowroomPrice)})
          </option>
        `).join("");

      modelSelect.addEventListener("change", (e) => {
        const selectedId = e.target.value;
        if (selectedId !== "custom") {
          const ev = list.find(item => item.id === selectedId);
          if (ev) {
            priceInput.value = ev.exShowroomPrice;
            dpSlider.max = Math.round(ev.exShowroomPrice * 0.8);
            dpSlider.value = Math.round(ev.exShowroomPrice * 0.2);
            Calculators.calculateEMI();
          }
        }
      });
    }

    const triggerRecalc = () => Calculators.calculateEMI();

    priceInput.addEventListener("input", () => {
      const p = parseFloat(priceInput.value) || 40000;
      dpSlider.max = Math.round(p * 0.85);
      if (parseFloat(dpSlider.value) > p * 0.85) {
        dpSlider.value = Math.round(p * 0.2);
      }
      triggerRecalc();
    });

    dpSlider.addEventListener("input", triggerRecalc);
    tenureSlider.addEventListener("input", triggerRecalc);
    rateSlider.addEventListener("input", triggerRecalc);

    // Initial calculation
    Calculators.calculateEMI();
  },

  calculateEMI: function() {
    const priceInput = document.getElementById("emi-price-input");
    const dpSlider = document.getElementById("emi-dp-slider");
    const dpDisplay = document.getElementById("emi-dp-display");
    const dpPercent = document.getElementById("emi-dp-percent");
    const tenureSlider = document.getElementById("emi-tenure-slider");
    const tenureDisplay = document.getElementById("emi-tenure-display");
    const rateSlider = document.getElementById("emi-rate-slider");
    const rateDisplay = document.getElementById("emi-rate-display");

    const emiAmountEl = document.getElementById("emi-monthly-amount");
    const loanPrincipalEl = document.getElementById("emi-loan-principal");
    const totalInterestEl = document.getElementById("emi-total-interest");
    const totalPayableEl = document.getElementById("emi-total-payable");
    const principalBar = document.getElementById("emi-principal-bar");
    const interestBar = document.getElementById("emi-interest-bar");

    const vehiclePrice = Math.max(10000, parseFloat(priceInput.value) || 139999);
    const downPayment = Math.min(vehiclePrice * 0.85, Math.max(0, parseFloat(dpSlider.value) || 28000));
    const tenureMonths = parseInt(tenureSlider.value) || 36;
    const annualRate = parseFloat(rateSlider.value) || 8.5;

    // Display updates
    if (dpDisplay) dpDisplay.textContent = Calculators.formatINR(downPayment);
    if (dpPercent) {
      const pct = Math.round((downPayment / vehiclePrice) * 100);
      dpPercent.textContent = `(${pct}%)`;
    }
    if (tenureDisplay) tenureDisplay.textContent = `${tenureMonths} Months (${(tenureMonths / 12).toFixed(1)} Yrs)`;
    if (rateDisplay) rateDisplay.textContent = `${annualRate.toFixed(1)}% p.a.`;

    const principal = vehiclePrice - downPayment;

    let monthlyEMI = 0;
    let totalInterest = 0;
    let totalPayable = 0;

    if (principal > 0) {
      const monthlyRate = annualRate / 12 / 100;
      if (monthlyRate > 0) {
        monthlyEMI = (principal * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) /
                     (Math.pow(1 + monthlyRate, tenureMonths) - 1);
        totalPayable = monthlyEMI * tenureMonths;
        totalInterest = totalPayable - principal;
      } else {
        monthlyEMI = principal / tenureMonths;
        totalPayable = principal;
        totalInterest = 0;
      }
    }

    if (emiAmountEl) emiAmountEl.textContent = Calculators.formatINR(monthlyEMI);
    if (loanPrincipalEl) loanPrincipalEl.textContent = Calculators.formatINR(principal);
    if (totalInterestEl) totalInterestEl.textContent = Calculators.formatINR(totalInterest);
    if (totalPayableEl) totalPayableEl.textContent = Calculators.formatINR(totalPayable);

    if (principalBar && interestBar && totalPayable > 0) {
      const principalPct = Math.round((principal / totalPayable) * 100);
      const interestPct = 100 - principalPct;
      principalBar.style.width = `${principalPct}%`;
      interestBar.style.width = `${interestPct}%`;
    }
  },

  setEmiFromProduct: function(productId) {
    const list = window.BHARAT_VEHICLES || window.EV_CATALOG || [];
    const ev = list.find(item => item.id === productId);
    if (!ev) return;

    const modelSelect = document.getElementById("emi-vehicle-select");
    const priceInput = document.getElementById("emi-price-input");
    const dpSlider = document.getElementById("emi-dp-slider");

    if (modelSelect) modelSelect.value = ev.id;
    if (priceInput) priceInput.value = ev.exShowroomPrice;
    if (dpSlider) {
      dpSlider.max = Math.round(ev.exShowroomPrice * 0.85);
      dpSlider.value = Math.round(ev.exShowroomPrice * 0.2);
    }
    Calculators.calculateEMI();

    const emiSection = document.getElementById("decision-tools");
    if (emiSection) {
      emiSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  },

  // ==================== 2. PETROL VS BHARAT EV SAVINGS CALCULATOR ====================
  initSavingsCalculator: function() {
    const commuteSlider = document.getElementById("sav-commute-slider");
    const petrolPriceSlider = document.getElementById("sav-petrol-price-slider");
    const mileageSlider = document.getElementById("sav-mileage-slider");
    const tariffSlider = document.getElementById("sav-tariff-slider");

    if (!commuteSlider || !petrolPriceSlider || !mileageSlider || !tariffSlider) return;

    const triggerRecalc = () => Calculators.calculateSavings();

    commuteSlider.addEventListener("input", triggerRecalc);
    petrolPriceSlider.addEventListener("input", triggerRecalc);
    mileageSlider.addEventListener("input", triggerRecalc);
    tariffSlider.addEventListener("input", triggerRecalc);

    Calculators.calculateSavings();
  },

  calculateSavings: function() {
    const commuteSlider = document.getElementById("sav-commute-slider");
    const commuteDisplay = document.getElementById("sav-commute-display");
    const petrolPriceSlider = document.getElementById("sav-petrol-price-slider");
    const petrolPriceDisplay = document.getElementById("sav-petrol-price-display");
    const mileageSlider = document.getElementById("sav-mileage-slider");
    const mileageDisplay = document.getElementById("sav-mileage-display");
    const tariffSlider = document.getElementById("sav-tariff-slider");
    const tariffDisplay = document.getElementById("sav-tariff-display");

    const monthlySavingsEl = document.getElementById("sav-monthly-net");
    const annualSavingsEl = document.getElementById("sav-annual-net");
    const threeYearSavingsEl = document.getElementById("sav-3yr-net");
    const petrolMonthlyEl = document.getElementById("sav-petrol-monthly");
    const evMonthlyEl = document.getElementById("sav-ev-monthly");
    const co2SavedEl = document.getElementById("sav-co2-kg");
    const treesSavedEl = document.getElementById("sav-trees-count");

    const dailyKm = parseFloat(commuteSlider.value) || 35;
    const petrolPrice = parseFloat(petrolPriceSlider.value) || 102;
    const petrolMileage = parseFloat(mileageSlider.value) || 45;
    const electricityTariff = parseFloat(tariffSlider.value) || 7.0;

    if (commuteDisplay) commuteDisplay.textContent = `${dailyKm} km / day`;
    if (petrolPriceDisplay) petrolPriceDisplay.textContent = `₹${petrolPrice.toFixed(0)} / L`;
    if (mileageDisplay) mileageDisplay.textContent = `${petrolMileage} km / L`;
    if (tariffDisplay) tariffDisplay.textContent = `₹${electricityTariff.toFixed(1)} / Unit`;

    const monthlyDistance = dailyKm * 30;
    const annualDistance = dailyKm * 365;

    // Petrol Cost: fuel + engine oil/filter differential ~ ₹0.35/km
    const petrolCostPerKm = (petrolPrice / petrolMileage) + 0.35;
    const monthlyPetrolCost = monthlyDistance * petrolCostPerKm;
    const annualPetrolCost = annualDistance * petrolCostPerKm;

    // Bharat EV Electricity Cost: ~0.030 kWh/km with Bharat HyperDrive motor
    const evCostPerKm = (0.030 * electricityTariff) + 0.04;
    const monthlyEvCost = monthlyDistance * evCostPerKm;
    const annualEvCost = annualDistance * evCostPerKm;

    const monthlySavings = monthlyPetrolCost - monthlyEvCost;
    const annualSavings = annualPetrolCost - annualEvCost;
    const threeYearSavings = annualSavings * 3;

    const annualCo2Kg = Math.round(annualDistance * 0.045);
    const treesEquivalent = Math.max(1, Math.round(annualCo2Kg / 22));

    if (monthlySavingsEl) monthlySavingsEl.textContent = Calculators.formatINR(monthlySavings);
    if (annualSavingsEl) annualSavingsEl.textContent = Calculators.formatINR(annualSavings);
    if (threeYearSavingsEl) threeYearSavingsEl.textContent = Calculators.formatINR(threeYearSavings);
    if (petrolMonthlyEl) petrolMonthlyEl.textContent = Calculators.formatINR(monthlyPetrolCost);
    if (evMonthlyEl) evMonthlyEl.textContent = Calculators.formatINR(monthlyEvCost);
    if (co2SavedEl) co2SavedEl.textContent = `${annualCo2Kg.toLocaleString('en-IN')} kg CO₂`;
    if (treesSavedEl) treesSavedEl.textContent = `${treesEquivalent} Trees / yr`;
  },

  // ==================== 3. OLD PETROL VEHICLE EXCHANGE ESTIMATOR ====================
  initExchangeEstimator: function() {
    const form = document.getElementById("exchange-eval-form");
    if (!form) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const brand = document.getElementById("exch-brand").value;
      const ageYears = parseInt(document.getElementById("exch-age").value) || 4;
      const condition = document.getElementById("exch-condition").value;

      let baseVal = 48000;
      if (brand === "royal-enfield") baseVal = 95000;
      else if (brand === "honda" || brand === "yamaha") baseVal = 55000;
      else if (brand === "tvs" || brand === "suzuki") baseVal = 45000;
      else baseVal = 40000;

      let ageFactor = 1.0;
      if (ageYears <= 2) ageFactor = 0.82;
      else if (ageYears <= 4) ageFactor = 0.65;
      else if (ageYears <= 7) ageFactor = 0.45;
      else ageFactor = 0.28;

      let conditionMultiplier = 1.0;
      if (condition === "excellent") conditionMultiplier = 1.15;
      else if (condition === "good") conditionMultiplier = 1.0;
      else if (condition === "average") conditionMultiplier = 0.85;

      const estimatedMarketValue = Math.round(baseVal * ageFactor * conditionMultiplier);
      const greenExchangeBonus = 3000; // Special Bharat Electric Motors Dealership Bonus
      const totalExchangeVoucher = estimatedMarketValue + greenExchangeBonus;

      const resultBox = document.getElementById("exchange-result-box");
      if (resultBox) {
        resultBox.classList.remove("hidden");
        document.getElementById("exch-res-market").textContent = Calculators.formatINR(estimatedMarketValue);
        document.getElementById("exch-res-bonus").textContent = `+${Calculators.formatINR(greenExchangeBonus)}`;
        document.getElementById("exch-res-total").textContent = Calculators.formatINR(totalExchangeVoucher);
        resultBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    });
  }
};

if (typeof window !== "undefined") {
  window.Calculators = Calculators;
}
