import { useEffect, useRef } from "react";
import { Zap, Brain, Layers, Timer, ShieldCheck, HeartHandshake } from "lucide-react";

const reasons = [
  {
    icon: Brain,
    color: "#2563EB",
    bg: "#EFF6FF",
    title: "AI-First Engineering",
    desc: "We don't bolt on AI as an afterthought — we architect products with intelligence at their core. From GPT integrations to custom ML pipelines.",
  },
  {
    icon: Layers,
    color: "#7C3AED",
    bg: "#F5F3FF",
    title: "Full-Stack Mastery",
    desc: "Frontend, backend, mobile, cloud, databases — one team delivers everything. No coordination overhead, no communication gaps.",
  },
  {
    icon: Zap,
    color: "#D97706",
    bg: "#FFFBEB",
    title: "Lightning Delivery",
    desc: "Agile sprints with weekly demos and continuous deployment. Most MVPs shipped within 4–8 weeks. We respect your time and roadmap.",
  },
  {
    icon: Timer,
    color: "#059669",
    bg: "#ECFDF5",
    title: "8+ Years Experience",
    desc: "Adil Hussain brings hands-on senior-level engineering experience across SaaS, FinTech, AI, and enterprise software projects.",
  },
  {
    icon: ShieldCheck,
    color: "#0369A1",
    bg: "#F0F9FF",
    title: "Production Quality Code",
    desc: "TypeScript-first, tested, documented, and built to scale. Every codebase is maintainable, secure, and ready for real traffic.",
  },
  {
    icon: HeartHandshake,
    color: "#DC2626",
    bg: "#FFF1F2",
    title: "Post-Launch Support",
    desc: "We don't disappear after delivery. Every project includes 30-day support, and monthly retainers are available for ongoing work.",
  },
];

function useAnimateOnScroll(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref]);
}

export default function WhyChooseSection() {
  const headRef = useRef<HTMLDivElement>(null);
  useAnimateOnScroll(headRef as React.RefObject<HTMLElement>);

  return (
    <section id="why-choose" style={{ position: "relative", background: "white", overflow: "hidden" }} className="section-block">
      <style>{`
        .why-card {
          background: #fff;
          border: 1px solid #E2E8F0;
          border-radius: 1.25rem;
          padding: 1.75rem;
          transition: all 0.35s cubic-bezier(0.4,0,0.2,1);
          position: relative;
          overflow: hidden;
        }
        .why-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(37,99,235,0.03) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.35s;
        }
        .why-card:hover { transform: translateY(-5px); box-shadow: 0 16px 48px -8px rgba(37,99,235,0.12); border-color: #BFDBFE; }
        .why-card:hover::before { opacity: 1; }
        .why-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }
        @media (min-width: 640px)  { .why-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .why-grid { grid-template-columns: repeat(3, 1fr); } }
      `}</style>

      {/* BG decoration */}
      <div style={{ position: "absolute", top: "-80px", right: "-80px", width: "320px", height: "320px", borderRadius: "50%", background: "radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div className="section-padding">
        <div className="container-wide">
          {/* Header */}
          <div ref={headRef} className="animate-on-scroll" style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="section-label" style={{ justifyContent: "center" }}>
              <span>💡</span> Why Choose MD Studio
            </div>
            <h2 style={{ fontSize: "clamp(1.9rem, 3.5vw, 3rem)", fontWeight: 800, color: "#0f172a", marginBottom: "0.85rem", letterSpacing: "-0.03em" }}>
              The Agency That Treats Your<br />
              <span className="text-gradient">Project Like a Product</span>
            </h2>
            <p style={{ fontSize: "clamp(0.95rem, 1.2vw, 1.1rem)", color: "#64748B", maxWidth: "42rem", margin: "0 auto", lineHeight: 1.72 }}>
              We're not a factory. We're a focused boutique studio where senior engineering meets product thinking.
            </p>
          </div>

          {/* Cards */}
          <div className="why-grid">
            {reasons.map((r, i) => {
              const Icon = r.icon;
              return (
                <div
                  key={r.title}
                  className="why-card animate-on-scroll"
                  style={{ animationDelay: `${i * 80}ms`, transitionDelay: `${i * 60}ms` }}
                >
                  <div style={{
                    width: "48px", height: "48px", borderRadius: "12px",
                    background: r.bg, display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: "1rem", boxShadow: `0 4px 12px ${r.color}22`,
                  }}>
                    <Icon size={22} style={{ color: r.color }} />
                  </div>
                  <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#0f172a", marginBottom: "0.5rem" }}>
                    {r.title}
                  </h3>
                  <p style={{ fontSize: "0.88rem", color: "#64748B", lineHeight: 1.7, margin: 0 }}>
                    {r.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
