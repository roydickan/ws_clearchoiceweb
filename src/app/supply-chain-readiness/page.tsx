import { Metadata } from "next";
import {
  ServiceHero,
  FeatureGrid,
  ProcessTimeline,
  ResultsGrid,
  CTASection,
} from "@/components/sections";

export const metadata: Metadata = {
  title: "Supply Chain Readiness | Clear Choice Services",
  description:
    "Get certified, get connected, get contracts. Prepare your manufacturing operation for tier 2 and tier 3 OEM partnerships.",
};

const readinessAreas = [
  {
    icon: "Shield",
    title: "Quality Management Systems",
    description:
      "ISO 9001, IATF 16949, AS9100 certification with documentation and process control.",
    items: [
      "Certification roadmap",
      "Documentation development",
      "Process control frameworks",
      "Continuous improvement",
    ],
  },
  {
    icon: "Factory",
    title: "Manufacturing Capabilities",
    description:
      "Assessment and enhancement of production capabilities to meet OEM requirements.",
    items: [
      "Capability assessment",
      "Capacity planning",
      "Equipment optimization",
      "Technology integration",
    ],
  },
  {
    icon: "Link",
    title: "Supply Chain Integration",
    description:
      "Build robust supplier networks and logistics capabilities for seamless integration.",
    items: [
      "Supplier network development",
      "Inventory management",
      "Logistics optimization",
      "EDI/portal integration",
    ],
  },
  {
    icon: "AlertTriangle",
    title: "Risk Management",
    description:
      "Comprehensive risk assessment and business continuity planning.",
    items: [
      "Risk assessment protocols",
      "Business continuity planning",
      "Resilience strategies",
      "Crisis management",
    ],
  },
  {
    icon: "Cpu",
    title: "Digital Transformation",
    description:
      "Industry 4.0 technologies and digital systems for modern supply chain participation.",
    items: [
      "Industry 4.0 readiness",
      "Data analytics capability",
      "Digital communication",
      "Real-time visibility",
    ],
  },
  {
    icon: "Handshake",
    title: "Partnership Development",
    description:
      "Strategic guidance on building long-term OEM relationships.",
    items: [
      "Relationship building",
      "Contract negotiation",
      "Value proposition",
      "Long-term strategies",
    ],
  },
];

const opportunities = [
  {
    icon: "Car",
    title: "Electric Vehicle Manufacturing",
    description:
      "Major EV manufacturers establishing production facilities in NC.",
    items: [
      "Toyota TBMNC - $13.9B investment",
      "VinFast production facility",
      "Component & assembly demand",
      "Battery supply chain",
    ],
  },
  {
    icon: "Pill",
    title: "Life Sciences & Biotechnology",
    description:
      "Growing pharmaceutical and medical device manufacturing sector.",
    items: [
      "Precision manufacturing",
      "Cleanroom capabilities",
      "Regulatory compliance",
      "FDA-ready operations",
    ],
  },
  {
    icon: "Zap",
    title: "Energy Infrastructure",
    description:
      "Renewable energy projects and grid modernization initiatives.",
    items: [
      "Solar & wind components",
      "Grid modernization",
      "Electrical components",
      "Specialized equipment",
    ],
  },
];

const phases = [
  {
    title: "Readiness Assessment",
    duration: "2-4 weeks",
    description:
      "Comprehensive evaluation of your current capabilities against OEM requirements.",
    items: [
      "Gap analysis",
      "Capability mapping",
      "Certification status",
      "Improvement priorities",
    ],
  },
  {
    title: "Certification Roadmap",
    duration: "4-8 weeks",
    description:
      "Development of customized certification and compliance roadmap.",
    items: [
      "Certification selection",
      "Timeline development",
      "Resource planning",
      "Milestone definition",
    ],
  },
  {
    title: "Implementation Support",
    duration: "12-24 weeks",
    description:
      "Hands-on support through certification and capability development.",
    items: [
      "Documentation development",
      "Process implementation",
      "Training & coaching",
      "Audit preparation",
    ],
  },
  {
    title: "Partnership Connection",
    duration: "Ongoing",
    description:
      "Introduction to OEM procurement teams and ongoing relationship support.",
    items: [
      "OEM introductions",
      "RFQ support",
      "Contract guidance",
      "Relationship management",
    ],
  },
];

const results = [
  { value: 85, suffix: "%", label: "Certification Success" },
  { value: 60, suffix: "+", label: "OEM Partnerships" },
  { value: 12, suffix: "mo", label: "Avg. Time to Contract" },
  { value: 3, suffix: "X", label: "Revenue Growth" },
];

export default function SupplyChainReadinessPage() {
  return (
    <>
      <ServiceHero
        title="OEMs Are Looking for Suppliers Like You. Can You Pass Their Test?"
        subtitle="Supply Chain Readiness"
        description="Major manufacturers have billions to spend and aggressive timelines to meet. They need qualified tier 2 and tier 3 suppliers who can deliver quality, consistency, and compliance. Is that you?"
        ctaText="Assess My Readiness"
        backgroundImage="https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <FeatureGrid
        title="Six Areas of Readiness"
        subtitle="Comprehensive preparation for OEM partnerships"
        features={readinessAreas}
        columns={3}
      />

      <FeatureGrid
        title="Partnership Opportunities in North Carolina"
        subtitle="$60+ billion in manufacturing investments creating unprecedented demand"
        features={opportunities}
        columns={3}
      />

      <ProcessTimeline
        title="Your Path to OEM Partnership"
        subtitle="From assessment to contract in a structured, proven process"
        phases={phases}
      />

      <ResultsGrid
        title="Our Track Record"
        subtitle="Results from manufacturers who've completed our readiness program"
        results={results}
      />

      <CTASection />
    </>
  );
}
