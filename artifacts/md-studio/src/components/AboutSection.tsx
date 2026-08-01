import { useEffect, useRef } from "react";
import { CheckCircle2, ArrowRight, Github, Twitter, Instagram, Linkedin, Rocket, Code2, Brain, Users } from "lucide-react";

const skills = [
  "React & Next.js", "TypeScript", "Node.js / Python", "AI / LLMs",
  "React Native", "PostgreSQL & MongoDB", "AWS & Docker", "UI/UX Design",
];

const stats = [
  { icon: Rocket, val: "127+", label: "Projects Delivered", color: "#2563EB" },
  { icon: Users,  val: "89+",  label: "Happy Clients",      color: "#059669" },
  { icon: Code2,  val: "8+",   label: "Years Coding",       color: "#7C3AED" },
  { icon: Brain,  val: "30+",  label: "AI Products Built",  color: "#D97706" },
];

const socials = [
  { Icon: Github,    href: "https://github.com/tokenanalyzer", label: "GitHub"      },
  { Icon: Twitter,   href: "https://x.com/Husain3413",         label: "Twitter / X" },
  { Icon: Instagram, href: "https://instagram.com/dil_3413",   label: "Instagram"   },
  { Icon: Linkedin,  href: "https://linkedin.com",             label: "LinkedIn"    },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".animate-on-scroll")?.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section-block" style={{ background: "var(--bg-alt)", position: "relative", overflow: "hidden" }}>
      <style>{`
        .about-grid {
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }
        @media (min-width: 1024px) {
          .about-grid {
            display: grid;
            grid-template-columns: 5fr 7fr;
            gap: 4rem;
            align-items: center;
          }
        }
        .about-stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.85rem;
        }
        .about-stat-card {
          background: white;
          border: 1px solid #E2E8F0;
          border-radius: 1rem;
          padding: 1.1rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          transition: all 0.3s ease;
        }
        .about-stat-card:hover {
          border-color: #BFDBFE;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(37,99,235,0.08);
        }
      `}</style>

      <div style={{ position: "absolute", top: 0, right: 0, width: "40%", height: "100%", background: "radial-gradient(ellipse at 80% 50%, rgba(139,92,246,0.05) 0%, transparent 60%)", pointerEvents: "none" }} />

      <div className="section-padding">
        <div className="container-wide">
          <div className="about-grid">
            {/* Left — identity card */}
            <div className="animate-on-scroll" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              {/* Avatar — real photo */}
              <div style={{
                width: "140px", height: "140px", borderRadius: "50%",
                border: "4px solid white",
                boxShadow: "0 8px 32px rgba(37,99,235,0.22)",
                overflow: "hidden",
                marginBottom: "1.5rem",
                flexShrink: 0,
              }}>
                <img
                  src={`${import.meta.env.BASE_URL}adil-hussain.png`}
                  alt="Adil Hussain — Full Stack Developer & AI Engineer"
                  loading="lazy"
                  style={{
                    width: "100%", height: "100%",
                    objectFit: "cover",
                    objectPosition: "center 12%",
                    display: "block",
                  }}
                />
              </div>

              {/* Name & title */}
              <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#0f172a", margin: "0 0 4px", textAlign: "center" }}>Adil Hussain</h3>
              <p style={{ fontSize: "0.9rem", color: "#2563EB", fontWeight: 600, margin: "0 0 1rem", textAlign: "center" }}>
                Full Stack Developer &amp; AI Engineer
              </p>
              <p style={{ fontSize: "0.82rem", color: "#94A3B8", margin: "0 0 1.5rem", textAlign: "center" }}>📍 India • Available Worldwide</p>

              {/* Socials */}
              <div style={{ display: "flex", gap: "10px", marginBottom: "1.75rem" }}>
                {socials.map(({ Icon, href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    style={{
                      width: "40px", height: "40px", borderRadius: "10px",
                      background: "white", border: "1px solid #E2E8F0",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "#64748B", textDecoration: "none",
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#2563EB"; (e.currentTarget as HTMLElement).style.borderColor = "#BFDBFE"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#64748B"; (e.currentTarget as HTMLElement).style.borderColor = "#E2E8F0"; }}
                    title={label}
                  >
                    <Icon size={17} />
                  </a>
                ))}
              </div>

              {/* Mini stats */}
              <div className="about-stats-grid" style={{ width: "100%", maxWidth: "320px" }}>
                {stats.map(({ icon: Icon, val, label, color }) => (
                  <div key={label} className="about-stat-card">
                    <div style={{ width: "36px", height: "36px", borderRadius: "9px", background: `${color}12`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon size={17} style={{ color }} />
                    </div>
                    <div>
                      <div style={{ fontSize: "1.05rem", fontWeight: 800, color, lineHeight: 1 }}>{val}</div>
                      <div style={{ fontSize: "0.68rem", color: "#94A3B8", fontWeight: 500, marginTop: "2px" }}>{label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — story */}
            <div className="animate-on-scroll" style={{ transitionDelay: "120ms" }}>
              <div className="section-label">
                <span>👋</span> About Me
              </div>
              <h2 style={{ fontSize: "clamp(1.9rem, 3vw, 2.6rem)", fontWeight: 800, color: "#0f172a", marginBottom: "1rem", letterSpacing: "-0.03em", lineHeight: 1.15 }}>
                Senior Engineer.<br />
                <span className="text-gradient">Product Builder. AI Pioneer.</span>
              </h2>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem", marginBottom: "1.75rem" }}>
                <p style={{ fontSize: "0.95rem", color: "#475569", lineHeight: 1.78 }}>
                  I'm <strong style={{ color: "#0f172a" }}>Adil Hussain</strong>, founder of MD Studio and a full-stack developer with 8+ years of hands-on experience building software that millions of people use. I specialize in React ecosystems, Node.js backends, and cutting-edge AI integrations.
                </p>
                <p style={{ fontSize: "0.95rem", color: "#475569", lineHeight: 1.78 }}>
                  From Mumbai-based startups to international SaaS companies, I've helped 89+ clients turn rough ideas into polished, production-grade digital products. I believe great software is equal parts engineering discipline and product empathy.
                </p>
                <p style={{ fontSize: "0.95rem", color: "#475569", lineHeight: 1.78 }}>
                  Today, MD Studio is my boutique agency — where I combine senior-level engineering with AI-first thinking to build the next generation of digital products for founders, startups, and enterprises worldwide.
                </p>
              </div>

              {/* Skills */}
              <div style={{ marginBottom: "1.75rem" }}>
                <p style={{ fontSize: "0.82rem", fontWeight: 600, color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.75rem" }}>Core Expertise</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {skills.map(sk => (
                    <div key={sk} style={{ display: "flex", alignItems: "center", gap: "6px", padding: "6px 12px", background: "white", border: "1px solid #E2E8F0", borderRadius: "8px", fontSize: "0.82rem", fontWeight: 500, color: "#334155" }}>
                      <CheckCircle2 size={13} style={{ color: "#2563EB" }} />
                      {sk}
                    </div>
                  ))}
                </div>
              </div>

              <button onClick={() => { const el = document.querySelector("#contact"); if (el) el.scrollIntoView({ behavior: "smooth" }); }} className="btn-primary">
                Let's Work Together <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
