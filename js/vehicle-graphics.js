/**
 * Bharat Electric Motors - Flagship Vehicle & Motor Visual Engine
 * Precision SVG Vector Graphics for Bharat Scooters, Motorcycles, E-Cycles and Motors
 */

const VEHICLE_GRAPHICS = {
  // Flagship Bharat Scooter Vector (Veloce / Glide / EcoCity)
  getScooterSVG: (colorHex = "#10B981") => `
    <svg viewBox="0 0 440 260" fill="none" xmlns="http://www.w3.org/2000/svg" class="vehicle-vector-svg">
      <defs>
        <linearGradient id="scooterBodyGrad-${colorHex.replace('#','')}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${colorHex}" />
          <stop offset="70%" stop-color="${colorHex}" />
          <stop offset="100%" stop-color="#090D16" />
        </linearGradient>
        <linearGradient id="cyanNeonGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#00F0FF" stop-opacity="0.9"/>
          <stop offset="100%" stop-color="#10B981" stop-opacity="0.2"/>
        </linearGradient>
        <radialGradient id="wheelGradScooter" cx="50%" cy="50%" r="50%">
          <stop offset="65%" stop-color="#1E293B"/>
          <stop offset="85%" stop-color="#0F172A"/>
          <stop offset="100%" stop-color="#020617"/>
        </radialGradient>
      </defs>

      <!-- Soft Ground Shadow & Speed Track -->
      <ellipse cx="220" cy="232" rx="170" ry="14" fill="#000000" opacity="0.4" filter="blur(5px)"/>
      <path d="M80 232 L360 232" stroke="url(#cyanNeonGrad)" stroke-width="2" stroke-dasharray="14 10" opacity="0.5"/>

      <!-- Rear 12-inch Alloy Wheel -->
      <g class="wheel rear-wheel">
        <circle cx="115" cy="192" r="42" fill="url(#wheelGradScooter)" stroke="#334155" stroke-width="4.5"/>
        <circle cx="115" cy="192" r="28" fill="#0B0F17" stroke="#475569" stroke-width="2"/>
        <circle cx="115" cy="192" r="16" fill="#64748B" stroke="#00F0FF" stroke-width="2"/>
        <!-- Disc brake with ventilation holes -->
        <circle cx="115" cy="192" r="22" stroke="#94A3B8" stroke-width="2" stroke-dasharray="4 3" opacity="0.8"/>
        <line x1="100" y1="192" x2="130" y2="192" stroke="#E2E8F0" stroke-width="2.5"/>
        <line x1="115" y1="177" x2="115" y2="207" stroke="#E2E8F0" stroke-width="2.5"/>
      </g>

      <!-- Front 12-inch Alloy Wheel -->
      <g class="wheel front-wheel">
        <circle cx="340" cy="192" r="42" fill="url(#wheelGradScooter)" stroke="#334155" stroke-width="4.5"/>
        <circle cx="340" cy="192" r="28" fill="#0B0F17" stroke="#475569" stroke-width="2"/>
        <circle cx="340" cy="192" r="16" fill="#64748B" stroke="#00F0FF" stroke-width="2"/>
        <!-- Disc brake with ventilation holes -->
        <circle cx="340" cy="192" r="22" stroke="#94A3B8" stroke-width="2" stroke-dasharray="4 3" opacity="0.8"/>
        <line x1="325" y1="192" x2="355" y2="192" stroke="#E2E8F0" stroke-width="2.5"/>
        <line x1="340" y1="177" x2="340" y2="207" stroke="#E2E8F0" stroke-width="2.5"/>
      </g>

      <!-- High-Strength Low-Floor Chassis with Battery Chamber -->
      <path d="M125 192 L180 190 L260 190 L290 170" stroke="#1E293B" stroke-width="15" stroke-linecap="round"/>
      <!-- Bharat PowerCell™ Battery Enclosure -->
      <rect x="175" y="176" width="95" height="18" rx="4" fill="#0F172A" stroke="#10B981" stroke-width="1.8"/>
      <text x="184" y="189" fill="#10B981" font-family="monospace" font-size="8.5" font-weight="900" letter-spacing="1">BHARAT POWERCELL</text>

      <!-- Rear Swingarm & Red Monoshock -->
      <line x1="115" y1="192" x2="168" y2="148" stroke="#E2E8F0" stroke-width="4.5" stroke-linecap="round"/>
      <circle cx="152" cy="162" r="7" fill="#EF4444"/>

      <!-- Rear Aerodynamic Body Panel & Tail Section -->
      <path d="M92 152 C92 135 125 118 175 118 L248 124 C265 124 270 142 265 164 L185 175 C145 175 110 168 92 152 Z" 
            fill="url(#scooterBodyGrad-${colorHex.replace('#','')})" stroke="#FFFFFF" stroke-opacity="0.12" stroke-width="1.5"/>

      <!-- Premium Bharat Ergonomic Contour Saddle -->
      <path d="M130 117 C148 110 200 108 242 117 C254 119 248 128 238 128 L142 126 C130 126 124 121 130 117 Z" 
            fill="#18181B" stroke="#27272A" stroke-width="2.5"/>
      <path d="M185 114 L185 127" stroke="#10B981" stroke-width="1.5" stroke-dasharray="2 2"/>

      <!-- Front Apron & Steering Column -->
      <path d="M255 186 L315 90 L295 85 L260 165 Z" fill="#1E293B"/>
      <!-- Aerodynamic Sharp Front Fairing -->
      <path d="M288 172 L332 86 C335 80 342 77 350 81 L356 90 C356 102 328 172 312 182 Z" 
            fill="url(#scooterBodyGrad-${colorHex.replace('#','')})"/>

      <!-- Front Telescopic Suspension Forks -->
      <line x1="318" y1="94" x2="340" y2="192" stroke="#94A3B8" stroke-width="5.5" stroke-linecap="round"/>
      <line x1="326" y1="128" x2="338" y2="186" stroke="#F1F5F9" stroke-width="3.5" stroke-linecap="round"/>

      <!-- Handlebar & Smart 7-inch Touchscreen Cockpit -->
      <path d="M305 66 L332 72 L354 70" stroke="#0F172A" stroke-width="6.5" stroke-linecap="round"/>
      <rect x="318" y="55" width="22" height="14" rx="2.5" fill="#020617" stroke="#00F0FF" stroke-width="1.8"/>
      <line x1="323" y1="62" x2="335" y2="62" stroke="#00F0FF" stroke-width="1.2"/>

      <!-- Bharat LED Projector Headlamp & Signature Cyan DRL -->
      <path d="M342 90 L360 94 L352 108 Z" fill="#00F0FF" filter="drop-shadow(0 0 8px #00F0FF)"/>
      <polygon points="358,94 425,100 415,130" fill="url(#cyanNeonGrad)" opacity="0.35"/>

      <!-- Tail LED Lamp -->
      <path d="M92 147 L84 149 L87 156 Z" fill="#EF4444" filter="drop-shadow(0 0 6px #EF4444)"/>

      <!-- Official Bharat Emblem Badge on Fairing -->
      <circle cx="210" cy="146" r="8" fill="#020617" stroke="#10B981" stroke-width="1.2"/>
      <path d="M208 146 L212 142 L210 150 L213 146" stroke="#00F0FF" stroke-width="1.2" fill="none"/>
    </svg>
  `,

  // Flagship Bharat Motorcycle Vector (Thunderbolt F1 / Striker 350)
  getMotorcycleSVG: (colorHex = "#EF4444") => `
    <svg viewBox="0 0 440 260" fill="none" xmlns="http://www.w3.org/2000/svg" class="vehicle-vector-svg">
      <defs>
        <linearGradient id="bikeBodyGrad-${colorHex.replace('#','')}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${colorHex}" />
          <stop offset="60%" stop-color="${colorHex}" />
          <stop offset="100%" stop-color="#090D16" />
        </linearGradient>
        <radialGradient id="wheelGradBikeF1" cx="50%" cy="50%" r="50%">
          <stop offset="65%" stop-color="#1E293B"/>
          <stop offset="85%" stop-color="#0F172A"/>
          <stop offset="100%" stop-color="#020617"/>
        </radialGradient>
      </defs>

      <!-- Soft Ground Shadow & Racing Line -->
      <ellipse cx="220" cy="235" rx="175" ry="12" fill="#000000" opacity="0.45" filter="blur(5px)"/>
      <line x1="50" y1="235" x2="390" y2="235" stroke="#10B981" stroke-width="2" stroke-dasharray="16 10" opacity="0.5"/>

      <!-- Rear 17-inch Alloy Wheel -->
      <g class="wheel rear-wheel">
        <circle cx="95" cy="184" r="48" fill="url(#wheelGradBikeF1)" stroke="#334155" stroke-width="5.5"/>
        <circle cx="95" cy="184" r="30" fill="#090D16" stroke="#64748B" stroke-width="2.5"/>
        <!-- Sport Alloy Spokes -->
        <line x1="68" y1="184" x2="122" y2="184" stroke="#CBD5E1" stroke-width="3.5"/>
        <line x1="95" y1="157" x2="95" y2="211" stroke="#CBD5E1" stroke-width="3.5"/>
        <line x1="76" y1="165" x2="114" y2="203" stroke="#94A3B8" stroke-width="2.2"/>
        <line x1="76" y1="203" x2="114" y2="165" stroke="#94A3B8" stroke-width="2.2"/>
        <!-- Rear Disc with Red Caliper -->
        <circle cx="95" cy="184" r="20" stroke="#E2E8F0" stroke-width="2.2" stroke-dasharray="4 2"/>
        <rect x="78" y="171" width="9" height="14" rx="2" fill="#EF4444"/>
      </g>

      <!-- Front 17-inch Alloy Wheel -->
      <g class="wheel front-wheel">
        <circle cx="345" cy="184" r="48" fill="url(#wheelGradBikeF1)" stroke="#334155" stroke-width="5.5"/>
        <circle cx="345" cy="184" r="30" fill="#090D16" stroke="#64748B" stroke-width="2.5"/>
        <!-- Sport Alloy Spokes -->
        <line x1="318" y1="184" x2="372" y2="184" stroke="#CBD5E1" stroke-width="3.5"/>
        <line x1="345" y1="157" x2="345" y2="211" stroke="#CBD5E1" stroke-width="3.5"/>
        <line x1="326" y1="165" x2="364" y2="203" stroke="#94A3B8" stroke-width="2.2"/>
        <line x1="326" y1="203" x2="364" y2="165" stroke="#94A3B8" stroke-width="2.2"/>
        <!-- Front Twin Discs with Gold Brembo-Style Caliper -->
        <circle cx="345" cy="184" r="24" stroke="#E2E8F0" stroke-width="2.8" stroke-dasharray="4 2"/>
        <rect x="358" y="176" width="9" height="16" rx="2" fill="#F59E0B"/>
      </g>

      <!-- Aerospace Trellis Chassis Geometry -->
      <path d="M135 160 L215 182 L275 118 L215 102 Z" stroke="#334155" stroke-width="4.5" fill="none"/>
      <path d="M162 138 L244 154" stroke="#475569" stroke-width="3.5"/>

      <!-- Aluminum Swingarm -->
      <path d="M95 184 L176 180 L188 166" stroke="#94A3B8" stroke-width="7.5" stroke-linecap="round" fill="none"/>
      <!-- Racing Monoshock Absorber -->
      <line x1="160" y1="176" x2="182" y2="136" stroke="#EF4444" stroke-width="6.5" stroke-linecap="round"/>

      <!-- Central Bharat HyperDrive™ Powertrain & PowerCell™ Pack -->
      <rect x="172" y="138" width="84" height="56" rx="9" fill="#0F172A" stroke="#334155" stroke-width="2.2"/>
      <line x1="180" y1="152" x2="246" y2="152" stroke="#1E293B" stroke-width="2.2"/>
      <line x1="180" y1="163" x2="246" y2="163" stroke="#1E293B" stroke-width="2.2"/>
      <!-- Motor Hub Core with Bharat Badge -->
      <circle cx="198" cy="177" r="16" fill="#1E293B" stroke="#10B981" stroke-width="2.2"/>
      <text x="187" y="180" fill="#10B981" font-family="monospace" font-size="7.5" font-weight="900">HYPERDRIVE</text>

      <!-- Muscular Faux Fuel Tank / Charging Enclosure -->
      <path d="M200 98 C216 85 260 83 288 96 C294 101 288 120 272 134 L200 128 Z" 
            fill="url(#bikeBodyGrad-${colorHex.replace('#','')})" stroke="#FFFFFF" stroke-opacity="0.18" stroke-width="1.8"/>

      <!-- Sharp Aerodynamic Tail Section -->
      <path d="M100 115 C128 112 166 122 205 126 L178 144 C134 141 112 128 100 115 Z" 
            fill="url(#bikeBodyGrad-${colorHex.replace('#','')})"/>
      
      <!-- Split Sport Stepped Seat -->
      <path d="M134 115 C156 112 178 120 200 124 L194 131 L139 124 Z" fill="#18181B" stroke="#27272A" stroke-width="1.8"/>
      <path d="M106 113 C122 111 138 114 144 117 L139 121 L106 119 Z" fill="#09090B"/>

      <!-- Gold Upside-Down (USD) Front Inverted Forks -->
      <line x1="290" y1="86" x2="345" y2="184" stroke="#F59E0B" stroke-width="6.5" stroke-linecap="round"/>
      <line x1="301" y1="102" x2="340" y2="176" stroke="#FEF08A" stroke-width="3.5" stroke-linecap="round"/>

      <!-- Low-slung Clip-on Handlebar & Digital Cockpit -->
      <line x1="282" y1="81" x2="304" y2="84" stroke="#0F172A" stroke-width="6.5" stroke-linecap="round"/>
      <rect x="279" y="70" width="18" height="11" rx="2" fill="#020617" stroke="#00F0FF" stroke-width="1.8"/>

      <!-- Aggressive Streetfighter Headlamp Cluster -->
      <path d="M312 95 L338 102 L322 118 Z" fill="#020617" stroke="#334155" stroke-width="1.2"/>
      <path d="M328 101 L338 105 L330 111 Z" fill="#00F0FF" filter="drop-shadow(0 0 9px #00F0FF)"/>

      <!-- Beam glow -->
      <polygon points="338,104 420,92 425,140" fill="url(#bikeBodyGrad-${colorHex.replace('#','')})" opacity="0.25"/>

      <!-- Tail LED Light -->
      <path d="M98 115 L90 116 L95 121 Z" fill="#EF4444" filter="drop-shadow(0 0 7px #EF4444)"/>
    </svg>
  `,

  // Flagship Bharat E-Cycle Vector (TrailBlazer 29T / UrbanLite E1)
  getCycleSVG: (colorHex = "#22C55E") => `
    <svg viewBox="0 0 440 260" fill="none" xmlns="http://www.w3.org/2000/svg" class="vehicle-vector-svg">
      <defs>
        <radialGradient id="wheelGradCycleE" cx="50%" cy="50%" r="50%">
          <stop offset="85%" stop-color="#0F172A"/>
          <stop offset="100%" stop-color="#020617"/>
        </radialGradient>
      </defs>

      <!-- Soft Ground Shadow -->
      <ellipse cx="220" cy="232" rx="170" ry="9" fill="#000000" opacity="0.3" filter="blur(4px)"/>

      <!-- Rear 29-inch Bicycle Wheel with Realistic Spokes -->
      <g class="wheel rear-wheel">
        <circle cx="95" cy="178" r="54" fill="none" stroke="#1E293B" stroke-width="6.5"/>
        <circle cx="95" cy="178" r="50" fill="none" stroke="#475569" stroke-width="2.2"/>
        <circle cx="95" cy="178" r="11" fill="#0F172A" stroke="#10B981" stroke-width="2.2"/>
        ${Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * 30 * Math.PI) / 180;
          const x2 = 95 + 50 * Math.cos(angle);
          const y2 = 178 + 50 * Math.sin(angle);
          return `<line x1="95" y1="178" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="#94A3B8" stroke-width="0.9" opacity="0.6"/>`;
        }).join('')}
        <!-- Bharat 250W Hub Motor Housing -->
        <circle cx="95" cy="178" r="20" fill="#0F172A" stroke="#22C55E" stroke-width="1.8"/>
        <text x="84" y="180" fill="#22C55E" font-family="monospace" font-size="6.5" font-weight="bold">250W</text>
      </g>

      <!-- Front 29-inch Bicycle Wheel with Realistic Spokes -->
      <g class="wheel front-wheel">
        <circle cx="345" cy="178" r="54" fill="none" stroke="#1E293B" stroke-width="6.5"/>
        <circle cx="345" cy="178" r="50" fill="none" stroke="#475569" stroke-width="2.2"/>
        <circle cx="345" cy="178" r="9" fill="#0F172A" stroke="#94A3B8" stroke-width="2.2"/>
        ${Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * 30 * Math.PI) / 180;
          const x2 = 345 + 50 * Math.cos(angle);
          const y2 = 178 + 50 * Math.sin(angle);
          return `<line x1="345" y1="178" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="#94A3B8" stroke-width="0.9" opacity="0.6"/>`;
        }).join('')}
      </g>

      <!-- Bottom Bracket Hub -->
      <circle cx="198" cy="178" r="11" fill="#18181B" stroke="#CBD5E1" stroke-width="2.2"/>
      
      <!-- Rear Triangle Frame -->
      <line x1="95" y1="178" x2="198" y2="178" stroke="${colorHex}" stroke-width="4.5" stroke-linecap="round"/>
      <line x1="95" y1="178" x2="176" y2="112" stroke="${colorHex}" stroke-width="4.5" stroke-linecap="round"/>

      <!-- Seat Tube & Post -->
      <line x1="198" y1="178" x2="176" y2="102" stroke="${colorHex}" stroke-width="5.5" stroke-linecap="round"/>
      <line x1="176" y1="102" x2="168" y2="84" stroke="#94A3B8" stroke-width="4.5"/>
      <path d="M148 82 C159 80 181 80 192 84 C187 88 170 89 154 88 Z" fill="#18181B" stroke="#27272A" stroke-width="2"/>

      <!-- Top Tube with Bharat Decal -->
      <line x1="176" y1="112" x2="302" y2="98" stroke="${colorHex}" stroke-width="5.5" stroke-linecap="round"/>

      <!-- Down Tube with High Capacity Lockable Battery Pack -->
      <line x1="198" y1="178" x2="302" y2="98" stroke="${colorHex}" stroke-width="6.5" stroke-linecap="round"/>
      <!-- Battery Pack mounted along Down Tube -->
      <path d="M211 162 L275 115 L279 122 L215 168 Z" fill="#0F172A" stroke="#10B981" stroke-width="2"/>
      <line x1="222" y1="157" x2="266" y2="124" stroke="#00F0FF" stroke-width="1.8" stroke-dasharray="4 2"/>

      <!-- Head Tube & Front Suspension Fork -->
      <line x1="302" y1="98" x2="307" y2="87" stroke="${colorHex}" stroke-width="6.5" stroke-linecap="round"/>
      <!-- Lockout Stanchions -->
      <line x1="307" y1="94" x2="345" y2="178" stroke="#94A3B8" stroke-width="5.5" stroke-linecap="round"/>
      <rect x="318" y="120" width="8" height="15" rx="1.5" fill="#E2E8F0"/>

      <!-- Handlebar & Stem with Smart Digital Display -->
      <line x1="307" y1="87" x2="305" y2="72" stroke="#334155" stroke-width="5.5"/>
      <path d="M285 72 L305 72 L325 70" stroke="#0F172A" stroke-width="4.5" stroke-linecap="round"/>
      <rect x="301" y="64" width="11" height="8" rx="1.5" fill="#020617" stroke="#00F0FF" stroke-width="1.2"/>
      <circle cx="316" cy="78" r="5.5" fill="#F8FAFC" stroke="#00F0FF" stroke-width="1.5"/>

      <!-- Pedals & Chain Ring -->
      <circle cx="198" cy="178" r="13" fill="none" stroke="#64748B" stroke-width="2.2" stroke-dasharray="3 3"/>
      <line x1="198" y1="178" x2="211" y2="192" stroke="#94A3B8" stroke-width="3.5"/>
      <rect x="206" y="190" width="11" height="4.5" rx="1.2" fill="#18181B"/>
    </svg>
  `,

  // Electric Motor Architecture Diagram SVG for the dedicated Powertrain section
  getMotorDiagramSVG: () => `
    <svg viewBox="0 0 500 300" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <defs>
        <radialGradient id="motorCoreGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#00F0FF" stop-opacity="0.25"/>
          <stop offset="60%" stop-color="#10B981" stop-opacity="0.1"/>
          <stop offset="100%" stop-color="#020617" stop-opacity="0.9"/>
        </radialGradient>
      </defs>

      <!-- Outer Stator Housing -->
      <circle cx="250" cy="150" r="120" fill="url(#motorCoreGrad)" stroke="#334155" stroke-width="6"/>
      <circle cx="250" cy="150" r="128" fill="none" stroke="#10B981" stroke-width="1.5" stroke-dasharray="8 6" opacity="0.6"/>

      <!-- LiquidCool™ Multi-Rib Heat Fins -->
      ${Array.from({ length: 16 }).map((_, i) => {
        const angle = (i * (360 / 16) * Math.PI) / 180;
        const x1 = 250 + 120 * Math.cos(angle);
        const y1 = 150 + 120 * Math.sin(angle);
        const x2 = 250 + 138 * Math.cos(angle);
        const y2 = 150 + 138 * Math.sin(angle);
        return `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="#64748B" stroke-width="3" stroke-linecap="round"/>`;
      }).join('')}

      <!-- Copper Windings / Stator Poles (12 Coils) -->
      ${Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 30 * Math.PI) / 180;
        const cx = 250 + 82 * Math.cos(angle);
        const cy = 150 + 82 * Math.sin(angle);
        return `<circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="16" fill="#78350F" stroke="#F59E0B" stroke-width="2"/>
                <circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="10" fill="#B45309"/>`;
      }).join('')}

      <!-- Internal Permanent Magnet Rotor -->
      <circle cx="250" cy="150" r="54" fill="#0F172A" stroke="#00F0FF" stroke-width="3"/>
      
      <!-- Central Drive Shaft -->
      <circle cx="250" cy="150" r="24" fill="#1E293B" stroke="#CBD5E1" stroke-width="3"/>
      <circle cx="250" cy="150" r="10" fill="#020617"/>

      <!-- Neodymium Magnets Array -->
      <rect x="238" y="102" width="24" height="8" rx="2" fill="#EF4444"/>
      <rect x="238" y="190" width="24" height="8" rx="2" fill="#3B82F6"/>
      <rect x="202" y="138" width="8" height="24" rx="2" fill="#EF4444"/>
      <rect x="290" y="138" width="8" height="24" rx="2" fill="#3B82F6"/>

      <!-- Tech Labels -->
      <text x="250" y="275" text-anchor="middle" fill="#10B981" font-family="monospace" font-size="12" font-weight="bold">
        BHARAT HYPERDRIVE™ 96.2% EFFICIENCY ARCHITECTURE
      </text>
    </svg>
  `
};

if (typeof window !== "undefined") {
  window.VEHICLE_GRAPHICS = VEHICLE_GRAPHICS;
}
