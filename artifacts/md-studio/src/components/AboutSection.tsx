import { CheckCircle2, ArrowRight } from "lucide-react";

const specializations = [
  "Website Development",
  "Web Applications",
  "Android Applications",
  "Custom CRM",
  "Business Dashboards",
  "AI Agents & AI Automation",
  "SaaS Platforms",
  "API Integrations",
  "UI/UX Design",
  "Cloud Solutions",
  "Automation Systems",
];

const values = [
  { icon: "✅", text: "Clean, Scalable & Maintainable Code" },
  { icon: "✅", text: "Transparent Communication" },
  { icon: "✅", text: "Agile Development Process" },
  { icon: "✅", text: "Performance Optimized" },
  { icon: "✅", text: "Security First Approach" },
  { icon: "✅", text: "Post Launch Support" },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-block" style={{ background: "white" }}>
      <div className="section-padding">
        <div className="container-wide">
          <div className="about-grid">
            <style>{`
              .about-grid {
                display: grid;
                gap: 3rem;
                align-items: center;
              }
              @media (min-width: 1024px) {
                .about-grid { grid-template-columns: 1fr 1fr; gap: 5rem; }
              }
            `}</style>

            {/* Left */}
            <div>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                padding: "5px 14px", borderRadius: "999px",
                background: "#ECFDF5", border: "1px solid #A7F3D0",
                marginBottom: "1rem",
              }}>
                <span style={{ fontSize: "0.8rem", fontWeight: 600, color: "#059669", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                  About MD Studio
                </span>
              </div>
              <h2 style={{
                fontSize: "clamp(2rem, 3vw, 3.2rem)",
                fontWeight: 800, color: "#0f172a",
                letterSpacing: "-0.025em", marginBottom: "1rem", lineHeight: 1.15,
              }}>
                We Build Digital Products
                <br />
                <span className="text-gradient">That Actually Work</span>
              </h2>
              <p style={{ fontSize: "1rem", color: "#64748B", lineHeight: 1.8, marginBottom: "1rem" }}>
                MD Studio is a boutique digital agency founded by <strong style={{ color: "#0f172a" }}>Adil Hussain</strong> — 
                Full Stack Developer and AI Engineer. We build modern digital products for startups and businesses 
                that want to stand out and grow.
              </p>
              <p style={{ fontSize: "0.95rem", color: "#64748B", lineHeight: 1.8, marginBottom: "2rem" }}>
                From sleek web apps to intelligent AI systems, we bring the precision of a senior engineering team 
                and the creativity of a design studio to every project.
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "7px 1.5rem", marginBottom: "2rem" }}>
                {specializations.map((v) => (
                  <div key={v} style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                    <CheckCircle2 size={14} style={{ color: "#059669", flexShrink: 0 }} />
                    <span style={{ fontSize: "0.875rem", color: "#374151" }}>{v}</span>
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

            {/* Right — Founder + values */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {/* Founder card */}
              <div className="glass-card" style={{ padding: "2rem", textAlign: "center" }}>
                <div style={{
                  width: "80px", height: "80px", borderRadius: "50%",
                  background: "linear-gradient(135deg, #2563EB 0%, #8B5CF6 100%)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 1.25rem",
                  fontSize: "2.25rem",
                  boxShadow: "0 8px 24px rgba(37,99,235,0.3)",
                }}>
                  👨‍💻
                </div>
                <h3 style={{ fontSize: "1.35rem", fontWeight: 800, color: "#0f172a", marginBottom: "6px" }}>
                  Adil Hussain
                </h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", justifyContent: "center", marginBottom: "1.25rem" }}>
                  {["Founder", "Full Stack Developer", "AI Engineer"].map((role) => (
                    <span key={role} style={{
                      padding: "3px 10px", borderRadius: "999px",
                      background: "#EFF6FF", color: "#2563EB",
                      fontSize: "0.78rem", fontWeight: 600,
                    }}>
                      {role}
                    </span>
                  ))}
                </div>
                <p style={{ fontSize: "0.88rem", color: "#64748B", lineHeight: 1.7 }}>
                  "I believe in building digital products that solve real problems 
                  and create meaningful experiences."
                </p>
                <p style={{ fontStyle: "italic", fontWeight: 600, color: "#475569", fontSize: "0.9rem", marginTop: "0.75rem" }}>
                  — Adil Hussain
                </p>
              </div>

              {/* Values grid */}
              <div style={{
                display: "grid", gridTemplateColumns: "1fr 1fr",
                gap: "8px",
              }}>
                {values.map((v) => (
                  <div key={v.text} style={{
                    padding: "10px 12px",
                    background: "#F8FAFC", border: "1px solid #E2E8F0",
                    borderRadius: "10px",
                    fontSize: "0.8rem", color: "#475569",
                    display: "flex", alignItems: "flex-start", gap: "7px",
                    lineHeight: 1.4,
                  }}>
                    <span style={{ flexShrink: 0 }}>{v.icon}</span>
                    {v.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
