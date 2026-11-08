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
  address: "Near Pillar no. 8, In Front of LIC Office, GT Road, Lala Bazar, Purani Handia, Handiya Prayagraj, UP - 221503",
  landmark: "In Front of LIC Office, Near Pillar No. 8, GT Road",
  city: "Handiya, Prayagraj",
  state: "Uttar Pradesh"
};

// ==================== BHARAT & AUTHORIZED DEALERSHIP FLEET ====================
const BHARAT_VEHICLES = [
  // ---------- AUTHORIZED SCOOTERS (WARIVO & OKINAWA) ----------
  {
    id: "warivo-crx",
    name: "Warivo CRX Electric Scooter",
    series: "Warivo Authorized Dealer",
    category: "scooter",
    badge: "Warivo Official",
    tagline: "High-speed sporty electric scooter with 75 km/h speed, fast charging, and dual disc brakes.",
    description: "Official Warivo Motors authorized dealership model available directly at Bharat Electric Motors, Handia. Engineered with a high-torque BLDC motor, dual hydraulic disc brakes, smart anti-theft remote lock, and long-range lithium battery option.",
    exShowroomPrice: 79999,
    subsidy: 11000,
    rtoCharges: 900,
    insurance: 3800,
    topSpeed: 75,
    certifiedRange: 120,
    realWorldRange: 95,
    acceleration: "0-40 km/h in 3.9s",
    batteryCapacity: 2.8,
    batteryType: "Warivo Smart Li-ion (Detachable Option)",
    batteryRemovable: true,
    chargingTimeStandard: "3.5 hrs (Home 5A Socket)",
    chargingTimeFast: "60 mins to 80%",
    motorName: "Warivo High-Torque BLDC Hub Motor",
    motorPower: "2.5 kW Peak",
    motorTorque: "46 Nm",
    motorType: "Waterproof BLDC Hub Motor (IP67)",
    carryingCapacity: 155,
    kerbWeight: 92,
    bootSpace: "24 Litres Storage",
    warrantyBattery: "3 Years Comprehensive Warranty",
    warrantyVehicle: "3 Years Vehicle Warranty",
    ridingModes: ["Eco", "City", "Turbo"],
    brakes: "Front Disc & Rear Drum with CBS",
    suspension: "Hydraulic Telescopic Front & Dual Spring Rear",
    features: [
      "Official Warivo Motors warranty & genuine parts at Handia showroom",
      "Smart digital LED instrument cluster with speed and battery meter",
      "Remote keyless entry with anti-theft motion alarm",
      "USB phone charging port in front apron",
      "Reverse assist button for effortless parking"
    ],
    colors: [
      { name: "Gloss Red", hex: "#EF4444" },
      { name: "Pearl White", hex: "#F8FAFC" },
      { name: "Midnight Black", hex: "#111827" }
    ],
    accentColor: "#EF4444"
  },
  {
    id: "warivo-queen",
    name: "Warivo Queen Electric Scooter",
    series: "Warivo Authorized Dealer",
    category: "scooter",
    badge: "Family Comfort",
    tagline: "Ultra-comfortable family scooter with wide floorboard, smooth ride, and low running cost.",
    description: "Specially crafted for everyday family convenience. Features comfortable cushion seating, smooth acceleration, front storage glove box, and economical operating cost of only 20 paise/km. Zero noise, zero vibration.",
    exShowroomPrice: 68500,
    subsidy: 9500,
    rtoCharges: 850,
    insurance: 3200,
    topSpeed: 60,
    certifiedRange: 100,
    realWorldRange: 82,
    acceleration: "0-40 km/h in 4.8s",
    batteryCapacity: 2.2,
    batteryType: "Smart LiFePO4 / Advanced LFP",
    batteryRemovable: true,
    chargingTimeStandard: "3.5 hrs (Standard 5A Socket)",
    chargingTimeFast: "Standard AC",
    motorName: "Warivo Silent Drive 1500W BLDC",
    motorPower: "1.8 kW Peak (1.2 kW Rated)",
    motorTorque: "38 Nm",
    motorType: "Direct BLDC Hub Motor",
    carryingCapacity: 150,
    kerbWeight: 84,
    bootSpace: "22 Litres Underseat Space",
    warrantyBattery: "3 Years Replacement Warranty",
    warrantyVehicle: "3 Years Warranty",
    ridingModes: ["Eco", "Power"],
    brakes: "Front Disc & Rear Drum with Electronic Braking",
    suspension: "Telescopic Fork Front & Dual Hydraulic Rear",
    features: [
      "Wide flat floorboard for carrying groceries and gas cylinders",
      "Ultra-plush seat with pillion backrest included",
      "Low running cost: barely 20 paise per kilometer",
      "Central locking with anti-theft siren",
      "All-weather IP67 sealed wiring and motor"
    ],
    colors: [
      { name: "Sky Cyan", hex: "#06B6D4" },
      { name: "Glossy Grey", hex: "#4B5563" },
      { name: "Candy Red", hex: "#DC2626" }
    ],
    accentColor: "#06B6D4"
  },
  {
    id: "okinawa-praisepro",
    name: "Okinawa PraisePro",
    series: "Okinawa Authorized Partner",
    category: "scooter",
    badge: "Detachable Battery",
    tagline: "Detachable 2.0 kWh lithium battery, 86 km/h top speed, and 137 km certified range.",
    description: "The Okinawa PraisePro delivers proven performance, aggressive sport styling, and a detachable lithium-ion battery you can easily take inside your house or office to charge. Available with full dealer support and original parts at Bharat Electric Motors.",
    exShowroomPrice: 84999,
    subsidy: 12500,
    rtoCharges: 950,
    insurance: 4100,
    topSpeed: 86,
    certifiedRange: 137,
    realWorldRange: 110,
    acceleration: "0-40 km/h in 3.5s",
    batteryCapacity: 2.08,
    batteryType: "Detachable Lithium-ion (Microtek Cells)",
    batteryRemovable: true,
    chargingTimeStandard: "2.5 to 3.0 hrs (Fast Home Wall Charger)",
    chargingTimeFast: "2.5 hrs 100% Charge",
    motorName: "Okinawa 2500W BLDC Waterproof Motor",
    motorPower: "2.5 kW Peak BLDC",
    motorTorque: "48 Nm",
    motorType: "High-Efficiency BLDC Waterproof Motor (IP65)",
    carryingCapacity: 160,
    kerbWeight: 96,
    bootSpace: "Under-seat helmet storage",
    warrantyBattery: "3 Years / Unlimited km Battery Warranty",
    warrantyVehicle: "3 Years Vehicle Warranty",
    ridingModes: ["Eco", "Sports", "Turbo"],
    brakes: "Dual Hydraulic Disc Brakes (Front & Rear) with E-ABS",
    suspension: "Hydraulic Telescopic Front & Dual Tube Rear Shocker",
    features: [
      "Detachable battery: lift and charge anywhere in 2.5-3 hours",
      "Dual disc brakes with electronic Regenerative E-ABS",
      "Find My Scooter, Walk Assist & Keyless Go",
      "CNC machined aluminum brake levers & projector headlamp",
      "High ground clearance of 175mm for rural and GT Road terrain"
    ],
    colors: [
      { name: "Glossy Red Black", hex: "#B91C1C" },
      { name: "Sparkle Black", hex: "#18181B" },
      { name: "Desert Blue", hex: "#1D4ED8" }
    ],
    accentColor: "#B91C1C"
  },

  // ---------- SIGNATURE SCOOTERS ----------
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
  },
  {
    id: "motovolt-hum",
    name: "Motovolt Hum Multi-Utility E-Cycle",
    series: "Motovolt Smart E-Cycles",
    category: "cycle",
    badge: "Heavy Duty 150kg Payload",
    tagline: "India's strongest multi-utility electric cycle with heavy load carrier. No license, no registration!",
    description: "Official Motovolt dealership model available at Bharat Electric Motors, Handia. Built like an electric workhorse with a heavy-duty luggage carrier capable of transporting up to 150 kg payload. Detachable battery with smartphone app connectivity, ideal for milkmen, grocery delivery, students, and daily commuters.",
    exShowroomPrice: 38999,
    subsidy: 2500,
    rtoCharges: 0,
    insurance: 950,
    topSpeed: 25,
    certifiedRange: 75,
    realWorldRange: 62,
    acceleration: "Instant 5-level pedal assist & throttle",
    batteryCapacity: 0.58,
    batteryType: "Removable Smart Li-ion Pack (IP67)",
    batteryRemovable: true,
    chargingTimeStandard: "3.0 hrs (Smart Home Adapter)",
    chargingTimeFast: "Standard AC",
    motorName: "Motovolt 250W Heavy-Torque BLDC",
    motorPower: "250W Geared Motor",
    motorTorque: "44 Nm High-Climb Torque",
    motorType: "Rear Wheel Geared Hub Motor",
    carryingCapacity: 150,
    kerbWeight: 24,
    bootSpace: "Heavy Duty Rear Cargo Rack included",
    warrantyBattery: "3 Years Warranty",
    warrantyVehicle: "Lifetime Frame Warranty, 2 Years Motor",
    ridingModes: ["Pedal Assist (5 Levels)", "Full Electric Throttle", "Pedal Only"],
    brakes: "Front & Rear Mechanical Disc Brakes with Motor Cutoff",
    suspension: "Heavy Duty Front Suspension Fork",
    features: [
      "100% Legal Exemption: No Driving License, Helmet Law or RTO Registration required",
      "Heavy-duty cargo carrier designed for crates, delivery boxes & pillion",
      "Detachable lockable battery with USB powerbank output",
      "Motovolt smartphone connectivity for GPS tracking & lock",
      "High-durability puncture resistant fat-tread tires"
    ],
    colors: [
      { name: "Sun Yellow", hex: "#EAB308" },
      { name: "Forest Green", hex: "#15803D" },
      { name: "Stealth Black", hex: "#1E293B" }
    ],
    accentColor: "#EAB308"
  },

  // ---------- AUTHORIZED LITHIUM BATTERIES (MAXVOLT ENERGY) ----------
  {
    id: "maxvolt-lithium-60v",
    name: "Maxvolt Smart Lithium Battery Pack (60V / 72V)",
    series: "Maxvolt Energy Authorized",
    category: "battery",
    badge: "3-5 Yr Guarantee",
    tagline: "Authorized Maxvolt Energy Hub. Smart BMS, 2000+ charge cycles, and 3 to 5 years replacement warranty.",
    description: "Convert your old lead-acid electric scooter or e-rickshaw into a high-range lithium EV, or upgrade your existing battery pack. Built with automotive-grade Grade-A NMC/LFP cells and a Smart BMS with thermal and short-circuit protection. On-the-spot installation at Bharat Electric Motors, Handia.",
    exShowroomPrice: 28500,
    subsidy: 0,
    rtoCharges: 0,
    insurance: 0,
    topSpeed: 0,
    certifiedRange: 90,
    realWorldRange: 80,
    acceleration: "Instant continuous power",
    batteryCapacity: 1.8,
    batteryType: "Maxvolt Grade-A LiFePO4 / NMC with Smart BMS",
    batteryRemovable: true,
    chargingTimeStandard: "2.5 - 3.5 hrs (Fast Charger Included)",
    chargingTimeFast: "2.0 hrs (with 10A Fast Charger)",
    motorName: "Compatible with all 60V / 72V BLDC & PMSM Motors",
    motorPower: "Supports up to 3.5 kW Motor Output",
    motorTorque: "Peak Discharge 60A",
    motorType: "Universal EV Battery Pack",
    carryingCapacity: 0,
    kerbWeight: 14,
    bootSpace: "Compact aluminum metal casing fits all scooter battery bays",
    warrantyBattery: "3 Years to 5 Years Replacement Warranty Card",
    warrantyVehicle: "1 Year Charger Warranty",
    ridingModes: ["Full Compatibility with all EV Scooters"],
    brakes: "Built-in Electronic Short Circuit & Overcharge Cut-Off",
    suspension: "Vibration-proof silicone cell potting",
    features: [
      "3 to 5 Years Official Manufacturer Replacement Guarantee",
      "Smart BMS prevents over-heating, over-charging and deep discharge",
      "Ultra-lightweight: only 14 kg compared to 45 kg lead-acid batteries",
      "Increases vehicle pickup, range, and hill climbing capacity",
      "Old lead-acid battery exchange discount available at showroom"
    ],
    colors: [
      { name: "Metallic Grey", hex: "#4B5563" },
      { name: "Matte Black", hex: "#111827" }
    ],
    accentColor: "#10B981"
  },

  // ---------- COMMERCIAL ELECTRIC CARGO & E-LOADERS ----------
  {
    id: "commercial-eloader-400",
    name: "Commercial E-Loader 400kg Hauler",
    series: "Commercial Cargo Series",
    category: "loader",
    badge: "Heavy Commercial Cargo",
    tagline: "400 kg payload electric cargo loader. Cut daily delivery fuel cost by up to 90%.",
    description: "Purpose-built for grocery store owners, vegetable and grain vendors, logistics distributors, and factory haulage across Handia and Prayagraj. Features a reinforced steel cargo bed, heavy leaf-spring suspension, and a high-gradeability differential motor.",
    exShowroomPrice: 98000,
    subsidy: 15000,
    rtoCharges: 1200,
    insurance: 4500,
    topSpeed: 45,
    certifiedRange: 95,
    realWorldRange: 80,
    acceleration: "High-torque loaded haulage",
    batteryCapacity: 3.2,
    batteryType: "Heavy Duty 60V Deep Cycle / Lithium Option",
    batteryRemovable: false,
    chargingTimeStandard: "5.0 hrs (Standard 15A Socket)",
    chargingTimeFast: "Fast Charge Ready",
    motorName: "1500W High-Torque Differential Gearbox BLDC",
    motorPower: "2.2 kW Peak Differential Motor",
    motorTorque: "85 Nm Low-End Hauling Torque",
    motorType: "Direct Differential Rear Axle Motor",
    carryingCapacity: 400,
    kerbWeight: 185,
    bootSpace: "Heavy Duty 4.5 ft x 3.5 ft Steel Cargo Bed",
    warrantyBattery: "3 Years Comprehensive Guarantee",
    warrantyVehicle: "2 Years Chassis & Motor Warranty",
    ridingModes: ["Low Gear Haul (Hill Climb)", "Standard Cargo Run"],
    brakes: "Heavy-Duty Front Drum & Dual Rear Hydraulic Brakes",
    suspension: "Reinforced Front Hydraulic Forks & Rear Multi-Leaf Springs",
    features: [
      "400+ kg certified carrying capacity with drop-down side gates",
      "Running cost under 25 paise/km compared to ₹3.50/km for petrol/diesel 3-wheelers",
      "High gradeability gear for easily climbing flyovers and market ramps",
      "Reverse buzzer and heavy-duty steel front bumper",
      "Available with flexible commercial finance & subsidy at Handia showroom"
    ],
    colors: [
      { name: "Commercial Amber", hex: "#F59E0B" },
      { name: "Royal Blue", hex: "#1D4ED8" },
      { name: "Forest Green", hex: "#15803D" }
    ],
    accentColor: "#F59E0B"
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
    type: "Flagship Showroom, Authorized Dealership & EV Experience Hub",
    address: "Near Pillar no. 8, In Front of LIC Office, GT Road, Lala Bazar, Purani Handia, Handiya Prayagraj, UP - 221503",
    landmark: "In Front of LIC Office, Near Pillar No. 8, GT Road",
    phone: "+91 80095 79794",
    altPhone: "+91 98750 52329",
    whatsapp: "8009579794",
    hours: "Monday – Sunday: 9:00 AM – 8:30 PM (Open 7 Days)",
    facilities: [
      "Authorized Dealership for Warivo, Okinawa, Motovolt & Maxvolt",
      "Exclusive Bharat Electric Motors Experience Showcase",
      "Dedicated EV Test Ride Track & Safe Trials on GT Road",
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
    address: "Near Pillar no. 8, In Front of LIC Office, GT Road, Lala Bazar, Handiya Prayagraj, UP - 221503",
    phone: "+91 80095 79794",
    altPhone: "+91 98750 52329",
    whatsapp: "8009579794",
    hours: "Monday – Saturday: 9:00 AM – 7:00 PM (Sunday Closed for Service)",
    facilities: [
      "Dedicated Bharat EV Diagnostics Service Bays",
      "Computerized Cell Balancing & Health Restoration",
      "100% Genuine Warivo, Okinawa, Maxvolt & Bharat OEM Spare Parts",
      "Water-Wading & Monsoon Seal Testing",
      "24x7 Emergency Roadside Assistance (RSA) Dispatch"
    ],
    mapCoord: { lat: 25.3582, lng: 82.1852 }
  }
];

// ==================== BUYER FAQS ====================
const BHARAT_FAQS = [
  {
    question: "Why choose Bharat Electric Motors at Pillar No. 8, Handia?",
    answer: "Bharat Electric Motors is the trusted EV showroom & authorized dealer in Handia Prayagraj for top brands like Warivo Motors, Okinawa, Motovolt, and Maxvolt Lithium Energy, along with our signature electric line. When you buy from us at Pillar No. 8, Handia, you receive direct manufacturer pricing, zero hidden commissions, genuine factory warranty, and dedicated after-sales service right on GT Road."
  },
  {
    question: "How do government subsidies (Central PM E-Drive & UP State EV Policy) work on Bharat vehicles?",
    answer: "Every electric scooter and motorcycle sold by Bharat Electric Motors is certified under the Central PM E-Drive scheme and Uttar Pradesh EV policies. We deduct your eligible subsidy directly from the invoice upfront at our Handia Prayagraj showroom. You don't need to run around RTO offices — you pay only the net on-road price directly."
  },
  {
    question: "How durable is the Maxvolt Smart Lithium battery and what is the replacement guarantee?",
    answer: "Maxvolt lithium battery packs utilize Grade-A automotive cells engineered for over 2,000 full charge-discharge cycles (6 to 8+ years of daily riding). Every pack comes backed by an official 3 to 5 Year Replacement Guarantee. If capacity drops during the warranty, your battery is repaired or replaced without hassle."
  },
  {
    question: "Are Bharat Electric Motors vehicles safe to ride during heavy monsoons and waterlogged roads?",
    answer: "Absolutely. All electric motors, battery packs, controllers, and wiring harnesses carry an IP67 water and dust ingress protection rating. IP67 certification means these core components can withstand heavy rain and water puddles up to 1 meter for 30 minutes without electrical leakage or damage."
  },
  {
    question: "What is the true running cost per kilometer compared to a petrol scooter?",
    answer: "A standard petrol scooter costs ₹2.30 to ₹2.50 per km in fuel alone, plus periodic engine oil changes. A Bharat electric vehicle costs merely 20 to 25 paise per kilometer in electricity! Daily commuters in Handia, Saidabad, and Prayagraj save ₹2,500 to ₹3,500 every single month."
  },
  {
    question: "Do I need a Driving License, Helmet, or RTO Registration for Motovolt & Bharat E-Cycles?",
    answer: "No! Under Ministry of Road Transport and Highways (MoRTH) regulations, electric cycles equipped with motors of 250W or less and a top speed limited to 25 km/h (such as Motovolt Hum and Bharat TrailBlazer) are legally classified as non-motorized pedelecs. They require NO Driving License, NO Vehicle Registration, and NO mandatory road tax, making them ideal for students, shopkeepers, and daily commuting."
  },
  {
    question: "Can I trade in my old petrol scooter or motorcycle at Bharat Electric Motors?",
    answer: "Yes! Our Green Exchange Program accepts any petrol two-wheeler or old battery scooter of any make or age. Our evaluators at Pillar no. 8, Handia inspect the vehicle in 15 minutes, offer you fair market value, plus an exclusive green exchange bonus credited directly towards your new EV down payment."
  }
];

// ==================== VERIFIED OWNER REVIEWS (IndiaMART & Justdial 4.9★) ====================
const BHARAT_REVIEWS = [
  {
    name: "Sunil Kumar Maurya",
    location: "Purani Handia, Prayagraj",
    model: "Warivo CRX Electric Scooter",
    purchaseDate: "2 weeks ago",
    rating: 5,
    source: "IndiaMART Verified Buyer",
    savingsText: "Saving ₹3,400 monthly on my daily Handia to Prayagraj commute!",
    review: "Bought Warivo CRX from Bharat Electric Motors at Pillar No. 8. Pickup is super fast, 120 km range is genuine, and the owner handed over keys in just 15 minutes with instant finance approval. Best EV dealer in Prayagraj!",
    verified: true
  },
  {
    name: "Ramji Tripathi",
    location: "Lala Bazar, Handia",
    model: "Maxvolt 60V Lithium Battery Pack",
    purchaseDate: "1 month ago",
    rating: 5,
    source: "Justdial 5-Star Review",
    savingsText: "Replaced old lead-acid battery — range boosted to 85 km with 3 yr warranty!",
    review: "My old electric scooter was struggling with dead lead-acid batteries. Visited Bharat Electric Motors in Lala Bazar and they installed a Maxvolt 60V Lithium pack with smart BMS in 40 minutes. Comes with 3-year replacement guarantee card. Outstanding service!",
    verified: true
  },
  {
    name: "Dharmendra Patel",
    location: "GT Road, Saidabad",
    model: "Motovolt Hum Multi-Utility E-Cycle",
    purchaseDate: "3 weeks ago",
    rating: 5,
    source: "IndiaMART Verified Buyer",
    savingsText: "Carrying 80kg grocery crates daily without spending 1 rupee on petrol!",
    review: "Motovolt Hum is a true powerhouse! Heavy luggage carrier easily carries milk cans and grocery boxes. No license or registration required. Smit and team at Bharat Electric Motors explained everything and gave a live test ride.",
    verified: true
  },
  {
    name: "Anoop Kesarwani",
    location: "Handia Market, Prayagraj",
    model: "Commercial E-Loader 400kg Hauler",
    purchaseDate: "1 month ago",
    rating: 5,
    source: "IndiaMART Verified Buyer",
    savingsText: "Daily logistics fuel cost dropped from ₹350/day to ₹30/day!",
    review: "We purchased the 400kg electric cargo loader for market wholesale deliveries. Heavy leaf spring suspension handles rough village roads easily. 100% reliable machine backed by local Handia warranty.",
    verified: true
  },
  {
    name: "Vijay Pratap Singh",
    location: "Purani Handia, Prayagraj",
    model: "Okinawa PraisePro",
    purchaseDate: "2 months ago",
    rating: 5,
    source: "Google 5-Star Review",
    savingsText: "Detachable battery charges conveniently inside my 1st floor apartment!",
    review: "I live on the first floor, so Okinawa PraisePro's detachable battery is a blessing. Just take it upstairs and charge with regular 5A socket in 3 hours. Great staff at Pillar No. 8 showroom.",
    verified: true
  },
  {
    name: "Pooja Bind",
    location: "Civil Lines, Prayagraj",
    model: "Bharat Glide S Family Scooter",
    purchaseDate: "2 months ago",
    rating: 5,
    source: "Justdial 5-Star Review",
    savingsText: "Huge 34-litre boot space and ultra-smooth ride for family use!",
    review: "The Bharat Glide S is so comfortable for my family. Big floorboard, zero vibration, and whisper-quiet motor. Bharat Electric Motors provided quick delivery with paperless billing.",
    verified: true
  }
];

// ==================== CUSTOMER DELIVERY SHOWCASE RECORDS ====================
const BHARAT_DEFAULT_DELIVERIES = [
  {
    id: "del-101",
    customerName: "Vikram Patel",
    location: "Purani Handia, Prayagraj",
    vehicle: "Warivo CRX Electric Scooter",
    deliveryDate: "05 Nov 2026",
    photoUrl: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=800&auto=format&fit=crop&q=80",
    note: "Proud owner taking delivery of Warivo CRX at Pillar No. 8 Handia showroom with 3-year warranty card & helmet!"
  },
  {
    id: "del-102",
    customerName: "Ramji Tripathi",
    location: "Lala Bazar, Handia",
    vehicle: "Maxvolt 60V 30Ah Lithium Battery Upgrade",
    deliveryDate: "02 Nov 2026",
    photoUrl: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?w=800&auto=format&fit=crop&q=80",
    note: "Replaced old heavy lead-acid batteries with Maxvolt smart lithium pack. 85 km range on single charge!"
  },
  {
    id: "del-103",
    customerName: "Dharmendra Patel",
    location: "GT Road, Saidabad",
    vehicle: "Motovolt Hum Multi-Utility E-Cycle",
    deliveryDate: "28 Oct 2026",
    photoUrl: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=800&auto=format&fit=crop&q=80",
    note: "Heavy carrier Motovolt Hum delivery for daily milk & grocery supply. No license needed, pure savings!"
  },
  {
    id: "del-104",
    customerName: "Sunil Kumar Maurya",
    location: "Handia, Prayagraj",
    vehicle: "Okinawa PraisePro (Detachable Battery)",
    deliveryDate: "24 Oct 2026",
    photoUrl: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&auto=format&fit=crop&q=80",
    note: "On-road delivery with instant Aadhaar subsidy deduction. Key handover by Bharat Electric Motors team."
  }
];

if (typeof window !== "undefined") {
  window.BHARAT_BRAND = BHARAT_BRAND;
  window.BHARAT_VEHICLES = BHARAT_VEHICLES;
  window.BHARAT_MOTOR_TECH = BHARAT_MOTOR_TECH;
  window.BHARAT_BRANCHES = BHARAT_BRANCHES;
  window.BHARAT_FAQS = BHARAT_FAQS;
  window.BHARAT_REVIEWS = BHARAT_REVIEWS;
  window.BHARAT_DEFAULT_DELIVERIES = BHARAT_DEFAULT_DELIVERIES;
  // Compatibility alias
  window.EV_CATALOG = BHARAT_VEHICLES;
  window.DEALERSHIP_BRANCHES = BHARAT_BRANCHES;
  window.EV_FAQS = BHARAT_FAQS;
  window.CUSTOMER_REVIEWS = BHARAT_REVIEWS;
}
