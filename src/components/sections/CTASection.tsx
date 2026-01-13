"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="bg-black py-32 relative overflow-hidden">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 tracking-tight">
            Ready to transform?
          </h2>
          <p className="text-xl md:text-2xl text-white/60 mb-10 font-light leading-relaxed max-w-2xl mx-auto">
            The manufacturers who act now will secure positions that define their success for decades.
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              className="bg-white text-black hover:bg-white/90 rounded-full px-8 h-14 text-lg font-medium"
              asChild
            >
              <Link href="/contact">
                Get your free assessment
              </Link>
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="text-blue-400 hover:text-blue-300 hover:bg-transparent rounded-full px-8 h-14 text-lg font-medium"
              asChild
            >
              <Link href="/about">
                Learn more about us →
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
