"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface Result {
  value: number;
  suffix: string;
  label: string;
}

interface ResultsGridProps {
  title: string;
  subtitle?: string;
  results: Result[];
}

function AnimatedStat({ value, suffix, label }: Result) {
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
    <div ref={ref} className="text-center p-6 bg-white rounded-xl shadow-sm">
      <div className="text-4xl font-bold text-orange-600 mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-slate-600 text-sm">{label}</div>
    </div>
  );
}

export function ResultsGrid({ title, subtitle, results }: ResultsGridProps) {
  return (
    <section className="py-16 bg-slate-100">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">{title}</h2>
          {subtitle && (
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">{subtitle}</p>
          )}
        </div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {results.map((result, index) => (
            <AnimatedStat key={index} {...result} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
