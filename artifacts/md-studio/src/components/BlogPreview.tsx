import { Clock, ArrowUpRight, Rss } from "lucide-react";

export default function BlogPreview() {
  return (
    <section id="blog" className="section-block" style={{ background: "#F8FAFC" }}>
      <div className="section-padding">
        <div className="container-wide">
          {/* Header */}
          <div style={{
            display: "flex", alignItems: "flex-end", justifyContent: "space-between",
            flexWrap: "wrap", gap: "1rem", marginBottom: "3rem",
          }}>
            <div>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                padding: "6px 16px", borderRadius: "999px",
                background: "#FFF7ED", border: "1px solid #FED7AA",
                marginBottom: "1rem",
              }}>
                <span style={{ fontSize: "0.82rem", fontWeight: 600, color: "#D97706", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                  Insights
                </span>
              </div>
              <h2 style={{
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                fontWeight: 800, color: "#0f172a",
                letterSpacing: "-0.02em", marginBottom: "0.75rem",
              }}>
                Thoughts &{" "}
                <span className="text-gradient">Insights</span>
              </h2>
              <p style={{ fontSize: "1rem", color: "#64748B", lineHeight: 1.65 }}>
                Articles on development, AI, and building digital products.
              </p>
            </div>
            <button className="btn-secondary" style={{ display: "inline-flex" }}>
              All Articles <ArrowUpRight size={15} />
            </button>
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
              background: "linear-gradient(135deg, #FFF7ED, #FFFBEB)",
              display: "flex", alignItems: "center", justifyContent: "center",
              margin: "0 auto 1.5rem",
              border: "2px solid #FED7AA",
            }}>
              <Rss size={30} style={{ color: "#D97706" }} />
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "8px", justifyContent: "center", marginBottom: "1rem" }}>
              <Clock size={18} style={{ color: "#94A3B8" }} />
              <span style={{ fontSize: "1rem", fontWeight: 600, color: "#64748B" }}>
                Articles coming soon
              </span>
            </div>

            <p style={{
              fontSize: "0.95rem", color: "#94A3B8", maxWidth: "28rem",
              margin: "0 auto", lineHeight: 1.7,
            }}>
              We're preparing high-quality content on full-stack development, AI engineering, 
              and building scalable digital products. Follow us on{" "}
              <a
                href="https://x.com/Husain3413"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#2563EB", fontWeight: 600, textDecoration: "none" }}
              >
                Twitter/X
              </a>{" "}
              for updates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
