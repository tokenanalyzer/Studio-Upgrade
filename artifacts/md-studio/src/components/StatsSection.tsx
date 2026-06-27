import { useRef, useState, useEffect } from "react";
import { Rocket, Users, Star, Code2 } from "lucide-react";

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

function StatCard({ stat, trigger, delay }: { stat: typeof stats[0]; trigger: boolean; delay: number }) {
  const Icon = stat.icon;
  const count = useCountUp(stat.value, trigger);
  return (
    <div style={{
      display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center",
      animation: trigger ? `countUp 0.55s ease-out ${delay}ms both` : "none",
    }}>
      <style>{`@keyframes countUp { from { opacity:0; transform:translateY(14px); } to { opacity:1; transform:translateY(0); } }`}</style>
      <div style={{ width: "52px", height: "52px", borderRadius: "14px", background: stat.bg, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "0.75rem", boxShadow: `0 4px 14px ${stat.color}20` }}>
        <Icon size={24} style={{ color: stat.color }} />
      </div>
      <div style={{ fontSize: "clamp(2rem, 2.8vw, 2.8rem)", fontWeight: 900, color: stat.color, lineHeight: 1, marginBottom: "4px", letterSpacing: "-0.04em" }}>
        {count}{stat.suffix}
      </div>
      <div style={{ fontSize: "0.82rem", color: "#64748B", fontWeight: 500 }}>{stat.label}</div>
    </div>
  );
}

export default function StatsSection() {
  const ref = useRef<HTMLElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setTriggered(true); obs.disconnect(); } },
      { threshold: 0.25 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} style={{ position: "relative", zIndex: 20, background: "white", padding: "0 0 0.5rem" }}>
      <div className="section-padding">
        <div className="container-wide">
          <div style={{
            background: "white",
            border: "1px solid #E2E8F0",
            borderRadius: "1.5rem",
            padding: "2.25rem 2rem",
            boxShadow: "0 4px 32px rgba(37,99,235,0.06)",
            transform: "translateY(-2.5rem)",
          }}>
            <style>{`
              .stats-4 { display:grid; grid-template-columns:repeat(2,1fr); gap:1.5rem; }
              @media (min-width:768px) { .stats-4 { grid-template-columns:repeat(4,1fr); gap:1rem; } }
            `}</style>
            <div className="stats-4">
              {stats.map((stat, i) => (
                <StatCard key={stat.label} stat={stat} trigger={triggered} delay={i * 90} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
