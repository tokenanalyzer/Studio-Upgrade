import { useEffect, useState } from "react";
import { useRoute, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Clock, ArrowLeft, Calendar, Tag, Share2, ArrowUpRight } from "lucide-react";
import Navbar, { NAV_H } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getPostBySlug, blogPosts, type BlogBlock } from "@/data/blog";
import { usePageSEO } from "@/hooks/usePageSEO";

/* ── Reading progress bar ── */
function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const update = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return (
    <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 200, height: "3px", background: "rgba(37,99,235,0.12)" }}>
      <motion.div style={{ height: "100%", background: "linear-gradient(90deg, #2563EB, #7C3AED)", width: `${progress}%` }} />
    </div>
  );
}

/* ── Block renderer ── */
function Block({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case "p":
      return <p style={{ fontSize: "1.04rem", lineHeight: 1.85, color: "var(--text-2)", margin: "0 0 1.4rem" }}>{block.text}</p>;
    case "h2":
      return <h2 style={{ fontSize: "clamp(1.3rem, 2.2vw, 1.65rem)", fontWeight: 800, color: "var(--text-1)", margin: "2.5rem 0 1rem", letterSpacing: "-0.025em", lineHeight: 1.25 }}>{block.text}</h2>;
    case "h3":
      return <h3 style={{ fontSize: "clamp(1.05rem, 1.6vw, 1.25rem)", fontWeight: 700, color: "var(--text-1)", margin: "2rem 0 0.75rem", letterSpacing: "-0.02em" }}>{block.text}</h3>;
    case "ul":
      return (
        <ul style={{ margin: "0 0 1.4rem", padding: "0 0 0 1.5rem", display: "flex", flexDirection: "column", gap: "0.45rem" }}>
          {block.items?.map((item, i) => (
            <li key={i} style={{ fontSize: "1.02rem", lineHeight: 1.75, color: "var(--text-2)" }}>{item}</li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol style={{ margin: "0 0 1.4rem", padding: "0 0 0 1.5rem", display: "flex", flexDirection: "column", gap: "0.45rem" }}>
          {block.items?.map((item, i) => (
            <li key={i} style={{ fontSize: "1.02rem", lineHeight: 1.75, color: "var(--text-2)" }}>{item}</li>
          ))}
        </ol>
      );
    case "code":
      return (
        <div style={{ margin: "0 0 1.6rem", borderRadius: "12px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.07)" }}>
          {block.lang && (
            <div style={{ background: "#1e293b", padding: "6px 14px", fontSize: "0.72rem", color: "#60A5FA", fontWeight: 600, borderBottom: "1px solid rgba(255,255,255,0.06)", fontFamily: "monospace" }}>
              {block.lang}
            </div>
          )}
          <pre style={{ background: "#0f172a", padding: "1.25rem 1.4rem", overflowX: "auto", margin: 0 }}>
            <code style={{ fontSize: "0.87rem", lineHeight: 1.75, color: "#e2e8f0", fontFamily: "'Fira Code', 'Cascadia Code', monospace", whiteSpace: "pre" }}>
              {block.text}
            </code>
          </pre>
        </div>
      );
    case "callout":
      return (
        <div style={{ margin: "0 0 1.6rem", padding: "1.1rem 1.4rem", background: "rgba(37,99,235,0.06)", borderLeft: "3px solid #2563EB", borderRadius: "0 12px 12px 0" }}>
          <p style={{ fontSize: "1.02rem", lineHeight: 1.8, color: "var(--text-1)", margin: 0, fontStyle: "italic" }}>{block.text}</p>
        </div>
      );
    case "divider":
      return <hr style={{ border: "none", borderTop: "1px solid var(--border)", margin: "2.5rem 0" }} />;
    default:
      return null;
  }
}

function BlogPostSEO({ slug }: { slug: string }) {
  const post = getPostBySlug(slug);
  usePageSEO(post ? {
    title: post.title,
    description: post.excerpt,
    canonical: `/blog/${post.slug}`,
    type: "article",
    publishedTime: post.dateISO,
    author: post.author,
    tags: post.tags,
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.excerpt,
        "url": `https://mdstudio.dev/blog/${post.slug}`,
        "datePublished": post.dateISO,
        "dateModified": post.dateISO,
        "author": {
          "@type": "Person",
          "name": "Adil Hussain",
          "url": "https://mdstudio.dev",
          "image": "https://mdstudio.dev/adil-hussain.png",
          "sameAs": ["https://github.com/mdstudio-adil", "https://www.linkedin.com/in/adil-husain-20a19534a/"]
        },
        "publisher": {
          "@type": "Organization",
          "name": "MD Studio",
          "url": "https://mdstudio.dev",
          "logo": { "@type": "ImageObject", "url": "https://mdstudio.dev/favicon.svg" }
        },
        "keywords": post.tags.join(", "),
        "articleSection": post.tag,
        "timeRequired": post.readTime,
        "inLanguage": "en-US",
        "mainEntityOfPage": { "@type": "WebPage", "@id": `https://mdstudio.dev/blog/${post.slug}` }
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home",   "item": "https://mdstudio.dev/" },
          { "@type": "ListItem", "position": 2, "name": "Blog",   "item": "https://mdstudio.dev/blog" },
          { "@type": "ListItem", "position": 3, "name": post.title, "item": `https://mdstudio.dev/blog/${post.slug}` }
        ]
      }
    ]
  } : {
    title: "Article Not Found | MD Studio",
    description: "This article could not be found.",
    canonical: "/blog",
  });
  return null;
}

export default function BlogPostPage() {
  const [, params] = useRoute("/blog/:slug");
  const [, nav] = useLocation();
  const slug = params?.slug ?? "";
  const post = getPostBySlug(slug);

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  // SEO is handled by a separate component so hooks run unconditionally
  if (!post) {
    return (
      <>
        <Navbar />
        <main style={{ paddingTop: `${NAV_H + 80}px`, minHeight: "100vh", background: "var(--bg-page)", textAlign: "center" }}>
          <div style={{ fontSize: "4rem" }}>📄</div>
          <h1 style={{ color: "var(--text-1)", marginTop: "1rem" }}>Article not found</h1>
          <button onClick={() => nav("/blog")} className="btn-primary" style={{ marginTop: "1.5rem" }}>
            Back to Blog
          </button>
        </main>
        <Footer />
      </>
    );
  }

  // SEO injected as sibling — hooks stay at top level
  const related = blogPosts.filter(p => p.slug !== slug).slice(0, 2);

  const share = () => {
    if (navigator.share) {
      navigator.share({ title: post.title, url: window.location.href });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied!");
    }
  };

  return (
    <>
      <ReadingProgress />
      <Navbar />
      <main style={{ paddingTop: `${NAV_H}px`, background: "var(--bg-page)", minHeight: "100vh" }}>

        {/* Hero */}
        <section style={{ background: "linear-gradient(160deg, #0f172a 0%, #1e3a8a 70%, #0f172a 100%)", padding: "4rem 0 5rem", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(37,99,235,0.09) 1px, transparent 1px)", backgroundSize: "36px 36px", pointerEvents: "none" }} />
          <div className="section-padding">
            <div style={{ maxWidth: "780px", margin: "0 auto", position: "relative", zIndex: 1 }}>
              <button onClick={() => nav("/blog")} style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "#60A5FA", background: "none", border: "none", cursor: "pointer", fontFamily: "inherit", fontSize: "0.85rem", marginBottom: "2rem", padding: 0 }}>
                <ArrowLeft size={14} /> Back to Blog
              </button>

              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <span style={{ display: "inline-block", padding: "4px 12px", background: post.tagBg, color: post.tagColor, borderRadius: "6px", fontSize: "0.78rem", fontWeight: 700, marginBottom: "1.25rem" }}>
                  {post.tag}
                </span>
                <div style={{ fontSize: "3.5rem", marginBottom: "1.25rem" }}>{post.emoji}</div>
                <h1 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.9rem)", fontWeight: 900, color: "#f1f5f9", letterSpacing: "-0.04em", lineHeight: 1.1, margin: "0 0 1.25rem" }}>
                  {post.title}
                </h1>
                <p style={{ fontSize: "1.08rem", color: "#94a3b8", lineHeight: 1.72, margin: "0 0 2rem" }}>{post.excerpt}</p>

                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "1.25rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div style={{ width: "36px", height: "36px", borderRadius: "50%", overflow: "hidden", border: "2px solid rgba(255,255,255,0.2)", flexShrink: 0 }}>
                      <img src={`${import.meta.env.BASE_URL}adil-hussain.png`} alt={post.author} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 12%" }} />
                    </div>
                    <span style={{ color: "#cbd5e1", fontWeight: 600, fontSize: "0.9rem" }}>{post.author}</span>
                  </div>
                  <span style={{ display: "flex", alignItems: "center", gap: "5px", color: "#64748b", fontSize: "0.85rem" }}>
                    <Calendar size={13} /> {post.date}
                  </span>
                  <span style={{ display: "flex", alignItems: "center", gap: "5px", color: "#64748b", fontSize: "0.85rem" }}>
                    <Clock size={13} /> {post.readTime}
                  </span>
                  <button onClick={share} style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "6px", padding: "7px 16px", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "8px", color: "#94a3b8", fontSize: "0.82rem", cursor: "pointer", fontFamily: "inherit" }}>
                    <Share2 size={13} /> Share
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Article body */}
        <div className="section-padding" style={{ paddingTop: "3.5rem", paddingBottom: "4rem" }}>
          <div style={{ maxWidth: "780px", margin: "0 auto" }}>
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.15 }}
            >
              {post.content.map((block, i) => <Block key={i} block={block} />)}
            </motion.article>

            {/* Tags */}
            <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "8px", marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid var(--border)" }}>
              <Tag size={14} style={{ color: "var(--text-3)" }} />
              {post.tags.map(t => (
                <span key={t} style={{ padding: "4px 12px", background: "var(--bg-alt)", border: "1px solid var(--border)", borderRadius: "8px", fontSize: "0.78rem", color: "var(--text-2)", fontWeight: 500 }}>{t}</span>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              style={{ marginTop: "3rem", padding: "2rem", background: "linear-gradient(135deg, rgba(37,99,235,0.08), rgba(124,58,237,0.08))", border: "1px solid rgba(37,99,235,0.18)", borderRadius: "1.25rem", textAlign: "center" }}
            >
              <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--text-1)", margin: "0 0 0.6rem" }}>Ready to Build Something Together?</h3>
              <p style={{ color: "var(--text-2)", fontSize: "0.93rem", margin: "0 0 1.25rem", lineHeight: 1.65 }}>
                Let's turn your idea into a production-ready product — AI, SaaS, or full-stack.
              </p>
              <button onClick={() => { nav("/"); setTimeout(() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }), 100); }} className="btn-primary">
                Start a Project <ArrowUpRight size={14} />
              </button>
            </motion.div>
          </div>
        </div>

        {/* Related posts */}
        {related.length > 0 && (
          <div className="section-padding" style={{ paddingTop: "0", paddingBottom: "5rem", background: "var(--bg-alt)" }}>
            <div className="container-wide">
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text-1)", marginBottom: "1.25rem" }}>More Articles</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.25rem" }}>
                {related.map(p => (
                  <article
                    key={p.slug}
                    onClick={() => { nav(`/blog/${p.slug}`); window.scrollTo(0, 0); }}
                    style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "1rem", padding: "1.25rem", cursor: "pointer", transition: "transform 0.2s, box-shadow 0.2s" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 32px -6px rgba(37,99,235,0.12)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.boxShadow = ""; }}
                  >
                    <span style={{ fontSize: "2rem" }}>{p.emoji}</span>
                    <span style={{ display: "inline-block", marginLeft: "10px", padding: "2px 8px", background: p.tagBg, color: p.tagColor, borderRadius: "5px", fontSize: "0.7rem", fontWeight: 700, verticalAlign: "middle" }}>{p.tag}</span>
                    <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text-1)", margin: "0.75rem 0 0.4rem", lineHeight: 1.4 }}>{p.title}</h4>
                    <div style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "0.75rem", color: "#2563EB", fontWeight: 600 }}>
                      Read <ArrowUpRight size={11} />
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
