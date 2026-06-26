"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  Code2, Palette, Layers, Fingerprint, Zap, Globe,
  Smartphone, Database, ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Code2, title: "Web Development",
    description: "Full-stack web applications built with Next.js, React, and modern frameworks. Performance-first architecture with 95+ Lighthouse scores.",
    features: ["Next.js 15", "TypeScript", "API Design", "Server Components", "Edge Functions"],
    price: "From $5,000",
  },
  {
    icon: Palette, title: "UI/UX Design",
    description: "Human-centered design that converts. From wireframes to pixel-perfect interfaces, we create experiences users love.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems", "Usability Testing"],
    price: "From $3,000",
  },
  {
    icon: Layers, title: "SaaS Engineering",
    description: "End-to-end SaaS product development. Scalable architecture, auth, billing, and real-time features.",
    features: ["Multi-tenant", "Auth & RBAC", "Stripe Integration", "Real-time", "API Gateway"],
    price: "From $15,000",
  },
  {
    icon: Fingerprint, title: "Brand Identity",
    description: "Strategic brand design that differentiates. Logos, visual systems, and brand guidelines that tell your story.",
    features: ["Logo Design", "Visual Identity", "Brand Guidelines", "Strategy", "Collateral"],
    price: "From $2,500",
  },
  {
    icon: Zap, title: "Performance Optimization",
    description: "Speed is a feature. We optimize every millisecond with code splitting, lazy loading, and edge caching.",
    features: ["Core Web Vitals", "Edge Caching", "Bundle Analysis", "CDN Setup", "Monitoring"],
    price: "From $1,500",
  },
  {
    icon: Globe, title: "SEO & Marketing",
    description: "Technical SEO, content strategy, and analytics setup to drive organic growth and measurable results.",
    features: ["Technical SEO", "Content Strategy", "Analytics", "A/B Testing", "Conversion"],
    price: "From $2,000",
  },
  {
    icon: Smartphone, title: "Mobile Development",
    description: "Native and cross-platform mobile applications with React Native and progressive web app capabilities.",
    features: ["React Native", "PWA", "Push Notifications", "Offline Support", "App Store"],
    price: "From $8,000",
  },
  {
    icon: Database, title: "Database Architecture",
    description: "Scalable database design and optimization. From schema design to query optimization and replication.",
    features: ["Schema Design", "Query Optimization", "Replication", "Migration", "Monitoring"],
    price: "From $3,000",
  },
];

export default function ServicesList() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-white">
      <div className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 lg:p-8 glass-card card-glow-hover"
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-accent-50 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-accent-100 transition-colors duration-300">
                    <service.icon className="w-6 h-6 text-accent-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
                      <span className="text-sm font-medium text-accent-600">{service.price}</span>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4">{service.description}</p>
                    <div className="flex flex-wrap gap-2 mb-5">
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
                      href="/contact"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-600 hover:gap-2.5 transition-all duration-300"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
