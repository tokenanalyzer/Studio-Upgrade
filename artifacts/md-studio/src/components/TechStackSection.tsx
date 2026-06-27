import { useEffect, useRef } from "react";

const stacks = [
  {
    category: "Frontend",
    color: "#2563EB",
    bg: "#EFF6FF",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vite", "Framer Motion"],
  },
  {
    category: "Backend",
    color: "#7C3AED",
    bg: "#F5F3FF",
    items: ["Node.js", "Express", "Python", "FastAPI", "Django", "REST / GraphQL"],
  },
  {
    category: "Database",
    color: "#059669",
    bg: "#ECFDF5",
    items: ["PostgreSQL", "MongoDB", "Redis", "Supabase", "Firebase", "Drizzle ORM"],
  },
  {
    category: "AI & ML",
    color: "#D97706",
    bg: "#FFFBEB",
    items: ["OpenAI GPT-4", "LangChain", "Hugging Face", "TensorFlow", "LlamaIndex", "Vector DBs"],
  },
  {
    category: "Mobile",
    color: "#0369A1",
    bg: "#F0F9FF",
    items: ["React Native", "Expo", "Flutter", "iOS", "Android", "Push Notifications"],
  },
  {
    category: "DevOps & Cloud",
    color: "#DC2626",
    bg: "#FFF1F2",
    items: ["AWS", "Vercel", "Docker", "GitHub Actions", "Nginx", "CI/CD Pipelines"],
  },
];

export default function TechStackSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    sectionRef.current?.querySelectorAll(".animate-on-scroll")?.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="tech-stack" ref={sectionRef} className="section-block" style={{ position: "relative", background: "#0f172a", overflow: "hidden" }}>
      <style>{`
        .tech-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }
        @media (min-width: 640px)  { .tech-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .tech-grid { grid-template-columns: repeat(3, 1fr); } }
        .tech-card {
          border-radius: 1.25rem;
          padding: 1.75rem;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          transition: all 0.35s cubic-bezier(0.4,0,0.2,1);
        }
        .tech-card:hover {
          background: rgba(255,255,255,0.08);
          border-color: rgba(255,255,255,0.15);
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.3);
        }
        .tech-pill {
          display: inline-flex;
          align-items: center;
          padding: 4px 11px;
          border-radius: 8px;
          font-size: 0.78rem;
          font-weight: 500;
          background: rgba(255,255,255,0.07);
          color: rgba(255,255,255,0.8);
          border: 1px solid rgba(255,255,255,0.1);
          transition: all 0.2s ease;
          cursor: default;
        }
        .tech-pill:hover {
          background: rgba(255,255,255,0.12);
          color: white;
        }
      `}</style>

      {/* BG decoration */}
      <div style={{ position: "absolute", top: "-100px", left: "-100px", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-80px", right: "-80px", width: "350px", height: "350px", borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div className="section-padding">
        <div className="container-wide">
          <div className="animate-on-scroll" style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "6px",
              padding: "5px 14px", borderRadius: "999px",
              background: "rgba(37,99,235,0.2)", border: "1px solid rgba(37,99,235,0.4)",
              fontSize: "0.78rem", fontWeight: 600, color: "#60A5FA",
              marginBottom: "1rem",
            }}>
              <span>🛠️</span> Tech Stack
            </div>
            <h2 style={{ fontSize: "clamp(1.9rem, 3.5vw, 3rem)", fontWeight: 800, color: "white", marginBottom: "0.85rem", letterSpacing: "-0.03em" }}>
              Modern Tools for <span className="text-gradient">Modern Products</span>
            </h2>
            <p style={{ fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)", color: "rgba(255,255,255,0.6)", maxWidth: "40rem", margin: "0 auto", lineHeight: 1.72 }}>
              We choose the best technology for each project — battle-tested, scalable, and maintainable stacks that real companies use in production.
            </p>
          </div>

          <div className="tech-grid">
            {stacks.map((stack, i) => (
              <div key={stack.category} className="tech-card animate-on-scroll" style={{ transitionDelay: `${i * 60}ms` }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1.1rem" }}>
                  <div style={{
                    width: "36px", height: "36px", borderRadius: "10px",
                    background: stack.bg, display: "flex", alignItems: "center", justifyContent: "center",
                    boxShadow: `0 4px 12px ${stack.color}30`,
                  }}>
                    <div style={{ width: "12px", height: "12px", borderRadius: "3px", background: stack.color }} />
                  </div>
                  <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "rgba(255,255,255,0.95)" }}>
                    {stack.category}
                  </h3>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {stack.items.map(item => (
                    <span key={item} className="tech-pill">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
