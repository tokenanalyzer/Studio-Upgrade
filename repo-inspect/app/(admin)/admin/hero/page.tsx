"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Save, Type, Image, Sparkles } from "lucide-react";

export default function AdminHeroPage() {
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Hero CMS</h1>
          <p className="text-slate-500">Manage the hero section content.</p>
        </div>
        <button onClick={handleSave} className="btn-primary">
          <Save className="w-4 h-4" />
          {saved ? "Saved!" : "Save Changes"}
        </button>
      </div>

      <div className="space-y-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-xl border border-slate-200 p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-accent-50 rounded-xl flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-accent-600" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-slate-900">Hero Content</h2>
              <p className="text-sm text-slate-500">Main headline and description.</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Badge Text</label>
              <input defaultValue="Digital Solutions That Drive Growth" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:border-accent-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Headline Line 1</label>
              <input defaultValue="Building Intelligent" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:border-accent-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Headline Line 2</label>
              <input defaultValue="Digital Products" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:border-accent-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Description</label>
              <textarea defaultValue="We help startups and businesses build scalable, modern and high-performance digital solutions." rows={3} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:border-accent-500 resize-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Primary CTA</label>
              <input defaultValue="Start a Project" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:border-accent-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Secondary CTA</label>
              <input defaultValue="View Portfolio" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:border-accent-500" />
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white rounded-xl border border-slate-200 p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-accent-50 rounded-xl flex items-center justify-center">
              <Type className="w-5 h-5 text-accent-600" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-slate-900">Service Tags</h2>
              <p className="text-sm text-slate-500">Tags displayed below the description.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {["Web Development", "SaaS Platforms", "UI/UX Design", "AI Integration"].map((tag) => (
              <input key={tag} defaultValue={tag} className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-accent-500" />
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white rounded-xl border border-slate-200 p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-accent-50 rounded-xl flex items-center justify-center">
              <Image className="w-5 h-5 text-accent-600" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-slate-900">Trust Badges</h2>
              <p className="text-sm text-slate-500">Client count and trust text.</p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Client Count</label>
              <input defaultValue="89+" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:border-accent-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Trust Text</label>
              <input defaultValue="Trusted by 89+ clients worldwide" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:border-accent-500" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
