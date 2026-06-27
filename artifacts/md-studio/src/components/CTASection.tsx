import { ArrowRight, MessageCircle } from "lucide-react";

function scrollTo(id: string) {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function CTASection() {
  return (
    <section style={{ padding: "5rem 0", background: "linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 40%, #2563eb 70%, #0369a1 100%)", position: "relative", overflow: "hidden" }}>
      <style>{`
        @keyframes ctaFloat {
          0%,100% { transform: translateY(0) rotate(0deg); opacity:0.4; }
          50%      { transform: translateY(-20px) rotate(5deg); opacity:0.7; }
        }
        .cta-bg-blob {
          position: absolute; border-radius: 50%;
          background: rgba(255,255,255,0.05);
          pointer-events: none;
        }
      `}</style>

      {/* Decorative blobs */}
      <div className="cta-bg-blob" style={{ width:"300px", height:"300px", top:"-80px", left:"-60px", animation:"ctaFloat 8s ease-in-out infinite" }} />
      <div className="cta-bg-blob" style={{ width:"200px", height:"200px", bottom:"-50px", right:"10%", animation:"ctaFloat 6s ease-in-out infinite", animationDelay:"2s" }} />
      <div className="cta-bg-blob" style={{ width:"150px", height:"150px", top:"30%", right:"-40px", animation:"ctaFloat 7s ease-in-out infinite", animationDelay:"1s" }} />

      {/* Dot grid */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)", backgroundSize: "36px 36px", pointerEvents: "none" }} />

      <div className="section-padding" style={{ position: "relative", zIndex: 10 }}>
        <div className="container-wide">
          <div style={{ textAlign: "center", maxWidth: "54rem", margin: "0 auto" }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "7px",
              padding: "6px 16px", borderRadius: "999px",
              background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)",
              fontSize: "0.78rem", fontWeight: 600, color: "rgba(255,255,255,0.9)",
              marginBottom: "1.5rem",
            }}>
              <span>🚀</span> Ready to Build Something Amazing?
            </div>

            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 800, color: "white", marginBottom: "1.1rem", letterSpacing: "-0.04em", lineHeight: 1.1 }}>
              Let's Turn Your Idea Into<br />
              <span style={{ background: "linear-gradient(135deg, #BAE6FD, #60A5FA)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                a World-Class Product
              </span>
            </h2>

            <p style={{ fontSize: "clamp(1rem, 1.3vw, 1.15rem)", color: "rgba(255,255,255,0.75)", maxWidth: "38rem", margin: "0 auto 2.25rem", lineHeight: 1.72 }}>
              Join 89+ founders and companies who trusted MD Studio to build their digital products. Free consultation, no commitment required.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              <button
                onClick={() => scrollTo("#contact")}
                style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  padding: "0.9rem 1.8rem",
                  background: "white", color: "#1D4ED8",
                  fontWeight: 700, fontSize: "0.95rem", borderRadius: "0.85rem",
                  border: "none", cursor: "pointer",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
                  transition: "all 0.25s cubic-bezier(0.4,0,0.2,1)",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(0,0,0,0.28)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 30px rgba(0,0,0,0.2)";
                }}
              >
                Start Your Project <ArrowRight size={18} />
              </button>
              <a
                href="https://wa.me/919967873413?text=Hi%20Adil%2C%20I%20want%20to%20discuss%20a%20project"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  padding: "0.9rem 1.8rem",
                  background: "rgba(255,255,255,0.12)", color: "white",
                  fontWeight: 600, fontSize: "0.95rem", borderRadius: "0.85rem",
                  border: "1px solid rgba(255,255,255,0.3)",
                  textDecoration: "none", cursor: "pointer",
                  backdropFilter: "blur(12px)",
                  transition: "all 0.25s cubic-bezier(0.4,0,0.2,1)",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.18)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.12)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                <MessageCircle size={18} /> WhatsApp Chat
              </a>
            </div>

            {/* Trust indicators */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem", justifyContent: "center", marginTop: "2.5rem" }}>
              {["✅ Free consultation", "⚡ Response within 24h", "🔒 NDA available", "🌍 Remote-friendly"].map(t => (
                <span key={t} style={{ fontSize: "0.83rem", color: "rgba(255,255,255,0.75)", fontWeight: 500 }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
