"use client";

import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-[10%] w-96 h-96 bg-accent-50/50 rounded-full blur-3xl" />
      </div>
      <div className="section-padding relative z-10">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-sm font-semibold text-accent-600 uppercase tracking-widest mb-4">Contact</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">Let us <span className="text-gradient">Talk</span></h1>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">Have a project in mind? We would love to hear about it. Send us a message and we will get back within 24 hours.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
