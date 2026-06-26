import { useState } from "react";
import { ArrowRight, Twitter, Linkedin, Github, Instagram, ArrowUpRight, CheckCircle, Loader2 } from "lucide-react";

const footerLinks = {
  Company: [
    { label: "About Us", href: "#about" },
    { label: "Careers", href: "#" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ],
  Services: [
    { label: "Web Development", href: "#services" },
    { label: "SaaS Platforms", href: "#services" },
    { label: "Mobile Apps", href: "#services" },
    { label: "AI Integration", href: "#services" },
    { label: "SEO & Growth", href: "#services" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};

const socials = [
  { Icon: Twitter, href: "https://twitter.com", label: "Twitter", color: "#1DA1F2" },
  { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn", color: "#0A66C2" },
  { Icon: Github, href: "https://github.com", label: "GitHub", color: "#333" },
  { Icon: Instagram, href: "https://instagram.com", label: "Instagram", color: "#E1306C" },
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
              @media (min-width: 768px)  { .footer-grid { grid-template-columns: 2fr 1fr 1fr 1fr !important; gap: 2rem !important; } }
            `}</style>

            {/* Brand column */}
            <div>
              {/* Logo */}
              <div style={{ display: "flex", alignItems: "baseline", gap: 0, marginBottom: "1.25rem" }}>
                <span style={{ fontSize: "1.4rem", fontWeight: 800, color: "#60A5FA", letterSpacing: "-0.02em" }}>M</span>
                <span style={{ fontSize: "1.1rem", fontWeight: 800, color: "#F59E0B", position: "relative", top: "-2px" }}>✦</span>
                <span style={{ fontSize: "1.4rem", fontWeight: 800, color: "#60A5FA", letterSpacing: "-0.02em" }}>D</span>
                <span style={{ fontSize: "1.4rem", fontWeight: 800, color: "white", marginLeft: "0.35rem", letterSpacing: "-0.02em" }}>Studio</span>
              </div>

              <p style={{ fontSize: "0.9rem", color: "#94A3B8", lineHeight: 1.75, maxWidth: "22rem", marginBottom: "2rem" }}>
                A premium digital agency building scalable, high-performance digital products for ambitious startups and businesses worldwide.
              </p>

              {/* Newsletter */}
              <div style={{ marginBottom: "2rem" }}>
                <p style={{ fontSize: "0.85rem", fontWeight: 600, color: "#CBD5E1", marginBottom: "10px" }}>
                  Subscribe to our newsletter
                </p>
                {subscribed ? (
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#4ADE80", fontSize: "0.9rem" }}>
                    <CheckCircle size={18} /> You're subscribed! Thanks.
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
                        fontSize: "0.875rem",
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
                      {loading ? <Loader2 size={16} style={{ animation: "spin 1s linear infinite" }} /> : <ArrowRight size={16} />}
                    </button>
                    <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
                  </form>
                )}
              </div>

              {/* Socials */}
              <div style={{ display: "flex", gap: "10px" }}>
                {socials.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={label}
                    style={{
                      width: "38px", height: "38px", borderRadius: "10px",
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
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([heading, links]) => (
              <div key={heading}>
                <h4 style={{ fontSize: "0.85rem", fontWeight: 700, color: "#CBD5E1", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1.25rem" }}>
                  {heading}
                </h4>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                  {links.map((link) => (
                    <li key={link.label}>
                      <button
                        onClick={() => scrollTo(link.href)}
                        style={{
                          background: "none", border: "none", padding: 0, cursor: "pointer",
                          fontSize: "0.9rem", color: "#94A3B8",
                          display: "flex", alignItems: "center", gap: "4px",
                          transition: "color 0.2s ease",
                          fontFamily: "inherit",
                        }}
                        onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = "#60A5FA"}
                        onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = "#94A3B8"}
                      >
                        {link.label}
                        {link.href === "#" && <ArrowUpRight size={12} />}
                      </button>
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
            <p style={{ fontSize: "0.875rem", color: "#475569" }}>
              © {new Date().getFullYear()} MD Studio. All rights reserved.
            </p>
            <p style={{ fontSize: "0.875rem", color: "#475569" }}>
              Crafted with ❤️ for ambitious builders.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
