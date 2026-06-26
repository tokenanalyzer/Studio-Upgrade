import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod/v4";
import {
  Send, Mail, Phone, MapPin, CheckCircle, Loader2,
  MessageSquare, Github, Twitter, Instagram, Linkedin,
} from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  company: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

const services = [
  "Website Development",
  "Web Application",
  "Android Application",
  "Custom CRM",
  "Business Dashboard",
  "AI Agent / AI Automation",
  "SaaS Platform",
  "API Integration",
  "UI/UX Design",
  "Cloud Solution",
  "Automation System",
  "Other",
];

const contactMethods = [
  {
    icon: Mail, label: "Email", value: "adilhusain3176@gmail.com",
    href: "mailto:adilhusain3176@gmail.com", color: "#2563EB", bg: "#EFF6FF",
  },
  {
    icon: Phone, label: "Phone", value: "+91 9967873413",
    href: "tel:+919967873413", color: "#059669", bg: "#ECFDF5",
  },
  {
    icon: MapPin, label: "Location", value: "India 🇮🇳",
    href: undefined, color: "#8B5CF6", bg: "#F5F3FF",
  },
];

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const socialLinks = [
  { icon: Github, href: "https://github.com/tokenanalyzer", label: "GitHub", color: "#0f172a", bg: "#F1F5F9" },
  { icon: Twitter, href: "https://x.com/Husain3413", label: "Twitter/X", color: "#1DA1F2", bg: "#EFF9FF" },
  { icon: Instagram, href: "https://instagram.com/dil_3413", label: "Instagram", color: "#E1306C", bg: "#FDF2F8" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn", color: "#0A66C2", bg: "#EFF6FF" },
];

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } catch {
      // no-op
    }
    setSubmitted(true);
    reset();
  };

  const inputStyle = (hasError: boolean): React.CSSProperties => ({
    width: "100%",
    padding: "12px 16px",
    borderRadius: "10px",
    border: `1.5px solid ${hasError ? "#EF4444" : "#E2E8F0"}`,
    fontSize: "0.9rem",
    color: "#0f172a",
    outline: "none",
    transition: "border-color 0.2s ease",
    fontFamily: "inherit",
    background: "white",
  });

  return (
    <section id="contact" style={{ padding: "6rem 0", background: "white" }}>
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
                Let us Talk
              </span>
            </div>
            <h2 style={{
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              fontWeight: 800, color: "#0f172a",
              letterSpacing: "-0.02em", marginBottom: "1rem",
            }}>
              Start Your{" "}
              <span className="text-gradient">Next Project</span>
            </h2>
            <p style={{
              fontSize: "1.05rem", color: "#64748B",
              maxWidth: "32rem", margin: "0 auto", lineHeight: 1.75,
            }}>
              Have a project in mind? Let's talk. We respond within 24 hours.
            </p>
          </div>

          <div style={{ display: "grid", gap: "2.5rem" }} className="contact-grid">
            <style>{`
              @media (min-width: 1024px) {
                .contact-grid { grid-template-columns: 1fr 2fr !important; }
              }
            `}</style>

            {/* Left — Info */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {/* Contact methods */}
              {contactMethods.map((info) => {
                const Icon = info.icon;
                const content = (
                  <div className="glass-card" style={{
                    padding: "1.1rem 1.25rem",
                    display: "flex", alignItems: "center", gap: "1rem",
                    transition: "all 0.2s ease",
                    textDecoration: "none",
                    cursor: info.href ? "pointer" : "default",
                  }}>
                    <div style={{
                      width: "42px", height: "42px", borderRadius: "12px",
                      background: info.bg, display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0,
                    }}>
                      <Icon size={18} style={{ color: info.color }} />
                    </div>
                    <div>
                      <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "2px" }}>
                        {info.label}
                      </div>
                      <div style={{ fontSize: "0.9rem", fontWeight: 600, color: "#0f172a" }}>
                        {info.value}
                      </div>
                    </div>
                  </div>
                );
                return info.href ? (
                  <a key={info.label} href={info.href} style={{ textDecoration: "none" }}>
                    {content}
                  </a>
                ) : (
                  <div key={info.label}>{content}</div>
                );
              })}

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/919967873413"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: "10px",
                  padding: "14px", borderRadius: "12px",
                  background: "#25D366", color: "white",
                  textDecoration: "none", fontWeight: 600, fontSize: "0.95rem",
                  boxShadow: "0 4px 14px rgba(37,211,102,0.35)",
                  transition: "all 0.2s ease",
                }}
              >
                <WhatsAppIcon />
                Chat on WhatsApp
              </a>

              {/* Social links */}
              <div className="glass-card" style={{ padding: "1.25rem" }}>
                <p style={{ fontSize: "0.8rem", fontWeight: 600, color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "12px" }}>
                  Find me online
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                  {socialLinks.map(({ icon: Icon, href, label, color, bg }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "flex", alignItems: "center", gap: "8px",
                        padding: "10px 12px", borderRadius: "10px",
                        background: bg, color,
                        textDecoration: "none", fontSize: "0.82rem", fontWeight: 600,
                        transition: "all 0.2s ease",
                      }}
                    >
                      <Icon size={15} /> {label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Process steps */}
              <div style={{
                background: "#F8FAFC", borderRadius: "1rem",
                padding: "1.25rem", border: "1px solid #E2E8F0",
              }}>
                <p style={{ fontSize: "0.82rem", fontWeight: 700, color: "#0f172a", marginBottom: "10px" }}>
                  What happens next?
                </p>
                {["We review your request within 24h", "Schedule a free discovery call", "Receive a detailed proposal", "Kick off your project!"].map((step, i) => (
                  <div key={step} style={{ display: "flex", gap: "8px", marginBottom: i < 3 ? "10px" : 0 }}>
                    <div style={{
                      width: "20px", height: "20px", borderRadius: "50%",
                      background: "#2563EB", color: "white",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "0.65rem", fontWeight: 700, flexShrink: 0,
                    }}>
                      {i + 1}
                    </div>
                    <p style={{ fontSize: "0.82rem", color: "#64748B", lineHeight: 1.4 }}>{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Form */}
            <div className="glass-card" style={{ padding: "2.5rem" }}>
              {submitted ? (
                <div style={{
                  display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                  minHeight: "400px", gap: "1.5rem", textAlign: "center",
                }}>
                  <div style={{
                    width: "80px", height: "80px", borderRadius: "50%",
                    background: "#ECFDF5", display: "flex", alignItems: "center", justifyContent: "center",
                    animation: "float 3s ease-in-out infinite",
                  }}>
                    <CheckCircle size={40} style={{ color: "#059669" }} />
                  </div>
                  <h3 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0f172a" }}>
                    Message Sent! 🎉
                  </h3>
                  <p style={{ fontSize: "1rem", color: "#64748B", maxWidth: "24rem", lineHeight: 1.65 }}>
                    Thank you for reaching out. We'll review your project details and get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-secondary"
                    style={{ display: "inline-flex", marginTop: "0.5rem" }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  <div style={{ display: "grid", gap: "1.25rem" }} className="form-row">
                    <style>{`@media (min-width: 640px) { .form-row { grid-template-columns: 1fr 1fr !important; } }`}</style>
                    <div>
                      <label style={{ fontSize: "0.85rem", fontWeight: 600, color: "#374151", display: "block", marginBottom: "6px" }}>
                        Full Name *
                      </label>
                      <input
                        {...register("name")}
                        placeholder="Your name"
                        style={inputStyle(!!errors.name)}
                      />
                      {errors.name && <p style={{ fontSize: "0.8rem", color: "#EF4444", marginTop: "4px" }}>{errors.name.message}</p>}
                    </div>
                    <div>
                      <label style={{ fontSize: "0.85rem", fontWeight: 600, color: "#374151", display: "block", marginBottom: "6px" }}>
                        Email Address *
                      </label>
                      <input
                        {...register("email")}
                        type="email"
                        placeholder="your@email.com"
                        style={inputStyle(!!errors.email)}
                      />
                      {errors.email && <p style={{ fontSize: "0.8rem", color: "#EF4444", marginTop: "4px" }}>{errors.email.message}</p>}
                    </div>
                  </div>

                  <div style={{ display: "grid", gap: "1.25rem" }} className="form-row2">
                    <style>{`@media (min-width: 640px) { .form-row2 { grid-template-columns: 1fr 1fr !important; } }`}</style>
                    <div>
                      <label style={{ fontSize: "0.85rem", fontWeight: 600, color: "#374151", display: "block", marginBottom: "6px" }}>
                        Company / Project
                      </label>
                      <input
                        {...register("company")}
                        placeholder="Company or project name"
                        style={inputStyle(false)}
                      />
                    </div>
                    <div>
                      <label style={{ fontSize: "0.85rem", fontWeight: 600, color: "#374151", display: "block", marginBottom: "6px" }}>
                        Service Needed *
                      </label>
                      <select
                        {...register("service")}
                        style={{ ...inputStyle(!!errors.service), cursor: "pointer" }}
                        defaultValue=""
                      >
                        <option value="" disabled>Select a service...</option>
                        {services.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                      {errors.service && <p style={{ fontSize: "0.8rem", color: "#EF4444", marginTop: "4px" }}>{errors.service.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label style={{ fontSize: "0.85rem", fontWeight: 600, color: "#374151", display: "block", marginBottom: "6px" }}>
                      Project Details *
                    </label>
                    <textarea
                      {...register("message")}
                      rows={5}
                      placeholder="Describe your project goals, timeline, and any specific requirements..."
                      style={{
                        ...inputStyle(!!errors.message),
                        resize: "vertical",
                        minHeight: "120px",
                      }}
                    />
                    {errors.message && <p style={{ fontSize: "0.8rem", color: "#EF4444", marginTop: "4px" }}>{errors.message.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary"
                    style={{ justifyContent: "center", padding: "14px", fontSize: "1rem" }}
                  >
                    {isSubmitting ? (
                      <><Loader2 size={18} style={{ animation: "spin 1s linear infinite" }} /> Sending...</>
                    ) : (
                      <><Send size={17} /> Send Message</>
                    )}
                  </button>
                  <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
