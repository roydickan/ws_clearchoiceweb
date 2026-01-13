import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Users, Award } from "lucide-react";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us | Clear Choice Services",
  description:
    "We're not consultants. We're manufacturing transformation partners. Learn about our approach to helping NC manufacturers become OEM-ready.",
};

const values = [
  {
    icon: Target,
    title: "Results, Not Reports",
    description:
      "Traditional consultants hand you a binder and disappear. We roll up our sleeves and work alongside your team until you're winning contracts.",
  },
  {
    icon: Users,
    title: "Deep NC Connections",
    description:
      "We're embedded in NC's manufacturing ecosystem—connected to OEMs, economic development agencies, universities, and technology providers.",
  },
  {
    icon: Award,
    title: "Guaranteed Outcomes",
    description:
      "Our 10X ROI guarantee means we identify optimization opportunities worth 10 times your investment—or you get a full refund.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              We&apos;re Not Consultants. We&apos;re Manufacturing Transformation Partners.
            </h1>
            <p className="text-lg text-slate-300">
              Clear Choice Services was founded on a simple belief: North Carolina
              manufacturers deserve a partner who understands their challenges,
              speaks their language, and delivers results—not reports.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Born from the Factory Floor
            </h2>
            <div className="prose prose-lg text-slate-600">
              <p>
                We&apos;ve spent decades in manufacturing—not in corner offices, but on
                production floors, in quality labs, and alongside the teams who make
                things happen.
              </p>
              <p>
                We&apos;ve seen what works and what doesn&apos;t. We&apos;ve watched companies
                transform from struggling suppliers into OEM-preferred partners. And
                we&apos;ve seen others miss opportunities because they didn&apos;t have the
                right guidance at the right time.
              </p>
              <p>
                That&apos;s why we started Clear Choice. To give North Carolina
                manufacturers the expertise, connections, and support they need to
                compete—and win—in the modern manufacturing landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-slate-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Our Approach
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-xl p-6 shadow-sm"
              >
                <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Partnership */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Powered by Strategic Partnership
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              Our collaboration with{" "}
              <a
                href={siteConfig.partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:text-orange-700 font-medium"
              >
                {siteConfig.partner.name}
              </a>{" "}
              brings world-class supply chain expertise to every engagement.
              Together, we deliver end-to-end manufacturing transformation that
              drives real business results.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-900">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Partner with Us?
            </h2>
            <p className="text-slate-300 mb-8">
              Let&apos;s discuss how we can help you capture your share of North
              Carolina&apos;s manufacturing boom.
            </p>
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600"
              asChild
            >
              <Link href="/contact">
                Schedule Your Free Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
