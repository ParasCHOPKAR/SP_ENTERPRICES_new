export interface ManufacturingItem {
  id: string;
  title: string;
  shortTitle: string;
  tagline: string;
  badge: string;
  iconName: string;
  description: string;
  capabilities: {
    name: string;
    description: string;
    specs: string[];
  }[];
  specifications: {
    label: string;
    value: string;
  }[];
  keyBenefits: string[];
  industriesServed: string[];
}

export const MANUFACTURING_DATA: ManufacturingItem[] = [
  {
    id: "control-panels",
    title: "Industrial Control Panels (PCC, MCC, PLC, VFD & Instrumentation)",
    shortTitle: "Control Panels",
    tagline: "Custom-Engineered Type-Tested Electrical & Automation Enclosures",
    badge: "In-House Manufacturing",
    iconName: "Cpu",
    description:
      "SP Enterprises designs, fabricates, wires, and tests high-performance Industrial Control Panels tailored to rigorous IEC and IS standards. From high-capacity Power Control Centers to precision PLC/VFD automation racks, our panels are engineered for optimal thermal management, safety, and longevity.",
    capabilities: [
      {
        name: "Power Control Centers (PCC)",
        description:
          "Main LT power distribution panels designed for incoming power up to 6300A with Air Circuit Breakers (ACB), bus coupler configurations, and comprehensive digital power metering.",
        specs: ["Current Rating: up to 6300 Amps", "Short Circuit Withstand: up to 65kA for 1 sec", "Form 3b / Form 4b segregation", "Electrolytic grade high-conductivity copper/aluminium busbars"]
      },
      {
        name: "Motor Control Centers (MCC)",
        description:
          "Drawout and fixed-type motor control panels housing DOL starters, Star-Delta starters, and soft starters with intelligent motor protection relays (IMPR) and central SCADA connectivity.",
        specs: ["Drawout & Non-Drawout designs", "Intelligent Motor Protection & Communication", "Individual feeder compartmentalization", "Rapid maintenance disconnects"]
      },
      {
        name: "PLC Automation & SCADA Control Panels",
        description:
          "Custom automation panels integrating leading PLCs (Siemens, Rockwell, Honeywell, Renu, Emerson) with touchscreen HMIs, isolated signal conditioning, and clean DIN-rail wire management.",
        specs: ["Integrated 24VDC regulated power architecture", "Surge and optical channel isolation", "Color-coded ferruling and comprehensive schematic documentation", "Vibration-damped internal chassis"]
      },
      {
        name: "Variable Frequency Drive (VFD) Panels",
        description:
          "Dedicated drive panels for energy conservation and motor speed control across pumps, fans, conveyors, and extruders, fitted with heavy-duty cooling fans, line chokes, and dynamic braking resistors.",
        specs: ["Drive ratings from 0.75 kW to 500+ kW", "Harmonic filters & dV/dt output reactors", "Thermostatically controlled panel cooling / heat exchanger units", "Bypass contactor arrangements"]
      },
      {
        name: "Instrumentation & Purge Panels",
        description:
          "Specialized control cabinets for process plants, chemical refineries, and hazardous zones featuring pneumatic manifolds, temperature controllers, barrier relays, and pressurized purge systems.",
        specs: ["Flameproof Ex-d & pressurized Ex-p purge certification ready", "Stainless steel SS 304/316 enclosure options", "IP55 / IP65 / IP66 ingress protection ratings"]
      }
    ],
    specifications: [
      { label: "Fabrication Standard", value: "IS 8623 / IEC 61439 Type Tested" },
      { label: "Sheet Metal Construction", value: "CRCA Sheet 1.6mm / 2.0mm or Stainless Steel (SS304/316)" },
      { label: "Surface Finish", value: "7-Tank pre-treatment with 80-100 micron electrostatic powder coating" },
      { label: "Ingress Protection", value: "IP54, IP55, IP65, IP66 rated with polyurethane gasket sealing" },
      { label: "Busbar System", value: "High conductivity ETP grade Copper / Aluminium with heat-shrinkable sleeves" }
    ],
    keyBenefits: [
      "Rigorous pre-dispatch testing: High voltage test, insulation resistance, and 100% point-to-point continuity check",
      "Modular expandable frame structures for seamless future bay extensions",
      "Ergonomic layout ensuring effortless field cable termination and maintenance access",
      "Complete CAD electrical schematics, bill of materials, and terminal charts provided"
    ],
    industriesServed: ["Heavy Manufacturing", "Chemical & Petrochemical", "Pharmaceuticals", "Water Treatment & Desalination", "Paper & Cement Mills", "Automotive Plants"]
  },
  {
    id: "material-handling",
    title: "Material Handling Automation Systems",
    shortTitle: "Material Handling",
    tagline: "Turn-key Automated Conveying, Sorting, Gantry & Palletizing Lines",
    badge: "Automation Engineering",
    iconName: "Truck",
    description:
      "We design and build bespoke material handling automation systems that streamline manufacturing workflows, eliminate bottlenecks, and maximize warehouse throughput. Our solutions integrate robust structural engineering with intelligent sensor feedback and PLC supervisory control.",
    capabilities: [
      {
        name: "Automated Roller, Belt & Slat Conveyors",
        description:
          "Heavy-duty powered roller conveyors, modular plastic belt lines, and stainless steel slat chain systems customized for cartons, crates, totes, and heavy industrial pallets.",
        specs: ["Variable speed AC gearmotor drives", "Accumulation zero-pressure (ZPA) roller zones", "Sensor-triggered auto start/stop power-saving logic"]
      },
      {
        name: "Vertical Reciprocating Conveyors (Lifts)",
        description:
          "Continuous and reciprocating vertical freight lifters for seamless multi-floor material transfer with certified fail-safe anti-drop mechanisms.",
        specs: ["Payload capacity up to 2000 kg", "Smooth servo/hydraulic lifting profiles", "Safety interlocking interlocked light curtains"]
      },
      {
        name: "Automated Transfer Cars & Turntables",
        description:
          "Rail-guided transfer trolleys and 90°/180° bidirectional motorized turntables enabling complex cross-directional routing.",
        specs: ["Precision mechanical positioning indexing", "Integrated proximity and optical positioning sensors", "Touchscreen local operator console"]
      },
      {
        name: "Gantry Pick-and-Place & Sorting Systems",
        description:
          "Cartesian 2-axis and 3-axis automated gantry robots equipped with vacuum suction or mechanical grippers for rapid line loading, sorting, and end-of-line palletizing.",
        specs: ["High-speed servo motion control", "Barcode / RFID scanner integration", "Customizable gripper end-effectors"]
      }
    ],
    specifications: [
      { label: "Frame Construction", value: "Heavy-duty MS Powder Coated structural channel or Stainless Steel (SS304)" },
      { label: "Drive Systems", value: "SEW / Bonfiglioli / Nord geared motors with VFD smooth ramp control" },
      { label: "Control Platform", value: "Siemens / Allen-Bradley / Renu PLC with color touch HMI" },
      { label: "Safety Compliance", value: "ISO 13849-1 category safety interlocks & emergency pull-cord switches" },
      { label: "Throughput Capacity", value: "Engineered to client cycle times (up to 60+ units/minute)" }
    ],
    keyBenefits: [
      "Substantial reduction in manual handling fatigue, breakages, and workplace injuries",
      "Real-time track-and-trace with central SCADA integration and barcode tally",
      "Compact footprint engineered to fit existing plant layouts and tight corridors",
      "Rugged components chosen for 24/7 continuous industrial duty cycle"
    ],
    industriesServed: ["Warehousing & Distribution", "Automotive Assemblies", "Food & Beverage Packaging", "Pharmaceutical Warehouses", "Consumer Goods (FMCG)"]
  },
  {
    id: "glue-conveyors",
    title: "Glue Conveyor Systems for Box Packing",
    shortTitle: "Glue Conveyors",
    tagline: "High-Speed Automated Hot-Melt & Cold Glue Sealing Lines",
    badge: "Specialized Packaging Machine",
    iconName: "Boxes",
    description:
      "Engineered specifically for packaging lines, our Glue Conveyor Systems automate carton folding, precision hot-melt or cold adhesive application, flap compression, and discharge. Designed for high-speed continuous packaging without adhesive mess or weak seals.",
    capabilities: [
      {
        name: "High-Speed Infeed & Flap Folding Station",
        description:
          "Synchronized side guide belts and aerodynamic mechanical folding arms that smoothly tuck leading, trailing, and side carton flaps at high speed without jamming.",
        specs: ["Continuous carton infeed synchronization", "Adjustable handwheels for ultra-fast size changeover (< 5 minutes)", "Optical sensors detect misplaced or open flaps"]
      },
      {
        name: "Precision Adhesive Dispensing Integration",
        description:
          "Seamless integration with hot-melt glue applicators (Nordson, Robatech, or equivalent) or cold glue extrusion guns with high-frequency solenoid valves.",
        specs: ["Encoder-linked dot or stitch glue bead profiling", "Eliminates glue overspray and dripping", "Significant reduction in glue consumption (up to 35% savings)"]
      },
      {
        name: "Motorized Flap Compression Section",
        description:
          "Twin synchronized top-and-bottom compression belts that hold carton flaps firmly under uniform pressure while the adhesive cures, guaranteeing 100% bond integrity.",
        specs: ["Adjustable spring-loaded pressure rollers", "Gentle handling prevents crushing corrugated fluting", "Variable belt speeds matched to upstream case packers"]
      },
      {
        name: "Automatic Reject & Inspection Mechanism",
        description:
          "Pneumatic pusher or drop-down gate that diverts improperly glued or unsealed cartons to a secondary inspection lane without halting line production.",
        specs: ["Sensor-verified carton closure", "Audible and visual tower beacon alert", "Historical reject count logging on HMI"]
      }
    ],
    specifications: [
      { label: "Carton Size Range", value: "Length: 150-600mm | Width: 120-450mm | Height: 100-500mm (Customizable)" },
      { label: "Sealing Speed", value: "Up to 30 - 60 boxes per minute (depending on box dimensions)" },
      { label: "Glue Type Compatibility", value: "Hot-Melt EVA / Metallocene or Water-based Cold PVA glue" },
      { label: "Power Supply", value: "415V AC, 3-Phase, 50Hz (Approx. 3.5 kW with glue unit)" },
      { label: "Pneumatic Requirement", value: "6 bar dry compressed air, 50 L/min" }
    ],
    keyBenefits: [
      "Consistent, tamper-evident carton seals that withstand rigorous shipping stresses",
      "Major labor cost savings by automating manual taping or manual glue brushing",
      "Clean industrial design preventing adhesive accumulation on machine beds",
      "Intuitive HMI with stored recipes for various carton SKUs"
    ],
    industriesServed: ["Pharmaceutical Box Packing", "Food & Confectionery", "Cosmetics & Personal Care", "E-Commerce Logistics", "Consumer Electronics", "Footwear & Textiles"]
  },
  {
    id: "ss-fabrication",
    title: "SS Fabrication & SS Pharma Furniture",
    shortTitle: "SS Fabrication & Pharma",
    tagline: "cGMP Sanitary Stainless Steel Cleanroom Equipment & Furniture",
    badge: "Pharma Grade SS 304 / 316",
    iconName: "Shield",
    description:
      "SP Enterprises delivers premium stainless steel fabrication and custom-built cleanroom furniture engineered strictly according to current Good Manufacturing Practices (cGMP). Fabricated from certified SS 304 and SS 316/316L, our furniture features crevice-free seamless welds, radiused corners, and satin/mirror finishes.",
    capabilities: [
      {
        name: "cGMP Pharma Working & Inspection Tables",
        description:
          "Heavy-duty stainless steel workbenches, visual inspection tables with under-counter lighting, and computer workstations designed for sterile cleanroom production suites.",
        specs: ["Grade: Certified AISI 304 / AISI 316", "Crevice-free TIG welded construction", "Underside acoustic dampening insulation", "Adjustable anti-vibration levelling studs"]
      },
      {
        name: "Cleanroom Garment Lockers & Cross-Over Benches",
        description:
          "Shoe change crossover benches (barrier benches) and cleanroom apparel lockers with sloped tops to prevent dust accumulation, with optional laminar HEPA ventilation.",
        specs: ["Sloped top design prevents dust settlement", "Perforated or solid SS shelving", "Individual key locks or magnetic catches"]
      },
      {
        name: "SS Storage Cabinets, Sinks & Scrub Stations",
        description:
          "Sanitary tool storage cupboards, mobile tool trolleys, surgical hand scrub sinks with knee-operated / sensor-operated water and soap dispensers.",
        specs: ["Touchless sensor / foot pedal operation", "Integrated splashbacks and radius coved corners", "Mirror (Ra < 0.4µm) or satin electro-polished finish"]
      },
      {
        name: "Custom SS Vessels, Hoppers & Sanitary Skids",
        description:
          "Custom stainless steel pressure vessels, blending hoppers, CIP/SIP manifold skids, and sanitary process pipe spools.",
        specs: ["100% argon purged orbital TIG welding", "Passivated and electro-polished surfaces", "Full material test certificates (MTC 3.1) provided"]
      }
    ],
    specifications: [
      { label: "Material Grades", value: "Stainless Steel AISI 304, AISI 316, and AISI 316L" },
      { label: "Surface Roughness", value: "Ra < 0.4 µm (Electro-polished) / Ra < 0.8 µm (Matte 240 Grit)" },
      { label: "Welding Technique", value: "100% TIG welding with Argon shielding, ground smooth and flush" },
      { label: "Sanitary Coving", value: "Internal corners rounded with minimum R10/R15 radius to prevent bacterial traps" },
      { label: "Documentation", value: "Material Test Certificates (MTC), Finish Test reports, and DQ/IQ documentation" }
    ],
    keyBenefits: [
      "100% non-corrosive and highly resistant to aggressive sterilizing chemicals (IPA, Spor-Klenz, H2O2)",
      "Zero dead pockets, open hollow sections, or unsealed joints compliant with USFDA and EU-GMP audits",
      "Ergonomically engineered for operator comfort during long production shifts",
      "Custom manufactured to exact cleanroom layout dimensions and weight ratings"
    ],
    industriesServed: ["Sterile Pharmaceutical Formulations", "Biotechnology & Vaccines", "Active Pharmaceutical Ingredients (API)", "Food Processing & Dairy", "Medical Device Cleanrooms"]
  }
];
