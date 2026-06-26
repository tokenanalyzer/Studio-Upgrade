"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const projects = [
  { title: "Finova Dashboard", category: "SaaS Platform", description: "Financial analytics dashboard with real-time data visualization.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop", year: "2026", client: "Finova Inc." },
  { title: "Aurora E-Commerce", category: "E-Commerce", description: "Headless e-commerce with advanced filtering and checkout.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop", year: "2025", client: "Aurora Retail" },
  { title: "Nexus Social", category: "Social Platform", description: "Modern social networking with real-time messaging.", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop", year: "2025", client: "Nexus Labs" },
  { title: "Vertex Architecture", category: "Brand Identity", description: "Complete brand identity for architecture firm.", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop", year: "2024", client: "Vertex Design" },
  { title: "HealthTrack Pro", category: "Healthcare SaaS", description: "Healthcare management with patient portals.", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop", year: "2024", client: "MedTech Solutions" },
  { title: "CloudSync", category: "Enterprise", description: "File sync and collaboration platform.", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop", year: "2024", client: "CloudSync Corp" },
  { title: "EduLearn Platform", category: "EdTech", description: "Online learning platform with interactive courses.", image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop", year: "2023", client: "EduLearn" },
  { title: "Foodie App", category: "Mobile App", description: "Food delivery app with real-time tracking.", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=600&fit=crop", year: "2023", client: "Foodie Inc." },
];

export default function ProjectsGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-slate-50/50">
      <div className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col sm:flex-row bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-accent-200 transition-all duration-300 hover:shadow-xl hover:shadow-accent-500/5"
              >
                <div className="relative w-full sm:w-48 h-48 sm:h-auto shrink-0 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 200px"
                  />
                </div>
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-semibold text-accent-600 uppercase tracking-wider">{project.category}</span>
                      <span className="text-xs text-slate-400">{project.year}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-accent-600 transition-colors">{project.title}</h3>
                    <p className="text-sm text-slate-500 mb-3">{project.description}</p>
                    <p className="text-xs text-slate-400">Client: {project.client}</p>
                  </div>
                  <Link href="/portfolio" className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-600 mt-4 hover:gap-2.5 transition-all duration-300">
                    View Details<ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
