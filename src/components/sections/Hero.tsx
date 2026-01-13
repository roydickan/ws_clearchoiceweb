"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  headline: string;
  subheadline: string;
  primaryCTA: { text: string; href: string };
  secondaryCTA?: { text: string; href: string };
  backgroundImage?: string;
}

export function Hero({
  headline,
  subheadline,
  primaryCTA,
  secondaryCTA,
  backgroundImage = "/images/hero-bg.jpg",
}: HeroProps) {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content */}
      <div className="container relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6"
          >
            <span className="text-orange-400 text-sm font-medium">
              North Carolina&apos;s Manufacturing Transformation Partner
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
            {headline}
          </h1>

          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
            {subheadline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg"
              asChild
            >
              <Link href={primaryCTA.href}>
                {primaryCTA.text}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            {secondaryCTA && (
              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 text-white hover:bg-slate-800 px-8 py-6 text-lg"
                asChild
              >
                <Link href={secondaryCTA.href}>{secondaryCTA.text}</Link>
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
