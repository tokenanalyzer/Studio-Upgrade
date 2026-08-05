import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { Clock, ArrowUpRight, Rss } from "lucide-react";
import { blogPosts } from "@/data/blog";

export default function BlogPreview() {
  const [, nav] = useLocation();
  const posts = blogPosts.slice(0, 3);

  return (
    <section id="blog" className="section-block" style={{ background: "var(--bg-page)", position: "relative" }}>
      <style>{`
        .blog-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }
        @media (min-width: 768px) { .blog-grid { grid-template-columns: repeat(3, 1fr); } }
        .blog-card {
          border: 1px solid var(--border);
          background: var(--bg-card);
          border-radius: 1.25rem;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          cursor: pointer;
          transition: border-color 0.25s;
        }
      `}</style>

      <div className="section-padding">
        <div className="container-wide">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -40px 0px" }}
            transition={{ duration: 0.5 }}
            style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "1rem", marginBottom: "2.5rem" }}
          >
            <div>
              <div className="section-label"><Rss size={12} /> Blog &amp; Insights</div>
              <h2 style={{ fontSize: "clamp(1.9rem, 3.5vw, 3rem)", fontWeight: 800, color: "var(--text-1)", margin: "0", letterSpacing: "-0.03em" }}>
                From the <span className="text-gradient">Engineering Desk</span>
              </h2>
            </div>
            <button onClick={() => nav("/blog")} className="btn-ghost" style={{ color: "#2563EB" }}>
              View All Posts <ArrowUpRight size={15} />
            </button>
          </motion.div>

          {/* Cards */}
          <motion.div
            className="blog-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -60px 0px" }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.09 } } }}
          >
            {posts.map((post) => (
              <motion.article
                key={post.slug}
                className="blog-card"
                onClick={() => nav(`/blog/${post.slug}`)}
                variants={{
                  hidden: { opacity: 0, y: 22 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.48, ease: [0.25, 0.46, 0.45, 0.94] } },
                }}
                whileHover={{ y: -5, boxShadow: "0 16px 40px -8px rgba(37,99,235,0.14)" }}
              >
                <div style={{ background: `linear-gradient(135deg, ${post.tagBg}, var(--bg-page))`, padding: "1.4rem 1.4rem 1rem", fontSize: "2rem" }}>
                  {post.emoji}
                </div>
                <div style={{ padding: "0 1.4rem 1.4rem", display: "flex", flexDirection: "column", gap: "0.65rem", flex: 1 }}>
                  <span style={{ display: "inline-block", padding: "3px 10px", background: post.tagBg, color: post.tagColor, borderRadius: "6px", fontSize: "0.72rem", fontWeight: 600, alignSelf: "flex-start" }}>
                    {post.tag}
                  </span>
                  <h3 style={{ fontSize: "0.98rem", fontWeight: 700, color: "var(--text-1)", lineHeight: 1.45, margin: 0 }}>{post.title}</h3>
                  <p style={{ fontSize: "0.82rem", color: "var(--text-2)", lineHeight: 1.7, margin: 0 }}>{post.excerpt}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem", fontSize: "0.75rem", color: "var(--text-3)", marginTop: "auto", paddingTop: "0.75rem", borderTop: "1px solid var(--border)" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "4px" }}><Clock size={12} /> {post.readTime}</span>
                    <span>{post.date}</span>
                    <span style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "4px", color: "#2563EB", fontWeight: 600 }}>
                      Read <ArrowUpRight size={12} />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
