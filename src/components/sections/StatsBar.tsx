"use client";

import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { stats } from "@/lib/constants";

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold text-white">
      {count}
      {suffix}
    </span>
  );
}

export function StatsBar() {
  return (
    <section className="bg-slate-900 py-16 border-y border-slate-800">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Proven Results That Speak for Themselves
          </h2>
          <p className="text-slate-400">
            Average results achieved by our manufacturing partners
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              <p className="text-slate-400 mt-2 text-sm md:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
