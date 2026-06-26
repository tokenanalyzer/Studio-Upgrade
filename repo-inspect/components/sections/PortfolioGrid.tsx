"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

const categories = ["All", "SaaS", "E-Commerce", "Web App", "Brand Identity"];

const projects = [
  {
    title: "Finova Dashboard", category: "SaaS",
    description: "A comprehensive financial analytics dashboard with real-time data visualization and AI-powered insights.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["Next.js", "TypeScript", "Supabase", "D3.js"],
    liveUrl: "#", githubUrl: "#",
  },
  {
    title: "Aurora E-Commerce", category: "E-Commerce",
    description: "A headless e-commerce platform with advanced filtering, real-time inventory, and seamless checkout.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    tags: ["Next.js", "Stripe", "PostgreSQL", "Redis"],
    liveUrl: "#", githubUrl: "#",
  },
  {
    title: "Nexus Social", category: "Web App",
    description: "A modern social networking platform with real-time messaging and community management tools.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
    tags: ["React", "WebSocket", "Node.js", "MongoDB"],
    liveUrl: "#",
  },
  {
    title: "Vertex Architecture", category: "Brand Identity",
    description: "Complete brand identity system for an architecture firm including logo, visual guidelines, and digital presence.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    tags: ["Branding", "Figma", "Web Design", "Motion"],
    liveUrl: "#",
  },
  {
    title: "HealthTrack Pro", category: "SaaS",
    description: "Healthcare management platform with patient portals, appointment scheduling, and telemedicine integration.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    tags: ["Next.js", "HIPAA", "Twilio", "PostgreSQL"],
    liveUrl: "#",
  },
  {
    title: "CloudSync", category: "Web App",
    description: "Enterprise file synchronization and collaboration platform with end-to-end encryption.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
    tags: ["React", "WebRTC", "AWS", "Encryption"],
    liveUrl: "#", githubUrl: "#",
  },
];

export default function PortfolioGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

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
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-accent-200 transition-all duration-300 hover:shadow-xl hover:shadow-accent-500/5"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 flex gap-2">
                      {project.liveUrl && (
                        <a href={project.liveUrl} className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-lg text-sm font-medium text-slate-900">
                          <ExternalLink className="w-3.5 h-3.5" />Live
                        </a>
                      )}
                      {project.githubUrl && (
                        <a href={project.githubUrl} className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-lg text-sm font-medium text-slate-900">
                          <Github className="w-3.5 h-3.5" />Code
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-semibold text-accent-600 uppercase tracking-wider">{project.category}</span>
                    <h3 className="text-lg font-semibold text-slate-900 mt-2 mb-2 group-hover:text-accent-600 transition-colors">{project.title}</h3>
                    <p className="text-sm text-slate-500 mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2 py-0.5 bg-slate-50 text-xs text-slate-500 rounded border border-slate-100">{tag}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
