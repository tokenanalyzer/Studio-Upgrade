"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { createBrowserClient } from "@/lib/supabase/client";

interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  thumbnail: string;
  category: string;
  tags: string[];
  live_url?: string;
  github_url?: string;
}

const fallbackProjects: Project[] = [
  {
    id: "1", title: "Finova Dashboard", slug: "finova-dashboard",
    description: "A comprehensive financial analytics dashboard with real-time data visualization.",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    category: "SaaS", tags: ["Next.js", "TypeScript", "Supabase"],
  },
  {
    id: "2", title: "Aurora E-Commerce", slug: "aurora-ecommerce",
    description: "A headless e-commerce platform with advanced filtering and seamless checkout.",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    category: "E-Commerce", tags: ["Next.js", "Stripe", "PostgreSQL"],
  },
  {
    id: "3", title: "Nexus Social", slug: "nexus-social",
    description: "A modern social networking platform with real-time messaging.",
    thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
    category: "Web App", tags: ["React", "WebSocket", "Node.js"],
  },
  {
    id: "4", title: "Vertex Architecture", slug: "vertex-architecture",
    description: "Complete brand identity system for an architecture firm.",
    thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    category: "Brand Identity", tags: ["Branding", "Figma", "Web Design"],
  },
];

export default function PortfolioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const supabase = createBrowserClient();
        const { data } = await supabase
          .from("projects")
          .select("id, title, slug, description, thumbnail, category, tags, live_url, github_url")
          .eq("published", true)
          .eq("featured", true)
          .order("created_at", { ascending: false })
          .limit(4);

        setProjects(data || []);
      } catch {
        // Fallback
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const displayProjects = projects.length > 0 ? projects : fallbackProjects;

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-slate-50/50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-50/30 rounded-full blur-3xl pointer-events-none" />

      <div className="section-padding relative z-10">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16"
          >
            <div className="max-w-xl">
              <span className="inline-block text-sm font-semibold text-accent-600 uppercase tracking-widest mb-4">
                Selected Work
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                Featured{" "}
                <span className="text-gradient">Projects</span>
              </h2>
              <p className="text-lg text-slate-500">
                A curated selection of our most impactful work across
                industries and technologies.
              </p>
            </div>
            <Link href="/portfolio" className="btn-secondary self-start lg:self-auto shrink-0">
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {displayProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <Link href={`/portfolio/${project.slug}`} className="group block">
                  <div className="relative overflow-hidden rounded-2xl glass-card mb-5">
                    <div className="aspect-[4/3] relative">
                      <Image
                        src={project.thumbnail}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 flex gap-2">
                        {project.live_url && (
                          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                            <ExternalLink className="w-4 h-4 text-slate-900" />
                          </div>
                        )}
                        {project.github_url && (
                          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                            <Github className="w-4 h-4 text-slate-900" />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-semibold text-accent-600 uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-accent-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-500 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-slate-50 text-xs font-medium text-slate-500 rounded-md border border-slate-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
