"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Save, Globe, Mail, Palette, Type, Image, Share2, Search, BarChart3 } from "lucide-react";

const settingsSections = [
  {
    icon: Type,
    title: "Hero CMS",
    description: "Manage hero section headline, description, and badges.",
    fields: [
      { label: "Hero Badge", type: "text", placeholder: "Digital Solutions That Drive Growth", key: "hero_badge" },
      { label: "Hero Headline Line 1", type: "text", placeholder: "Building Intelligent", key: "hero_headline_1" },
      { label: "Hero Headline Line 2", type: "text", placeholder: "Digital Products", key: "hero_headline_2" },
      { label: "Hero Description", type: "textarea", placeholder: "We help startups and businesses...", key: "hero_description" },
      { label: "Primary CTA Text", type: "text", placeholder: "Start a Project", key: "hero_cta_primary" },
      { label: "Secondary CTA Text", type: "text", placeholder: "View Portfolio", key: "hero_cta_secondary" },
    ],
  },
  {
    icon: Image,
    title: "Logo CMS",
    description: "Configure logo text and branding elements.",
    fields: [
      { label: "Logo Text M", type: "text", placeholder: "M", key: "logo_m" },
      { label: "Logo Text D", type: "text", placeholder: "D", key: "logo_d" },
      { label: "Logo Text Studio", type: "text", placeholder: "Studio", key: "logo_studio" },
    ],
  },
  {
    icon: Globe,
    title: "Site Settings",
    description: "Configure your site name, URL, and default metadata.",
    fields: [
      { label: "Site Name", type: "text", placeholder: "M.D Studio", key: "site_name" },
      { label: "Site URL", type: "url", placeholder: "https://mdstudio.vercel.app", key: "site_url" },
      { label: "Default Description", type: "textarea", placeholder: "Award-winning digital studio...", key: "site_description" },
    ],
  },
  {
    icon: Mail,
    title: "Contact Settings",
    description: "Set your contact email, phone, and business details.",
    fields: [
      { label: "Contact Email", type: "email", placeholder: "hello@mdstudio.com", key: "contact_email" },
      { label: "Phone Number", type: "tel", placeholder: "+1 (555) 123-4567", key: "contact_phone" },
      { label: "Address", type: "text", placeholder: "San Francisco, CA", key: "contact_address" },
      { label: "Business Hours", type: "text", placeholder: "Mon - Fri, 9AM - 6PM PST", key: "contact_hours" },
      { label: "WhatsApp Number", type: "tel", placeholder: "+15551234567", key: "whatsapp_number" },
    ],
  },
  {
    icon: Share2,
    title: "Social Links",
    description: "Manage social media links.",
    fields: [
      { label: "Twitter URL", type: "url", placeholder: "https://twitter.com/mdstudio", key: "social_twitter" },
      { label: "GitHub URL", type: "url", placeholder: "https://github.com/mdstudio", key: "social_github" },
      { label: "LinkedIn URL", type: "url", placeholder: "https://linkedin.com/company/mdstudio", key: "social_linkedin" },
      { label: "Dribbble URL", type: "url", placeholder: "https://dribbble.com/mdstudio", key: "social_dribbble" },
    ],
  },
  {
    icon: Palette,
    title: "Appearance",
    description: "Customize colors and branding.",
    fields: [
      { label: "Primary Color", type: "color", placeholder: "#2563EB", key: "primary_color" },
      { label: "Secondary Color", type: "color", placeholder: "#38BDF8", key: "secondary_color" },
      { label: "Accent Color", type: "color", placeholder: "#8B5CF6", key: "accent_color" },
    ],
  },
  {
    icon: Search,
    title: "SEO Settings",
    description: "Configure SEO metadata and analytics.",
    fields: [
      { label: "Meta Title", type: "text", placeholder: "M.D Studio | Award-Winning Digital Studio", key: "seo_title" },
      { label: "Meta Description", type: "textarea", placeholder: "Award-winning digital studio...", key: "seo_description" },
      { label: "Google Analytics ID", type: "text", placeholder: "G-XXXXXXXXXX", key: "ga_id" },
    ],
  },
];

export default function AdminSettingsPage() {
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Settings</h1>
          <p className="text-slate-500">Manage your site configuration and preferences.</p>
        </div>
        <button onClick={handleSave} className="btn-primary">
          <Save className="w-4 h-4" />
          {saved ? "Saved!" : "Save Changes"}
        </button>
      </div>

      <div className="space-y-6">
        {settingsSections.map((section, index) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="bg-white rounded-xl border border-slate-200 p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-accent-50 rounded-xl flex items-center justify-center">
                <section.icon className="w-5 h-5 text-accent-600" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-slate-900">{section.title}</h2>
                <p className="text-sm text-slate-500">{section.description}</p>
              </div>
            </div>

            <div className="space-y-4 mt-6">
              {section.fields.map((field) => (
                <div key={field.key}>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">{field.label}</label>
                  {field.type === "textarea" ? (
                    <textarea
                      placeholder={field.placeholder}
                      rows={3}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-colors resize-none"
                    />
                  ) : field.type === "color" ? (
                    <div className="flex items-center gap-3">
                      <input
                        type="color"
                        defaultValue={field.placeholder}
                        className="w-10 h-10 rounded-xl border border-slate-200 cursor-pointer"
                      />
                      <input
                        type="text"
                        defaultValue={field.placeholder}
                        className="flex-1 px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-accent-500"
                      />
                    </div>
                  ) : (
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-colors"
                    />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
