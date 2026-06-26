import { useRef, useState, useEffect } from "react";
import { Rocket, Users, Trophy, Star } from "lucide-react";

const stats = [
  { icon: Rocket, value: 127, suffix: "+", label: "Projects Delivered", color: "#2563EB", bg: "#EFF6FF" },
  { icon: Users, value: 89, suffix: "+", label: "Happy Clients", color: "#059669", bg: "#ECFDF5" },
  { icon: Trophy, value: 15, suffix: "+", label: "Awards Won", color: "#8B5CF6", bg: "#F5F3FF" },
  { icon: Star, value: 8, suffix: "+", label: "Years Experience", color: "#D97706", bg: "#FFFBEB" },
];

function useCountUp(target: number, trigger: boolean, duration = 1500) {
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
  }, [target, trigger]);
  return count;
}

function StatCard({ stat, trigger, delay }: { stat: typeof stats[0]; trigger: boolean; delay: number }) {
  const count = useCountUp(stat.value, trigger);
  const Icon = stat.icon;
  return (
    <div style={{
      textAlign: "center",
      animation: trigger ? `countUp 0.6s ease-out ${delay}ms both` : "none",
    }}>
      <style>{`@keyframes countUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }`}</style>
      <div style={{
        width: "52px", height: "52px",
        background: stat.bg, borderRadius: "14px",
        display: "flex", alignItems: "center", justifyContent: "center",
        margin: "0 auto 12px",
        boxShadow: `0 4px 12px ${stat.color}20`,
      }}>
        <Icon size={24} style={{ color: stat.color }} />
      </div>
      <div style={{
        fontSize: "2.5rem", fontWeight: 800, color: stat.color,
        lineHeight: 1, marginBottom: "6px", letterSpacing: "-0.02em",
      }}>
        {count}{stat.suffix}
      </div>
      <div style={{ fontSize: "0.875rem", color: "#64748B", fontWeight: 500 }}>
        {stat.label}
      </div>
    </div>
  );
}

export default function StatsSection() {
  const ref = useRef<HTMLElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTriggered(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      style={{
        position: "relative", zIndex: 20,
        marginTop: "-2rem", paddingBottom: "5rem",
        background: "white",
      }}
    >
      <div className="section-padding">
        <div className="container-wide">
          <div className="glass-card" style={{ padding: "2.5rem 2rem" }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "2rem",
            }}
              className="stats-grid"
            >
              <style>{`
                @media (min-width: 1024px) {
                  .stats-grid { grid-template-columns: repeat(4, 1fr) !important; }
                }
              `}</style>
              {stats.map((stat, i) => (
                <StatCard key={stat.label} stat={stat} trigger={triggered} delay={i * 100} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
