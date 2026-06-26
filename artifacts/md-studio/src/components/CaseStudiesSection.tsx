import { TrendingUp, Clock, Users2, ArrowRight } from "lucide-react";

const cases = [
  {
    company: "FinSight Capital",
    industry: "FinTech",
    challenge: "Manual financial reporting took 3 days per quarter and was error-prone.",
    solution: "Built a real-time analytics dashboard with automated data pipelines and predictive models.",
    results: [
      { icon: TrendingUp, stat: "97%", label: "Accuracy Gain", color: "#059669" },
      { icon: Clock, stat: "80%", label: "Time Saved", color: "#2563EB" },
      { icon: Users2, stat: "4x", label: "Team Efficiency", color: "#8B5CF6" },
    ],
    gradient: "linear-gradient(135deg, #EFF6FF 0%, #F0F9FF 100%)",
    accent: "#2563EB",
    icon: "📊",
  },
  {
    company: "GreenPath Logistics",
    industry: "Logistics & Supply Chain",
    challenge: "Legacy desktop software couldn't scale with their 300% growth in shipment volume.",
    solution: "Designed and launched a cloud-native logistics platform with real-time tracking and mobile app.",
    results: [
      { icon: TrendingUp, stat: "300%", label: "Volume Handled", color: "#059669" },
      { icon: Clock, stat: "65%", label: "Faster Processing", color: "#2563EB" },
      { icon: Users2, stat: "12k+", label: "Monthly Users", color: "#8B5CF6" },
    ],
    gradient: "linear-gradient(135deg, #ECFDF5 0%, #F0FDF4 100%)",
    accent: "#059669",
    icon: "🚛",
  },
  {
    company: "EduLearn Academy",
    industry: "EdTech",
    challenge: "Course completion rates were stuck at 23% with high student churn.",
    solution: "Rebuilt the platform with AI-driven personalization, gamification, and live study rooms.",
    results: [
      { icon: TrendingUp, stat: "78%", label: "Completion Rate", color: "#059669" },
      { icon: Clock, stat: "40%", label: "Reduced Churn", color: "#2563EB" },
      { icon: Users2, stat: "50k+", label: "Active Learners", color: "#8B5CF6" },
    ],
    gradient: "linear-gradient(135deg, #FFF7ED 0%, #FFFBEB 100%)",
    accent: "#D97706",
    icon: "🎓",
  },
];

export default function CaseStudiesSection() {
  return (
    <section id="case-studies" style={{ padding: "6rem 0", background: "#F8FAFC" }}>
      <div className="section-padding">
        <div className="container-wide">
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              padding: "6px 16px", borderRadius: "999px",
              background: "#ECFDF5", border: "1px solid #A7F3D0",
              marginBottom: "1rem",
            }}>
              <span style={{ fontSize: "0.82rem", fontWeight: 600, color: "#059669", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                Case Studies
              </span>
            </div>
            <h2 style={{
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              fontWeight: 800, color: "#0f172a",
              letterSpacing: "-0.02em", marginBottom: "1rem",
            }}>
              Real Results,{" "}
              <span className="text-gradient">Real Impact</span>
            </h2>
            <p style={{
              fontSize: "1.05rem", color: "#64748B",
              maxWidth: "32rem", margin: "0 auto", lineHeight: 1.75,
            }}>
              How we helped leading companies transform challenges into measurable growth.
            </p>
          </div>

          {/* Cases */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {cases.map((c, idx) => (
              <div
                key={c.company}
                className="glass-card glass-card-hover"
                style={{ padding: "2.5rem", overflow: "hidden", position: "relative" }}
              >
                <div style={{
                  position: "absolute", right: "-20px", top: "-20px",
                  fontSize: "8rem", opacity: 0.07, pointerEvents: "none",
                  userSelect: "none",
                }}>
                  {c.icon}
                </div>

                <div style={{ display: "grid", gap: "2rem" }} className={`case-grid-${idx}`}>
                  <style>{`
                    @media (min-width: 1024px) {
                      .case-grid-${idx} { grid-template-columns: 1fr 1fr !important; align-items: center !important; }
                    }
                  `}</style>

                  {/* Left */}
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1.25rem" }}>
                      <span style={{ fontSize: "2rem" }}>{c.icon}</span>
                      <div>
                        <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#0f172a", marginBottom: "2px" }}>
                          {c.company}
                        </h3>
                        <span style={{
                          padding: "3px 10px", borderRadius: "999px",
                          background: `${c.accent}15`, color: c.accent,
                          fontSize: "0.78rem", fontWeight: 600,
                        }}>
                          {c.industry}
                        </span>
                      </div>
                    </div>
                    <div style={{ marginBottom: "1rem" }}>
                      <p style={{ fontSize: "0.8rem", fontWeight: 600, color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "6px" }}>
                        Challenge
                      </p>
                      <p style={{ fontSize: "0.95rem", color: "#475569", lineHeight: 1.65 }}>
                        {c.challenge}
                      </p>
                    </div>
                    <div>
                      <p style={{ fontSize: "0.8rem", fontWeight: 600, color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "6px" }}>
                        Solution
                      </p>
                      <p style={{ fontSize: "0.95rem", color: "#475569", lineHeight: 1.65 }}>
                        {c.solution}
                      </p>
                    </div>
                  </div>

                  {/* Right — Results */}
                  <div style={{
                    background: c.gradient,
                    borderRadius: "1rem", padding: "2rem",
                    display: "grid", gap: "1.5rem",
                  }}>
                    {c.results.map((r) => {
                      const Icon = r.icon;
                      return (
                        <div key={r.label} style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                          <div style={{
                            width: "44px", height: "44px", borderRadius: "12px",
                            background: `${r.color}15`,
                            display: "flex", alignItems: "center", justifyContent: "center",
                            flexShrink: 0,
                          }}>
                            <Icon size={20} style={{ color: r.color }} />
                          </div>
                          <div>
                            <div style={{ fontSize: "1.6rem", fontWeight: 800, color: r.color, lineHeight: 1, letterSpacing: "-0.02em" }}>
                              {r.stat}
                            </div>
                            <div style={{ fontSize: "0.82rem", color: "#64748B", fontWeight: 500 }}>
                              {r.label}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                    <button
                      style={{
                        display: "inline-flex", alignItems: "center", gap: "6px",
                        color: c.accent, fontSize: "0.875rem", fontWeight: 600,
                        background: "none", border: "none", cursor: "pointer", padding: 0,
                      }}
                    >
                      Read Full Story <ArrowRight size={15} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
