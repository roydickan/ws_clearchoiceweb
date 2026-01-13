"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Factory, Cpu, Zap } from "lucide-react";

const opportunities = [
  {
    company: "Toyota Battery Manufacturing NC (TBMNC)",
    investment: "$13.9 billion",
    description: "Actively building supplier networks for battery production",
    icon: Factory,
  },
  {
    company: "Wolfspeed",
    investment: "$5 billion",
    description: "Silicon carbide facility seeking qualified local suppliers",
    icon: Cpu,
  },
  {
    company: "VinFast, Boom Supersonic & More",
    investment: "Billions more",
    description: "Creating unprecedented demand for tier 2 and tier 3 partners",
    icon: Zap,
  },
];

export function OpportunitySection() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
          >
            The Window Is Open. But It Won&apos;t Stay Open Forever.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-slate-600"
          >
            Right now, major manufacturers are pouring billions into North Carolina.
            These OEMs need suppliers who can meet their exacting standards.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {opportunities.map((opp, index) => (
            <motion.div
              key={opp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-orange-300 hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center mb-4">
                <opp.icon className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-1">{opp.company}</h3>
              <p className="text-2xl font-bold text-orange-600 mb-2">
                {opp.investment}
              </p>
              <p className="text-sm text-slate-600">{opp.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-slate-900 rounded-2xl p-8 md:p-12 text-center"
        >
          <p className="text-slate-300 text-lg mb-4">
            <span className="text-white font-semibold">The harsh reality?</span>{" "}
            Most small and medium manufacturers aren&apos;t ready. They&apos;ll watch
            from the sidelines as prepared competitors capture contracts that could
            have been theirs.
          </p>
          <p className="text-2xl font-bold text-white mb-6">
            You don&apos;t have to be one of them.
          </p>
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white"
            asChild
          >
            <Link href="/contact">
              Find Out If You&apos;re OEM-Ready
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
