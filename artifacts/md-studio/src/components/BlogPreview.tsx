import { useEffect, useRef } from "react";
import { Clock, ArrowUpRight, Rss } from "lucide-react";

const posts = [
  {
    tag: "AI Development",
    tagColor: "#7C3AED",
    tagBg: "#F5F3FF",
    title: "Building Production-Ready AI Agents with LangChain and GPT-4",
    excerpt: "A deep-dive into architecting reliable, scalable AI agents — memory management, tool use, error handling, and deployment strategies.",
    readTime: "12 min read",
    date: "June 2026",
    emoji: "🤖",
  },
  {
    tag: "SaaS Development",
    tagColor: "#2563EB",
    tagBg: "#EFF6FF",
    title: "The Modern SaaS Stack: From Zero to Production in 2026",
    excerpt: "React, Next.js, Supabase, Stripe, and Vercel — the exact stack we use to build SaaS products that scale to millions of users.",
    readTime: "9 min read",
    date: "May 2026",
    emoji: "☁️",
  },
  {
    tag: "Engineering",
    tagColor: "#059669",
    tagBg: "#ECFDF5",
    title: "Why TypeScript First is Non-Negotiable for Serious Products",
    excerpt: "After 8 years and 127+ projects, TypeScript has saved us more hours in debugging than any other single decision we've made as engineers.",
    readTime: "7 min read",
    date: "April 2026",
    emoji: "📝",
  },
];

export default function BlogPreview() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.06 }
    );
    sectionRef.current?.querySelectorAll(".animate-on-scroll")?.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="blog" ref={sectionRef} className="section-block" style={{ background: "white", position: "relative" }}>
      <style>{`
        .blog-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }
        @media (min-width: 768px)  { .blog-grid { grid-template-columns: repeat(3, 1fr); } }
        .blog-card {
          border: 1px solid #E2E8F0;
          border-radius: 1.25rem;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .blog-card:hover { transform: translateY(-5px); box-shadow: 0 16px 40px -8px rgba(37,99,235,0.12); border-color: #BFDBFE; }
      `}</style>

      <div className="section-padding">
        <div className="container-wide">
          <div className="animate-on-scroll" style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "1rem", marginBottom: "2.5rem" }}>
            <div>
              <div className="section-label"><Rss size={12} /> Blog &amp; Insights</div>
              <h2 style={{ fontSize: "clamp(1.9rem, 3.5vw, 3rem)", fontWeight: 800, color: "#0f172a", margin: "0", letterSpacing: "-0.03em" }}>
                From the <span className="text-gradient">Engineering Desk</span>
              </h2>
            </div>
            <a href="#blog" className="btn-ghost" style={{ color: "#2563EB" }}>
              View All Posts <ArrowUpRight size={15} />
            </a>
          </div>

          <div className="blog-grid">
            {posts.map((post, i) => (
              <article key={post.title} className="blog-card animate-on-scroll" style={{ transitionDelay: `${i * 80}ms` }}>
                {/* Header */}
                <div style={{ background: `linear-gradient(135deg, ${post.tagBg}, white)`, padding: "1.4rem 1.4rem 1rem", fontSize: "2rem" }}>
                  {post.emoji}
                </div>
                <div style={{ padding: "0 1.4rem 1.4rem", display: "flex", flexDirection: "column", gap: "0.65rem", flex: 1 }}>
                  <span style={{ display: "inline-block", padding: "3px 10px", background: post.tagBg, color: post.tagColor, borderRadius: "6px", fontSize: "0.72rem", fontWeight: 600, alignSelf: "flex-start" }}>
                    {post.tag}
                  </span>
                  <h3 style={{ fontSize: "0.98rem", fontWeight: 700, color: "#0f172a", lineHeight: 1.45, margin: 0 }}>{post.title}</h3>
                  <p style={{ fontSize: "0.82rem", color: "#64748B", lineHeight: 1.7, margin: 0 }}>{post.excerpt}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem", fontSize: "0.75rem", color: "#94A3B8", marginTop: "auto", paddingTop: "0.75rem", borderTop: "1px solid #F1F5F9" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "4px" }}><Clock size={12} /> {post.readTime}</span>
                    <span>{post.date}</span>
                    <span style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "4px", color: "#2563EB", fontWeight: 600 }}>
                      Read <ArrowUpRight size={12} />
                    </span>
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
