import { Code2, Cloud, Smartphone, BarChart3, Cpu, Globe, Bot, Zap, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "High-performance websites and landing pages with modern design, optimized for speed, SEO, and conversion.",
    tags: ["React", "Next.js", "Tailwind"],
    color: "#2563EB",
    bg: "#EFF6FF",
  },
  {
    icon: Code2,
    title: "Web Applications",
    description: "Full-stack web apps with real-time features, authentication, dashboards, and scalable architecture.",
    tags: ["TypeScript", "Node.js", "PostgreSQL"],
    color: "#0EA5E9",
    bg: "#F0F9FF",
  },
  {
    icon: Smartphone,
    title: "Android Applications",
    description: "Native-feel Android apps built with React Native — fast, polished, and production-ready.",
    tags: ["React Native", "Expo", "Firebase"],
    color: "#8B5CF6",
    bg: "#F5F3FF",
  },
  {
    icon: BarChart3,
    title: "Custom CRM & Dashboards",
    description: "Purpose-built CRM systems and business dashboards that give your team the data they need, when they need it.",
    tags: ["Dashboards", "CRM", "Real-time"],
    color: "#059669",
    bg: "#ECFDF5",
  },
  {
    icon: Bot,
    title: "AI Agents & Automation",
    description: "Intelligent AI agents and automation systems that eliminate repetitive workflows and scale operations.",
    tags: ["OpenAI", "LangChain", "LLM"],
    color: "#DB2777",
    bg: "#FDF2F8",
  },
  {
    icon: Cloud,
    title: "SaaS Platforms",
    description: "End-to-end SaaS product development with multi-tenancy, billing, analytics, and everything to launch.",
    tags: ["Multi-tenant", "Stripe", "Auth"],
    color: "#D97706",
    bg: "#FFFBEB",
  },
  {
    icon: Zap,
    title: "API Integrations",
    description: "Connect your tools and services with custom API integrations, webhooks, and automated data pipelines.",
    tags: ["REST", "GraphQL", "Webhooks"],
    color: "#7C3AED",
    bg: "#F5F3FF",
  },
  {
    icon: Cpu,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure, DevOps pipelines, and deployment automation on AWS, GCP, or Vercel.",
    tags: ["AWS", "Docker", "CI/CD"],
    color: "#0f172a",
    bg: "#F1F5F9",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" style={{ padding: "6rem 0", background: "#F8FAFC" }}>
      <div className="section-padding">
        <div className="container-wide">
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              padding: "6px 16px", borderRadius: "999px",
              background: "#EFF6FF", border: "1px solid #BFDBFE",
              marginBottom: "1rem",
            }}>
              <span style={{ fontSize: "0.82rem", fontWeight: 600, color: "#2563EB", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                What We Do
              </span>
            </div>
            <h2 style={{
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              fontWeight: 800, color: "#0f172a",
              letterSpacing: "-0.02em", marginBottom: "1rem",
            }}>
              Full-Spectrum Digital
              <br />
              <span className="text-gradient">Development Services</span>
            </h2>
            <p style={{
              fontSize: "1.05rem", color: "#64748B",
              maxWidth: "34rem", margin: "0 auto", lineHeight: 1.75,
            }}>
              From concept to launch, we deliver comprehensive digital solutions
              built for performance, scale, and growth.
            </p>
          </div>

          {/* Grid */}
          <div style={{ display: "grid", gap: "1.25rem" }} className="services-grid">
            <style>{`
              @media (min-width: 640px)  { .services-grid { grid-template-columns: repeat(2, 1fr) !important; } }
              @media (min-width: 1024px) { .services-grid { grid-template-columns: repeat(4, 1fr) !important; } }
              .service-card:hover .service-arrow { transform: translate(3px, -3px); }
              .service-card:hover { transform: translateY(-6px); box-shadow: 0 20px 40px rgba(37,99,235,0.1); }
              .service-card { transition: all 0.35s cubic-bezier(0.34,1.56,0.64,1); }
            `}</style>
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="service-card"
                  style={{
                    background: "white",
                    borderRadius: "1.25rem",
                    padding: "1.75rem",
                    border: "1px solid #E2E8F0",
                    cursor: "pointer",
                  }}
                >
                  <div style={{
                    width: "48px", height: "48px",
                    background: service.bg, borderRadius: "13px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: "1rem",
                    boxShadow: `0 4px 10px ${service.color}18`,
                  }}>
                    <Icon size={22} style={{ color: service.color }} />
                  </div>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "0.6rem" }}>
                    <h3 style={{ fontSize: "0.975rem", fontWeight: 700, color: "#0f172a", lineHeight: 1.3 }}>
                      {service.title}
                    </h3>
                    <ArrowRight
                      size={16}
                      className="service-arrow"
                      style={{ color: service.color, transition: "transform 0.25s ease", flexShrink: 0, marginLeft: "6px", marginTop: "2px" }}
                    />
                  </div>
                  <p style={{ fontSize: "0.83rem", color: "#64748B", lineHeight: 1.65, marginBottom: "1rem" }}>
                    {service.description}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                    {service.tags.map((tag) => (
                      <span key={tag} style={{
                        padding: "3px 8px", borderRadius: "6px",
                        background: service.bg, color: service.color,
                        fontSize: "0.73rem", fontWeight: 500,
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
