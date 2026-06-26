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
                We Build Digital Products
                <br />
                <span className="text-gradient">That Actually Work</span>
              </h2>
              <p style={{ fontSize: "1.05rem", color: "#64748B", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                MD Studio is a boutique digital agency founded by <strong style={{ color: "#0f172a" }}>Adil Hussain</strong> — 
                Full Stack Developer and AI Engineer. We build modern digital products for startups and businesses 
                that want to stand out and grow.
              </p>
              <p style={{ fontSize: "1rem", color: "#64748B", lineHeight: 1.8, marginBottom: "2.5rem" }}>
                From sleek web apps to intelligent AI systems, we bring the precision of a senior engineering team 
                and the creativity of a design studio to every project.
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 20px", marginBottom: "2.5rem" }}>
                {specializations.map((v) => (
                  <div key={v} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <CheckCircle2 size={15} style={{ color: "#059669", flexShrink: 0 }} />
                    <span style={{ fontSize: "0.9rem", color: "#374151" }}>{v}</span>
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

            {/* Right — Founder card */}
            <div>
              <div className="glass-card" style={{ padding: "2.5rem", textAlign: "center", marginBottom: "1.25rem" }}>
                <div style={{
                  width: "90px", height: "90px", borderRadius: "50%",
                  background: "linear-gradient(135deg, #2563EB 0%, #8B5CF6 100%)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 1.5rem",
                  fontSize: "2.5rem",
                  boxShadow: "0 8px 24px rgba(37,99,235,0.3)",
                }}>
                  👨‍💻
                </div>
                <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#0f172a", marginBottom: "6px" }}>
                  Adil Hussain
                </h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", justifyContent: "center", marginBottom: "1.5rem" }}>
                  {["Founder", "Full Stack Developer", "AI Engineer"].map((role) => (
                    <span key={role} style={{
                      padding: "4px 12px", borderRadius: "999px",
                      background: "#EFF6FF", color: "#2563EB",
                      fontSize: "0.8rem", fontWeight: 600,
                    }}>
                      {role}
                    </span>
                  ))}
                </div>
                <p style={{ fontSize: "0.9rem", color: "#64748B", lineHeight: 1.7 }}>
                  Building world-class digital products with a passion for clean code, 
                  intelligent systems, and exceptional user experiences.
                </p>
              </div>

              {/* Highlight box */}
              <div style={{
                background: "linear-gradient(135deg, #EFF6FF 0%, #F5F3FF 100%)",
                borderRadius: "1rem",
                padding: "1.5rem",
                border: "1px solid #DBEAFE",
              }}>
                <p style={{ fontSize: "0.9rem", color: "#475569", lineHeight: 1.7, margin: 0 }}>
                  💡 <strong>Our Commitment:</strong> We treat every project like it's our own startup — 
                  with full ownership, attention to detail, and a relentless drive for excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
