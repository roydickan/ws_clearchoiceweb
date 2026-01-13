"use client";

import { motion } from "framer-motion";
import { Handshake, MapPin, Shield } from "lucide-react";

const features = [
  {
    icon: Handshake,
    title: "We're Partners, Not Consultants",
    description:
      "Most consultants hand you a report and disappear. We roll up our sleeves and work alongside your team until you're winning contracts.",
  },
  {
    icon: MapPin,
    title: "We Know NC Manufacturing",
    description:
      "This isn't a side project for us. We're embedded in NC's manufacturing ecosystem—connected to OEMs, economic development agencies, and technology providers.",
  },
  {
    icon: Shield,
    title: "We Guarantee Results",
    description:
      "Our 10X ROI guarantee isn't marketing fluff. If we don't identify optimization opportunities worth 10 times your investment, you get a full refund.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
          >
            Why Manufacturers Choose Clear Choice
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-6">
                <feature.icon className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
