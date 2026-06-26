import { Calendar, Clock, ArrowUpRight, Tag } from "lucide-react";

const posts = [
  {
    category: "Development",
    categoryColor: "#2563EB",
    categoryBg: "#EFF6FF",
    title: "Building Scalable SaaS Architecture: A 2025 Guide",
    excerpt: "Explore the battle-tested patterns for multi-tenant SaaS applications — from database isolation strategies to caching, observability, and zero-downtime deployments.",
    readTime: "9 min read",
    date: "Jun 12, 2025",
    emoji: "🏗️",
    tags: ["SaaS", "Architecture", "Scalability"],
  },
  {
    category: "AI & ML",
    categoryColor: "#8B5CF6",
    categoryBg: "#F5F3FF",
    title: "Integrating LLMs into Production Apps Without Breaking the Bank",
    excerpt: "Practical strategies for deploying GPT-4, Claude, and open-source LLMs in production — from prompt caching and token optimization to fallback chains and cost controls.",
    readTime: "7 min read",
    date: "May 28, 2025",
    emoji: "🤖",
    tags: ["LLM", "OpenAI", "Cost Optimization"],
  },
  {
    category: "Design",
    categoryColor: "#DB2777",
    categoryBg: "#FDF2F8",
    title: "Designing for Conversion: The Psychology of High-Performance UIs",
    excerpt: "How visual hierarchy, micro-interactions, and cognitive load theory combine to create interfaces that don't just look great — they drive measurable business outcomes.",
    readTime: "6 min read",
    date: "May 15, 2025",
    emoji: "🎨",
    tags: ["UX Design", "Conversion", "Psychology"],
  },
];

export default function BlogPreview() {
  return (
    <section id="blog" style={{ padding: "6rem 0", background: "#F8FAFC" }}>
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
                From Our{" "}
                <span className="text-gradient">Experts</span>
              </h2>
              <p style={{ fontSize: "1rem", color: "#64748B", lineHeight: 1.65 }}>
                Actionable insights on development, design, and digital growth.
              </p>
            </div>
            <button className="btn-secondary" style={{ display: "inline-flex" }}>
              All Articles <ArrowUpRight size={15} />
            </button>
          </div>

          {/* Posts grid */}
          <div style={{ display: "grid", gap: "1.5rem" }} className="blog-grid">
            <style>{`
              @media (min-width: 768px)  { .blog-grid { grid-template-columns: repeat(2, 1fr) !important; } }
              @media (min-width: 1024px) { .blog-grid { grid-template-columns: repeat(3, 1fr) !important; } }
              .blog-card { transition: all 0.3s cubic-bezier(0.34,1.56,0.64,1); }
              .blog-card:hover { transform: translateY(-6px); box-shadow: 0 20px 40px rgba(0,0,0,0.08); }
              .blog-card:hover .blog-arrow { transform: translate(2px, -2px); }
              .blog-arrow { transition: transform 0.2s ease; }
            `}</style>

            {posts.map((post) => (
              <article
                key={post.title}
                className="blog-card"
                style={{
                  background: "white",
                  borderRadius: "1.25rem",
                  border: "1px solid #E2E8F0",
                  overflow: "hidden",
                  cursor: "pointer",
                }}
              >
                {/* Top visual */}
                <div style={{
                  height: "160px",
                  background: `linear-gradient(135deg, ${post.categoryBg} 0%, white 100%)`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  position: "relative",
                }}>
                  <span style={{ fontSize: "4rem" }}>{post.emoji}</span>
                  <span style={{
                    position: "absolute", top: "12px", left: "12px",
                    padding: "4px 12px", borderRadius: "999px",
                    background: post.categoryBg, color: post.categoryColor,
                    fontSize: "0.75rem", fontWeight: 600,
                  }}>
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div style={{ padding: "1.5rem" }}>
                  <div style={{
                    display: "flex", alignItems: "center", gap: "14px",
                    marginBottom: "0.875rem",
                    fontSize: "0.8rem", color: "#94A3B8",
                  }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                      <Calendar size={13} /> {post.date}
                    </span>
                    <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                      <Clock size={13} /> {post.readTime}
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "8px", marginBottom: "0.75rem" }}>
                    <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#0f172a", lineHeight: 1.4 }}>
                      {post.title}
                    </h3>
                    <ArrowUpRight size={17} className="blog-arrow" style={{ color: "#94A3B8", flexShrink: 0 }} />
                  </div>
                  <p style={{ fontSize: "0.875rem", color: "#64748B", lineHeight: 1.65, marginBottom: "1.25rem" }}>
                    {post.excerpt}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {post.tags.map((tag) => (
                      <span key={tag} style={{
                        display: "inline-flex", alignItems: "center", gap: "4px",
                        padding: "3px 10px", borderRadius: "6px",
                        background: "#F1F5F9", color: "#475569",
                        fontSize: "0.75rem", fontWeight: 500,
                      }}>
                        <Tag size={10} /> {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
