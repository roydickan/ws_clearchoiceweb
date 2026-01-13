"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Cpu, Settings, Link as LinkIcon, Users } from "lucide-react";
import { services } from "@/lib/constants";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Cpu,
  Settings,
  Link: LinkIcon,
  Users,
};

export function ServicesGrid() {
  return (
    <section className="bg-[#f5f5f7] py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-black mb-6 tracking-tight">
            Four Pillars of Transformation
          </h2>
          <p className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto font-light leading-relaxed">
            Battle-tested frameworks that have helped manufacturers across North Carolina become preferred OEM partners.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={service.href} className="block group">
                  <div className="bg-white rounded-3xl p-10 h-full transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
                    <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center mb-6 group-hover:bg-red-500 transition-colors duration-300">
                      <Icon className="h-7 w-7 text-gray-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-2xl font-semibold text-black mb-3 tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 text-lg leading-relaxed mb-6 font-light">
                      {service.description}
                    </p>
                    <span className="text-red-500 font-medium inline-flex items-center group-hover:gap-2 transition-all">
                      Learn more 
                      <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
