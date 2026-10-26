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
  'emerson': '/product_hero_card/Emerson.png',
  'automation-software': '/product_hero_card/SCADA.png',
  'honeywell': '/product_hero_card/Honeywell.png',
  'cleangrad': '/product_hero_card/Cleangrad.png',
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
            image: "/product_images/ERI_img/AC_Output_Modules.png"
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
            image: "/product_images/ERI_img/AC_Input_Modules.png"
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
            image: "/product_images/gefran/pressure_transducer.jpg"
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
    tagline: "Precision Temperature, Pressure, Humidity & Liquid Analysis Instrumentation",
    badge: "Dealer & Supplier",
    accentColor: "#1d4ed8",
    logoBg: "linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 100%)",
    logoColor: "#ffffff",
    filterCategory: "sensors",
    overview:
      "JUMO is a world-class German manufacturer of industrial sensor and automation technology. JUMO's portfolio covers the complete measurement chain: from temperature, pressure, and humidity probes to paperless recorders and liquid analysis instruments.",
    keyFeatures: [
      "High-precision RTD temperature probes (Pt100/Pt1000 Class A/AA) and thermocouple assemblies",
      "Sanitary pressure transmitters with flush diaphragms for pharmaceutical & food industries",
      "LOGOSCREEN paperless recorders compliant with FDA 21 CFR Part 11 electronic records",
      "Liquid analytical sensors for pH, redox, electrolytic conductivity, and dissolved oxygen",
      "TRON microprocessor controllers with advanced multi-channel program control"
    ],
    categories: [
      {
        categoryName: "Temperature Measurement & Recording",
        products: [
          {
            name: "RTD Temperature Probes & Elements",
            desc: "Screw-in, push-in, and sanitary Pt100/Pt1000 resistance thermometers with mineral-insulated cable and terminal heads.",
            specs: ["Measurement: -200°C to +600°C", "Tolerance Class A, 1/3 DIN, 1/10 DIN", "Stainless steel thermowells"],
            badge: "RTD Pt100 / Pt1000",
            image: "/product_images/jumo/temperature_probe.jpg"
          },
          {
            name: "Industrial Thermocouples",
            desc: "Single and duplex thermocouples (Type J, K, N, S, R, B) for furnaces, molten metals, and high-temp flues.",
            specs: ["Range up to 1800°C", "Ceramic protective tubes (Pythagoras, Alsint)"],
            image: "/product_images/jumo/temperature_probe.jpg"
          },
          {
            name: "Temperature Transmitters & Switches",
            desc: "Head-mounted and DIN-rail programmable transmitters (dTRANS T01/T02/T05) and mechanical dial/capillary thermostats.",
            specs: ["4-20mA, HART, IO-Link outputs", "Galvanic isolation 3.75kV"],
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
            image: "/product_images/jumo/midas_pressure.webp"
          },
          {
            name: "Humidity Transducers & Hygrostats",
            desc: "Capacitive relative humidity and temperature transmitters for HVAC cleanrooms, chambers, and drying rooms.",
            specs: ["Range: 0 to 100% RH", "Operating temp -40°C to +180°C"],
            image: "/product_images/jumo/temperature_probe.jpg"
          },
          {
            name: "Liquid Analysis & TRON Controllers",
            desc: "Sensors and transmitters for pH, ORP, conductivity, turbidity, and chlorine, alongside TRON multi-channel controllers.",
            specs: ["AQUIS touch multi-channel display", "Flow measurement integration"],
            image: "/product_images/jumo/logoscreen_recorder.webp"
          }
        ]
      }
    ],
    certifications: ["ISO 9001:2015", "FDA 21 CFR Part 11", "EHEDG Hygienic", "ATEX", "SIL Certified"],
    targetIndustries: ["Pharmaceutical & Biotech", "Food & Beverage Processing", "Chemical & Petrochemical", "Water & Wastewater", "Furnace & Kiln Systems"]
  },
  {
    id: "emerson",
    heroImage: "/product_hero_card/Emerson.png",
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
            image: "/product_images/emerson/pacsystems_rx3i.png"
          },
          {
            name: "RSTi-EP Slice I/O & Micro PLCs",
            desc: "Ultra-compact distributed I/O slices (11.5mm width) with integrated test points and pluggable spring terminals.",
            specs: ["Up to 64 modules per network node", "PROFINET, EtherNet/IP, Modbus TCP adapters"],
            image: "/product_images/emerson/pacsystems_rx3i.png"
          },
          {
            name: "QuickPanel+ Touchscreen Operator Interfaces",
            desc: "All-in-one HMI combining graphical visualization, PLC control logic, and data historian on a multi-touch screen.",
            specs: ["Screen sizes: 6\", 7\", 10\", 12\", 15\"", "Multi-touch projected capacitive display", "Built-in VNC remote server"],
            image: "/product_images/emerson/quickpanel_hmi.png"
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
            image: "/product_images/emerson/copeland_e2_controller.jpeg"
          },
          {
            name: "Chiller & AHU Dedicated Controllers",
            desc: "Microprocessor-based control boards programmed for chillers, air handling units (AHU), and variable air volume (VAV).",
            specs: ["Precision PID temperature/humidity staging", "BACnet MS/TP and IP communication"],
            image: "/product_images/emerson/copeland_e2_controller.jpeg"
          },
          {
            name: "Electronic Expansion Valve (EEV) Drivers",
            desc: "Stepper motor driver modules for electronic expansion valves ensuring optimal superheat control and energy savings.",
            specs: ["Ultra-fast superheat response", "Battery backup safety valve closure"],
            image: "/product_images/emerson/copeland_e2_controller.jpeg"
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
            image: "/product_images/honeywell/experion_dcs.jpg"
          },
          {
            name: "MasterLogic PLC (ML-200 / ML-50R)",
            desc: "Redundant, high-speed industrial programmable controller delivering DCS-grade reliability at a modular PLC price point.",
            specs: ["CPU redundancy with sub-millisecond bump-less transfer", "IEC 61131-3 logic programming", "Fiber optic I/O networks"],
            badge: "MasterLogic PLC",
            image: "/product_images/honeywell/masterlogic_plc.jpg"
          },
          {
            name: "Experion HS & Visu+ SCADA Solutions",
            desc: "Compact, pre-configured SCADA solution tailored for mid-sized process plants, utilities, and pharmaceutical manufacturing.",
            specs: ["Pre-built graphic symbols & faceplates", "Trend charts and Excel reporting", "Native OPC client & server"],
            image: "/product_images/honeywell/experion_dcs.jpg"
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
            image: "/product_images/honeywell/experion_dcs.jpg"
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
    heroImage: "/product_hero_card/Cleangrad.png",
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
  }
];
