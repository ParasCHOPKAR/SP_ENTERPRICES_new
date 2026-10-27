export interface ManufacturingCapability {
  name: string;
  description: string;
  specs: string[];
  client?: string;
  moc?: string;
}

export interface ManufacturingSpecification {
  label: string;
  value: string;
}

export interface FeaturedMachine {
  name: string;
  client?: string;
  tagline: string;
  description: string;
  specs: { label: string; value: string }[];
  highlights: string[];
  image?: string;
  images?: string[];
}

export interface ManufacturingItem {
  id: string;
  title: string;
  shortTitle: string;
  tagline: string;
  badge: string;
  iconName: string;
  description: string;
  image?: string;
  featuredClients?: string[];
  featuredProducts?: FeaturedMachine[];
  capabilities: ManufacturingCapability[];
  specifications: ManufacturingSpecification[];
  keyBenefits: string[];
  industriesServed: string[];
}

export const SAHPL_INFO = {
  name: "SP Enterprises",
  subTitle: "Handling the Complete SAHPL Manufacturing & Automation Portfolio",
  shortName: "SP Enterprises",
  role: "In-House Manufacturing & Turnkey Automation Engineering Arm",
  experienceYears: "10+ Years in Heavy & Precision Industry",
  overview:
    "SP Enterprises is our premier engineering and in-house manufacturing enterprise located in Pune, Maharashtra, directly handling, manufacturing, and delivering the complete SAHPL product range. We deliver end-to-end Design, Manufacturing, Installation, and Commissioning services for Industrial Automation, Special Purpose Machines (SPM), Industrial Chillers, Cold Rooms, Material Handling Equipment, and Industrial Control Panels. Every product is engineered by qualified design engineers and executed with precision by skilled shop-floor technicians. Having served the industry for over 10+ years, all equipment in the SAHPL product portfolio is manufactured and managed strictly under SP Enterprises in compliance with cGMP procedures, ensuring superior manufacturing quality with transparent, competitive pricing.",
  services: [
    "Design & CAD/CAE Engineering",
    "Precision Fabrication & Assembly",
    "On-Site Mechanical & Electrical Installation",
    "Testing, Commissioning & SAT/FAT Handover",
    "cGMP Validation & DQ/IQ/OQ Documentation",
    "Custom Machine Overhaul & Retrofitting"
  ],
  credentials: [
    { label: "Industry Experience", value: "10+ Years" },
    { label: "Engineering Quality", value: "Qualified Design Engineers" },
    { label: "Workforce", value: "Skilled Shop-Floor Technicians" },
    { label: "Compliance", value: "cGMP, IS 8623 & IEC 61439" },
    { label: "Value Assurance", value: "Premium Production & Transparent Pricing" }
  ],
  clientList: [
    { name: "Cummins Generator Technologies", division: "Heavy Material Handling & 90° Tilters", logo: "/manufacturing/brands/cummins.png" },
    { name: "Mahindra Vehicle Manufacturers Ltd", division: "Automotive Conveyors & Plant Trolleys", logo: "/manufacturing/brands/mahindra.png" },
    { name: "General Mills", division: "Food Packaging & Cartons", logo: "/manufacturing/brands/general_mills.png" },
    { name: "Valco Melton", division: "Automated Adhesive Systems", logo: "/manufacturing/brands/valco_melton.png" },
    { name: "Fresenius-Kabi (Ranjangaon)", division: "SS304 Material Lifter & Cleanroom Furniture", logo: "/manufacturing/brands/fresenius_kabi.png" },
    { name: "Navneet Industries", division: "15m Belt File Conveyor & Glue Dispenser", logo: "/manufacturing/brands/navneet.png" },
    { name: "Texol", division: "1000 LPH Continuous Hot Water Generation Unit", logo: "/manufacturing/brands/texol.png" },
    { name: "Midas Care", division: "SS Racks, Tables & Cross-Over Benches", logo: "/manufacturing/brands/midas_care.png" },
    { name: "Hikal Ltd", division: "Specialized Industrial Trolleys & Fixtures", logo: "/manufacturing/brands/hikal.png" }
  ]
};

export const MANUFACTURING_DATA: ManufacturingItem[] = [
  {
    id: "control-panels",
    title: "Industrial Control Panels (Thyristor, VFD, APFC, Annunciator & POU)",
    shortTitle: "Control Panels",
    tagline: "Custom-Engineered Type-Tested Electrical, VFD & Automation Enclosures",
    badge: "SP Enterprises • SAHPL Product Range",
    iconName: "Cpu",
    image: "/manufacturing/products/thyristor_control_panel.jpg",
    description:
      "Handled and engineered by SP Enterprises under the SAHPL manufacturing range, our industrial control panels combine robust mechanical enclosures with intelligent automation switchgear. From heavy Thyristor heat-control panels and rugged VFD protection enclosures to Centralized Warning Annunciators and sanitary SS POU/WFI panels, every unit undergoes 100% rigorous pre-dispatch testing.",
    featuredClients: ["Heavy Manufacturing", "Chemical & Petrochemical", "Automotive Plants", "Pharmaceutical Plants", "Textile & Paper Mills"],
    featuredProducts: [
      {
        name: "Thyristor Control Panels",
        tagline: "Ultra-Fast Solid-State Voltage & Power Control for Thermal Loads",
        image: "/manufacturing/products/thyristor_control_panel.jpg",
        images: [
          "/manufacturing/products/thyristor_control_panel.jpg",
          "/manufacturing/products/thyristor_panel_internal.jpg",
          "/manufacturing/products/thyristor_panel_multizone.jpg"
        ],
        description:
          "Thyristor Control panels are used to control power or voltage supplied to a load. Typical applications are generally found where power needs to be varied and ultimately converted into thermal energy.",
        specs: [
          { label: "Control Mode", value: "Zero-Cross / Phase Angle Firing (SCR)" },
          { label: "Thermal Efficiency", value: "High precision PID feedback regulation" },
          { label: "Protection", value: "Ultra-fast semiconductor fuses, RC snubbers & MOVs" },
          { label: "Output Rating", value: "25A to 1200A+ continuous industrial duty" }
        ],
        highlights: [
          "Smooth stepless power regulation eliminates thermal shock",
          "Zero mechanical contactor wear extends heating element service life",
          "Built-in thyristor heatsink assembly with forced ventilation cooling"
        ]
      },
      {
        name: "VFD Control Panels (Harsh Environment Enclosures)",
        tagline: "High-Protection Enclosures for Dusty, Wet, Humid & Corrosive Workspaces",
        image: "/manufacturing/products/vfd_control_panel.jpg",
        images: [
          "/manufacturing/products/vfd_control_panel.jpg",
          "/manufacturing/products/vfd_panel_internal.jpg"
        ],
        description:
          "When work space is dusty, dirty, wet, humid, corrosive, or hot. In those harsh environments, you cannot just mount your VFD exposed. You need a VFD Control panel an enclosure that protects the VFD and other electric components.",
        specs: [
          { label: "Enclosure Ingress", value: "IP54 / IP55 / IP65 Polyurethane Gasketed" },
          { label: "Cooling Architecture", value: "Thermostatically controlled filter fans / Industrial Panel AC" },
          { label: "Power Ratings", value: "0.75 kW to 500+ kW motor control" },
          { label: "Harmonic Mitigation", value: "Integrated line chokes and dV/dt output reactors" }
        ],
        highlights: [
          "Sealed enclosure shields drives from conductive dust, moisture and corrosive vapors",
          "Engineered thermal management prevents VFD overheating and unexpected tripping",
          "Dynamic braking resistor integration and emergency bypass contactor configuration"
        ]
      },
      {
        name: "Annunciator Panels (Centralized Warning Panels - CWP)",
        tagline: "Centralized Visual & Audible Fault Monitoring System",
        image: "/manufacturing/products/annunciator_panel.jpg",
        images: [
          "/manufacturing/products/annunciator_panel.jpg",
          "/manufacturing/products/annunciator_panel_multiwindow.jpg",
          "/manufacturing/products/annunciator_panel_internal.jpg"
        ],
        description:
          "An Annunciator Panel is a Centralized Warning Panel (CWP). Group of lights used as a central indicator of status of equipment or systems in an industrial process, building or other installation. Usually, the annunciator panel includes a main warning lamp or audible signal to draw the attention of operating personnel to the annunciator panel for abnormal events or condition.",
        specs: [
          { label: "Indicator Type", value: "High-luminance LED matrix fault windows (8 to 64+ windows)" },
          { label: "Alert Mechanism", value: "Dual-tone industrial electronic hooter/siren (90-110 dB)" },
          { label: "Function Sequence", value: "ISA-18.1 standard (Acknowledge / Reset / Test / Mute)" },
          { label: "Signal Interface", value: "Optically isolated potential-free NO/NC fault contacts" }
        ],
        highlights: [
          "Instant centralized fault diagnostics significantly reducing plant downtime",
          "First-out fault tripping sequence pinpoints exact initiating root cause",
          "Available in flush-door instrument fascia or wall-mount styles"
        ]
      },
      {
        name: "Capacitor Panels (Automatic APFC Panels)",
        tagline: "Automatic Power Factor Correction with Multi-Stage Bank Switching",
        image: "/manufacturing/products/apfc_capacitor_panel.jpg",
        images: [
          "/manufacturing/products/apfc_capacitor_panel.jpg",
          "/manufacturing/products/apfc_capacitor_panel_banks.jpg"
        ],
        description:
          "A capacitor panel maintains the power factor of the system automatically by switching the capacitor banks as per the needs of the system. Normally, an APFC relay along with a bank of capacitors, contactors and circuit breaker are the switchgear components used in the designing of the panel.",
        specs: [
          { label: "Controller", value: "Microprocessor-based multi-stage APFC relay" },
          { label: "Switchgear", value: "Capacitor duty contactors with damping resistors & MCCBs" },
          { label: "Target Power Factor", value: "Maintained consistently near unity (0.98 - 0.99 PF)" },
          { label: "Capacitors", value: "Heavy-duty cylindrical gas/oil-filled MPP capacitors" }
        ],
        highlights: [
          "Eliminates utility low-PF penalties and power factor surcharges",
          "Minimizes kVA demand billing and internal distribution copper losses",
          "Detuned harmonic filters prevent resonance and ensure long capacitor service life"
        ]
      },
      {
        name: "SS POU / WFI Control Panels",
        tagline: "cGMP Sanitary Stainless Steel Point of Use Heating & Cooling Panels",
        image: "/manufacturing/products/ss_pou_wfi_panel.jpg",
        images: [
          "/manufacturing/products/ss_pou_wfi_panel.jpg"
        ],
        description:
          "POU panels are used in heating and cooling applications",
        specs: [
          { label: "MOC Enclosure", value: "Stainless Steel AISI 304 / 316L (Ra < 0.4 µm mirror finish)" },
          { label: "Process Duty", value: "Point of Use (POU) Sanitary Heating & Cooling" },
          { label: "Sanitary Rating", value: "cGMP compliant flush door with silicone gasket & sloped roof" },
          { label: "Ingress Protection", value: "IP65 / IP66 washdown protection with sanitary cable glands" }
        ],
        highlights: [
          "Sloped hygienic roof and crevice-free welding prevent bacterial pooling",
          "Resistant to sterile pharmaceutical washdowns (IPA, Spor-Klenz, peracetic acid)",
          "Seamless integration into pharmaceutical cleanroom SCADA / BMS loops"
        ]
      }
    ],
    capabilities: [
      {
        name: "Thyristor Power Control Panels",
        description:
          "Stepless power variation panels for thermal loads, industrial furnaces, hot oil heaters, and extrusion barrels, preventing thermal shock and mechanical contactor fatigue.",
        specs: ["Phase Angle & Zero Cross Firing", "Current ratings up to 1200A", "Heatsink thermal interlocks & semiconductor fuse protection"]
      },
      {
        name: "Harsh-Environment VFD Panels",
        description:
          "Custom-engineered enclosures protecting drives from aggressive chemical fumes, dust, humidity, and heat in paper mills, steel plants, and wastewater facilities.",
        specs: ["IP54 / IP55 / IP65 sealed designs", "Integrated heat exchangers / closed-loop panel ACs", "Line/load reactors & EMC filters"]
      },
      {
        name: "Centralized Annunciator Warning Panels (CWP)",
        description:
          "Central fault warning consoles designed to monitor power sub-stations, furnace safety interlocks, and chemical reactor alarms with audio-visual alerts.",
        specs: ["8 to 128 window configurations", "Field-selectable alarm sequences", "Built-in pushbuttons for Test, Mute, Ack & Reset"]
      },
      {
        name: "Automatic Power Factor (APFC) Capacitor Panels",
        description:
          "Dynamic capacitor bank switching systems maintaining unity power factor, eliminating reactive energy charges from electricity boards.",
        specs: ["Microprocessor multi-step APFC relays", "Heavy-duty MPP/APP dry-type capacitors", "Thyristor-switched capacitor options for fast loads"]
      },
      {
        name: "Sanitary SS POU / WFI Process Panels",
        description:
          "High-purity stainless steel enclosures designed for sterile cleanroom pharmaceutical suites, controlling Point of Use cooling/heating cycles.",
        specs: ["AISI 304 / 316 electro-polished sheet metal", "Crevice-free concealed hinges", "IP66 sloped-roof hygienic cleanroom design"]
      },
      {
        name: "PCC & MCC Motor Control Centers",
        description:
          "Main power distribution and motor starter centers up to 6300A with drawout/fixed feeders, ACB bus couplers, and intelligent motor protection.",
        specs: ["Form 3b / Form 4b segregation", "Type-tested as per IS 8623 / IEC 61439", "Electrolytic grade 99.9% IACS copper busbars"]
      }
    ],
    specifications: [
      { label: "Manufacturing Division", value: "SP Enterprises (Handling SAHPL Product Portfolio)" },
      { label: "Fabrication Standard", value: "IS 8623 / IEC 61439 Type-Tested Quality" },
      { label: "Sheet Construction", value: "CRCA Sheet (1.6mm - 2.0mm) or SS304/SS316 Stainless Steel" },
      { label: "Surface Finish", value: "7-Tank pre-treatment with 80-100 micron electrostatic pure polyester powder coating" },
      { label: "Protection Index", value: "IP54, IP55, IP65, IP66 with polyurethane foam in-situ gasket sealing" },
      { label: "Busbar System", value: "High-conductivity ETP copper / aluminium with heat-shrinkable insulation sleeves" },
      { label: "Testing Protocols", value: "100% HV dielectric test, insulation resistance, Megger testing, wiring continuity check" }
    ],
    keyBenefits: [
      "Designed by qualified electrical engineers and assembled by certified technicians with 10+ years experience",
      "Tailor-made for harsh industrial conditions: dust, moisture, corrosive fumes, and extreme ambient temperatures",
      "Seamless communication interfaces supporting Modbus-RTU, Profinet, Ethernet/IP, and SCADA links",
      "Full schematic documentation including CAD Single-Line Diagrams (SLD), GA drawings, and terminal schedule charts"
    ],
    industriesServed: ["Heavy Manufacturing", "Chemical & Petrochemical", "Pharmaceuticals & Biotechnology", "Automotive Plants", "Water Treatment & Desalination", "Textile & Paper Mills"]
  },
  {
    id: "material-handling",
    title: "Material Handling Equipment & Automation",
    shortTitle: "Material Handling",
    tagline: "Turn-key Automated Conveyors, 90° Chain Tilters & SS304 Material Lifters",
    badge: "SP Enterprises • SAHPL Heavy Automation",
    iconName: "Truck",
    image: "/manufacturing/products/chain_tilter_90deg.jpg",
    description:
      "SP Enterprises manufactures and delivers the complete SAHPL material handling automation portfolio. Designed to streamline factory production, eliminate physical handling fatigue, and accelerate internal logistics, our systems are proven across leading automotive OEMs (Cummins, Mahindra) and pharmaceutical facilities (Fresenius-Kabi).",
    featuredClients: [
      "Cummins Generator Technologies",
      "Mahindra Vehicle Manufacturers Ltd",
      "Fresenius-Kabi, Ranjangaon"
    ],
    featuredProducts: [
      {
        name: "Roller Based Conveyor Systems",
        client: "Cummins Generator Technologies & Mahindra Vehicle Manufacturers Ltd",
        tagline: "Heavy-Duty Powered & Gravity Roller Conveying for Automotive Components",
        image: "/manufacturing/products/roller_conveyor_system.jpg",
        description:
          "Engineered for rugged, continuous movement of heavy vehicle sub-assemblies, engines, generators, and palletized goods. Features hardened precision rollers, robust side frames, and variable speed geared motor drives.",
        specs: [
          { label: "Clients", value: "Cummins Generator Technologies & Mahindra" },
          { label: "Rollers", value: "Heavy-duty precision ground carbon steel / galvanized" },
          { label: "Drive Mode", value: "Sprocket-to-sprocket chain drive / Tangential chain" }
        ],
        highlights: ["High payload capacity for automotive engines and stators", "Modular expandable sections for future factory retooling", "Variable speed control via integrated VFD"]
      },
      {
        name: "90° Chain Tilter (Product Rotator)",
        client: "Cummins Generator Technologies & Mahindra Vehicle Manufacturers Ltd",
        tagline: "Heavy Product 90-Degree Tilting & Reorientation for Automotive Lines",
        image: "/manufacturing/products/chain_tilter_90deg.jpg",
        description:
          "The Chain Tilter is engineered to safely tilt and rotate heavy machinery components, engine blocks, generator stators, and metal dies by 90 degrees. Commonly utilized in automobile assembly lines to handle massive weights with zero manual strain.",
        specs: [
          { label: "Clients", value: "Cummins Generator Technologies & Mahindra" },
          { label: "Tilting Angle", value: "0° to 90° bidirectional controlled rotation" },
          { label: "Drive Mechanism", value: "High-torque heavy-duty geared motor with dual roller chains" }
        ],
        highlights: ["Eliminates dangerous crane tipping and manual handling risks", "VFD-controlled soft start and soft decelerated stop profiles", "Mechanical lock pins and safety interlock limit switches"]
      },
      {
        name: "Material Lifter (Vertical Freight Lifter)",
        client: "Fresenius-Kabi, Ranjangaon",
        tagline: "SS304 Cleanroom Vertical Lifter for Multi-Floor Material Transfer",
        image: "/manufacturing/products/vertical_material_lifter.jpg",
        description:
          "Manufactured specifically for Fresenius-Kabi at their Ranjangaon facility, this vertical material lifter transfers loads up to 500 kg between mezzanine floors up to 6 meters high. Fabricated completely from certified SS304 stainless steel for cleanroom hygiene and long service life.",
        specs: [
          { label: "Client", value: "Fresenius-Kabi, Ranjangaon" },
          { label: "Equipment Type", value: "Vertical Lifter" },
          { label: "MOC (Material)", value: "Stainless Steel SS 304" },
          { label: "Drive Mechanism", value: "Heavy-duty Geared Motor" },
          { label: "Payload Capacity", value: "Carries weight up to 500 kg" },
          { label: "Lifting Height", value: "Around 6 meters (6m) from ground" },
          { label: "Overall Lifter Size", value: "6000 x 1410 x 1000 mm" }
        ],
        highlights: [
          "Complete SS304 sanitary construction compliant with pharmaceutical GMP",
          "Substantially reduces human physical effort and injury in heavy material lifting",
          "Fail-safe mechanical drop protection and interlocked safety enclosure gates"
        ]
      }
    ],
    capabilities: [
      {
        name: "Roller-Based Heavy Conveyor Lines",
        client: "Cummins Generator Technologies & Mahindra Vehicle Manufacturers Ltd",
        description:
          "Powered live roller (CDLR) and accumulation roller conveyors built to move heavy automotive components and generator assemblies effortlessly through assembly stations.",
        specs: ["Chain-driven live rollers", "Load capacities up to 3000 kg/pallet", "VFD variable speed indexing"]
      },
      {
        name: "Industrial 90-Degree Chain Tilters",
        client: "Cummins Generator Technologies & Mahindra Vehicle Manufacturers Ltd",
        description:
          "Specialized rotary equipment to tilt and position heavy automotive components by 90 degrees for inspection, machining, and secondary line transfer.",
        specs: ["90° bidirectional tilt cycle", "Heavy-gauge reinforced steel cradle", "Fail-safe motor brake holding mechanism"]
      },
      {
        name: "SS304 Vertical Material Lifters (6m Height, 500kg)",
        client: "Fresenius-Kabi, Ranjangaon",
        description:
          "Precision-engineered vertical reciprocating freight lifters built in SS304 to transfer raw materials and packaging supplies between mezzanine platforms.",
        specs: ["Equipment Type: Vertical Lifter", "MOC: SS304", "Drive: Geared Motor", "Payload: Up to 500 kg", "Height: 6m", "Dimensions: 6000 x 1410 x 1000 mm"]
      },
      {
        name: "Automated Rail-Guided Transfer Cars & Turntables",
        description:
          "Motorized cross-directional transfer trolleys and 90°/180° turntables facilitating multi-aisle logistics and complex cell routing in automotive plants.",
        specs: ["Precision mechanical indexing", "Proximity and laser positioning sensors", "Integrated line emergency stops"]
      }
    ],
    specifications: [
      { label: "Manufacturing Division", value: "SP Enterprises (Handling SAHPL Product Portfolio)" },
      { label: "Key Clients", value: "Cummins Generator Technologies, Mahindra Vehicle Mfrs, Fresenius-Kabi" },
      { label: "Structural MOC", value: "Heavy MS Structural Section / Certified Stainless Steel AISI 304" },
      { label: "Lifting Capacity", value: "Up to 500 kg (standard lifter) / Up to 2,000+ kg (custom models)" },
      { label: "Lifting Height", value: "Up to 6 meters (6000mm) single mast" },
      { label: "Drive Systems", value: "High-torque industrial geared motors with integrated fail-safe electromechanical brakes" },
      { label: "Safety Standards", value: "Interlocked safety doors, slack chain detectors, emergency drop stops, light curtains" }
    ],
    keyBenefits: [
      "Major reduction in human physical fatigue and workplace lifting injuries",
      "Certified SS304 cleanroom sanitary construction compliant with pharmaceutical GMP procedures",
      "Field-proven in heavy automotive production lines (Cummins & Mahindra)",
      "Engineered by qualified design engineers for high reliability and 24/7 continuous duty"
    ],
    industriesServed: ["Automobile & Heavy Vehicle Manufacturing", "Pharmaceuticals & Healthcare", "Power Generation Equipment", "Warehouse & Distribution Hubs", "General Engineering"]
  },
  {
    id: "glue-conveyors",
    title: "Packaging Conveyors & Hot Melt Glue Machines",
    shortTitle: "Packaging Conveyors",
    tagline: "Automated Box Packaging, Valco Melton Hot-Melt Sealing, 15m File Conveyors & 90° Tilters",
    badge: "SP Enterprises • SAHPL Packaging Automation",
    iconName: "Boxes",
    image: "/manufacturing/products/box_packaging_glue_conveyor.jpg",
    description:
      "HOT MELT GLUE MACHINE FOOD CARTONS (Client - General Mills and Valco Melton): Box Packaging Conveyor offers you to fold and pack the box with glue with very little help from human being. It’s totally automated system, where we just want to put the box at proper timing in the start tray. Rest of the work (folding and gluing) is done automatically and we get the fully packaged box at other side of the system. Also it can be adjusted according to sizes of the box we are packaging. Adjustments are given to set the system according to box size. PLC helps you to set the speed of packaging, start up and end up timing for glue gun.\n\nRoller Based Conveyor (Client - Cummins Generator Technologies and Mahindra Vehicle Manufacturers Ltd): Heavy-duty continuous conveying engineered for robust automotive sub-assemblies, heavy component boxes, and crates.\n\nFile Conveyor (Client - Navneet Industries): Total length of conveyor is 15m. Belt conveyor is used to easy and swift flow of files. There are two main stages of this conveyor 1] Feeder    2] Glue dropper machine. Feeder: Feeder move up and down to allow only one file to proceed onto the conveyor. Glue dropper machine: This machine drops the glue on specific position with the help of sensor. Feeder Belt Conveyor Glue dispensing machine.\n\nChain Tilter (Client - Cummins Generator Technologies and Mahindra Vehicle Manufacturers Ltd): Chain Tilter is used to tilt/rotate the product by 90 degree. This application is used normally in automobile industry to handle heavy weight products.",
    featuredClients: [
      "General Mills",
      "Valco Melton",
      "Navneet Industries",
      "Cummins Generator Technologies",
      "Mahindra Vehicle Manufacturers Ltd"
    ],
    featuredProducts: [
      {
        name: "HOT MELT GLUE MACHINE FOOD CARTONS",
        client: "General Mills and Valco Melton",
        tagline: "Totally Automated Box Folding, Hot-Melt Gluing & Sealing with Minimal Human Effort",
        image: "/manufacturing/products/box_packaging_glue_conveyor.jpg",
        images: [
          "/manufacturing/products/box_packaging_glue_conveyor.jpg",
          "/manufacturing/products/box_packaging_glue_conveyor_action.jpg"
        ],
        description:
          "Box Packaging Conveyor offers you to fold and pack the box with glue with very little help from human being. It’s totally automated system, where we just want to put the box at proper timing in the start tray. Rest of the work (folding and gluing) is done automatically and we get the fully packaged box at other side of the system.\n\nAlso it can be adjusted according to sizes of the box we are packaging. Adjustments are given to set the system according to box size. PLC helps you to set the speed of packaging, start up and end up timing for glue gun.",
        specs: [
          { label: "Client Deployment", value: "General Mills and Valco Melton" },
          { label: "System Operation", value: "Totally automated (start tray loading only, rest is auto)" },
          { label: "Box Size Flexibility", value: "Adjustments provided to set system according to box size" },
          { label: "PLC Controls", value: "Set speed of packaging, start up and end timing for glue gun" },
          { label: "Adhesive Application", value: "Hot-melt high-adhesion glue dispensing & mechanical flap folding" }
        ],
        highlights: [
          "Very little help from human being: Operator only puts the box in the start tray at proper timing",
          "Folding and gluing are completed automatically, delivering a fully packaged box at the other side",
          "Fully adjustable according to carton dimensions being packaged with quick adjustment knobs",
          "Integrated PLC manages packaging speed, glue gun startup timing, and shutdown duration"
        ]
      },
      {
        name: "Roller Based Conveyor",
        client: "Cummins Generator Technologies and Mahindra Vehicle Manufacturers Ltd",
        tagline: "Heavy-Duty Powered & Gravity Roller Conveying for Vehicle Parts & Box Handling",
        image: "/manufacturing/products/roller_packaging_conveyor.jpg",
        images: [
          "/manufacturing/products/roller_packaging_conveyor.jpg",
          "/manufacturing/products/roller_conveyor_system.jpg"
        ],
        description:
          "Heavy-duty Roller Based Conveyors engineered for Cummins Generator Technologies and Mahindra Vehicle Manufacturers Ltd. Built to handle continuous, smooth movement of heavy product boxes, crates, vehicle components, and palletized assemblies across manufacturing and packaging lines with zero-pressure accumulation.",
        specs: [
          { label: "Client Deployment", value: "Cummins Generator Technologies and Mahindra Vehicle Manufacturers Ltd" },
          { label: "Application", value: "Heavy automotive components, boxed assemblies & factory line feeding" },
          { label: "Roller Construction", value: "Precision-ground hardened steel / galvanized rollers" },
          { label: "Frame Structure", value: "Heavy-duty powder coated structural steel side frames" },
          { label: "Drive Architecture", value: "Chain-driven live rollers with VFD speed regulation" }
        ],
        highlights: [
          "High payload capacity engineered for heavy vehicle components and industrial crates",
          "Smooth integration into packaging, sorting, and manual assembly workstations",
          "Low-friction bearing assemblies guarantee quiet, continuous 24/7 industrial duty"
        ]
      },
      {
        name: "File Conveyor (15m Belt Conveyor with Feeder & Glue Dropper)",
        client: "Navneet Industries",
        tagline: "Dual-Stage 15m Continuous Belt Conveyor with Up/Down Feeder & Sensor Glue Dropper",
        image: "/manufacturing/products/file_conveyor_15m.jpg",
        images: [
          "/manufacturing/products/file_conveyor_15m.jpg",
          "/manufacturing/products/file_conveyor_15m_stationery.jpg"
        ],
        description:
          "Total length of conveyor is 15m Belt conveyor is used to easy and swift flow of files. There are two main stages of this conveyor 1] Feeder    2] Glue dropper machine\n\nFeeder: Feeder move up and down to allow only one file to proceed onto the conveyor.\n\nGlue dropper machine: This machine drops the glue on specific position with the help of sensor.\n\nFeeder Belt Conveyor Glue dispensing machine.",
        specs: [
          { label: "Client Deployment", value: "Navneet Industries" },
          { label: "Total Length", value: "15 meters (15m) Belt Conveyor" },
          { label: "Conveyor Duty", value: "Belt conveyor for easy and swift flow of files" },
          { label: "Stage 1: Feeder", value: "Feeder moves up and down to allow only one file to proceed" },
          { label: "Stage 2: Glue Dropper", value: "Sensor-based machine drops glue on specific position" },
          { label: "System Elements", value: "Feeder + Belt Conveyor + Glue Dispensing Machine" }
        ],
        highlights: [
          "Continuous 15m length delivers rapid, smooth, and jam-free stationery file throughput",
          "Feeder moves up and down automatically to separate files and prevent double-feeding",
          "High-speed optical sensor triggers glue dropper machine for exact adhesive placement",
          "Seamless synchronized workflow from feeder station to glue dispenser"
        ]
      },
      {
        name: "Chain Tilter (90° Product Rotator)",
        client: "Cummins Generator Technologies and Mahindra Vehicle Manufacturers Ltd",
        tagline: "Heavy-Duty 90-Degree Product Tilting & Rotation for Automobile Plants",
        image: "/manufacturing/products/chain_tilter_90deg.jpg",
        images: [
          "/manufacturing/products/chain_tilter_90deg.jpg",
          "/manufacturing/products/chain_tilter_automotive.jpg"
        ],
        description:
          "Chain Tilter is used to tilt/rotate the product by 90 degree. This application is used normally in automobile industry to handle heavy weight products.\n\nManufactured for Cummins Generator Technologies and Mahindra Vehicle Manufacturers Ltd, the heavy-duty chain tilter eliminates hazardous manual crane lifting and ensures safe, controlled 0° to 90° rotation of engine blocks, generator stators, and heavy metal castings.",
        specs: [
          { label: "Client Deployment", value: "Cummins Generator Technologies and Mahindra Vehicle Manufacturers Ltd" },
          { label: "Application", value: "Used normally in automobile industry to handle heavy weight products" },
          { label: "Rotation Duty", value: "Tilts and rotates the product by 90 degrees (90°)" },
          { label: "Drive System", value: "Heavy-duty geared motor with dual high-tensile roller chains" },
          { label: "Safety Controls", value: "Counterbalanced cradle, mechanical lock pins and safety interlocks" }
        ],
        highlights: [
          "Tilts and rotates heavy products by 90 degrees with zero manual physical strain",
          "Field-proven across Cummins and Mahindra heavy automobile manufacturing plants",
          "High safety factor with fail-safe electromechanical brake and emergency stop interlocks"
        ]
      }
    ],
    capabilities: [
      {
        name: "Automated Box Packaging Conveyor with Hot-Melt Glue",
        client: "General Mills & Valco Melton",
        description:
          "Complete automated carton folding and sealing line where the operator feeds the box into the start tray, and the system automatically performs folding, gluing, compression, and discharge.",
        specs: ["Client: General Mills & Valco Melton", "Adjustable box dimensions", "PLC speed and glue gun timing synchronization", "Minimal human intervention"]
      },
      {
        name: "Roller Based Heavy Conveyor Lines",
        client: "Cummins Generator Technologies & Mahindra Vehicle Manufacturers Ltd",
        description:
          "Heavy roller conveyors designed for continuous handling of industrial crates, boxed automotive components, and generator sub-assemblies.",
        specs: ["Precision ball bearings", "VFD smooth speed control", "Emergency stop trip wires"]
      },
      {
        name: "15m Belt File Conveyor with Up/Down Feeder & Glue Dispenser",
        client: "Navneet Industries",
        description:
          "High-speed 15-meter stationery file conveyor featuring an automated up-and-down single-file feeder and sensor-controlled glue dropper dispensing station.",
        specs: ["Client: Navneet Industries", "Total Length: 15 meters", "Stage 1: Up/Down Feeder", "Stage 2: Sensor-triggered Glue Dropper"]
      },
      {
        name: "Industrial 90-Degree Chain Tilters",
        client: "Cummins Generator Technologies & Mahindra Vehicle Manufacturers Ltd",
        description:
          "Specialized rotary equipment to tilt and position heavy automotive components by 90 degrees for inspection, machining, and secondary line transfer.",
        specs: ["90° bidirectional tilt cycle", "Heavy-gauge reinforced steel cradle", "Fail-safe motor brake holding mechanism"]
      }
    ],
    specifications: [
      { label: "Manufacturing Division", value: "SP Enterprises (Handling SAHPL Product Portfolio)" },
      { label: "Key Clients", value: "General Mills, Valco Melton, Navneet Industries, Cummins Generator Technologies, Mahindra" },
      { label: "Box Packaging System", value: "Totally automated folding, hot-melt gluing & sealing with fast size adjustments" },
      { label: "File Conveyor Length", value: "15 meters (15m continuous belt conveyor)" },
      { label: "File Conveyor Stages", value: "1] Up/Down Mechanical Feeder • 2] Sensor-Triggered Glue Dropper Machine" },
      { label: "Chain Tilter Range", value: "0° to 90° bidirectional controlled rotation for heavy automobile products" },
      { label: "Control Architecture", value: "Integrated PLC with HMI for packaging speed, startup & end timing adjustments" },
      { label: "Factory Testing", value: "100% FAT mechanical synchronization, speed calibration & load testing" }
    ],
    keyBenefits: [
      "Very little help from human being: Operator only places the box in the start tray at proper timing",
      "Tamper-evident, high-integrity carton closure for food and industrial packages",
      "Quick adjustments provided to configure the machine according to various box sizes",
      "PLC control allows micro-timing tuning for adhesive start, duration, and shutoff",
      "15m file conveyor feeder moves up and down automatically to ensure single file flow",
      "90-degree chain tilter handles heavy weight products safely in automotive lines"
    ],
    industriesServed: [
      "Food Cartons & Confectionery (General Mills, Valco Melton)",
      "Publishing & Stationery (Navneet Industries)",
      "Automobile & Heavy Vehicle Manufacturing (Cummins, Mahindra)",
      "Industrial Warehouse & Distribution Logistics",
      "General Engineering & Packaging Automation"
    ]
  },
  {
    id: "special-purpose-machines",
    title: "Special Purpose Machines (SPM) & Process Units",
    shortTitle: "Special Purpose Machines",
    tagline: "Turnkey Hot Oil Systems, Hot Water Skids, Paint Booths & Air Incinerators",
    badge: "SP Enterprises • SAHPL Bespoke SPM",
    iconName: "Settings2",
    image: "/manufacturing/products/hot_water_generator_skid.jpg",
    description:
      "Operating from our specialized fabrication and engineering facility in Pune, Maharashtra, SP Enterprises manufactures and delivers the complete SAHPL bespoke range of Special Purpose Machines (SPM), thermal fluid process systems, sanitary heating skids, and customized industrial machinery.\n\nEvery machine is engineered from the ground up by qualified design engineers to resolve demanding thermal, mechanical, and biological process hurdles that standard off-the-shelf equipment cannot address. Our scope spans thermal load calculations, 3D CAD/CAE modeling, CNC shearing and fiber laser cutting, precision TIG welding, electrical automation panel integration, and full pre-dispatch Factory Acceptance Testing (FAT).\n\nWith over 10+ years of heavy industrial execution, our custom process units are trusted by industry leaders including Texol, Cummins India Ltd. (Phaltan), Fresenius-Kabi, General Mills, and numerous chemical and pharmaceutical manufacturing plants across India.",
    featuredClients: [
      "Texol",
      "Cummins India Ltd., Phaltan",
      "General Mills",
      "Valco Melton",
      "Process & Pharmaceutical Plants"
    ],
    featuredProducts: [
      {
        name: "Hot Oil Unit With Heating System",
        tagline: "SS Tank with Ceramic Wool Insulation & Closed-Loop Heating up to 250°C",
        image: "/manufacturing/products/hot_oil_heating_unit.jpg",
        images: [
          "/manufacturing/products/hot_oil_heating_unit.jpg",
          "/manufacturing/products/hot_oil_unit_system.jpg"
        ],
        description:
          "Oil heating system is mainly used to provide hot oil for other process applications. Oil is heating in SS Tank, this SS tank has provided with ceramic wool insulation. The system is made up of a pump that pushes the heat transfer fluid through an insulated piping system to a heater to the processing equipment. All processes are controlled by Control panels.\n\nBuilt entirely from heavy-duty Stainless Steel SS 304 for both the tank and piping network, the system guarantees long-term thermal integrity and corrosion resistance at continuous operating temperatures from 90 to 250 degree C. High-density ceramic wool insulation prevents surface heat loss, maximizing energy efficiency and shop-floor safety.",
        specs: [
          { label: "Pump Pressure", value: "1.0 Barg" },
          { label: "Temperature range", value: "90 to 250 degree C" },
          { label: "MOC of System Components", value: "SS 304 (SS tank and Piping)" },
          { label: "Pump Flow rate", value: "1.2 M3/hr" },
          { label: "Tank Capacity", value: "150 Liters" },
          { label: "Heater Capacity", value: "3X3 KW" },
          { label: "Tank Insulation", value: "Ceramic wool insulation" },
          { label: "Control System", value: "Dedicated Control panels" }
        ],
        highlights: [
          "Oil heating in SS 304 tank equipped with dense ceramic wool insulation",
          "Pump pushes heat transfer fluid through insulated piping to heater & processing equipment",
          "Operates at 1.0 Barg pump pressure with 1.2 M3/hr flow rate and 90 to 250 degree C range",
          "Heavy-gauge SS 304 tank and piping with 3X3 KW heater capacity and control panel"
        ]
      },
      {
        name: "Air Incineration System",
        tagline: "350°C Thermal Sterilization (>6 Sec) Eliminating Bacteriophage Bacteria",
        image: "/manufacturing/products/air_incineration_system.jpg",
        images: [
          "/manufacturing/products/air_incineration_system.jpg",
          "/manufacturing/products/air_incineration_system_chamber.jpg"
        ],
        description:
          "In this system, Air is heated to 350 °C (Degree Centigrade) and maintained more than 6 sec. to eliminate the contamination of Bacteriophage Bacteria.\n\nSpecially developed for critical biotechnology, pharmaceutical fermentation, and cleanroom air systems, the Air Incineration System destroys heat-resistant bacteriophage bacteria, bacterial viruses, and virulent airborne biological pathogens before process air enters sensitive bioreactors or discharges to the environment. The precision thermal chamber ensures uniform heat exposure across 100% of the air volume.",
        specs: [
          { label: "Operating Temperature", value: "Heated to 350 °C (Degree Centigrade)" },
          { label: "Holding Residence Time", value: "Maintained more than 6 sec (> 6 seconds)" },
          { label: "Biological Target", value: "Eliminate contamination of Bacteriophage Bacteria" },
          { label: "Chamber Construction", value: "High-temperature stainless steel with thermal isolation" },
          { label: "Process Control", value: "Automated PID temperature interlock with fail-safe shutoff" }
        ],
        highlights: [
          "Air is heated to 350 °C (Degree Centigrade) with uniform heat distribution",
          "Air temperature maintained more than 6 sec to eliminate Bacteriophage Bacteria",
          "High-temperature thermal chamber engineered for zero cold-spot bypass",
          "Continuous digital audit with fail-safe low-temperature process trip"
        ]
      },
      {
        name: "Paint Booth",
        client: "Cummins India Ltd., Phaltan",
        tagline: "Special Purpose Machinery Paint Booth with SS304 Chamber & Rear Blower",
        image: "/manufacturing/products/industrial_paint_booth.jpg",
        images: [
          "/manufacturing/products/industrial_paint_booth.jpg",
          "/manufacturing/products/cummins_paint_booth_ss304.jpg"
        ],
        description:
          "Client - Cummins India Ltd., Phaltan\n\nPaint booth is the special purpose application required to paint different Machines. We provided this application to Cummins technology. Main Chamber is in SS304 and other part made in MS. Blower located at rear part will be used to suck outside air.\n\nFabricated to withstand heavy industrial painting cycles, the stainless steel SS304 main chamber ensures easy wash-down and resistance against solvents and paint chemicals. The rigid mild steel (MS) base and structural framing provide heavy load-bearing capacity, while the rear extraction blower continuously pulls outside air through filtering media to maintain clean, balanced, and fume-free conditions.",
        specs: [
          { label: "Client", value: "Cummins India Ltd., Phaltan" },
          { label: "Application", value: "Special purpose application required to paint different Machines" },
          { label: "Provided To", value: "Cummins technology" },
          { label: "Main Chamber MOC", value: "SS304 (Stainless Steel 304)" },
          { label: "Other Parts MOC", value: "MS (Mild Steel structural fabrication)" },
          { label: "Blower / Airflow", value: "Blower located at rear part will be used to suck outside air" },
          { label: "Air Quality Control", value: "Intake filtration and exhaust overspray arrestor filters" }
        ],
        highlights: [
          "Special purpose application required to paint different Machines, provided to Cummins technology",
          "Main Chamber fabricated in SS304 for chemical durability and easy clean-down",
          "Other parts made in MS providing rigid heavy-duty structural stability",
          "Blower located at rear part used to suck outside air and remove paint fumes"
        ]
      },
      {
        name: "Continuous Hot water Generation Unit",
        client: "Texol",
        tagline: "1000 LPH Flow Rate at 3 Bar g Pressure with Thyristor/SSR & ±2.0°C Accuracy",
        image: "/manufacturing/products/hot_water_generator_skid.jpg",
        images: [
          "/manufacturing/products/hot_water_generator_skid.jpg",
          "/manufacturing/products/hot_water_generator_skid_detail.jpg"
        ],
        description:
          "Client- Texol\n\nThis Unit can generate continuous hot water with flow rate of 1000LPH with 3 Bar g pressure. TempRange: Ambientto 95degC(working temp. 95 degC ). Accuracy:+/ - 2.0 degC. Temp Control: PIDController. TempSensor:PT-100.\n\nSeparate Electronicthermostat for safety and pressure safety valve. Water flow monitored and controlled by flow switch & Pressure monitored by pressure gauge. 30KWHeaters (2kw X15nos) will be used to heat the Media and provision for one no spare heater of 2 kw capacity. Heatercontrolvia thyristor/SSR.",
        specs: [
          { label: "Client", value: "Texol" },
          { label: "Flow Rate", value: "Continuous hot water with flow rate of 1000LPH" },
          { label: "Operating Pressure", value: "3 Bar g pressure" },
          { label: "TempRange", value: "Ambientto 95degC (working temp. 95 degC)" },
          { label: "Accuracy", value: "+/ - 2.0 degC" },
          { label: "Temp Control", value: "PIDController" },
          { label: "TempSensor", value: "PT-100" },
          { label: "Heater Capacity", value: "30KWHeaters (2kw X15nos) + 1 no spare heater of 2 kw capacity" },
          { label: "Heater Control", value: "Heatercontrolvia thyristor/SSR" },
          { label: "Safety Devices", value: "Separate Electronicthermostat for safety and pressure safety valve" },
          { label: "Flow & Pressure Monitoring", value: "Water flow monitored and controlled by flow switch & Pressure monitored by pressure gauge" }
        ],
        highlights: [
          "Generates continuous hot water with flow rate of 1000LPH with 3 Bar g pressure for Texol",
          "TempRange: Ambient to 95degC (working temp. 95 degC) with ±2.0 degC accuracy, PIDController & PT-100",
          "30KWHeaters (2kw X15nos) to heat the Media and provision for one no spare heater of 2 kw capacity",
          "Heatercontrolvia thyristor/SSR; flow switch, pressure gauge, electronic thermostat & safety valve"
        ]
      },
      {
        name: "Industrial Chillers & Cold Rooms",
        tagline: "Precision Process Fluid Chillers & cGMP Cold Storage Rooms",
        image: "/manufacturing/products/industrial_chiller.jpg",
        description:
          "SP Enterprises engineers, manufactures, and commissions custom-tailored Industrial Process Chillers and modular cGMP Cold Storage Rooms for temperature-critical pharmaceutical, chemical, plastics, and food preservation processes.\n\nAvailable in both air-cooled and water-cooled skid configurations, our process chillers cover operating ranges from -20°C deep freeze applications up to +15°C chilled water circuits. The refrigeration circuits feature energy-efficient hermetic scroll or semi-hermetic reciprocating compressors, stainless steel brazed plate or shell-and-tube heat exchangers, and eco-friendly refrigerants (R134a, R410A, R407C) controlled by microprocessor-based staging.\n\nOur walk-in cold rooms are constructed with high-density polyurethane foam (PUF) sandwich panels with food-grade PPGI or SS304 stainless steel cladding. Equipped with dual-redundant refrigeration units, automated defrosting, digital data logging, and interior emergency safety releases, they deliver uninterrupted cold-chain preservation.",
        specs: [
          { label: "Chiller Types", value: "Air-Cooled & Water-Cooled Process Chillers" },
          { label: "Temperature Capability", value: "-20°C to +15°C application tailored" },
          { label: "Refrigerant", value: "Eco-friendly R134a / R410A / R407C" }
        ],
        highlights: ["Stainless steel heat exchangers", "Microprocessor temperature staging", "Compliant with pharmaceutical cold chain storage"]
      }
    ],
    capabilities: [
      {
        name: "Hot Oil Unit With Heating System",
        description:
          "SS Tank with ceramic wool insulation. Pump pushes heat transfer fluid through insulated piping to heater & processing equipment, all controlled by Control panels.",
        specs: [
          "Pump Pressure: 1.0 Barg",
          "Temp Range: 90 to 250 degree C",
          "MOC: SS 304 (SS tank & Piping)",
          "Pump Flow Rate: 1.2 M3/hr",
          "Tank: 150 Liters",
          "Heater: 3X3 KW"
        ]
      },
      {
        name: "Air Incineration System",
        description:
          "Air is heated to 350 °C (Degree Centigrade) and maintained more than 6 sec. to eliminate the contamination of Bacteriophage Bacteria.",
        specs: ["Temp: Heated to 350 °C", "Residence: Maintained > 6 sec", "Target: Eliminate Bacteriophage Bacteria", "Safety: PID interlock"]
      },
      {
        name: "Paint Booth",
        client: "Cummins India Ltd., Phaltan",
        description:
          "Special purpose application required to paint different Machines, provided to Cummins technology. Main Chamber in SS304, other parts MS, rear blower sucks outside air.",
        specs: ["Client: Cummins India Ltd., Phaltan", "Main Chamber: SS304", "Other parts: MS", "Rear blower sucks outside air"]
      },
      {
        name: "Continuous Hot water Generation Unit",
        client: "Texol",
        description:
          "Generates continuous hot water (1000LPH, 3 Bar g, ambient to 95degC working 95degC, +/-2.0 degC accuracy, PID, PT-100, 30KW heaters 15x2kW + 1 spare 2kW, thyristor/SSR).",
        specs: [
          "Flow: 1000LPH at 3 Bar g",
          "Temp: Ambient to 95degC (working 95degC)",
          "Accuracy: +/- 2.0 degC",
          "30KW Heaters (15x2kw) + 1 spare 2kw",
          "Thyristor/SSR control",
          "Safety: Thermostat & PSV"
        ]
      },
      {
        name: "Industrial Process Chillers & Cold Rooms",
        description:
          "Custom-built chillers and walk-in cold rooms for pharma storage, plastic injection molding, laser cooling, and chemical reactors.",
        specs: ["Air-cooled & water-cooled variants", "Hermetic scroll / semi-hermetic compressors", "Digital PLC display"]
      }
    ],
    specifications: [
      { label: "Manufacturing Division", value: "SP Enterprises (Handling SAHPL Product Portfolio)" },
      { label: "Key Clients", value: "Texol, Cummins India Ltd. (Phaltan), General Mills, Valco Melton" },
      { label: "Hot Oil Unit Specs", value: "1.0 Barg, 90-250°C, SS 304 tank & piping, 1.2 M3/hr, 150L, 3X3 KW, ceramic wool insulation" },
      { label: "Air Incineration Specs", value: "Heated to 350 °C maintained > 6 sec to eliminate Bacteriophage Bacteria" },
      { label: "Paint Booth Specs", value: "Cummins India Ltd. (Phaltan) - SS304 Main Chamber, MS parts, rear suction blower" },
      { label: "Hot Water Unit Specs", value: "Texol - 1000LPH, 3 Bar g, 95°C (±2°C), PT-100, PID, 30KW (15x2kW) + 1 spare 2kW, Thyristor/SSR" },
      { label: "Control System", value: "Dedicated Automation Control Panels, Thyristor / SSR solid-state firing, PID controllers" }
    ],
    keyBenefits: [
      "Custom-tailored machinery solutions built precisely around client process parameters",
      "Field-proven in critical applications at Cummins India Ltd. (Phaltan) and Texol",
      "SS304 construction, high-efficiency ceramic wool insulation, and full safety relief valves",
      "Single-source turnkey responsibility: Design, Manufacturing, Installation & Commissioning"
    ],
    industriesServed: ["Automotive Machine Building (Cummins)", "Chemical & Petrochemical Skids", "Pharmaceutical & Biotechnology", "Food & Beverage Processing", "Industrial Painting & Finishing"]
  },
  {
    id: "ss-fabrication",
    title: "SS & MS Industrial Fabrication, Trolleys & Fixtures",
    shortTitle: "Trolleys & SS/MS Fabrication",
    tagline: "Custom Industrial Trolleys, Cleanroom Furniture, SS Racks & Cross-Over Benches",
    badge: "SP Enterprises • cGMP SS 304 & MS Fabrication",
    iconName: "Shield",
    image: "/manufacturing/products/cleanroom_ss_furniture.jpg",
    description:
      "SP Enterprises delivers the full SAHPL portfolio of high-precision Stainless Steel (SS304/SS316) and Mild Steel (MS) fixtures, industrial plant trolleys, and cleanroom furniture. Built for heavy automotive manufacturing (Mahindra) as well as rigorous cGMP pharmaceutical environments (Midas Care, Fresenius-Kabi).",
    featuredClients: [
      "Mahindra Vehicle Manufacturers Ltd",
      "Hikal Ltd",
      "Midas Care",
      "Fresenius-Kabi, Ranjangaon"
    ],
    featuredProducts: [
      {
        name: "Industrial Trolleys Collection",
        client: "Mahindra Vehicle Manufacturers Ltd & Hikal Ltd",
        tagline: "Heavy-Duty Cartage, Cans, Boxes & Mesh Material Movement Trolleys",
        image: "/manufacturing/products/industrial_trolleys.jpg",
        description:
          "Manufactured for automotive plants and chemical manufacturing facilities including Mahindra Vehicle Manufacturers Ltd and Hikal Ltd. Our specialized trolleys are engineered with heavy-duty structural steel, ergonomic push bars, and anti-static polyurethane/nylon castors.",
        specs: [
          { label: "Clients", value: "Mahindra Vehicle Manufacturers Ltd & Hikal Ltd" },
          { label: "Wheel Castors", value: "Heavy-duty PU / Nylon wheels with foot brake locks" },
          { label: "Structure", value: "Heavy MS powder coated / SS304 hygienic" }
        ],
        highlights: [
          "Trolley for Cartages - Heavy transport for automotive sub-assemblies",
          "Multipurpose Trolley - Versatile tool and inventory staging trolley",
          "Trolley for Cans - Dedicated cradle trolley for chemical cans and drums",
          "Trolley for Small Boxes - Tiered shelving for swift line-side component picking",
          "Carton Trolley - High-capacity corrugated carton movement",
          "Mesh Trolley - Enclosed wire mesh cage trolley preventing parts drop during transit"
        ]
      },
      {
        name: "Cleanroom SS & MS Fabrication for Industry Use",
        client: "Midas Care & Fresenius-Kabi",
        tagline: "cGMP Sanitary SS Racks, Tables, MS Racks & Cross-Over Benches",
        image: "/manufacturing/products/cleanroom_ss_furniture.jpg",
        description:
          "Fabricated for pharmaceutical formulations and healthcare plants including Midas Care and Fresenius-Kabi. Features crevice-free seamless TIG welding, rounded sanitary coving, and mirror/satin electro-polished finishes.",
        specs: [
          { label: "Clients", value: "Midas Care & Fresenius-Kabi" },
          { label: "MOC", value: "Certified AISI 304 / 316 Stainless Steel & Heavy MS" },
          { label: "Welding", value: "100% Argon purged TIG welded, ground flush and seamless" }
        ],
        highlights: [
          "SS Rack - Multi-tier sanitary storage racks with perforated or solid SS304 shelves",
          "SS Table - Heavy-duty pharma inspection & working tables with acoustic under-dampening",
          "MS Rack - High-load industrial warehouse and tool storage racking systems",
          "Cross Over Benches - Barrier benches separating shoe-change zones in cleanroom airlocks"
        ]
      }
    ],
    capabilities: [
      {
        name: "Industrial Trolleys (Cartages, Cans, Boxes & Mesh)",
        client: "Mahindra Vehicle Manufacturers Ltd & Hikal Ltd",
        description:
          "Full suite of specialized industrial trolleys: Trolley for Cartages, Multipurpose Trolley, Trolley for Cans, Trolley for Small Boxes, Carton Trolley, and Mesh Trolley.",
        specs: ["Clients: Mahindra & Hikal Ltd", "High load ratings (up to 1000 kg)", "PU / Nylon lockable castors", "Shock-damped chassis"]
      },
      {
        name: "Pharma SS Fabrication (Racks, Tables & Benches)",
        client: "Midas Care & Fresenius-Kabi",
        description:
          "Sanitary pharmaceutical equipment including SS Racks, SS Working Tables, MS Heavy-duty Racks, and Cleanroom Cross Over Benches.",
        specs: ["Clients: Midas Care & Fresenius-Kabi", "SS304 / SS316 certified", "Crevice-free smooth welds", "cGMP compliant"]
      },
      {
        name: "Cleanroom Garment Lockers & Dynamic Pass Boxes",
        description:
          "Sloped-top cleanroom apparel lockers and interlocking pass boxes preventing cross-contamination between classified areas.",
        specs: ["Sloped top prevents dust accumulation", "Electromagnetic door interlocking", "UV germicidal lamps"]
      },
      {
        name: "Custom SS Vessels, Sinks & Hoppers",
        description:
          "Sanitary hand scrub sinks with knee/sensor valves, blending hoppers, and custom SS304/SS316 pressure vessels.",
        specs: ["Ra < 0.4 µm electro-polished finish", "Argon purged orbital welding", "Material Test Certificates (MTC 3.1)"]
      }
    ],
    specifications: [
      { label: "Manufacturing Division", value: "SP Enterprises (Handling SAHPL Product Portfolio)" },
      { label: "Key Clients", value: "Mahindra Vehicle Mfrs, Hikal Ltd, Midas Care, Fresenius-Kabi" },
      { label: "Material Grades", value: "AISI 304, AISI 316, AISI 316L Stainless Steel & High-Strength Mild Steel (MS)" },
      { label: "Trolley Variations", value: "Cartage, Multipurpose, Cans, Small Boxes, Carton, Wire Mesh Trolleys" },
      { label: "Fabrication Products", value: "SS Racks, SS Tables, MS Racks, Cross-Over Benches, Cleanroom Furniture" },
      { label: "Surface Finish", value: "Ra < 0.4 µm Electro-polished / 240 Grit Satin / 7-Tank MS Powder Coated" },
      { label: "Welding Quality", value: "100% Argon-shielded TIG welding, ground flush with zero pinholes or crevice traps" }
    ],
    keyBenefits: [
      "Custom manufactured to exact plant dimensions, aisle widths, and weight loads",
      "Full compliance with USFDA / EU-GMP cleanroom audit standards for pharmaceutical plants",
      "Rugged durability tested in heavy automotive assembly environments (Mahindra)",
      "Zero dead pockets or open hollow tubes that could harbor bacterial contamination"
    ],
    industriesServed: ["Automotive Vehicle Plants (Mahindra)", "Chemical & Active Ingredients (Hikal)", "Pharmaceuticals (Midas Care & Fresenius-Kabi)", "Cleanrooms & Laboratories", "Warehousing & Supply Chain"]
  }
];
