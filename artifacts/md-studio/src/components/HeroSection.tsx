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
        minHeight: "100vh",
        background: "white",
        overflow: "hidden",
        paddingTop: "72px",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Background glow blobs */}
      <div style={{
        position: "absolute", top: "5%", right: "0%",
        width: "550px", height: "550px",
        background: "radial-gradient(circle, rgba(219,234,254,0.55) 0%, transparent 70%)",
        borderRadius: "50%", filter: "blur(50px)", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "10%", left: "5%",
        width: "350px", height: "350px",
        background: "radial-gradient(circle, rgba(224,242,254,0.4) 0%, transparent 70%)",
        borderRadius: "50%", filter: "blur(40px)", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", top: "40%", left: "40%",
        width: "200px", height: "200px",
        background: "radial-gradient(circle, rgba(237,233,254,0.3) 0%, transparent 70%)",
        borderRadius: "50%", filter: "blur(30px)", pointerEvents: "none",
      }} />

      {/* Floating particles */}
      {[0,1,2,3,4].map((i) => (
        <div key={i} style={{
          position: "absolute",
          width: i % 2 === 0 ? "7px" : "5px",
          height: i % 2 === 0 ? "7px" : "5px",
          background: i % 3 === 0 ? "#BFDBFE" : "#DDD6FE",
          borderRadius: "50%",
          left: `${10 + i * 17}%`,
          top: `${25 + (i % 3) * 20}%`,
          animation: `particle-float ${5 + i * 0.8}s ease-in-out infinite`,
          animationDelay: `${i * 0.6}s`,
          opacity: 0.4,
          pointerEvents: "none",
        }} />
      ))}

      <div className="section-padding" style={{ position: "relative", zIndex: 10, width: "100%", paddingTop: "2rem", paddingBottom: "2rem" }}>
        <div className="container-wide">
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2rem",
            alignItems: "center",
          }}
            className="hero-grid"
          >
            <style>{`
              @media (min-width: 1024px) {
                .hero-grid { grid-template-columns: 55fr 45fr !important; gap: 1rem !important; }
              }
              .hero-text { animation: heroSlideIn 0.7s ease-out both; }
              @keyframes heroSlideIn {
                from { opacity: 0; transform: translateX(-30px); }
                to { opacity: 1; transform: translateX(0); }
              }
              .hero-orb { animation: heroFadeScale 0.8s ease-out 0.25s both; }
              @keyframes heroFadeScale {
                from { opacity: 0; transform: scale(0.9); }
                to { opacity: 1; transform: scale(1); }
              }
            `}</style>

            {/* Left — Content */}
            <div className="hero-text">
              {/* Badge */}
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                padding: "7px 16px", borderRadius: "999px",
                background: "#EFF6FF", border: "1px solid #BFDBFE",
                marginBottom: "1.5rem",
                animation: "heroSlideIn 0.5s ease-out 0.1s both",
              }}>
                <Sparkles size={13} style={{ color: "#2563EB" }} />
                <span style={{ fontSize: "0.82rem", fontWeight: 600, color: "#2563EB" }}>
                  Digital Solutions That Drive Growth
                </span>
              </div>

              {/* Headline */}
              <h1 style={{
                fontSize: "clamp(2.5rem, 4.5vw, 4rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                color: "#0f172a",
                marginBottom: "1.25rem",
                letterSpacing: "-0.03em",
                animation: "heroSlideIn 0.6s ease-out 0.2s both",
              }}>
                Building Intelligent
                <br />
                <span className="text-gradient">Digital Products</span>
              </h1>

              {/* Description */}
              <p style={{
                fontSize: "1.05rem",
                color: "#64748B",
                maxWidth: "30rem",
                lineHeight: 1.75,
                marginBottom: "1.75rem",
                animation: "heroSlideIn 0.6s ease-out 0.3s both",
              }}>
                We help startups and businesses build scalable, modern
                and high-performance digital solutions.
              </p>

              {/* Service tags */}
              <div style={{
                display: "flex", flexWrap: "wrap", gap: "8px",
                marginBottom: "2rem",
                animation: "heroSlideIn 0.6s ease-out 0.4s both",
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
                display: "flex", flexWrap: "wrap", gap: "1rem",
                marginBottom: "2.5rem",
                animation: "heroSlideIn 0.6s ease-out 0.5s both",
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
                display: "flex", alignItems: "center", gap: "12px",
                animation: "heroSlideIn 0.6s ease-out 0.6s both",
              }}>
                <div style={{ display: "flex" }}>
                  {avatarEmojis.map((emoji, i) => (
                    <div key={i} style={{
                      width: "36px", height: "36px", borderRadius: "50%",
                      background: "#EFF6FF", border: "2px solid white",
                      marginLeft: i === 0 ? 0 : "-9px",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "1rem",
                      boxShadow: "0 2px 4px rgba(0,0,0,0.06)",
                      zIndex: 4 - i,
                      position: "relative",
                    }}>
                      {emoji}
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: "0.85rem", color: "#64748B", margin: 0 }}>
                  Trusted by{" "}
                  <span style={{ fontWeight: 700, color: "#2563EB" }}>89+</span>
                  {" "}clients worldwide
                </p>
              </div>
            </div>

            {/* Right — 3D Orb */}
            <div className="hero-orb" style={{
              position: "relative",
              height: "clamp(300px, 40vw, 540px)",
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
