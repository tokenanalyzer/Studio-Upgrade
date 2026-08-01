import { useState, useEffect, useRef } from "react";
import { ArrowUpRight, Github } from "lucide-react";

const categories = ["All", "Web App", "AI / ML", "SaaS", "Mobile", "Tools"];

const projects = [
  {
    title: "SAH Ultimate",
    category: "SaaS",
    tag: "SaaS",
    desc: "An all-in-one productivity and project management SaaS platform with team collaboration, task tracking, time management, and analytics dashboard.",
    stack: ["React", "Node.js", "PostgreSQL", "Redis"],
    color: "#2563EB",
    bg: "linear-gradient(135deg, #EFF6FF, #DBEAFE)",
    emoji: "🚀",
  },
  {
    title: "Post Agent",
    category: "AI / ML",
    tag: "AI / ML",
    desc: "AI-powered social media automation agent that generates, schedules, and publishes posts across Twitter, LinkedIn, and Instagram using GPT-4.",
    stack: ["Python", "LangChain", "OpenAI", "FastAPI"],
    color: "#7C3AED",
    bg: "linear-gradient(135deg, #F5F3FF, #EDE9FE)",
    emoji: "🤖",
  },
  {
    title: "Prompt Pilot",
    category: "Tools",
    tag: "Tools",
    desc: "A prompt engineering workspace for developers and AI enthusiasts — organize, test, version, and share prompts with team collaboration features.",
    stack: ["Next.js", "TypeScript", "Supabase", "OpenAI"],
    color: "#059669",
    bg: "linear-gradient(135deg, #ECFDF5, #D1FAE5)",
    emoji: "✍️",
  },
  {
    title: "Nexa AI",
    category: "AI / ML",
    tag: "AI / ML",
    desc: "Intelligent customer support platform with AI-powered ticket classification, auto-response generation, sentiment analysis, and agent hand-off.",
    stack: ["React", "Python", "LangChain", "PostgreSQL"],
    color: "#D97706",
    bg: "linear-gradient(135deg, #FFFBEB, #FEF3C7)",
    emoji: "🧠",
  },
  {
    title: "Mythos",
    category: "Web App",
    tag: "Web App",
    desc: "A world-building and collaborative storytelling platform for writers — character maps, timeline editor, rich text editor, and co-authoring tools.",
    stack: ["React", "Node.js", "MongoDB", "Socket.io"],
    color: "#DC2626",
    bg: "linear-gradient(135deg, #FFF1F2, #FFE4E6)",
    emoji: "📖",
  },
  {
    title: "GhostHub",
    category: "SaaS",
    tag: "SaaS",
    desc: "Ghost blogging platform management hub — multi-site dashboard, post scheduler, analytics aggregator, and subscriber management across Ghost instances.",
    stack: ["Next.js", "Ghost API", "Vercel", "Tailwind"],
    color: "#0369A1",
    bg: "linear-gradient(135deg, #F0F9FF, #E0F2FE)",
    emoji: "👻",
  },
  {
    title: "Data AI",
    category: "AI / ML",
    tag: "AI / ML",
    desc: "Natural language data querying tool — ask questions in plain English and get SQL-backed answers, charts, and insights from your database.",
    stack: ["Python", "OpenAI", "Pandas", "FastAPI", "React"],
    color: "#6366F1",
    bg: "linear-gradient(135deg, #EEF2FF, #E0E7FF)",
    emoji: "📊",
  },
  {
    title: "GoBook",
    category: "Mobile",
    tag: "Mobile",
    desc: "Mobile-first appointment booking app for service businesses — calendar sync, payment integration, automated reminders, and business analytics.",
    stack: ["React Native", "Expo", "Node.js", "Stripe"],
    color: "#BE185D",
    bg: "linear-gradient(135deg, #FDF2F8, #FCE7F3)",
    emoji: "📅",
  },
  {
    title: "CodeBlade",
    category: "Tools",
    tag: "Tools",
    desc: "VS Code extension and web app for code review automation — AI-powered code suggestions, security scanning, and team review workflow.",
    stack: ["TypeScript", "VS Code API", "OpenAI", "Node.js"],
    color: "#475569",
    bg: "linear-gradient(135deg, #F8FAFC, #F1F5F9)",
    emoji: "⚔️",
  },
  {
    title: "CodeZen",
    category: "SaaS",
    tag: "SaaS",
    desc: "Developer productivity SaaS — habit tracking for coding goals, GitHub activity visualization, streak leaderboards, and learning path recommendations.",
    stack: ["React", "Next.js", "GitHub API", "Supabase"],
    color: "#0891B2",
    bg: "linear-gradient(135deg, #F0FDFA, #CCFBF1)",
    emoji: "🧘",
  },
  {
    title: "AdilStudio",
    category: "Web App",
    tag: "Web App",
    desc: "This very website — a premium digital agency portfolio built with React, Vite, Tailwind CSS, Framer Motion, and custom WebGL animations.",
    stack: ["React", "Vite", "Tailwind", "Framer Motion"],
    color: "#2563EB",
    bg: "linear-gradient(135deg, #EFF6FF, #DBEAFE)",
    emoji: "✨",
  },
  {
    title: "StockSense",
    category: "AI / ML",
    tag: "AI / ML",
    desc: "AI-powered stock market analysis platform with sentiment analysis, earnings call summaries, technical indicators, and portfolio risk assessment.",
    stack: ["Python", "FastAPI", "React", "TensorFlow", "Redis"],
    color: "#059669",
    bg: "linear-gradient(135deg, #ECFDF5, #D1FAE5)",
    emoji: "📈",
  },
];

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleProjects, setVisibleProjects] = useState(projects);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const filtered = activeCategory === "All" ? projects : projects.filter(p => p.tag === activeCategory);
    setVisibleProjects(filtered);
  }, [activeCategory]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.06 }
    );
    sectionRef.current?.querySelectorAll(".animate-on-scroll")?.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="portfolio" ref={sectionRef} className="section-block" style={{ background: "var(--bg-page)", position: "relative", overflow: "hidden" }}>
      <style>{`
        .portfolio-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }
        @media (min-width: 640px)  { .portfolio-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .portfolio-grid { grid-template-columns: repeat(3, 1fr); } }
        .proj-card {
          border: 1px solid #E2E8F0;
          border-radius: 1.4rem;
          overflow: hidden;
          transition: all 0.35s cubic-bezier(0.4,0,0.2,1);
          display: flex;
          flex-direction: column;
          cursor: default;
        }
        .proj-card:hover { transform: translateY(-6px); box-shadow: 0 20px 56px -8px rgba(37,99,235,0.15); border-color: #BFDBFE; }
        .proj-card-header { padding: 1.4rem 1.4rem 1rem; }
        .proj-card-body   { padding: 0 1.4rem 1.4rem; flex: 1; display: flex; flex-direction: column; gap: 0.7rem; }
        .proj-stack-pill {
          display: inline-flex;
          padding: 3px 9px;
          background: rgba(37,99,235,0.07);
          color: #2563EB;
          border-radius: 6px;
          font-size: 0.72rem;
          font-weight: 500;
        }
        .filter-btn {
          padding: 7px 16px;
          border-radius: 9px;
          font-size: 0.82rem;
          font-weight: 500;
          border: 1px solid #E2E8F0;
          background: white;
          color: #64748B;
          cursor: pointer;
          transition: all 0.2s ease;
          font-family: inherit;
        }
        .filter-btn:hover { border-color: #BFDBFE; color: #2563EB; }
        .filter-btn.active { background: #2563EB; color: white; border-color: #2563EB; }
      `}</style>

      <div style={{ position: "absolute", bottom: "-60px", left: "50%", transform: "translateX(-50%)", width:"500px", height:"200px", borderRadius:"50%", background:"radial-gradient(ellipse, rgba(37,99,235,0.06) 0%, transparent 70%)", pointerEvents:"none" }} />

      <div className="section-padding">
        <div className="container-wide">
          <div className="animate-on-scroll" style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <div className="section-label" style={{ justifyContent: "center" }}>
              <span>💼</span> Portfolio
            </div>
            <h2 style={{ fontSize: "clamp(1.9rem, 3.5vw, 3rem)", fontWeight: 800, color: "#0f172a", marginBottom: "0.85rem", letterSpacing: "-0.03em" }}>
              Products We've <span className="text-gradient">Shipped</span>
            </h2>
            <p style={{ fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)", color: "#64748B", maxWidth: "38rem", margin: "0 auto", lineHeight: 1.72 }}>
              12 real products. Real code. Real users. Each project represents a challenge solved and a client's vision brought to life.
            </p>
          </div>

          {/* Filters */}
          <div className="animate-on-scroll" style={{ display: "flex", flexWrap: "wrap", gap: "8px", justifyContent: "center", marginBottom: "2.5rem" }}>
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="portfolio-grid">
            {visibleProjects.map((proj, i) => (
              <div key={proj.title} className="proj-card animate-on-scroll" style={{ transitionDelay: `${(i % 3) * 65}ms` }}>
                {/* Card header with gradient bg */}
                <div className="proj-card-header" style={{ background: proj.bg }}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                    <div style={{ fontSize: "2rem" }}>{proj.emoji}</div>
                    <span style={{
                      padding: "3px 10px", borderRadius: "6px",
                      background: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.9)",
                      fontSize: "0.72rem", fontWeight: 600, color: proj.color,
                      backdropFilter: "blur(8px)",
                    }}>
                      {proj.tag}
                    </span>
                  </div>
                  <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#0f172a", margin: 0 }}>{proj.title}</h3>
                </div>

                <div className="proj-card-body">
                  <p style={{ fontSize: "0.83rem", color: "#64748B", lineHeight: 1.7, margin: 0 }}>{proj.desc}</p>

                  {/* Stack */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                    {proj.stack.map(s => (
                      <span key={s} className="proj-stack-pill">{s}</span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div style={{ display: "flex", gap: "8px", marginTop: "auto" }}>
                    <a href="https://github.com/tokenanalyzer" target="_blank" rel="noopener noreferrer"
                      style={{ display:"inline-flex", alignItems:"center", gap:"5px", fontSize:"0.78rem", fontWeight:600, color:"#64748B", textDecoration:"none" }}>
                      <Github size={14} /> Code
                    </a>
                    <span style={{ color: "#E2E8F0" }}>|</span>
                    <span style={{ display:"inline-flex", alignItems:"center", gap:"4px", fontSize:"0.78rem", fontWeight:600, color:proj.color, cursor:"pointer" }}>
                      View Details <ArrowUpRight size={13} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="animate-on-scroll" style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <a href="https://github.com/tokenanalyzer" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ display: "inline-flex" }}>
              <Github size={16} /> View All on GitHub <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
