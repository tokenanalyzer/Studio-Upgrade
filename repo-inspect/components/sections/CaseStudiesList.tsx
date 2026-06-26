"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, TrendingUp, Users, Clock, DollarSign } from "lucide-react";
import Link from "next/link";

const caseStudies = [
  {
    title: "Finova: Revolutionizing Financial Analytics",
    client: "Finova Inc.",
    industry: "Fintech",
    challenge: "Finova needed a real-time analytics dashboard that could process millions of transactions while maintaining sub-second latency.",
    solution: "We built a Next.js 15 application with server components, WebSocket connections for real-time data, and a custom D3.js visualization layer.",
    results: [
      { label: "Load Time", value: "-78%", icon: Clock },
      { label: "User Engagement", value: "+145%", icon: Users },
      { label: "Revenue", value: "+$2.4M", icon: DollarSign },
      { label: "Efficiency", value: "+200%", icon: TrendingUp },
    ],
  },
  {
    title: "Aurora: Reimagining E-Commerce",
    client: "Aurora Retail",
    industry: "E-Commerce",
    challenge: "Aurora's legacy platform was slow, hard to maintain, and conversion rates were declining year over year.",
    solution: "A complete headless rebuild with Next.js, Stripe integration, advanced search with Algolia, and a custom CMS.",
    results: [
      { label: "Conversion", value: "+65%", icon: TrendingUp },
      { label: "Page Speed", value: "99/100", icon: Clock },
      { label: "Cart Abandonment", value: "-40%", icon: Users },
      { label: "Revenue", value: "+$5.2M", icon: DollarSign },
    ],
  },
  {
    title: "HealthTrack: Modernizing Healthcare",
    client: "MedTech Solutions",
    industry: "Healthcare",
    challenge: "A fragmented patient management system causing delays, errors, and poor patient experience.",
    solution: "A HIPAA-compliant SaaS platform with patient portals, telemedicine integration, automated scheduling, and EHR connectivity.",
    results: [
      { label: "Patient Satisfaction", value: "+92%", icon: Users },
      { label: "Wait Times", value: "-60%", icon: Clock },
      { label: "Operational Cost", value: "-35%", icon: DollarSign },
      { label: "Appointments", value: "+120%", icon: TrendingUp },
    ],
  },
];

export default function CaseStudiesList() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-slate-50/50">
      <div className="section-padding">
        <div className="container-wide">
          <div className="space-y-12 lg:space-y-16">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-white rounded-2xl border border-slate-200 p-6 lg:p-10"
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="text-xs font-semibold text-accent-600 uppercase tracking-wider px-2.5 py-1 bg-accent-50 rounded-md">{study.industry}</span>
                  <span className="text-xs text-slate-400">{study.client}</span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6">{study.title}</h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900 mb-3">Challenge</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{study.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900 mb-3">Solution</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{study.solution}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  {study.results.map((result) => (
                    <div key={result.label} className="p-4 bg-slate-50 rounded-xl text-center">
                      <result.icon className="w-5 h-5 text-accent-600 mx-auto mb-2" />
                      <p className="text-2xl font-bold text-slate-900 mb-1">{result.value}</p>
                      <p className="text-xs text-slate-500">{result.label}</p>
                    </div>
                  ))}
                </div>

                <Link href="/contact" className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-600 hover:gap-2.5 transition-all duration-300">
                  Start Your Project<ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
