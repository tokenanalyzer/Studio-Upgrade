"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Target, Heart, Zap, Shield } from "lucide-react";

const values = [
  {
    icon: Target, title: "Precision",
    description: "Every pixel, every line of code, every interaction is crafted with intention and care.",
  },
  {
    icon: Heart, title: "Passion",
    description: "We love what we do, and it shows in the quality of our work and relationships.",
  },
  {
    icon: Zap, title: "Innovation",
    description: "We stay ahead of the curve, adopting cutting-edge technologies and methodologies.",
  },
  {
    icon: Shield, title: "Integrity",
    description: "Transparency, honesty, and ethical practices guide every decision we make.",
  },
];

export default function AboutValues() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-white">
      <div className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="inline-block text-sm font-semibold text-accent-600 uppercase tracking-widest mb-4">
              Our Values
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              What Drives <span className="text-gradient">Us</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 glass-card card-glow-hover"
              >
                <div className="w-14 h-14 bg-accent-50 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <value.icon className="w-7 h-7 text-accent-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
