import { motion } from "framer-motion";
import { Zap, Brain, Layers, Timer, ShieldCheck, HeartHandshake } from "lucide-react";

const reasons = [
  { icon: Brain,        color: "#2563EB", bg: "#EFF6FF", title: "AI-First Engineering",     desc: "We don't bolt on AI as an afterthought — we architect products with intelligence at their core. From GPT integrations to custom ML pipelines." },
  { icon: Layers,       color: "#7C3AED", bg: "#F5F3FF", title: "Full-Stack Mastery",       desc: "Frontend, backend, mobile, cloud, databases — one team delivers everything. No coordination overhead, no communication gaps." },
  { icon: Zap,          color: "#D97706", bg: "#FFFBEB", title: "Lightning Delivery",       desc: "Agile sprints with weekly demos and continuous deployment. Most MVPs shipped within 4–8 weeks. We respect your time and roadmap." },
  { icon: Timer,        color: "#059669", bg: "#ECFDF5", title: "8+ Years Experience",      desc: "Adil Hussain brings hands-on senior-level engineering experience across SaaS, FinTech, AI, and enterprise software projects." },
  { icon: ShieldCheck,  color: "#0369A1", bg: "#F0F9FF", title: "Production Quality Code",  desc: "TypeScript-first, tested, documented, and built to scale. Every codebase is maintainable, secure, and ready for real traffic." },
  { icon: HeartHandshake, color: "#DC2626", bg: "#FFF1F2", title: "Post-Launch Support",   desc: "We don't disappear after delivery. Every project includes 30-day support, and monthly retainers are available for ongoing work." },
];

const cardVariants = {
  hidden:  { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

export default function WhyChooseSection() {
  return (
    <section id="why-choose" style={{ position: "relative", background: "var(--bg-page)", overflow: "hidden" }} className="section-block">
      <style>{`
        .why-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 1.25rem;
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.9rem;
          position: relative;
          overflow: hidden;
        }
        .why-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(37,99,235,0.03) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.3s;
          border-radius: inherit;
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

      <div style={{ position: "absolute", top: "-80px", right: "-80px", width: "320px", height: "320px", borderRadius: "50%", background: "radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -40px 0px" }}
            transition={{ duration: 0.52 }}
            style={{ textAlign: "center", marginBottom: "3rem" }}
          >
            <div className="section-label" style={{ justifyContent: "center" }}>
              <span>⭐</span> Why MD Studio
            </div>
            <h2 style={{ fontSize: "clamp(1.9rem, 3.5vw, 3rem)", fontWeight: 800, color: "var(--text-1)", marginBottom: "0.85rem", letterSpacing: "-0.03em" }}>
              Why Clients <span className="text-gradient">Choose Us</span>
            </h2>
            <p style={{ fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)", color: "var(--text-2)", maxWidth: "42rem", margin: "0 auto", lineHeight: 1.72 }}>
              We're not a faceless agency — we're a focused engineering team that treats every project like our own product.
            </p>
          </motion.div>

          <motion.div
            className="why-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -60px 0px" }}
          >
            {reasons.map((r, i) => {
              const Icon = r.icon;
              return (
                <motion.div key={r.title} className="why-card" variants={cardVariants} custom={i}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "13px", background: r.bg, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: `0 4px 14px ${r.color}22`, flexShrink: 0 }}>
                    <Icon size={22} style={{ color: r.color }} />
                  </div>
                  <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text-1)", margin: 0 }}>{r.title}</h3>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-2)", lineHeight: 1.72, margin: 0 }}>{r.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
