"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  description: string;
  ctaText?: string;
  ctaHref?: string;
}

export function ServiceHero({
  title,
  subtitle,
  description,
  ctaText = "Get Started",
  ctaHref = "/contact",
}: ServiceHeroProps) {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10" />
      <motion.div
        className="absolute -top-40 -right-40 w-80 h-80 bg-red-600/10 rounded-full blur-3xl"
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-red-600/10 border border-red-600/20 text-red-400 text-sm font-medium mb-4">
            {subtitle}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {title}
          </h1>
          <p className="text-lg text-slate-300 mb-8">{description}</p>
          <Button
            size="lg"
            className="bg-red-600 hover:bg-red-700"
            asChild
          >
            <Link href={ctaHref}>
              {ctaText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
