"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Rocket, Users, Trophy, Star } from "lucide-react";

const stats = [
  { icon: Rocket, value: "127+", label: "Projects Delivered", color: "text-accent-600" },
  { icon: Users, value: "89+", label: "Happy Clients", color: "text-emerald-600" },
  { icon: Trophy, value: "15+", label: "Awards Won", color: "text-violet-600" },
  { icon: Star, value: "8+", label: "Years Experience", color: "text-amber-600" },
];

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative -mt-8 z-20 pb-20 lg:pb-32 bg-white">
      <div className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="glass-card p-6 lg:p-8"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div className={`text-3xl lg:text-4xl font-bold ${stat.color} mb-1`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
