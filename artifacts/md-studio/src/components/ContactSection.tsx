import { useState, useEffect, useRef } from "react";
import { Mail, Phone, MapPin, Github, Twitter, Instagram, Linkedin, MessageCircle, Send, CheckCircle2 } from "lucide-react";

const contactInfo = [
  { icon: Mail,    label: "Email",      value: "adilhusain3176@gmail.com", href: "mailto:adilhusain3176@gmail.com", color: "#2563EB" },
  { icon: Phone,   label: "Phone / WhatsApp", value: "+91 9967873413",     href: "https://wa.me/919967873413",    color: "#059669" },
  { icon: MapPin,  label: "Location",   value: "India • Serving Worldwide", href: null,                           color: "#D97706" },
];

const socials = [
  { Icon: Github,    label: "GitHub",      href: "https://github.com/tokenanalyzer",   handle: "@tokenanalyzer" },
  { Icon: Twitter,   label: "Twitter / X", href: "https://x.com/Husain3413",           handle: "@Husain3413"    },
  { Icon: Instagram, label: "Instagram",   href: "https://instagram.com/dil_3413",     handle: "@dil_3413"      },
  { Icon: Linkedin,  label: "LinkedIn",    href: "https://linkedin.com",               handle: "Adil Hussain"   },
];

type FormData = { name: string; email: string; budget: string; message: string };
type Status = "idle" | "sending" | "sent" | "error";

export default function ContactSection() {
  const [form, setForm] = useState<FormData>({ name: "", email: "", budget: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.08 }
    );
    sectionRef.current?.querySelectorAll(".animate-on-scroll")?.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    await new Promise(r => setTimeout(r, 1400));
    setStatus("sent");
  };

  const update = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(v => ({ ...v, [field]: e.target.value }));

  return (
    <section id="contact" ref={sectionRef} className="section-block" style={{ background: "white", position: "relative", overflow: "hidden" }}>
      <style>{`
        .contact-grid {
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }
        @media (min-width: 1024px) {
          .contact-grid {
            display: grid;
            grid-template-columns: 2fr 3fr;
            gap: 4rem;
            align-items: start;
          }
        }
        .contact-field {
          width: 100%;
          padding: 11px 14px;
          border: 1px solid #E2E8F0;
          border-radius: 10px;
          font-size: 0.9rem;
          font-family: inherit;
          color: #0f172a;
          background: #f8faff;
          transition: border-color 0.2s, box-shadow 0.2s;
          outline: none;
          box-sizing: border-box;
        }
        .contact-field:focus {
          border-color: #2563EB;
          box-shadow: 0 0 0 3px rgba(37,99,235,0.12);
          background: white;
        }
        .contact-field::placeholder { color: #94A3B8; }
        label { font-size: 0.82rem; font-weight: 600; color: #475569; display: block; margin-bottom: 6px; }
      `}</style>

      <div style={{ position: "absolute", top: "-60px", right: "-60px", width:"280px", height:"280px", borderRadius:"50%", background:"radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)", pointerEvents:"none" }} />

      <div className="section-padding">
        <div className="container-wide">
          <div className="animate-on-scroll" style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="section-label" style={{ justifyContent: "center" }}>
              <span>📬</span> Get In Touch
            </div>
            <h2 style={{ fontSize: "clamp(1.9rem, 3.5vw, 3rem)", fontWeight: 800, color: "#0f172a", marginBottom: "0.85rem", letterSpacing: "-0.03em" }}>
              Ready to Build Your <span className="text-gradient">Next Product?</span>
            </h2>
            <p style={{ fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)", color: "#64748B", maxWidth: "38rem", margin: "0 auto", lineHeight: 1.72 }}>
              Tell us about your project. We respond to every inquiry within 24 hours and offer a free 30-minute discovery call.
            </p>
          </div>

          <div className="contact-grid">
            {/* Left — info */}
            <div className="animate-on-scroll">
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0f172a", marginBottom: "1.25rem" }}>Contact Information</h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
                {contactInfo.map(({ icon: Icon, label, value, href, color }) => (
                  <div key={label} style={{ display: "flex", gap: "0.85rem", alignItems: "flex-start" }}>
                    <div style={{ width: "42px", height: "42px", borderRadius: "11px", background: `${color}12`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon size={18} style={{ color }} />
                    </div>
                    <div>
                      <p style={{ fontSize: "0.75rem", color: "#94A3B8", fontWeight: 600, margin: "0 0 2px" }}>{label}</p>
                      {href ? (
                        <a href={href} target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.9rem", color: "#0f172a", fontWeight: 500, textDecoration: "none" }}
                          onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = color}
                          onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#0f172a"}
                        >{value}</a>
                      ) : (
                        <p style={{ fontSize: "0.9rem", color: "#0f172a", fontWeight: 500, margin: 0 }}>{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Socials */}
              <div>
                <p style={{ fontSize: "0.82rem", fontWeight: 600, color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.85rem" }}>Follow Along</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  {socials.map(({ Icon, label, href, handle }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                      style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 12px", borderRadius: "10px", textDecoration: "none", transition: "background 0.2s" }}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "#f8faff"}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "transparent"}
                    >
                      <Icon size={17} style={{ color: "#64748B" }} />
                      <span style={{ fontSize: "0.85rem", color: "#475569", fontWeight: 500 }}>{label}</span>
                      <span style={{ fontSize: "0.8rem", color: "#94A3B8", marginLeft: "auto" }}>{handle}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a href="https://wa.me/919967873413?text=Hi%20Adil%2C%20I%20want%20to%20discuss%20a%20project" target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginTop: "1.5rem", padding: "11px 20px", background: "#22C55E", color: "white", fontWeight: 600, fontSize: "0.88rem", borderRadius: "10px", textDecoration: "none", transition: "all 0.2s ease" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#16A34A"; (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#22C55E"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
              >
                <MessageCircle size={17} /> Chat on WhatsApp
              </a>
            </div>

            {/* Right — form */}
            <div className="animate-on-scroll" style={{ transitionDelay: "100ms" }}>
              {status === "sent" ? (
                <div style={{ textAlign: "center", padding: "3rem 2rem", background: "#ECFDF5", borderRadius: "1.5rem", border: "1px solid #A7F3D0" }}>
                  <CheckCircle2 size={48} style={{ color: "#059669", margin: "0 auto 1rem" }} />
                  <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#0f172a", margin: "0 0 0.5rem" }}>Message Sent!</h3>
                  <p style={{ color: "#64748B", margin: 0 }}>Thanks! I'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ background: "#f8faff", borderRadius: "1.5rem", border: "1px solid #E2E8F0", padding: "2rem", display: "flex", flexDirection: "column", gap: "1.1rem" }}>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0f172a", margin: "0 0 0.25rem" }}>Send a Message</h3>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.85rem" }}>
                    <div>
                      <label>Name *</label>
                      <input type="text" className="contact-field" placeholder="Your name" value={form.name} onChange={update("name")} required />
                    </div>
                    <div>
                      <label>Email *</label>
                      <input type="email" className="contact-field" placeholder="you@example.com" value={form.email} onChange={update("email")} required />
                    </div>
                  </div>

                  <div>
                    <label>Budget Range</label>
                    <select className="contact-field" value={form.budget} onChange={update("budget")}>
                      <option value="">Select budget range</option>
                      <option>Under ₹25,000</option>
                      <option>₹25,000 – ₹75,000</option>
                      <option>₹75,000 – ₹2,00,000</option>
                      <option>₹2,00,000 – ₹5,00,000</option>
                      <option>₹5,00,000+</option>
                      <option>International (USD/GBP)</option>
                    </select>
                  </div>

                  <div>
                    <label>Project Details *</label>
                    <textarea
                      className="contact-field"
                      placeholder="Tell me about your project — what you're building, what problem it solves, and your timeline..."
                      rows={5}
                      value={form.message}
                      onChange={update("message")}
                      required
                      style={{ resize: "vertical", minHeight: "120px" }}
                    />
                  </div>

                  <button type="submit" className="btn-primary" disabled={status === "sending"} style={{ justifyContent: "center", opacity: status === "sending" ? 0.75 : 1 }}>
                    {status === "sending" ? (
                      <>Sending…</>
                    ) : (
                      <>Send Message <Send size={16} /></>
                    )}
                  </button>

                  <p style={{ fontSize: "0.75rem", color: "#94A3B8", textAlign: "center", margin: 0 }}>
                    🔒 Your information is kept private. No spam, ever.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
