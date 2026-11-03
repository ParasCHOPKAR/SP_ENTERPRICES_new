export interface ProductItem {
  name: string;
  desc: string;
  specs?: string[];
  badge?: string;
  image?: string;
}

export interface BrandCategory {
  categoryName: string;
  products: ProductItem[];
}

export interface BrandData {
  id: string;
  name: string;
  fullName: string;
  tagline: string;
  badge: string;
  accentColor: string;
  logoBg: string;
  logoColor: string;
  filterCategory: "relays" | "power" | "automation" | "sensors" | "cleanroom";
  overview: string;
  keyFeatures: string[];
  categories: BrandCategory[];
  certifications: string[];
  targetIndustries: string[];
  externalReference?: string;
  heroImage?: string;
  brochurePdf?: string;
}

export function getBrandBrochure(brandId: string): string {
  return `/brochures/${brandId.toLowerCase()}.pdf`;
}

export const BRAND_HERO_MAP: Record<string, string> = {
  'eri': '/product_images/ERI_HERO.png',
  'weidmuller': '/product_hero_card/Weidmuller_hero.png',
  'cermet': '/product_images/Cermet_Resistive_hero.png',
  'west': '/product_hero_card/West-Control-Solutions.png',
  'phoenix': '/product_hero_card/Phoenix-Contact.png',
  'renu': '/product_hero_card/Renu-Electronics.png',
  'cd-automation': '/product_images/CD_automation.png',
  'gefran': '/product_hero_card/Gefran.png',
  'jumo': '/product_hero_card/JUMO-India.png',
  'emerson': '/product_images/emerson/image.png',
  'automation-software': '/product_hero_card/SCADA.png',
  'honeywell': '/product_hero_card/Honeywell.png',
  'cleangrad': '/caaaaaaaa.png',
  'emi-solutions': '/product_hero_card/EMIS.png',
  'emis': '/product_hero_card/EMIS.png',
};

export interface BrandStripLogo {
  id: string;
  name: string;
  logo: string;
  href: string;
}

export const BRAND_STRIP_LOGOS: BrandStripLogo[] = [
  {
    id: "jumo",
    name: "JUMO India",
    logo: "/Brand_logo/jumo.png",
    href: "/products/jumo"
  },
  {
    id: "phoenix",
    name: "Phoenix Contact",
    logo: "/Brand_logo/phoenix.png",
    href: "/products/phoenix"
  },
  {
    id: "renu",
    name: "Renu Electronics",
    logo: "/Brand_logo/renu.png",
    href: "/products/renu"
  },
  {
    id: "weidmuller",
    name: "Weidmüller",
    logo: "/Brand_logo/weidmullerr.png",
    href: "/products/weidmuller"
  },
  {
    id: "eri",
    name: "Electronic Relays India (ERI)",
    logo: "/Brand_logo/ERI.png",
    href: "/products/eri"
  },
  {
    id: "cd",
    name: "CD Automation",
    logo: "/Brand_logo/cd.png",
    href: "/products/cd-automation"
  },
  {
    id: "ceermet",
    name: "Cermet Resistive",
    logo: "/Brand_logo/ceermet.png",
    href: "/products/cermet"
  },
  {
    id: "cleangrad",
    name: "Cleangrad Cleanrooms",
    logo: "/Brand_logo/cleangrad.png",
    href: "/products/cleangrad"
  },
  {
    id: "emerson",
    name: "Emerson",
    logo: "/Brand_logo/emerson.jpg",
    href: "/products/emerson"
  },
  {
    id: "gefran",
    name: "Gefran Automation",
    logo: "/Brand_logo/gefran.png",
    href: "/products/gefran"
  },
  {
    id: "honeywell",
    name: "Honeywell Process Solutions",
    logo: "/Brand_logo/honeywell.png",
    href: "/products/honeywell"
  },
  {
    id: "west",
    name: "West Control Solutions",
    logo: "/Brand_logo/west.svg",
    href: "/products/west"
  },
  {
    id: "emis",
    name: "EMI Solutions (EMIS)",
    logo: "/Brand_logo/emis.png",
    href: "/products/emi-solutions"
  }
];

export const BRANDS_DATA: BrandData[] = [
  {
    id: "eri",
    heroImage: "/product_images/ERI_HERO.png",
    name: "ERI",
    fullName: "Electronic Relays India Pvt. Ltd.",
    tagline: "Solid State Relays & Advanced I/O Switching Modules",
    badge: "Dealer & Supplier",
    accentColor: "#0284c7",
    logoBg: "linear-gradient(135deg, #0369a1 0%, #0284c7 100%)",
    logoColor: "#ffffff",
    filterCategory: "relays",
    overview:
      "Electronic Relays India (ERI) is a pioneer in the manufacturing of Solid State Relays (SSR) and Input/Output Modules. Built to international benchmarks, ERI relays ensure spark-free, silent, and ultra-high-speed solid-state switching with high MTBF.",
    keyFeatures: [
      "UL Approved, CE Certified, RoHS Compliant & ISO 9001 certified",
      "Optical isolation up to 4000Vrms between input and load",
      "Zero cross-over switching and random turn-on options",
      "Built-in RC snubber and high transient voltage suppression",
      "Rugged heat sink mountable & DIN-rail ready designs"
    ],
    categories: [
      {
        categoryName: "Solid State Relays (SSR)",
        products: [
          {
            name: "Single Phase Solid State Relays",
            desc: "02 to 07 Amps (PCB Mount) & 10 to 125 Amps (Panel Mount) for resistive and inductive loads.",
            specs: ["Load: 24-480 VAC", "Control: 3-32 VDC / 90-280 VAC", "Opto-isolated: 4000 Vrms", "Zero Voltage Turn-on"],
            badge: "02A ~ 125A",
            image: "/product_images/ERI_img/Single_Phase_Solid_State_Relays.png"
          },
          {
            name: "Three Phase Solid State Relays",
            desc: "Heavy-duty 3-pole switching for balanced 3-phase industrial heaters, ovens, and furnaces.",
            specs: ["Load: 24-530 VAC 3-Phase", "Current: 25A, 40A, 60A, 80A, 100A, 125A", "Integrated LED status indicator"],
            badge: "10A ~ 125A",
            image: "/product_images/ERI_img/Three_Phase_Solid_State_Relays.png"
          },
          {
            name: "Phase Control SSR",
            desc: "Proportional phase angle control relays for precise thermal regulation and lamp dimming.",
            specs: ["Input: 4-20mA, 0-10VDC or Potentiometer", "Smooth power variation 0-100%"],
            image: "/product_images/ERI_img/Phase_Control_SSR.png"
          },
          {
            name: "Three Phase Motor Reversing SSR",
            desc: "Solid-state forward/reverse direction switching for 3-phase AC induction motors with interlock delay.",
            specs: ["Built-in reverse interlocking circuit", "Ultra-fast response time"],
            image: "/product_images/ERI_img/Three_Phase_Motor_Reversing_SSR.png"
          },
          {
            name: "DIN Ready SSR & ECO SSR",
            desc: "Compact modular relays with integrated heat sinks designed for quick 35mm DIN-rail snapping.",
            specs: ["DIN Rail 35mm clip", "Integrated finger-safe terminal covers", "Optimized thermal dissipation"],
            image: "/product_images/ERI_img/DIN_Ready_SSR_ECO_SSR.png"
          },
          {
            name: "DC-DC Solid State Relays & SCP SSR",
            desc: "MOSFET and IGBT based DC switching with short circuit protection for battery and DC equipment.",
            specs: ["DC Output: up to 200 VDC", "Fast microsecond switching speed"],
            image: "/product_images/ERI_img/DC_DC_Solid_State_Relays_SCP_SSR.png"
          }
        ]
      },
      {
        categoryName: "Input / Output (I/O) Modules & Interface Cards",
        products: [
          {
            name: "AC Output Modules (3 - 5 Amp)",
            desc: "Triac-based isolated output drivers for contactors, solenoids, valves, and motor starters.",
            specs: ["Load: 12-280 VAC", "Logic: 5V, 12V, 24V DC", "Optical isolation 4KV"],
            image: "/product_images/ERI_img/AC-Output-Modules-Amp.png"
          },
          {
            name: "DC Output Modules (3 - 5 Amp)",
            desc: "Transistor & MOSFET DC switching modules for PLCs and digital control systems.",
            specs: ["Load: 3-60 VDC", "Logic: 5V, 12V, 24V DC"],
            image: "/product_images/ERI_img/DC_Output_Modules.png"
          },
          {
            name: "AC Input Modules (110 / 220 VAC)",
            desc: "Safe conditioning and isolation of 110V/220V field voltages to digital micro-controller logic levels.",
            specs: ["Field Input: 90-280 VAC", "Logic Output: 5V/15V/24V DC", "Filter delay suppression"],
            image: "/product_images/ERI_img/AC-nput-Modules-110-220-VAC.png"
          },
          {
            name: "DC Input Modules (48 / 110 / 220 VDC)",
            desc: "Wide-range DC sense modules for high-voltage DC monitoring in power substations and panels.",
            specs: ["Field Input: 48V, 110V, 220 VDC", "Optocoupler isolation"],
            image: "/product_images/ERI_img/DC-Input-Modules-48 -110-220-VDC.png"
          },
          {
            name: "Multi-Channel I/O Relay Interface Cards",
            desc: "Modular DIN-rail mounting relay carrier boards available in 1, 2, 4, 8, 16, and 32 channels with LED status.",
            specs: ["1 / 2 / 4 / 8 / 16 / 32 Channels", "Pluggable relays", "Common positive/negative jumpers", "Freewheeling diode protection"],
            badge: "1 to 32 Channels",
            image: "/product_images/ERI_img/Multi-Channel-I-O-Relay-Interface-Cards.png"
          }
        ]
      }
    ],
    certifications: ["UL Recognized (USA)", "CE Conformity (Europe)", "RoHS Compliant", "ISO 9001:2015"],
    targetIndustries: ["Plastic Extrusion & Molding", "Packaging Machines", "Industrial Ovens & Furnaces", "Pharma Machinery", "Textile Automation"]
  },
  {
    id: "weidmuller",
    heroImage: "/product_hero_card/Weidmuller_hero.png",
    name: "Weidmüller",
    fullName: "Weidmüller Interface GmbH & Co. KG",
    tagline: "Industrial Switched Mode Power Supplies (SMPS) & DC Power Solutions",
    badge: "Dealer & Supplier",
    accentColor: "#ea580c",
    logoBg: "linear-gradient(135deg, #c2410c 0%, #ea580c 100%)",
    logoColor: "#ffffff",
    filterCategory: "power",
    overview:
      "Weidmüller is a global technology leader in smart industrial connectivity and power supply systems. Weidmüller switch-mode power supply units deliver world-class efficiency, dynamic overload capabilities, and uninterrupted power for mission-critical automation.",
    keyFeatures: [
      "Peak energy efficiency up to 95.4% reducing panel heat dissipation",
      "DCL (Dynamic Current Limit) technology for tripping breakers and starting heavy loads",
      "Seamless communication interfaces (IO-Link / CANopen) for predictive maintenance",
      "High MTBF > 1,000,000 hours and robust vibration resistance",
      "Universal wide-range input AC (85-277V) and 3-Phase (320-575V)"
    ],
    categories: [
      {
        categoryName: "Industrial Switched Mode Power Supplies (SMPS)",
        products: [
          {
            name: "PROtop High-End Power Supplies",
            desc: "Flagship premium power supply with integrated ORing MOSFET for N+1 redundancy and DCL dynamic boost.",
            specs: ["Efficiency: up to 95.4%", "Built-in IO-Link communication", "Outputs: 24V / 48V DC (5A, 10A, 20A, 40A)", "1-Phase and 3-Phase models"],
            badge: "High-End PROtop",
            image: "/product_images/weidmuller/PROtop_Power_Supplies.jpg"
          },
          {
            name: "PROmax High-Performance Power Supplies",
            desc: "Designed for demanding continuous power requirements with continuous boost up to 120% and short boost up to 300%.",
            specs: ["Output: 5V, 12V, 24V, 48V DC", "Currents: 3A to 40A", "Slim width for high packing density in panels"],
            badge: "PROmax Series",
            image: "/product_images/weidmuller/PROmax_Power_Supplies.jpg"
          },
          {
            name: "PROeco Basic Switch Mode Power Supplies",
            desc: "Reliable, cost-effective standard power supplies with compact dimensions, tri-color LED status and basic diagnostics.",
            specs: ["Efficiency up to 93%", "Output: 12V, 24V, 48V DC (3A to 40A)", "High overload resistance", "Universal AC/DC input"],
            image: "/product_images/weidmuller/PROeco_Power_Supplies.jpg"
          },
          {
            name: "PRO-M Compact DIN Rail Power Units",
            desc: "Ultra-slim single-phase power supply units optimized for confined space in machine distribution boxes.",
            specs: ["Space-saving form factor", "Wide operating temperature range -25°C to +70°C"],
            image: "/product_images/weidmuller/PRO_M_Power_Supplies.jpg"
          }
        ]
      },
      {
        categoryName: "Power Continuity, Redundancy & Protection",
        products: [
          {
            name: "Diode & MOSFET Redundancy Modules",
            desc: "Decoupling modules to configure 100% fail-safe parallel power architecture for zero-downtime control panels.",
            specs: ["Current ratings: 20A, 40A, 80A", "Minimal forward voltage drop", "Built-in fault alarm contacts"],
            image: "/product_images/weidmuller/Redundancy_Modules.jpg"
          },
          {
            name: "Uninterruptible DC-UPS Systems & Buffers",
            desc: "Capacitor-based buffers and battery-backed DC-UPS to ride through grid dips and power interruptions.",
            specs: ["Buffer times from seconds to hours", "Intelligent battery health monitoring"],
            image: "/product_images/weidmuller/DC_UPS_Systems.jpg"
          },
          {
            name: "maxGUARD Electronic Load Monitoring",
            desc: "Combined terminal blocks and electronic fuses for precise selective 24V DC circuit protection.",
            specs: ["Integrated current adjustment 1A-12A", "Remote reset & tripping indication"],
            image: "/product_images/weidmuller/maxGUARD_Monitoring.jpg"
          }
        ]
      }
    ],
    certifications: ["cULus Listed", "CE", "TÜV Approved", "ATEX / IECEx HazLoc", "GL / DNV Marine"],
    targetIndustries: ["Automotive Manufacturing", "Process Automation", "Renewable Energy & Solar", "Pharma Panels", "Machine Building (OEM)"]
  },
  {
    id: "cermet",
    heroImage: "/product_images/Cermet_Resistive_hero.png",
    name: "Cermet Resistors",
    fullName: "Cermet Resistive Products",
    tagline: "Industrial Power, Wirewound & Dynamic Braking Resistors",
    badge: "Dealer & Supplier",
    accentColor: "#d97706",
    logoBg: "linear-gradient(135deg, #b45309 0%, #d97706 100%)",
    logoColor: "#ffffff",
    filterCategory: "power",
    overview:
      "Cermet Resistors is a recognized manufacturer of heavy-duty industrial power resistors, dynamic braking resistors (DBR), and ceramic-encased wirewound resistors engineered to withstand high thermal shock and surge energy.",
    keyFeatures: [
      "Custom engineered wattage ratings from 5W up to multiple megawatts",
      "Exceptional surge energy absorption and pulse load capacity",
      "Non-inductive winding options for high-frequency switching",
      "Corrosion-resistant aluminium enclosures and ceramic cored wirewound construction",
      "High dielectric insulation resistance up to 3kVAC"
    ],
    categories: [
      {
        categoryName: "Dynamic Braking & Power Resistors",
        products: [
          {
            name: "Dynamic Braking Resistors (DBR)",
            desc: "Heavy-duty braking resistor banks engineered for Variable Frequency Drives (VFD), servo motors, cranes, and hoists.",
            specs: ["Wattage: 100W to 500kW+", "IP20 / IP23 / IP54 protective enclosures", "High thermal mass resistor elements", "Built-in thermal switch protection"],
            badge: "DBR for VFDs",
            image: "/product_images/cermet/dbr_resistor.png"
          },
          {
            name: "Aluminium Housed Power Resistors",
            desc: "Chassis-mount metal clad resistors encased in anodized extruded aluminium for rapid heat conduction.",
            specs: ["Ratings: 25W, 50W, 100W, 200W, 300W, 500W, 1000W", "Compact footprint", "Moisture and vibration sealed"],
            badge: "Aluminium Clad",
            image: "/product_images/cermet/aluminium_housed.jpg"
          },
          {
            name: "Ceramic Encased Wirewound Resistors",
            desc: "Cement-coated and ceramic tubular wirewound power resistors with high pulse withstand capability.",
            specs: ["Wattage: 10W to 1000W", "Flame-proof silicone / cement coating", "Adjustable tapping options"],
            image: "/product_images/cermet/ceramic_wirewound.jpg"
          },
          {
            name: "Neutral Grounding Resistors (NGR) & Load Banks",
            desc: "Substation and generator protection grounding resistors to limit ground fault currents to safe values.",
            specs: ["Custom current / voltage ratings", "Stainless steel grid or punched ribbon elements", "Outdoor weatherproof enclosure"],
            image: "/product_images/cermet/ngr_load_banks.jpg"
          },
          {
            name: "Precision Shunt Resistors & Current Sensors",
            desc: "Ultra-low resistance current-sensing manganin shunts for battery management, EV chargers, and DC panels.",
            specs: ["Current: 10A to 5000A", "Millivolt output: 50mV, 60mV, 75mV, 100mV", "High measurement accuracy Class 0.5/0.2"],
            image: "/product_images/cermet/precision_shunts.png"
          }
        ]
      }
    ],
    certifications: ["ISO 9001:2015", "RoHS Compliant", "CE Certified"],
    targetIndustries: ["Crane & Hoist Systems", "Elevators & Escalators", "VFD & Inverter Manufacturers", "Railway & Electric Traction", "Power Distribution"]
  },
  {
    id: "west",
    heroImage: "/product_hero_card/West-Control-Solutions.png",
    name: "West Control Solutions",
    fullName: "West Control Solutions (Fortive Group)",
    tagline: "PID Temperature & Process Controllers & Limit Devices",
    badge: "Dealer & Supplier",
    accentColor: "#0284c7",
    logoBg: "linear-gradient(135deg, #1e3a8a 0%, #0284c7 100%)",
    logoColor: "#ffffff",
    filterCategory: "sensors",
    overview:
      "West Control Solutions (incorporating WEST, CAL, Partlow, and PMA) provides world-renowned PID temperature controllers, multi-loop automation modules, FM-approved limit devices, and SCR thyristor power controllers for thermal process accuracy.",
    keyFeatures: [
      "Patented easy-tune and pre-tune self-adaptive PID algorithms",
      "Universal process inputs: Thermocouples (J, K, T, R, S, B, N), RTD Pt100, mA, and VDC",
      "FM-approved high/low safety limit controllers for boilers and thermal plants",
      "Modbus RTU, Modbus TCP, Profibus, and Ethernet communications",
      "Bright dual 4-digit / 5-digit displays with bar graphs and custom color alerts"
    ],
    categories: [
      {
        categoryName: "Single Loop & Multi Loop PID Controllers",
        products: [
          {
            name: "MAXVU Series (MAXVU16, MAXVU8, MAXVU4)",
            desc: "Cost-effective, ultra-compact 1/16 and 1/8 DIN temperature controllers with easy setup wizard.",
            specs: ["Size: 1/16 DIN (48x48mm) & 1/8 DIN", "Universal input", "High brightness display", "Up to 3 outputs (Relay / SSR / DC linear)"],
            badge: "MAX VU16 / VU8",
            image: "/product_images/west/maxvu_series.png"
          },
          {
            name: "CAL Series Temperature Controllers (CAL3300, CAL9300, CAL9400)",
            desc: "Famous CAL series miniature PID controller with simple 1-touch auto-tuning and CALgrafix configuration software.",
            specs: ["Sizes: 1/32 DIN (24x48mm), 1/16 DIN, 1/8 DIN", "Full PID heat/cool strategy", "datalogging via CALgrafix"],
            badge: "CAL3300 / 9400",
            image: "/product_images/west/cal_series.gif"
          },
          {
            name: "West Plus Series (West 6100+, 8100+, 4100+, PRO-8)",
            desc: "Highly versatile modular controllers with plug-in output cards, dual setpoints, and remote setpoint input.",
            specs: ["Pluggable I/O modules", "Motor valve drive (VMD) algorithm", "Transmitter power supply built-in"],
            image: "/product_images/west/west_plus_series.gif"
          },
          {
            name: "Pro-EC44 Advanced Dual-Loop Process Controller",
            desc: "High-tier dual loop profile controller with graphical color text display, 255 segments profile programming, and data logging.",
            specs: ["Dual PID control loop", "Cascade / Ratio control", "USB data backup", "Ethernet Modbus TCP / Web server"],
            badge: "Pro-EC44 Advanced",
            image: "/product_images/west/pro_ec44.gif"
          },
          {
            name: "MLC 9000+ Multi-Zone Modular Controller",
            desc: "Modular DIN-rail multi-loop system controlling up to 32 temperature loops without panel front cutouts.",
            specs: ["Up to 32 loops", "Pluggable loop modules", "Fieldbus: Profibus, DeviceNet, Modbus, Ethernet/IP"],
            image: "/product_images/west/mlc_9000.gif"
          }
        ]
      },
      {
        categoryName: "Safety Limit Devices & SCR Thyristor Controllers",
        products: [
          {
            name: "West 4700+ & West 6700+ Safety Limit Controllers",
            desc: "FM-approved high or low limit cut-out controllers with latching safety relay for oven/furnace shutdown.",
            specs: ["FM Approved EN14597", "Latching limit relay with remote/manual reset", "Failsafe trip logic"],
            image: "/product_images/west/west_limit_controllers.gif"
          },
          {
            name: "West SCR Thyristor Power Controllers",
            desc: "Precision single, two, and three-phase thyristor units for electrical heating element control.",
            specs: ["Burst firing, zero cross, and phase angle control", "Current: 25A to 500A", "Integrated current limit and diagnostics"],
            image: "/product_images/west/west_scr_thyristor.png"
          }
        ]
      }
    ],
    certifications: ["FM Approved", "CE Certified", "UL Listed", "EN 14597 (European Limit Control standard)"],
    targetIndustries: ["Plastics & Rubber Extrusion", "Heat Treatment Furnaces", "Packaging & Sealing", "Food & Beverage Processing", "Semiconductor Equipment"]
  },
  {
    id: "phoenix",
    heroImage: "/product_hero_card/Phoenix-Contact.png",
    name: "Phoenix Contact",
    fullName: "Phoenix Contact India Pvt. Ltd.",
    tagline: "Panel Internal Products, Connectivity & Industrial Automation",
    badge: "Dealer & Supplier",
    accentColor: "#059669",
    logoBg: "linear-gradient(135deg, #047857 0%, #059669 100%)",
    logoColor: "#ffffff",
    filterCategory: "automation",
    overview:
      "Phoenix Contact is a global market leader in electrical engineering, connection technology, and automation. We offer complete panel internal solutions including terminal blocks, power supplies, Ethernet switches, relay modules, surge protection, and cable management accessories.",
    keyFeatures: [
      "CLIPLINE complete unified terminal block system with Push-in (PT) and Screw (UT) connections",
      "QUINT & TRIO POWER industrial power supplies with Selective Fuse Breaking (SFB) technology",
      "RIFLINE complete & PLC-INTERFACE ultra-slim 6.2mm relay coupling boards",
      "Comprehensive Surge Voltage Protection (SPD) according to IEC 61643-11",
      "Industrial Ethernet switches with Gigabit and PROFINET/EtherNet/IP priority"
    ],
    categories: [
      {
        categoryName: "Panel Connectivity & Internal Components",
        products: [
          {
            name: "Terminal Blocks & Distribution Blocks",
            desc: "Push-in Technology (PT), screw clamp (UT), spring-cage (ST), and multi-level disconnect terminal blocks.",
            specs: ["Wire range: 0.14 mm² to 300 mm²", "Vibration-proof", "Bridging system CLIPLINE complete"],
            badge: "Push-in & Screw",
            image: "/product_images/phoenix/terminal_blocks.jpg"
          },
          {
            name: "SMPS & Industrial Power Supplies",
            desc: "QUINT POWER, TRIO POWER, STEP POWER, and UNO POWER high-reliability DIN rail power supplies.",
            specs: ["12V, 24V, 48V DC outputs", "SFB technology (Selective Fuse Breaking)", "Efficiency up to 94%"],
            badge: "QUINT & TRIO",
            image: "/product_images/phoenix/smps_quint_power.jpg"
          },
          {
            name: "Industrial Ethernet Switches",
            desc: "Unmanaged and managed DIN-rail Ethernet switches for reliable factory network infrastructure.",
            specs: ["5 to 16 RJ45 ports", "Gigabit & fiber optic SC/ST options", "PROFINET / EtherNet/IP conformance"],
            badge: "Ethernet Switches",
            image: "/product_images/phoenix/ethernet_switches.jpg"
          },
          {
            name: "Relay Modules & PLC Relay Boards",
            desc: "Ultra-slim 6.2mm PLC-INTERFACE coupling relays, electromechanical and solid-state pluggable relays.",
            specs: ["1 CO / 2 CO contacts", "6.2mm width saves 70% space", "Integrated status LED and freewheeling diode"],
            image: "/product_images/phoenix/relay_modules.jpg"
          },
          {
            name: "Surge Arrestors & Lightning Protection",
            desc: "Type 1, Type 2, and Type 3 surge protection devices (PLUGTRAB & VALVETRAB) for power and signal lines.",
            specs: ["Pluggable surge protective modules", "Mechanical and remote fault signalling", "SPD for 230/400V mains"],
            image: "/product_images/phoenix/surge_arrestors.jpg"
          },
          {
            name: "Panel Accessories: DIN Rails, PVC Ducts & Junction Boxes",
            desc: "Zinc-plated and aluminium DIN rails, slotted PVC wiring cable ducts, industrial junction boxes, and cable glands.",
            specs: ["DIN Rail 35x7.5 & 35x15mm", "Halogen-free PVC wire ducts", "IP66 / IP67 die-cast and polyester enclosures"],
            image: "/product_images/phoenix/panel_accessories_ducts.jpg"
          }
        ]
      },
      {
        categoryName: "Safety Relays & Industrial Electronics",
        products: [
          {
            name: "Safety Relays (PSRmini & PSRclassic)",
            desc: "Emergency stop, safety gate, light curtain, and two-hand control monitoring relays with force-guided contacts.",
            specs: ["SILCL 3 according to IEC 62061", "PL e according to ISO 13849-1", "Compact 6mm & 12mm widths"],
            badge: "SIL 3 / PL e",
            image: "/product_images/phoenix/psr_mini_safety_relays.jpg"
          },
          {
            name: "PCB Connectors & Heavy Duty Rectangular Connectors",
            desc: "COMBICON PCB terminals and HEAVYCON robust aluminium die-cast rectangular connectors for harsh factory environments.",
            specs: ["Screw, push-in, and crimp inserts", "IP65 / IP67 / IP69K sealing"],
            image: "/product_images/phoenix/combicon_connectors.jpg"
          }
        ]
      }
    ],
    certifications: ["UL Listed", "cUL", "CE", "DNV-GL", "ATEX", "IEC 61508 SIL 3"],
    targetIndustries: ["Control Panel Builders", "Automotive Assembly", "Power Generation & T&D", "Pharmaceutical Plants", "Process Automation"]
  },
  {
    id: "renu",
    heroImage: "/product_hero_card/Renu-Electronics.png",
    name: "Renu Electronics",
    fullName: "Renu Electronics Pvt. Ltd.",
    tagline: "Industrial PLCs, HMIs, Smart Gateways & Distributed I/O",
    badge: "Dealer & Supplier",
    accentColor: "#2563eb",
    logoBg: "linear-gradient(135deg, #1d4ed8 0%, #2563eb 100%)",
    logoColor: "#ffffff",
    filterCategory: "automation",
    overview:
      "Renu Electronics is a premier manufacturer of factory automation solutions including Programmable Logic Controllers (PLC), Touchscreen Human Machine Interfaces (HMI), Combined HMI with built-in I/O, Remote I/O units, and IoT Gateways.",
    keyFeatures: [
      "FlexiPanels Touchscreen HMIs ranging from 3.5\" up to 15\" with high-resolution TFT",
      "FlexiLogics Micro and Modular PLCs with high-speed counting and analog PID",
      "All-In-One HMI + PLC combo reducing panel space, wiring, and engineering cost",
      "Multi-protocol connectivity: Modbus RTU/TCP, BACnet, Profinet, EtherNet/IP, CANopen",
      "Free programming software suite with rich symbol libraries and recipe management"
    ],
    categories: [
      {
        categoryName: "PLCs, HMIs & Combo Automation Units",
        products: [
          {
            name: "FlexiLogics Modular & Micro PLCs",
            desc: "Compact DIN-rail programmable logic controllers with expandable digital/analog I/O and high-speed motion PTO.",
            specs: ["Up to 256 I/O points", "RTC built-in", "IEC 61131-3 programming (Ladder, FBD, ST)", "Dual serial and Ethernet ports"],
            badge: "FlexiLogics PLC",
            image: "/product_images/renu/flexilogics_plc.png"
          },
          {
            name: "FlexiPanels Graphic Touchscreen HMIs",
            desc: "Industrial operator panels from 3.5\" to 15\" with 65K colors, resistive touch, and rugged IP66 front bezel.",
            specs: ["Display: 3.5\", 4.3\", 7\", 10.1\", 12.1\", 15\"", "USB host, Ethernet, Dual serial", "Data logging, trending, and alarm handling"],
            badge: "FlexiPanels HMI",
            image: "/product_images/renu/flexipanels_hmi.png"
          },
          {
            name: "FlexiPanels HMI with Integrated I/O (Combo Units)",
            desc: "Combined HMI and PLC in a single compact housing, with integrated digital inputs, relay/transistor outputs, and analog channels.",
            specs: ["Eliminates external PLC wiring", "Pluggable I/O options (16DI/12DO, Analog 4-20mA)", "Cost-effective OEM solution"],
            badge: "HMI + I/O Combo",
            image: "/product_images/renu/flexipanels_combo_io.png"
          },
          {
            name: "Field I/O & Remote Distributed I/O Modules",
            desc: "DIN-rail remote I/O slice modules connecting digital, thermocouple, RTD, and analog signals via RS485 Modbus or Ethernet.",
            specs: ["Modbus RTU / Modbus TCP slave", "Compact 22.5mm module width", "Galvanic channel isolation"],
            image: "/product_images/renu/remote_field_io.png"
          },
          {
            name: "Web Panel Series & Industrial IoT Gateways",
            desc: "Smart web panels for HTML5 browser-based SCADA visualization and edge gateways for cloud telemetry (MQTT / OPC-UA).",
            specs: ["Linux-based edge gateway", "Cloud connectivity via MQTT/HTTP", "Remote machine access"],
            image: "/product_images/renu/web_panel_gateway.png"
          },
          {
            name: "Legacy Products & Protocol Converters",
            desc: "Serial-to-Ethernet converters, RS232-to-RS485 isolated repeaters, and migration cards for legacy machinery.",
            specs: ["Optical isolation 2.5kV", "Baud rates up to 115.2 kbps"],
            image: "/product_images/renu/protocol_converter.png"
          }
        ]
      }
    ],
    certifications: ["CE Certified", "UL Listed", "RoHS Compliant", "ISO 9001:2015"],
    targetIndustries: ["Packaging Machinery", "Special Purpose Machines (SPM)", "Water Treatment Plants", "HVAC Panels", "Textile & Printing Machines"]
  },
  {
    id: "cd-automation",
    heroImage: "/product_images/CD_automation.png",
    name: "CD Automation",
    fullName: "CD Automation S.r.l. (Italy)",
    tagline: "Heavy-Duty Thyristor Power Controllers & SSR Units",
    badge: "Dealer & Supplier",
    accentColor: "#16a34a",
    logoBg: "linear-gradient(135deg, #15803d 0%, #16a34a 100%)",
    logoColor: "#ffffff",
    filterCategory: "power",
    overview:
      "CD Automation is an Italian specialist manufacturer of industrial Thyristor Power Controllers, Solid State Relays with heat sinks, and Multidrive units capable of switching and modulating electrical power from small lab heaters up to 2000A industrial furnaces.",
    keyFeatures: [
      "REVO Series thyristors with advanced microprocessors and OLED diagnostics display",
      "Configurable firing modes: Zero Crossing, Burst Firing, Single Cycle, and Phase Angle",
      "True RMS load voltage, current, and power measurement",
      "Total and partial load failure alarm (HB heater breakdown diagnostics)",
      "Native industrial fieldbus: Modbus RTU, Profinet, Profibus, EtherNet/IP, Modbus TCP"
    ],
    categories: [
      {
        categoryName: "Thyristor Power Controllers & Power Units",
        products: [
          {
            name: "REVO Series Thyristor Power Controllers",
            desc: "State-of-the-art intelligent thyristor units (REVO S, REVO M, REVO CL) with digital calibration and multi-zone support.",
            specs: ["Single, 2-phase, and 3-phase models", "Current: 10A to 800A+", "Voltage up to 690 VAC", "Phase angle and burst firing"],
            badge: "REVO Series",
            image: "/product_images/cd_automation/REVO-Series-Thyristor-Power-Controllers-give-me-one-image.png"
          },
          {
            name: "Heat Sink SSR Assemblies",
            desc: "Complete solid-state switching blocks with pre-assembled factory-rated heat sinks and semiconductor fuses.",
            specs: ["Single and multi-phase", "Integrated thermal cutout switch", "DIN rail or backplate mounting"],
            badge: "Integrated Heat Sink",
            image: "/product_images/cd_automation/Heat-Sink-SSR-Assemblies-give-me-one-image.png"
          },
          {
            name: "DM Series Multidrive Power Controllers",
            desc: "Compact modular multi-channel power controllers managing multiple heating zones from a single communication node.",
            specs: ["Independent zone control", "Power sharing algorithms to reduce peak factory demand", "Modbus RS485 communication"],
            image: "/product_images/cd_automation/Multidrive1-Phase-Phase-3-Phase-Units.png"
          },
          {
            name: "Multidrive 1-Phase / 2-Phase / 3-Phase Units",
            desc: "Modular power controllers engineered for complex heating elements like silicon carbide (SiC), molybdenum, and transformers.",
            specs: ["Current limit and power limit (V², I², P)", "Soft-start and current ramp", "Diagnostic feedback to SCADA"],
            image: "/product_images/cd_automation/Multidrive1-Phase-Phase-3-Phase-Units.png"
          }
        ]
      }
    ],
    certifications: ["CE", "cULus Listed", "EMC Compliant", "ISO 9001"],
    targetIndustries: ["Industrial Glass Furnaces", "Heat Treatment & Annealing", "Silicon & Semiconductor Manufacturing", "Plastic Extrusion & Thermoforming", "Ceramics & Kilns"]
  },
  {
    id: "gefran",
    heroImage: "/product_hero_card/Gefran.png",
    name: "Gefran",
    fullName: "Gefran S.p.A. (Italy / India)",
    tagline: "Sensors, LVDT Displacement Transducers, Controllers & Drives",
    badge: "Dealer & Supplier",
    accentColor: "#0284c7",
    logoBg: "linear-gradient(135deg, #0369a1 0%, #0284c7 100%)",
    logoColor: "#ffffff",
    filterCategory: "sensors",
    overview:
      "Gefran is a premier European manufacturer specializing in industrial sensors, linear displacement transducers (LVDT / magnetostrictive), melt pressure transmitters for polymer processing, digital process controllers, and variable frequency drives.",
    keyFeatures: [
      "Industry-standard Melt Pressure Transducers for plastic extrusion up to 538°C",
      "High-precision LVDT and non-contact magnetostrictive linear transducers (Hyperwave technology)",
      "Microprocessor controllers (Series 600, 800, 1200, 1600) with custom graphic displays",
      "ADV200 high-performance vector inverters with closed-loop field-oriented control",
      "Extreme measurement repeatability and durability in aggressive industrial environments"
    ],
    categories: [
      {
        categoryName: "Sensors & Linear Displacement Transducers",
        products: [
          {
            name: "Melt Pressure Transducers & Transmitters",
            desc: "Mercury-filled, FDA-compliant Oil-filled, and Sodium-Potassium (NaK) impact fluid-free melt pressure sensors for extruders.",
            specs: ["Pressure range: 0-35 bar up to 0-2000 bar", "Temp: up to 400°C / 538°C", "Output: mV/V, 4-20mA, 0-10V, HART, CANopen, IO-Link"],
            badge: "Melt Pressure",
            image: "/product_images/gefran/melt_pressure.jpg"
          },
          {
            name: "LVDT & Linear Displacement Transducers",
            desc: "Potentiometric position transducers (LT, PK, PC series) and non-contact magnetostrictive sensors (WPG, MK4).",
            specs: ["Strokes from 10mm up to 4000mm", "Resolution down to 0.005mm", "Rod and profile types", "IP67 protection"],
            badge: "LVDT & Linear",
            image: "/product_images/gefran/lvdt_linear.jpg"
          },
          {
            name: "Temperature & Pressure Transducers",
            desc: "Industrial thermocouples, RTD Pt100 probes, and piezoresistive pressure sensors for hydraulic and pneumatic presses.",
            specs: ["Gauge & absolute pressure", "High shock & vibration resistance"],
            image: "/product_images/gefran/pressure_transducer.png"
          }
        ]
      },
      {
        categoryName: "Controllers, Indicators & Industrial Drives",
        products: [
          {
            name: "Gefran Microprocessor Controllers (600, 800, 1200, 1600)",
            desc: "Digital PID controllers with customizable bar-graphs, mathematical functions, timer alarms, and valve motor control.",
            specs: ["Dual 4-digit LED or LCD display", "Universal configurable input", "RS485 Modbus RTU communication"],
            badge: "Series 600/800",
            image: "/product_images/gefran/gefran_controllers.jpg"
          },
          {
            name: "Gefran Inverters & Variable Frequency Drives (ADV200)",
            desc: "Field-oriented vector inverters engineered for extruders, cranes, metal processing, and high-speed precision spindles.",
            specs: ["Power range: 0.75kW to 1.65MW", "Sensorless and closed loop encoder feedback", "Integrated safe torque off (STO)"],
            image: "/product_images/gefran/gefran_adv200.jpg"
          }
        ]
      }
    ],
    certifications: ["CE", "cULus", "ATEX / IECEx", "SIL 2 / SIL 3", "RoHS"],
    targetIndustries: ["Plastic & Rubber Machinery", "Metalworking & Extrusion", "Hydraulic Presses & Injection Molding", "Die Casting", "Material Handling"]
  },
  {
    id: "jumo",
    heroImage: "/product_hero_card/JUMO-India.png",
    name: "JUMO India",
    fullName: "JUMO India Pvt. Ltd. (JUMO GmbH & Co. KG)",
    tagline: "Industrial Thermocouples, RTDs, Precision Pressure, Humidity & Liquid Analysis",
    badge: "Official Dealer & Partner",
    accentColor: "#1d4ed8",
    logoBg: "linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 100%)",
    logoColor: "#ffffff",
    filterCategory: "sensors",
    externalReference: "https://www.jumo.group/in/en/products/temperature/thermocouples",
    overview:
      "JUMO is a world-renowned German pioneer and manufacturer of industrial sensor and automation technology with over 50 years of experience in high-temperature measurement. JUMO's thermocouple portfolio is standardized according to DIN EN 60584, DIN 43710, and DIN 43732 covering thermocouple types K, J, N, S, R, and B for temperatures up to +1600°C. From screw-in, push-in, and mineral-insulated thermocouples to FDA 21 CFR Part 11 paperless recorders and sanitary transmitters, JUMO provides turnkey temperature instrumentation across all industrial processes.",
    keyFeatures: [
      "Standardized Thermocouples: Manufactured to DIN EN 60584, DIN 43710, and DIN 43732 for thermocouple types K, J, N, S, R, and B up to +1600°C",
      "Flexible Mounting & Designs: Screw-in (Form B/J), push-in (Form A/B), bayonet spring-loaded, and mineral-insulated (MgO) cables with ultra-fast response (t0.5 from 0.15s)",
      "Severe Duty & Safety Tested: DIN EN 14597 safety certified for boilers and furnaces, noble metal thermocouples with ceramic protection tubes (Alsint 99.7 / Pythagoras)",
      "Specialized Industry Probes: Plastic melt thermocouples up to 2000 bar (Type 901090), steam-tight FOODtemp hygienic insertion probes (Type 901350)",
      "Complete Measuring Chain: Compensating cables, polarized miniature/standard connectors, head transmitters (dTRANS T01-T07 HART/SIL), and LOGOSCREEN recorders"
    ],
    categories: [
      {
        categoryName: "Industrial Thermocouples (DIN EN 60584 & DIN 43710)",
        products: [
          {
            name: "JUMO Screw-in Thermocouples with Form B Head (Type 901020)",
            desc: "Industrial screw-in thermocouple with robust Form B terminal head designed for temperature acquisition in liquid and gaseous media, pipelines, boilers, and machinery.",
            specs: ["Temp. Range: -200 to +800 °C", "Insertion Length: 160 to 600 mm", "Thermocouple Types: J, K, and L", "Connection: G 1/2, G 3/4, 1/2 NPT", "SIL & Metrological Certified"],
            badge: "Type 901020",
            image: "/product_images/jumo/jumo_901020_screw_in_thermocouple.webp"
          },
          {
            name: "JUMO Screw-in Thermocouples with Form J Head (Type 901030)",
            desc: "Compact screw-in thermocouple with space-saving Form J aluminum terminal head for tight machinery installations and heating systems.",
            specs: ["Temp. Range: -200 to +800 °C", "Insertion Length: 50 to 300 mm", "Thermocouple Types: J, K, and L", "Protection Tube: Stainless steel 1.4571"],
            badge: "Type 901030",
            image: "/product_images/jumo/jumo_901030_screw_in_form_j.webp"
          },
          {
            name: "JUMO Screw-in Thermocouples with Connecting Cable (Type 901050)",
            desc: "Screw-in thermocouple with integrated flexible compensating cable, stainless steel sheath, and strain-relief transition spring for machine building.",
            specs: ["Temp. Range: -200 to +600 °C", "Sheath Material: Stainless steel 1.4571", "Thermocouple Types: K and L", "Cable: Silicone, PTFE, or metal braiding"],
            badge: "Type 901050",
            image: "/product_images/jumo/jumo_901050_screw_in_cable.webp"
          },
          {
            name: "JUMO Push-in Thermocouples with Form A Head (Type 901110)",
            desc: "Heavy-duty push-in high-temperature thermocouple with heavy Form A terminal head and stop flange for furnaces, flue gas, incinerators, and thermal plants.",
            specs: ["Temp. Range: -200 to +1600 °C", "Protection Tube Diameter: 15 mm or 22 mm", "Thermocouple Types: B, J, K, L, and S", "High-temperature ceramic or heat-resistant steel"],
            badge: "Type 901110",
            image: "/product_images/jumo/jumo_901110_push_in_form_a.webp"
          },
          {
            name: "JUMO Push-in Thermocouples with Form B Head (Type 901120)",
            desc: "Universal push-in thermocouple probe with Form B terminal head and adjustable compression fitting for duct and pipe temperature measurement.",
            specs: ["Temp. Range: -200 to +1200 °C", "Insertion Length: 100 to 960 mm", "Thermocouple Types: B, J, K, L, and S", "Single or Duplex thermocouple elements"],
            badge: "Type 901120",
            image: "/product_images/jumo/jumo_901120_push_in_form_b.webp"
          },
          {
            name: "JUMO Push-in Bayonet Thermocouples (Type 901190)",
            desc: "Quick-mounting bayonet cap thermocouple with adjustable spring pressure for plastic injection molding machines, extruders, and hot runner tools.",
            specs: ["Temp. Range: 0 to 400 °C", "Bayonet Cap: 12 mm / 15 mm dia", "Thermocouple Types: J, K, and L", "Compensating Cable: Metal braiding over glass fiber"],
            badge: "Type 901190",
            image: "/product_images/jumo/jumo_901190_bayonet_thermocouple.webp"
          },
          {
            name: "JUMO Mineral-Insulated Thermocouples with Bare Wires (Type 901210)",
            desc: "Flexible, bendable mineral-insulated thermocouple cable with compacted MgO insulation according to DIN 43710 and DIN EN 60584 for high-vibration applications.",
            specs: ["Temp. Range: -200 to +1200 °C", "Sheath Diameter: 0.5 mm to 6.0 mm", "Fast Response: t0.5 from 0.15 s", "Thermocouple Types: J, K, L, N", "Vibration and pressure resistant"],
            badge: "Type 901210",
            image: "/product_images/jumo/jumo_901210_mineral_insulated.webp"
          },
          {
            name: "JUMO Mineral-Insulated Thermocouples with Tab Connector (Type 901240)",
            desc: "Mineral-insulated thermocouple probe terminated with miniature or standard polarized thermocouple connector plug for rapid tool disconnect.",
            specs: ["Temp. Range: -200 to +1200 °C", "Connector: Standard / Miniature Tab Connector", "Thermocouple Types: J, K, L, N", "Inconel 600 / Stainless steel sheath"],
            badge: "Type 901240",
            image: "/product_images/jumo/jumo_901240_mineral_insulated_tab.webp"
          },
          {
            name: "JUMO Safety Thermocouples DIN EN 14597 (Type 901006)",
            desc: "Certified safety thermocouples for temperature control systems, heat transfer installations, and industrial furnaces tested according to DIN EN 14597.",
            specs: ["Temp. Range: -35 to +1500 °C", "DIN EN 14597 Certified", "Thermocouple Types: B, K, L, and S", "Tested for thermal oil and boiler installations"],
            badge: "DIN EN 14597",
            image: "/product_images/jumo/jumo_901006_safety_en14597.webp"
          },
          {
            name: "JUMO Straight Thermocouples with Ceramic Protection Tube (Type 909744)",
            desc: "Severe-duty straight thermocouples with ceramic protection tube (Pythagoras / Alsint 99.7) for kilns, glass annealing, and molten non-ferrous metals.",
            specs: ["Temp. Range: -200 to +1600 °C", "Length: 220 to 2040 mm", "Thermocouple Types: L, K, S, or B", "Noble metal PtRh-Pt thermocouples (Type S/B)"],
            badge: "DIN 43 732",
            image: "/product_images/jumo/jumo_909744_ceramic_thermocouple.webp"
          },
          {
            name: "JUMO Screw-in Melt Thermocouples for Plastics Industry (Type 901090)",
            desc: "Specialized melt temperature thermocouple with ceramic-insulated sharp or flat probe tip for extrusion heads and plastic melt channels.",
            specs: ["Temp. Range: -40 to +600 °C", "Process Connection: 1/2-20 UNF-2A, M18x1.5", "Thermocouple Types: J, K, and L", "Pressure Resistant up to 2000 bar"],
            badge: "Type 901090",
            image: "/product_images/jumo/jumo_901090_melt_thermocouple.webp"
          },
          {
            name: "JUMO FOODtemp Food Insertion Thermocouples (Type 901350)",
            desc: "Hygienic penetration and insertion thermocouple probe with steam-tight ergonomic Teflon handle and penetration tip for meat, baking, and smoking chambers.",
            specs: ["Temp. Range: -100 to +260 °C", "Food Grade Design", "Thermocouple Type: K", "Protection Type: IP67 steam-tight"],
            badge: "FOODtemp",
            image: "/product_images/jumo/jumo_901350_foodtemp.webp"
          },
          {
            name: "JUMO Thermocouple Compensating Cables & Thermal Wire (Type 909735)",
            desc: "Standardized compensating cables and thermal wires for the electrical connection between thermocouples and transmitters according to DIN EN 60584 & DIN 43714.",
            specs: ["Temp. Range: -50 to +350 °C", "Standards: DIN EN 60584 & DIN 43714", "Insulation: PVC, Silicone, Teflon PTFE, Glass fiber with steel braiding", "Color-coded conductors for Type J, K, S, N"],
            badge: "Type 909735",
            image: "/product_images/jumo/jumo_909735_compensating_cables.webp"
          },
          {
            name: "JUMO Polarized Plug Connectors for Thermocouples (Type 909760)",
            desc: "Miniature and standard thermocouple plug connectors with true thermoelectric alloy pins to prevent parasitic thermal EMF errors.",
            specs: ["Temp. Range: -60 to +200 °C", "Thermocouple Types: J, K, T, E, N, S, R, B", "Polarized flat and round pin versions", "Glass-filled thermoplastic body"],
            badge: "Type 909760",
            image: "/product_images/jumo/jumo_909760_connectors.webp"
          }
        ]
      },
      {
        categoryName: "RTD Temperature Probes, Transmitters & Recorders",
        products: [
          {
            name: "RTD Temperature Probes & Elements (Pt100 / Pt1000)",
            desc: "Screw-in, push-in, and sanitary Pt100/Pt1000 resistance thermometers with mineral-insulated cable and terminal heads.",
            specs: ["Measurement: -200°C to +600°C", "Tolerance Class A, 1/3 DIN, 1/10 DIN", "Stainless steel thermowells"],
            badge: "RTD Pt100 / Pt1000",
            image: "/product_images/jumo/temperature_probe.jpg"
          },
          {
            name: "Temperature Transmitters & Switches (dTRANS T01-T07)",
            desc: "Head-mounted and DIN-rail programmable transmitters (dTRANS T01/T02/T05/T06/T07) with HART, SIL 2/3, and IO-Link.",
            specs: ["4-20mA, HART 7, Modbus RTU, IO-Link", "Galvanic isolation 3.75kV", "SIL 2 / SIL 3 hardware/software"],
            badge: "dTRANS Series",
            image: "/product_images/jumo/temperature_probe.jpg"
          },
          {
            name: "LOGOSCREEN Paperless Recorders",
            desc: "State-of-the-art paperless chart recorders with touchscreen, batch reporting, FDA 21 CFR Part 11 security, and web server.",
            specs: ["Up to 24 universal analog inputs", "Audit trail & tamper-proof data storage", "Ethernet / Modbus TCP"],
            badge: "21 CFR Part 11",
            image: "/product_images/jumo/logoscreen_recorder.webp"
          },
          {
            name: "Wireless Temperature Sensors (Wtrans)",
            desc: "Radio transmitter probes for wireless temperature acquisition in rotating tanks, autoclaves, and moving parts.",
            specs: ["868.4 MHz radio band", "Transmission range up to 300m"],
            badge: "Wtrans Wireless",
            image: "/product_images/jumo/temperature_probe.jpg"
          }
        ]
      },
      {
        categoryName: "Pressure, Humidity & Liquid Analysis",
        products: [
          {
            name: "Industrial Pressure Transmitters (MIDAS / dTRANS p)",
            desc: "Piezoresistive and ceramic capacitive pressure transmitters for liquids, steam, gases, and sanitary hygienic lines.",
            specs: ["Ranges: 0-10 mbar to 0-1000 bar", "Sanitary clamp, SMS, Varivent connections", "Accuracy up to 0.05%"],
            badge: "MIDAS Series",
            image: "/product_images/jumo/midas_pressure.webp"
          },
          {
            name: "Level Probes & Melt Transmitters",
            desc: "Hydrostatic submersible level probes for deep wells, boreholes, and tanks, plus melt pressure sensors.",
            specs: ["Submersible PUR/FEP cables", "Overvoltage lightning protection"],
            badge: "Level & Melt",
            image: "/product_images/jumo/midas_pressure.webp"
          },
          {
            name: "Humidity Transducers & Hygrostats",
            desc: "Capacitive relative humidity and temperature transmitters for HVAC cleanrooms, chambers, and drying rooms.",
            specs: ["Range: 0 to 100% RH", "Operating temp -40°C to +180°C"],
            badge: "Humidity & Temp",
            image: "/product_images/jumo/temperature_probe.jpg"
          },
          {
            name: "Liquid Analysis & TRON Controllers",
            desc: "Sensors and transmitters for pH, ORP, conductivity, turbidity, and chlorine, alongside TRON multi-channel controllers.",
            specs: ["AQUIS touch multi-channel display", "Flow measurement integration"],
            badge: "Liquid Analysis",
            image: "/product_images/jumo/logoscreen_recorder.webp"
          }
        ]
      }
    ],
    certifications: [
      "ISO 9001:2015",
      "DIN EN 14597 (Safety Temperature Limiters)",
      "DIN EN 60584 & DIN 43710",
      "FDA 21 CFR Part 11",
      "SIL 2 / SIL 3 Certified",
      "ATEX / IECEx Explosion-Proof",
      "EHEDG Hygienic Certified",
      "H2ready Hydrogen Certified"
    ],
    targetIndustries: [
      "Furnaces, Kilns & Metallurgy",
      "Plastics & Extrusion Machinery",
      "Pharmaceutical & Biotech",
      "Food & Beverage Processing",
      "Chemical & Petrochemical",
      "Power Generation & Boiler Systems"
    ]
  },
  {
    id: "emerson",
    heroImage: "/product_images/emerson/image.png",
    name: "Emerson",
    fullName: "Emerson Electric Co.",
    tagline: "PACSystems, HMIs, Programmable Controllers & HVAC Automation",
    badge: "Dealer & Supplier",
    accentColor: "#0284c7",
    logoBg: "linear-gradient(135deg, #0f172a 0%, #0369a1 100%)",
    logoColor: "#ffffff",
    filterCategory: "automation",
    overview:
      "Emerson provides world-leading industrial automation solutions, PACSystems programmable automation controllers, edge devices, and dedicated HVAC & refrigeration control electronics (Copeland controls) designed for maximum reliability and energy optimization.",
    keyFeatures: [
      "PACSystems RX3i high-performance controller with dual-redundancy for zero unplanned downtime",
      "RSTi-EP modular distributed slice I/O system with compact high-density footprint",
      "QuickPanel+ multifunctional operator touchscreen HMI with built-in PLC runtime",
      "Dedicated Copeland & Emerson HVAC/R rack controllers and Electronic Expansion Valve (EEV) drivers",
      "Built-in PROFINET, Modbus TCP, OPC-UA, and IIoT analytics capabilities"
    ],
    categories: [
      {
        categoryName: "PAC Systems, PLCs & Industrial HMIs",
        products: [
          {
            name: "PACSystems RX3i Controllers",
            desc: "High-speed programmable automation controller with multi-core processing, gigabit backplane, and hot-standby redundancy.",
            specs: ["Hot-swap modular I/O", "High-speed PROFINET ring redundancy (MRP)", "Embedded cyber security"],
            badge: "PACSystems RX3i",
            image: "/product_images/emerson/PACSystems-RX3i-Controllers.png"
          },
          {
            name: "RSTi-EP Slice I/O & Micro PLCs",
            desc: "Ultra-compact distributed I/O slices (11.5mm width) with integrated test points and pluggable spring terminals.",
            specs: ["Up to 64 modules per network node", "PROFINET, EtherNet/IP, Modbus TCP adapters"],
            image: "/product_images/emerson/RSTi-EP-Slice-Micro-PLCs.png"
          },
          {
            name: "QuickPanel+ Touchscreen Operator Interfaces",
            desc: "All-in-one HMI combining graphical visualization, PLC control logic, and data historian on a multi-touch screen.",
            specs: ["Screen sizes: 6\", 7\", 10\", 12\", 15\"", "Multi-touch projected capacitive display", "Built-in VNC remote server"],
            image: "/product_images/emerson/QuickPanel-Touchscreen-Operator-Interfaces-emerson.png"
          },
          {
            name: "Emerson HMI M822E Industrial Operator Interface",
            desc: "Compact 5-inch industrial HMI touchscreen operator interface engineered for machine automation, equipment parameter setting, and PLC graphical visualization.",
            specs: [
              "Display: 5 Inch (in) Industrial Touchscreen",
              "Application: Industrial Machine Automation",
              "Weight: 600 Grams (g) | Color: Black",
              "Price: Approx. ₹2,000 / Unit | In Stock"
            ],
            badge: "HMI M822E",
            image: "/product_images/emerson/Emerson-HMI-M822E.png"
          }
        ]
      },
      {
        categoryName: "HVAC & Industrial Refrigeration Automation",
        products: [
          {
            name: "Copeland / Emerson Facility & Rack Controllers",
            desc: "Dedicated supermarket refrigeration, chiller plant, and cold chain controllers (E2 / E3 facility management).",
            specs: ["Multi-compressor sequencing", "Floating suction/condensing optimization", "Refrigerant leak detection integration"],
            badge: "HVAC & Cold Chain",
            image: "/product_images/emerson/Copeland-Emerson-Facility-Rack-Controllers-emerson.png"
          },
          {
            name: "Chiller & AHU Dedicated Controllers",
            desc: "Microprocessor-based control boards programmed for chillers, air handling units (AHU), and variable air volume (VAV).",
            specs: ["Precision PID temperature/humidity staging", "BACnet MS/TP and IP communication"],
            image: "/product_images/emerson/Chiller_AHU_Dedicated_Controllers.png"
          },
          {
            name: "Electronic Expansion Valve (EEV) Drivers",
            desc: "Stepper motor driver modules for electronic expansion valves ensuring optimal superheat control and energy savings.",
            specs: ["Ultra-fast superheat response", "Battery backup safety valve closure"],
            image: "/product_images/emerson/Electronic_Expansion_Valve_EEV_Drivers.png"
          }
        ]
      }
    ],
    certifications: ["cULus Listed", "CE Certified", "BACnet BTL Listed", "AHRI Certified"],
    targetIndustries: ["HVAC & Chiller Plants", "Cold Chain & Supermarkets", "Pharmaceutical HVAC Control", "Water & Infrastructure", "Discrete Automation"]
  },
  {
    id: "automation-software",
    heroImage: "/product_hero_card/SCADA.png",
    name: "Automation Software",
    fullName: "Custom Industrial Automation Software & SCADA Systems",
    tagline: "SCADA, Custom IIoT Software, 21 CFR Part 11 & Multi-Vendor PLC Programming",
    badge: "Engineering & Solutions Partner",
    accentColor: "#7c3aed",
    logoBg: "linear-gradient(135deg, #5b21b6 0%, #7c3aed 100%)",
    logoColor: "#ffffff",
    filterCategory: "automation",
    overview:
      "SP Enterprises delivers turn-key software engineering, SCADA application development, custom plant monitoring software, 21 CFR Part 11 compliance systems, and multi-vendor PLC/HMI automation programming tailored for modern Industry 4.0 operations.",
    keyFeatures: [
      "SCADA development on industry platforms: Experion, Ignition, Wonderware InTouch, Siemens WinCC, Movicon.NExT",
      "Pharmaceutical compliance: FDA 21 CFR Part 11 compliant audit trail, electronic signatures, and secure batch reports",
      "Custom industrial telemetry, machine monitoring dashboards, OEE tracking, and predictive maintenance",
      "Multi-vendor PLC programming: Siemens (TIA Portal), Rockwell Allen-Bradley, Schneider, Delta, Renu, Honeywell",
      "Seamless ERP / MES connectivity via OPC-UA, MQTT, SQL databases, and REST APIs"
    ],
    categories: [
      {
        categoryName: "SCADA & Industrial Software Solutions",
        products: [
          {
            name: "Turn-key SCADA System Development",
            desc: "Complete SCADA visualization, animated mimic screens, real-time alarm handling, and automated reporting.",
            specs: ["Ignition / Wonderware / WinCC / Experion", "Scalable client-server architecture", "Web and mobile browser clients"],
            badge: "SCADA Solutions",
            image: "/product_images/software/scada_system_development.jpg"
          },
          {
            name: "Pharma 21 CFR Part 11 Compliance Software",
            desc: "Custom electronic batch records, audit trail logging, user role management, and cryptographic electronic signatures.",
            specs: ["Audit trail with non-editable timestamps", "Electronic signature authorization", "CSV (Computer System Validation) ready"],
            badge: "21 CFR Part 11",
            image: "/product_images/software/pharma_21cfr_part11.jpg"
          },
          {
            name: "Custom IIoT & Telemetry Web Dashboards",
            desc: "Custom-built cloud and on-premise software for real-time machine telemetry, energy consumption monitoring, and OEE calculation.",
            specs: ["MQTT / OPC-UA / Modbus TCP protocols", "Automated shift PDF reports & WhatsApp/Email alerts", "SQL / InfluxDB historian"],
            image: "/product_images/software/iiot_telemetry_dashboard.jpg"
          },
          {
            name: "Multi-Vendor PLC & HMI Automation Programming",
            desc: "Certified control code development, logic optimization, motion control profiling, and commissioning across all major PLC brands.",
            specs: ["Siemens, Allen-Bradley, Schneider, Mitsubishi, Renu", "Structured text & modular ladder logic", "On-site and remote commissioning"],
            image: "/product_images/software/plc_programming_software.jpg"
          }
        ]
      }
    ],
    certifications: ["GAMP 5 Standards", "FDA 21 CFR Part 11 Guideline", "ISA-88 Batch Standard", "ISA-95 Enterprise Integration"],
    targetIndustries: ["Pharmaceutical & Life Sciences", "Chemical Plants", "Food & Beverage", "Automated Packaging Lines", "Water & Waste Treatment"]
  },
  {
    id: "honeywell",
    heroImage: "/product_hero_card/Honeywell.png",
    name: "Honeywell Automation",
    fullName: "Honeywell Process & Building Solutions",
    tagline: "DCS, Experion LX, MasterLogic PLC, Field Instruments & Gas Detection",
    badge: "Dealer & Solutions Partner",
    accentColor: "#dc2626",
    logoBg: "linear-gradient(135deg, #b91c1c 0%, #dc2626 100%)",
    logoColor: "#ffffff",
    filterCategory: "sensors",
    externalReference: "https://techon.co.in/solutions/",
    overview:
      "Comprehensive Honeywell Automation solutions encompassing Experion Control Systems, MasterLogic PLCs, SmartLine Field Transmitters, Gas & Flame Detection, and Fire Alarm systems as detailed in industry benchmarks.",
    keyFeatures: [
      "Experion LX DCS and MasterLogic ML-200 / ML-50R redundant programmable logic controllers",
      "SmartLine industrial transmitters with industry-leading accuracy (0.0375%) and modular design",
      "Honeywell Gas Detection (Sensepoint XCD, Optima Plus, Midas) for toxic and combustible gases",
      "Intelligent Addressable Fire Alarm and Security Solutions (Notifier by Honeywell & VESDA)",
      "OneWireless network solutions with ISA100.11a industrial mesh standard"
    ],
    categories: [
      {
        categoryName: "Control Systems & SCADA",
        products: [
          {
            name: "Honeywell Experion Control System (DCS & LX)",
            desc: "Distributed control system unifying controller networks, batch management, plant safety, and advanced process control.",
            specs: ["Fault-tolerant controller architecture", "Integrated alarm & historian management", "High-fidelity simulation support"],
            badge: "Experion DCS / LX",
            image: "/product_images/honeywell/Honeywell-Experion-Control-System-DCS-LX.png"
          },
          {
            name: "MasterLogic PLC (ML-200 / ML-50R)",
            desc: "Redundant, high-speed industrial programmable controller delivering DCS-grade reliability at a modular PLC price point.",
            specs: ["CPU redundancy with sub-millisecond bump-less transfer", "IEC 61131-3 logic programming", "Fiber optic I/O networks"],
            badge: "MasterLogic PLC",
            image: "/product_images/honeywell/MasterLogic-PLC-ML-200-ML-50R.png"
          },
          {
            name: "Experion HS & Visu+ SCADA Solutions",
            desc: "Compact, pre-configured SCADA solution tailored for mid-sized process plants, utilities, and pharmaceutical manufacturing.",
            specs: ["Pre-built graphic symbols & faceplates", "Trend charts and Excel reporting", "Native OPC client & server"],
            image: "/product_images/honeywell/Experion_HS_Visu_SCADA_Solutions.png"
          }
        ]
      },
      {
        categoryName: "Field Instruments & Gas/Fire Safety",
        products: [
          {
            name: "Process Field Instrumentation (SmartLine)",
            desc: "SmartLine differential, gauge, and absolute pressure transmitters (ST800, ST700), temperature, guided wave radar level, and mass flowmeters.",
            specs: ["Accuracy: ±0.0375% of span", "Modular sensor and electronics replacement", "HART 7 & Foundation Fieldbus", "Polarity-insensitive wiring"],
            badge: "SmartLine Transmitters",
            image: "/product_images/honeywell/smartline_pressure.jpg"
          },
          {
            name: "Honeywell Gas & Flame Detection Systems",
            desc: "Sensepoint XCD, Optima Plus infrared, and Midas extractive toxic gas monitoring for hazardous chemical environments.",
            specs: ["Flammable, Toxic, Oxygen, and CO2 sensors", "Explosion-proof ATEX / IECEx certified housings", "4-20mA & Modbus output"],
            badge: "Gas & Flame Detection",
            image: "/product_images/honeywell/sensepoint_gas_detector.jpg"
          },
          {
            name: "Honeywell Fire Alarm & Security Solutions",
            desc: "Intelligent addressable fire alarm panels (Notifier), VESDA aspirating smoke detection, and building security integration.",
            specs: ["Early warning air-sampling detection", "EN54 and UL certified panels", "Graphic emergency response workstation"],
            image: "/product_images/honeywell/Honeywell-Fire-Alarm-Security-Solutions.png"
          },
          {
            name: "OneWireless Industrial System Solutions",
            desc: "Industrial wireless mesh network operating on the ISA100.11a standard for wireless transmitters and monitoring points.",
            specs: ["Self-healing mesh architecture", "Battery life up to 10 years on field instruments"],
            image: "/product_images/honeywell/smartline_temperature.jpg"
          }
        ]
      }
    ],
    certifications: ["SIL 2 / SIL 3 Certified", "ATEX / IECEx HazLoc", "UL / FM Approved", "CE Conformity"],
    targetIndustries: ["Oil & Gas Refineries", "Chemical & Petrochemical", "Power Generation", "Pharmaceuticals", "Water & Utilities"]
  },
  {
    id: "cleangrad",
    heroImage: "/caaaaaaaa.png",
    name: "Clean Grad Slovenia",
    fullName: "Cleangrad d.o.o. (Slovenia)",
    tagline: "GMP Cleanroom Partition Walls, Ceilings & Dynamic/Static Pass Boxes",
    badge: "Dealer & Supplier",
    accentColor: "#0284c7",
    logoBg: "linear-gradient(135deg, #0284c7 0%, #0369a1 100%)",
    logoColor: "#ffffff",
    filterCategory: "cleanroom",
    externalReference: "https://cleangrad.si/en/",
    overview:
      "Cleangrad (Slovenia) is an international European manufacturer of bespoke cleanroom systems. Engineered for the strictest GMP and HSE pharmaceutical standards, Cleangrad provides flush cleanroom wall partitions, walkable ceilings, dynamic pass boxes, and airtight doors.",
    keyFeatures: [
      "Fully compliant with GMP Class A, B, C, D standards and ISO 14644 cleanroom classes",
      "Sustainable flush partition wall systems with silicone-free flush jointing and chemical resistance",
      "Dynamic Pass Boxes with built-in HEPA filtration, laminar vertical airflow (0.45 m/s), and UV sterilization",
      "Airtight cleanroom doors featuring inflatable seals or magnetic gasket sealing",
      "GMP fire-rated flush double-glazed safety glass windows with integrated desiccants"
    ],
    categories: [
      {
        categoryName: "Cleanroom Wall Partitions & Ceiling Systems",
        products: [
          {
            name: "Modular Cleanroom Partition Walls",
            desc: "Flush wall systems constructed from powder-coated galvanized steel, stainless steel, or compact laminate with PIR/mineral wool insulation.",
            specs: ["Panel thickness: 60mm / 80mm", "Seamless completely flush surface", "Resistant to aggressive disinfectant agents (H2O2 vapor)", "Integrated flush electrical & conduit chases"],
            badge: "GMP Partition Walls",
            image: "/product_images/cleangrad/cleanroom_walls.jpg"
          },
          {
            name: "Walkable Flush Cleanroom Ceilings",
            desc: "Heavy-duty walkable false ceiling systems engineered to support maintenance personnel while housing HEPA filters and LED teardrop luminaires.",
            specs: ["Load capacity up to 150 kg/m²", "Flush integrated lighting and fan filter units (FFU)", "Seamless ceiling-to-wall coving"],
            image: "/product_images/cleangrad/cleanroom_ceilings.jpg"
          },
          {
            name: "GMP Fire-Rated Flush Glass Windows",
            desc: "Double-glazed flush inspection view panels mounted perfectly flush on both sides of partition walls.",
            specs: ["Tempered safety glass", "Integrated silica desiccant to prevent condensation", "Fire rating up to EI 60 minutes"],
            image: "/product_images/cleangrad/cleanroom_walls.jpg"
          }
        ]
      },
      {
        categoryName: "Pass Boxes, Air Showers & Pharma Doors",
        products: [
          {
            name: "Dynamic Pass Boxes (Active Cleanroom Transfer)",
            desc: "Sterile transfer chambers equipped with integrated motor blower, H14 HEPA filtration, UV-C germicidal lamp, and electromagnetic door interlocks.",
            specs: ["Laminar airflow velocity: 0.45 m/s ± 20%", "Differential pressure Magnehelic gauge", "AISI 304 / 316 stainless steel interior", "Audio-visual door status indicators"],
            badge: "Dynamic Pass Boxes",
            image: "/product_images/cleangrad/dynamic_pass_box.jpg"
          },
          {
            name: "Static Pass Boxes",
            desc: "Mechanical or electromagnetic interlocking transfer hatches for contamination-free transfer between rooms of equal classification.",
            specs: ["Interlocking prevents both doors opening simultaneously", "Easy-to-clean coved interior corners", "Viewing flush safety glass"],
            image: "/product_images/cleangrad/static_pass_box.jpg"
          },
          {
            name: "Cleanroom Doors with Inflatable / Magnetic Seals",
            desc: "Flush cleanroom doors with pneumatic inflatable active gaskets for hermetic containment in bio-hazard and sterile BSL suites.",
            specs: ["Inflatable seal automatically inflates on closure", "Touchless wave-to-open sensors", "Heavy-duty stainless steel fittings"],
            image: "/product_images/cleangrad/cleanroom_walls.jpg"
          },
          {
            name: "Cleanroom Air Showers & Mist Decontamination Units",
            desc: "High-velocity filtered air jets to strip surface particulate from personnel before entering critical GMP Grade B/A zones.",
            specs: ["Nozzle air speed: 20-25 m/s", "Microprocessor programmed shower cycles", "Emergency panic egress buttons"],
            image: "/product_images/cleangrad/dynamic_pass_box.jpg"
          }
        ]
      }
    ],
    certifications: ["GMP Grade A/B/C/D Compliant", "ISO 14644-1 Cleanroom Standard", "CE Certified", "Fire Resistance EI 30 / EI 60"],
    targetIndustries: ["Pharmaceutical & Biopharmaceutical", "Sterile Injectable Facilities", "Medical Device Manufacturing", "Semiconductor Cleanrooms", "Stem Cell & Gene Therapy Labs"]
  },
  {
    id: "emi-solutions",
    heroImage: "/product_hero_card/EMIS.png",
    name: "EMI Solutions (EMIS)",
    fullName: "EMI Solutions Pvt. Ltd. (EMIS Global)",
    tagline: "EMI / EMC Filters, Feedthrough Components, Power Quality & EMP Surge Protection",
    badge: "Official Channel Partner & Supplier",
    accentColor: "#059669",
    logoBg: "linear-gradient(135deg, #064e3b 0%, #059669 100%)",
    logoColor: "#ffffff",
    filterCategory: "power",
    externalReference: "https://emisglobal.com/products/",
    overview:
      "EMI Solutions Pvt. Ltd. (EMIS) is a global leader and premier Indian manufacturer specializing in Electromagnetic Interference (EMI) and Electromagnetic Compatibility (EMC) compliance solutions. With cutting-edge testing facilities and comprehensive engineering, EMIS provides total electromagnetic noise suppression across 50 Hz to 40 GHz: from single, two, and three-phase power line noise filters, IEC power inlet modules, and feedthrough capacitors, to advanced dV/dt and sine wave power quality output filters, military-grade TEMPEST / HEMP chamber filters, and high-capacity surge protection devices.",
    keyFeatures: [
      "Broad Spectrum EMI/EMC Suppression: Solves conducted and radiated EMI challenges from 50 Hz up to 40 GHz across commercial, medical, and defense domains",
      "Comprehensive Power Line Filters: Single-phase (MF300/MF310 IEC inlets, RN/RD series), two-phase (MF422), and heavy-duty three-phase delta/wye filters up to 1200A",
      "Power Quality & Harmonic Mitigation: Tuned dV/dt motor protection filters, sinusoidal output filters, and passive harmonic filters (THDi < 5% / 8%, IEEE 519 compliant)",
      "Military & Defense-Grade Protection: Certified TEMPEST SDIP-27 filters, MIL-STD-461E/F power line filters, MIL-STD-188-125 HEMP control/data line filters, and hospital MRI RF shielding",
      "Advanced Surge Protection & Spark Quenching: Type 1+2 / Type 2 AC & DC surge protectors (SSP/TSP/DSP series), RC spark quenchers, and high-speed Gigabit RJ45 network protectors"
    ],
    categories: [
      {
        categoryName: "EMI / EMC Power Line Filters",
        products: [
          {
            name: "Single Phase IEC Inlet Power Filters (MF300 / MF310 / MF320 Series)",
            desc: "Chassis-mount IEC 320 C14 / C20 power entry filters with integrated EMI noise suppression, optional fuse holder drawer, DPST rocker power switch, and medical low-leakage (<5µA) variants.",
            specs: ["Voltage: 250VAC, 50/60Hz", "Current: 1A to 20A", "IEC 320 C14 & C20 standard", "Snap-in & Screw mount", "Medical Grade M low leakage"],
            badge: "IEC Inlet",
            image: "/product_images/emis/single_phase_mf300.png"
          },
          {
            name: "Single Phase Power Line Noise Filters (RN / RD Series)",
            desc: "Compact chassis and PCB-mount RFI noise suppression filters designed for SMPS power supplies, instrumentation, industrial automation controllers, and sensitive electronics.",
            specs: ["Operating Voltage: 250VAC / 300VAC", "Current Rating: 1A to 100A", "High differential & common mode attenuation", "Fast-on / screw / wire lead terminals"],
            badge: "Single Phase",
            image: "/product_images/emis/single_phase_rn_series.png"
          },
          {
            name: "Common Mode Chokes & Inductors (CMC71 / CMC73 / CMC74 Series)",
            desc: "High-permeability toroidal core common-mode chokes offering exceptional noise suppression across wide frequency ranges up to 400Hz for PCB and power supplies.",
            specs: ["Voltage: 250V to 600VAC / 850VDC", "Current: 0.25A to 64A", "Operating Frequency: DC to 400Hz", "Through-hole PCB & vertical mounting"],
            badge: "CMC Chokes",
            image: "/product_images/emis/image.png"
          },
          {
            name: "Two Phase Power Line EMI Filters (MF422 Series)",
            desc: "Specialized dual-phase (phase-to-phase) EMI filters engineered for 2-phase industrial machinery, dual-phase welding equipment, and commercial appliances.",
            specs: ["Operating Voltage: 440VAC / 480VAC 50/60Hz", "Current: 5A to 100A", "Dual-stage high noise attenuation", "Finger-safe touch-proof terminal blocks"],
            badge: "Two Phase",
            image: "/product_images/emis/two_phase_mf422.webp"
          },
          {
            name: "Three Phase Single Stage & 4-Wire Line Filters (MF423-3W & MF-423-4W Series)",
            desc: "Industrial three-phase Delta (3-wire) and Star/Wye with Neutral (4-wire) RFI noise filters designed for motor drives, CNC machines, and factory power distribution.",
            specs: ["Operating Voltage: 440VAC / 520VAC", "Current: 5A to 1200A", "Finger-safe IP20 touch terminals", "Mitigates common & differential mode feedback"],
            badge: "Three Phase 3W/4W",
            image: "/product_images/emis/three_phase_mf423_3w.webp"
          },
          {
            name: "Three Phase Dual Stage & High Voltage Filters (MF-423-3-2D & MF423-HV Series)",
            desc: "Multi-stage high-attenuation line filters and 690VAC heavy-duty filters designed for large Variable Frequency Drives (VFDs), solar central inverters, and wind turbines.",
            specs: ["Operating Voltage: 440VAC / 520VAC / 690VAC", "Current: up to 1200A", "Extreme attenuation: 150 kHz to 30 MHz", "Book-style & compact chassis packaging"],
            badge: "Dual Stage & HV",
            image: "/product_images/emis/three_phase_dual_stage_mf423.webp"
          },
          {
            name: "DC Power Line & EV Fast Charging EMI Filters (MF-610 & 450-EVX Series)",
            desc: "High-performance DC noise suppression filters engineered for solar photovoltaic inverters, telecom DC power plants, battery energy storage systems (BESS), and electric vehicle fast chargers.",
            specs: ["Operating Voltage: Up to 1200VDC", "Current Rating: 10A to 800A", "Low power loss & high thermal stability", "Chassis-mount with copper busbar / terminal block"],
            badge: "DC & EV Fast Charge",
            image: "/product_images/emis/dc_filter_evx.png"
          }
        ]
      },
      {
        categoryName: "Feedthrough Components",
        products: [
          {
            name: "Power Feedthrough Capacitors (FTC Series)",
            desc: "Threaded cylindrical brass and nickel-plated feedthrough capacitors providing ultra-low self-inductance and continuous RF noise filtering up to multi-gigahertz frequencies.",
            specs: ["Capacitance: 10 pF to 4.7 µF", "Operating Voltage: Up to 1000VDC / 440VAC", "Resonance Frequency: >1 GHz", "Hermetically sealed brass/nickel-plated body"],
            badge: "Feedthrough FTC",
            image: "/product_images/emis/feedthrough_capacitor.png"
          },
          {
            name: "Bulkhead Feedthrough Filters (FTF Series)",
            desc: "Integrated Pi, T, and C low-pass feedthrough filter assemblies engineered for shielded room bulkheads, RF microwave cabinets, radar installations, and defense power lines.",
            specs: ["Current Rating: 5A to 300A", "Operating Voltage: 250VAC / 500VDC", "High insertion loss: > 70 dB @ 1 GHz", "Bolt-in & solder mounting styles"],
            badge: "Feedthrough FTF",
            image: "/product_images/emis/feedthrough_filter.png"
          }
        ]
      },
      {
        categoryName: "Power Quality & Harmonic Solutions",
        products: [
          {
            name: "dV/dt Output Motor Protection Filters (TPQDR-1 Series)",
            desc: "Motor protection filters installed on VFD inverter output to limit voltage rate-of-rise (dV/dt < 500V/µs), suppressing peak motor terminal overvoltages and cable reflection spikes.",
            specs: ["Motor Voltage: 380V - 500VAC", "Motor Power: 1.5 kW to 630 kW", "Limits dV/dt < 500V/µs", "Prevents motor winding insulation breakdown", "Enables motor cable lengths up to 150m"],
            badge: "dV/dt Output Filter",
            image: "/product_images/emis/output_filter_tpqdr.png"
          },
          {
            name: "Sine Wave Inverter Output Filters (SINEFILTER_HD Series)",
            desc: "Heavy-duty LC low-pass sine wave filters transforming PWM drive output into a clean sinusoidal voltage waveform, completely eliminating acoustic motor hum and bearing currents.",
            specs: ["Operating Voltage: 400V / 500VAC 50/60Hz", "Switching Frequency: 2 kHz to 8 kHz", "Residual ripple voltage: < 5%", "Supports ultra-long motor cables > 500m", "Eliminates high-frequency bearing fluting"],
            badge: "Sine Wave Filter",
            image: "/product_images/emis/sine_filter_hd.png"
          },
          {
            name: "Passive Harmonic Filters (PHF & PHF2 Series)",
            desc: "Tuned passive LC harmonic mitigation filters designed to eliminate 5th, 7th, 11th, and 13th harmonics from 3-phase rectifier inputs, achieving compliance with IEEE 519 standards.",
            specs: ["Total Harmonic Current Distortion (THDi): < 5% or < 8%", "Voltage: 380V - 480VAC 50/60Hz", "Power Factor: > 0.98 at rated load", "IEEE 519-2022 compliant", "Current: 10A to 500A"],
            badge: "THDi < 5% / 8%",
            image: "/product_images/emis/passive_harmonic_filter_phf.png"
          }
        ]
      },
      {
        categoryName: "Military Grade Filters & EMP Protection",
        products: [
          {
            name: "TEMPEST Facility Power Line Shielding Filters (MF710 Series)",
            desc: "Severe-duty shielded room and data center power line filters meeting NATO TEMPEST SDIP-27 and MIL-STD-188-125, attenuating cyber eavesdropping and RF electromagnetic emissions.",
            specs: ["Attenuation: >100 dB from 14 kHz to 10 GHz", "Current: 16A to 1200A Single & 3-Phase", "TEMPEST SDIP-27 Level A compliant", "Welded RF-tight enclosure with RF mesh gasket"],
            badge: "TEMPEST SDIP-27",
            image: "/product_images/emis/mil_tempest_mf710.webp"
          },
          {
            name: "MIL-STD-461E/F Defense Power Line Filters (MF423-3-3D-M Series)",
            desc: "High-reliability defense-grade three-phase power filters tested and certified for CE101 and CE102 conducted emissions compliance on naval, airborne, and military vehicle electronics.",
            specs: ["Standards: MIL-STD-461E / MIL-STD-461F", "Voltage: 440VAC 50/60/400Hz", "Current: 10A to 400A", "Heavy shock & vibration resistant housing"],
            badge: "MIL-STD-461",
            image: "/product_images/emis/mil_std_461_mf423.webp"
          },
          {
            name: "HEMP Control & Signal Line Filters (HEMP-CLF & HEMP-TLF Series)",
            desc: "Single-pair and multi-pair control and analog/digital telephone line EMP filters providing high-energy transient suppression and continuous RF attenuation against nuclear HEMP threats.",
            specs: ["MIL-STD-188-125-1 & 2 compliant", "Voltage: 24VDC to 250VAC", "High surge current withstand (E1 & E2 pulses)", "Feedthrough bulkhead mounting"],
            badge: "MIL-STD-188-125",
            image: "/product_images/emis/mil_hemp_control_line.webp"
          },
          {
            name: "High-Speed Data Line & Ethernet EMP Filters (RJ45 & RS-422 Series)",
            desc: "High-speed Cat5e/Cat6 Ethernet and RS-422/RS-485 serial data line surge and EMP filters protecting defense command networks, radar feeds, and secure communications.",
            specs: ["Data Rate: Gigabit 10/100/1000 Mbps & RS-422/485", "Surge Handling: IEC 61000-4-5 & MIL-STD-188-125", "Low insertion loss on high-speed data", "Cast aluminum shielded enclosure"],
            badge: "Ethernet & Data EMP",
            image: "/product_images/emis/mil_data_line_rj45.webp"
          },
          {
            name: "Medical MRI Room RF Shielding Filters (MF420-2-2CF-M Series)",
            desc: "Dedicated RF power line suppression filter engineered for hospital MRI scanning rooms and sensitive diagnostic imaging facilities, eliminating RF noise artifacts in MRI imagery.",
            specs: ["Attenuation: >100 dB from 10 MHz to 1 GHz", "Operating Voltage: 250VAC / 440VAC", "Low earth leakage current", "Non-magnetic and RF-sealed enclosure"],
            badge: "MRI RF Shielding",
            image: "/product_images/emis/mil_mri_filter.png"
          }
        ]
      },
      {
        categoryName: "Surge Protectors & Spark Quenchers",
        products: [
          {
            name: "Single Phase DIN-Rail Surge Protectors (SSP2206 / SSP2406 Series)",
            desc: "Pluggable Type 1+2 and Type 2 modular DIN-rail surge protective devices engineered for 230VAC single-phase power distribution panels and control cabinets.",
            specs: ["Voltage: 230VAC / 275VAC", "Discharge Current (In): 20kA | (Imax): 40kA", "Visual green/red status indicator", "Remote signalling alarm dry contact", "DIN-rail 35mm mount"],
            badge: "Single Phase SPD",
            image: "/product_images/emis/surge_single_phase_ssp2206.png"
          },
          {
            name: "Three Phase Industrial Surge Protectors (TSP3206 / TSP3406 / TSP4206 Series)",
            desc: "High-capacity Type 1+2 / Type 2 three-phase surge arresters designed for main low-voltage switchboards, industrial motor control centers, and commercial facilities.",
            specs: ["Voltage: 440VAC (3P+N / 3P)", "Maximum Discharge Current (Imax): up to 65kA (8/20 µs)", "Fast nanosecond response time (<25ns)", "Thermal disconnection protection", "Pluggable replaceable varistor cartridges"],
            badge: "Three Phase SPD",
            image: "/product_images/emis/surge_three_phase_tsp3206.png"
          },
          {
            name: "Three Phase RC Spark Quenchers & Snubbers (T-RCF & TSP4083 Series)",
            desc: "Precision resistor-capacitor (RC) snubber networks designed to extinguish electrical arc transients and contact bounce caused by switching relays, contactors, and solenoids.",
            specs: ["Operating Voltage: Up to 440VAC 50/60Hz", "Suppresses high inductive back-EMF spikes", "Extends contactor contact life", "Chassis and DIN rail mounting options"],
            badge: "Spark Quencher",
            image: "/product_images/emis/surge_three_phase_rcf.webp"
          },
          {
            name: "DC Solar Photovoltaic & Battery Surge Protectors (DSP406 Series)",
            desc: "Photovoltaic and DC power bus surge protective device engineered to clamp lightning and switching overvoltages on solar combiner boxes, inverters, and battery storage systems.",
            specs: ["Rated Voltage (Ucpv): 600VDC / 1000VDC", "Discharge Current (Imax): 40kA (8/20 µs)", "High-energy metal oxide varistors (MOV)", "DIN rail plug-in module"],
            badge: "DC SPD 1000V",
            image: "/product_images/emis/surge_dc_dsp406.png"
          },
          {
            name: "Network & Gigabit Ethernet Signal Surge Protectors (NSPRJ45 Series)",
            desc: "High-speed transient voltage surge suppressor equipped with RJ45 shielded connectors, designed to protect IP CCTV cameras, VoIP phones, switches, and PoE equipment from lightning induced surges.",
            specs: ["Connector: RJ45 Shielded (In/Out)", "Data Rate: 10/100/1000 Mbps Gigabit", "PoE / PoE+ compatible", "Fast response time: < 1 ns", "Rugged metal ground lug for earth bonding"],
            badge: "RJ45 Network SPD",
            image: "/product_images/emis/surge_network_rj45.png"
          }
        ]
      }
    ],
    certifications: [
      "ISO 9001:2015 Certified",
      "CE Marked",
      "UL Recognized",
      "MIL-STD-188-125 (HEMP)",
      "MIL-STD-461E/F Compliant",
      "TEMPEST SDIP-27",
      "IEEE 519 Compliant",
      "RoHS & REACH Compliant"
    ],
    targetIndustries: [
      "Defense & Military Shelters",
      "Industrial Automation & VFD Drives",
      "Medical Imaging & MRI Suites",
      "Telecommunications & Data Centers",
      "Solar & Wind Renewable Energy",
      "Electric Vehicles & Charging Infrastructure"
    ]
  }
];
