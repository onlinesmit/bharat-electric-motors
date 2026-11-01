/**
 * Bharat Electric Motors - Owner Billing & Invoice Receipt Generator
 * Professional GST-Compliant Tax Invoice & Cash Receipt System
 */

const InvoiceGenerator = {
  invoices: [],
  currentInvoice: null,

  init: function() {
    this.loadPersistedInvoices();
    this.initFormEvents();
    this.populateModelSelect();
    this.renderInvoiceHistory();
    this.setTodayDate();
    this.generateNewInvoiceNumber();
  },

  loadPersistedInvoices: function() {
    let data = null;
    try {
      if (typeof localStorage !== "undefined") {
        data = localStorage.getItem("bharat_ev_invoices");
      }
    } catch (e) {
      console.warn("Could not load local invoices", e);
    }

    if (data) {
      try {
        this.invoices = JSON.parse(data);
      } catch (err) {
        this.invoices = [];
      }
    }

    if (!this.invoices || this.invoices.length === 0) {
      // Pre-seed with one sample invoice for instant preview
      this.invoices = [
          {
            invoiceNumber: "BE-INV-2026-0101",
            invoiceDate: new Date().toISOString().split("T")[0],
            paymentMode: "UPI / Bank Finance",
            financePartner: "HDFC Bank EV Loan",
            customerName: "Vikram Malhotra",
            customerPhone: "8009579794",
            customerEmail: "vikram.m@example.com",
            customerAddress: "Flat 402, Green Valley Apts, Saket",
            customerCity: "New Delhi",
            customerPincode: "110017",
            customerAadhaar: "XXXX-XXXX-8492",
            customerPan: "ABCDE1234F",
            modelId: "bharat-veloce-pro",
            modelName: "Bharat Veloce Pro (Flagship HyperSeries)",
            category: "scooter",
            colorName: "Emerald Carbon",
            chassisNumber: "MB9BE26VELO09841",
            motorNumber: "HM-85KW-2026-4412",
            batterySerial: "BPC-40KWH-90812",
            chargerType: "Home Wallbox 750W + Portable Adapter",
            keyNumber: "BE-KEY-4491",
            exShowroomPrice: 139999,
            subsidyAmount: 18500,
            rtoRegistration: 950,
            insuranceCharge: 5200,
            accessoriesCharge: 2500,
            accessoriesList: "Smart Touch Bluetooth Helmet, Floor Mat & Body Cover",
            extendedWarrantyCharge: 2999,
            extendedWarrantyTerm: "5-Year Unlimited Battery Replacement Guarantee",
            tradeInDiscount: 0,
            netTotal: 133148,
            amountPaid: 33148,
            balanceDue: 100000,
            paymentStatus: "PARTIALLY PAID / FINANCED",
            notes: "15-Minute Paperless Loan Disbursed via HDFC Bank. First free service due at 1,000 km or 45 days.",
            createdAt: new Date().toISOString()
          }
        ];
        this.saveInvoices();
      }
  },

  saveInvoices: function() {
    try {
      if (typeof localStorage !== "undefined") {
        localStorage.setItem("bharat_ev_invoices", JSON.stringify(this.invoices));
      }
      this.renderInvoiceHistory();
    } catch (e) {
      console.warn("Could not save invoices", e);
    }
  },

  setTodayDate: function() {
    const dateInput = document.getElementById("inv-date");
    if (dateInput) {
      dateInput.value = new Date().toISOString().split("T")[0];
    }
  },

  generateNewInvoiceNumber: function() {
    const invInput = document.getElementById("inv-number");
    if (!invInput) return;
    const year = new Date().getFullYear();
    const count = String(this.invoices.length + 101).padStart(4, "0");
    invInput.value = `BE-INV-${year}-${count}`;
  },

  populateModelSelect: function() {
    const select = document.getElementById("inv-model-select");
    const list = window.BHARAT_VEHICLES || window.EV_CATALOG || [];
    if (!select || list.length === 0) return;

    select.innerHTML = `<option value="">-- Choose Bharat Vehicle Model --</option>` +
      list.map(ev => `
        <option value="${ev.id}">${ev.name} (${ev.category.toUpperCase()} &bull; Top Speed: ${ev.topSpeed} km/h)</option>
      `).join("") +
      `<option value="custom">Custom EV / Spare Parts / Service</option>`;
  },

  onModelChange: function(modelId) {
    const list = window.BHARAT_VEHICLES || window.EV_CATALOG || [];
    const ev = list.find(m => m.id === modelId);

    const priceInput = document.getElementById("inv-base-price");
    const subsidyInput = document.getElementById("inv-subsidy");
    const rtoInput = document.getElementById("inv-rto");
    const insuranceInput = document.getElementById("inv-insurance");
    const colorSelect = document.getElementById("inv-color-select");
    const chassisInput = document.getElementById("inv-chassis");
    const motorInput = document.getElementById("inv-motor-no");
    const batteryInput = document.getElementById("inv-battery-sn");

    if (!ev) {
      if (modelId === "custom") {
        if (priceInput) priceInput.value = 50000;
        if (subsidyInput) subsidyInput.value = 0;
        if (rtoInput) rtoInput.value = 0;
        if (insuranceInput) insuranceInput.value = 0;
        this.calculateTotals();
      }
      return;
    }

    if (priceInput) priceInput.value = ev.exShowroomPrice;
    if (subsidyInput) subsidyInput.value = ev.subsidy || 0;
    if (rtoInput) rtoInput.value = ev.rtoCharges || 0;
    if (insuranceInput) insuranceInput.value = ev.insurance || 0;

    // Populate color choices
    if (colorSelect && ev.colors) {
      colorSelect.innerHTML = ev.colors.map(c => `
        <option value="${c.name}">${c.name}</option>
      `).join("");
    }

    // Generate sample authentic Chassis / Motor serials for this bill
    const randDigits = Math.floor(1000 + Math.random() * 9000);
    const prefix = ev.name.substring(0, 4).toUpperCase().replace(/\s/g, "");
    if (chassisInput && !chassisInput.value) {
      chassisInput.value = `MB9BE26${prefix}${randDigits}`;
    }
    if (motorInput && !motorInput.value) {
      chassisInput.value = `MB9BE26${prefix}${randDigits}`;
      motorInput.value = `HD-${ev.motorPower.split(" ")[0] || "KW"}-${randDigits}`;
    }
    if (batteryInput && !batteryInput.value) {
      batteryInput.value = `BPC-${ev.batteryCapacity}KWH-${randDigits + 100}`;
    }

    this.calculateTotals();
  },

  calculateTotals: function() {
    const basePrice = Math.max(0, parseFloat(document.getElementById("inv-base-price")?.value) || 0);
    const subsidy = Math.max(0, parseFloat(document.getElementById("inv-subsidy")?.value) || 0);
    const rto = Math.max(0, parseFloat(document.getElementById("inv-rto")?.value) || 0);
    const insurance = Math.max(0, parseFloat(document.getElementById("inv-insurance")?.value) || 0);
    const accessories = Math.max(0, parseFloat(document.getElementById("inv-accessories")?.value) || 0);
    const warranty = Math.max(0, parseFloat(document.getElementById("inv-warranty")?.value) || 0);
    const tradeIn = Math.max(0, parseFloat(document.getElementById("inv-trade-in")?.value) || 0);
    const amountPaid = Math.max(0, parseFloat(document.getElementById("inv-amount-paid")?.value) || 0);

    // Net Total Formula: Base - Subsidy + RTO + Insurance + Accessories + Warranty - TradeIn Credit
    const netTotal = Math.max(0, (basePrice - subsidy + rto + insurance + accessories + warranty - tradeIn));
    const balanceDue = Math.max(0, netTotal - amountPaid);

    const totalEl = document.getElementById("inv-calc-net-total");
    const balanceEl = document.getElementById("inv-calc-balance-due");
    const wordsEl = document.getElementById("inv-calc-amount-words");

    if (totalEl) totalEl.textContent = Calculators.formatINR(netTotal);
    if (balanceEl) balanceEl.textContent = Calculators.formatINR(balanceDue);
    if (wordsEl) wordsEl.textContent = this.numberToIndianWords(Math.round(netTotal)) + " Only";

    // Auto update status badge preview
    const statusSelect = document.getElementById("inv-payment-status");
    if (statusSelect) {
      if (balanceDue === 0 && netTotal > 0) {
        statusSelect.value = "FULL PAID";
      } else if (amountPaid > 0 && balanceDue > 0) {
        statusSelect.value = "PARTIALLY PAID / FINANCED";
      } else if (amountPaid === 0) {
        statusSelect.value = "PENDING / ON BOOKING";
      }
    }
  },

  numberToIndianWords: function(num) {
    if (num === 0) return "Zero Rupees";
    const a = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
    const b = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

    const inWords = (n) => {
      let str = "";
      if (n > 19) {
        str += b[Math.floor(n / 10)] + (n % 10 !== 0 ? " " + a[n % 10] : "");
      } else if (n > 0) {
        str += a[n];
      }
      return str;
    };

    let n = ("000000000" + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return "";

    let output = "";
    output += Number(n[1]) !== 0 ? (inWords(Number(n[1])) + " Crore ") : "";
    output += Number(n[2]) !== 0 ? (inWords(Number(n[2])) + " Lakh ") : "";
    output += Number(n[3]) !== 0 ? (inWords(Number(n[3])) + " Thousand ") : "";
    output += Number(n[4]) !== 0 ? (inWords(Number(n[4])) + " Hundred ") : "";
    output += Number(n[5]) !== 0 ? (inWords(Number(n[5])) + " ") : "";

    return output.trim() + " Rupees";
  },

  initFormEvents: function() {
    const form = document.getElementById("bill-creator-form");
    const modelSelect = document.getElementById("inv-model-select");

    if (modelSelect) {
      modelSelect.addEventListener("change", (e) => {
        this.onModelChange(e.target.value);
      });
    }

    // Calculation inputs triggers
    const calcInputs = [
      "inv-base-price", "inv-subsidy", "inv-rto", "inv-insurance",
      "inv-accessories", "inv-warranty", "inv-trade-in", "inv-amount-paid"
    ];
    calcInputs.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.addEventListener("input", () => this.calculateTotals());
    });

    if (!form) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const invoiceNumber = document.getElementById("inv-number").value.trim() || `BE-INV-${Date.now()}`;
      const invoiceDate = document.getElementById("inv-date").value || new Date().toISOString().split("T")[0];
      const paymentMode = document.getElementById("inv-payment-mode").value;
      const financePartner = document.getElementById("inv-finance-partner").value.trim();

      const customerName = document.getElementById("inv-cust-name").value.trim();
      const customerPhone = document.getElementById("inv-cust-phone").value.trim();
      const customerEmail = document.getElementById("inv-cust-email").value.trim();
      const customerAddress = document.getElementById("inv-cust-address").value.trim();
      const customerCity = document.getElementById("inv-cust-city").value.trim() || "New Delhi";
      const customerPincode = document.getElementById("inv-cust-pincode").value.trim();
      const customerAadhaar = document.getElementById("inv-cust-aadhaar").value.trim();
      const customerPan = document.getElementById("inv-cust-pan").value.trim();

      const modelId = document.getElementById("inv-model-select").value;
      const list = window.BHARAT_VEHICLES || window.EV_CATALOG || [];
      const ev = list.find(m => m.id === modelId) || { name: "Bharat Custom EV", category: "EV" };
      const colorName = document.getElementById("inv-color-select")?.value || "Emerald Carbon";

      const chassisNumber = document.getElementById("inv-chassis").value.trim() || `MB9BE26${Math.floor(1000 + Math.random() * 9000)}`;
      const motorNumber = document.getElementById("inv-motor-no").value.trim() || `HD-MOTOR-${Math.floor(1000 + Math.random() * 9000)}`;
      const batterySerial = document.getElementById("inv-battery-sn").value.trim() || `BPC-PACK-${Math.floor(1000 + Math.random() * 9000)}`;
      const chargerType = document.getElementById("inv-charger-type").value.trim() || "Standard Smart Home Charger (IP65)";
      const keyNumber = document.getElementById("inv-key-no").value.trim() || `BE-KEY-${Math.floor(1000 + Math.random() * 9000)}`;

      const exShowroomPrice = parseFloat(document.getElementById("inv-base-price").value) || 0;
      const subsidyAmount = parseFloat(document.getElementById("inv-subsidy").value) || 0;
      const rtoRegistration = parseFloat(document.getElementById("inv-rto").value) || 0;
      const insuranceCharge = parseFloat(document.getElementById("inv-insurance").value) || 0;
      const accessoriesCharge = parseFloat(document.getElementById("inv-accessories").value) || 0;
      const accessoriesList = document.getElementById("inv-accessories-desc")?.value.trim() || "Standard Helmet & Vehicle Kit";
      const extendedWarrantyCharge = parseFloat(document.getElementById("inv-warranty").value) || 0;
      const extendedWarrantyTerm = document.getElementById("inv-warranty-desc")?.value.trim() || "5 Years Battery Replacement Assurance";
      const tradeInDiscount = parseFloat(document.getElementById("inv-trade-in").value) || 0;
      const amountPaid = parseFloat(document.getElementById("inv-amount-paid").value) || 0;
      const paymentStatus = document.getElementById("inv-payment-status").value;
      const notes = document.getElementById("inv-notes").value.trim() || "Thank you for choosing Bharat Electric Motors. 100% Zero Emission Green Ride!";

      const netTotal = Math.max(0, (exShowroomPrice - subsidyAmount + rtoRegistration + insuranceCharge + accessoriesCharge + extendedWarrantyCharge - tradeInDiscount));
      const balanceDue = Math.max(0, netTotal - amountPaid);

      const newRecord = {
        invoiceNumber,
        invoiceDate,
        paymentMode,
        financePartner,
        customerName,
        customerPhone,
        customerEmail,
        customerAddress,
        customerCity,
        customerPincode,
        customerAadhaar,
        customerPan,
        modelId,
        modelName: ev.name,
        category: ev.category,
        colorName,
        chassisNumber,
        motorNumber,
        batterySerial,
        chargerType,
        keyNumber,
        exShowroomPrice,
        subsidyAmount,
        rtoRegistration,
        insuranceCharge,
        accessoriesCharge,
        accessoriesList,
        extendedWarrantyCharge,
        extendedWarrantyTerm,
        tradeInDiscount,
        netTotal,
        amountPaid,
        balanceDue,
        paymentStatus,
        notes,
        createdAt: new Date().toISOString()
      };

      // Add to front of history
      InvoiceGenerator.invoices.unshift(newRecord);
      InvoiceGenerator.saveInvoices();

      // Show the generated Receipt
      InvoiceGenerator.renderInvoiceReceipt(newRecord);

      // Switch to preview tab
      InvoiceGenerator.switchTab("preview");
    });
  },

  renderInvoiceReceipt: function(inv) {
    this.currentInvoice = inv;
    const container = document.getElementById("invoice-printable-sheet");
    if (!container) return;

    const brand = window.BHARAT_BRAND || {
      name: "Bharat Electric Motors",
      legalName: "Bharat Electric Motors Mobility Pvt. Ltd.",
      address: "Pillar no. 8, Lala Bazar, GT Road, Handiya Prayagraj, UP - 221503",
      phone: "+91 80095 79794",
      altPhone: "+91 98750 52329",
      email: "billing@bharatelectricmotors.com"
    };

    container.innerHTML = `
      <div class="invoice-paper bg-white text-slate-900 p-8 sm:p-12 rounded-3xl shadow-2xl max-w-4xl mx-auto border border-slate-200">
        
        <!-- INVOICE HEADER & BRAND INFO -->
        <div class="flex flex-col sm:flex-row items-start justify-between border-b-2 border-emerald-500 pb-6 mb-6 gap-4">
          <div class="flex items-center gap-3.5">
            <div class="w-14 h-14 rounded-2xl bg-slate-950 text-emerald-400 flex items-center justify-center text-3xl font-black shadow-md">
              ⚡
            </div>
            <div>
              <h1 class="text-2xl sm:text-3xl font-black tracking-tight text-slate-950">${brand.name}</h1>
              <span class="text-xs font-bold text-emerald-700 uppercase tracking-widest block">${brand.legalName}</span>
              <p class="text-[11px] text-slate-600 max-w-sm mt-0.5">${brand.address}</p>
              <div class="text-[11px] text-slate-600 mt-1 flex flex-wrap gap-x-3">
                <span><strong>Phone:</strong> ${brand.phone} &bull; ${brand.altPhone || '+91 98750 52329'}</span>
                <span><strong>Email:</strong> ${brand.email}</span>
                <span><strong>GSTIN:</strong> 09AAACB2026E1Z5 (UP)</span>
              </div>
            </div>
          </div>

          <div class="text-left sm:text-right">
            <span class="inline-block text-xs font-black uppercase tracking-wider px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full border border-emerald-300 mb-2">
              TAX INVOICE &amp; CASH RECEIPT
            </span>
            <div class="text-xs text-slate-600 space-y-0.5">
              <div><strong>Invoice No:</strong> <span class="font-mono font-bold text-slate-900">${inv.invoiceNumber}</span></div>
              <div><strong>Date:</strong> <span>${inv.invoiceDate}</span></div>
              <div><strong>Place of Supply:</strong> <span>Handiya Prayagraj (UP-09)</span></div>
              <div><strong>Payment Mode:</strong> <span class="font-bold text-slate-900">${inv.paymentMode}</span></div>
            </div>
          </div>
        </div>

        <!-- BILLED TO & VEHICLE IDENTIFICATION DUAL BOXES -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-xs">
          
          <!-- Customer Box -->
          <div class="bg-slate-50 border border-slate-200 rounded-2xl p-4">
            <span class="text-[10px] font-black uppercase tracking-wider text-emerald-700 block mb-1.5">Billed To Customer:</span>
            <strong class="text-sm font-black text-slate-900 block">${inv.customerName}</strong>
            <p class="text-slate-600 mt-1">${inv.customerAddress}, ${inv.customerCity} - ${inv.customerPincode || '110028'}</p>
            <div class="mt-2 pt-2 border-t border-slate-200 space-y-0.5 text-slate-700">
              <div><strong>Mobile:</strong> +91 ${inv.customerPhone}</div>
              ${inv.customerEmail ? `<div><strong>Email:</strong> ${inv.customerEmail}</div>` : ''}
              ${inv.customerAadhaar ? `<div><strong>Aadhaar / ID:</strong> ${inv.customerAadhaar}</div>` : ''}
              ${inv.customerPan ? `<div><strong>PAN:</strong> ${inv.customerPan}</div>` : ''}
            </div>
          </div>

          <!-- Vehicle Technical ID Box -->
          <div class="bg-slate-50 border border-slate-200 rounded-2xl p-4">
            <span class="text-[10px] font-black uppercase tracking-wider text-cyan-700 block mb-1.5">Vehicle Technical Details:</span>
            <strong class="text-sm font-black text-slate-900 block">${inv.modelName}</strong>
            <div class="mt-2 space-y-1 text-slate-700">
              <div class="flex justify-between">
                <span>Color Shade:</span>
                <strong class="text-slate-900">${inv.colorName}</strong>
              </div>
              <div class="flex justify-between">
                <span>Chassis / VIN:</span>
                <span class="font-mono font-bold text-slate-900">${inv.chassisNumber}</span>
              </div>
              <div class="flex justify-between">
                <span>Bharat Motor No:</span>
                <span class="font-mono text-slate-900">${inv.motorNumber}</span>
              </div>
              <div class="flex justify-between">
                <span>PowerCell™ Battery S/N:</span>
                <span class="font-mono text-slate-900">${inv.batterySerial}</span>
              </div>
              <div class="flex justify-between">
                <span>Key / RFID No:</span>
                <span class="font-mono text-slate-900">${inv.keyNumber}</span>
              </div>
            </div>
          </div>

        </div>

        <!-- ITEMIZED CHARGES & SUBSIDY TABLE -->
        <div class="overflow-x-auto mb-6">
          <table class="w-full text-left text-xs border-collapse">
            <thead>
              <tr class="bg-slate-900 text-white font-bold uppercase tracking-wider text-[10px]">
                <th class="p-3 rounded-l-xl">Item / Service Particulars</th>
                <th class="p-3">HSN / SAC</th>
                <th class="p-3 text-right">Rate</th>
                <th class="p-3 text-right rounded-r-xl">Amount (₹)</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200">
              <!-- Base Ex-Showroom -->
              <tr>
                <td class="p-3">
                  <strong class="text-slate-900 block">${inv.modelName}</strong>
                  <span class="text-[11px] text-slate-500">Ex-Showroom Price (Inclusive of 5% EV GST)</span>
                </td>
                <td class="p-3 font-mono text-slate-600">8711</td>
                <td class="p-3 text-right text-slate-600">${Calculators.formatINR(inv.exShowroomPrice)}</td>
                <td class="p-3 text-right font-bold text-slate-900">${Calculators.formatINR(inv.exShowroomPrice)}</td>
              </tr>

              <!-- Subsidy Upfront Deduction -->
              ${inv.subsidyAmount > 0 ? `
                <tr class="bg-emerald-50/80">
                  <td class="p-3">
                    <strong class="text-emerald-800 block">Less: Direct Central PM E-Drive &amp; State EV Subsidy</strong>
                    <span class="text-[11px] text-emerald-700">Upfront Government Incentive credited directly to buyer</span>
                  </td>
                  <td class="p-3 font-mono text-emerald-700">SUB-EV</td>
                  <td class="p-3 text-right text-emerald-700">-${Calculators.formatINR(inv.subsidyAmount)}</td>
                  <td class="p-3 text-right font-black text-emerald-700">-${Calculators.formatINR(inv.subsidyAmount)}</td>
                </tr>
              ` : ''}

              <!-- RTO Charges -->
              <tr>
                <td class="p-3">
                  <span class="font-bold text-slate-800">RTO Registration, Green HSRP Plate &amp; Smart Card Fee</span>
                  <div class="text-[10px] text-emerald-700 font-semibold">100% State Road Tax Exemption applied (₹0 Tax)</div>
                </td>
                <td class="p-3 font-mono text-slate-600">9991</td>
                <td class="p-3 text-right text-slate-600">${Calculators.formatINR(inv.rtoRegistration)}</td>
                <td class="p-3 text-right font-bold text-slate-900">${Calculators.formatINR(inv.rtoRegistration)}</td>
              </tr>

              <!-- Insurance -->
              <tr>
                <td class="p-3">
                  <span class="font-bold text-slate-800">Comprehensive 5-Year Insurance Package</span>
                  <div class="text-[10px] text-slate-500">1 Year Own Damage + 5 Years Third Party Liability &amp; Zero Depreciation</div>
                </td>
                <td class="p-3 font-mono text-slate-600">9971</td>
                <td class="p-3 text-right text-slate-600">${Calculators.formatINR(inv.insuranceCharge)}</td>
                <td class="p-3 text-right font-bold text-slate-900">${Calculators.formatINR(inv.insuranceCharge)}</td>
              </tr>

              <!-- Accessories -->
              ${inv.accessoriesCharge > 0 ? `
                <tr>
                  <td class="p-3">
                    <span class="font-bold text-slate-800">Essential Delivery Accessories Kit</span>
                    <div class="text-[10px] text-slate-500">${inv.accessoriesList}</div>
                  </td>
                  <td class="p-3 font-mono text-slate-600">8714</td>
                  <td class="p-3 text-right text-slate-600">${Calculators.formatINR(inv.accessoriesCharge)}</td>
                  <td class="p-3 text-right font-bold text-slate-900">${Calculators.formatINR(inv.accessoriesCharge)}</td>
                </tr>
              ` : ''}

              <!-- Extended Warranty -->
              ${inv.extendedWarrantyCharge > 0 ? `
                <tr>
                  <td class="p-3">
                    <span class="font-bold text-slate-800">Bharat Shield Extended Battery &amp; Motor Warranty</span>
                    <div class="text-[10px] text-slate-500">${inv.extendedWarrantyTerm}</div>
                  </td>
                  <td class="p-3 font-mono text-slate-600">9987</td>
                  <td class="p-3 text-right text-slate-600">${Calculators.formatINR(inv.extendedWarrantyCharge)}</td>
                  <td class="p-3 text-right font-bold text-slate-900">${Calculators.formatINR(inv.extendedWarrantyCharge)}</td>
                </tr>
              ` : ''}

              <!-- Trade-In Discount -->
              ${inv.tradeInDiscount > 0 ? `
                <tr class="bg-amber-50">
                  <td class="p-3">
                    <strong class="text-amber-800 block">Less: Old Petrol Two-Wheeler Exchange Credit</strong>
                    <span class="text-[10px] text-amber-700">Includes +₹3,000 Bharat Green Exchange Bonus</span>
                  </td>
                  <td class="p-3 font-mono text-amber-700">EXCH</td>
                  <td class="p-3 text-right text-amber-700">-${Calculators.formatINR(inv.tradeInDiscount)}</td>
                  <td class="p-3 text-right font-black text-amber-800">-${Calculators.formatINR(inv.tradeInDiscount)}</td>
                </tr>
              ` : ''}
            </tbody>
          </table>
        </div>

        <!-- TOTALS & PAYMENT STATUS SUMMARY -->
        <div class="grid grid-cols-1 sm:grid-cols-12 gap-6 items-end border-t-2 border-slate-200 pt-4 mb-6 text-xs">
          <div class="sm:col-span-7 space-y-2">
            <div>
              <span class="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">Amount in Words:</span>
              <p class="font-bold text-slate-900 italic text-sm">${this.numberToIndianWords(Math.round(inv.netTotal))} Only</p>
            </div>
            ${inv.notes ? `
              <div class="bg-slate-50 p-2.5 rounded-xl border border-slate-200 text-slate-600 text-[11px]">
                <strong>Notes / Terms:</strong> ${inv.notes}
              </div>
            ` : ''}
          </div>

          <div class="sm:col-span-5 bg-slate-50 rounded-2xl p-4 border border-slate-200 space-y-2">
            <div class="flex justify-between items-baseline text-slate-600">
              <span>Gross On-Road Total:</span>
              <span class="text-base font-black text-slate-950">${Calculators.formatINR(inv.netTotal)}</span>
            </div>
            <div class="flex justify-between items-baseline text-emerald-700">
              <span>Amount Paid / Advance:</span>
              <span class="font-bold">${Calculators.formatINR(inv.amountPaid)}</span>
            </div>
            <div class="flex justify-between items-baseline text-slate-900 pt-1 border-t border-slate-200">
              <span class="font-bold">Balance Due:</span>
              <span class="text-sm font-black text-rose-600">${Calculators.formatINR(inv.balanceDue)}</span>
            </div>
            <div class="pt-2 text-center">
              <span class="inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${
                inv.paymentStatus === 'FULL PAID' ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' :
                inv.paymentStatus === 'PARTIALLY PAID / FINANCED' ? 'bg-blue-100 text-blue-800 border border-blue-300' :
                'bg-amber-100 text-amber-800 border border-amber-300'
              }">
                Status: ${inv.paymentStatus}
              </span>
            </div>
          </div>
        </div>

        <!-- SIGNATURE & STAMP FOOTER -->
        <div class="grid grid-cols-2 gap-8 pt-8 border-t border-slate-200 text-xs">
          <div>
            <div class="h-14 flex items-end">
              <span class="font-mono text-slate-400">________________________</span>
            </div>
            <strong class="text-slate-800 block">Customer's Signature</strong>
            <span class="text-[10px] text-slate-500">I have inspected the vehicle &amp; agree to warranty terms.</span>
          </div>

          <div class="text-right flex flex-col items-end">
            <div class="h-14 flex items-center justify-center pr-4">
              <div class="w-20 h-10 border-2 border-emerald-600 border-dashed rounded-lg flex items-center justify-center text-[10px] font-black text-emerald-700 uppercase rotate-[-4deg]">
                BHARAT EV<br>SEAL
              </div>
            </div>
            <strong class="text-slate-900 block">For Bharat Electric Motors Mobility Pvt. Ltd.</strong>
            <span class="text-[10px] text-slate-500">Authorized Dealership Signatory</span>
          </div>
        </div>

      </div>
    `;
  },

  printCurrentInvoice: function() {
    window.print();
  },

  shareOnWhatsApp: function() {
    if (!this.currentInvoice) return;
    const inv = this.currentInvoice;
    const text = encodeURIComponent(
      `*BHARAT ELECTRIC MOTORS - TAX INVOICE & RECEIPT*\n` +
      `--------------------------------------\n` +
      `Showroom: Pillar no. 8, Lala Bazar, GT Road, Handiya Prayagraj\n` +
      `Invoice No: ${inv.invoiceNumber}\n` +
      `Date: ${inv.invoiceDate}\n` +
      `Customer: ${inv.customerName}\n` +
      `Model: ${inv.modelName} (${inv.colorName})\n` +
      `Chassis No: ${inv.chassisNumber}\n` +
      `Motor No: ${inv.motorNumber}\n` +
      `--------------------------------------\n` +
      `Net On-Road Total: ${Calculators.formatINR(inv.netTotal)}\n` +
      `Amount Paid: ${Calculators.formatINR(inv.amountPaid)}\n` +
      `Balance Due: ${Calculators.formatINR(inv.balanceDue)}\n` +
      `Payment Status: ${inv.paymentStatus}\n` +
      `--------------------------------------\n` +
      `Thank you for choosing Bharat Electric Motors! ⚡\n` +
      `Helpline: +91 80095 79794 / +91 98750 52329`
    );

    const phoneClean = inv.customerPhone.replace(/\D/g, "");
    const waUrl = phoneClean.length >= 10 
      ? `https://wa.me/91${phoneClean.slice(-10)}?text=${text}`
      : `https://wa.me/918009579794?text=${text}`;

    window.open(waUrl, "_blank");
  },

  renderInvoiceHistory: function() {
    if (typeof document === "undefined") return;
    const listContainer = document.getElementById("inv-history-list");
    const countBadge = document.getElementById("inv-history-count");
    if (!listContainer) return;

    if (countBadge) countBadge.textContent = this.invoices.length;

    if (this.invoices.length === 0) {
      listContainer.innerHTML = `
        <div class="py-10 text-center text-slate-400 text-xs">
          No generated bills yet. Fill the form on the left to create your first bill!
        </div>
      `;
      return;
    }

    listContainer.innerHTML = this.invoices.map((inv, idx) => `
      <div class="p-3.5 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-between gap-3 text-xs hover:border-emerald-500/40 transition-colors">
        <div>
          <div class="flex items-center gap-2">
            <strong class="text-white font-mono font-bold">${inv.invoiceNumber}</strong>
            <span class="text-[9px] font-bold px-1.5 py-0.5 rounded ${
              inv.paymentStatus === 'FULL PAID' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-blue-500/20 text-blue-400'
            }">
              ${inv.paymentStatus}
            </span>
          </div>
          <p class="text-slate-300 font-semibold mt-0.5">${inv.customerName} &bull; <span class="text-slate-400">${inv.modelName}</span></p>
          <span class="text-[10px] text-slate-500">${inv.invoiceDate} &bull; Net: <strong class="text-emerald-400">${Calculators.formatINR(inv.netTotal)}</strong></span>
        </div>

        <div class="flex items-center gap-1.5 shrink-0">
          <button onclick="InvoiceGenerator.viewInvoice(${idx})" class="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-cyan-400 font-bold rounded-lg text-[11px] transition-colors">
            View Bill
          </button>
          <button onclick="InvoiceGenerator.deleteInvoice(${idx})" class="p-1 text-slate-500 hover:text-rose-400 text-xs font-bold" title="Delete">
            &times;
          </button>
        </div>
      </div>
    `).join("");
  },

  viewInvoice: function(index) {
    const inv = this.invoices[index];
    if (!inv) return;
    this.renderInvoiceReceipt(inv);
    this.switchTab("preview");
  },

  deleteInvoice: function(index) {
    if (confirm("Delete this invoice record from history?")) {
      this.invoices.splice(index, 1);
      this.saveInvoices();
    }
  },

  switchTab: function(tabName) {
    const createView = document.getElementById("inv-tab-view-create");
    const previewView = document.getElementById("inv-tab-view-preview");
    const historyView = document.getElementById("inv-tab-view-history");

    const btnCreate = document.getElementById("inv-tab-btn-create");
    const btnPreview = document.getElementById("inv-tab-btn-preview");
    const btnHistory = document.getElementById("inv-tab-btn-history");

    [btnCreate, btnPreview, btnHistory].forEach(b => {
      if (b) {
        b.classList.remove("bg-emerald-500", "text-slate-950", "font-black");
        b.classList.add("bg-slate-800", "text-slate-300");
      }
    });

    if (createView) createView.classList.add("hidden");
    if (previewView) previewView.classList.add("hidden");
    if (historyView) historyView.classList.add("hidden");

    if (tabName === "create") {
      if (createView) createView.classList.remove("hidden");
      if (btnCreate) {
        btnCreate.classList.add("bg-emerald-500", "text-slate-950", "font-black");
        btnCreate.classList.remove("bg-slate-800", "text-slate-300");
      }
    } else if (tabName === "preview") {
      if (previewView) previewView.classList.remove("hidden");
      if (btnPreview) {
        btnPreview.classList.add("bg-emerald-500", "text-slate-950", "font-black");
        btnPreview.classList.remove("bg-slate-800", "text-slate-300");
      }
      if (!this.currentInvoice && this.invoices.length > 0) {
        this.renderInvoiceReceipt(this.invoices[0]);
      }
    } else if (tabName === "history") {
      if (historyView) historyView.classList.remove("hidden");
      if (btnHistory) {
        btnHistory.classList.add("bg-emerald-500", "text-slate-950", "font-black");
        btnHistory.classList.remove("bg-slate-800", "text-slate-300");
      }
      this.renderInvoiceHistory();
    }
  },

  openModal: function() {
    const modal = document.getElementById("invoice-generator-modal");
    if (!modal) return;
    modal.classList.remove("hidden");
    document.body.classList.add("modal-open");
    if (!this.currentInvoice && this.invoices.length > 0) {
      this.renderInvoiceReceipt(this.invoices[0]);
    }
  },

  closeModal: function() {
    const modal = document.getElementById("invoice-generator-modal");
    if (modal) {
      modal.classList.add("hidden");
      document.body.classList.remove("modal-open");
    }
  }
};

if (typeof window !== "undefined") {
  window.InvoiceGenerator = InvoiceGenerator;
}
