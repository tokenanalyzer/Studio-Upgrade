import { useState } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const categories = ["All", "Web App", "Mobile", "SaaS", "E-Commerce"];

const projects = [
  {
    title: "TalentFlow HR Platform",
    category: "SaaS",
    description: "End-to-end HR management platform with AI-powered recruitment, onboarding flows, and payroll integration.",
    tags: ["React", "Node.js", "PostgreSQL"],
    color: "#2563EB",
    gradient: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)",
    icon: "🏢",
  },
  {
    title: "ShopSense Commerce",
    category: "E-Commerce",
    description: "High-performance e-commerce platform serving 50k+ products with real-time inventory and AI recommendations.",
    tags: ["Next.js", "Stripe", "Algolia"],
    color: "#059669",
    gradient: "linear-gradient(135deg, #ECFDF5 0%, #D1FAE5 100%)",
    icon: "🛍️",
  },
  {
    title: "HealthTrack Mobile",
    category: "Mobile",
    description: "Award-winning fitness app with personalized AI coaching, wearable sync, and social challenges.",
    tags: ["React Native", "ML Kit", "Firebase"],
    color: "#8B5CF6",
    gradient: "linear-gradient(135deg, #F5F3FF 0%, #EDE9FE 100%)",
    icon: "💪",
  },
  {
    title: "FinSight Analytics",
    category: "Web App",
    description: "Real-time financial analytics dashboard with predictive modeling and automated reporting for hedge funds.",
    tags: ["React", "D3.js", "Python"],
    color: "#D97706",
    gradient: "linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 100%)",
    icon: "📈",
  },
  {
    title: "LegalDocs SaaS",
    category: "SaaS",
    description: "AI-powered legal document automation platform reducing contract creation time by 80%.",
    tags: ["GPT-4", "Node.js", "Stripe"],
    color: "#DB2777",
    gradient: "linear-gradient(135deg, #FDF2F8 0%, #FCE7F3 100%)",
    icon: "⚖️",
  },
  {
    title: "EduLearn Platform",
    category: "Web App",
    description: "Interactive e-learning platform with live classrooms, progress tracking, and certification management.",
    tags: ["React", "WebRTC", "AWS"],
    color: "#0EA5E9",
    gradient: "linear-gradient(135deg, #F0F9FF 0%, #E0F2FE 100%)",
    icon: "🎓",
  },
];

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" style={{ padding: "6rem 0", background: "white" }}>
      <div className="section-padding">
        <div className="container-wide">
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              padding: "6px 16px", borderRadius: "999px",
              background: "#F5F3FF", border: "1px solid #DDD6FE",
              marginBottom: "1rem",
            }}>
              <span style={{ fontSize: "0.82rem", fontWeight: 600, color: "#8B5CF6", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                Our Work
              </span>
            </div>
            <h2 style={{
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              fontWeight: 800, color: "#0f172a",
              letterSpacing: "-0.02em", marginBottom: "1rem",
            }}>
              Projects That{" "}
              <span className="text-gradient-violet">Define Excellence</span>
            </h2>
            <p style={{
              fontSize: "1.05rem", color: "#64748B",
              maxWidth: "32rem", margin: "0 auto", lineHeight: 1.75,
            }}>
              Explore a selection of our most impactful digital products across industries.
            </p>
          </div>

          {/* Filter tabs */}
          <div style={{
            display: "flex", flexWrap: "wrap", gap: "8px",
            justifyContent: "center", marginBottom: "2.5rem",
          }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: "8px 18px",
                  borderRadius: "999px",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  background: activeCategory === cat ? "#2563EB" : "#F1F5F9",
                  color: activeCategory === cat ? "white" : "#64748B",
                  boxShadow: activeCategory === cat ? "0 4px 12px rgba(37,99,235,0.3)" : "none",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div style={{ display: "grid", gap: "1.5rem" }} className="portfolio-grid">
            <style>{`
              @media (min-width: 640px)  { .portfolio-grid { grid-template-columns: repeat(2, 1fr) !important; } }
              @media (min-width: 1024px) { .portfolio-grid { grid-template-columns: repeat(3, 1fr) !important; } }
              .portfolio-card:hover { transform: translateY(-8px); box-shadow: 0 24px 48px rgba(0,0,0,0.1); }
              .portfolio-card { transition: all 0.35s cubic-bezier(0.34,1.56,0.64,1); }
              .portfolio-card:hover .portfolio-link { opacity: 1; transform: translate(-50%, -50%) scale(1); }
              .portfolio-link { opacity: 0; transform: translate(-50%, -50%) scale(0.8); transition: all 0.25s ease; }
            `}</style>

            {filtered.map((project) => (
              <div
                key={project.title}
                className="portfolio-card"
                style={{
                  borderRadius: "1.25rem",
                  border: "1px solid #E2E8F0",
                  overflow: "hidden",
                  background: "white",
                }}
              >
                {/* Visual preview */}
                <div style={{
                  height: "200px",
                  background: project.gradient,
                  position: "relative",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <span style={{ fontSize: "4rem" }}>{project.icon}</span>
                  <div style={{
                    position: "absolute", top: "12px", right: "12px",
                    padding: "5px 12px", borderRadius: "999px",
                    background: "white", fontSize: "0.75rem",
                    fontWeight: 600, color: project.color,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                  }}>
                    {project.category}
                  </div>
                  <button
                    className="portfolio-link"
                    style={{
                      position: "absolute", left: "50%", top: "50%",
                      background: project.color, color: "white",
                      border: "none", borderRadius: "999px",
                      padding: "10px 20px",
                      display: "flex", alignItems: "center", gap: "6px",
                      fontSize: "0.875rem", fontWeight: 500, cursor: "pointer",
                    }}
                  >
                    <ExternalLink size={14} /> View Project
                  </button>
                </div>

                {/* Content */}
                <div style={{ padding: "1.5rem" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                    <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#0f172a" }}>
                      {project.title}
                    </h3>
                    <ArrowUpRight size={17} style={{ color: "#94A3B8", flexShrink: 0, marginLeft: "8px" }} />
                  </div>
                  <p style={{ fontSize: "0.875rem", color: "#64748B", lineHeight: 1.65, marginBottom: "1rem" }}>
                    {project.description}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {project.tags.map((tag) => (
                      <span key={tag} style={{
                        padding: "3px 10px", borderRadius: "6px",
                        background: "#F1F5F9", color: "#475569",
                        fontSize: "0.78rem", fontWeight: 500,
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <button
              onClick={() => {
                const el = document.querySelector("#contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-secondary"
              style={{ display: "inline-flex" }}
            >
              Start Your Project <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
