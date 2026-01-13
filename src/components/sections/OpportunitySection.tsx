"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const opportunities = [
  {
    company: "Toyota TBMNC",
    investment: "$13.9B",
    description: "Battery production supplier networks",
  },
  {
    company: "Wolfspeed",
    investment: "$5B",
    description: "Silicon carbide facility suppliers",
  },
  {
    company: "VinFast & More",
    investment: "$40B+",
    description: "Tier 2 and tier 3 partnerships",
  },
];

export function OpportunitySection() {
  return (
    <section className="bg-black py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 tracking-tight">
            $60 billion opportunity.
          </h2>
          <p className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto font-light">
            Major manufacturers are investing in North Carolina. They need qualified suppliers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {opportunities.map((opp, index) => (
            <motion.div
              key={opp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <p className="text-5xl md:text-6xl font-semibold text-white mb-2 tracking-tight">
                {opp.investment}
              </p>
              <h3 className="text-xl font-medium text-white mb-2">{opp.company}</h3>
              <p className="text-white/50 font-light">{opp.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-2xl md:text-3xl text-white/80 mb-8 font-light max-w-2xl mx-auto">
            Most manufacturers aren&apos;t ready.<br />
            <span className="text-white font-medium">You don&apos;t have to be one of them.</span>
          </p>
          <Button
            size="lg"
            className="bg-white text-black hover:bg-white/90 rounded-full px-8 h-14 text-lg font-medium"
            asChild
          >
            <Link href="/contact">
              Check your OEM readiness
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
