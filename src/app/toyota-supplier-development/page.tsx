import { Metadata } from "next";
import Link from "next/link";
import {
  ServiceHero,
  FeatureGrid,
  CTASection,
} from "@/components/sections";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Toyota Supplier Development | Clear Choice Services",
  description:
    "Become a qualified Toyota battery supplier. Transform your manufacturing operation to meet Toyota's exacting standards for TBMNC partnership.",
};

const toyotaRequirements = [
  {
    icon: "Award",
    title: "Quality Standards",
    description: "Meet Toyota's legendary quality requirements.",
    items: [
      "ISO 9001 certification",
      "SQAM compliance",
      "Toyota Production System",
    ],
  },
  {
    icon: "Leaf",
    title: "Environmental Compliance",
    description: "Sustainability and green manufacturing.",
    items: [
      "2% annual CO2 reduction",
      "Renewable energy usage",
      "Green Supplier Guidelines",
    ],
  },
  {
    icon: "Cpu",
    title: "Digital Integration",
    description: "Modern manufacturing technology.",
    items: [
      "Industry 4.0 capabilities",
      "IoT integration",
      "Real-time visibility",
    ],
  },
  {
    icon: "DollarSign",
    title: "Financial Stability",
    description: "Long-term partnership viability.",
    items: [
      "Robust financial systems",
      "Cost competitiveness",
      "Long-term viability",
    ],
  },
  {
    icon: "Workflow",
    title: "Lean Manufacturing",
    description: "Toyota Production System principles.",
    items: [
      "Just-in-Time delivery",
      "Waste elimination",
      "Continuous improvement",
    ],
  },
  {
    icon: "Shield",
    title: "Safety & Ethics",
    description: "Responsible business practices.",
    items: [
      "Human rights compliance",
      "Worker safety standards",
      "Ethical practices",
    ],
  },
];

const solutions = [
  {
    icon: "ClipboardList",
    title: "Plan — Supply Chain Strategy",
    description: "Strategic planning and supply chain optimization.",
    items: [
      "Digital twin technology",
      "Risk management planning",
      "JIT inventory optimization",
      "Demand forecasting",
      "Gap analysis",
    ],
  },
  {
    icon: "Package",
    title: "Source — Supplier Development",
    description: "Certification and compliance support.",
    items: [
      "ISO 9001 preparation",
      "Toyota SQAM guidance",
      "Sustainability consulting",
      "Environmental compliance",
      "Audit readiness",
    ],
  },
  {
    icon: "Factory",
    title: "Make — Manufacturing Excellence",
    description: "Lean and smart manufacturing implementation.",
    items: [
      "TPS implementation",
      "Process optimization",
      "IoT and AI integration",
      "Quality systems",
      "Digital transformation",
    ],
  },
  {
    icon: "Truck",
    title: "Deliver — Logistics Optimization",
    description: "Performance and delivery excellence.",
    items: [
      "Operational optimization",
      "ERP/MES implementation",
      "Workforce development",
      "Leadership building",
      "Real-time dashboards",
    ],
  },
  {
    icon: "RefreshCw",
    title: "Antifragile Supply Chain",
    description: "Resilience and adaptability.",
    items: [
      "Disruption resilience",
      "Adaptive response systems",
      "Crisis management",
      "Flexible manufacturing",
      "Recovery planning",
    ],
  },
  {
    icon: "TrendingUp",
    title: "Business Transformation",
    description: "Growth and strategic development.",
    items: [
      "Exit planning & M&A",
      "International expansion",
      "Business valuation",
      "Due diligence",
      "Succession planning",
    ],
  },
];

export default function ToyotaSupplierDevelopmentPage() {
  return (
    <>
      <ServiceHero
        title="Toyota Is Building a $13.9 Billion Battery Plant in NC. They Need Suppliers. Could That Be You?"
        subtitle="Toyota Supplier Development"
        description="Clear Choice partners with Strategic Value Plus to transform tier 2 and tier 3 manufacturers into Toyota-ready suppliers. We know what Toyota requires—and we'll get you there."
        ctaText="Start My Toyota Journey"
        backgroundImage="https://images.pexels.com/photos/3846517/pexels-photo-3846517.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      {/* TBMNC Opportunity */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-8 md:p-12 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Toyota Battery Manufacturing North Carolina (TBMNC)
              </h2>
              <p className="text-red-100 mb-6">
                Toyota&apos;s $13.9 billion investment in North Carolina represents one
                of the largest manufacturing projects in state history. They&apos;re
                building a massive battery production facility—and they need a
                robust network of qualified local suppliers.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-red-500">
                <div className="text-center">
                  <div className="text-3xl font-bold">$13.9B</div>
                  <div className="text-sm text-red-200">Investment</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">5,000+</div>
                  <div className="text-sm text-red-200">Jobs Created</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">2025</div>
                  <div className="text-sm text-red-200">Production Start</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeatureGrid
        title="What Toyota Demands from Suppliers"
        subtitle="Meeting Toyota's legendary standards is non-negotiable"
        features={toyotaRequirements}
        columns={3}
      />

      <FeatureGrid
        title="Strategic Value Plus Solutions"
        subtitle="Comprehensive transformation services designed for Toyota supplier candidates"
        features={solutions}
        columns={3}
      />

      {/* Why NC Section */}
      <section className="py-16 bg-slate-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Why North Carolina for Toyota?
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-2xl font-bold text-red-700 mb-2">Central</div>
                <div className="text-sm text-slate-600">East Coast Distribution</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-2xl font-bold text-red-700 mb-2">Robust</div>
                <div className="text-sm text-slate-600">Transportation Networks</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-2xl font-bold text-red-700 mb-2">Skilled</div>
                <div className="text-sm text-slate-600">Manufacturing Workforce</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-2xl font-bold text-red-700 mb-2">Supportive</div>
                <div className="text-sm text-slate-600">Business Environment</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-900">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Join Toyota&apos;s Supply Chain?
            </h2>
            <p className="text-slate-300 mb-8">
              The manufacturers who act now will secure positions in Toyota&apos;s
              supplier network. Those who wait will watch the opportunity pass them by.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700"
                asChild
              >
                <Link href="/contact">
                  Start My Toyota Supplier Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <div className="text-slate-400">
                <span className="block text-sm">Or call us directly:</span>
                <a href="tel:+19192059269" className="text-white font-medium">
                  (919) 205-9269
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
