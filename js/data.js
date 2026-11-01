/**
 * Bharat Electric Motors - Official Brand & EV Manufacturer Data
 * Signature Electric Vehicles, Proprietary Motors & Powertrains
 */

const BHARAT_BRAND = {
  name: "Bharat Electric Motors",
  shortName: "Bharat Electric Motors",
  legalName: "Bharat Electric Motors Mobility Pvt. Ltd.",
  tagline: "Engineered for India. Zero Emissions. Pure Electric Power.",
  established: 2018,
  founderQuote: "We engineer proprietary electric motors, ultra-safe battery packs, and high-performance electric mobility built tough for Indian roads.",
  phone: "+91 80095 79794",
  altPhone: "+91 98750 52329",
  whatsappNumber: "8009579794",
  secondaryWhatsapp: "9875052329",
  email: "contact@bharatelectricmotors.com",
  salesEmail: "sales@bharatelectricmotors.com",
  supportEmail: "support@bharatelectricmotors.com",
  serviceEmail: "service@bharatelectricmotors.com",
  address: "Pillar no. 8, Lala Bazar, GT Road, Handiya Prayagraj, UP - 221503",
  city: "Handiya, Prayagraj",
  state: "Uttar Pradesh"
};

// ==================== BHARAT PROPRIETARY FLEET ====================
const BHARAT_VEHICLES = [
  // ---------- SCOOTERS ----------
  {
    id: "bharat-veloce-pro",
    name: "Bharat Veloce Pro",
    series: "Veloce HyperSeries",
    category: "scooter",
    badge: "Flagship Performance",
    tagline: "India's smartest hyper-performance electric scooter. 0 to 40 km/h in 2.9s with Warp mode.",
    description: "The Bharat Veloce Pro represents the pinnacle of Indian electric vehicle engineering. Powered by our proprietary 8.5 kW Bharat HyperDrive™ PMSM motor and a 4.0 kWh PowerCell™ high-density pack, it delivers thrilling acceleration, 185 km certified range, and intelligent cornering stability.",
    exShowroomPrice: 139999,
    subsidy: 18500,
    rtoCharges: 950,
    insurance: 5200,
    topSpeed: 115,
    certifiedRange: 185,
    realWorldRange: 145,
    acceleration: "0-40 km/h in 2.9s",
    batteryCapacity: 4.0,
    batteryType: "Bharat PowerCell™ NMC Lithium-ion (IP67 Sealed)",
    batteryRemovable: false,
    chargingTimeStandard: "4.5 hrs (0-100% Home Wallbox)",
    chargingTimeFast: "0 to 80% in 45 mins (Bharat SuperCharge Bay)",
    motorName: "Bharat HyperDrive™ Pro PMSM",
    motorPower: "8.5 kW Peak (4.5 kW Rated)",
    motorTorque: "72 Nm at Wheel",
    motorType: "Mid-Drive Synchronous PMSM with Carbon Belt Transmission",
    carryingCapacity: 165,
    kerbWeight: 112,
    bootSpace: "28 Litres (Fits full-face helmet)",
    warrantyBattery: "5 Years / 60,000 km (70% State of Health Guarantee)",
    warrantyVehicle: "3 Years / 40,000 km",
    ridingModes: ["Eco", "City", "Sport", "Warp"],
    brakes: "Dual Hydraulic Discs (220mm Front / 190mm Rear) with CBS & Regen Braking",
    suspension: "Telescopic Fork Front & Preload Monoshock Rear",
    features: [
      "7-inch Anti-Glare Smart Touchscreen with Turn-by-Turn GPS",
      "AutoHold™ Hill-Start Assist & Reverse Park Assist",
      "FallSafe™ Auto Motor Cut-off Sensor",
      "Live 4G Telematics, OTA Updates & Geo-Fencing",
      "Dynamic Regenerative Braking recovering up to 15% energy"
    ],
    colors: [
      { name: "Emerald Carbon", hex: "#10B981" },
      { name: "Stealth Black", hex: "#111827" },
      { name: "Arctic Pearl", hex: "#F8FAFC" },
      { name: "Cyan Spark", hex: "#06B6D4" }
    ],
    accentColor: "#10B981"
  },
  {
    id: "bharat-glide-s",
    name: "Bharat Glide S",
    series: "Glide Comfort Series",
    category: "scooter",
    badge: "Family Comfort",
    tagline: "Plush ergonomics, 34-litre mega boot space, and 140 km range for daily family commutes.",
    description: "Engineered specifically for the modern Indian family. Features ultra-cushioned seating, a flat floorboard capable of carrying standard gas cylinders or grocery crates, and whisper-silent direct drive hub motor technology.",
    exShowroomPrice: 118500,
    subsidy: 16000,
    rtoCharges: 950,
    insurance: 4800,
    topSpeed: 85,
    certifiedRange: 140,
    realWorldRange: 115,
    acceleration: "0-40 km/h in 3.8s",
    batteryCapacity: 3.4,
    batteryType: "Bharat PowerCell™ Advanced LFP (ThermalShield)",
    batteryRemovable: false,
    chargingTimeStandard: "4.0 hrs (0-100% Home 5A Socket)",
    chargingTimeFast: "60 mins for 80% Fast Charge",
    motorName: "Bharat SilentTorque™ BLDC",
    motorPower: "4.5 kW Peak (3.0 kW Rated)",
    motorTorque: "54 Nm Direct Drive",
    motorType: "Gearless High-Efficiency BLDC Wheel Hub Motor (<42 dB)",
    carryingCapacity: 160,
    kerbWeight: 116,
    bootSpace: "34 Litres (Large enough for two helmets)",
    warrantyBattery: "5 Years / 50,000 km",
    warrantyVehicle: "3 Years / 40,000 km",
    ridingModes: ["Eco Cruise", "Power"],
    brakes: "Front 200mm Disc & Rear 130mm Drum with CBS",
    suspension: "Hydraulic Twin Telescopic Front & Dual Shocks Rear",
    features: [
      "Ultra-wide cushioned contour seat with pillion backrest",
      "Integrated fast USB-C phone charger in front glove pocket",
      "Keyless ignition & Anti-theft motion alarm",
      "Large flat floorboard designed for heavy luggage",
      "Side-stand motor cutoff sensor for 100% safety"
    ],
    colors: [
      { name: "Slate Grey", hex: "#4B5563" },
      { name: "Mint Emerald", hex: "#34D399" },
      { name: "Deep Navy", hex: "#1E3A8A" },
      { name: "Metallic Crimson", hex: "#DC2626" }
    ],
    accentColor: "#3B82F6"
  },
  {
    id: "bharat-ecocity-plus",
    name: "Bharat EcoCity+",
    series: "EcoCity Urban Series",
    category: "scooter",
    badge: "Removable Battery",
    tagline: "Twin detachable batteries you can carry upstairs to your apartment. 18 paise/km running cost.",
    description: "The ideal solution for apartment dwellers and urban daily commuters. Simply unclick the twin portable battery packs and plug them into any regular wall socket inside your flat or office desk.",
    exShowroomPrice: 89900,
    subsidy: 12000,
    rtoCharges: 900,
    insurance: 3800,
    topSpeed: 68,
    certifiedRange: 125,
    realWorldRange: 98,
    acceleration: "0-40 km/h in 4.5s",
    batteryCapacity: 2.8,
    batteryType: "Twin Detachable Bharat PowerCell™ Packs (1.4 kWh each)",
    batteryRemovable: true,
    chargingTimeStandard: "3.5 hrs (Plug into any 5A household 3-pin socket)",
    chargingTimeFast: "Swap ready / Dual charging dock",
    motorName: "Bharat EcoDrive™ BLDC",
    motorPower: "3.0 kW Peak (1.8 kW Rated)",
    motorTorque: "42 Nm",
    motorType: "Direct Hub High Efficiency Motor (IP67)",
    carryingCapacity: 150,
    kerbWeight: 89,
    bootSpace: "20 Litres (plus under-seat battery holster)",
    warrantyBattery: "3 Years / 40,000 km",
    warrantyVehicle: "3 Years / 30,000 km",
    ridingModes: ["City", "Eco SuperSaver"],
    brakes: "Mechanical Drum with Electronic Assisted Braking",
    suspension: "Telescopic Front & Coil Spring Rear",
    features: [
      "Twin lightweight portable batteries with ergonomic carry handles",
      "Charge anywhere — apartment, office, or standard 5A socket",
      "Lowest operating cost under 18 paise per kilometer",
      "Digital speedometer with battery percentage and range estimation",
      "Zero oil changes, zero spark plugs, near-zero maintenance"
    ],
    colors: [
      { name: "Electric Green", hex: "#10B981" },
      { name: "Matte Black", hex: "#18181B" },
      { name: "Glacier White", hex: "#F3F4F6" }
    ],
    accentColor: "#10B981"
  },

  // ---------- MOTORCYCLES ----------
  {
    id: "bharat-thunderbolt-f1",
    name: "Bharat Thunderbolt F1",
    series: "Thunderbolt SuperSeries",
    category: "bike",
    badge: "Electric Superbike",
    tagline: "Aggressive street naked styling, 130 km/h top speed, and 210 km range with Bosch Dual ABS.",
    description: "Designed for riders who crave adrenaline with zero carbon guilt. The Thunderbolt F1 couples our mighty 14.0 kW Bharat HyperDrive™ Mid-Drive motor with an aerospace trellis frame, giving you thrilling instant torque from 0 RPM.",
    exShowroomPrice: 174999,
    subsidy: 22000,
    rtoCharges: 1100,
    insurance: 5900,
    topSpeed: 130,
    certifiedRange: 210,
    realWorldRange: 165,
    acceleration: "0-60 km/h in 3.2s",
    batteryCapacity: 6.0,
    batteryType: "Bharat PowerCell™ Pro SRB Lithium-ion (Multi-Sensor BMS)",
    batteryRemovable: false,
    chargingTimeStandard: "4.0 hrs (Home 15A Socket)",
    chargingTimeFast: "20% to 80% in 35 mins (Bharat SuperCharge Bay)",
    motorName: "Bharat HyperDrive™ Beast PMSM",
    motorPower: "14.0 kW Peak (8.0 kW Rated)",
    motorTorque: "88 Nm Instant Torque",
    motorType: "Mid-Drive Axial Flux PMSM with Gates Carbon Belt Drive",
    carryingCapacity: 165,
    kerbWeight: 142,
    bootSpace: "Integrated tank compartment with wireless smartphone pad",
    warrantyBattery: "8 Years / 80,000 km Battery Health Guarantee",
    warrantyVehicle: "5 Years / 60,000 km",
    ridingModes: ["Glide", "Combat", "Ballistic Mode"],
    brakes: "300mm Front & 240mm Rear Hydraulic Discs with Bosch Dual-Channel ABS",
    suspension: "41mm Gold Inverted USD Forks (Front) & Monoshock (Rear)",
    features: [
      "Ballistic Mode: 0-60 km/h in just 3.2 seconds",
      "Bosch Dual-Channel ABS with Cornering Traction Control",
      "5-inch High-Brightness Color TFT Dash with Mobile App Telematics",
      "Customizable artificial engine sound synthesiser (optional on/off)",
      "High ground clearance of 195mm for rough city roads"
    ],
    colors: [
      { name: "Supernova Red", hex: "#EF4444" },
      { name: "Electric Cyan", hex: "#06B6D4" },
      { name: "Stealth Graphite", hex: "#1F2937" }
    ],
    accentColor: "#EF4444"
  },
  {
    id: "bharat-striker-350",
    name: "Bharat Striker 350",
    series: "Striker Roadster Series",
    category: "bike",
    badge: "Neo Roadster",
    tagline: "Classic muscular roadster stance with 95 km/h speed and all-day riding comfort.",
    description: "Combining vintage motorcycle aesthetics with cutting-edge electric performance. Built with a relaxed upright riding posture, heavy-duty suspension, and our ultra-safe LFP battery chemistry.",
    exShowroomPrice: 142000,
    subsidy: 17500,
    rtoCharges: 1100,
    insurance: 5200,
    topSpeed: 95,
    certifiedRange: 160,
    realWorldRange: 125,
    acceleration: "0-40 km/h in 3.4s",
    batteryCapacity: 4.2,
    batteryType: "Bharat PowerCell™ LFP (50% Higher Thermal Stability)",
    batteryRemovable: false,
    chargingTimeStandard: "3.5 hrs (0-100% Home 15A Socket)",
    chargingTimeFast: "2 hrs Full Fast Charge",
    motorName: "Bharat HyperDrive™ Roadster",
    motorPower: "8.0 kW Peak (4.5 kW Rated)",
    motorTorque: "60 Nm",
    motorType: "Direct Mid-Mount Motor with Chain Final Drive",
    carryingCapacity: 160,
    kerbWeight: 132,
    bootSpace: "Faux tank utility compartment with lock",
    warrantyBattery: "5 Years / 60,000 km",
    warrantyVehicle: "3 Years / 50,000 km",
    ridingModes: ["Eco Cruising", "City Hustle", "Sport"],
    brakes: "Front 260mm Disc & Rear 220mm Disc with CBS",
    suspension: "Telescopic 37mm Front & 7-Step Adjustable Twin Shocks",
    features: [
      "Neo-retro round LED headlamp with signature horseshoe DRL",
      "Upright wide handlebars for fatigue-free long commutes",
      "Heavy-duty metal side frame and crash guards included",
      "Waterproof IP67 wiring harness engineered for downpours",
      "Reverse creep assist for effortless parking on inclines"
    ],
    colors: [
      { name: "Voltaic Gold", hex: "#EAB308" },
      { name: "Midnight Black", hex: "#111827" },
      { name: "Racing Blue", hex: "#1D4ED8" }
    ],
    accentColor: "#F59E0B"
  },

  // ---------- ELECTRIC CYCLES / PEDELECS ----------
  {
    id: "bharat-trailblazer-29t",
    name: "Bharat TrailBlazer 29T",
    series: "TrailBlazer E-Cycle",
    category: "cycle",
    badge: "All-Terrain MTB",
    tagline: "21-Speed Shimano gears, front suspension lockout & 60 km range. No driving license required!",
    description: "Conquer flyovers, city potholes, and weekend trails with equal ease. The TrailBlazer 29T gives you 5 levels of electric pedal assist or pure electric twist throttle.",
    exShowroomPrice: 46999,
    subsidy: 3000,
    rtoCharges: 0,
    insurance: 1100,
    topSpeed: 25,
    certifiedRange: 60,
    realWorldRange: 50,
    acceleration: "Instant electric pedal assist",
    batteryCapacity: 0.38,
    batteryType: "Removable Samsung Cell Li-ion with Key Lock (36V 10.4Ah)",
    batteryRemovable: true,
    chargingTimeStandard: "3.5 hrs (Compact laptop-style charger)",
    chargingTimeFast: "Standard AC only",
    motorName: "Bharat EcoPedal™ Hub Motor",
    motorPower: "250W High-Torque Geared Hub Motor",
    motorTorque: "42 Nm",
    motorType: "Brushless Geared Hub Motor with Planetary Reduction",
    carryingCapacity: 125,
    kerbWeight: 20.5,
    bootSpace: "Compatible with rear pannier racks & mudguards",
    warrantyBattery: "2 Years Comprehensive Guarantee",
    warrantyVehicle: "Lifetime Frame Warranty, 1 Year Electricals",
    ridingModes: ["Pedal Assist (5 Levels)", "Full Electric Twist Throttle", "Manual Cycling (21 Gears)"],
    brakes: "Dual Mechanical Disc Brakes with Automatic Motor Cut-Off",
    suspension: "Crown Lockout Suspension Fork (100mm travel)",
    features: [
      "100% Legal Exemption: No Driving License, Helmet Law, or RTO Registration needed",
      "Shimano Tourney 21-Speed (3x7) precision gear drivetrain",
      "Key-locked removable battery — charge anywhere in your flat",
      "Backlit M5 LCD display showing speed, odometer, and assist level",
      "Aircraft-grade 6061 Aluminum Alloy Frame"
    ],
    colors: [
      { name: "Forest Olive", hex: "#4D7C0F" },
      { name: "Matte Black", hex: "#18181B" },
      { name: "Neon Lime", hex: "#84CC16" }
    ],
    accentColor: "#84CC16"
  },
  {
    id: "bharat-urbanlite-e1",
    name: "Bharat UrbanLite E1",
    series: "UrbanLite E-Cycle",
    category: "cycle",
    badge: "Ultra-Lightweight Commuter",
    tagline: "Weighs only 16.5 kg with an invisible in-tube battery and RFID tap-to-unlock. Pure urban elegance.",
    description: "Designed for fitness-conscious commuters and apartment living. Features an internal battery hidden inside the aerodynamic aluminum frame, looking just like an elegant classic bicycle.",
    exShowroomPrice: 36999,
    subsidy: 2500,
    rtoCharges: 0,
    insurance: 990,
    topSpeed: 25,
    certifiedRange: 50,
    realWorldRange: 42,
    acceleration: "Smooth progressive sensor assist",
    batteryCapacity: 0.28,
    batteryType: "Seamless Integrated In-Tube Li-ion Pack (IP67)",
    batteryRemovable: false,
    chargingTimeStandard: "2.5 hrs (Fast charging adapter included)",
    chargingTimeFast: "Standard AC",
    motorName: "Bharat WhisperDrive™ 250W",
    motorPower: "250W High-Efficiency Motor",
    motorTorque: "38 Nm",
    motorType: "Super-Silent Rear Hub Motor",
    carryingCapacity: 115,
    kerbWeight: 16.5,
    bootSpace: "Mount points for front basket & water bottle",
    warrantyBattery: "2 Years Replacement Guarantee",
    warrantyVehicle: "Lifetime Frame Warranty, 2 Years Motor",
    ridingModes: ["Eco Assist", "Normal Assist", "Boost Assist", "Manual"],
    brakes: "Dual Disc Brakes with Electronic Safety Cut-Off",
    suspension: "Rigid Aero Aluminum Hydroformed Fork",
    features: [
      "Featherweight 16.5 kg: easily carry it up staircase or into elevators",
      "Tap-to-Unlock RFID Smart Keycard security",
      "Clean in-tube battery keeps frame looking sleek and uncluttered",
      "Puncture-resistant Kenda urban hybrid tires",
      "Walking mode (6 km/h assist for pushing up flyover ramps)"
    ],
    colors: [
      { name: "Cyan Teal", hex: "#06B6D4" },
      { name: "Graphite Anthracite", hex: "#374151" }
    ],
    accentColor: "#06B6D4"
  }
];

// ==================== BHARAT PROPRIETARY MOTORS & TECHNOLOGY SHOWCASE ====================
const BHARAT_MOTOR_TECH = [
  {
    id: "hyperdrive-pmsm",
    name: "Bharat HyperDrive™ PMSM",
    type: "Permanent Magnet Synchronous Motor (Mid-Drive)",
    powerRange: "8.5 kW to 14.0 kW Peak",
    efficiency: "96.2% Peak Efficiency",
    cooling: "LiquidCool™ & AirJacket Dual Thermal Management",
    torque: "Up to 88 Nm Instant Torque",
    features: [
      "Neodymium Grade-N48 Rare Earth Magnets",
      "Zero copper loss winding architecture",
      "IP67 hermetically sealed against water and dust ingress",
      "Seamless Gates Carbon Belt transmission with zero maintenance"
    ],
    application: "Powering Bharat Veloce Pro and Thunderbolt F1",
    icon: "⚡"
  },
  {
    id: "silenttorque-bldc",
    name: "Bharat SilentTorque™ Hub",
    type: "Brushless DC Direct Drive Wheel Hub Motor",
    powerRange: "3.0 kW to 4.5 kW Peak",
    efficiency: "93.8% Efficiency",
    cooling: "Passive Multi-Fin Aluminum Heat Sinks",
    torque: "54 Nm Direct Instant Wheel Torque",
    features: [
      "Near-silent operation (<42 dB sound emission)",
      "Zero chain or belt wear — motor is inside the rear wheel",
      "Built-in electronic anti-lock regenerative braking",
      "100% maintenance-free for 1,00,000+ kilometers"
    ],
    application: "Powering Bharat Glide S and EcoCity+",
    icon: "🔇"
  },
  {
    id: "ecopedal-hub",
    name: "Bharat EcoPedal™ 250W",
    type: "Planetary Geared Micro Hub Motor",
    powerRange: "250 Watt (ARA-Exempt 25 km/h)",
    efficiency: "89.5% Efficiency",
    cooling: "Sealed Aluminum Housing",
    torque: "42 Nm High Climbing Torque",
    features: [
      "Internal planetary reduction gears provide 2.5x climb torque",
      "Instant 12-magnet cadence sensor for zero pedal lag",
      "No Driving License, Registration, or Helmet Law required by Indian law",
      "Integrated free-wheel clutch for natural zero-drag manual pedaling"
    ],
    application: "Powering Bharat TrailBlazer 29T and UrbanLite E1",
    icon: "🚲"
  }
];

// ==================== BHARAT SHOWROOMS & EXPERIENCE CENTERS ====================
const BHARAT_BRANCHES = [
  {
    id: "flagship-hub-handiya",
    name: "Bharat Electric Motors Flagship Showroom & Experience Center",
    type: "Flagship Showroom & EV Experience Hub",
    address: "Pillar no. 8, Lala Bazar, GT Road, Handiya Prayagraj, UP - 221503",
    landmark: "Pillar No. 8, Lala Bazar, GT Road",
    phone: "+91 80095 79794",
    altPhone: "+91 98750 52329",
    whatsapp: "8009579794",
    hours: "Monday – Sunday: 9:00 AM – 8:30 PM (Open 7 Days)",
    facilities: [
      "Exclusive Bharat Electric Motors Experience Showcase",
      "Dedicated EV Test Ride Track & Safe Trials",
      "Fast Charging & Battery Health Station",
      "Customer VIP Lounge & Free Wi-Fi",
      "Instant 15-Minute Paperless Loan Approval Desk",
      "Direct Aadhaar Subsidy Deduction Counter"
    ],
    mapCoord: { lat: 25.3582, lng: 82.1852 }
  },
  {
    id: "service-diagnostics-handiya",
    name: "Bharat Certified Service & Diagnostics Hub",
    type: "Authorized Service, Battery Balancing & Genuine Spares Hub",
    address: "Near Pillar no. 8, Lala Bazar, GT Road, Handiya Prayagraj, UP - 221503",
    phone: "+91 80095 79794",
    altPhone: "+91 98750 52329",
    whatsapp: "8009579794",
    hours: "Monday – Saturday: 9:00 AM – 7:00 PM (Sunday Closed for Service)",
    facilities: [
      "Dedicated Bharat EV Diagnostics Service Bays",
      "Computerized Cell Balancing & Health Restoration",
      "100% Genuine Bharat Electric Motors OEM Spare Parts",
      "Water-Wading & Monsoon Seal Testing",
      "24x7 Emergency Roadside Assistance (RSA) Dispatch"
    ],
    mapCoord: { lat: 25.3582, lng: 82.1852 }
  }
];

// ==================== BUYER FAQS ====================
const BHARAT_FAQS = [
  {
    question: "Why choose Bharat Electric Motors over third-party multi-brand dealers?",
    answer: "Bharat Electric Motors is not a middleman or aggregator. We are an integrated electric vehicle showroom and company offering proprietary Bharat HyperDrive™ motors, PowerCell™ battery packs, and purpose-built vehicle chassis. When you buy from Bharat Electric Motors at Pillar no. 8, Handiya Prayagraj, you receive direct manufacturer pricing, zero hidden commissions, direct factory warranty, and dedicated after-sales service with 100% genuine parts."
  },
  {
    question: "How do government subsidies (Central PM E-Drive & UP State EV Policy) work on Bharat vehicles?",
    answer: "Every Bharat electric scooter and motorcycle is certified under the Central PM E-Drive scheme and Uttar Pradesh EV policies. We deduct your eligible subsidy directly from the invoice upfront at our Handiya Prayagraj showroom. You don't need to run around RTO offices — you pay only the net on-road price directly."
  },
  {
    question: "How durable is the Bharat PowerCell™ battery and what is the replacement guarantee?",
    answer: "Our PowerCell™ battery packs utilize tier-1 chemistry engineered for over 1,800 full charge-discharge cycles — equivalent to 8 to 10+ years of typical daily commuting (over 1,00,000 km). Our models include comprehensive battery health warranties. If battery capacity drops below 70% during the warranty period, we repair or replace the pack under warranty."
  },
  {
    question: "Are Bharat Electric Motors vehicles safe to ride during heavy monsoons and waterlogged roads?",
    answer: "Absolutely. All Bharat electric motors, battery packs, controllers, and wiring harnesses carry an IP67 water and dust ingress protection rating. IP67 certification means these core components can withstand heavy rain and water puddles up to 1 meter for 30 minutes without electrical leakage or damage."
  },
  {
    question: "What is the true running cost per kilometer compared to a petrol scooter?",
    answer: "A standard petrol scooter costs ₹2.30 to ₹2.50 per km in fuel alone, plus engine oil changes. A Bharat electric vehicle costs merely 20 to 25 paise per kilometer in electricity! Daily commuters in Prayagraj and nearby areas save ₹2,500 to ₹3,500 every single month."
  },
  {
    question: "Do I need a Driving License, Helmet, or RTO Registration for Bharat E-Cycles?",
    answer: "No! Under Ministry of Road Transport and Highways (MoRTH) regulations, electric cycles equipped with motors of 250W or less and a top speed limited to 25 km/h (such as the Bharat TrailBlazer 29T and UrbanLite E1) are legally classified as non-motorized pedelecs. They require NO Driving License, NO Vehicle Registration, and NO mandatory road tax, making them ideal for students and daily commuting."
  },
  {
    question: "Can I trade in my old petrol scooter or motorcycle at Bharat Electric Motors?",
    answer: "Yes! Our Green Exchange Program accepts any petrol two-wheeler of any make or age. Our evaluators at Pillar no. 8, Handiya inspect the vehicle in 15 minutes, offer you fair market value, plus an exclusive green exchange bonus credited directly towards your new EV down payment."
  }
];

// ==================== VERIFIED OWNER REVIEWS ====================
const BHARAT_REVIEWS = [
  {
    name: "Sunil Kumar Maurya",
    location: "Handiya, Prayagraj",
    model: "Bharat Veloce Pro",
    purchaseDate: "2 months ago",
    rating: 5,
    savingsText: "Saving ₹3,200 every month on my daily Handiya - Prayagraj commute!",
    review: "Switching from my 125cc petrol bike to Bharat Veloce Pro was my best decision. The acceleration on GT Road is super smooth, and the team at Pillar no. 8 Handiya showroom handled everything including instant finance. Top quality electric motor!",
    verified: true
  },
  {
    name: "Rameshwar Tiwari",
    location: "GT Road, Prayagraj",
    model: "Bharat Glide S",
    purchaseDate: "3 months ago",
    rating: 5,
    savingsText: "140 km range and huge boot space for family daily runs!",
    review: "The Bharat Glide S is extremely comfortable for my entire family. Big floorboard, zero vibration, and whisper-quiet motor. Bharat Electric Motors in Handiya provided wonderful delivery service.",
    verified: true
  },
  {
    name: "Deepak Yadav",
    location: "Lala Bazar, Handiya",
    model: "Bharat EcoCity+",
    purchaseDate: "1 month ago",
    rating: 5,
    savingsText: "Detachable battery charges easily from regular socket at home!",
    review: "The twin portable batteries are so convenient — I just detach and charge inside my home. Super low running cost of barely 20 paise per km. Highly recommended for everyone in Handiya!",
    verified: true
  },
  {
    name: "Mohd. Aslam",
    location: "Civil Lines, Prayagraj",
    model: "Bharat Thunderbolt F1",
    purchaseDate: "1 month ago",
    rating: 5,
    savingsText: "130 km/h top speed with instant electric pickup!",
    review: "Bharat Electric Motors has built a real beast with Thunderbolt F1. The pickup off the line leaves petrol bikes behind. Best electric showroom in Prayagraj region with direct WhatsApp support.",
    verified: true
  }
];

if (typeof window !== "undefined") {
  window.BHARAT_BRAND = BHARAT_BRAND;
  window.BHARAT_VEHICLES = BHARAT_VEHICLES;
  window.BHARAT_MOTOR_TECH = BHARAT_MOTOR_TECH;
  window.BHARAT_BRANCHES = BHARAT_BRANCHES;
  window.BHARAT_FAQS = BHARAT_FAQS;
  window.BHARAT_REVIEWS = BHARAT_REVIEWS;
  // Compatibility alias
  window.EV_CATALOG = BHARAT_VEHICLES;
  window.DEALERSHIP_BRANCHES = BHARAT_BRANCHES;
  window.EV_FAQS = BHARAT_FAQS;
  window.CUSTOMER_REVIEWS = BHARAT_REVIEWS;
}
