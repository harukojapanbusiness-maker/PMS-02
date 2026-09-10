// ============================================================
// POWER MANAGEMENT SOLUTIONS - CENTRALIZED DATA FILE
// ============================================================
// INSTRUCTIONS: Edit this file to add/update/remove projects,
// change seasonal banners, and manage company information.
// No coding knowledge required - just update the values below.
// ============================================================

export interface Project {
  id: string;
  title: string;
  category: string;
  subcategory: string;
  description: string;
  shortDescription: string;
  location: string;
  client: string;
  year: number;
  status: 'Completed' | 'Ongoing' | 'Upcoming' | 'Proposal';
  specifications: {
    label: string;
    value: string;
  }[];
  images: string[];
  scope: {
    quantity: number;
    unit: string;
    maxQuantity: number;
  };
  budget: string;
  tags: string[];
}

export interface HeroBanner {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  season: string;
  active: boolean;
}

export interface CompanyInfo {
  name: string;
  type: string;
  yearEstablished: string;
  headOffice: string;
  cells: string[];
  email: string;
  incorporationNumber: string;
  vatRegistration: string;
  tradeLicense: string;
  tinNumber: string;
  electricalBoardLicense: string;
  bankName: string;
  bankBranch: string;
}

// ============================================================
// COMPANY INFORMATION
// ============================================================
export const companyInfo: CompanyInfo = {
  name: "Power Management Solutions",
  type: "Engineering Consultations Firm",
  yearEstablished: "2010 (Partnership) | 2014 (Private Limited)",
  headOffice: "667/5, Gabtola, Mogbazar, Dhaka Uttar City Corporation, Dhaka-1215",
  cells: ["+880 1818-560316", "+880 1711-134359"],
  email: "power.managmentsolution2025@gmail.com",
  incorporationNumber: "C-114998/14",
  vatRegistration: "9061025743",
  tradeLicense: "03-284190, Date: 01/02/2010",
  tinNumber: "547303954878",
  electricalBoardLicense: "Category A, B, C",
  bankName: "Dhaka Bank",
  bankBranch: "Mirpur-10 Branch, Dhaka"
};

// ============================================================
// SEASONAL HERO BANNERS
// ============================================================
// To change the seasonal banner, set 'active: true' for the
// banner you want to display. Only one should be active at a time.
// ============================================================
export const heroBanners: HeroBanner[] = [
  {
    id: "banner-spring-2025",
    title: "Powering Bangladesh's Future",
    subtitle: "Engineering Excellence Since 2010",
    description: "Delivering world-class power generation, sub-station, and industrial engineering solutions across Bangladesh with precision and dedication.",
    imageUrl: "https://image.qwenlm.ai/generated-images/f4dde0d1-f0b0-492b-af0c-c23ebb663298/_result.png",
    season: "Spring 2025",
    active: true
  },
  {
    id: "banner-summer-2025",
    title: "Building Infrastructure That Lasts",
    subtitle: "Power | Telecom | Civil Engineering",
    description: "From power plants to telecom infrastructure, we deliver comprehensive engineering solutions with unwavering commitment to quality.",
    imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80",
    season: "Summer 2025",
    active: false
  },
  {
    id: "banner-winter-2025",
    title: "Committed to National Development",
    subtitle: "Skilled Manpower | Modern Technology",
    description: "Leveraging Bangladesh's skilled workforce and modern technology to drive rapid economic development through quality engineering.",
    imageUrl: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1920&q=80",
    season: "Winter 2025",
    active: false
  }
];

// ============================================================
// PROJECTS & PRODUCTS DATA
// ============================================================
// Add new projects by copying an existing entry and modifying values.
// Categories: "Power", "Civil", "Telecom", "Garments Tech Packs", "Sub-Station", "Industrial"
// Status: "Completed", "Ongoing", "Upcoming", "Proposal"
// ============================================================
export const projects: Project[] = [
  {
    id: "proj-001",
    title: "132kV GIS Substation - Dhaka Division",
    category: "Sub-Station",
    subcategory: "Gas Insulated Switchgear",
    description: "Complete design, erection, installation and commissioning of a 132kV Gas Insulated Substation (GIS) for the Dhaka Electric Distribution Company. The project includes civil works, foundation design, equipment installation, testing, and commissioning of all sub-systems. Our team managed the entire lifecycle from conceptualization to handover, ensuring compliance with international safety standards and Bangladesh Power Development Board specifications.",
    shortDescription: "Complete 132kV GIS substation design, installation & commissioning for Dhaka DESCO.",
    location: "Dhaka, Bangladesh",
    client: "Dhaka Electric Supply Company (DESCO)",
    year: 2024,
    status: "Completed",
    specifications: [
      { label: "Voltage Level", value: "132kV / 33kV / 11kV" },
      { label: "Transformer Capacity", value: "2 × 50 MVA" },
      { label: "Switchgear Type", value: "GIS (Gas Insulated)" },
      { label: "Protection System", value: "Numerical Relay Based" },
      { label: "SCADA Integration", value: "Yes - Remote Monitoring" },
      { label: "Civil Structure", value: "Reinforced Concrete Frame" },
      { label: "Duration", value: "18 Months" }
    ],
    images: [
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
    ],
    scope: { quantity: 1, unit: "Substation", maxQuantity: 5 },
    budget: "৳ 45,00,00,000",
    tags: ["GIS", "132kV", "Substation", "Power Distribution"]
  },
  {
    id: "proj-002",
    title: "RMG Factory Electrical Infrastructure",
    category: "Garments Tech Packs",
    subcategory: "Industrial Electrical Systems",
    description: "Comprehensive electrical infrastructure design and installation for a leading Ready-Made Garment (RMG) factory in Gazipur. The project includes HT/LT panel installation, power distribution network, emergency backup systems, fire safety electrical integration, and energy management systems. Special attention was given to energy efficiency and compliance with international garment industry standards.",
    shortDescription: "Full electrical infrastructure for RMG factory including HT/LT panels and energy management.",
    location: "Gazipur, Bangladesh",
    client: "Apex Garments Ltd.",
    year: 2024,
    status: "Completed",
    specifications: [
      { label: "Connected Load", value: "5.5 MW" },
      { label: "HT Panel", value: "11kV VCB Panel" },
      { label: "LT Distribution", value: "415V, 12 Sections" },
      { label: "Backup Power", value: "3 × 1500 kVA Diesel Generators" },
      { label: "Energy Management", value: "IoT-Based Monitoring" },
      { label: "Fire Safety Integration", value: "Automatic Shutdown System" },
      { label: "Duration", value: "10 Months" }
    ],
    images: [
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
    ],
    scope: { quantity: 1, unit: "Factory", maxQuantity: 10 },
    budget: "৳ 12,50,00,000",
    tags: ["RMG", "Electrical", "Industrial", "Energy Management"]
  },
  {
    id: "proj-003",
    title: "Telecom Tower Power Solution - Chittagong Hill Tracts",
    category: "Telecom",
    subcategory: "Off-Grid Power Systems",
    description: "Design and deployment of hybrid power solutions for 15 telecom towers in the challenging terrain of Chittagong Hill Tracts. Each site features a combination of solar PV, battery energy storage, and diesel generator backup with intelligent power management systems. The project required innovative logistics solutions for equipment transport to remote hilltop locations.",
    shortDescription: "Hybrid power solutions (Solar + Battery + DG) for 15 telecom towers in remote hill terrain.",
    location: "Chittagong Hill Tracts, Bangladesh",
    client: "Grameenphone Ltd.",
    year: 2023,
    status: "Completed",
    specifications: [
      { label: "Number of Sites", value: "15 Towers" },
      { label: "Solar Capacity", value: "10 kWp per site" },
      { label: "Battery Storage", value: "48V / 600Ah Li-ion" },
      { label: "DG Backup", value: "20 kVA Silent Type" },
      { label: "Autonomy", value: "72 Hours (Battery Only)" },
      { label: "Remote Monitoring", value: "GPRS/SCADA Based" },
      { label: "Duration", value: "8 Months" }
    ],
    images: [
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
      "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80"
    ],
    scope: { quantity: 15, unit: "Towers", maxQuantity: 50 },
    budget: "৳ 8,75,00,000",
    tags: ["Telecom", "Solar", "Hybrid", "Off-Grid", "Remote"]
  },
  {
    id: "proj-004",
    title: "33/11kV Substation - Industrial Zone",
    category: "Power",
    subcategory: "Air Insulated Switchgear",
    description: "Construction and commissioning of a 33/11kV Air Insulated Substation (AIS) serving a major industrial zone in Chattogram. The project includes land development, control building construction, equipment erection, cable laying, protection system installation, and complete testing and commissioning. The substation serves 8 industrial clients with a total connected load of 25 MVA.",
    shortDescription: "33/11kV AIS substation construction for Chattogram industrial zone serving 8 factories.",
    location: "Chattogram, Bangladesh",
    client: "Chattogram EPZ Authority",
    year: 2025,
    status: "Ongoing",
    specifications: [
      { label: "Voltage Level", value: "33kV / 11kV" },
      { label: "Transformer Capacity", value: "2 × 12.5 MVA" },
      { label: "Switchgear Type", value: "AIS (Air Insulated)" },
      { label: "Feeder Outlets", value: "8 × 11kV Outgoing" },
      { label: "Protection", value: "Overcurrent + Earth Fault + Differential" },
      { label: "Control Building", value: "2-Storey RCC Structure" },
      { label: "Duration", value: "14 Months" }
    ],
    images: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80",
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80"
    ],
    scope: { quantity: 1, unit: "Substation", maxQuantity: 3 },
    budget: "৳ 22,00,00,000",
    tags: ["AIS", "33kV", "Industrial", "Substation"]
  },
  {
    id: "proj-005",
    title: "Commercial Building MEP - Gulshan Tower",
    category: "Civil",
    subcategory: "MEP Works",
    description: "Complete Mechanical, Electrical, and Plumbing (MEP) works for a 12-storey commercial complex in Gulshan, Dhaka. The scope includes electrical distribution, HVAC systems, fire protection, plumbing, lift installation coordination, and building management system integration. The project follows international green building standards with emphasis on energy efficiency.",
    shortDescription: "Full MEP works for 12-storey commercial complex following green building standards.",
    location: "Gulshan, Dhaka",
    client: "Horizon Developers Ltd.",
    year: 2025,
    status: "Ongoing",
    specifications: [
      { label: "Building Height", value: "12 Storeys + Basement" },
      { label: "Total Area", value: "85,000 sq ft" },
      { label: "Electrical Load", value: "3.2 MW" },
      { label: "HVAC System", value: "VRF + Fresh Air" },
      { label: "Fire Protection", value: "Sprinkler + Hydrant + Alarm" },
      { label: "BMS Integration", value: "KNX Protocol Based" },
      { label: "Duration", value: "24 Months" }
    ],
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
    ],
    scope: { quantity: 1, unit: "Building", maxQuantity: 5 },
    budget: "৳ 35,00,00,000",
    tags: ["MEP", "Commercial", "Green Building", "HVAC"]
  },
  {
    id: "proj-006",
    title: "Solar Power Plant - 5MW Grid-Tied",
    category: "Power",
    subcategory: "Solar PV Installation",
    description: "Engineering, procurement, and construction (EPC) of a 5MW grid-tied solar photovoltaic power plant in Mongla, Khulna. The project includes site survey, structural design, module mounting structure installation, PV module installation, inverter installation, grid synchronization, and performance monitoring system. The plant is expected to generate approximately 7,500 MWh annually.",
    shortDescription: "5MW grid-tied solar PV plant EPC project in Mongla with annual generation of 7,500 MWh.",
    location: "Mongla, Khulna",
    client: "InfraDev Energy Bangladesh",
    year: 2025,
    status: "Proposal",
    specifications: [
      { label: "Plant Capacity", value: "5 MWp (DC)" },
      { label: "Module Type", value: "Mono PERC 550W" },
      { label: "Inverter", value: "Central Inverter 1.25MW × 4" },
      { label: "Mounting Structure", value: "Fixed Tilt (15°)" },
      { label: "Annual Generation", value: "~7,500 MWh" },
      { label: "Grid Connection", value: "33kV via Dedicated Bay" },
      { label: "Duration", value: "12 Months" }
    ],
    images: [
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
      "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800&q=80",
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80"
    ],
    scope: { quantity: 5, unit: "MW", maxQuantity: 20 },
    budget: "৳ 55,00,00,000",
    tags: ["Solar", "PV", "EPC", "Renewable", "Green Energy"]
  },
  {
    id: "proj-007",
    title: "Fiber Optic Network - Highway Corridor",
    category: "Telecom",
    subcategory: "Fiber Optic Infrastructure",
    description: "Design and deployment of a 120km fiber optic backbone network along the Dhaka-Chattogram highway corridor. The project includes route survey, trenching and ducting, fiber cable pulling, splice closures installation, OTDR testing, and integration with existing network infrastructure. The network supports 96 fibers with expansion capability to 288 fibers.",
    shortDescription: "120km fiber optic backbone along Dhaka-Chattogram highway with 96-fiber capacity.",
    location: "Dhaka-Chattogram Highway",
    client: "Bangladesh Telecommunications Company Ltd (BTCL)",
    year: 2024,
    status: "Completed",
    specifications: [
      { label: "Route Length", value: "120 km" },
      { label: "Fiber Count", value: "96 Fibers (expandable to 288)" },
      { label: "Cable Type", value: "Armored Single Mode (G.652D)" },
      { label: "Splice Points", value: "24 Closure Points" },
      { label: "Testing", value: "OTDR + Power Meter" },
      { label: "Access Points", value: "8 Manholes with POP" },
      { label: "Duration", value: "6 Months" }
    ],
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
      "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
    ],
    scope: { quantity: 120, unit: "km", maxQuantity: 500 },
    budget: "৳ 18,00,00,000",
    tags: ["Fiber Optic", "Telecom", "Backbone", "Highway"]
  },
  {
    id: "proj-008",
    title: "Textile Mill Power Upgrade & Automation",
    category: "Garments Tech Packs",
    subcategory: "Power System Upgrade",
    description: "Complete power system upgrade and automation for a large textile mill in Narayanganj. The project includes replacement of aging switchgear, installation of energy-efficient transformers, power factor correction, VFD installation for motor drives, PLC-based automation of production lines, and integration of SCADA for real-time monitoring and control.",
    shortDescription: "Power system upgrade with VFDs, PLC automation, and SCADA for textile mill.",
    location: "Narayanganj, Bangladesh",
    client: "Meghna Textile Mills Ltd.",
    year: 2025,
    status: "Upcoming",
    specifications: [
      { label: "Connected Load", value: "8 MW" },
      { label: "Transformer Upgrade", value: "3 × 2.5 MVA (Efficiency Class A)" },
      { label: "PFC System", value: "Automatic, Target PF 0.98" },
      { label: "VFD Drives", value: "45 Units (7.5kW - 250kW)" },
      { label: "PLC System", value: "Siemens S7-1500" },
      { label: "SCADA", value: "WinCC Professional" },
      { label: "Duration", value: "10 Months" }
    ],
    images: [
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
    ],
    scope: { quantity: 1, unit: "Mill", maxQuantity: 5 },
    budget: "৳ 15,00,00,000",
    tags: ["Automation", "VFD", "SCADA", "Textile", "Power Upgrade"]
  }
];

// ============================================================
// CATEGORIES
// ============================================================
export const categories = [
  "All",
  "Power",
  "Sub-Station",
  "Telecom",
  "Civil",
  "Garments Tech Packs",
  "Industrial"
];

// ============================================================
// STATUS OPTIONS
// ============================================================
export const statusOptions = [
  "All",
  "Completed",
  "Ongoing",
  "Upcoming",
  "Proposal"
];
