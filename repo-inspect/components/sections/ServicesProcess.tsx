"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Search, PenTool, Code, Rocket, Headphones } from "lucide-react";

const steps = [
  { number: "01", icon: Search, title: "Discovery", description: "We dive deep into your business, users, and goals. Through workshops and research, we uncover insights that drive strategy." },
  { number: "02", icon: PenTool, title: "Design", description: "We craft wireframes, prototypes, and visual designs that balance aesthetics with usability. Every pixel is intentional." },
  { number: "03", icon: Code, title: "Development", description: "We build with modern tech stacks, clean architecture, and best practices. Code reviews and testing ensure quality." },
  { number: "04", icon: Rocket, title: "Launch", description: "We deploy with CI/CD, monitor performance, and ensure a smooth go-live. Your product is ready for the world." },
  { number: "05", icon: Headphones, title: "Support", description: "Post-launch, we provide ongoing maintenance, updates, and optimization to keep your product performing at its best." },
];

export default function ServicesProcess() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-slate-50/50">
      <div className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="inline-block text-sm font-semibold text-accent-600 uppercase tracking-widest mb-4">
              Process
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              How We <span className="text-gradient">Work</span>
            </h2>
            <p className="text-lg text-slate-500">
              A proven process that ensures every project is delivered on time, on budget, and above expectations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative text-center p-6"
              >
                <div className="w-14 h-14 bg-accent-50 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <step.icon className="w-6 h-6 text-accent-600" />
                </div>
                <span className="text-xs font-bold text-accent-400 mb-2 block">{step.number}</span>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
