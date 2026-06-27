import { useEffect, useRef } from "react";
import { Search, MapPin, Paintbrush, Code2, Rocket, HeartHandshake } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Search,
    color: "#2563EB",
    bg: "linear-gradient(135deg, #EFF6FF, #DBEAFE)",
    title: "Discovery",
    desc: "We deep-dive into your business goals, target audience, technical requirements, and competitive landscape to ensure we build the right product.",
    deliverables: ["Requirements document", "User personas", "Technical feasibility"],
  },
  {
    num: "02",
    icon: MapPin,
    color: "#7C3AED",
    bg: "linear-gradient(135deg, #F5F3FF, #EDE9FE)",
    title: "Planning",
    desc: "Architecture design, technology stack selection, sprint planning, and a realistic timeline with milestones and deliverables.",
    deliverables: ["System architecture", "Project roadmap", "Tech stack decision"],
  },
  {
    num: "03",
    icon: Paintbrush,
    color: "#0369A1",
    bg: "linear-gradient(135deg, #F0F9FF, #E0F2FE)",
    title: "Design",
    desc: "High-fidelity UI/UX designs, component library, responsive layouts, and interactive prototypes — approved before a line of code is written.",
    deliverables: ["UI/UX wireframes", "Design system", "Prototype"],
  },
  {
    num: "04",
    icon: Code2,
    color: "#059669",
    bg: "linear-gradient(135deg, #ECFDF5, #D1FAE5)",
    title: "Development",
    desc: "Clean, tested, TypeScript-first code. Weekly demos, continuous integration, and transparent progress updates via our project tracker.",
    deliverables: ["Source code", "Weekly demos", "Unit tests"],
  },
  {
    num: "05",
    icon: Rocket,
    color: "#D97706",
    bg: "linear-gradient(135deg, #FFFBEB, #FEF3C7)",
    title: "Deployment",
    desc: "Production launch with CI/CD pipelines, monitoring, performance optimization, SSL, domain setup, and post-launch smoke testing.",
    deliverables: ["Live deployment", "CI/CD pipeline", "Performance audit"],
  },
  {
    num: "06",
    icon: HeartHandshake,
    color: "#DC2626",
    bg: "linear-gradient(135deg, #FFF1F2, #FFE4E6)",
    title: "Support",
    desc: "30-day included post-launch support. Bug fixes, monitoring, user feedback iteration, and optional monthly retainer for ongoing development.",
    deliverables: ["Bug fixes", "Documentation", "Monthly retainer option"],
  },
];

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    const cards = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    cards?.forEach(c => obs.observe(c));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="process" ref={sectionRef} className="section-block bg-mesh" style={{ position: "relative", overflow: "hidden" }}>
      <style>{`
        .process-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }
        @media (min-width: 640px)  { .process-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .process-grid { grid-template-columns: repeat(3, 1fr); } }
        .process-card {
          border-radius: 1.5rem;
          padding: 2rem;
          border: 1px solid rgba(226,232,240,0.8);
          background: rgba(255,255,255,0.85);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          transition: all 0.35s cubic-bezier(0.4,0,0.2,1);
          position: relative;
          overflow: hidden;
        }
        .process-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 56px -8px rgba(37,99,235,0.14);
          border-color: rgba(191,219,254,0.9);
        }
      `}</style>

      <div className="section-padding">
        <div className="container-wide">
          <div className="animate-on-scroll" style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="section-label" style={{ justifyContent: "center" }}>
              <span>🔄</span> Our Process
            </div>
            <h2 style={{ fontSize: "clamp(1.9rem, 3.5vw, 3rem)", fontWeight: 800, color: "#0f172a", marginBottom: "0.85rem", letterSpacing: "-0.03em" }}>
              From Idea to <span className="text-gradient">Production</span>
            </h2>
            <p style={{ fontSize: "clamp(0.95rem, 1.2vw, 1.1rem)", color: "#64748B", maxWidth: "40rem", margin: "0 auto", lineHeight: 1.72 }}>
              A proven 6-phase framework that ensures on-time delivery, transparent communication, and a product you're proud of.
            </p>
          </div>

          <div className="process-grid">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="process-card animate-on-scroll"
                  style={{ transitionDelay: `${i * 70}ms` }}
                >
                  {/* Step number */}
                  <div style={{
                    position: "absolute", top: "1.25rem", right: "1.5rem",
                    fontSize: "3.5rem", fontWeight: 900, color: "rgba(37,99,235,0.06)",
                    lineHeight: 1, userSelect: "none",
                  }}>
                    {step.num}
                  </div>

                  {/* Icon */}
                  <div style={{
                    width: "52px", height: "52px", borderRadius: "14px",
                    background: step.bg, display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: "1.1rem", boxShadow: `0 4px 14px ${step.color}25`,
                  }}>
                    <Icon size={24} style={{ color: step.color }} />
                  </div>

                  <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0f172a", marginBottom: "0.6rem" }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: "0.87rem", color: "#64748B", lineHeight: 1.72, marginBottom: "1rem" }}>
                    {step.desc}
                  </p>

                  {/* Deliverables */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    {step.deliverables.map(d => (
                      <div key={d} style={{ display: "flex", alignItems: "center", gap: "7px", fontSize: "0.78rem", color: step.color, fontWeight: 500 }}>
                        <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: step.color, flexShrink: 0 }} />
                        {d}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
