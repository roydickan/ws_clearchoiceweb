"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background with manufacturing image - Apple style subtle */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Manufacturing facility"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
      </div>

      {/* Content - Apple centered style */}
      <div className="container relative z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-red-500 text-lg md:text-xl font-medium tracking-wide mb-4"
          >
            Manufacturing Transformation
          </motion.p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold text-white mb-6 tracking-tight leading-[1.1]">
            {headline}
          </h1>

          <p className="text-xl md:text-2xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
            Transform your manufacturing operation for the $60B NC opportunity.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              className="bg-white text-black hover:bg-white/90 rounded-full px-8 h-14 text-lg font-medium"
              asChild
            >
              <Link href={primaryCTA.href}>
                {primaryCTA.text}
              </Link>
            </Button>
            {secondaryCTA && (
              <Button
                size="lg"
                variant="ghost"
                className="text-blue-400 hover:text-blue-300 hover:bg-transparent rounded-full px-8 h-14 text-lg font-medium"
                asChild
              >
                <Link href={secondaryCTA.href}>
                  {secondaryCTA.text} →
                </Link>
              </Button>
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator - Apple style */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 bg-white/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
