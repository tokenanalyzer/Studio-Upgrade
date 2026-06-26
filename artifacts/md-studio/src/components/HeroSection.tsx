import { Suspense, lazy } from "react";
import { ArrowRight, ArrowUpRight, Sparkles, Code2, Cloud, Pen, Cpu } from "lucide-react";
import OrbErrorBoundary from "./OrbErrorBoundary";
import FallbackOrb from "./FallbackOrb";

const GlassOrb = lazy(() => import("./GlassOrb"));

const serviceTags = [
  { icon: Code2, label: "Web Development" },
  { icon: Cloud, label: "SaaS Platforms" },
  { icon: Pen, label: "UI/UX Design" },
  { icon: Cpu, label: "AI Integration" },
];

const avatarColors = [
  { bg: "#DBEAFE", text: "#2563EB", letter: "A" },
  { bg: "#FCE7F3", text: "#DB2777", letter: "B" },
  { bg: "#D1FAE5", text: "#059669", letter: "C" },
  { bg: "#FEF3C7", text: "#D97706", letter: "D" },
];

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
        minHeight: "100vh",
        background: "white",
        overflow: "hidden",
        paddingTop: "80px",
      }}
    >
      {/* Background glow blobs */}
      <div style={{
        position: "absolute", top: "10%", right: "5%",
        width: "600px", height: "600px",
        background: "radial-gradient(circle, rgba(219,234,254,0.5) 0%, transparent 70%)",
        borderRadius: "50%", filter: "blur(40px)", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "15%", left: "8%",
        width: "400px", height: "400px",
        background: "radial-gradient(circle, rgba(224,242,254,0.4) 0%, transparent 70%)",
        borderRadius: "50%", filter: "blur(40px)", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", top: "35%", left: "30%",
        width: "250px", height: "250px",
        background: "radial-gradient(circle, rgba(237,233,254,0.3) 0%, transparent 70%)",
        borderRadius: "50%", filter: "blur(40px)", pointerEvents: "none",
      }} />

      {/* Floating particles */}
      {[0,1,2,3,4,5].map((i) => (
        <div key={i} style={{
          position: "absolute",
          width: "8px", height: "8px",
          background: "#BFDBFE",
          borderRadius: "50%",
          left: `${15 + i * 14}%`,
          top: `${20 + (i % 3) * 22}%`,
          animation: `particle-float ${6 + i}s ease-in-out infinite`,
          animationDelay: `${i * 0.8}s`,
          opacity: 0.35,
          pointerEvents: "none",
        }} />
      ))}

      <div className="section-padding" style={{ position: "relative", zIndex: 10 }}>
        <div className="container-wide">
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
            minHeight: "calc(100vh - 80px)",
            alignItems: "center",
          }}
            className="hero-grid"
          >
            <style>{`
              @media (min-width: 1024px) {
                .hero-grid { grid-template-columns: 1fr 1fr !important; gap: 2rem !important; }
              }
              .hero-text { animation: heroSlideIn 0.8s ease-out both; }
              @keyframes heroSlideIn {
                from { opacity: 0; transform: translateX(-40px); }
                to { opacity: 1; transform: translateX(0); }
              }
              .hero-orb { animation: heroFadeScale 0.9s ease-out 0.3s both; }
              @keyframes heroFadeScale {
                from { opacity: 0; transform: scale(0.85); }
                to { opacity: 1; transform: scale(1); }
              }
            `}</style>

            {/* Left — Content */}
            <div className="hero-text" style={{ paddingTop: "1rem" }}>

              {/* Badge */}
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                padding: "8px 16px", borderRadius: "999px",
                background: "#EFF6FF", border: "1px solid #BFDBFE",
                marginBottom: "2rem",
                animation: "heroSlideIn 0.5s ease-out 0.2s both",
              }}>
                <Sparkles size={14} style={{ color: "#2563EB" }} />
                <span style={{ fontSize: "0.85rem", fontWeight: 500, color: "#2563EB" }}>
                  Digital Solutions That Drive Growth
                </span>
              </div>

              {/* Headline */}
              <h1 style={{
                fontSize: "clamp(2.5rem, 5vw, 4.25rem)",
                fontWeight: 800,
                lineHeight: 1.08,
                color: "#0f172a",
                marginBottom: "1.5rem",
                letterSpacing: "-0.03em",
                animation: "heroSlideIn 0.6s ease-out 0.3s both",
              }}>
                Building Intelligent
                <br />
                <span className="text-gradient">Digital Products</span>
              </h1>

              {/* Description */}
              <p style={{
                fontSize: "1.1rem",
                color: "#64748B",
                maxWidth: "32rem",
                lineHeight: 1.75,
                marginBottom: "2rem",
                animation: "heroSlideIn 0.6s ease-out 0.4s both",
              }}>
                We help startups and businesses build scalable, modern
                and high-performance digital solutions.
              </p>

              {/* Service tags */}
              <div style={{
                display: "flex", flexWrap: "wrap", gap: "8px",
                marginBottom: "2.5rem",
                animation: "heroSlideIn 0.6s ease-out 0.5s both",
              }}>
                {serviceTags.map(({ icon: Icon, label }) => (
                  <span key={label} style={{
                    display: "inline-flex", alignItems: "center", gap: "6px",
                    padding: "7px 14px",
                    background: "#F8FAFC", border: "1px solid #E2E8F0",
                    borderRadius: "8px", fontSize: "0.82rem", fontWeight: 500, color: "#475569",
                  }}>
                    <Icon size={13} style={{ color: "#2563EB" }} />
                    {label}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div style={{
                display: "flex", flexWrap: "wrap", gap: "1rem",
                marginBottom: "3rem",
                animation: "heroSlideIn 0.6s ease-out 0.6s both",
              }}>
                <button
                  onClick={() => scrollTo("#contact")}
                  className="btn-primary"
                >
                  Start a Project
                  <ArrowRight size={16} />
                </button>
                <button
                  onClick={() => scrollTo("#portfolio")}
                  className="btn-secondary"
                >
                  View Portfolio
                  <ArrowUpRight size={16} />
                </button>
              </div>

              {/* Trust badges */}
              <div style={{
                display: "flex", alignItems: "center", gap: "14px",
                animation: "heroSlideIn 0.6s ease-out 0.7s both",
              }}>
                <div style={{ display: "flex" }}>
                  {avatarColors.map((av, i) => (
                    <div key={i} style={{
                      width: "38px", height: "38px", borderRadius: "50%",
                      background: av.bg, border: "2.5px solid white",
                      marginLeft: i === 0 ? 0 : "-10px",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "0.8rem", fontWeight: 600, color: av.text,
                      boxShadow: "0 2px 4px rgba(0,0,0,0.08)",
                      zIndex: avatarColors.length - i,
                      position: "relative",
                    }}>
                      {av.letter}
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: "0.875rem", color: "#64748B", margin: 0 }}>
                  Trusted by{" "}
                  <span style={{ fontWeight: 600, color: "#2563EB" }}>89+</span>
                  {" "}clients worldwide
                </p>
              </div>
            </div>

            {/* Right — 3D Orb */}
            <div className="hero-orb" style={{
              position: "relative",
              height: "clamp(320px, 45vw, 600px)",
              width: "100%",
            }}>
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
