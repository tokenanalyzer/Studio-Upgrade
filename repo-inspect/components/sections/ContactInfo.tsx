"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Clock, ArrowUpRight } from "lucide-react";
import { createBrowserClient } from "@/lib/supabase/client";

interface ContactData {
  contact_email?: string;
  contact_phone?: string;
  contact_address?: string;
  contact_hours?: string;
}

interface SocialLink {
  platform: string;
  url: string;
}

export default function ContactInfo() {
  const [contactData, setContactData] = useState<ContactData>({});
  const [socialLinks, setSocialLinks] = useState<SocialLink[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const supabase = createBrowserClient();
        const { data: settings } = await supabase
          .from("settings")
          .select("key, value")
          .in("key", ["contact_email", "contact_phone", "contact_address", "contact_hours"]);

        const dataMap: ContactData = {};
        settings?.forEach((item) => {
          if (item.key === "contact_email") dataMap.contact_email = item.value;
          if (item.key === "contact_phone") dataMap.contact_phone = item.value;
          if (item.key === "contact_address") dataMap.contact_address = item.value;
          if (item.key === "contact_hours") dataMap.contact_hours = item.value;
        });
        setContactData(dataMap);

        const { data: socials } = await supabase
          .from("social_links")
          .select("platform, url")
          .eq("published", true);
        setSocialLinks(socials || []);
      } catch {
        // Fallback
      }
    };
    fetchData();
  }, []);

  const contactDetails = [
    { icon: Mail, label: "Email", value: contactData.contact_email || "hello@mdstudio.com", href: `mailto:${contactData.contact_email || "hello@mdstudio.com"}` },
    { icon: Phone, label: "Phone", value: contactData.contact_phone || "+1 (555) 123-4567", href: `tel:${(contactData.contact_phone || "+15551234567").replace(/\D/g, "")}` },
    { icon: MapPin, label: "Location", value: contactData.contact_address || "San Francisco, CA", href: "#" },
    { icon: Clock, label: "Availability", value: contactData.contact_hours || "Mon - Fri, 9AM - 6PM PST", href: "#" },
  ];

  const fallbackSocials = [
    { label: "Twitter", href: "https://twitter.com/mdstudio" },
    { label: "GitHub", href: "https://github.com/mdstudio" },
    { label: "LinkedIn", href: "https://linkedin.com/company/mdstudio" },
    { label: "Dribbble", href: "https://dribbble.com/mdstudio" },
  ];

  const displaySocials = socialLinks.length > 0
    ? socialLinks.map((s) => ({ label: s.platform, href: s.url }))
    : fallbackSocials;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="space-y-8"
    >
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h2>
        <p className="text-slate-500 mb-8">Prefer to reach out directly? Here is how you can get in touch with us.</p>
      </div>

      <div className="space-y-4">
        {contactDetails.map((detail) => (
          <a key={detail.label} href={detail.href} className="flex items-center gap-4 p-4 glass-card card-glow-hover group">
            <div className="w-10 h-10 bg-accent-50 rounded-xl flex items-center justify-center group-hover:bg-accent-100 transition-colors">
              <detail.icon className="w-5 h-5 text-accent-600" />
            </div>
            <div>
              <p className="text-xs text-slate-400">{detail.label}</p>
              <p className="text-sm font-medium text-slate-900">{detail.value}</p>
            </div>
          </a>
        ))}
      </div>

      <div>
        <h3 className="text-sm font-semibold text-slate-900 mb-4">Follow Us</h3>
        <div className="flex flex-wrap gap-3">
          {displaySocials.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-4 py-2 glass-card text-sm font-medium text-slate-700 hover:text-accent-600 hover:border-accent-200 transition-all duration-300">
              {link.label}<ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          ))}
        </div>
      </div>

      <div className="p-6 bg-accent-50 border border-accent-100 rounded-xl">
        <h3 className="text-sm font-semibold text-slate-900 mb-2">Response Time</h3>
        <p className="text-sm text-slate-500">We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly.</p>
      </div>
    </motion.div>
  );
}
