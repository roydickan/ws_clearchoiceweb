"use client";

import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";

interface Feature {
  icon: string;
  title: string;
  description: string;
  items?: string[];
}

interface FeatureGridProps {
  title: string;
  subtitle?: string;
  features: Feature[];
  columns?: 2 | 3 | 4;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function FeatureGrid({
  title,
  subtitle,
  features,
  columns = 2,
}: FeatureGridProps) {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">{title}</h2>
          {subtitle && (
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">{subtitle}</p>
          )}
        </div>

        <motion.div
          className={`grid grid-cols-1 ${gridCols[columns]} gap-6`}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature) => {
            const IconComponent = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[feature.icon] || LucideIcons.Circle;
            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="bg-slate-50 rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center mb-4">
                  <IconComponent className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-sm mb-3">{feature.description}</p>
                {feature.items && (
                  <ul className="space-y-1">
                    {feature.items.map((item, idx) => (
                      <li key={idx} className="text-sm text-slate-500 flex items-start">
                        <span className="text-orange-500 mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
