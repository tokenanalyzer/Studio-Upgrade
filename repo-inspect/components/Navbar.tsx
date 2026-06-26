"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Projects", href: "/projects" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-2xl border-b border-slate-200/50 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="section-padding">
          <div className="container-wide">
            <nav className="flex items-center justify-between h-16 lg:h-20">
              {/* Logo */}
              <Link href="/" className="relative flex items-baseline gap-0.5 group">
                <span className="text-xl lg:text-2xl font-bold text-accent-600">M</span>
                <span className="text-xl lg:text-2xl font-bold text-accent-600">D</span>
                <span className="text-xl lg:text-2xl font-bold text-slate-900 ml-1">Studio</span>

                {/* Shooting Star SVG */}
                <svg
                  className="absolute -top-1 left-0 w-full h-8 pointer-events-none overflow-visible"
                  viewBox="0 0 160 32"
                  fill="none"
                >
                  <defs>
                    <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#2563EB" stopOpacity="0" />
                      <stop offset="50%" stopColor="#2563EB" stopOpacity="1" />
                      <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 8 4 Q 40 0, 80 16 Q 120 32, 152 8"
                    stroke="url(#starGradient)"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    fill="none"
                    className="opacity-0"
                    style={{
                      animation: "shooting-star 4s ease-in-out infinite",
                    }}
                  />
                  <circle
                    cx="0"
                    cy="0"
                    r="3"
                    fill="#2563EB"
                    className="opacity-0"
                    style={{
                      animation: "shooting-star 4s ease-in-out infinite",
                      offsetPath: "path('M 8 4 Q 40 0, 80 16 Q 120 32, 152 8')",
                    }}
                  />
                </svg>
              </Link>

              {/* Desktop Nav */}
              <div className="hidden lg:flex items-center gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`nav-link px-3 py-2 ${
                      pathname === link.href ? "active" : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* CTA */}
              <div className="hidden lg:flex items-center gap-3">
                <Link
                  href="/contact"
                  className="btn-primary text-sm"
                >
                  Let us Talk
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Mobile Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl hover:bg-slate-100 transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 text-slate-700" />
                ) : (
                  <Menu className="w-5 h-5 text-slate-700" />
                )}
              </button>
            </nav>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-16 z-40 lg:hidden bg-white/95 backdrop-blur-2xl border-b border-slate-200 shadow-lg"
          >
            <div className="section-padding py-6">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      pathname === link.href
                        ? "bg-accent-50 text-accent-600"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  className="btn-primary mt-4 text-center text-sm"
                >
                  Let us Talk
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
