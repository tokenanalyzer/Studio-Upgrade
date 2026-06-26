import { Clock, ArrowRight, FileSearch } from "lucide-react";

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
              Deep Dives Into{" "}
              <span className="text-gradient">Real Projects</span>
            </h2>
            <p style={{
              fontSize: "1.05rem", color: "#64748B",
              maxWidth: "32rem", margin: "0 auto", lineHeight: 1.75,
            }}>
              Detailed write-ups on the challenges we solved, the decisions we made, and the outcomes we delivered.
            </p>
          </div>

          {/* Coming soon state */}
          <div style={{
            background: "white",
            borderRadius: "1.5rem",
            padding: "5rem 2rem",
            border: "1px solid #E2E8F0",
            textAlign: "center",
          }}>
            <div style={{
              width: "72px", height: "72px", borderRadius: "50%",
              background: "linear-gradient(135deg, #ECFDF5, #D1FAE5)",
              display: "flex", alignItems: "center", justifyContent: "center",
              margin: "0 auto 1.5rem",
              border: "2px solid #A7F3D0",
            }}>
              <FileSearch size={30} style={{ color: "#059669" }} />
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "8px", justifyContent: "center", marginBottom: "1rem" }}>
              <Clock size={18} style={{ color: "#94A3B8" }} />
              <span style={{ fontSize: "1rem", fontWeight: 600, color: "#64748B" }}>
                Case studies being prepared
              </span>
            </div>

            <p style={{
              fontSize: "0.95rem", color: "#94A3B8", maxWidth: "28rem",
              margin: "0 auto 2rem", lineHeight: 1.7,
            }}>
              We're documenting the stories behind our projects — the real challenges, design decisions, 
              and measurable results. Coming soon.
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
