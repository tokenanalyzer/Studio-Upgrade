import { Suspense, lazy } from "react";
import { ArrowRight, ArrowUpRight, Sparkles, Code2, Cloud, Bot, Smartphone } from "lucide-react";
import OrbErrorBoundary from "./OrbErrorBoundary";
import FallbackOrb from "./FallbackOrb";

const GlassOrb = lazy(() => import("./GlassOrb"));

const NAV_H = 80;

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
    <>
      {/* ─── Global hero CSS ─── */}
      <style>{`
        /* Hero wrapper: at least full viewport, no clipping on mobile */
        .hero-section {
          position: relative;
          padding-top: ${NAV_H}px;
          background: linear-gradient(160deg,
            #ffffff 0%,
            #f0f7ff 35%,
            #eff6ff 55%,
            #f5f3ff 80%,
            #ffffff 100%
          );
          overflow-x: hidden;
        }

        /* Subtle dot grid overlaid on background */
        .hero-section::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(circle, rgba(37,99,235,0.08) 1px, transparent 1px);
          background-size: 40px 40px;
          pointer-events: none;
          z-index: 0;
        }

        .hero-inner {
          position: relative;
          z-index: 10;
          display: flex;
          align-items: center;
          min-height: calc(100svh - ${NAV_H}px);
          padding: 2.5rem 0;
        }

        /* Desktop: exact viewport height, top-aligned */
        @media (min-width: 1024px) {
          .hero-section { overflow: hidden; }
          .hero-inner {
            height: calc(100dvh - ${NAV_H}px);
            min-height: unset;
            padding: 0;
            align-items: flex-start;
          }
        }

        /* ── Grid ── */
        .hero-grid {
          display: flex;
          flex-direction: column;
          gap: 0;
          width: 100%;
        }
        @media (min-width: 1024px) {
          .hero-grid {
            display: grid;
            grid-template-columns: 52fr 48fr;
            gap: 0;
            height: 100%;
          }
        }
        @media (min-width: 1280px) {
          .hero-grid { grid-template-columns: 50fr 50fr; }
        }

        /* ── Text column ── */
        .hero-text {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          padding-bottom: 1.5rem;
          animation: heroSlideIn 0.65s ease-out both;
        }
        @media (min-width: 1024px) {
          .hero-text {
            padding-top: 8vh;
            padding-bottom: 0;
          }
        }

        /* ── Orb column ── */
        .hero-orb-col {
          position: relative;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 260px;
          animation: heroFadeScale 0.75s ease-out 0.2s both;
          flex-shrink: 0;
        }
        @media (min-width: 360px) { .hero-orb-col { height: 280px; } }
        @media (min-width: 430px) { .hero-orb-col { height: 300px; } }
        @media (min-width: 768px) { .hero-orb-col { height: 380px; } }
        @media (min-width: 1024px) {
          .hero-orb-col {
            height: calc(100dvh - ${NAV_H}px) !important;
            align-items: center;
          }
        }

        @keyframes heroSlideIn {
          from { opacity: 0; transform: translateX(-24px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes heroFadeScale {
          from { opacity: 0; transform: scale(0.9); }
          to   { opacity: 1; transform: scale(1); }
        }

        /* ── Decorative glow blobs (desktop) ── */
        .hero-blob-right {
          position: absolute;
          top: 0; right: 0;
          width: 60%; height: 100%;
          background: radial-gradient(ellipse at 75% 38%,
            rgba(37,99,235,0.12) 0%,
            rgba(139,92,246,0.07) 35%,
            rgba(56,189,248,0.05) 55%,
            transparent 72%
          );
          pointer-events: none;
          z-index: 0;
        }
        .hero-blob-left {
          position: absolute;
          bottom: 0; left: 0;
          width: 45%; height: 65%;
          background: radial-gradient(ellipse at 15% 85%,
            rgba(56,189,248,0.09) 0%,
            rgba(37,99,235,0.04) 45%,
            transparent 70%
          );
          pointer-events: none;
          z-index: 0;
        }
        /* Orb ambient halo that bleeds into background */
        .hero-orb-halo {
          display: none;
        }
        @media (min-width: 1024px) {
          .hero-orb-halo {
            display: block;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 520px; height: 520px;
            border-radius: 50%;
            background: radial-gradient(circle,
              rgba(37,99,235,0.14) 0%,
              rgba(139,92,246,0.08) 35%,
              rgba(56,189,248,0.04) 60%,
              transparent 75%
            );
            filter: blur(30px);
            pointer-events: none;
            z-index: 1;
          }
        }
      `}</style>

      <section id="home" className="hero-section">
        {/* Background elements */}
        <div className="hero-blob-right" />
        <div className="hero-blob-left" />

        {/* Floating particles (larger, more distributed on desktop) */}
        {[0,1,2,3,4,5,6,7].map((i) => (
          <div key={i} style={{
            position: "absolute",
            width: i % 2 === 0 ? "9px" : "5px",
            height: i % 2 === 0 ? "9px" : "5px",
            background: i % 3 === 0 ? "#BFDBFE" : i % 3 === 1 ? "#DDD6FE" : "#BAE6FD",
            borderRadius: "50%",
            left: `${5 + i * 12}%`,
            top: `${15 + (i % 4) * 18}%`,
            animation: `particle-float ${5 + i * 0.7}s ease-in-out infinite`,
            animationDelay: `${i * 0.45}s`,
            opacity: 0.5,
            pointerEvents: "none",
            zIndex: 1,
          }} />
        ))}

        {/* Inner content */}
        <div className="hero-inner section-padding">
          <div className="container-wide" style={{ width: "100%" }}>
            <div className="hero-grid">

              {/* ── LEFT: text ── */}
              <div className="hero-text">
                {/* Badge */}
                <div style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "7px",
                  padding: "6px 14px",
                  borderRadius: "999px",
                  background: "#EFF6FF",
                  border: "1px solid #BFDBFE",
                  marginBottom: "1.1rem",
                  alignSelf: "flex-start",
                }}>
                  <Sparkles size={12} style={{ color: "#2563EB" }} />
                  <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "#2563EB" }}>
                    Digital Solutions That Drive Growth
                  </span>
                </div>

                {/* Headline */}
                <h1 style={{
                  fontSize: "clamp(2.4rem, 5.5vw, 6rem)",
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
                  fontSize: "clamp(0.92rem, 1.1vw, 1.05rem)",
                  color: "#64748B",
                  maxWidth: "32rem",
                  lineHeight: 1.72,
                  marginBottom: "1.4rem",
                }}>
                  We help startups and businesses build scalable, modern
                  and high-performance digital solutions that create
                  real impact.
                </p>

                {/* Service tags */}
                <div style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "7px",
                  marginBottom: "1.5rem",
                }}>
                  {serviceTags.map(({ icon: Icon, label }) => (
                    <span key={label} style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "5px",
                      padding: "5px 11px",
                      background: "#F8FAFC",
                      border: "1px solid #E2E8F0",
                      borderRadius: "8px",
                      fontSize: "0.79rem",
                      fontWeight: 500,
                      color: "#475569",
                    }}>
                      <Icon size={11} style={{ color: "#2563EB" }} />
                      {label}
                    </span>
                  ))}
                </div>

                {/* CTAs */}
                <div style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.75rem",
                  marginBottom: "1.5rem",
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
                        width: "34px",
                        height: "34px",
                        borderRadius: "50%",
                        background: "#EFF6FF",
                        border: "2px solid white",
                        marginLeft: i === 0 ? 0 : "-8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "0.9rem",
                        boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
                        zIndex: 4 - i,
                        position: "relative",
                      }}>
                        {emoji}
                      </div>
                    ))}
                  </div>
                  <p style={{ fontSize: "0.83rem", color: "#64748B", margin: 0 }}>
                    Trusted by <span style={{ fontWeight: 700, color: "#2563EB" }}>89+</span> clients worldwide
                  </p>
                </div>
              </div>

              {/* ── RIGHT: orb ── */}
              <div className="hero-orb-col">
                {/* Ambient halo that bleeds into background on desktop */}
                <div className="hero-orb-halo" />

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
    </>
  );
}
