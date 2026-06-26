import { useState, useEffect } from "react";
import { useLocation } from "wouter";
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

function Logo({ size = "default" }: { size?: "default" | "mobile" }) {
  const fs = size === "mobile" ? "1.5rem" : "1.95rem";
  const starFs = size === "mobile" ? "1rem" : "1.3rem";

  return (
    <a
      href="/"
      style={{
        position: "relative",
        display: "inline-flex",
        alignItems: "baseline",
        textDecoration: "none",
        gap: 0,
        lineHeight: 1,
      }}
    >
      {/* MD group */}
      <span style={{ fontSize: fs, fontWeight: 800, color: "#2563EB", letterSpacing: "-0.025em" }}>
        MD
      </span>

      {/* Star separator */}
      <span style={{
        fontSize: starFs,
        fontWeight: 800,
        color: "#F59E0B",
        margin: "0 5px",
        position: "relative",
        top: "-2px",
        display: "inline-block",
        filter: "drop-shadow(0 0 6px rgba(245,158,11,0.5))",
      }}>
        ✦
      </span>

      {/* Studio group — last char "o" gets glow pulse */}
      <span style={{ fontSize: fs, fontWeight: 800, color: "#0f172a", letterSpacing: "-0.025em" }}>
        Studi<span className="logo-o-animated">o</span>
      </span>

      {/* Animated ball traveling from M to O */}
      <div className="logo-ball-animated" />
    </a>
  );
}

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
      <style>{`
        @keyframes slideDown {
          from { transform: translateY(-100%); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }
        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <header
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 50,
          animation: "slideDown 0.55s ease-out",
          transition: "all 0.4s ease",
          ...(isScrolled ? {
            background: "rgba(255,255,255,0.88)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            borderBottom: "1px solid rgba(226,232,240,0.7)",
            boxShadow: "0 2px 20px rgba(0,0,0,0.06)",
          } : {
            background: "transparent",
          }),
        }}
      >
        <div className="section-padding">
          <div className="container-wide">
            <nav style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "68px",
            }}>
              {/* Logo */}
              <Logo />

              {/* Desktop Nav */}
              <div style={{ display: "none", alignItems: "center", gap: "2px" }} className="nav-desktop">
                <style>{`
                  @media (min-width: 1024px) {
                    .nav-desktop { display: flex !important; }
                    .nav-mobile-toggle { display: none !important; }
                  }
                `}</style>
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    style={{
                      position: "relative",
                      padding: "8px 14px",
                      fontSize: "0.9rem",
                      fontWeight: 500,
                      color: "#475569",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      borderRadius: "8px",
                      transition: "color 0.2s ease, background 0.2s ease",
                      fontFamily: "inherit",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#0f172a";
                      (e.currentTarget as HTMLElement).style.background = "#F8FAFC";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#475569";
                      (e.currentTarget as HTMLElement).style.background = "none";
                    }}
                  >
                    {link.label}
                  </button>
                ))}
              </div>

              {/* Desktop CTA */}
              <div style={{ display: "none", alignItems: "center", gap: "12px" }} className="nav-desktop">
                <button
                  onClick={() => handleNavClick("#contact")}
                  className="btn-primary"
                  style={{ fontSize: "0.88rem", padding: "10px 20px" }}
                >
                  Let's Talk
                  <ArrowUpRight size={15} />
                </button>
              </div>

              {/* Mobile Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="nav-mobile-toggle"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40px", height: "40px",
                  background: "none", border: "none",
                  cursor: "pointer", borderRadius: "10px",
                }}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen
                  ? <X size={20} style={{ color: "#334155" }} />
                  : <Menu size={20} style={{ color: "#334155" }} />}
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            left: 0, right: 0, top: "68px",
            zIndex: 40,
            background: "rgba(255,255,255,0.97)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderBottom: "1px solid #E2E8F0",
            boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
            animation: "fadeDown 0.22s ease-out",
          }}
        >
          <div className="section-padding" style={{ paddingTop: "1rem", paddingBottom: "1.25rem" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  style={{
                    textAlign: "left",
                    padding: "11px 14px",
                    borderRadius: "10px",
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    color: "#475569",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    width: "100%",
                    fontFamily: "inherit",
                    transition: "background 0.15s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.background = "#F8FAFC"}
                  onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.background = "none"}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick("#contact")}
                className="btn-primary"
                style={{ marginTop: "10px", justifyContent: "center", fontSize: "0.9rem" }}
              >
                Let's Talk
                <ArrowUpRight size={15} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
