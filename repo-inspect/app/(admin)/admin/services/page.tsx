"use client";

import { motion } from "framer-motion";
import { Save, Code2, Palette, Layers, Fingerprint, Zap, Globe } from "lucide-react";
import { useState } from "react";

const services = [
  { icon: Code2, title: "Web Development", description: "Full-stack web applications...", features: ["Next.js 15", "TypeScript", "API Design", "Server Components"] },
  { icon: Palette, title: "UI/UX Design", description: "Human-centered design...", features: ["User Research", "Wireframing", "Prototyping", "Design Systems"] },
  { icon: Layers, title: "SaaS Engineering", description: "End-to-end SaaS product...", features: ["Multi-tenant", "Auth & RBAC", "Stripe Integration", "Real-time"] },
  { icon: Fingerprint, title: "Brand Identity", description: "Strategic brand design...", features: ["Logo Design", "Visual Identity", "Brand Guidelines", "Strategy"] },
  { icon: Zap, title: "Performance Optimization", description: "Speed is a feature...", features: ["Core Web Vitals", "Edge Caching", "Bundle Analysis", "CDN Setup"] },
  { icon: Globe, title: "SEO & Marketing", description: "Technical SEO...", features: ["Technical SEO", "Content Strategy", "Analytics", "A/B Testing"] },
];

export default function AdminServicesPage() {
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Services</h1>
          <p className="text-slate-500">Manage services displayed on the website.</p>
        </div>
        <button onClick={handleSave} className="btn-primary">
          <Save className="w-4 h-4" />
          {saved ? "Saved!" : "Save Changes"}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="bg-white rounded-xl border border-slate-200 p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-accent-50 rounded-xl flex items-center justify-center">
                <service.icon className="w-5 h-5 text-accent-600" />
              </div>
              <input
                defaultValue={service.title}
                className="flex-1 px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium text-slate-900 focus:outline-none focus:border-accent-500"
              />
            </div>
            <textarea
              defaultValue={service.description}
              rows={2}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-600 focus:outline-none focus:border-accent-500 resize-none mb-3"
            />
            <div className="flex flex-wrap gap-2">
              {service.features.map((f) => (
                <span key={f} className="px-2 py-1 bg-slate-100 text-xs text-slate-500 rounded-md">{f}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
