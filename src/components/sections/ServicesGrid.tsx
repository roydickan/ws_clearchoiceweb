"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cpu, Settings, Link as LinkIcon, Users, ArrowRight } from "lucide-react";
import { services } from "@/lib/constants";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Cpu,
  Settings,
  Link: LinkIcon,
  Users,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function ServicesGrid() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Four Pillars of Manufacturing Transformation
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We don&apos;t offer generic consulting. We deliver battle-tested frameworks
            that have helped manufacturers across North Carolina become preferred OEM partners.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div key={service.title} variants={itemVariants}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 group">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center mb-4 group-hover:bg-orange-500 transition-colors duration-300">
                      <Icon className="h-6 w-6 text-orange-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="link" className="p-0 h-auto text-orange-600" asChild>
                      <Link href={service.href}>
                        Learn More <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
