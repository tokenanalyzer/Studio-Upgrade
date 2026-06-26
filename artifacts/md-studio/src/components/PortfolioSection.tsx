import { useState } from "react";
import { Lock, Clock, ArrowUpRight } from "lucide-react";

const categories = ["All", "Web App", "AI / ML", "SaaS", "Mobile", "Tools"];

const projects = [
  {
    title: "SAH ULTIMATE",
    category: "SaaS",
    description: "A premium all-in-one platform built for power users.",
    tags: ["SaaS", "React", "TypeScript"],
    color: "#2563EB",
    gradient: "linear-gradient(135deg, #1E3A8A 0%, #2563EB 100%)",
    status: "private" as const,
    emoji: "🏆",
  },
  {
    title: "Post Agent",
    category: "AI / ML",
    description: "AI-powered social media automation agent that creates and schedules content autonomously.",
    tags: ["AI Agent", "Automation", "LLM"],
    color: "#8B5CF6",
    gradient: "linear-gradient(135deg, #5B21B6 0%, #8B5CF6 100%)",
    status: "private" as const,
    emoji: "🤖",
  },
  {
    title: "Prompt Pilot",
    category: "AI / ML",
    description: "Advanced prompt engineering platform for building and testing LLM workflows.",
    tags: ["Prompt Engineering", "OpenAI", "Node.js"],
    color: "#0EA5E9",
    gradient: "linear-gradient(135deg, #0369A1 0%, #38BDF8 100%)",
    status: "private" as const,
    emoji: "🧠",
  },
  {
    title: "Nexa AI",
    category: "AI / ML",
    description: "Intelligent AI assistant platform with custom knowledge base and multi-agent orchestration.",
    tags: ["LLM", "RAG", "Python"],
    color: "#059669",
    gradient: "linear-gradient(135deg, #065F46 0%, #059669 100%)",
    status: "private" as const,
    emoji: "⚡",
  },
  {
    title: "Mythos",
    category: "Web App",
    description: "Immersive storytelling platform with AI-generated narrative worlds.",
    tags: ["Next.js", "AI", "Creative"],
    color: "#DB2777",
    gradient: "linear-gradient(135deg, #9D174D 0%, #EC4899 100%)",
    status: "private" as const,
    emoji: "📖",
  },
  {
    title: "GhostHub",
    category: "Tools",
    description: "Developer productivity hub with automated code review and deployment pipelines.",
    tags: ["DevOps", "CI/CD", "TypeScript"],
    color: "#475569",
    gradient: "linear-gradient(135deg, #1E293B 0%, #475569 100%)",
    status: "private" as const,
    emoji: "👻",
  },
  {
    title: "Data AI",
    category: "AI / ML",
    description: "Natural language interface for querying databases and generating business intelligence reports.",
    tags: ["NLP", "PostgreSQL", "Analytics"],
    color: "#D97706",
    gradient: "linear-gradient(135deg, #92400E 0%, #F59E0B 100%)",
    status: "private" as const,
    emoji: "📊",
  },
  {
    title: "GoBook",
    category: "SaaS",
    description: "Smart booking and scheduling SaaS for service-based businesses.",
    tags: ["SaaS", "Stripe", "React"],
    color: "#2563EB",
    gradient: "linear-gradient(135deg, #1E40AF 0%, #60A5FA 100%)",
    status: "coming-soon" as const,
    emoji: "📅",
  },
  {
    title: "CodeBlade",
    category: "Tools",
    description: "Next-generation code editor with inline AI suggestions and pair-programming mode.",
    tags: ["IDE", "AI", "WebAssembly"],
    color: "#7C3AED",
    gradient: "linear-gradient(135deg, #4C1D95 0%, #7C3AED 100%)",
    status: "coming-soon" as const,
    emoji: "⚔️",
  },
  {
    title: "CodeZen",
    category: "Tools",
    description: "Code quality and refactoring assistant that enforces best practices automatically.",
    tags: ["Code Quality", "AST", "TypeScript"],
    color: "#059669",
    gradient: "linear-gradient(135deg, #064E3B 0%, #34D399 100%)",
    status: "private" as const,
    emoji: "🧘",
  },
  {
    title: "AdilStudio",
    category: "Web App",
    description: "Personal portfolio and client project showcase platform.",
    tags: ["Portfolio", "Next.js", "Framer"],
    color: "#0f172a",
    gradient: "linear-gradient(135deg, #0f172a 0%, #334155 100%)",
    status: "coming-soon" as const,
    emoji: "🎨",
  },
  {
    title: "StockSense",
    category: "SaaS",
    description: "Real-time stock market intelligence with AI-driven pattern recognition and alerts.",
    tags: ["FinTech", "AI", "Real-time"],
    color: "#B45309",
    gradient: "linear-gradient(135deg, #78350F 0%, #F59E0B 100%)",
    status: "private" as const,
    emoji: "📈",
  },
];

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="section-block" style={{ background: "white" }}>
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
              Projects We Have{" "}
              <span className="text-gradient-violet">Built & Shipped</span>
            </h2>
            <p style={{
              fontSize: "1.05rem", color: "#64748B",
              maxWidth: "36rem", margin: "0 auto", lineHeight: 1.75,
            }}>
              A selection of our digital products. Some are live, some are private — all are built with the same obsession for quality.
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
          <div style={{ display: "grid", gap: "1.25rem" }} className="portfolio-grid">
            <style>{`
              @media (min-width: 640px)  { .portfolio-grid { grid-template-columns: repeat(2, 1fr) !important; } }
              @media (min-width: 1024px) { .portfolio-grid { grid-template-columns: repeat(3, 1fr) !important; } }
              @media (min-width: 1280px) { .portfolio-grid { grid-template-columns: repeat(4, 1fr) !important; } }
              .portfolio-card { transition: all 0.35s cubic-bezier(0.34,1.56,0.64,1); cursor:pointer; }
              .portfolio-card:hover { transform: translateY(-6px); box-shadow: 0 20px 40px rgba(0,0,0,0.1); }
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
                  height: "160px",
                  background: project.gradient,
                  position: "relative",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <span style={{ fontSize: "3.5rem", filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.3))" }}>
                    {project.emoji}
                  </span>

                  {/* Status badge */}
                  {project.status === "private" && (
                    <div style={{
                      position: "absolute", top: "10px", right: "10px",
                      display: "flex", alignItems: "center", gap: "5px",
                      padding: "4px 10px", borderRadius: "999px",
                      background: "rgba(0,0,0,0.5)", backdropFilter: "blur(8px)",
                      color: "rgba(255,255,255,0.9)", fontSize: "0.72rem", fontWeight: 600,
                    }}>
                      <Lock size={10} /> Private Project
                    </div>
                  )}
                  {project.status === "coming-soon" && (
                    <div style={{
                      position: "absolute", top: "10px", right: "10px",
                      display: "flex", alignItems: "center", gap: "5px",
                      padding: "4px 10px", borderRadius: "999px",
                      background: "rgba(245,158,11,0.9)", backdropFilter: "blur(8px)",
                      color: "white", fontSize: "0.72rem", fontWeight: 600,
                    }}>
                      <Clock size={10} /> Coming Soon
                    </div>
                  )}

                  {/* Category */}
                  <div style={{
                    position: "absolute", bottom: "10px", left: "10px",
                    padding: "3px 10px", borderRadius: "999px",
                    background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)",
                    fontSize: "0.72rem", fontWeight: 600, color: "rgba(255,255,255,0.9)",
                  }}>
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: "1.25rem" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "6px" }}>
                    <h3 style={{ fontSize: "0.975rem", fontWeight: 700, color: "#0f172a" }}>
                      {project.title}
                    </h3>
                    <ArrowUpRight size={15} style={{ color: "#94A3B8", flexShrink: 0, marginLeft: "6px", marginTop: "2px" }} />
                  </div>
                  <p style={{ fontSize: "0.82rem", color: "#64748B", lineHeight: 1.6, marginBottom: "1rem" }}>
                    {project.description}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                    {project.tags.map((tag) => (
                      <span key={tag} style={{
                        padding: "3px 8px", borderRadius: "6px",
                        background: "#F1F5F9", color: "#475569",
                        fontSize: "0.72rem", fontWeight: 500,
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
              className="btn-primary"
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
