"use client";

import Link from "next/link";
import { ArrowUpRight, Github, Twitter, Linkedin, Mail } from "lucide-react";

const footerLinks = {
  Services: [
    { label: "Web Development", href: "/services" },
    { label: "UI/UX Design", href: "/services" },
    { label: "SaaS Engineering", href: "/services" },
    { label: "Brand Identity", href: "/services" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Blog", href: "/blog" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "https://twitter.com/mdstudio", label: "Twitter" },
  { icon: Github, href: "https://github.com/mdstudio", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/company/mdstudio", label: "LinkedIn" },
  { icon: Mail, href: "mailto:hello@mdstudio.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="section-padding pt-20 pb-8">
        <div className="container-wide">
          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-slate-800">
            {/* Brand */}
            <div className="lg:col-span-4">
              <Link href="/" className="flex items-baseline gap-0.5 mb-6">
                <span className="text-xl font-bold text-accent-400">M</span>
                <span className="text-xl font-bold text-accent-400">D</span>
                <span className="text-xl font-bold text-white ml-1">Studio</span>
              </Link>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
                Award-winning digital studio crafting premium web experiences,
                SaaS products, and brand identities.
              </p>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-accent-600 hover:text-white transition-all duration-300"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h3 className="font-semibold text-sm mb-4 text-slate-200">{category}</h3>
                  <ul className="space-y-3">
                    {links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="text-sm text-slate-400 hover:text-white transition-colors duration-200 inline-flex items-center gap-1 group"
                        >
                          {link.label}
                          <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Newsletter */}
            <div className="lg:col-span-2">
              <h3 className="font-semibold text-sm mb-4 text-slate-200">Stay Updated</h3>
              <p className="text-sm text-slate-400 mb-4">
                Get the latest insights delivered to your inbox.
              </p>
              <form
                onSubmit={(e) => { e.preventDefault(); }}
                className="flex flex-col gap-2"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-accent-500 transition-colors"
                />
                <button
                  type="submit"
                  className="w-full px-3 py-2.5 bg-accent-600 text-white text-sm font-medium rounded-xl hover:bg-accent-700 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500">
              &copy; {new Date().getFullYear()} M.D Studio. All rights reserved.
            </p>
            <p className="text-sm text-slate-500">
              Crafted with <span className="text-red-400">❤️</span> by Adil Hussain
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
