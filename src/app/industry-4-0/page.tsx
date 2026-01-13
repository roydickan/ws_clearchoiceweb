import { Metadata } from "next";
import {
  ServiceHero,
  FeatureGrid,
  ProcessTimeline,
  ResultsGrid,
  CTASection,
} from "@/components/sections";

export const metadata: Metadata = {
  title: "Industry 4.0 Adoption | Clear Choice Services",
  description:
    "Digital transformation for manufacturing excellence. Smart manufacturing, IoT integration, data analytics, and automation solutions for NC manufacturers.",
};

const pillars = [
  {
    icon: "Wifi",
    title: "IoT Integration & Smart Sensors",
    description:
      "Deploy intelligent sensor networks throughout your manufacturing process to capture real-time data.",
    items: [
      "Industrial IoT sensor deployment",
      "Edge computing infrastructure",
      "Real-time data collection",
      "Equipment connectivity & monitoring",
      "Environmental parameter tracking",
    ],
  },
  {
    icon: "BarChart3",
    title: "Advanced Data Analytics & AI",
    description:
      "Transform your manufacturing data into actionable insights using advanced analytics and AI.",
    items: [
      "Real-time production dashboards",
      "Predictive maintenance algorithms",
      "Quality prediction & defect prevention",
      "Production optimization",
      "Performance benchmarking",
    ],
  },
  {
    icon: "Bot",
    title: "Automation & Robotics Integration",
    description:
      "Implement intelligent automation solutions that enhance productivity and reduce costs.",
    items: [
      "Robotic process automation",
      "Collaborative robot (cobot) integration",
      "Automated quality control",
      "Material handling automation",
      "Human-robot collaboration training",
    ],
  },
  {
    icon: "Layers",
    title: "Digital Twin Technology",
    description:
      "Create virtual representations of your processes for simulation and optimization.",
    items: [
      "Process modeling & simulation",
      "Virtual commissioning & testing",
      "Scenario planning & optimization",
      "Real-time process mirroring",
      "Predictive performance modeling",
    ],
  },
];

const techStack = [
  {
    icon: "Network",
    title: "Connectivity & Communication",
    description: "Enterprise-grade networking infrastructure",
    items: [
      "Industrial Ethernet & WiFi 6",
      "5G Private Networks",
      "OPC-UA & MQTT Protocols",
      "Edge Computing Platforms",
      "Secure VPN & Cybersecurity",
    ],
  },
  {
    icon: "Cpu",
    title: "IoT & Sensing",
    description: "Comprehensive sensor networks",
    items: [
      "Vibration & Temperature Sensors",
      "Vision Systems & Cameras",
      "RFID & Barcode Systems",
      "Pressure & Flow Monitors",
      "Energy Consumption Meters",
    ],
  },
  {
    icon: "Database",
    title: "Software Platforms",
    description: "Integrated manufacturing software",
    items: [
      "Manufacturing Execution Systems (MES)",
      "Enterprise Resource Planning (ERP)",
      "Maintenance Management (CMMS)",
      "Statistical Process Control (SPC)",
      "Supply Chain Management (SCM)",
    ],
  },
  {
    icon: "Brain",
    title: "AI & Analytics",
    description: "Intelligent decision support",
    items: [
      "Machine Learning Algorithms",
      "Predictive Analytics Engines",
      "Computer Vision Systems",
      "Natural Language Processing",
      "Business Intelligence Dashboards",
    ],
  },
];

const phases = [
  {
    title: "Assessment & Strategy",
    duration: "Weeks 1-4",
    description:
      "Comprehensive evaluation of current systems, identification of opportunities, and development of customized Industry 4.0 roadmap.",
    items: [
      "Current state assessment",
      "Opportunity identification",
      "ROI analysis",
      "Technology selection",
      "Implementation roadmap",
    ],
  },
  {
    title: "Pilot Implementation",
    duration: "Weeks 5-12",
    description:
      "Small-scale deployment in selected areas to validate solutions and demonstrate ROI before full rollout.",
    items: [
      "Pilot area selection",
      "Technology deployment",
      "Integration testing",
      "Results validation",
      "Refinement & optimization",
    ],
  },
  {
    title: "Full Deployment",
    duration: "Weeks 13-24",
    description:
      "Systematic rollout across all targeted operations with continuous monitoring and workforce training.",
    items: [
      "Phased rollout plan",
      "System integration",
      "Workforce training",
      "Change management",
      "Performance monitoring",
    ],
  },
  {
    title: "Optimization & Support",
    duration: "Ongoing",
    description:
      "Continuous performance monitoring, improvement, and advanced analytics deployment.",
    items: [
      "Performance optimization",
      "Advanced analytics",
      "Continuous improvement",
      "Technical support",
      "Capability expansion",
    ],
  },
];

const results = [
  { value: 25, suffix: "%", label: "Manufacturing Cost Reduction" },
  { value: 30, suffix: "%", label: "OEE Improvement" },
  { value: 50, suffix: "%", label: "Downtime Reduction" },
  { value: 40, suffix: "%", label: "Quality Improvement" },
];

export default function Industry40Page() {
  return (
    <>
      <ServiceHero
        title="Your Competitors Are Already Using AI and IoT. Are You?"
        subtitle="Industry 4.0 Adoption"
        description="Digital transformation isn't optional anymore. It's the price of admission to modern supply chains. The good news? You don't have to figure it out alone."
        ctaText="Get My Industry 4.0 Roadmap"
      />

      <FeatureGrid
        title="Smart Manufacturing Implementation"
        subtitle="Four pillars of digital transformation that revolutionize your operations"
        features={pillars}
        columns={2}
      />

      <FeatureGrid
        title="Enterprise-Grade Technology Stack"
        subtitle="Right-sized for your operation"
        features={techStack}
        columns={4}
      />

      <ProcessTimeline
        title="From Assessment to ROI in Four Phases"
        subtitle="Our systematic approach ensures successful transformation with minimal disruption"
        phases={phases}
      />

      <ResultsGrid
        title="What Our Clients Achieve"
        subtitle="Typical improvements from Industry 4.0 implementation"
        results={results}
      />

      <CTASection />
    </>
  );
}
