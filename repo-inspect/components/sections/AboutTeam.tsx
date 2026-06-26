"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, Twitter, Linkedin } from "lucide-react";

const team = [
  {
    name: "Adil Hussain", role: "Founder & Lead Developer",
    bio: "Full-stack developer with 8+ years of experience building scalable web applications.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    name: "Sarah Chen", role: "Lead Designer",
    bio: "Award-winning UI/UX designer passionate about creating intuitive digital experiences.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
  {
    name: "Marcus Johnson", role: "SaaS Engineer",
    bio: "Specialized in building multi-tenant SaaS platforms with modern architectures.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  },
];

export default function AboutTeam() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-slate-50/50">
      <div className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="inline-block text-sm font-semibold text-accent-600 uppercase tracking-widest mb-4">
              Our Team
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Meet the <span className="text-gradient">Minds</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="text-center p-6 glass-card card-glow-hover"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-5 ring-4 ring-accent-50">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">{member.name}</h3>
                <p className="text-sm text-accent-600 mb-3">{member.role}</p>
                <p className="text-sm text-slate-500 mb-4">{member.bio}</p>
                <div className="flex justify-center gap-3">
                  <a href="#" className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-accent-50 hover:text-accent-600 transition-colors">
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-accent-50 hover:text-accent-600 transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-accent-50 hover:text-accent-600 transition-colors">
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
