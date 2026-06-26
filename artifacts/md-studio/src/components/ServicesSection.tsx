import { Code2, Cloud, Smartphone, BarChart3, Cpu, Globe, Bot, Zap, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "High-performance websites and landing pages with modern design, optimized for speed, SEO, and conversion.",
    tags: ["React", "Next.js", "Tailwind"],
    color: "#2563EB", bg: "#EFF6FF",
  },
  {
    icon: Code2,
    title: "Web Applications",
    description: "Full-stack web apps with real-time features, authentication, dashboards, and scalable architecture.",
    tags: ["TypeScript", "Node.js", "PostgreSQL"],
    color: "#0EA5E9", bg: "#F0F9FF",
  },
  {
    icon: Smartphone,
    title: "Android Applications",
    description: "Native-feel Android apps built with React Native — fast, polished, and production-ready.",
    tags: ["React Native", "Expo", "Firebase"],
    color: "#8B5CF6", bg: "#F5F3FF",
  },
  {
    icon: BarChart3,
    title: "Custom CRM & Dashboards",
    description: "Purpose-built CRM systems and business dashboards that give your team the data they need.",
    tags: ["Dashboards", "CRM", "Real-time"],
    color: "#059669", bg: "#ECFDF5",
  },
  {
    icon: Bot,
    title: "AI Agents & Automation",
    description: "Intelligent AI agents and automation systems that eliminate repetitive workflows and scale operations.",
    tags: ["OpenAI", "LangChain", "LLM"],
    color: "#DB2777", bg: "#FDF2F8",
  },
  {
    icon: Cloud,
    title: "SaaS Platforms",
    description: "End-to-end SaaS product development with multi-tenancy, billing, analytics, and everything to launch.",
    tags: ["Multi-tenant", "Stripe", "Auth"],
    color: "#D97706", bg: "#FFFBEB",
  },
  {
    icon: Zap,
    title: "API Integrations",
    description: "Connect your tools and services with custom API integrations, webhooks, and automated data pipelines.",
    tags: ["REST", "GraphQL", "Webhooks"],
    color: "#7C3AED", bg: "#F5F3FF",
  },
  {
    icon: Cpu,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure, DevOps pipelines, and deployment automation on AWS, GCP, or Vercel.",
    tags: ["AWS", "Docker", "CI/CD"],
    color: "#0f172a", bg: "#F1F5F9",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="section-block" style={{ background: "#F8FAFC" }}>
      <div className="section-padding">
        <div className="container-wide">
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              padding: "5px 14px", borderRadius: "999px",
              background: "#EFF6FF", border: "1px solid #BFDBFE",
              marginBottom: "0.75rem",
            }}>
              <span style={{ fontSize: "0.8rem", fontWeight: 600, color: "#2563EB", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                What We Do
              </span>
            </div>
            <h2 style={{
              fontSize: "clamp(2rem, 3vw, 3.2rem)",
              fontWeight: 800, color: "#0f172a",
              letterSpacing: "-0.025em", marginBottom: "0.75rem", lineHeight: 1.15,
            }}>
              Full-Spectrum Digital
              <br />
              <span className="text-gradient">Development Services</span>
            </h2>
            <p style={{
              fontSize: "1rem", color: "#64748B",
              maxWidth: "34rem", margin: "0 auto", lineHeight: 1.72,
            }}>
              From concept to launch — comprehensive digital solutions built for performance, scale, and growth.
            </p>
          </div>

          {/* Grid */}
          <div className="services-grid">
            <style>{`
              .services-grid {
                display: grid;
                gap: 1rem;
                grid-template-columns: 1fr;
              }
              @media (min-width: 640px)  { .services-grid { grid-template-columns: repeat(2, 1fr); } }
              @media (min-width: 1024px) { .services-grid { grid-template-columns: repeat(4, 1fr); } }
              .service-card:hover .service-arrow { transform: translate(3px, -3px); }
              .service-card:hover {
                transform: translateY(-5px);
                box-shadow: 0 16px 32px rgba(37,99,235,0.1);
              }
              .service-card {
                transition: all 0.3s cubic-bezier(0.34,1.56,0.64,1);
                background: white;
                border-radius: 1.1rem;
                padding: 1.5rem;
                border: 1px solid #E2E8F0;
                cursor: pointer;
              }
            `}</style>
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="service-card">
                  <div style={{
                    width: "44px", height: "44px",
                    background: service.bg, borderRadius: "11px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: "0.9rem",
                    boxShadow: `0 3px 8px ${service.color}18`,
                  }}>
                    <Icon size={20} style={{ color: service.color }} />
                  </div>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                    <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#0f172a", lineHeight: 1.3, flex: 1 }}>
                      {service.title}
                    </h3>
                    <ArrowRight
                      size={15}
                      className="service-arrow"
                      style={{ color: service.color, transition: "transform 0.22s ease", flexShrink: 0, marginLeft: "6px", marginTop: "2px" }}
                    />
                  </div>
                  <p style={{ fontSize: "0.82rem", color: "#64748B", lineHeight: 1.65, marginBottom: "0.9rem" }}>
                    {service.description}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
                    {service.tags.map((tag) => (
                      <span key={tag} style={{
                        padding: "2px 8px", borderRadius: "5px",
                        background: service.bg, color: service.color,
                        fontSize: "0.72rem", fontWeight: 500,
                      }}>
                        {tag}
                      </span>
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
