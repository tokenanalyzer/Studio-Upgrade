import { useRef, useState, useEffect } from "react";
import { Rocket, Users, Trophy, Star } from "lucide-react";

const stats = [
  { icon: Rocket, value: 127, suffix: "+", label: "Projects Delivered", color: "#2563EB", bg: "#EFF6FF" },
  { icon: Users,  value: 89,  suffix: "+", label: "Happy Clients",      color: "#059669", bg: "#ECFDF5" },
  { icon: Trophy, value: 15,  suffix: "+", label: "Awards Won",         color: "#8B5CF6", bg: "#F5F3FF" },
  { icon: Star,   value: 8,   suffix: "+", label: "Years Experience",   color: "#D97706", bg: "#FFFBEB" },
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
  }, [target, trigger]);
  return count;
}

function StatCard({ stat, trigger, delay }: { stat: typeof stats[0]; trigger: boolean; delay: number }) {
  const count = useCountUp(stat.value, trigger);
  const Icon = stat.icon;
  return (
    <div style={{
      textAlign: "center",
      animation: trigger ? `countUp 0.55s ease-out ${delay}ms both` : "none",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}>
      <style>{`@keyframes countUp { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }`}</style>
      <div style={{
        width: "48px", height: "48px",
        background: stat.bg, borderRadius: "12px",
        display: "flex", alignItems: "center", justifyContent: "center",
        marginBottom: "10px",
        boxShadow: `0 4px 10px ${stat.color}18`,
      }}>
        <Icon size={22} style={{ color: stat.color }} />
      </div>
      <div style={{
        fontSize: "clamp(2rem, 2.5vw, 2.8rem)",
        fontWeight: 800, color: stat.color,
        lineHeight: 1, marginBottom: "5px", letterSpacing: "-0.03em",
      }}>
        {count}{stat.suffix}
      </div>
      <div style={{ fontSize: "0.85rem", color: "#64748B", fontWeight: 500 }}>
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
      { threshold: 0.25 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      style={{
        position: "relative", zIndex: 20,
        marginTop: "-1.5rem",
        paddingBottom: "2.5rem",
        background: "white",
      }}
    >
      <div className="section-padding">
        <div className="container-wide">
          <div className="glass-card" style={{ padding: "2rem 1.5rem" }}>
            <div className="stats-grid">
              <style>{`
                .stats-grid {
                  display: grid;
                  grid-template-columns: repeat(2, 1fr);
                  gap: 1.5rem;
                }
                @media (min-width: 768px) {
                  .stats-grid { grid-template-columns: repeat(4, 1fr) !important; gap: 1rem !important; }
                }
              `}</style>
              {stats.map((stat, i) => (
                <StatCard key={stat.label} stat={stat} trigger={triggered} delay={i * 80} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
