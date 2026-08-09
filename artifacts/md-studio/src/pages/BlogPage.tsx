import { useState } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { Clock, ArrowUpRight, Rss, Search, ArrowLeft } from "lucide-react";
import Navbar, { NAV_H } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blog";
import { usePageSEO } from "@/hooks/usePageSEO";

const allTags = Array.from(new Set(blogPosts.flatMap(p => p.tags)));

export default function BlogPage() {
  const [, nav] = useLocation();
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  usePageSEO({
    title: "Blog — Engineering Insights on AI, SaaS & Full Stack Development",
    description: "In-depth articles on building production-ready AI agents, modern SaaS architecture, TypeScript best practices, and full stack engineering — by Adil Hussain, MD Studio.",
    canonical: "/blog",
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "MD Studio Engineering Blog",
        "description": "Deep-dives on AI development, SaaS architecture, and engineering best practices.",
        "url": "https://mdstudio.dev/blog",
        "author": { "@type": "Person", "name": "Adil Hussain" },
        "blogPost": blogPosts.map(p => ({
          "@type": "BlogPosting",
          "headline": p.title,
          "description": p.excerpt,
          "url": `https://mdstudio.dev/blog/${p.slug}`,
          "datePublished": p.dateISO,
          "author": { "@type": "Person", "name": "Adil Hussain" },
          "keywords": p.tags.join(", "),
        })),
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://mdstudio.dev/" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://mdstudio.dev/blog" },
        ],
      },
    ],
  });

  const filtered = blogPosts.filter(p => {
    const matchSearch = !search || p.title.toLowerCase().includes(search.toLowerCase()) || p.excerpt.toLowerCase().includes(search.toLowerCase());
    const matchTag = !activeTag || p.tags.includes(activeTag);
    return matchSearch && matchTag;
  });

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: `${NAV_H}px`, minHeight: "100vh", background: "var(--bg-page)" }}>

        {/* Hero */}
        <section style={{ background: "linear-gradient(160deg, #0f172a 0%, #1e3a8a 60%, #0f172a 100%)", padding: "5rem 0 4rem", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(37,99,235,0.09) 1px, transparent 1px)", backgroundSize: "36px 36px", pointerEvents: "none" }} />
          <div className="section-padding">
            <div className="container-wide" style={{ position: "relative", zIndex: 1 }}>
              <button onClick={() => nav("/")} style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "#60A5FA", background: "none", border: "none", cursor: "pointer", fontFamily: "inherit", fontSize: "0.85rem", marginBottom: "2rem", padding: 0 }}>
                <ArrowLeft size={14} /> Back to Home
              </button>
              <div className="section-label" style={{ justifyContent: "flex-start", marginBottom: "1.25rem" }}>
                <Rss size={12} /> Engineering Blog
              </div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
                style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 900, color: "#f1f5f9", letterSpacing: "-0.04em", margin: "0 0 1rem", lineHeight: 1.1 }}
              >
                From the{" "}
                <span style={{ background: "linear-gradient(90deg, #60A5FA, #A78BFA)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Engineering Desk
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.1 }}
                style={{ fontSize: "1.05rem", color: "#94a3b8", maxWidth: "42rem", lineHeight: 1.72, margin: "0 0 2.5rem" }}
              >
                Deep-dives on AI development, SaaS architecture, and engineering best practices — written from real client projects, not theory.
              </motion.p>

              {/* Search */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.18 }}
                style={{ position: "relative", maxWidth: "420px" }}
              >
                <Search size={16} style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", color: "#64748b" }} />
                <input
                  type="text"
                  placeholder="Search articles…"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  style={{ width: "100%", padding: "0.8rem 1rem 0.8rem 2.6rem", background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "12px", color: "#f1f5f9", fontSize: "0.9rem", outline: "none", fontFamily: "inherit", boxSizing: "border-box" }}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Tag filter */}
        <div className="section-padding" style={{ background: "var(--bg-alt)", borderBottom: "1px solid var(--border)", paddingTop: "1rem", paddingBottom: "1rem" }}>
          <div className="container-wide">
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", alignItems: "center" }}>
              <span style={{ fontSize: "0.8rem", color: "var(--text-3)", fontWeight: 600, marginRight: "4px" }}>Filter:</span>
              <button
                onClick={() => setActiveTag(null)}
                style={{ padding: "5px 14px", borderRadius: "999px", border: "1px solid", fontSize: "0.8rem", fontWeight: 500, cursor: "pointer", fontFamily: "inherit", transition: "all 0.15s", background: !activeTag ? "#2563EB" : "transparent", borderColor: !activeTag ? "#2563EB" : "var(--border)", color: !activeTag ? "white" : "var(--text-2)" }}
              >
                All
              </button>
              {allTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                  style={{ padding: "5px 14px", borderRadius: "999px", border: "1px solid", fontSize: "0.8rem", fontWeight: 500, cursor: "pointer", fontFamily: "inherit", transition: "all 0.15s", background: activeTag === tag ? "#2563EB" : "transparent", borderColor: activeTag === tag ? "#2563EB" : "var(--border)", color: activeTag === tag ? "white" : "var(--text-2)" }}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Posts grid */}
        <div className="section-padding" style={{ paddingTop: "3rem", paddingBottom: "5rem" }}>
          <div className="container-wide">
            {filtered.length === 0 ? (
              <div style={{ textAlign: "center", padding: "4rem 0", color: "var(--text-3)" }}>
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🔍</div>
                <p style={{ fontSize: "1rem" }}>No articles found. Try a different search.</p>
              </div>
            ) : (
              <motion.div
                style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 340px), 1fr))", gap: "1.5rem" }}
                initial="hidden"
                animate="visible"
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
              >
                {filtered.map((post) => (
                  <motion.article
                    key={post.slug}
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45 } } }}
                    onClick={() => nav(`/blog/${post.slug}`)}
                    style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "1.25rem", overflow: "hidden", cursor: "pointer", display: "flex", flexDirection: "column", transition: "transform 0.25s, box-shadow 0.25s, border-color 0.25s" }}
                    whileHover={{ y: -5, boxShadow: "0 20px 48px -8px rgba(37,99,235,0.14)" }}
                  >
                    <div style={{ background: `linear-gradient(135deg, ${post.tagBg}, var(--bg-page))`, padding: "1.6rem 1.6rem 1rem", fontSize: "2.5rem" }}>
                      {post.emoji}
                    </div>
                    <div style={{ padding: "0 1.5rem 1.5rem", display: "flex", flexDirection: "column", gap: "0.7rem", flex: 1 }}>
                      <span style={{ display: "inline-block", padding: "3px 10px", background: post.tagBg, color: post.tagColor, borderRadius: "6px", fontSize: "0.72rem", fontWeight: 700, alignSelf: "flex-start" }}>
                        {post.tag}
                      </span>
                      <h2 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text-1)", lineHeight: 1.45, margin: 0 }}>{post.title}</h2>
                      <p style={{ fontSize: "0.83rem", color: "var(--text-2)", lineHeight: 1.72, margin: 0, flex: 1 }}>{post.excerpt}</p>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", paddingTop: "0.5rem" }}>
                        {post.tags.slice(0, 3).map(t => (
                          <span key={t} style={{ fontSize: "0.7rem", padding: "2px 8px", background: "var(--bg-alt)", color: "var(--text-3)", borderRadius: "4px", border: "1px solid var(--border)" }}>{t}</span>
                        ))}
                      </div>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "0.75rem", color: "var(--text-3)", paddingTop: "0.75rem", borderTop: "1px solid var(--border)" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                          <span style={{ display: "flex", alignItems: "center", gap: "4px" }}><Clock size={12} /> {post.readTime}</span>
                          <span>{post.date}</span>
                        </div>
                        <span style={{ display: "flex", alignItems: "center", gap: "4px", color: "#2563EB", fontWeight: 600 }}>
                          Read <ArrowUpRight size={12} />
                        </span>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
