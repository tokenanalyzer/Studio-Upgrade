import { useState, useEffect } from "react";
import { ArrowUp, Mail, Phone } from "lucide-react";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

export default function FloatingButtons() {
  const [showScroll, setShowScroll] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const btnBase: React.CSSProperties = {
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    border: "none",
    boxShadow: "0 4px 16px rgba(0,0,0,0.18)",
    transition: "all 0.25s cubic-bezier(0.34,1.56,0.64,1)",
    textDecoration: "none",
    color: "white",
    flexShrink: 0,
  };

  const hoverStyle = (color: string) => ({
    onMouseEnter: (e: React.MouseEvent) => {
      const el = e.currentTarget as HTMLElement;
      el.style.transform = "scale(1.15)";
      el.style.boxShadow = `0 6px 22px ${color}`;
    },
    onMouseLeave: (e: React.MouseEvent) => {
      const el = e.currentTarget as HTMLElement;
      el.style.transform = "scale(1)";
      el.style.boxShadow = "0 4px 16px rgba(0,0,0,0.18)";
    },
  });

  return (
    <>
      <style>{`
        @keyframes floatIn {
          from { opacity: 0; transform: scale(0.5) translateY(10px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
      <div style={{
        position: "fixed",
        right: "1.25rem",
        bottom: "1.5rem",
        zIndex: 999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
      }}>
        {/* Expandable sub-buttons */}
        {expanded && (
          <>
            {/* GitHub */}
            <a
              href="https://github.com/tokenanalyzer"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              style={{
                ...btnBase,
                background: "#0f172a",
                animation: "floatIn 0.25s ease-out 0.05s both",
              }}
              {...hoverStyle("rgba(15,23,42,0.5)")}
            >
              <GithubIcon />
            </a>

            {/* Call */}
            <a
              href="tel:+919967873413"
              title="Call Us"
              style={{
                ...btnBase,
                background: "#059669",
                animation: "floatIn 0.25s ease-out 0.1s both",
              }}
              {...hoverStyle("rgba(5,150,105,0.5)")}
            >
              <Phone size={18} />
            </a>

            {/* Email */}
            <a
              href="mailto:adilhusain3176@gmail.com"
              title="Send Email"
              style={{
                ...btnBase,
                background: "#2563EB",
                animation: "floatIn 0.25s ease-out 0.15s both",
              }}
              {...hoverStyle("rgba(37,99,235,0.5)")}
            >
              <Mail size={18} />
            </a>
          </>
        )}

        {/* WhatsApp — always visible */}
        <a
          href="https://wa.me/919967873413"
          target="_blank"
          rel="noopener noreferrer"
          title="Chat on WhatsApp"
          style={{ ...btnBase, background: "#25D366", width: "52px", height: "52px" }}
          {...hoverStyle("rgba(37,211,102,0.55)")}
        >
          <WhatsAppIcon />
        </a>

        {/* Expand toggle */}
        <button
          onClick={() => setExpanded(!expanded)}
          title={expanded ? "Close" : "More"}
          style={{
            ...btnBase,
            background: expanded ? "#64748B" : "#2563EB",
            transform: expanded ? "rotate(45deg)" : "rotate(0deg)",
            fontSize: "1.4rem",
            fontWeight: 300,
            lineHeight: 1,
          }}
          {...hoverStyle("rgba(37,99,235,0.5)")}
        >
          {expanded ? "×" : "+"}
        </button>

        {/* Scroll to top */}
        {showScroll && (
          <button
            onClick={scrollTop}
            title="Back to top"
            style={{
              ...btnBase,
              background: "#0f172a",
              animation: "floatIn 0.25s ease-out both",
            }}
            {...hoverStyle("rgba(15,23,42,0.45)")}
          >
            <ArrowUp size={18} />
          </button>
        )}
      </div>
    </>
  );
}
