"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, CheckCircle } from "lucide-react";
import { siteConfig } from "@/lib/constants";

const benefits = [
  "A clear picture of your OEM readiness gaps",
  "A prioritized roadmap to certification",
  "Specific opportunities in your target industries",
  "No obligation. No pressure. Just clarity.",
];

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10" />
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Ready to Claim Your Place in NC&apos;s Manufacturing Future?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-slate-300 mb-8"
          >
            The manufacturers who act now will secure positions that define their
            success for decades. Those who wait will wonder what could have been.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700"
          >
            <p className="text-white font-medium mb-4">
              Your free manufacturing assessment takes 30 minutes. You&apos;ll walk away with:
            </p>
            <ul className="space-y-2 text-left max-w-md mx-auto">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white px-8"
              asChild
            >
              <Link href="/contact">
                Schedule My Free Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="flex items-center space-x-2 text-white hover:text-red-400 transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span className="font-medium">Call Now: {siteConfig.contact.phone}</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
