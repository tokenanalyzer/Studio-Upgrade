import { Clock, ArrowRight, FileSearch } from "lucide-react";

export default function CaseStudiesSection() {
  return (
    <section id="case-studies" className="section-block" style={{ background: "#F8FAFC" }}>
      <div className="section-padding">
        <div className="container-wide">
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              padding: "5px 14px", borderRadius: "999px",
              background: "#ECFDF5", border: "1px solid #A7F3D0",
              marginBottom: "0.75rem",
            }}>
              <span style={{ fontSize: "0.8rem", fontWeight: 600, color: "#059669", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                Case Studies
              </span>
            </div>
            <h2 style={{
              fontSize: "clamp(2rem, 3vw, 3.2rem)",
              fontWeight: 800, color: "#0f172a",
              letterSpacing: "-0.025em", marginBottom: "0.75rem", lineHeight: 1.15,
            }}>
              Deep Dives Into{" "}
              <span className="text-gradient">Real Projects</span>
            </h2>
            <p style={{
              fontSize: "1rem", color: "#64748B",
              maxWidth: "30rem", margin: "0 auto", lineHeight: 1.72,
            }}>
              Detailed write-ups on the challenges, decisions, and outcomes of our most impactful projects.
            </p>
          </div>

          <div style={{
            background: "white",
            borderRadius: "1.25rem",
            padding: "4rem 2rem",
            border: "1px solid #E2E8F0",
            textAlign: "center",
          }}>
            <div style={{
              width: "64px", height: "64px", borderRadius: "50%",
              background: "linear-gradient(135deg, #ECFDF5, #D1FAE5)",
              display: "flex", alignItems: "center", justifyContent: "center",
              margin: "0 auto 1.25rem",
              border: "2px solid #A7F3D0",
            }}>
              <FileSearch size={28} style={{ color: "#059669" }} />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", justifyContent: "center", marginBottom: "0.75rem" }}>
              <Clock size={16} style={{ color: "#94A3B8" }} />
              <span style={{ fontSize: "0.95rem", fontWeight: 600, color: "#64748B" }}>
                Case studies being prepared
              </span>
            </div>
            <p style={{
              fontSize: "0.9rem", color: "#94A3B8", maxWidth: "26rem",
              margin: "0 auto 1.75rem", lineHeight: 1.7,
            }}>
              We're documenting the real stories behind our projects — challenges, design decisions, and measurable results.
            </p>
            <button
              onClick={() => {
                const el = document.querySelector("#contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-primary"
              style={{ display: "inline-flex" }}
            >
              Discuss Your Project <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
