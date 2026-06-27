import { useEffect, useRef, Suspense, lazy } from "react";
import { ArrowRight, ArrowUpRight, Sparkles, Code2, Cloud, Bot, Smartphone, Zap } from "lucide-react";
import OrbErrorBoundary from "./OrbErrorBoundary";
import FallbackOrb from "./FallbackOrb";
import { NAV_H } from "./Navbar";

const GlassOrb = lazy(() => import("./GlassOrb"));

const serviceTags = [
  { icon: Code2, label: "Web Dev" },
  { icon: Cloud, label: "SaaS" },
  { icon: Bot, label: "AI Agents" },
  { icon: Smartphone, label: "Mobile" },
  { icon: Zap, label: "Automation" },
];

const avatarEmojis = ["👨‍💻", "🚀", "⚡", "🎯", "💎"];

function scrollTo(id: string) {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function HeroSection() {
  const orbWrapRef = useRef<HTMLDivElement>(null);
  const blobRightRef = useRef<HTMLDivElement>(null);
  const blobLeftRef = useRef<HTMLDivElement>(null);

  // Mouse parallax — uses RAF, no state re-renders
  useEffect(() => {
    let raf = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth - 0.5) * 32;
        const y = (e.clientY / window.innerHeight - 0.5) * 32;
        if (orbWrapRef.current)
          orbWrapRef.current.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        if (blobRightRef.current)
          blobRightRef.current.style.transform = `translate(${x * 0.07}px, ${y * 0.07}px)`;
        if (blobLeftRef.current)
          blobLeftRef.current.style.transform = `translate(${-x * 0.05}px, ${-y * 0.05}px)`;
      });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => { window.removeEventListener("mousemove", onMove); cancelAnimationFrame(raf); };
  }, []);

  return (
    <>
      <style>{`
        .hero-section {
          position: relative;
          padding-top: ${NAV_H}px;
          background: linear-gradient(145deg,
            #f8faff 0%, #eef4ff 28%, #f2f0ff 55%, #eaf6ff 78%, #f8faff 100%
          );
          overflow-x: hidden;
        }
        .hero-section::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, rgba(37,99,235,0.06) 1px, transparent 1px);
          background-size: 40px 40px;
          pointer-events: none;
          z-index: 0;
        }
        .hero-inner {
          position: relative;
          z-index: 10;
          min-height: calc(100svh - ${NAV_H}px);
          display: flex;
          align-items: center;
          padding: 2.5rem 0 2rem;
        }
        @media (min-width: 1024px) {
          .hero-section { overflow: hidden; }
          .hero-inner {
            height: calc(100dvh - ${NAV_H}px);
            min-height: 600px;
            padding: 0;
            align-items: stretch;
          }
        }
        /* Grid */
        .hero-grid {
          display: flex;
          flex-direction: column;
          gap: 0;
          width: 100%;
        }
        @media (min-width: 1024px) {
          .hero-grid {
            display: grid;
            grid-template-columns: 45fr 55fr;
            gap: 0;
            align-items: stretch;
          }
        }
        /* Text col */
        .hero-text {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          padding-bottom: 1.5rem;
          animation: heroSlideIn 0.7s cubic-bezier(0.4,0,0.2,1) both;
        }
        @media (min-width: 1024px) {
          .hero-text {
            padding-top: 7vh;
            padding-bottom: 0;
            justify-content: flex-start;
          }
        }
        /* Orb col */
        .hero-orb-col {
          position: relative;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 280px;
          animation: heroFadeScale 0.8s cubic-bezier(0.4,0,0.2,1) 0.15s both;
          flex-shrink: 0;
        }
        @media (min-width: 360px) { .hero-orb-col { height: 300px; } }
        @media (min-width: 430px) { .hero-orb-col { height: 330px; } }
        @media (min-width: 768px) { .hero-orb-col { height: 420px; } }
        @media (min-width: 1024px) {
          .hero-orb-col {
            height: auto !important;
            align-items: center;
          }
        }
        @keyframes heroSlideIn {
          from { opacity: 0; transform: translateX(-28px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes heroFadeScale {
          from { opacity: 0; transform: scale(0.88); }
          to   { opacity: 1; transform: scale(1); }
        }
        /* Glow badge cards around orb — desktop only */
        .orb-badge-card {
          display: none;
        }
        @media (min-width: 1024px) {
          .orb-badge-card {
            display: flex;
            position: absolute;
            align-items: center;
            gap: 7px;
            padding: 9px 14px;
            border-radius: 14px;
            background: rgba(255,255,255,0.92);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1px solid rgba(226,232,240,0.8);
            box-shadow: 0 4px 24px rgba(0,0,0,0.08), 0 0 0 1px rgba(255,255,255,0.6) inset;
            font-size: 0.78rem;
            font-weight: 600;
            white-space: nowrap;
            z-index: 5;
          }
        }
        @keyframes floatCard1 {
          0%, 100% { transform: translateY(0) rotate(-4deg); }
          50%       { transform: translateY(-12px) rotate(-2deg); }
        }
        @keyframes floatCard2 {
          0%, 100% { transform: translateY(0) rotate(3deg); }
          50%       { transform: translateY(-10px) rotate(5deg); }
        }
        @keyframes floatCard3 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50%       { transform: translateY(10px) rotate(-2deg); }
        }
        @keyframes floatCard4 {
          0%, 100% { transform: translateY(0) rotate(2deg); }
          50%       { transform: translateY(-8px) rotate(0deg); }
        }
      `}</style>

      <section id="home" className="hero-section">
        {/* Background blobs — parallax targets */}
        <div ref={blobRightRef} style={{
          position: "absolute", top: 0, right: 0,
          width: "62%", height: "100%",
          background: "radial-gradient(ellipse at 70% 35%, rgba(37,99,235,0.14) 0%, rgba(139,92,246,0.08) 38%, rgba(56,189,248,0.05) 60%, transparent 75%)",
          transition: "transform 0.08s linear",
          pointerEvents: "none", zIndex: 0,
        }} />
        <div ref={blobLeftRef} style={{
          position: "absolute", bottom: 0, left: 0,
          width: "40%", height: "60%",
          background: "radial-gradient(ellipse at 15% 85%, rgba(56,189,248,0.1) 0%, rgba(37,99,235,0.04) 50%, transparent 70%)",
          transition: "transform 0.08s linear",
          pointerEvents: "none", zIndex: 0,
        }} />

        {/* Floating particles */}
        {[0,1,2,3,4,5,6,7,8].map((i) => (
          <div key={i} style={{
            position: "absolute",
            width: i % 3 === 0 ? "9px" : i % 3 === 1 ? "5px" : "6px",
            height: i % 3 === 0 ? "9px" : i % 3 === 1 ? "5px" : "6px",
            background: i % 4 === 0 ? "#BFDBFE" : i % 4 === 1 ? "#DDD6FE" : i % 4 === 2 ? "#BAE6FD" : "#C7D2FE",
            borderRadius: "50%",
            left: `${4 + i * 11}%`,
            top: `${12 + (i % 5) * 16}%`,
            animation: `particle-float ${5 + i * 0.65}s ease-in-out infinite`,
            animationDelay: `${i * 0.42}s`,
            opacity: 0.55, pointerEvents: "none", zIndex: 1,
          }} />
        ))}

        {/* Content */}
        <div className="hero-inner section-padding">
          <div className="container-wide" style={{ width: "100%" }}>
            <div className="hero-grid">

              {/* ── LEFT ── */}
              <div className="hero-text">
                {/* Badge pill */}
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: "7px",
                  padding: "6px 14px", borderRadius: "999px",
                  background: "#EFF6FF", border: "1px solid #BFDBFE",
                  marginBottom: "1.1rem", alignSelf: "flex-start",
                }}>
                  <Sparkles size={12} style={{ color: "#2563EB" }} />
                  <span style={{ fontSize: "0.77rem", fontWeight: 600, color: "#2563EB" }}>
                    Full Stack · AI Engineering · SaaS Development
                  </span>
                </div>

                {/* Headline */}
                <h1 style={{
                  fontSize: "clamp(2.4rem, 4.8vw, 5.5rem)",
                  fontWeight: 800,
                  lineHeight: 1.07,
                  color: "#0f172a",
                  marginBottom: "1.1rem",
                  letterSpacing: "-0.04em",
                }}>
                  Building Intelligent<br />
                  <span className="text-gradient">Digital Products</span>
                </h1>

                {/* Sub-headline */}
                <p style={{
                  fontSize: "clamp(0.95rem, 1.15vw, 1.1rem)",
                  color: "#475569",
                  maxWidth: "34rem",
                  lineHeight: 1.75,
                  marginBottom: "1.5rem",
                  fontWeight: 400,
                }}>
                  MD Studio is a boutique agency by <strong style={{ color: "#0f172a", fontWeight: 700 }}>Adil Hussain</strong> — Full Stack Developer &amp; AI Engineer. We craft scalable web apps, AI agents, SaaS platforms, and mobile products that create real impact.
                </p>

                {/* Service tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "1.5rem" }}>
                  {serviceTags.map(({ icon: Icon, label }) => (
                    <span key={label} style={{
                      display: "inline-flex", alignItems: "center", gap: "5px",
                      padding: "5px 11px", background: "rgba(255,255,255,0.85)",
                      border: "1px solid rgba(226,232,240,0.9)", borderRadius: "8px",
                      fontSize: "0.78rem", fontWeight: 500, color: "#475569",
                      backdropFilter: "blur(8px)",
                    }}>
                      <Icon size={11} style={{ color: "#2563EB" }} />
                      {label}
                    </span>
                  ))}
                </div>

                {/* CTAs */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginBottom: "1.75rem" }}>
                  <button onClick={() => scrollTo("#contact")} className="btn-primary">
                    Start a Project <ArrowRight size={16} />
                  </button>
                  <button onClick={() => scrollTo("#portfolio")} className="btn-secondary">
                    View Our Work <ArrowUpRight size={16} />
                  </button>
                </div>

                {/* Trust row */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ display: "flex" }}>
                    {avatarEmojis.map((e, i) => (
                      <div key={i} style={{
                        width: "34px", height: "34px", borderRadius: "50%",
                        background: "#EFF6FF", border: "2px solid white",
                        marginLeft: i === 0 ? 0 : "-9px",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: "0.85rem", boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                        zIndex: 5 - i, position: "relative",
                      }}>
                        {e}
                      </div>
                    ))}
                  </div>
                  <div>
                    <p style={{ fontSize: "0.83rem", color: "#64748B", margin: "0 0 1px" }}>
                      Trusted by <span style={{ fontWeight: 700, color: "#2563EB" }}>89+</span> clients worldwide
                    </p>
                    <div style={{ display: "flex", gap: "1px" }}>
                      {[1,2,3,4,5].map(s => <span key={s} style={{ color: "#F59E0B", fontSize: "0.7rem" }}>★</span>)}
                      <span style={{ fontSize: "0.7rem", color: "#94A3B8", marginLeft: "4px" }}>5.0 rating</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── RIGHT: Orb ── */}
              <div className="hero-orb-col" style={{ position: "relative" }}>
                {/* Floating glass cards */}
                <div className="orb-badge-card" style={{ top: "14%", left: "-2%", animation: "floatCard1 4.5s ease-in-out infinite", color: "#2563EB" }}>
                  <span style={{ fontSize: "1rem" }}>⚡</span>
                  AI-Powered Apps
                </div>
                <div className="orb-badge-card" style={{ top: "10%", right: "-4%", animation: "floatCard2 5s ease-in-out infinite", animationDelay: "0.6s", color: "#7C3AED" }}>
                  <span style={{ fontSize: "1rem" }}>🚀</span>
                  127+ Projects
                </div>
                <div className="orb-badge-card" style={{ bottom: "28%", left: "-4%", animation: "floatCard3 4.2s ease-in-out infinite", animationDelay: "1s", color: "#059669" }}>
                  <span style={{ fontSize: "1rem" }}>✅</span>
                  Production Ready
                </div>
                <div className="orb-badge-card" style={{ bottom: "14%", right: "-2%", animation: "floatCard4 5.5s ease-in-out infinite", animationDelay: "1.5s", color: "#D97706" }}>
                  <span style={{ fontSize: "1rem" }}>⭐</span>
                  5.0 Star Rating
                </div>

                {/* Orb — parallax wrapper */}
                <div ref={orbWrapRef} style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", transition: "transform 0.08s linear" }}>
                  <OrbErrorBoundary>
                    <Suspense fallback={<FallbackOrb />}>
                      <GlassOrb />
                    </Suspense>
                  </OrbErrorBoundary>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
