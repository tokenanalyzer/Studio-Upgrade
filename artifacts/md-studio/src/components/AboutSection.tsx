import { CheckCircle2, ArrowRight } from "lucide-react";

const values = [
  "Transparent communication from day one",
  "Clean, maintainable, scalable code",
  "Agile delivery with regular milestones",
  "Post-launch support included",
  "Security-first development practices",
  "Performance-optimized by default",
];

const team = [
  { name: "Alex Morgan", role: "CEO & Lead Architect", emoji: "👨‍💻", bg: "#EFF6FF", color: "#2563EB" },
  { name: "Priya Patel", role: "Head of Design", emoji: "🎨", bg: "#FDF2F8", color: "#DB2777" },
  { name: "Carlos Silva", role: "Full-Stack Lead", emoji: "⚡", bg: "#ECFDF5", color: "#059669" },
  { name: "Nina Chen", role: "AI/ML Engineer", emoji: "🤖", bg: "#F5F3FF", color: "#8B5CF6" },
];

export default function AboutSection() {
  return (
    <section id="about" style={{ padding: "6rem 0", background: "white" }}>
      <div className="section-padding">
        <div className="container-wide">
          <div style={{ display: "grid", gap: "4rem", alignItems: "center" }} className="about-grid">
            <style>{`
              @media (min-width: 1024px) { .about-grid { grid-template-columns: 1fr 1fr !important; } }
            `}</style>

            {/* Left */}
            <div>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                padding: "6px 16px", borderRadius: "999px",
                background: "#ECFDF5", border: "1px solid #A7F3D0",
                marginBottom: "1.25rem",
              }}>
                <span style={{ fontSize: "0.82rem", fontWeight: 600, color: "#059669", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                  About Us
                </span>
              </div>
              <h2 style={{
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                fontWeight: 800, color: "#0f172a",
                letterSpacing: "-0.02em", marginBottom: "1.25rem",
              }}>
                A Team That Builds
                <br />
                <span className="text-gradient">Like It Is Ours</span>
              </h2>
              <p style={{ fontSize: "1.05rem", color: "#64748B", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                MD Studio is a boutique digital agency founded on a simple belief: great software changes lives. 
                We partner with startups and enterprises to build digital products that are not just functional — 
                they're extraordinary.
              </p>
              <p style={{ fontSize: "1rem", color: "#64748B", lineHeight: 1.8, marginBottom: "2.5rem" }}>
                With over 8 years of experience and 127 projects delivered, we bring the precision of a senior 
                engineering team and the creativity of a design studio to every engagement.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "2rem" }}>
                {values.map((v) => (
                  <div key={v} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <CheckCircle2 size={18} style={{ color: "#059669", flexShrink: 0 }} />
                    <span style={{ fontSize: "0.95rem", color: "#374151" }}>{v}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => {
                  const el = document.querySelector("#contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-primary"
              >
                Work With Us <ArrowRight size={16} />
              </button>
            </div>

            {/* Right — Team grid */}
            <div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
                {team.map((member) => (
                  <div
                    key={member.name}
                    className="glass-card glass-card-hover"
                    style={{ padding: "1.75rem 1.5rem", textAlign: "center" }}
                  >
                    <div style={{
                      width: "64px", height: "64px", borderRadius: "50%",
                      background: member.bg,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "2rem", margin: "0 auto 1rem",
                      boxShadow: `0 4px 12px ${member.color}20`,
                    }}>
                      {member.emoji}
                    </div>
                    <div style={{ fontSize: "0.975rem", fontWeight: 700, color: "#0f172a", marginBottom: "4px" }}>
                      {member.name}
                    </div>
                    <div style={{ fontSize: "0.8rem", color: "#64748B" }}>
                      {member.role}
                    </div>
                  </div>
                ))}
              </div>

              {/* Culture note */}
              <div style={{
                marginTop: "1.25rem",
                background: "linear-gradient(135deg, #EFF6FF 0%, #F5F3FF 100%)",
                borderRadius: "1rem",
                padding: "1.5rem",
                border: "1px solid #DBEAFE",
              }}>
                <p style={{ fontSize: "0.9rem", color: "#475569", lineHeight: 1.7, margin: 0 }}>
                  💡 <strong>Fun fact:</strong> Our average project NPS is <strong style={{ color: "#2563EB" }}>94</strong> — 
                  because we treat every project like it's our own startup.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
