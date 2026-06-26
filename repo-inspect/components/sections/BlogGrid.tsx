"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import Link from "next/link";
import { createBrowserClient } from "@/lib/supabase/client";

const categories = ["All", "Development", "Design", "SaaS", "Performance", "Career"];

const fallbackPosts = [
  { title: "Building Performant Next.js 15 Applications", excerpt: "A comprehensive guide to optimizing Next.js 15 apps with server components, streaming, and edge functions.", coverImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=500&fit=crop", category: "Development", date: "2026-06-15", readingTime: 8, slug: "building-performant-nextjs-15" },
  { title: "The Art of Micro-Interactions in UI Design", excerpt: "How subtle animations and feedback loops can dramatically improve user experience and engagement.", coverImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop", category: "Design", date: "2026-06-10", readingTime: 6, slug: "micro-interactions-ui-design" },
  { title: "SaaS Architecture Patterns That Scale", excerpt: "Exploring multi-tenancy, data isolation, and horizontal scaling strategies for modern SaaS products.", coverImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop", category: "SaaS", date: "2026-06-05", readingTime: 12, slug: "saas-architecture-patterns" },
  { title: "Achieving 100/100 Lighthouse Scores", excerpt: "Practical techniques for optimizing Core Web Vitals and achieving perfect Lighthouse performance scores.", coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop", category: "Performance", date: "2026-05-28", readingTime: 10, slug: "achieving-perfect-lighthouse" },
  { title: "From Freelancer to Studio Owner", excerpt: "Lessons learned from scaling a one-person operation into an award-winning digital studio.", coverImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop", category: "Career", date: "2026-05-20", readingTime: 7, slug: "freelancer-to-studio-owner" },
  { title: "TypeScript Best Practices for Large Codebases", excerpt: "Advanced TypeScript patterns, strict configuration, and tooling for maintaining scalable applications.", coverImage: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=500&fit=crop", category: "Development", date: "2026-05-15", readingTime: 9, slug: "typescript-best-practices" },
];

export default function BlogGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");
  const [posts, setPosts] = useState(fallbackPosts);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const supabase = createBrowserClient();
        const { data } = await supabase
          .from("blog_posts")
          .select("*")
          .eq("published", true)
          .order("created_at", { ascending: false });
        if (data && data.length > 0) setPosts(data);
      } catch {
        // Keep fallback
      }
    };
    fetchPosts();
  }, []);

  const filteredPosts = activeCategory === "All" ? posts : posts.filter((p) => p.category === activeCategory);

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-slate-50/50">
      <div className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-accent-600 text-white"
                    : "bg-white text-slate-500 hover:bg-slate-50 border border-slate-200"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            >
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-accent-200 transition-all duration-300 hover:shadow-xl hover:shadow-accent-500/5"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-semibold text-accent-600 uppercase tracking-wider">{post.category}</span>
                      <span className="text-xs text-slate-400 flex items-center gap-1">
                        <Clock className="w-3 h-3" />{post.readingTime} min read
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-accent-600 transition-colors line-clamp-2">{post.title}</h3>
                    <p className="text-sm text-slate-500 mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-400 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                      </span>
                      <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-1 text-sm font-medium text-accent-600 hover:gap-2 transition-all duration-300">
                        Read<ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
