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
        description:
          "Thyristor Control panels are engineered to regulate precise power or voltage supplied to an industrial load. Typical applications are found where electrical power needs to be dynamically varied and converted into thermal energy with zero mechanical contactor wear.",
        specs: [
          { label: "Control Mode", value: "Zero-Cross / Phase Angle Firing" },
          { label: "Thermal Efficiency", value: "High precision PID feedback" },
          { label: "Protection", value: "Ultra-fast semiconductor fuses & RC snubbers" }
        ],
        highlights: ["Smooth stepless power regulation", "Eliminates thermal shock to heating elements", "Built-in thyristor heatsink with forced ventilation"]
      },
      {
        name: "VFD Control Panels (Harsh Environment Enclosures)",
        tagline: "High-Protection Enclosures for Dusty, Wet, Humid & Corrosive Workspaces",
        image: "/manufacturing/products/vfd_control_panel.jpg",
        description:
          "When workspace environments are dusty, dirty, wet, humid, corrosive, or high-temperature, Variable Frequency Drives cannot remain exposed. Our VFD Control Panels provide a heavy-duty sealed enclosure protecting the drive and sensitive electronics while delivering thermostatically controlled cooling.",
        specs: [
          { label: "Enclosure Ingress", value: "IP54 / IP55 / IP65 Polyurethane Gasketed" },
          { label: "Cooling Architecture", value: "Filter fans with louvers / Air Conditioned" },
          { label: "Power Ratings", value: "0.75 kW to 500+ kW motors" }
        ],
        highlights: ["Integrated line chokes and dV/dt output reactors", "Dynamic braking resistor integration", "Emergency bypass contactor configuration"]
      },
      {
        name: "Annunciator Panels (Centralized Warning Panels - CWP)",
        tagline: "Centralized Visual & Audible Fault Monitoring System",
        image: "/manufacturing/products/annunciator_panel.jpg",
        description:
          "An Annunciator Panel serves as a Centralized Warning Panel (CWP) featuring a grouped array of window warning lights and audible horns. It acts as the central status indicator of critical equipment and process parameters, instantly drawing operator attention to abnormal events or fault trips.",
        specs: [
          { label: "Indicator Type", value: "High-luminance LED matrix fault windows" },
          { label: "Alert Mechanism", value: "Dual-tone industrial electronic hooter/siren" },
          { label: "Function Sequence", value: "ISA-18.1 standard (Acknowledge / Reset / Test)" }
        ],
        highlights: ["Fast diagnostics reducing downtime", "Potential-free fault contact inputs", "Available in flush panel or wall-mount styles"]
      },
      {
        name: "Capacitor Panels (Automatic APFC Panels)",
        tagline: "Automatic Power Factor Correction with Multi-Stage Bank Switching",
        image: "/manufacturing/products/apfc_capacitor_panel.jpg",
        description:
          "Maintains the target power factor of electrical installations automatically by switching capacitor banks according to dynamic load demands. Designed with an intelligent APFC microprocessor relay, heavy-duty capacitor banks, detuned reactors, contactors, and circuit breakers.",
        specs: [
          { label: "Controller", value: "Microprocessor-based multi-stage APFC relay" },
          { label: "Switchgear", value: "Capacitor duty contactors with damping resistors" },
          { label: "Power Factor", value: "Maintained consistently near unity (0.99 PF)" }
        ],
        highlights: ["Eliminates utility low-PF penalties", "Minimizes kVA billing and line transmission losses", "Detuned harmonic filters prevent resonance"]
      },
      {
        name: "SS POU / WFI Control Panels",
        tagline: "cGMP Sanitary Stainless Steel Point of Use Heating & Cooling Panels",
        image: "/manufacturing/products/ss_pou_wfi_panel.jpg",
        description:
          "Specifically manufactured for sanitary pharmaceutical, biotech, and Water for Injection (WFI) loops. POU panels regulate critical heating and cooling applications with cleanroom-compatible SS304/SS316 enclosures and crevice-free finishes.",
        specs: [
          { label: "MOC Enclosure", value: "Stainless Steel AISI 304 / 316L (Ra < 0.4 µm)" },
          { label: "Process Duty", value: "Point of Use (POU) Sanitary Heating & Cooling" },
          { label: "Sanitary Rating", value: "cGMP compliant flush door with silicone gasket" }
        ],
        highlights: ["Resistant to sterile chemical washdowns (IPA/Spor-Klenz)", "Precision RTD/PT100 sensor interface", "Seamless integration into pharmaceutical SCADA"]
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
    tagline: "Automated Box Packaging, Valco Melton Hot-Melt Sealing & 15m File Conveyors",
    badge: "SP Enterprises • SAHPL Packaging Automation",
    iconName: "Boxes",
    image: "/manufacturing/products/box_packaging_glue_conveyor.jpg",
    description:
      "Engineered for high-throughput packaging environments, SP Enterprises manufactures and supplies the full SAHPL packaging automation line. This includes fully automated carton folding and hot-melt glue machines as well as specialized 15-meter belt file conveyors, built with microsecond PLC precision controls to adjust glue gun timing, speeds, and carton sizes.",
    featuredClients: [
      "General Mills",
      "Valco Melton",
      "Navneet Industries",
      "Cummins Generator Technologies",
      "Mahindra Vehicle Manufacturers Ltd"
    ],
    featuredProducts: [
      {
        name: "Hot Melt Glue Machine for Food Cartons (Box Packaging Conveyor)",
        client: "General Mills & Valco Melton",
        tagline: "Totally Automated Folding, Hot-Melt Gluing & Sealing with Minimal Human Effort",
        image: "/manufacturing/products/box_packaging_glue_conveyor.jpg",
        description:
          "The Box Packaging Conveyor enables folding and packing cartons with hot-melt glue with very little help from human beings. It is a totally automated system where the operator only needs to place the carton box at the proper timing into the start tray. The rest of the work (automatic flap folding and glue dispensing) is completed automatically, delivering a fully packaged, tamper-evident carton box at the other side of the system. The machine is fully adjustable according to the sizes of boxes being packaged, with fast adjustment mechanisms provided to set box dimensions. The integrated PLC allows the operator to set packaging speed, startup timing, and shutdown timing for the glue gun.",
        specs: [
          { label: "Clients", value: "General Mills and Valco Melton" },
          { label: "Application", value: "Food Carton Packaging & Hot Melt Sealing" },
          { label: "Automation Level", value: "Totally automated (loading tray only, rest is auto)" },
          { label: "Control System", value: "PLC control with timing adjustment for glue gun" },
          { label: "Size Flexibility", value: "Adjustable settings for multiple box dimensions" }
        ],
        highlights: [
          "Operator only puts the box in the start tray at proper timing",
          "Automated mechanical flap folding and high-pressure glue bonding",
          "Fully adjustable to various carton sizes with quick changeover knobs",
          "Integrated PLC manages conveyor speed, glue gun start/end timing with microsecond accuracy"
        ]
      },
      {
        name: "15-Meter File Conveyor with Feeder & Glue Dispenser",
        client: "Navneet Industries",
        tagline: "Dual-Stage 15m Belt Conveyor with Up/Down Feeder & Sensor Glue Dropper",
        image: "/manufacturing/products/file_conveyor_15m.jpg",
        description:
          "Manufactured for Navneet Industries, this specialized 15-meter long belt conveyor ensures an easy, swift, and jam-free flow of stationery files. The automated system features two primary operational stages: 1] Automated Up-and-Down Feeder Station: The feeder moves vertically up and down to index and allow exactly one file at a time to proceed onto the belt. 2] Precision Glue Dropper Machine: Accurately dispenses adhesive drops onto specific file positions using high-speed optical sensor triggers.",
        specs: [
          { label: "Client", value: "Navneet Industries" },
          { label: "Total Length", value: "15 meters (15m) Belt Conveyor" },
          { label: "Conveyor Type", value: "Smooth continuous belt for easy and swift file flow" },
          { label: "Stage 1: Feeder", value: "Up and down mechanical motion to allow only 1 file" },
          { label: "Stage 2: Glue Dropper", value: "Sensor-based automated glue dispensing machine" }
        ],
        highlights: [
          "Continuous 15m run ensures high-speed stationery file processing",
          "Feeder moves up and down automatically to separate files and prevent double-feeding",
          "Optical sensor triggers glue dropper machine for exact adhesive placement",
          "Seamless flow from feeder belt conveyor to glue dispensing machine"
        ]
      },
      {
        name: "Roller-Based Packaging Conveyors",
        client: "Cummins Generator Technologies & Mahindra Vehicle Manufacturers Ltd",
        tagline: "Smooth Powered Roller Conveyors for Heavy Box Transfer & Line Feeding",
        image: "/manufacturing/products/roller_packaging_conveyor.jpg",
        description:
          "Continuous live roller packaging conveyor sections integrated with packing stations for Cummins and Mahindra automotive facilities, handling heavy parts boxes and crates.",
        specs: [
          { label: "Clients", value: "Cummins & Mahindra Vehicle Manufacturers Ltd" },
          { label: "Frame Construction", value: "Heavy-duty powder coated structural MS" },
          { label: "Roller Construction", value: "Galvanized / Stainless Steel rollers" }
        ],
        highlights: ["Zero-pressure accumulation logic", "Smooth handoff to packaging and palletizing stations", "Integrated emergency pull-cords"]
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
        name: "15m Belt File Conveyor with Up/Down Feeder & Glue Dispenser",
        client: "Navneet Industries",
        description:
          "High-speed 15-meter stationery file conveyor featuring an automated up-and-down single-file feeder and sensor-controlled glue dropper dispensing station.",
        specs: ["Client: Navneet Industries", "Total Length: 15 meters", "Stage 1: Up/Down Feeder", "Stage 2: Sensor-triggered Glue Dropper"]
      },
      {
        name: "Roller Based Conveyors for Heavy Carton Packaging",
        client: "Cummins Generator Technologies & Mahindra Vehicle Manufacturers Ltd",
        description:
          "Heavy roller conveyors designed for continuous handling of industrial crates, boxed automotive components, and generator sub-assemblies.",
        specs: ["Precision ball bearings", "VFD smooth speed control", "Emergency stop trip wires"]
      },
      {
        name: "Motorized Flap Compression & Curing Section",
        description:
          "Synchronized top and side compression belts applying uniform pressure while hot-melt or cold adhesive bonds, preventing spring-backs.",
        specs: ["Adjustable spring-loaded compression", "Non-marking silicone belt surfaces", "Variable speed matching upstream packer"]
      }
    ],
    specifications: [
      { label: "Manufacturing Division", value: "SP Enterprises (Handling SAHPL Product Portfolio)" },
      { label: "Key Clients", value: "General Mills, Valco Melton, Navneet Industries, Cummins, Mahindra" },
      { label: "Carton Size Range", value: "Fully adjustable according to box size (customizable tooling)" },
      { label: "Glue Dispensing", value: "Hot-melt glue gun (Valco Melton compatible) or cold glue dropper" },
      { label: "Control Architecture", value: "Integrated PLC with HMI for packaging speed, startup & end timing adjustments" },
      { label: "File Conveyor Length", value: "15 meters (15m continuous belt conveyor)" },
      { label: "Automation Level", value: "Operator loads start tray; folding, gluing, and discharge are 100% automated" }
    ],
    keyBenefits: [
      "Dramatically reduces manual labor and fatigue; operator simply places box in start tray",
      "Tamper-evident, high-integrity carton closure for food and pharmaceutical packages",
      "Quick adjustments provided to configure the machine according to various box sizes",
      "PLC control allows micro-timing tuning for adhesive start, duration, and shutoff"
    ],
    industriesServed: ["Food Cartons & Confectionery", "Publishing & Stationery (Navneet)", "Pharmaceutical Packaging", "Automobile Parts Packaging", "E-Commerce Fulfillment"]
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
      "Process & Pharmaceutical Plants",
      "Automotive & Chemical Plants"
    ],
    featuredProducts: [
      {
        name: "Hot Oil Unit With Heating System",
        tagline: "High-Temperature Closed-Loop Thermal Fluid System up to 250°C",
        image: "/manufacturing/products/hot_oil_heating_unit.jpg",
        description:
          "The Hot Oil Unit is engineered to deliver a dependable, continuous supply of high-temperature circulating thermal oil for specialized industrial process applications up to 250°C. By circulating heat transfer oil through a pressurized closed loop, the unit supplies consistent, high-efficiency thermal energy to chemical reactors, jacketed vessels, packaging lines, and heating platens without the high operating pressures and hazards of traditional steam boilers.\n\nThe thermal fluid is contained and heated within a heavy-gauge Stainless Steel SS 304 tank with a 150-liter capacity, insulated with high-density ceramic wool and encased in clean stainless steel cladding to minimize thermal radiation losses and safeguard shop-floor operators. A heavy-duty high-temperature centrifugal pump circulates the thermal oil through the closed loop at a continuous 1.0 Barg operating pressure and 1.2 M³/hr flow rate.\n\nHeating is powered by triple incoloy electric immersion heating elements rated at 3 kW each (9 kW total capacity), allowing staged or simultaneous firing for rapid, uniform thermal ramp-up. Process safety and precision temperature regulation are governed by a custom-built SP Enterprises automation control panel equipped with digital PID controllers, an automated low-level float switch, an independent over-temperature safety thermostat, and spring-loaded pressure relief valves.",
        specs: [
          { label: "Pump Pressure", value: "1.0 Barg" },
          { label: "Temperature Range", value: "90 to 250 °C" },
          { label: "MOC (Tank & Piping)", value: "Stainless Steel SS 304" },
          { label: "Tank Capacity", value: "150 Liters" },
          { label: "Pump Flow Rate", value: "1.2 M³/hr" },
          { label: "Heater Capacity", value: "3 X 3 KW (9 kW total)" },
          { label: "Thermal Insulation", value: "Ceramic Wool Insulation with SS cladding" },
          { label: "Control System", value: "Integrated Automation Control Panel" }
        ],
        highlights: [
          "SS304 tank insulated with high-grade ceramic wool prevents thermal radiation losses",
          "High-temperature pump circulates thermal fluid continuously at 1.0 Barg and 1.2 M³/hr",
          "Triple 3kW heating elements (3x3 kW) deliver rapid, uniform thermal rise up to 250°C",
          "Automated over-temperature cutout, low-level interlock, and pressure relief safety"
        ]
      },
      {
        name: "Continuous Hot Water Generation Unit",
        client: "Texol",
        tagline: "1000 LPH Flow Rate at 3 Bar g Pressure with ±2°C Precision PID Control",
        image: "/manufacturing/products/hot_water_generator_skid.jpg",
        description:
          "Custom-engineered and commissioned specifically for Texol, this skid-mounted Continuous Hot Water Generation Unit delivers an uninterrupted output of 1000 Liters Per Hour (LPH) of heated water at a steady 3 Bar g operating pressure. Built to satisfy stringent industrial and sanitary washdown and process blending demands, the system maintains steady thermal delivery even under varying intake water temperatures.\n\nThe heating chamber is powered by a high-capacity 30 kW electric heating bank comprised of 15 high-density incoloy immersion heaters (2 kW each), plus an integrated 2 kW spare heater allowing continuous production during routine element maintenance. Media heating is tightly regulated through advanced Thyristor / Solid State Relay (SSR) zero-cross firing paired with a precision PT-100 RTD temperature sensor and a digital PID controller, guaranteeing tight temperature accuracy within ±2.0°C without mechanical contactor arcing or electrical harmonics.\n\nOperator and facility protection is enforced through a multi-tier safety architecture. An independent high-limit electronic thermostat cuts main power if threshold temperatures are exceeded. An integrated in-line flow switch interlocks heater activation directly with positive water circulation to eliminate element dry-run burnout, complemented by a calibrated pressure safety valve (PSV) guarding the skid against hydraulic overpressure.",
        specs: [
          { label: "Client", value: "Texol" },
          { label: "Flow Rate Capacity", value: "1000 LPH (Liters Per Hour)" },
          { label: "Operating Pressure", value: "3 Bar g pressure" },
          { label: "Temperature Range", value: "Ambient to 95 °C (Working temp: 95 °C)" },
          { label: "Temperature Accuracy", value: "+/- 2.0 °C" },
          { label: "Temperature Controller", value: "Digital PID Controller" },
          { label: "Temperature Sensor", value: "PT-100 RTD Sensor" },
          { label: "Heating Power", value: "30 KW (2 kW X 15 nos) + 1 spare 2 kW heater" },
          { label: "Power Regulation", value: "Thyristor / SSR Solid-State Control" },
          { label: "Safety Protections", value: "Separate Electronic Thermostat, Pressure Safety Valve, Flow Switch" }
        ],
        highlights: [
          "Continuous 1000 LPH hot water delivery at steady 3 Bar g pressure",
          "30 kW primary heating bank (15 x 2kW) with 1 built-in 2kW spare heater for zero downtime",
          "Thyristor/SSR firing delivers exact ±2.0°C precision without contactor arcing",
          "Comprehensive safety: Flow switch interlock prevents dry-run; electronic thermostat prevents over-temp"
        ]
      },
      {
        name: "Industrial Paint Booth",
        client: "Cummins India Ltd., Phaltan",
        tagline: "Custom Machinery Enclosure Paint Booth with Rear Air Suction Blower",
        image: "/manufacturing/products/industrial_paint_booth.jpg",
        description:
          "Custom-engineered and supplied to Cummins India Ltd. at Phaltan, this Special Purpose Machinery Paint Booth is built for applying durable industrial coatings and precision paint finishes to diverse machine assemblies, heavy engine components, and fabrication structures under strict plant environmental standards.\n\nThe main internal painting chamber is constructed from certified AISI SS304 stainless steel sheets, providing a non-porous, corrosion-resistant interior surface that enables rapid cleaning of overspray, pigments, and chemical solvents. The external structural framework and reinforcement skeleton are fabricated from heavy-gauge mild steel (MS) sections, finished in industrial epoxy paint for long-term vibration dampening and structural rigidity.\n\nAir quality, laminar airflow, and operator safety are maintained via a high-capacity rear-mounted extraction suction blower. The blower pulls fresh air across the workspace through intake diffusion filters and draws overspray through high-efficiency multi-stage particulate arrestors, ensuring clean, continuous exhaust air discharge while preventing solvent accumulation inside the paint chamber.",
        specs: [
          { label: "Client", value: "Cummins India Ltd., Phaltan" },
          { label: "Application", value: "Special Purpose Application to paint different Machines" },
          { label: "Main Chamber MOC", value: "Stainless Steel SS 304" },
          { label: "Other Structure MOC", value: "Heavy-Gauge Mild Steel (MS)" },
          { label: "Ventilation", value: "High-capacity blower located at rear to suck outside air" }
        ],
        highlights: [
          "SS304 interior walls allow quick clean-up of paint overspray and solvents",
          "Rear suction blower ensures uniform laminar airflow across the workpiece",
          "Supplied to Cummins technology standards for durable machine finishing"
        ]
      },
      {
        name: "Air Incineration System",
        tagline: "350°C Thermal Bacteriophage Elimination System with >6 Second Residence",
        image: "/manufacturing/products/air_incineration_system.jpg",
        description:
          "The Air Incineration System is a high-temperature thermal sterilization unit specifically engineered for sterile biotechnology facilities, pharmaceutical fermentation suites, and critical biological containment zones. The system neutralizes airborne biological contaminants by raising process air to an extreme temperature of 350°C and maintaining that thermal state for a continuous duration exceeding 6 seconds.\n\nThis prolonged thermal holding residence completely eliminates the contamination of Bacteriophage Bacteria and other heat-resistant viral, spore, and bacterial pathogens before air is introduced into sterile bioreactors or exhausted to the atmosphere. The internal heating chamber is fabricated from high-temperature alloy steel lined with thick ceramic fiber insulation, engineered with internal baffling to prevent cold air channeling or thermal stratification.\n\nThermal generation is executed by specialized high-density electric incoloy heating elements managed by a digital PID controller. Multi-point thermal sensors continuously audit the residence chamber; automated safety interlocks prevent unsterilized process air discharge in the event of any temperature deviation below 350°C.",
        specs: [
          { label: "Operating Temperature", value: "350 °C (Degree Centigrade)" },
          { label: "Holding Residence Time", value: "Maintained more than 6 seconds (> 6 sec)" },
          { label: "Target Microorganism", value: "Elimination of Bacteriophage Bacteria contamination" },
          { label: "Heating Mechanism", value: "High-density electric incoloy heating elements" }
        ],
        highlights: [
          "Guaranteed biological sterilization for fermentation and biotech air streams",
          "Thermal holding chamber designed for zero temperature drop across the holding zone",
          "Fully automated temperature interlock preventing un-sterilized air discharge"
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
        name: "Hot Oil Unit with SS304 Insulated Heating System",
        description:
          "Closed-loop 90-250°C thermal oil heating skid with 1.0 Barg pump, 1.2 M³/hr flow, 150L SS304 ceramic-wool insulated tank, and 3x3 kW heating elements.",
        specs: ["Pump Pressure: 1.0 Barg", "Temp: 90 - 250 °C", "MOC: SS304", "Flow: 1.2 M³/hr", "Capacity: 150L", "Heaters: 3x3 KW"]
      },
      {
        name: "Continuous Hot Water Generation Unit (1000 LPH)",
        client: "Texol",
        description:
          "Continuous 1000 LPH hot water generator at 3 Bar g pressure with 30KW heaters (15x2kW + spare), ±2.0°C PID control, PT-100 sensor, and Thyristor/SSR regulation.",
        specs: ["Flow: 1000 LPH", "Pressure: 3 Bar g", "Temp: Ambient to 95°C", "Accuracy: ±2°C", "30kW Heaters + spare", "Thyristor control"]
      },
      {
        name: "Special Purpose Paint Booth for Machinery",
        client: "Cummins India Ltd., Phaltan",
        description:
          "Industrial spray painting booth with SS304 main chamber, MS structural framework, and high-flow rear extraction blower for painting heavy equipment.",
        specs: ["Client: Cummins India Ltd., Phaltan", "Main Chamber: SS304", "Structure: MS", "Rear suction blower"]
      },
      {
        name: "Air Incineration System (350°C, >6 Seconds)",
        description:
          "High-temperature thermal air sterilization unit heating air to 350°C for >6 seconds to neutralize Bacteriophage Bacteria in sterile biotech air streams.",
        specs: ["Sterilization Temp: 350 °C", "Holding Time: > 6 seconds", "Eliminates Bacteriophage Bacteria"]
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
      { label: "Hot Oil Temp Range", value: "90°C to 250°C (1.0 Barg, 1.2 M³/hr, 150L SS304 Tank, 3x3 kW)" },
      { label: "Hot Water Capacity", value: "1000 LPH at 3 Bar g (Working Temp 95°C ± 2°C, 30 kW heaters)" },
      { label: "Incinerator Temp", value: "350°C maintained for more than 6 seconds (>6 sec)" },
      { label: "Paint Booth MOC", value: "SS304 Main Chamber with MS structure and rear exhaust blower" },
      { label: "Control System", value: "Custom PID / PLC Automation Panels with Thyristor / SSR solid-state firing" }
    ],
    keyBenefits: [
      "Custom-tailored machinery solutions built precisely around client process parameters",
      "Field-proven in critical applications at Cummins India (Phaltan) and Texol",
      "Full adherence to cGMP, pressure vessel safety, and thermal insulation protocols",
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
