import { Logo } from "./Navbar";
import { Github, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowUpRight, Heart } from "lucide-react";

const links = {
  Company: [
    { label: "About",       href: "#about" },
    { label: "Portfolio",   href: "#portfolio" },
    { label: "Services",    href: "#services" },
    { label: "Process",     href: "#process" },
    { label: "Contact",     href: "#contact" },
  ],
  Services: [
    { label: "Web Development",   href: "#services" },
    { label: "Mobile Apps",       href: "#services" },
    { label: "AI Agents",         href: "#services" },
    { label: "SaaS Platforms",    href: "#services" },
    { label: "API Integration",   href: "#services" },
  ],
  Legal: [
    { label: "Privacy Policy",    href: "/privacy" },
    { label: "Terms of Service",  href: "/terms" },
  ],
};

const socials = [
  { Icon: Github,    href: "https://github.com/tokenanalyzer",    label: "GitHub" },
  { Icon: Twitter,   href: "https://x.com/Husain3413",            label: "Twitter" },
  { Icon: Linkedin,  href: "https://linkedin.com",                label: "LinkedIn" },
  { Icon: Instagram, href: "https://instagram.com/dil_3413",      label: "Instagram" },
];

function scrollTo(href: string) {
  if (href.startsWith("#")) {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    return true;
  }
  return false;
}

export default function Footer() {
  return (
    <footer style={{ background: "#0a0f1e", color: "white" }}>
      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          padding: 4.5rem 0 3rem;
          border-bottom: 1px solid rgba(255,255,255,0.07);
        }
        @media (min-width: 640px)  { .footer-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .footer-grid { grid-template-columns: 2.5fr 1fr 1fr 1fr; } }
        .footer-link {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 0.85rem;
          color: rgba(255,255,255,0.55);
          text-decoration: none;
          padding: 3px 0;
          background: none;
          border: none;
          cursor: pointer;
          font-family: inherit;
          transition: color 0.2s;
        }
        .footer-link:hover { color: rgba(255,255,255,0.9); }
        .footer-label {
          font-size: 0.75rem;
          font-weight: 700;
          color: rgba(255,255,255,0.35);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 0.85rem;
        }
        .social-icon {
          width: 38px; height: 38px; border-radius: 10px;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.1);
          display: flex; align-items: center; justify-content: center;
          color: rgba(255,255,255,0.55);
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .social-icon:hover { background: rgba(37,99,235,0.3); border-color: rgba(37,99,235,0.5); color: white; }
      `}</style>

      <div className="section-padding">
        <div className="container-wide">
          <div className="footer-grid">
            {/* Brand col */}
            <div>
              {/* ── Same Logo component as Navbar ── */}
              <Logo size="footer" />

              <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.75, margin: "1.25rem 0 1.5rem", maxWidth: "22rem" }}>
                MD Studio is a boutique digital agency by Adil Hussain — building world-class web apps, AI products, and SaaS platforms for founders worldwide.
              </p>

              {/* Contact info */}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "1.5rem" }}>
                {[
                  { icon: Mail,    text: "adilhusain3176@gmail.com",  href: "mailto:adilhusain3176@gmail.com" },
                  { icon: Phone,   text: "+91 9967873413",            href: "https://wa.me/919967873413" },
                  { icon: MapPin,  text: "India • Remote Worldwide",  href: null },
                ].map(({ icon: Icon, text, href }) => (
                  <div key={text} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <Icon size={13} style={{ color: "rgba(255,255,255,0.35)", flexShrink: 0 }} />
                    {href ? (
                      <a href={href} target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.5)", textDecoration: "none" }}
                        onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.85)"}
                        onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)"}
                      >{text}</a>
                    ) : (
                      <span style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.5)" }}>{text}</span>
                    )}
                  </div>
                ))}
              </div>

              {/* Socials */}
              <div style={{ display: "flex", gap: "8px" }}>
                {socials.map(({ Icon, href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="social-icon" title={label}>
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(links).map(([heading, items]) => (
              <div key={heading}>
                <p className="footer-label">{heading}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
                  {items.map(({ label, href }) => (
                    href.startsWith("#") ? (
                      <button key={label} className="footer-link" onClick={() => scrollTo(href)}>
                        {label}
                      </button>
                    ) : (
                      <a key={label} href={href} className="footer-link">
                        {label} <ArrowUpRight size={11} style={{ opacity: 0.5 }} />
                      </a>
                    )
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "0.75rem", padding: "1.5rem 0", fontSize: "0.78rem", color: "rgba(255,255,255,0.35)" }}>
            <span>© {new Date().getFullYear()} MD Studio. All rights reserved.</span>
            <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              Made with <Heart size={12} style={{ color: "#EF4444" }} /> by Adil Hussain
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
