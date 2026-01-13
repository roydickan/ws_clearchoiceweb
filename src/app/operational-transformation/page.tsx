import { Metadata } from "next";
import {
  ServiceHero,
  FeatureGrid,
  ProcessTimeline,
  ResultsGrid,
  CTASection,
} from "@/components/sections";

export const metadata: Metadata = {
  title: "Operational Transformation | Clear Choice Services",
  description:
    "Lean manufacturing principles supercharged with modern digital tools. ISO certification, quality management, and continuous improvement for NC manufacturers.",
};

const leanAreas = [
  {
    icon: "Workflow",
    title: "Lean Manufacturing Excellence",
    description:
      "Implement proven lean principles enhanced with real-time digital monitoring.",
    items: [
      "5S with digital tracking",
      "Value stream mapping with IoT",
      "Kanban with auto-replenishment",
      "SMED optimization",
      "Total Productive Maintenance",
    ],
  },
  {
    icon: "Target",
    title: "Process Optimization & Redesign",
    description:
      "Systematically analyze and optimize manufacturing processes using data analytics.",
    items: [
      "Process mapping & workflow analysis",
      "Bottleneck identification",
      "Cycle time reduction",
      "Waste elimination (Muda, Mura, Muri)",
      "Standard work development",
    ],
  },
  {
    icon: "Award",
    title: "Quality Management Systems",
    description:
      "Establish comprehensive QMS that meets industry standards with digital tools.",
    items: [
      "ISO 9001 certification support",
      "Statistical process control (SPC)",
      "Root cause analysis",
      "Supplier quality management",
      "Audit readiness",
    ],
  },
  {
    icon: "Users",
    title: "Workforce Engagement & Training",
    description:
      "Build a culture of continuous improvement through training and engagement.",
    items: [
      "Lean leadership development",
      "Kaizen event facilitation",
      "Problem-solving training",
      "Employee suggestion systems",
      "Recognition programs",
    ],
  },
];

const certifications = [
  {
    icon: "CheckCircle",
    title: "ISO 9001:2015",
    description: "Quality management system certification for manufacturing excellence.",
    items: ["Documentation support", "Process control", "Internal audits", "Certification prep"],
  },
  {
    icon: "FileCheck",
    title: "IATF 16949",
    description: "Automotive quality management for tier suppliers to major OEMs.",
    items: ["Toyota, Honda, BMW ready", "PPAP preparation", "APQP implementation", "Supplier audits"],
  },
  {
    icon: "Gauge",
    title: "AS9100",
    description: "Aerospace quality management for defense and aviation industries.",
    items: ["Boeing, Lockheed ready", "Risk management", "Configuration control", "Traceability"],
  },
  {
    icon: "TrendingUp",
    title: "FDA Compliance",
    description: "Medical device manufacturing including ISO 13485 and QSR.",
    items: ["Design controls", "CAPA systems", "Validation protocols", "Regulatory submissions"],
  },
];

const phases = [
  {
    title: "Assessment & Planning",
    duration: "4-6 weeks",
    description:
      "Comprehensive evaluation of current operations and development of improvement roadmap.",
    items: [
      "Operational assessment",
      "Value stream mapping",
      "Gap analysis",
      "Action plan development",
      "Change management strategy",
    ],
  },
  {
    title: "Implementation & Training",
    duration: "8-16 weeks",
    description:
      "Systematic deployment of lean principles and digital tools with workforce training.",
    items: [
      "Lean methodology rollout",
      "Digital tool integration",
      "Workforce training",
      "SOP development",
      "Performance measurement",
    ],
  },
  {
    title: "Optimization & Sustainment",
    duration: "Ongoing",
    description:
      "Continuous monitoring, optimization, and sustainment of improvements.",
    items: [
      "Performance monitoring",
      "Continuous improvement",
      "Advanced analytics",
      "Leadership coaching",
      "Long-term sustainment",
    ],
  },
];

const results = [
  { value: 25, suffix: "%", label: "Cost Reduction" },
  { value: 35, suffix: "%", label: "OEE Improvement" },
  { value: 50, suffix: "%", label: "Defect Reduction" },
  { value: 40, suffix: "%", label: "On-Time Delivery" },
];

export default function OperationalTransformationPage() {
  return (
    <>
      <ServiceHero
        title="Lean Manufacturing Is Just the Beginning"
        subtitle="Operational Transformation"
        description="Toyota's production system revolutionized manufacturing. Now imagine those principles supercharged with real-time data, IoT integration, and AI-driven insights. That's operational transformation."
        ctaText="Transform My Operations"
      />

      <FeatureGrid
        title="Lean + Industry 4.0 Integration"
        subtitle="Classic principles with modern execution"
        features={leanAreas}
        columns={2}
      />

      <FeatureGrid
        title="Certifications We Support"
        subtitle="Get certified for any industry"
        features={certifications}
        columns={4}
      />

      <ProcessTimeline
        title="Implementation Success Framework"
        subtitle="Our systematic approach ensures sustainable improvements"
        phases={phases}
      />

      <ResultsGrid
        title="Typical Operational Improvements"
        subtitle="Average results achieved by our manufacturing partners"
        results={results}
      />

      <CTASection />
    </>
  );
}
