import { Metadata } from "next";
import Link from "next/link";
import {
  ServiceHero,
  FeatureGrid,
  ProcessTimeline,
  CTASection,
} from "@/components/sections";
import { Button } from "@/components/ui/button";
import { Layers, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Supply Chain Optimization for OEMs | Clear Choice Services",
  description:
    "Digital twin solutions for manufacturing constraint discovery. 10X ROI guarantee on supply chain optimization for new and expanding NC manufacturing sites.",
};

const challenges = [
  {
    icon: "TrendingUp",
    title: "Capacity Ramp-Up",
    description:
      "Scaling from pilot production to full operational targets without hidden bottlenecks.",
    items: [
      "Challenge: Scaling to targets",
      "Risk: Hidden bottlenecks",
      "Solution: Complete capacity modeling",
    ],
  },
  {
    icon: "Clock",
    title: "Lead Time Reliability",
    description:
      "Consistent, predictable delivery schedules despite supply chain variability.",
    items: [
      "Challenge: Predictable delivery",
      "Risk: Supply chain variability",
      "Solution: Demand variability modeling",
    ],
  },
  {
    icon: "Network",
    title: "Supplier Network Development",
    description:
      "Building regional supply chain maturity without performance gaps.",
    items: [
      "Challenge: Regional maturity",
      "Risk: Supplier performance gaps",
      "Solution: Supplier capacity modeling",
    ],
  },
  {
    icon: "Shield",
    title: "Quality Consistency",
    description:
      "Maintaining standards during scaling without quality issues.",
    items: [
      "Challenge: Standards during scaling",
      "Risk: Quality issues in ramp-up",
      "Solution: Quality performance modeling",
    ],
  },
];

const digitalTwinSolutions = [
  {
    icon: "Network",
    title: "Supplier Network Capacity",
    description: "Model your entire supplier ecosystem.",
    items: [
      "Regional capacity vs. demand",
      "Supplier scaling capabilities",
      "Backup activation scenarios",
      "Disruption resilience",
    ],
  },
  {
    icon: "Truck",
    title: "Logistics Options Analysis",
    description: "Optimize your distribution network.",
    items: [
      "Transportation optimization",
      "Warehousing positioning",
      "Distribution scaling",
      "JIT delivery scenarios",
    ],
  },
  {
    icon: "BarChart3",
    title: "Ramp-Up Scenarios",
    description: "Plan your capacity scaling pathway.",
    items: [
      "Monthly/quarterly scaling",
      "Production mix optimization",
      "Equipment utilization",
      "Workforce scaling timelines",
    ],
  },
  {
    icon: "Search",
    title: "Hidden Constraint Discovery",
    description: "Find what you can't see.",
    items: [
      "Maintenance bottlenecks",
      "Workforce constraints",
      "Support service limits",
      "Process bottlenecks",
    ],
  },
];

const phases = [
  {
    title: "Priority Discovery Session",
    duration: "Week 1",
    description:
      "Confirm your primary focus area for digital twin modeling and gather initial facility specifications.",
    items: [
      "Focus area identification",
      "Data requirements",
      "Stakeholder alignment",
      "Success criteria",
    ],
  },
  {
    title: "Pilot Constraint Model",
    duration: "Weeks 2-4",
    description:
      "Build digital twin of one critical manufacturing subsystem to demonstrate hidden constraint discovery.",
    items: [
      "Subsystem selection",
      "Model development",
      "Constraint identification",
      "ROI demonstration",
    ],
  },
  {
    title: "Full Manufacturing Digital Twin",
    duration: "Weeks 5-12",
    description:
      "Complete ecosystem modeling with comprehensive constraint analysis and optimization recommendations.",
    items: [
      "Full system modeling",
      "Comprehensive analysis",
      "Optimization roadmap",
      "Implementation support",
    ],
  },
];

export default function SupplyChainOptimizationPage() {
  return (
    <>
      <ServiceHero
        title="Hidden Constraints Are Killing Your Growth. We Find Them Before They Cost You Billions."
        subtitle="Supply Chain Optimization for OEMs"
        description="Your manufacturing investment represents significant capital and strategic positioning. But the greatest risk isn't what you can see—it's the hidden constraints that will cap your growth when you need to scale most."
        ctaText="Schedule a Discovery Session"
      />

      {/* Intel Case Study */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Intel&apos;s $20 Billion Lesson
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  In the 1990s, Intel built massive semiconductor fabs designed for
                  peak capacity. Everything looked perfect—clean rooms, advanced
                  equipment, skilled workforce.
                </p>
                <p>
                  Then they tried to ramp up for the Pentium boom.
                </p>
                <p className="text-white font-semibold">
                  The hidden constraint? Maintenance scheduling. Their sophisticated
                  equipment required more downtime than anyone anticipated.
                </p>
                <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-slate-700">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600">6 mo</div>
                    <div className="text-sm text-slate-400">Production Delays</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600">$2B</div>
                    <div className="text-sm text-slate-400">Lost Revenue</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600">15%</div>
                    <div className="text-sm text-slate-400">Market Share Lost</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeatureGrid
        title="Key Challenges We Solve"
        subtitle="The hidden constraints that cap growth when you need to scale most"
        features={challenges}
        columns={4}
      />

      <FeatureGrid
        title="Our Digital Twin Solution"
        subtitle="Comprehensive manufacturing ecosystem modeling"
        features={digitalTwinSolutions}
        columns={4}
      />

      {/* 10X ROI Guarantee */}
      <section className="py-16 bg-red-600">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center text-white">
            <Layers className="h-16 w-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              10X ROI Guarantee
            </h2>
            <p className="text-lg opacity-90 mb-6">
              We guarantee to identify optimization opportunities worth 10 times
              your investment—or you get a full refund. This isn&apos;t marketing
              fluff. It&apos;s mathematical validation of capacity improvements with
              proven constraint elimination methodologies.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-red-700 hover:bg-slate-100"
              asChild
            >
              <Link href="/contact">
                Claim Your Guarantee
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-slate-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            Proven Constraint Discovery Success
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-2">Microsoft</h3>
              <p className="text-sm text-slate-500 mb-3">Supply Chain Integration</p>
              <p className="text-sm text-slate-600">
                <span className="font-medium">Hidden constraint:</span> Inventory
                positioning and demand forecasting integration
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-2">Amazon Robotics</h3>
              <p className="text-sm text-slate-500 mb-3">Resource Optimization</p>
              <p className="text-sm text-slate-600">
                <span className="font-medium">Hidden constraint:</span> Installation
                crew and equipment conflicts
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-2">Nike</h3>
              <p className="text-sm text-slate-500 mb-3">Lifecycle Management</p>
              <p className="text-sm text-slate-600">
                <span className="font-medium">Hidden constraint:</span> Forecasting
                accuracy and positioning
              </p>
            </div>
          </div>
        </div>
      </section>

      <ProcessTimeline
        title="Start Your Constraint Discovery"
        subtitle="From discovery session to full digital twin in 12 weeks"
        phases={phases}
      />

      <CTASection />
    </>
  );
}
