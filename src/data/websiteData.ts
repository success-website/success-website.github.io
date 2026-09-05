export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  specs: string[];
  materials: string[];
  defaultImg: string;
  hoverImg: string;
  hallOrBay: string;
  tag: string;
}

export interface ClientItem {
  name: string;
  category: string;
  logo: string;
  relationship: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: string;
  readTime: string;
  image: string;
}

export interface StackingCardItem {
  id: number;
  title: string;
  subtitle: string;
  highlight: string;
  text: string;
  points: string[];
  badge: string;
}

export const COMPANY_INFO = {
  name: "Success Engineering Enterprises",
  tagline: "Press & Precision Manufacturing for Over 20 Years",
  heroSubtitle: "WHEN PRECISION MEETS EXCELLENCE",
  establishedYear: "2004",
  yearsExperience: "20+",
  certifications: ["ISO 9001:2015 Certified", "Certified by UCAS India Pvt. Ltd."],
  address: "DP-S-67, SIDCO Industrial Estate, Kakkalur, Tiruvallur - 602 003, Tamil Nadu, India",
  googleMapsUrl: "https://maps.google.com/?q=DP-S-67+C,+SIDCO+INDUSTRIAL+ESTATE,+KAKKALORE,+TIRUVALLUR,+CH+-+602003",
  phone: "+91 - 7871642053",
  phoneDisplay: "+91 78716 42053",
  emails: [
    "success.engineering@hotmail.com",
    "solutions.successengineering@gmail.com"
  ],
  stats: [
    { label: "Years of Industrial Mastery", value: "20+" },
    { label: "Precision Machining Bays", value: "5 Units" },
    { label: "Global & OEM Clients", value: "150+" },
    { label: "ISO Quality Compliance", value: "100%" }
  ]
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "fabrication",
    number: "01",
    title: "Heavy & Precision Metal Fabrication",
    category: "Fabrication",
    shortDesc: "End-to-end structural, sheet metal, and architectural welding fabrication engineered to exact tolerances.",
    fullDesc: "Success Engineering Enterprises provides world-class industrial welding and fabrication solutions. Leveraging state-of-the-art TIG, MIG, and robotic welding fixtures, our fabrication bay handles structural steel, stainless steel, and aluminum components with supreme weld integrity and dimensional accuracy.",
    specs: [
      "High-tonnage hydraulic bending & shearing",
      "Certified TIG / MIG / Arc welding stations",
      "Custom laser-guided weld jigs & positioners",
      "Non-destructive testing (NDT) ready"
    ],
    materials: ["Mild Steel (IS 2062)", "Stainless Steel (SS304, SS316)", "Aluminum Alloys", "Corten Steel"],
    defaultImg: "/images/1.png",
    hoverImg: "/images/1_hover.png",
    hallOrBay: "Bay 1 • Fabrication",
    tag: "High Demand"
  },
  {
    id: "metal-parts",
    number: "02",
    title: "Precision Metal Parts & Stamping",
    category: "Metal Parts",
    shortDesc: "High-volume precision press components, stamping parts, and tight-tolerance turned hardware.",
    fullDesc: "Our heavy-duty power press lines and hydraulic stamping machinery deliver uniform, high-repeatability metal parts for automotive, heavy equipment, and industrial infrastructure. From deep draw components to intricate brackets, we meet the tightest micron tolerances.",
    specs: [
      "Mechanical & hydraulic press lines from 20T to 250T",
      "Progressive stamping tooling capabilities",
      "Automated de-coiling and precision feeder systems",
      "Deburring, chamfering, and automated vibro-finishing"
    ],
    materials: ["Cold Rolled Steel (CRCA)", "Hot Rolled Steel (HR)", "Brass & Copper alloys", "Spring Steel"],
    defaultImg: "/images/2.png",
    hoverImg: "/images/2_hover.png",
    hallOrBay: "Bay 2 • Stamping",
    tag: "Automotive OEM"
  },
  {
    id: "assembly",
    number: "03",
    title: "Sub-Assembly & Turnkey Integration",
    category: "Assembly",
    shortDesc: "Complete mechanical assembly, sub-system integration, electro-mechanical testing, and finished crating.",
    fullDesc: "We eliminate multi-vendor friction by providing single-source assembly lines. Our clean assembly cells integrate stamped parts, welded frames, fasteners, hardware, and surface-treated enclosures into ready-to-mount sub-assemblies for tier-1 manufacturers.",
    specs: [
      "Pneumatic torque-monitored fastening stations",
      "Modular lean sub-assembly lines with Poka-Yoke error proofing",
      "In-line functional and dimensional validation",
      "Custom export packaging, crating & RFID tagging"
    ],
    materials: ["Multi-material mechanical assemblies", "Fastener integration", "Gaskets & Seals", "Powder-coated enclosures"],
    defaultImg: "/images/3.png",
    hoverImg: "/images/3_hover.png",
    hallOrBay: "Bay 3 • Integration",
    tag: "Turnkey Ready"
  },
  {
    id: "design",
    number: "04",
    title: "Engineering Design & Prototyping",
    category: "Design",
    shortDesc: "CAD/CAM engineering, rapid prototyping, DFM (Design for Manufacturability), and FEA stress analysis.",
    fullDesc: "Bridging the gap between initial concept sketches and mass production. Our in-house engineering team works directly with client design teams to optimize geometries, minimize scrap material, and accelerate tooling development from 3D CAD modeling to functional prototypes.",
    specs: [
      "Advanced SolidWorks, AutoCAD & CATIA engineering",
      "Finite Element Analysis (FEA) for stress & fatigue",
      "Rapid prototyping turnaround within 72-96 hours",
      "Reverse engineering & CMM dimensional verification"
    ],
    materials: ["3D Digital Twins", "Prototype tooling alloys", "Structural mockups"],
    defaultImg: "/images/4.png",
    hoverImg: "/images/4_hover.png",
    hallOrBay: "Bay 4 • Tech Center",
    tag: "Innovation"
  },
  {
    id: "tools",
    number: "05",
    title: "Press Tools, Jigs & Fixture Tooling",
    category: "Tools & Dies",
    shortDesc: "Design and manufacturing of progressive dies, compound press tools, inspection gauges, and welding jigs.",
    fullDesc: "With over two decades of specialized toolroom expertise, we build world-class tooling designed for millions of cycles without degradation. Our high-precision die-making shop utilizes wire cut EDM, surface grinding, and CNC machining centers.",
    specs: [
      "Progressive, compound & transfer die systems",
      "Hardened D2, D3, and HCHCR tool steel components",
      "Custom welding fixtures with pneumatic clamping",
      "Go / No-Go inspection gauges & coordinate checking fixtures"
    ],
    materials: ["Die Steels (D2, D3, HCHCR)", "High-Speed Steel (HSS)", "Carbide inserts", "Hard chrome plating"],
    defaultImg: "/images/5.png",
    hoverImg: "/images/5_hover.png",
    hallOrBay: "Bay 5 • Toolroom",
    tag: "20+ Yrs Specialty"
  }
];

export const STACKING_CARDS: StackingCardItem[] = [
  {
    id: 1,
    title: "5 Advanced Manufacturing Bays",
    subtitle: "End-to-End Industrial Capacity",
    highlight: "Over 25,000 sq.ft of specialized manufacturing floor space",
    text: "Located in the industrial hub of SIDCO Kakkalur, our campus houses dedicated bays for heavy welding, high-tonnage stamping, specialized tool & die manufacturing, precision machining, and turnkey assembly. No project is too complex or demanding.",
    points: [
      "Bays 1-5 with dedicated overhead crane lifting facilities",
      "Power press banks ranging from 20 to 250 tons",
      "Dedicated CNC bending, shearing, and laser preparation stations",
      "Synchronized material flow and Kanban inventory systems"
    ],
    badge: "Infrastructure"
  },
  {
    id: 2,
    title: "ISO 9001:2015 Certified Quality",
    subtitle: "Audited & Certified by UCAS India",
    highlight: "Zero-defect philosophy with rigorous traceability",
    text: "Quality is not merely an inspection step—it is engineered into every stage of our workflow. Certified under ISO 9001:2015 by UCAS India Pvt. Ltd., our quality control laboratory conducts raw material spectrometry, tensile verification, dimensional CMM auditing, and salt-spray testing.",
    points: [
      "100% incoming raw material test certificate validation",
      "In-process statistical process control (SPC) charts",
      "Micro-calibrated verniers, height gauges & digital micrometers",
      "Comprehensive PPAP (Production Part Approval Process) documentation"
    ],
    badge: "Quality Assurance"
  },
  {
    id: 3,
    title: "Prototype to High-Volume Production",
    subtitle: "Single-Source Manufacturing Partner",
    highlight: "Cutting lead times by up to 40% with unified engineering",
    text: "By integrating CAD/CAM design, in-house tooling, stamping, welding, finishing, and packaging under one roof, we eliminate intermediate vendor markups and transit delays. We take your idea from initial napkin sketch to container shipments with guaranteed delivery dates.",
    points: [
      "Rapid prototype development within days",
      "Seamless scale-up to 500,000+ parts per month",
      "Dedicated engineering project manager for every client",
      "Just-in-Time (JIT) delivery to automotive & heavy OEM assembly lines"
    ],
    badge: "Turnkey Advantage"
  },
  {
    id: 4,
    title: "Strategic SIDCO Industrial Hub",
    subtitle: "Rapid Connectivity to Chennai Seaport & Airports",
    highlight: "Direct logistics access to highway corridors and international ports",
    text: "Situated in SIDCO Industrial Estate, Kakkalur, Tiruvallur, we are strategically positioned along the Chennai-Bengaluru industrial corridor. With direct access to Chennai Port, Ennore Port, and Chennai International Airport, our global export shipments move seamlessly.",
    points: [
      "Proximity to Chennai Automotive Cluster (Oragadam & Sriperumbudur)",
      "Daily logistics dispatches across South India and pan-India corridors",
      "International sea-freight crating conforming to ISPM-15 standards",
      "Dedicated logistics dock with 24/7 security and loading ramps"
    ],
    badge: "Strategic Location"
  }
];

export const CLIENTS_DATA: ClientItem[] = [
  { name: "Godrej", category: "Appliances & Consumer Goods", logo: "/images/Godrej-Logo.png", relationship: "Precision Sheet Metal & Stamped Hardware" },
  { name: "Johnson Lifts", category: "Vertical Transportation", logo: "/images/johnson_logo.jpeg", relationship: "Structural Elevator Brackets & Guides" },
  { name: "Schwing Stetter", category: "Construction Machinery", logo: "/images/schwing_logo.png", relationship: "Heavy Fabricated Welded Chassis & Sub-assemblies" },
  { name: "Rane TRW", category: "Automotive Safety Systems", logo: "/images/rane_trw_logo.jpeg", relationship: "Precision Stamped Safety Components" },
  { name: "Lotte", category: "Industrial & Food Processing", logo: "/images/lotte_logo.png", relationship: "Stainless Steel Fabrication & Components" },
  { name: "Cooper Standard", category: "Automotive Systems", logo: "/images/cooper_logo.png", relationship: "Tooling & Custom Stamped Brackets" },
  { name: "Oilfield Instrumentation", category: "Energy & Petroleum", logo: "/images/oilfield_logo.png", relationship: "High-Tolerance Machined Parts" },
  { name: "TL India", category: "Industrial Solutions", logo: "/images/tl_india_logo.png", relationship: "Fabricated Assemblies & Pressings" }
];

export const NEWS_DATA: NewsItem[] = [
  {
    id: "new-hydraulic-press",
    title: "Success Engineering Expands High-Tonnage Press Line to 250T",
    date: "18.08.2026",
    category: "Infrastructure",
    excerpt: "Commissioning of new automated hydraulic press lines boosts deep-draw stamping volume by 45% for automotive clients.",
    content: "To cater to burgeoning demand from automotive safety and chassis manufacturers, Success Engineering has commissioned its newest 250-ton hydraulic press system equipped with automated decoiler and programmable servo feeders.",
    readTime: "3 min read",
    image: "/images/Metalplates.png"
  },
  {
    id: "iso-recertification",
    title: "Success Engineering Enterprise Renews ISO 9001:2015 with Perfect Audit Score",
    date: "22.06.2026",
    category: "Quality",
    excerpt: "UCAS India Pvt. Ltd. completes annual surveillance audit, praising digital tracking and zero-defect calibration protocols.",
    content: "Following a comprehensive 4-day on-site inspection of our toolrooms, welding stations, and quality laboratories, UCAS India Pvt. Ltd. reaffirmed our ISO 9001:2015 certification with zero non-conformances.",
    readTime: "4 min read",
    image: "/images/ISO_LOGO.png"
  },
  {
    id: "sustainable-manufacturing",
    title: "Green Metallurgy: Transitioning to 100% Recycled Scrap Scrap-Loop Systems",
    date: "10.05.2026",
    category: "Sustainability",
    excerpt: "Our SIDCO Kakkalur facility achieves a 98.4% metal scrap recycling rate through closed-loop baling partnerships.",
    content: "As part of our commitment to sustainable industrial production, Success Engineering has implemented an automated scrap sorting and baling system that recycles all stamping off-cuts into virgin steel production mills.",
    readTime: "3 min read",
    image: "/images/Homepage_img.jpg"
  }
];

export const GALLERY_IMAGES = [
  {
    src: "/images/Homepage_img.jpg",
    title: "High-Precision Tooling & Production Bay",
    desc: "Active manufacturing cell featuring automated press lines and calibrated fixtures."
  },
  {
    src: "/images/Metalplates.png",
    title: "Calibrated Sheet Metal Stamping & Finishing",
    desc: "Precision laser-cut and stamped structural plates awaiting surface treatment."
  },
  {
    src: "/images/1.png",
    title: "Industrial Welding & Fabrication Bay",
    desc: "Heavy-duty MIG/TIG welding station with high-tensile joint verification."
  },
  {
    src: "/images/2.png",
    title: "Precision Press Stamped Metal Parts",
    desc: "High-volume automotive brackets and structural components."
  },
  {
    src: "/images/3.png",
    title: "Clean Mechanical Sub-Assembly Cells",
    desc: "Lean integration lines incorporating hardware insertion and testing."
  },
  {
    src: "/images/5.png",
    title: "Tool & Die Engineering Toolroom",
    desc: "Hardened alloy progressive dies engineered for multi-million cycle runs."
  }
];
