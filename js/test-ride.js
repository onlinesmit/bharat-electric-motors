/**
 * Bharat Electric Motors - Test Ride & Owner Approval Booking Engine
 * Two-Step Verification: Customer Request -> Owner Approval -> Confirmed VIP Pass
 * Address: Pillar no. 8, Lala Bazar, GT Road, Handiya Prayagraj
 * Primary WhatsApp / Owner Mobile: 8009579794, Alt: 9875052329
 */

const BookingEngine = {
  activeBookings: [],
  ownerMobile: "8009579794",
  altMobile: "9875052329",
  showroomLocation: "Pillar no. 8, Lala Bazar, GT Road, Handiya Prayagraj",

  init: function() {
    this.loadPersistedBookings();
    this.initTestRideForm();
    this.initServiceForm();
    this.populateModelDropdowns();
    this.populateDateSlots();
    this.renderBadges();
  },

  loadPersistedBookings: function() {
    try {
      if (typeof localStorage !== "undefined") {
        const data = localStorage.getItem("bharat_ev_bookings");
        if (data) {
          this.activeBookings = JSON.parse(data);
        }
      }
    } catch (e) {
      console.warn("Could not load local bookings", e);
    }

    // Pre-seed a sample booking if none exist so user can explore both pending & confirmed states
    if (!this.activeBookings || this.activeBookings.length === 0) {
      this.activeBookings = [
        {
          ref: "BE-TR-24264",
          type: "Test Ride Pass",
          modelName: "Bharat Glide S",
          modelCategory: "scooter",
          rideLocation: "Pillar no. 8, Lala Bazar, GT Road, Handiya Prayagraj",
          date: new Date(Date.now() + 86400000).toISOString().split("T")[0],
          timeSlot: "10:00 AM - 12:00 PM",
          customerName: "SmiT G.",
          phone: "8009579794",
          locality: "Handiya Prayagraj",
          hasDL: true,
          status: "PENDING", // PENDING | CONFIRMED
          createdAt: new Date().toISOString()
        }
      ];
      this.saveBookings();
    }
  },

  saveBookings: function() {
    try {
      if (typeof localStorage !== "undefined") {
        localStorage.setItem("bharat_ev_bookings", JSON.stringify(this.activeBookings));
      }
      this.renderBadges();
    } catch (e) {
      console.warn("Could not save bookings", e);
    }
  },

  populateModelDropdowns: function() {
    if (typeof document === "undefined") return;
    const rideSelect = document.getElementById("ride-model-select");
    const serviceSelect = document.getElementById("service-model-select");
    const list = window.BHARAT_VEHICLES || window.EV_CATALOG || [];

    if (rideSelect && list.length > 0) {
      rideSelect.innerHTML = `<option value="">-- Choose Your Bharat Electric Model --</option>` +
        list.map(ev => `
          <option value="${ev.id}">${ev.name} (${ev.category.toUpperCase()} &bull; Top Speed: ${ev.topSpeed} km/h)</option>
        `).join("");
    }

    if (serviceSelect && list.length > 0) {
      serviceSelect.innerHTML = `<option value="">-- Select Your Bharat Model --</option>` +
        list.map(ev => `
          <option value="${ev.id}">${ev.name}</option>
        `).join("") +
        `<option value="other">Other Electric Vehicle (Certified Service Handiya)</option>`;
    }
  },

  populateDateSlots: function() {
    if (typeof document === "undefined") return;
    const dateSelect = document.getElementById("ride-date-select");
    const serviceDateSelect = document.getElementById("service-date-select");
    if (!dateSelect) return;

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    let optionsHTML = `<option value="">-- Choose Preferred Date --</option>`;
    const today = new Date();

    for (let i = 0; i < 14; i++) {
      const d = new Date();
      d.setDate(today.getDate() + i);

      const dayName = i === 0 ? "Today" : i === 1 ? "Tomorrow" : days[d.getDay()];
      const dateFormatted = `${dayName}, ${d.getDate()} ${months[d.getMonth()]}`;
      const isoDate = d.toISOString().split("T")[0];

      optionsHTML += `<option value="${isoDate}">${dateFormatted}</option>`;
    }

    dateSelect.innerHTML = optionsHTML;
    if (serviceDateSelect) {
      serviceDateSelect.innerHTML = optionsHTML;
    }
  },

  openTestRideModal: function(preselectedModelId = null) {
    if (typeof document === "undefined") return;
    const modal = document.getElementById("test-ride-modal");
    if (!modal) return;

    modal.classList.remove("hidden");
    document.body.classList.add("modal-open");

    const rideSelect = document.getElementById("ride-model-select");
    if (preselectedModelId && rideSelect) {
      rideSelect.value = preselectedModelId;
      BookingEngine.handleModelChange(preselectedModelId);
    }
  },

  closeTestRideModal: function() {
    if (typeof document === "undefined") return;
    const modal = document.getElementById("test-ride-modal");
    if (modal) {
      modal.classList.add("hidden");
      document.body.classList.remove("modal-open");
    }
  },

  handleModelChange: function(modelId) {
    if (typeof document === "undefined") return;
    const list = window.BHARAT_VEHICLES || window.EV_CATALOG || [];
    const ev = list.find(m => m.id === modelId);
    const dlNotice = document.getElementById("ride-dl-notice");
    if (!ev || !dlNotice) return;

    if (ev.category === "cycle") {
      dlNotice.innerHTML = `
        <span class="inline-flex items-center gap-1.5 text-emerald-400 font-medium">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
          100% Legal Exemption: No Driving License or Helmet required for 25 km/h E-Cycles!
        </span>
      `;
    } else {
      dlNotice.innerHTML = `
        <span class="inline-flex items-center gap-1.5 text-amber-400">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>
          Valid Two-Wheeler Driving License & Helmet recommended at test ride time.
        </span>
      `;
    }
  },

  initTestRideForm: function() {
    if (typeof document === "undefined") return;
    const form = document.getElementById("test-ride-form");
    const rideSelect = document.getElementById("ride-model-select");

    if (rideSelect) {
      rideSelect.addEventListener("change", (e) => {
        BookingEngine.handleModelChange(e.target.value);
      });
    }

    if (!form) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const modelId = document.getElementById("ride-model-select").value;
      const rideLocation = document.querySelector('input[name="ride-location"]:checked')?.value || "showroom";
      const date = document.getElementById("ride-date-select").value;
      const timeSlot = document.getElementById("ride-slot-select").value;
      const fullName = document.getElementById("ride-name").value.trim();
      const phone = document.getElementById("ride-phone").value.trim();
      const locality = document.getElementById("ride-locality").value.trim();
      const hasDL = document.getElementById("ride-dl-check")?.checked ?? true;

      const phoneClean = phone.replace(/\D/g, "");
      if (phoneClean.length < 10) {
        alert("Please enter a valid 10-digit mobile number for WhatsApp booking confirmation.");
        return;
      }

      const list = window.BHARAT_VEHICLES || window.EV_CATALOG || [];
      const ev = list.find(m => m.id === modelId) || { name: "Bharat Electric Model" };
      const bookingRef = "BE-TR-" + Math.floor(10000 + Math.random() * 90000);

      const bookingRecord = {
        ref: bookingRef,
        type: "Test Ride Pass",
        modelName: ev.name,
        modelCategory: ev.category || "scooter",
        rideLocation: rideLocation === "showroom" 
          ? "Pillar no. 8, Lala Bazar, GT Road, Handiya Prayagraj" 
          : "Home Doorstep Delivery (Handiya / Prayagraj)",
        date: date,
        timeSlot: timeSlot,
        customerName: fullName,
        phone: phoneClean,
        locality: locality || "Handiya Prayagraj",
        hasDL: hasDL,
        status: "PENDING", // Initial state is PENDING owner approval
        createdAt: new Date().toISOString()
      };

      BookingEngine.activeBookings.unshift(bookingRecord);
      BookingEngine.saveBookings();

      // Trigger On-Site Notification for Owner
      BookingEngine.triggerOwnerNotification(bookingRecord);

      // Open Modal in Pending State
      BookingEngine.showConfirmationTicket(bookingRecord);
      form.reset();
      BookingEngine.closeTestRideModal();
    });
  },

  initServiceForm: function() {
    if (typeof document === "undefined") return;
    const form = document.getElementById("service-booking-form");
    if (!form) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const serviceType = document.getElementById("service-type-select").value;
      const modelId = document.getElementById("service-model-select").value;
      const date = document.getElementById("service-date-select").value;
      const name = document.getElementById("service-name").value.trim();
      const phone = document.getElementById("service-phone").value.trim();

      const phoneClean = phone.replace(/\D/g, "");
      if (phoneClean.length < 10) {
        alert("Please enter a valid 10-digit contact number.");
        return;
      }

      const bookingRef = "BE-SRV-" + Math.floor(10000 + Math.random() * 90000);
      const list = window.BHARAT_VEHICLES || window.EV_CATALOG || [];

      const record = {
        ref: bookingRef,
        type: "Service Appointment",
        serviceName: serviceType,
        modelName: modelId === "other" ? "Electric Vehicle" : (list.find(m => m.id === modelId)?.name || "Bharat EV"),
        branchName: "Bharat Certified Service Hub (Pillar 8, Handiya Prayagraj)",
        date: date,
        timeSlot: "Morning Priority Bay (10:00 AM)",
        customerName: name,
        phone: phoneClean,
        locality: "Handiya Prayagraj",
        status: "PENDING", // PENDING owner confirmation
        createdAt: new Date().toISOString()
      };

      BookingEngine.activeBookings.unshift(record);
      BookingEngine.saveBookings();

      BookingEngine.triggerOwnerNotification(record);
      BookingEngine.showConfirmationTicket(record);
      form.reset();
    });
  },

  /**
   * On-Site Notification Banner & Toast for Owner
   */
  triggerOwnerNotification: function(booking) {
    if (typeof document === "undefined") return;

    // Toast element
    let toast = document.getElementById("owner-live-toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "owner-live-toast";
      toast.className = "fixed bottom-5 right-5 z-50 max-w-sm bg-slate-900 border-2 border-amber-500/80 rounded-2xl p-4 shadow-2xl text-white transform transition-all duration-300 translate-y-20 opacity-0 pointer-events-none";
      document.body.appendChild(toast);
    }

    toast.innerHTML = `
      <div class="flex items-start gap-3">
        <div class="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/40 flex items-center justify-center text-xl font-bold flex-shrink-0 animate-bounce">
          🔔
        </div>
        <div class="flex-1">
          <div class="flex items-center justify-between">
            <span class="text-[10px] font-black uppercase tracking-wider text-amber-400">New Test Ride Request</span>
            <button onclick="document.getElementById('owner-live-toast').classList.add('translate-y-20', 'opacity-0', 'pointer-events-none')" class="text-slate-400 hover:text-white text-xs">&times;</button>
          </div>
          <p class="text-xs font-bold text-white mt-0.5">${booking.customerName} &bull; ${booking.phone}</p>
          <p class="text-[11px] text-slate-300">${booking.modelName} on ${booking.date}</p>
          <div class="mt-2.5 flex items-center gap-2">
            <button onclick="BookingEngine.acceptBooking('${booking.ref}'); document.getElementById('owner-live-toast').classList.add('translate-y-20', 'opacity-0', 'pointer-events-none')" class="px-3 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-[11px] rounded-lg transition-colors flex items-center gap-1">
              ✓ Accept &amp; Confirm
            </button>
            <button onclick="BookingEngine.openOwnerDeskModal('${booking.ref}'); document.getElementById('owner-live-toast').classList.add('translate-y-20', 'opacity-0', 'pointer-events-none')" class="px-2.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-[11px] font-bold rounded-lg transition-colors">
              View Desk &rarr;
            </button>
          </div>
        </div>
      </div>
    `;

    toast.classList.remove("translate-y-20", "opacity-0", "pointer-events-none");

    setTimeout(() => {
      if (toast) {
        toast.classList.add("translate-y-20", "opacity-0", "pointer-events-none");
      }
    }, 12000);
  },

  /**
   * Renders and displays the Ticket Modal in either:
   * 1. PENDING state (Awaiting Owner Confirmation) with direct WhatsApp to owner + Owner Instant Accept button
   * 2. CONFIRMED state (The VIP Test Ride Pass from user screenshot) with green checkmark
   */
  showConfirmationTicket: function(booking) {
    if (typeof document === "undefined") return;
    const ticketModal = document.getElementById("confirmation-ticket-modal");
    if (!ticketModal) return;

    const isConfirmed = booking.status === "CONFIRMED";

    // Header Icon Container
    const iconContainer = document.getElementById("ticket-icon-container");
    if (iconContainer) {
      if (isConfirmed) {
        iconContainer.className = "w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto mb-4 text-3xl font-black";
        iconContainer.innerHTML = `
          <svg class="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/>
          </svg>
        `;
      } else {
        iconContainer.className = "w-16 h-16 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/40 flex items-center justify-center mx-auto mb-4 text-3xl font-black animate-pulse";
        iconContainer.innerHTML = `
          <svg class="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        `;
      }
    }

    // Status Badge
    const statusBadge = document.getElementById("ticket-status-badge");
    if (statusBadge) {
      if (isConfirmed) {
        statusBadge.className = "text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 inline-block mb-1";
        statusBadge.textContent = "BOOKING CONFIRMED & SLOT RESERVED";
      } else {
        statusBadge.className = "text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-500/15 px-3 py-1 rounded-full border border-amber-500/30 inline-block mb-1 flex items-center gap-1.5 justify-center";
        statusBadge.innerHTML = `
          <span class="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
          AWAITING OWNER CONFIRMATION
        `;
      }
    }

    // Title & Subtitle
    const titleEl = document.getElementById("ticket-title");
    const descEl = document.getElementById("ticket-desc");
    if (titleEl) {
      titleEl.textContent = isConfirmed ? "VIP Test Ride Pass" : "Test Ride Request Submitted";
    }
    if (descEl) {
      descEl.textContent = isConfirmed 
        ? "Present this digital ticket at the showroom front desk or save to WhatsApp."
        : "Your booking request is sent to Bharat Electric Motors. Owner must accept to lock slot.";
    }

    // Fill Details
    const refEl = document.getElementById("ticket-ref-id");
    const evEl = document.getElementById("ticket-ev-name");
    const custEl = document.getElementById("ticket-customer-name");
    const dtEl = document.getElementById("ticket-date-time");
    const locEl = document.getElementById("ticket-location");

    if (refEl) refEl.textContent = booking.ref;
    if (evEl) evEl.textContent = booking.modelName;
    if (custEl) custEl.textContent = booking.customerName;
    if (dtEl) dtEl.textContent = `${booking.date} (${booking.timeSlot})`;
    if (locEl) locEl.textContent = booking.rideLocation || this.showroomLocation;

    // Show/Hide Owner Pending Action Box
    const pendingActionBox = document.getElementById("ticket-pending-action-box");
    if (pendingActionBox) {
      if (isConfirmed) {
        pendingActionBox.classList.add("hidden");
      } else {
        pendingActionBox.classList.remove("hidden");
        pendingActionBox.innerHTML = `
          <div class="p-3.5 bg-amber-500/10 border border-amber-500/30 rounded-2xl mb-4 text-left">
            <div class="flex items-start gap-2.5">
              <span class="text-amber-400 text-lg">⚠️</span>
              <div class="text-[11px] text-amber-200">
                <strong class="block text-amber-300 font-bold mb-0.5">Owner Confirmation Pending:</strong>
                Bharat Electric Motors owner will review and confirm your slot. You can also send a direct WhatsApp message to the owner (<strong>8009579794</strong>) for instant approval.
              </div>
            </div>
            
            <div class="mt-3 pt-2.5 border-t border-amber-500/20 flex flex-col sm:flex-row items-center gap-2">
              <button onclick="BookingEngine.acceptBooking('${booking.ref}')" class="w-full sm:w-auto px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs rounded-xl transition-all shadow-md flex items-center justify-center gap-1.5">
                <span>✓ Owner Quick-Accept Slot</span>
              </button>
              <span class="text-[10px] text-slate-400 hidden sm:inline">(Owner / Admin Preview)</span>
            </div>
          </div>
        `;
      }
    }

    // WhatsApp Action Button
    const waBtn = document.getElementById("ticket-wa-share-btn");
    const waBtnText = document.getElementById("ticket-wa-btn-text");
    if (waBtn) {
      if (isConfirmed) {
        const waText = encodeURIComponent(
          `*BHARAT ELECTRIC MOTORS - VIP TEST RIDE PASS*\n` +
          `----------------------------------------\n` +
          `Status: ✅ CONFIRMED & SLOT RESERVED\n` +
          `Pass Ref: ${booking.ref}\n` +
          `Model: ${booking.modelName}\n` +
          `Rider: ${booking.customerName}\n` +
          `Phone: ${booking.phone}\n` +
          `Date & Slot: ${booking.date} (${booking.timeSlot})\n` +
          `Showroom Location: Pillar no. 8, Lala Bazar, GT Road, Handiya Prayagraj\n` +
          `----------------------------------------\n` +
          `See you at the showroom! Contact: 8009579794 / 9875052329`
        );
        waBtn.href = `https://wa.me/918009579794?text=${waText}`;
        if (waBtnText) waBtnText.textContent = "SAVE / SHARE ON WHATSAPP";
      } else {
        const waText = encodeURIComponent(
          `*NEW TEST RIDE REQUEST - BHARAT ELECTRIC MOTORS*\n` +
          `----------------------------------------\n` +
          `Hello Showroom Owner! Please accept & confirm my test ride:\n` +
          `Pass Ref: ${booking.ref}\n` +
          `Model: ${booking.modelName}\n` +
          `Customer: ${booking.customerName}\n` +
          `Contact: ${booking.phone}\n` +
          `Locality: ${booking.locality || 'Handiya Prayagraj'}\n` +
          `Date & Slot: ${booking.date} (${booking.timeSlot})\n` +
          `Showroom: Pillar no. 8, Lala Bazar, GT Road, Handiya Prayagraj\n` +
          `----------------------------------------\n` +
          `Please click accept or reply with confirmation. Thank you!`
        );
        waBtn.href = `https://wa.me/918009579794?text=${waText}`;
        if (waBtnText) waBtnText.textContent = "SEND TO OWNER ON WHATSAPP (8009579794)";
      }
    }

    ticketModal.classList.remove("hidden");
    document.body.classList.add("modal-open");
  },

  closeTicketModal: function() {
    if (typeof document === "undefined") return;
    const ticketModal = document.getElementById("confirmation-ticket-modal");
    if (ticketModal) {
      ticketModal.classList.add("hidden");
      document.body.classList.remove("modal-open");
    }
  },

  /**
   * OWNER ACTION: Accept Booking
   * Flips status from PENDING to CONFIRMED
   */
  acceptBooking: function(ref) {
    const booking = this.activeBookings.find(b => b.ref === ref);
    if (!booking) return;

    booking.status = "CONFIRMED";
    booking.confirmedAt = new Date().toISOString();
    this.saveBookings();

    // Re-show ticket in confirmed state
    this.showConfirmationTicket(booking);

    // If Owner Desk is open, refresh it
    this.renderOwnerDeskList();

    // Show confirmation alert
    alert(`🎉 Booking ${ref} ACCEPTED & CONFIRMED!\nVIP Test Ride Pass issued for ${booking.customerName}.\nShowroom: Pillar no. 8, Lala Bazar, GT Road, Handiya Prayagraj.`);
  },

  /**
   * OWNER ACTION: Decline Booking
   */
  declineBooking: function(ref) {
    if (confirm(`Are you sure you want to decline booking request ${ref}?`)) {
      this.activeBookings = this.activeBookings.filter(b => b.ref !== ref);
      this.saveBookings();
      this.renderOwnerDeskList();
      this.closeTicketModal();
    }
  },

  /**
   * OWNER DESK MODAL
   * Allows the owner to view all pending and confirmed test rides
   */
  openOwnerDeskModal: function(highlightRef = null) {
    if (typeof document === "undefined") return;
    const modal = document.getElementById("owner-desk-modal");
    if (!modal) return;

    this.renderOwnerDeskList(highlightRef);
    modal.classList.remove("hidden");
    document.body.classList.add("modal-open");
  },

  closeOwnerDeskModal: function() {
    if (typeof document === "undefined") return;
    const modal = document.getElementById("owner-desk-modal");
    if (modal) {
      modal.classList.add("hidden");
      document.body.classList.remove("modal-open");
    }
  },

  renderOwnerDeskList: function(highlightRef = null) {
    if (typeof document === "undefined") return;
    const container = document.getElementById("owner-desk-list-container");
    const pendingCountBadge = document.getElementById("owner-desk-pending-count");
    if (!container) return;

    const pending = this.activeBookings.filter(b => b.status === "PENDING");
    const confirmed = this.activeBookings.filter(b => b.status === "CONFIRMED");

    if (pendingCountBadge) {
      pendingCountBadge.textContent = `${pending.length} Pending`;
    }

    if (this.activeBookings.length === 0) {
      container.innerHTML = `
        <div class="text-center py-12 text-slate-400">
          <p class="font-bold text-slate-200">No Booking Inquiries Yet</p>
          <p class="text-xs text-slate-400 mt-1">Incoming test rides and service appointments will appear here for one-click approval.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = `
      <!-- PENDING REQUESTS SECTION -->
      <div class="mb-6">
        <div class="flex items-center justify-between mb-3">
          <h4 class="text-xs font-black uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
            Awaiting Owner Confirmation (${pending.length})
          </h4>
        </div>

        ${pending.length === 0 ? `
          <div class="p-4 bg-slate-900/50 rounded-2xl border border-slate-800 text-center text-xs text-slate-400">
            ✅ All test ride requests are cleared and confirmed!
          </div>
        ` : `
          <div class="space-y-3">
            ${pending.map(b => `
              <div class="p-4 rounded-2xl bg-slate-900/90 border-2 ${highlightRef === b.ref ? 'border-amber-400 ring-2 ring-amber-400/40' : 'border-amber-500/40'} text-xs">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2.5 border-b border-slate-800">
                  <div class="flex items-center gap-2">
                    <span class="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      ⏳ Pending Approval
                    </span>
                    <span class="font-mono font-bold text-cyan-400">${b.ref}</span>
                  </div>
                  <span class="text-[11px] text-slate-400">${new Date(b.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 my-3">
                  <div>
                    <span class="text-[10px] uppercase text-slate-500 font-bold block">Customer:</span>
                    <strong class="text-white text-sm block">${b.customerName}</strong>
                    <span class="text-slate-300 font-mono">📱 +91 ${b.phone}</span>
                    <p class="text-[11px] text-slate-400 mt-0.5">📍 ${b.locality || 'Handiya Prayagraj'}</p>
                  </div>
                  <div>
                    <span class="text-[10px] uppercase text-slate-500 font-bold block">Vehicle &amp; Slot:</span>
                    <strong class="text-emerald-400 text-sm block">${b.modelName}</strong>
                    <span class="text-slate-300">🗓️ ${b.date} &bull; ${b.timeSlot}</span>
                    <p class="text-[11px] text-slate-400 mt-0.5">Showroom: Pillar no. 8, Handiya</p>
                  </div>
                </div>

                <div class="pt-2.5 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2">
                  <div class="flex items-center gap-2">
                    <button onclick="BookingEngine.acceptBooking('${b.ref}')" class="px-3.5 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs rounded-xl transition-all shadow flex items-center gap-1.5">
                      <span>✓ Accept &amp; Confirm</span>
                    </button>
                    <a href="https://wa.me/91${b.phone}?text=${encodeURIComponent('Hello ' + b.customerName + ', Bharat Electric Motors (Pillar no. 8, Handiya Prayagraj) has received your test ride request for ' + b.modelName + '. We are happy to confirm your slot!')}" target="_blank" class="px-3 py-2 bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/30 text-emerald-300 font-bold text-xs rounded-xl transition-colors flex items-center gap-1.5">
                      <span>💬 WhatsApp Rider</span>
                    </a>
                  </div>
                  <button onclick="BookingEngine.declineBooking('${b.ref}')" class="text-xs text-rose-400 hover:text-rose-300 font-semibold px-2 py-1">
                    Decline
                  </button>
                </div>
              </div>
            `).join("")}
          </div>
        `}
      </div>

      <!-- CONFIRMED SECTION -->
      <div>
        <h4 class="text-xs font-black uppercase tracking-wider text-emerald-400 mb-3 flex items-center gap-1.5">
          <span>✓ Confirmed VIP Test Rides (${confirmed.length})</span>
        </h4>
        <div class="space-y-2">
          ${confirmed.map(b => `
            <div class="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <div class="flex items-center gap-2">
                  <strong class="text-white font-bold">${b.customerName}</strong>
                  <span class="text-emerald-400 font-medium">(${b.modelName})</span>
                  <span class="font-mono text-[11px] text-slate-500">${b.ref}</span>
                </div>
                <p class="text-[11px] text-slate-400 mt-0.5">🗓️ ${b.date} &bull; ${b.timeSlot} &bull; 📱 +91 ${b.phone}</p>
              </div>
              <button onclick="BookingEngine.showConfirmationTicket(BookingEngine.activeBookings.find(x => x.ref === '${b.ref}'))" class="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-emerald-400 font-bold text-xs rounded-xl transition-colors self-start sm:self-auto">
                View Digital Pass &rarr;
              </button>
            </div>
          `).join("")}
        </div>
      </div>
    `;
  },

  renderBadges: function() {
    if (typeof document === "undefined") return;
    const badgeEl = document.getElementById("active-bookings-count");
    const ownerBadgeEl = document.getElementById("owner-pending-badge");
    const mobileOwnerBadgeEl = document.getElementById("mobile-owner-pending-badge");

    const totalCount = this.activeBookings.length;
    const pendingCount = this.activeBookings.filter(b => b.status === "PENDING").length;

    if (badgeEl) {
      if (totalCount > 0) {
        badgeEl.textContent = totalCount;
        badgeEl.classList.remove("hidden");
      } else {
        badgeEl.classList.add("hidden");
      }
    }

    const updateOwnerBadge = (el) => {
      if (!el) return;
      if (pendingCount > 0) {
        el.textContent = pendingCount;
        el.classList.remove("hidden");
      } else {
        el.classList.add("hidden");
      }
    };

    updateOwnerBadge(ownerBadgeEl);
    updateOwnerBadge(mobileOwnerBadgeEl);
  },

  openMyBookingsDrawer: function() {
    if (typeof document === "undefined") return;
    const drawer = document.getElementById("my-bookings-drawer");
    const container = document.getElementById("bookings-list-container");
    if (!drawer || !container) return;

    if (BookingEngine.activeBookings.length === 0) {
      container.innerHTML = `
        <div class="text-center py-12 text-slate-400">
          <div class="w-16 h-16 mx-auto mb-3 rounded-full bg-slate-800 flex items-center justify-center text-slate-500 text-2xl">
            ⚡
          </div>
          <p class="font-bold text-slate-200">No Active Appointments Found</p>
          <p class="text-xs text-slate-400 mt-1">Book your free test ride at Pillar no. 8 Handiya to view your digital pass here.</p>
          <button onclick="BookingEngine.closeMyBookingsDrawer(); BookingEngine.openTestRideModal();" class="mt-4 px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl transition-colors">
            Book Free Test Ride Now
          </button>
        </div>
      `;
    } else {
      container.innerHTML = BookingEngine.activeBookings.map((b) => `
        <div class="bg-slate-800/80 border ${b.status === 'CONFIRMED' ? 'border-emerald-500/40' : 'border-amber-500/40'} rounded-2xl p-4 relative overflow-hidden">
          <div class="flex items-center justify-between mb-2">
            <span class="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
              b.status === 'CONFIRMED' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
            }">
              ${b.status === 'CONFIRMED' ? '✓ CONFIRMED' : '⏳ AWAITING OWNER APPROVAL'}
            </span>
            <span class="font-mono text-xs font-bold text-cyan-400">${b.ref}</span>
          </div>
          <h4 class="font-black text-white text-base">${b.modelName}</h4>
          <p class="text-xs text-slate-300 mt-1 flex items-center gap-1.5">
            <svg class="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
            ${b.date} &bull; ${b.timeSlot}
          </p>
          <p class="text-xs text-slate-400 mt-1 flex items-center gap-1.5">
            <svg class="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/></svg>
            ${b.rideLocation || 'Pillar no. 8, Lala Bazar, GT Road, Handiya Prayagraj'}
          </p>
          <div class="mt-3 pt-3 border-t border-slate-700/60 flex items-center justify-between">
            <button onclick="BookingEngine.cancelBooking('${b.ref}')" class="text-xs text-rose-400 hover:text-rose-300 font-semibold">
              Cancel
            </button>
            <button onclick="BookingEngine.showConfirmationTicket(BookingEngine.activeBookings.find(x => x.ref === '${b.ref}'))" class="text-xs font-bold ${b.status === 'CONFIRMED' ? 'text-emerald-400' : 'text-amber-300'} hover:underline flex items-center gap-1">
              View Digital Pass &rarr;
            </button>
          </div>
        </div>
      `).join("");
    }

    drawer.classList.remove("hidden");
    document.body.classList.add("modal-open");
  },

  closeMyBookingsDrawer: function() {
    if (typeof document === "undefined") return;
    const drawer = document.getElementById("my-bookings-drawer");
    if (drawer) {
      drawer.classList.add("hidden");
      document.body.classList.remove("modal-open");
    }
  },

  cancelBooking: function(ref) {
    if (confirm(`Are you sure you want to cancel appointment ${ref}?`)) {
      this.activeBookings = this.activeBookings.filter(b => b.ref !== ref);
      this.saveBookings();
      this.openMyBookingsDrawer();
    }
  }
};

if (typeof window !== "undefined") {
  window.BookingEngine = BookingEngine;
}
