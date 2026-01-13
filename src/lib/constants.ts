export const siteConfig = {
  name: "Clear Choice Services",
  description: "Supply Chain Optimization for Manufacturers - Empowering North Carolina's Manufacturing Renaissance",
  url: "https://industrytransform.com",
  contact: {
    email: "roy@clearchoice.biz",
    phone: "+1 (919) 205-9269",
    scheduling: "http://learnfromroy.com",
  },
  partner: {
    name: "StrategicValuePlus.com",
    url: "https://strategicvalueplus.com",
  },
};

export const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Services",
    href: "#",
    children: [
      { name: "Industry 4.0 Adoption", href: "/industry-4-0" },
      { name: "Operational Transformation", href: "/operational-transformation" },
      { name: "Supply Chain Readiness", href: "/supply-chain-readiness" },
      { name: "Workforce Development", href: "/workforce-development" },
      { name: "Supply Chain Optimization for OEMs", href: "/supply-chain-optimization" },
      { name: "Toyota Supplier Development", href: "/toyota-supplier-development" },
    ],
  },
  { name: "Contact", href: "/contact" },
];

export const services = [
  {
    title: "Industry 4.0 Adoption",
    description: "Digital transformation for manufacturing excellence through smart manufacturing, IoT integration, and data analytics.",
    href: "/industry-4-0",
    icon: "Cpu",
  },
  {
    title: "Operational Transformation",
    description: "Lean manufacturing principles supercharged with modern digital tools for sustainable operational improvements.",
    href: "/operational-transformation",
    icon: "Settings",
  },
  {
    title: "Supply Chain Readiness",
    description: "Get certified, get connected, and get contracts with major OEMs through comprehensive readiness programs.",
    href: "/supply-chain-readiness",
    icon: "Link",
  },
  {
    title: "Workforce Development",
    description: "Transform your workforce into the kind of team that OEMs fight to partner with through targeted training programs.",
    href: "/workforce-development",
    icon: "Users",
  },
];

export const stats = [
  { value: 30, suffix: "%", label: "Efficiency Gains" },
  { value: 25, suffix: "%", label: "Cost Reduction" },
  { value: 40, suffix: "%", label: "Quality Improvement" },
  { value: 10, suffix: "X", label: "ROI Guarantee" },
];

export const industries = [
  "Electric Vehicle Manufacturing",
  "Advanced Computer Chips",
  "Clean Energy Infrastructure",
  "Aerospace & Aviation",
  "Life Sciences & Medical Devices",
];

export const certifications = [
  { name: "ISO 9001:2015", description: "Quality Management Systems" },
  { name: "IATF 16949", description: "Automotive Quality Management" },
  { name: "AS9100", description: "Aerospace Quality Management" },
  { name: "ISO 13485", description: "Medical Devices Quality" },
  { name: "ISO 14001", description: "Environmental Management" },
  { name: "ISO 45001", description: "Occupational Health & Safety" },
];
