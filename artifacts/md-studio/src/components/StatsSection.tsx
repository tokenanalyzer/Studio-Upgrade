import { useRef, useState, useEffect } from "react";
import { Rocket, Users, Star, Code2 } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { icon: Rocket, value: 127, suffix: "+", label: "Projects Delivered", color: "#2563EB", bg: "#EFF6FF" },
  { icon: Users,  value: 89,  suffix: "+", label: "Happy Clients",      color: "#059669", bg: "#ECFDF5" },
  { icon: Star,   value: 5,   suffix: ".0",label: "Average Rating",     color: "#D97706", bg: "#FFFBEB" },
  { icon: Code2,  value: 8,   suffix: "+", label: "Years Experience",   color: "#7C3AED", bg: "#F5F3FF" },
];

function useCountUp(target: number, trigger: boolean, duration = 1400) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [target, trigger, duration]);
  return count;
}

function StatCard({ stat, trigger, index }: { stat: typeof stats[0]; trigger: boolean; index: number }) {
  const Icon = stat.icon;
  const count = useCountUp(stat.value, trigger);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={trigger ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}
    >
      <div style={{ width: "52px", height: "52px", borderRadius: "14px", background: stat.bg, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "0.75rem", boxShadow: `0 4px 14px ${stat.color}20` }}>
        <Icon size={24} style={{ color: stat.color }} />
      </div>
      <div style={{ fontSize: "clamp(2rem, 2.8vw, 2.8rem)", fontWeight: 900, color: stat.color, lineHeight: 1, marginBottom: "4px", letterSpacing: "-0.04em" }}>
        {count}{stat.suffix}
      </div>
      <div style={{ fontSize: "0.88rem", fontWeight: 500, color: "var(--text-2)" }}>
        {stat.label}
      </div>
    </motion.div>
  );
}

export default function StatsSection() {
  const ref = useRef<HTMLElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setTriggered(true); }),
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} style={{ position: "relative", zIndex: 20, background: "var(--bg-page)", padding: "0 0 0.5rem" }}>
      <style>{`
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          padding: 3rem 0 3.5rem;
        }
        @media (min-width: 768px) {
          .stats-grid { grid-template-columns: repeat(4, 1fr); gap: 2rem; }
        }
      `}</style>

      {/* Top divider with gradient glow */}
      <div style={{ height: "1px", background: "linear-gradient(90deg, transparent 0%, #BFDBFE 30%, #DDD6FE 60%, transparent 100%)", margin: "0 auto", maxWidth: "60%", opacity: 0.7 }} />

      <div className="section-padding">
        <div className="container-wide">
          <div className="stats-grid">
            {stats.map((s, i) => <StatCard key={s.label} stat={s} trigger={triggered} index={i} />)}
          </div>
        </div>
      </div>

      <div style={{ height: "1px", background: "linear-gradient(90deg, transparent 0%, #E2E8F0 30%, #E2E8F0 60%, transparent 100%)", margin: "0 auto", maxWidth: "80%", opacity: 0.6 }} />
    </section>
  );
}
