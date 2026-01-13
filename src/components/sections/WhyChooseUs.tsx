"use client";

import { motion } from "framer-motion";

const features = [
  {
    number: "01",
    title: "Partners, not consultants",
    description:
      "We roll up our sleeves and work alongside your team until you're winning contracts.",
  },
  {
    number: "02",
    title: "NC manufacturing experts",
    description:
      "Embedded in NC's manufacturing ecosystem—connected to OEMs and technology providers.",
  },
  {
    number: "03",
    title: "Guaranteed results",
    description:
      "10X ROI guarantee. If we don't deliver, you get a full refund.",
  },
];

export function WhyChooseUs() {
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
            Why Clear Choice
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <p className="text-6xl font-semibold text-gray-200 mb-6">{feature.number}</p>
              <h3 className="text-2xl font-semibold text-black mb-4 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-lg font-light leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
