import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Menu, X, ArrowUpRight, Sun, Moon } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

export const NAV_H = 80;

const navLinks = [
  { label: "Home",      href: "/" },
  { label: "About",     href: "#about" },
  { label: "Services",  href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Blog",      href: "#blog" },
  { label: "Contact",   href: "#contact" },
];

/** Shared Logo — used in Navbar AND Footer. Do NOT duplicate this component. */
export function Logo({ size = "nav" }: { size?: "nav" | "footer" }) {
  const fs = size === "footer" ? "1.85rem" : "1.65rem";
  const starFs = size === "footer" ? "1.2rem" : "1.05rem";

  return (
    <a
      href="/"
      style={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        textDecoration: "none",
        lineHeight: 1,
        userSelect: "none",
      }}
    >
      <span style={{ fontSize: fs, fontWeight: 800, color: "#2563EB", letterSpacing: "-0.03em" }}>
        MD
      </span>
      <span
        className="logo-star-animated"
        style={{ fontSize: starFs, fontWeight: 900, color: "#F59E0B", margin: "0 6px", position: "relative", top: "-1px" }}
      >
        ✦
      </span>
      <span className="logo-studio-animated" style={{ fontSize: fs, fontWeight: 800, letterSpacing: "-0.03em" }}>
        Studio
      </span>
      <div className="logo-ball-animated" />
    </a>
  );
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const { isDark, toggle } = useTheme();

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => { setIsMobileMenuOpen(false); }, [location]);

  const nav = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href === "/") { window.scrollTo({ top: 0, behavior: "smooth" }); return; }
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrolledBg = isDark
    ? "rgba(17,24,39,0.95)"
    : "rgba(255,255,255,0.92)";

  const mobileMenuBg = isDark
    ? "rgba(17,24,39,0.98)"
    : "rgba(255,255,255,0.97)";

  const navLinkColor = isDark ? "#94a3b8" : "#475569";
  const navLinkHoverBg = isDark ? "rgba(255,255,255,0.06)" : "rgba(241,245,249,0.9)";
  const navLinkHoverColor = isDark ? "#f1f5f9" : "#0f172a";
  const borderColor = isDark ? "rgba(255,255,255,0.07)" : "rgba(226,232,240,0.8)";

  return (
    <>
      <style>{`
        @keyframes slideDown {
          from { transform: translateY(-100%); opacity: 0; }
          to   { transform: translateY(0); opacity: 1; }
        }
        .nav-desktop { display: none !important; }
        .nav-toggle   { display: flex !important; }
        @media (min-width: 1024px) {
          .nav-desktop { display: flex !important; }
          .nav-toggle   { display: none !important; }
        }
        .nav-link {
          padding: 8px 13px;
          font-size: 0.88rem;
          font-weight: 500;
          background: none;
          border: none;
          cursor: pointer;
          border-radius: 8px;
          transition: color 0.2s, background 0.2s;
          font-family: inherit;
          white-space: nowrap;
        }
        .theme-toggle {
          width: 38px; height: 38px;
          border-radius: 10px;
          border: 1px solid var(--border);
          background: var(--bg-card);
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: all 0.2s ease;
          color: var(--text-2);
          flex-shrink: 0;
        }
        .theme-toggle:hover { border-color: #2563EB; color: #2563EB; }
      `}</style>

      <header style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 100,
        animation: "slideDown 0.55s ease-out",
        transition: "background 0.3s, box-shadow 0.3s, border-color 0.3s",
        ...(isScrolled ? {
          background: scrolledBg,
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          borderBottom: `1px solid ${borderColor}`,
          boxShadow: "0 2px 24px rgba(0,0,0,0.06)",
        } : { background: "transparent" }),
      }}>
        <div className="section-padding">
          <div className="container-wide">
            <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: `${NAV_H}px` }}>
              <Logo />

              {/* Desktop links */}
              <div className="nav-desktop" style={{ alignItems: "center", gap: "2px" }}>
                {navLinks.map(l => (
                  <button
                    key={l.href}
                    onClick={() => nav(l.href)}
                    className="nav-link"
                    style={{ color: navLinkColor }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = navLinkHoverColor; (e.currentTarget as HTMLElement).style.background = navLinkHoverBg; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = navLinkColor; (e.currentTarget as HTMLElement).style.background = "none"; }}
                  >
                    {l.label}
                  </button>
                ))}
              </div>

              {/* Desktop CTA + Theme toggle */}
              <div className="nav-desktop" style={{ alignItems: "center", gap: "10px" }}>
                <button onClick={toggle} className="theme-toggle" title={isDark ? "Switch to light mode" : "Switch to dark mode"}>
                  {isDark ? <Sun size={16} /> : <Moon size={16} />}
                </button>
                <button onClick={() => nav("#contact")} className="btn-primary" style={{ fontSize: "0.86rem", padding: "9px 20px" }}>
                  Start a Project <ArrowUpRight size={14} />
                </button>
              </div>

              {/* Mobile: theme toggle + hamburger */}
              <div className="nav-toggle" style={{ alignItems: "center", gap: "8px" }}>
                <button onClick={toggle} className="theme-toggle" title="Toggle theme">
                  {isDark ? <Sun size={15} /> : <Moon size={15} />}
                </button>
                <button
                  onClick={() => setIsMobileMenuOpen(v => !v)}
                  aria-label="Toggle menu"
                  style={{ alignItems: "center", justifyContent: "center", width: "44px", height: "44px", background: "none", border: "none", cursor: "pointer", borderRadius: "10px", display: "flex" }}
                >
                  {isMobileMenuOpen
                    ? <X size={22} color={isDark ? "#94a3b8" : "#334155"} />
                    : <Menu size={22} color={isDark ? "#94a3b8" : "#334155"} />}
                </button>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div style={{
          position: "fixed",
          left: 0, right: 0, top: `${NAV_H}px`, zIndex: 90,
          background: mobileMenuBg,
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          borderBottom: `1px solid ${borderColor}`,
          boxShadow: "0 12px 40px rgba(0,0,0,0.1)",
          animation: "slideDown 0.2s ease-out",
        }}>
          <div className="section-padding" style={{ paddingTop: "0.75rem", paddingBottom: "1.25rem" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              {navLinks.map(l => (
                <button
                  key={l.href}
                  onClick={() => nav(l.href)}
                  style={{ textAlign: "left", padding: "12px 14px", borderRadius: "10px", fontSize: "0.95rem", fontWeight: 500, color: isDark ? "#94a3b8" : "#334155", background: "none", border: "none", cursor: "pointer", width: "100%", fontFamily: "inherit" }}
                >
                  {l.label}
                </button>
              ))}
              <button onClick={() => nav("#contact")} className="btn-primary" style={{ marginTop: "10px", justifyContent: "center" }}>
                Start a Project <ArrowUpRight size={15} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
