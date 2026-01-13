import { Metadata } from "next";
import {
  ServiceHero,
  FeatureGrid,
  CTASection,
} from "@/components/sections";

export const metadata: Metadata = {
  title: "Workforce Development | Clear Choice Services",
  description:
    "Training programs that transform your workforce into OEM-preferred partners. Supplier readiness, quality systems, and advanced manufacturing capabilities.",
};

const programs = [
  {
    icon: "Building",
    title: "OEM Supplier Readiness Workshop",
    description:
      "4-week intensive program preparing manufacturers for tier-1 supplier partnerships.",
    items: [
      "Supplier Portal Navigation",
      "Certification Roadmap (ISO, IATF)",
      "PPAP & Audit Preparation",
      "Cybersecurity Standards",
      "OEM Placement Assistance",
    ],
  },
  {
    icon: "Link",
    title: "Supply Chain Integration Specialist",
    description:
      "12-week comprehensive training in modern supply chain requirements.",
    items: [
      "Digital Twin Technology",
      "Supplier Portal Integration",
      "Real-time Compliance Monitoring",
      "ESG & Sustainability Reporting",
      "TCO Analysis",
    ],
  },
  {
    icon: "ClipboardCheck",
    title: "Quality Systems & Audit Readiness",
    description:
      "8-week program focusing on passing OEM audits and maintaining supplier status.",
    items: [
      "PPAP Documentation",
      "Mock Audit Simulations",
      "Cleanroom & FDA Compliance",
      "RoHS/REACH Standards",
      "Continuous Improvement",
    ],
  },
  {
    icon: "Bot",
    title: "Advanced Manufacturing Capabilities",
    description:
      "16-week program developing technical competencies OEMs demand.",
    items: [
      "Industry 4.0 Implementation",
      "Collaborative Robotics",
      "Predictive Maintenance",
      "Digital Manufacturing",
      "Automation & IoT",
    ],
  },
  {
    icon: "Users",
    title: "Supplier Partnership Leadership",
    description:
      "6-week program for executives transitioning to strategic partner relationships.",
    items: [
      "Strategic Partnership Development",
      "Contract Negotiation",
      "Supply Chain Risk Management",
      "Relationship Management",
      "Performance Metrics & KPIs",
    ],
  },
  {
    icon: "GraduationCap",
    title: "OEM-Sponsored Apprenticeships",
    description:
      "12-24 month earn-while-you-learn programs with major manufacturers.",
    items: [
      "Direct OEM Sponsorship",
      "Guaranteed Qualification Pathway",
      "Progressive Certifications",
      "Full-time Partnership Track",
      "Multiple Specializations",
    ],
  },
];

const capabilities = [
  {
    icon: "ClipboardCheck",
    title: "Certification & Compliance",
    description: "Complete certification support across all major standards.",
    items: [
      "ISO 9001/14001",
      "IATF 16949 Automotive",
      "SA8000 Social Accountability",
      "ESG Reporting",
      "Cybersecurity Framework",
      "FDA Compliance",
    ],
  },
  {
    icon: "Bot",
    title: "Digital Integration & Industry 4.0",
    description: "Modern manufacturing technology capabilities.",
    items: [
      "Supplier Portal Management",
      "Real-time Data Integration",
      "Digital Twin Implementation",
      "IoT Connectivity",
      "Cloud Manufacturing",
      "Predictive Analytics",
    ],
  },
  {
    icon: "Building",
    title: "Operational Excellence",
    description: "World-class operational capabilities.",
    items: [
      "PPAP Development",
      "Statistical Process Control",
      "Lean Six Sigma",
      "Total Cost of Ownership",
      "Risk Assessment",
      "Continuous Improvement",
    ],
  },
  {
    icon: "Users",
    title: "Strategic Partnership Skills",
    description: "Business development and relationship capabilities.",
    items: [
      "Value Proposition Development",
      "Long-term Relationship Building",
      "Contract Management",
      "Strategic Planning",
      "Problem-solving & Innovation",
      "Market Intelligence",
    ],
  },
];

export default function WorkforceDevelopmentPage() {
  return (
    <>
      <ServiceHero
        title="The Reshoring Revolution Is Here. Is Your Team Ready?"
        subtitle="Workforce Development"
        description="Major OEMs like Toyota and Wolfspeed are actively seeking qualified U.S.-based suppliers. The manufacturers who invest in their workforce now will capture contracts that define their success for decades."
        ctaText="Explore Training Programs"
      />

      <FeatureGrid
        title="Training Programs"
        subtitle="Comprehensive programs designed to transform your workforce into OEM-preferred partners"
        features={programs}
        columns={3}
      />

      <FeatureGrid
        title="Critical Supplier Success Capabilities"
        subtitle="The skills and competencies that differentiate preferred suppliers"
        features={capabilities}
        columns={4}
      />

      <section className="py-16 bg-slate-900 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Strategic OEM Partnership Network
            </h2>
            <p className="text-slate-300 mb-8">
              Our programs are built through direct collaboration with North Carolina&apos;s
              reshoring manufacturers and their specific supplier requirements.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">15+</div>
                <div className="text-sm text-slate-400">Major OEM Partners</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">5</div>
                <div className="text-sm text-slate-400">University Partners</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">100+</div>
                <div className="text-sm text-slate-400">Graduates Placed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">$50M+</div>
                <div className="text-sm text-slate-400">Contracts Secured</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
