import { Code2, Cloud, Smartphone, BarChart3, Search, Cpu, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Custom web applications built with modern technologies — React, Next.js, Node.js — optimized for performance and scale.",
    tags: ["React", "TypeScript", "Node.js"],
    color: "#2563EB",
    bg: "#EFF6FF",
  },
  {
    icon: Cloud,
    title: "SaaS Platforms",
    description: "End-to-end SaaS product development with multi-tenancy, billing, analytics and everything you need to launch.",
    tags: ["Multi-tenant", "Stripe", "Analytics"],
    color: "#0EA5E9",
    bg: "#F0F9FF",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Cross-platform mobile applications for iOS and Android with React Native, delivering native experience at scale.",
    tags: ["React Native", "Expo", "Push Notifications"],
    color: "#8B5CF6",
    bg: "#F5F3FF",
  },
  {
    icon: BarChart3,
    title: "Data & Analytics",
    description: "Powerful dashboards, data visualization, and analytics solutions that turn raw data into actionable business insights.",
    tags: ["Dashboards", "Real-time", "BI Tools"],
    color: "#059669",
    bg: "#ECFDF5",
  },
  {
    icon: Search,
    title: "SEO & Growth",
    description: "Comprehensive SEO strategy and implementation to drive organic growth, technical audits, and content optimization.",
    tags: ["Technical SEO", "Content", "Core Web Vitals"],
    color: "#D97706",
    bg: "#FFFBEB",
  },
  {
    icon: Cpu,
    title: "AI Integration",
    description: "Integrate LLMs, computer vision, and machine learning into your product to automate workflows and delight users.",
    tags: ["OpenAI", "LangChain", "ML Pipelines"],
    color: "#DB2777",
    bg: "#FDF2F8",
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
              Services Built for
              <br />
              <span className="text-gradient">Modern Businesses</span>
            </h2>
            <p style={{
              fontSize: "1.05rem", color: "#64748B",
              maxWidth: "32rem", margin: "0 auto", lineHeight: 1.75,
            }}>
              From concept to launch, we deliver comprehensive digital solutions
              that help you stand out and grow.
            </p>
          </div>

          {/* Grid */}
          <div style={{
            display: "grid", gap: "1.5rem",
            gridTemplateColumns: "1fr",
          }}
            className="services-grid"
          >
            <style>{`
              @media (min-width: 640px)  { .services-grid { grid-template-columns: repeat(2, 1fr) !important; } }
              @media (min-width: 1024px) { .services-grid { grid-template-columns: repeat(3, 1fr) !important; } }
              .service-card:hover .service-arrow { transform: translate(3px, -3px); }
              .service-card:hover { transform: translateY(-6px); box-shadow: 0 20px 40px rgba(37,99,235,0.12); }
              .service-card { transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1); }
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
                    padding: "2rem",
                    border: "1px solid #E2E8F0",
                    cursor: "pointer",
                  }}
                >
                  <div style={{
                    width: "52px", height: "52px",
                    background: service.bg, borderRadius: "14px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: "1.25rem",
                    boxShadow: `0 4px 12px ${service.color}20`,
                  }}>
                    <Icon size={24} style={{ color: service.color }} />
                  </div>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                    <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0f172a" }}>
                      {service.title}
                    </h3>
                    <ArrowRight
                      size={18}
                      className="service-arrow"
                      style={{ color: service.color, transition: "transform 0.25s ease", flexShrink: 0, marginLeft: "8px", marginTop: "2px" }}
                    />
                  </div>
                  <p style={{ fontSize: "0.9rem", color: "#64748B", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                    {service.description}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {service.tags.map((tag) => (
                      <span key={tag} style={{
                        padding: "4px 10px", borderRadius: "6px",
                        background: service.bg, color: service.color,
                        fontSize: "0.78rem", fontWeight: 500,
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
