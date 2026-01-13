"use client";

import { motion } from "framer-motion";

interface Phase {
  title: string;
  duration?: string;
  description: string;
  items?: string[];
}

interface ProcessTimelineProps {
  title: string;
  subtitle?: string;
  phases: Phase[];
}

export function ProcessTimeline({ title, subtitle, phases }: ProcessTimelineProps) {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">{title}</h2>
          {subtitle && (
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">{subtitle}</p>
          )}
        </div>

        <div className="max-w-4xl mx-auto">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 pb-8 last:pb-0"
            >
              {/* Timeline line */}
              {index < phases.length - 1 && (
                <div className="absolute left-[11px] top-8 bottom-0 w-0.5 bg-orange-200" />
              )}

              {/* Timeline dot */}
              <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-red-600 flex items-center justify-center text-white text-xs font-bold">
                {index + 1}
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {phase.title}
                  </h3>
                  {phase.duration && (
                    <span className="px-2 py-0.5 bg-red-100 text-orange-700 text-xs font-medium rounded">
                      {phase.duration}
                    </span>
                  )}
                </div>
                <p className="text-slate-600 text-sm mb-3">{phase.description}</p>
                {phase.items && (
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-1">
                    {phase.items.map((item, idx) => (
                      <li key={idx} className="text-sm text-slate-500 flex items-start">
                        <span className="text-red-600 mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
