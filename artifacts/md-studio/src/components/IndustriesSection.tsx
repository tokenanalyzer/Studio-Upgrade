import { useEffect, useRef } from "react";

const industries = [
  { emoji: "💰", name: "FinTech", desc: "Payment systems, trading platforms, crypto dashboards, banking apps" },
  { emoji: "🏥", name: "HealthTech", desc: "Patient portals, telemedicine apps, health tracking, medical records" },
  { emoji: "📚", name: "EdTech", desc: "LMS platforms, e-learning apps, quiz systems, student dashboards" },
  { emoji: "🛒", name: "E-Commerce", desc: "Custom stores, multi-vendor platforms, inventory & order management" },
  { emoji: "☁️", name: "SaaS", desc: "B2B tools, subscription platforms, workflow automation, analytics" },
  { emoji: "🏠", name: "Real Estate", desc: "Property listings, CRM for agents, booking systems, virtual tours" },
  { emoji: "🎬", name: "Media & Content", desc: "Streaming platforms, content management, creator tools, newsletters" },
  { emoji: "🚚", name: "Logistics", desc: "Fleet tracking, delivery management, warehouse automation, routing" },
];

export default function IndustriesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.08 }
    );
    sectionRef.current?.querySelectorAll(".animate-on-scroll")?.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="industries" ref={sectionRef} className="section-block" style={{ background: "var(--bg-page)", position: "relative", overflow: "hidden" }}>
      <style>{`
        .ind-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.85rem;
        }
        @media (min-width: 640px)  { .ind-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 768px)  { .ind-grid { grid-template-columns: repeat(4, 1fr); } }
        @media (min-width: 1024px) { .ind-grid { grid-template-columns: repeat(4, 1fr); } }
        .ind-card {
          border: 1px solid #E2E8F0;
          border-radius: 1.25rem;
          padding: 1.5rem 1.25rem;
          transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
          text-align: center;
          cursor: default;
        }
        .ind-card:hover {
          border-color: #BFDBFE;
          background: linear-gradient(135deg, #EFF6FF, #F5F3FF);
          transform: translateY(-4px);
          box-shadow: 0 12px 36px -8px rgba(37,99,235,0.14);
        }
      `}</style>

      <div style={{ position: "absolute", top: "-60px", right: "5%", width: "280px", height: "280px", borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div className="section-padding">
        <div className="container-wide">
          <div className="animate-on-scroll" style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="section-label" style={{ justifyContent: "center" }}>
              <span>🌐</span> Industries We Serve
            </div>
            <h2 style={{ fontSize: "clamp(1.9rem, 3.5vw, 3rem)", fontWeight: 800, color: "#0f172a", marginBottom: "0.85rem", letterSpacing: "-0.03em" }}>
              Across Every <span className="text-gradient">Industry Vertical</span>
            </h2>
            <p style={{ fontSize: "clamp(0.95rem, 1.1vw, 1.05rem)", color: "#64748B", maxWidth: "40rem", margin: "0 auto", lineHeight: 1.72 }}>
              Domain knowledge meets engineering excellence. We understand the unique challenges, compliance needs, and user expectations of each sector.
            </p>
          </div>

          <div className="ind-grid animate-on-scroll">
            {industries.map((ind, i) => (
              <div key={ind.name} className="ind-card" style={{ animationDelay: `${i * 50}ms` }}>
                <div style={{ fontSize: "2.2rem", marginBottom: "0.65rem" }}>{ind.emoji}</div>
                <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#0f172a", marginBottom: "0.4rem" }}>
                  {ind.name}
                </h3>
                <p style={{ fontSize: "0.78rem", color: "#64748B", lineHeight: 1.65, margin: 0 }}>
                  {ind.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
