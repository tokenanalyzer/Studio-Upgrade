import { useEffect, useRef } from "react";
import { ArrowRight, TrendingUp, Clock, Users } from "lucide-react";

const caseStudies = [
  {
    tag: "AI / Automation",
    tagColor: "#7C3AED",
    emoji: "🤖",
    client: "AutomateHQ",
    title: "40 Hours Saved Per Week with an AI Email Processing Agent",
    result: "The custom LangChain agent now reads, classifies, summarizes, and routes 3,000+ emails per week — automatically.",
    metrics: [
      { icon: TrendingUp, value: "40h/week", label: "Time Saved" },
      { icon: Users,      value: "99.2%",    label: "Accuracy" },
      { icon: Clock,      value: "6 weeks",  label: "Delivery" },
    ],
    gradient: "linear-gradient(135deg, #F5F3FF, #EDE9FE)",
    color: "#7C3AED",
  },
  {
    tag: "SaaS",
    tagColor: "#2563EB",
    emoji: "☁️",
    client: "NovaSaaS",
    title: "B2B SaaS Platform from Zero to $30k MRR in 4 Months",
    result: "Full-stack multi-tenant SaaS with Stripe billing, team workspaces, and real-time collaboration — launched in 8 weeks.",
    metrics: [
      { icon: TrendingUp, value: "$30k",    label: "MRR at Month 4" },
      { icon: Users,      value: "200+",    label: "Paying Customers" },
      { icon: Clock,      value: "8 weeks", label: "Time to Launch" },
    ],
    gradient: "linear-gradient(135deg, #EFF6FF, #DBEAFE)",
    color: "#2563EB",
  },
];

export default function CaseStudiesSection() {
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
    <section id="case-studies" ref={sectionRef} className="section-block" style={{ background: "#f8faff", position: "relative" }}>
      <style>{`
        .case-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        @media (min-width: 1024px) { .case-grid { grid-template-columns: repeat(2, 1fr); } }
        .case-card {
          border: 1px solid #E2E8F0;
          border-radius: 1.5rem;
          overflow: hidden;
          background: white;
          transition: all 0.35s ease;
        }
        .case-card:hover { transform: translateY(-5px); box-shadow: 0 18px 52px -8px rgba(37,99,235,0.14); border-color: #BFDBFE; }
      `}</style>

      <div className="section-padding">
        <div className="container-wide">
          <div className="animate-on-scroll" style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="section-label" style={{ justifyContent: "center" }}>
              <span>📊</span> Case Studies
            </div>
            <h2 style={{ fontSize: "clamp(1.9rem, 3.5vw, 3rem)", fontWeight: 800, color: "#0f172a", marginBottom: "0.85rem", letterSpacing: "-0.03em" }}>
              Real Problems. <span className="text-gradient">Real Results.</span>
            </h2>
            <p style={{ fontSize: "clamp(0.95rem, 1.1vw, 1.05rem)", color: "#64748B", maxWidth: "38rem", margin: "0 auto", lineHeight: 1.72 }}>
              Behind every great product is a great engineering challenge. Here's how we solved them.
            </p>
          </div>

          <div className="case-grid">
            {caseStudies.map((cs, i) => (
              <div key={cs.title} className="case-card animate-on-scroll" style={{ transitionDelay: `${i * 100}ms` }}>
                {/* Header */}
                <div style={{ background: cs.gradient, padding: "2rem 2rem 1.5rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1rem" }}>
                    <span style={{ fontSize: "1.6rem" }}>{cs.emoji}</span>
                    <span style={{ padding: "3px 10px", background: "rgba(255,255,255,0.7)", borderRadius: "6px", fontSize: "0.72rem", fontWeight: 600, color: cs.color }}>{cs.tag}</span>
                  </div>
                  <p style={{ fontSize: "0.78rem", color: cs.color, fontWeight: 600, margin: "0 0 6px" }}>Client: {cs.client}</p>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0f172a", margin: 0, lineHeight: 1.4 }}>{cs.title}</h3>
                </div>

                {/* Body */}
                <div style={{ padding: "1.5rem 2rem 2rem" }}>
                  <p style={{ fontSize: "0.88rem", color: "#64748B", lineHeight: 1.75, marginBottom: "1.5rem" }}>{cs.result}</p>

                  {/* Metrics */}
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem", marginBottom: "1.5rem" }}>
                    {cs.metrics.map(({ icon: Icon, value, label }) => (
                      <div key={label} style={{ textAlign: "center", padding: "0.85rem", background: "#f8faff", borderRadius: "10px", border: "1px solid #E2E8F0" }}>
                        <Icon size={16} style={{ color: cs.color, margin: "0 auto 4px" }} />
                        <div style={{ fontSize: "1rem", fontWeight: 800, color: cs.color }}>{value}</div>
                        <div style={{ fontSize: "0.7rem", color: "#94A3B8", fontWeight: 500 }}>{label}</div>
                      </div>
                    ))}
                  </div>

                  <button className="btn-ghost" style={{ padding: 0, color: cs.color }}>
                    Read Full Case Study <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
