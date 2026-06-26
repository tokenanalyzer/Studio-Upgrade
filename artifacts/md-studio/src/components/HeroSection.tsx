import { Suspense, lazy } from "react";
import { ArrowRight, ArrowUpRight, Sparkles, Code2, Cloud, Bot, Smartphone } from "lucide-react";
import OrbErrorBoundary from "./OrbErrorBoundary";
import FallbackOrb from "./FallbackOrb";

const GlassOrb = lazy(() => import("./GlassOrb"));

const serviceTags = [
  { icon: Code2, label: "Web Development" },
  { icon: Cloud, label: "SaaS Platforms" },
  { icon: Bot, label: "AI Agents" },
  { icon: Smartphone, label: "Mobile Apps" },
];

const avatarEmojis = ["👨‍💻", "🚀", "⚡", "🎯"];

function scrollTo(id: string) {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function HeroSection() {
  return (
    <section
      id="home"
      style={{
        position: "relative",
        height: "100dvh",
        minHeight: "700px",
        background: "white",
        overflow: "hidden",
        paddingTop: "68px",
      }}
    >
      {/* Background glow blobs */}
      <div style={{
        position: "absolute", top: 0, right: "0",
        width: "55%", height: "100%",
        background: "radial-gradient(ellipse at 80% 40%, rgba(219,234,254,0.55) 0%, rgba(237,233,254,0.2) 50%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "0", left: "0",
        width: "35%", height: "60%",
        background: "radial-gradient(ellipse at 20% 80%, rgba(224,242,254,0.35) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />

      {/* Floating particles */}
      {[0,1,2,3,4,5].map((i) => (
        <div key={i} style={{
          position: "absolute",
          width: i % 2 === 0 ? "8px" : "5px",
          height: i % 2 === 0 ? "8px" : "5px",
          background: i % 3 === 0 ? "#BFDBFE" : "#DDD6FE",
          borderRadius: "50%",
          left: `${8 + i * 15}%`,
          top: `${20 + (i % 3) * 22}%`,
          animation: `particle-float ${5 + i * 0.7}s ease-in-out infinite`,
          animationDelay: `${i * 0.5}s`,
          opacity: 0.45,
          pointerEvents: "none",
        }} />
      ))}

      <div
        className="section-padding"
        style={{ position: "relative", zIndex: 10, width: "100%", height: "100%", display: "flex", alignItems: "center" }}
      >
        <div className="container-wide" style={{ width: "100%" }}>
          <div className="hero-grid">
            <style>{`
              .hero-grid {
                display: grid;
                grid-template-columns: 1fr;
                gap: 2rem;
                align-items: center;
                padding: 2rem 0;
              }
              @media (min-width: 768px) {
                .hero-grid {
                  grid-template-columns: 1fr 1fr;
                  gap: 1rem;
                  padding: 2rem 0;
                  align-items: center;
                }
              }
              @media (min-width: 1024px) {
                .hero-grid {
                  grid-template-columns: 52fr 48fr;
                  gap: 0;
                  padding: 0;
                  align-items: flex-start;
                  min-height: calc(100dvh - 68px);
                }
                .hero-text { padding-top: 8vh; }
                .hero-orb-col {
                  height: calc(100dvh - 68px) !important;
                  max-height: none !important;
                }
              }
              @media (min-width: 1280px) {
                .hero-grid {
                  grid-template-columns: 50fr 50fr;
                }
              }
              .hero-text { animation: heroSlideIn 0.65s ease-out both; }
              .hero-orb-col { animation: heroFadeScale 0.75s ease-out 0.2s both; }
              @keyframes heroSlideIn {
                from { opacity: 0; transform: translateX(-28px); }
                to   { opacity: 1; transform: translateX(0); }
              }
              @keyframes heroFadeScale {
                from { opacity: 0; transform: scale(0.92); }
                to   { opacity: 1; transform: scale(1); }
              }
            `}</style>

            {/* ── LEFT COLUMN ── */}
            <div className="hero-text">
              {/* Badge */}
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "7px",
                padding: "6px 14px", borderRadius: "999px",
                background: "#EFF6FF", border: "1px solid #BFDBFE",
                marginBottom: "1.25rem",
              }}>
                <Sparkles size={12} style={{ color: "#2563EB" }} />
                <span style={{ fontSize: "0.8rem", fontWeight: 600, color: "#2563EB" }}>
                  Digital Solutions That Drive Growth
                </span>
              </div>

              {/* Headline */}
              <h1 style={{
                fontSize: "clamp(2.6rem, 5.5vw, 6rem)",
                fontWeight: 800,
                lineHeight: 1.08,
                color: "#0f172a",
                marginBottom: "1rem",
                letterSpacing: "-0.035em",
              }}>
                Building Intelligent
                <br />
                <span className="text-gradient">Digital Products</span>
              </h1>

              {/* Description */}
              <p style={{
                fontSize: "clamp(0.95rem, 1.2vw, 1.1rem)",
                color: "#64748B",
                maxWidth: "32rem",
                lineHeight: 1.72,
                marginBottom: "1.5rem",
              }}>
                We help startups and businesses build scalable, modern
                and high-performance digital solutions that create
                real impact.
              </p>

              {/* Service tags */}
              <div style={{
                display: "flex", flexWrap: "wrap", gap: "7px",
                marginBottom: "1.75rem",
              }}>
                {serviceTags.map(({ icon: Icon, label }) => (
                  <span key={label} style={{
                    display: "inline-flex", alignItems: "center", gap: "5px",
                    padding: "6px 12px",
                    background: "#F8FAFC", border: "1px solid #E2E8F0",
                    borderRadius: "8px", fontSize: "0.8rem", fontWeight: 500, color: "#475569",
                  }}>
                    <Icon size={12} style={{ color: "#2563EB" }} />
                    {label}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div style={{
                display: "flex", flexWrap: "wrap", gap: "0.85rem",
                marginBottom: "2rem",
              }}>
                <button onClick={() => scrollTo("#contact")} className="btn-primary">
                  Start a Project
                  <ArrowRight size={16} />
                </button>
                <button onClick={() => scrollTo("#portfolio")} className="btn-secondary">
                  View Our Work
                  <ArrowUpRight size={16} />
                </button>
              </div>

              {/* Trust badges */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ display: "flex" }}>
                  {avatarEmojis.map((emoji, i) => (
                    <div key={i} style={{
                      width: "36px", height: "36px", borderRadius: "50%",
                      background: "#EFF6FF", border: "2px solid white",
                      marginLeft: i === 0 ? 0 : "-9px",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "1rem",
                      boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
                      zIndex: 4 - i,
                      position: "relative",
                    }}>
                      {emoji}
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: "0.85rem", color: "#64748B", margin: 0 }}>
                  Trusted by <span style={{ fontWeight: 700, color: "#2563EB" }}>89+</span> clients worldwide
                </p>
              </div>
            </div>

            {/* ── RIGHT COLUMN — Orb ── */}
            <div
              className="hero-orb-col"
              style={{
                position: "relative",
                width: "100%",
                height: "clamp(300px, 55vw, 680px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <OrbErrorBoundary>
                <Suspense fallback={<FallbackOrb />}>
                  <GlassOrb />
                </Suspense>
              </OrbErrorBoundary>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
