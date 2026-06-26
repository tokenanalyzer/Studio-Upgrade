import { Star, Clock, MessageSquare } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-block" style={{ background: "white" }}>
      <div className="section-padding">
        <div className="container-wide">
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              padding: "6px 16px", borderRadius: "999px",
              background: "#FDF2F8", border: "1px solid #FBCFE8",
              marginBottom: "1rem",
            }}>
              <span style={{ fontSize: "0.82rem", fontWeight: 600, color: "#DB2777", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                Testimonials
              </span>
            </div>
            <h2 style={{
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              fontWeight: 800, color: "#0f172a",
              letterSpacing: "-0.02em", marginBottom: "1rem",
            }}>
              What Clients{" "}
              <span className="text-gradient">Say About Us</span>
            </h2>
          </div>

          {/* Coming soon state */}
          <div style={{
            maxWidth: "680px", margin: "0 auto",
            background: "#F8FAFC",
            borderRadius: "1.5rem",
            padding: "4rem 2rem",
            border: "1px solid #E2E8F0",
            textAlign: "center",
          }}>
            {/* Star row */}
            <div style={{ display: "flex", gap: "6px", justifyContent: "center", marginBottom: "2rem" }}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={28} style={{ fill: "#FDE68A", color: "#F59E0B" }} />
              ))}
            </div>

            <div style={{
              width: "72px", height: "72px", borderRadius: "50%",
              background: "linear-gradient(135deg, #EFF6FF, #F5F3FF)",
              display: "flex", alignItems: "center", justifyContent: "center",
              margin: "0 auto 1.5rem",
              border: "2px solid #DBEAFE",
            }}>
              <MessageSquare size={30} style={{ color: "#2563EB" }} />
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "8px", justifyContent: "center", marginBottom: "1.25rem" }}>
              <Clock size={18} style={{ color: "#94A3B8" }} />
              <span style={{
                fontSize: "1rem", fontWeight: 600, color: "#64748B",
                letterSpacing: "0.03em",
              }}>
                Client reviews coming soon
              </span>
            </div>

            <p style={{
              fontSize: "0.95rem", color: "#94A3B8", maxWidth: "28rem",
              margin: "0 auto", lineHeight: 1.7,
            }}>
              We're currently collecting reviews from our clients. Check back soon — or{" "}
              <button
                onClick={() => {
                  const el = document.querySelector("#contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                style={{
                  background: "none", border: "none", cursor: "pointer",
                  color: "#2563EB", fontWeight: 600, textDecoration: "underline",
                  fontSize: "inherit", fontFamily: "inherit", padding: 0,
                }}
              >
                become one of our clients
              </button>{" "}
              and share your own.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
