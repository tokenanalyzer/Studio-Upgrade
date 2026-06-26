"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  Code2, Palette, Layers, Fingerprint, Zap, Globe, ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Code2, title: "Web Development",
    description: "Full-stack web applications built with Next.js, React, and modern frameworks. Performance-first architecture with 95+ Lighthouse scores.",
    features: ["Next.js 15", "TypeScript", "API Design", "Server Components"],
  },
  {
    icon: Palette, title: "UI/UX Design",
    description: "Human-centered design that converts. From wireframes to pixel-perfect interfaces, we create experiences users love.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
  },
  {
    icon: Layers, title: "SaaS Engineering",
    description: "End-to-end SaaS product development. Scalable architecture, auth, billing, and real-time features.",
    features: ["Multi-tenant", "Auth & RBAC", "Stripe Integration", "Real-time"],
  },
  {
    icon: Fingerprint, title: "Brand Identity",
    description: "Strategic brand design that differentiates. Logos, visual systems, and brand guidelines that tell your story.",
    features: ["Logo Design", "Visual Identity", "Brand Guidelines", "Strategy"],
  },
  {
    icon: Zap, title: "Performance Optimization",
    description: "Speed is a feature. We optimize every millisecond with code splitting, lazy loading, and edge caching.",
    features: ["Core Web Vitals", "Edge Caching", "Bundle Analysis", "CDN Setup"],
  },
  {
    icon: Globe, title: "SEO & Marketing",
    description: "Technical SEO, content strategy, and analytics setup to drive organic growth and measurable results.",
    features: ["Technical SEO", "Content Strategy", "Analytics", "A/B Testing"],
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-50/50 rounded-full blur-3xl pointer-events-none" />

      <div className="section-padding relative z-10">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16 lg:mb-20"
          >
            <span className="inline-block text-sm font-semibold text-accent-600 uppercase tracking-widest mb-4">
              What We Do
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Services Built for{" "}
              <span className="text-gradient">Impact</span>
            </h2>
            <p className="text-lg text-slate-500">
              From concept to deployment, we deliver end-to-end digital solutions
              that drive measurable business outcomes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 lg:p-8 glass-card card-glow-hover"
              >
                <div className="w-12 h-12 bg-accent-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent-100 transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-accent-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-2.5 py-1 bg-slate-50 text-xs font-medium text-slate-500 rounded-md border border-slate-100"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-600 hover:gap-2.5 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
