import { useState } from "react";
import { ArrowRight, Twitter, Linkedin, Github, Instagram, CheckCircle, Loader2 } from "lucide-react";

const footerLinks = {
  Company: [
    { label: "About", href: "#about" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ],
  Services: [
    { label: "Web Development", href: "#services" },
    { label: "SaaS Platforms", href: "#services" },
    { label: "AI Agents", href: "#services" },
    { label: "Mobile Apps", href: "#services" },
    { label: "API Integrations", href: "#services" },
  ],
  Connect: [
    { label: "GitHub", href: "https://github.com/tokenanalyzer", external: true },
    { label: "Twitter / X", href: "https://x.com/Husain3413", external: true },
    { label: "Instagram", href: "https://instagram.com/dil_3413", external: true },
    { label: "LinkedIn", href: "https://linkedin.com", external: true },
    { label: "WhatsApp", href: "https://wa.me/919967873413", external: true },
  ],
};

const socials = [
  { Icon: Twitter, href: "https://x.com/Husain3413", label: "Twitter/X" },
  { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { Icon: Github, href: "https://github.com/tokenanalyzer", label: "GitHub" },
  { Icon: Instagram, href: "https://instagram.com/dil_3413", label: "Instagram" },
];

function scrollTo(href: string) {
  if (href.startsWith("#")) {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }
}

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setSubscribed(true);
    setLoading(false);
    setEmail("");
  };

  return (
    <footer style={{ background: "#0f172a", color: "white", paddingTop: "5rem" }}>
      <div className="section-padding">
        <div className="container-wide">
          <div style={{ display: "grid", gap: "3rem" }} className="footer-grid">
            <style>{`
              @media (min-width: 768px) {
                .footer-grid { grid-template-columns: 2fr 1fr 1fr 1fr !important; gap: 2rem !important; }
              }
            `}</style>

            {/* Brand column */}
            <div>
              {/* Logo */}
              <div style={{ display: "flex", alignItems: "baseline", gap: 0, marginBottom: "1rem" }}>
                <span style={{ fontSize: "1.5rem", fontWeight: 800, color: "#60A5FA", letterSpacing: "-0.02em" }}>M</span>
                <span style={{ fontSize: "1.2rem", fontWeight: 800, color: "#F59E0B", position: "relative", top: "-2px" }}>✦</span>
                <span style={{ fontSize: "1.5rem", fontWeight: 800, color: "#60A5FA", letterSpacing: "-0.02em" }}>D</span>
                <span style={{ fontSize: "1.5rem", fontWeight: 800, color: "white", marginLeft: "0.35rem", letterSpacing: "-0.02em" }}>Studio</span>
              </div>
              <p style={{ fontSize: "0.8rem", fontWeight: 500, color: "#94A3B8", marginBottom: "1rem" }}>
                Founded by <span style={{ color: "#60A5FA", fontWeight: 600 }}>Adil Hussain</span> · Full Stack Developer & AI Engineer
              </p>

              <p style={{ fontSize: "0.875rem", color: "#64748B", lineHeight: 1.75, maxWidth: "22rem", marginBottom: "2rem" }}>
                Building modern digital products — from web apps and SaaS platforms to AI agents and automation systems.
              </p>

              {/* Newsletter */}
              <div style={{ marginBottom: "2rem" }}>
                <p style={{ fontSize: "0.82rem", fontWeight: 600, color: "#CBD5E1", marginBottom: "10px" }}>
                  Stay updated
                </p>
                {subscribed ? (
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#4ADE80", fontSize: "0.875rem" }}>
                    <CheckCircle size={16} /> You're subscribed!
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} style={{ display: "flex", gap: "8px" }}>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      style={{
                        flex: 1, padding: "10px 14px",
                        borderRadius: "8px",
                        background: "#1E293B",
                        border: "1px solid #334155",
                        color: "white",
                        fontSize: "0.85rem",
                        outline: "none",
                        fontFamily: "inherit",
                      }}
                    />
                    <button
                      type="submit"
                      disabled={loading}
                      style={{
                        padding: "10px 14px",
                        background: "#2563EB",
                        border: "none",
                        borderRadius: "8px",
                        color: "white",
                        cursor: "pointer",
                        display: "flex", alignItems: "center",
                        transition: "background 0.2s ease",
                      }}
                    >
                      {loading ? <Loader2 size={15} style={{ animation: "spin 1s linear infinite" }} /> : <ArrowRight size={15} />}
                    </button>
                    <style>{`@keyframes spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }`}</style>
                  </form>
                )}
              </div>

              {/* Socials */}
              <div style={{ display: "flex", gap: "8px" }}>
                {socials.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={label}
                    style={{
                      width: "36px", height: "36px", borderRadius: "9px",
                      background: "#1E293B", border: "1px solid #334155",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "#94A3B8", transition: "all 0.2s ease",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "#2563EB";
                      (e.currentTarget as HTMLElement).style.borderColor = "#2563EB";
                      (e.currentTarget as HTMLElement).style.color = "white";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "#1E293B";
                      (e.currentTarget as HTMLElement).style.borderColor = "#334155";
                      (e.currentTarget as HTMLElement).style.color = "#94A3B8";
                    }}
                  >
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([heading, links]) => (
              <div key={heading}>
                <h4 style={{ fontSize: "0.78rem", fontWeight: 700, color: "#CBD5E1", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1.25rem" }}>
                  {heading}
                </h4>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "9px" }}>
                  {links.map((link) => (
                    <li key={link.label}>
                      {(link as any).external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            fontSize: "0.875rem", color: "#64748B",
                            textDecoration: "none", transition: "color 0.2s ease",
                            display: "block",
                          }}
                          onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = "#60A5FA"}
                          onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = "#64748B"}
                        >
                          {link.label}
                        </a>
                      ) : (
                        <button
                          onClick={() => scrollTo(link.href)}
                          style={{
                            background: "none", border: "none", padding: 0, cursor: "pointer",
                            fontSize: "0.875rem", color: "#64748B",
                            transition: "color 0.2s ease",
                            fontFamily: "inherit", textAlign: "left",
                          }}
                          onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = "#60A5FA"}
                          onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = "#64748B"}
                        >
                          {link.label}
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div style={{
            marginTop: "3.5rem",
            paddingTop: "1.5rem",
            paddingBottom: "2rem",
            borderTop: "1px solid #1E293B",
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            alignItems: "center",
            justifyContent: "space-between",
          }}>
            <p style={{ fontSize: "0.82rem", color: "#475569" }}>
              © {new Date().getFullYear()} MD Studio · Adil Hussain. All rights reserved.
            </p>
            <p style={{ fontSize: "0.82rem", color: "#475569" }}>
              Built with passion for ambitious builders 🚀
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
