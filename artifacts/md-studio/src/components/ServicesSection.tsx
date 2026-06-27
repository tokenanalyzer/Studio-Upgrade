import { useEffect, useRef } from "react";
import { ArrowUpRight, Globe, AppWindow, Smartphone, Bot, Zap, Database, LayoutDashboard, Cloud, Plug, Palette, Brain, LineChart, Settings } from "lucide-react";

const services = [
  { icon: Globe,           color: "#2563EB", bg: "#EFF6FF", title: "Website Development",    desc: "High-performance, SEO-optimized websites with stunning design, fast load times, and seamless user experience." },
  { icon: AppWindow,       color: "#7C3AED", bg: "#F5F3FF", title: "Web Applications",        desc: "Scalable, full-stack web apps with real-time features, secure auth, and production-ready deployment." },
  { icon: Smartphone,      color: "#0369A1", bg: "#F0F9FF", title: "Android Applications",    desc: "Native and React Native Android apps with intuitive UX, offline support, and Play Store publishing." },
  { icon: Smartphone,      color: "#DC2626", bg: "#FFF1F2", title: "iOS Applications",        desc: "React Native iOS apps built for performance, App Store compliance, and Apple's design standards." },
  { icon: Bot,             color: "#059669", bg: "#ECFDF5", title: "AI Agents",               desc: "Custom GPT-4 powered agents, LangChain pipelines, RAG systems, and intelligent automation bots." },
  { icon: Zap,             color: "#D97706", bg: "#FFFBEB", title: "Automation Systems",      desc: "End-to-end workflow automation using Python scripts and integration tools that save hundreds of hours." },
  { icon: Database,        color: "#64748B", bg: "#F8FAFC", title: "CRM Development",         desc: "Custom CRM systems with lead tracking, pipeline management, email automation, and reporting dashboards." },
  { icon: LayoutDashboard, color: "#0891B2", bg: "#F0FDFA", title: "Dashboard Development",   desc: "Data visualization dashboards with real-time charts, KPI tracking, role-based access, and export features." },
  { icon: Cloud,           color: "#6366F1", bg: "#EEF2FF", title: "SaaS Development",        desc: "Multi-tenant SaaS platforms with subscription billing, user management, analytics, and scalable infrastructure." },
  { icon: Plug,            color: "#EA580C", bg: "#FFF7ED", title: "API Integration",         desc: "Seamless third-party API integrations — payments, SMS, email, maps, social, IoT, and custom webhook systems." },
  { icon: Brain,           color: "#BE185D", bg: "#FDF2F8", title: "AI Integration",          desc: "Embed AI into existing products — chat, summarization, classification, image analysis, and recommendations." },
  { icon: Palette,         color: "#7C3AED", bg: "#F5F3FF", title: "UI/UX Design",            desc: "User research, wireframes, high-fidelity Figma designs, design systems, and interactive prototypes." },
  { icon: Settings,        color: "#475569", bg: "#F8FAFC", title: "Business Automation",     desc: "Automate repetitive workflows, document processing, report generation, and inter-system data sync." },
  { icon: LineChart,       color: "#0369A1", bg: "#F0F9FF", title: "Cloud Solutions",         desc: "AWS, Vercel, and Docker deployments with CI/CD, auto-scaling, monitoring, and infrastructure as code." },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.06, rootMargin: "0px 0px -40px 0px" }
    );
    sectionRef.current?.querySelectorAll(".animate-on-scroll")?.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="section-block" style={{ background: "#f8faff", position: "relative", overflow: "hidden" }}>
      <style>{`
        .svc-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }
        @media (min-width: 640px)  { .svc-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .svc-grid { grid-template-columns: repeat(3, 1fr); } }
        @media (min-width: 1280px) { .svc-grid { grid-template-columns: repeat(4, 1fr); } }
        .svc-card {
          background: white;
          border: 1px solid #E2E8F0;
          border-radius: 1.25rem;
          padding: 1.6rem;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          transition: all 0.32s cubic-bezier(0.4,0,0.2,1);
          cursor: default;
          position: relative;
          overflow: hidden;
        }
        .svc-card::after {
          content: "";
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #2563EB, #8B5CF6);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.32s ease;
        }
        .svc-card:hover { transform: translateY(-5px); box-shadow: 0 16px 48px -8px rgba(37,99,235,0.13); border-color: #BFDBFE; }
        .svc-card:hover::after { transform: scaleX(1); }
      `}</style>

      <div style={{ position: "absolute", top: "-50px", left: "-50px", width:"280px", height:"280px", borderRadius:"50%", background:"radial-gradient(circle, rgba(37,99,235,0.05) 0%, transparent 70%)", pointerEvents:"none" }} />

      <div className="section-padding">
        <div className="container-wide">
          <div className="animate-on-scroll" style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="section-label" style={{ justifyContent: "center" }}>
              <span>⚙️</span> What We Build
            </div>
            <h2 style={{ fontSize: "clamp(1.9rem, 3.5vw, 3rem)", fontWeight: 800, color: "#0f172a", marginBottom: "0.85rem", letterSpacing: "-0.03em" }}>
              Full-Spectrum <span className="text-gradient">Digital Services</span>
            </h2>
            <p style={{ fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)", color: "#64748B", maxWidth: "42rem", margin: "0 auto", lineHeight: 1.72 }}>
              From concept to production — we handle every layer of the stack so you don't have to coordinate across multiple vendors.
            </p>
          </div>

          <div className="svc-grid">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <div key={svc.title} className="svc-card animate-on-scroll" style={{ transitionDelay: `${(i % 4) * 55}ms` }}>
                  <div style={{
                    width: "46px", height: "46px", borderRadius: "12px",
                    background: svc.bg, display: "flex", alignItems: "center", justifyContent: "center",
                    boxShadow: `0 4px 12px ${svc.color}20`,
                  }}>
                    <Icon size={21} style={{ color: svc.color }} />
                  </div>
                  <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#0f172a", margin: 0 }}>{svc.title}</h3>
                  <p style={{ fontSize: "0.82rem", color: "#64748B", lineHeight: 1.68, margin: 0 }}>{svc.desc}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "0.78rem", fontWeight: 600, color: svc.color, marginTop: "auto" }}>
                    Learn more <ArrowUpRight size={13} />
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
