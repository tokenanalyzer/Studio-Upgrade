import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/85 backdrop-blur-2xl border-b border-slate-200/60 shadow-sm"
            : "bg-transparent"
        }`}
        style={{
          animation: "slideDown 0.6s ease-out",
        }}
      >
        <style>{`
          @keyframes slideDown {
            from { transform: translateY(-100%); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
        `}</style>
        <div className="section-padding">
          <div className="container-wide">
            <nav className="flex items-center justify-between h-16 lg:h-20">
              {/* Logo */}
              <a href="/" className="relative flex items-baseline gap-0 group">
                <span style={{ fontSize: "1.4rem", fontWeight: 800, color: "#2563EB", letterSpacing: "-0.02em" }}>M</span>
                <span style={{ position: "relative", display: "inline-block" }}>
                  <span style={{ fontSize: "1.1rem", fontWeight: 800, color: "#F59E0B", position: "relative", top: "-2px" }}>✦</span>
                </span>
                <span style={{ fontSize: "1.4rem", fontWeight: 800, color: "#2563EB", letterSpacing: "-0.02em" }}>D</span>
                <span style={{ fontSize: "1.4rem", fontWeight: 800, color: "#0f172a", marginLeft: "0.35rem", letterSpacing: "-0.02em" }}>Studio</span>
                {/* Shooting star SVG */}
                <svg
                  className="absolute pointer-events-none overflow-visible"
                  style={{ top: "-4px", left: 0, width: "100%", height: "32px" }}
                  viewBox="0 0 160 32" fill="none"
                >
                  <defs>
                    <linearGradient id="sg" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#2563EB" stopOpacity="0" />
                      <stop offset="50%" stopColor="#2563EB" stopOpacity="1" />
                      <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 8 4 Q 40 0, 80 16 Q 120 32, 152 8"
                    stroke="url(#sg)" strokeWidth="1.5"
                    strokeDasharray="4 4" fill="none"
                    style={{ animation: "shooting-star 4s ease-in-out infinite", opacity: 0 }}
                  />
                  <circle
                    cx="0" cy="0" r="3" fill="#2563EB"
                    style={{
                      animation: "shooting-star 4s ease-in-out infinite",
                      offsetPath: "path('M 8 4 Q 40 0, 80 16 Q 120 32, 152 8')",
                      opacity: 0,
                    }}
                  />
                </svg>
              </a>

              {/* Desktop Nav */}
              <div className="hidden lg:flex items-center gap-1">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="relative px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors duration-200 group"
                    style={{ background: "none", border: "none", cursor: "pointer" }}
                  >
                    {link.label}
                    <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-blue-600 rounded-full transition-all duration-300 group-hover:w-full" />
                  </button>
                ))}
              </div>

              {/* CTA */}
              <div className="hidden lg:flex items-center gap-3">
                <button
                  onClick={() => handleNavClick("#contact")}
                  className="btn-primary text-sm"
                >
                  Let us Talk
                  <ArrowUpRight size={15} />
                </button>
              </div>

              {/* Mobile Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl hover:bg-slate-100 transition-colors"
                style={{ background: "none", border: "none", cursor: "pointer" }}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen
                  ? <X size={20} className="text-slate-700" />
                  : <Menu size={20} className="text-slate-700" />}
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-x-0 top-16 z-40 lg:hidden"
          style={{
            background: "rgba(255,255,255,0.97)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid #E2E8F0",
            boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
            animation: "fadeDown 0.25s ease-out",
          }}
        >
          <style>{`
            @keyframes fadeDown {
              from { opacity: 0; transform: translateY(-10px); }
              to { opacity: 1; transform: translateY(0); }
            }
          `}</style>
          <div className="section-padding py-5">
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left px-4 py-3 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                  style={{ background: "none", border: "none", cursor: "pointer", width: "100%" }}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick("#contact")}
                className="btn-primary mt-3 justify-center text-sm"
              >
                Let us Talk
                <ArrowUpRight size={15} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
