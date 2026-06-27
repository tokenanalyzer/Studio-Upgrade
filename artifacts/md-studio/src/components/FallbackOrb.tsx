export default function FallbackOrb() {
  return (
    <div style={{
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
    }}>
      <style>{`
        @keyframes orbFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33%  { transform: translateY(-16px) rotate(1.5deg); }
          66%  { transform: translateY(-7px) rotate(-1deg); }
        }
        @keyframes ring1 {
          from { transform: rotateX(70deg) rotateY(0deg) rotateZ(30deg); }
          to   { transform: rotateX(70deg) rotateY(360deg) rotateZ(30deg); }
        }
        @keyframes ring2 {
          from { transform: rotateX(20deg) rotateY(0deg) rotateZ(60deg); }
          to   { transform: rotateX(20deg) rotateY(-360deg) rotateZ(60deg); }
        }
        @keyframes ring3 {
          from { transform: rotateX(50deg) rotateY(120deg) rotateZ(0deg); }
          to   { transform: rotateX(50deg) rotateY(480deg) rotateZ(0deg); }
        }
        @keyframes orb-p1 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.9; }
          50% { transform: translate(14px, -22px) scale(1.4); opacity: 1; }
        }
        @keyframes orb-p2 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.7; }
          50% { transform: translate(-16px, -14px) scale(1.2); opacity: 1; }
        }
        @keyframes orb-p3 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.8; }
          50% { transform: translate(9px, 20px) scale(0.8); opacity: 0.5; }
        }
        @keyframes haloBreath {
          0%, 100% { opacity: 0.55; transform: scale(1); }
          50%       { opacity: 0.85; transform: scale(1.08); }
        }
        @keyframes innerGlow {
          0%, 100% { opacity: 0.4; }
          50%       { opacity: 0.7; }
        }
        @keyframes shimmer {
          0%   { transform: translateX(-100%) rotate(45deg); }
          100% { transform: translateX(200%) rotate(45deg); }
        }
        @keyframes codeFloat1 {
          0%, 100% { transform: translateY(0) translateX(0) rotate(-8deg); opacity: 0.7; }
          50%      { transform: translateY(-12px) translateX(5px) rotate(-6deg); opacity: 1; }
        }
        @keyframes codeFloat2 {
          0%, 100% { transform: translateY(0) translateX(0) rotate(6deg); opacity: 0.65; }
          50%      { transform: translateY(-10px) translateX(-4px) rotate(8deg); opacity: 0.9; }
        }
        @keyframes codeFloat3 {
          0%, 100% { transform: translateY(0) translateX(0) rotate(-3deg); opacity: 0.6; }
          50%      { transform: translateY(10px) translateX(6px) rotate(-5deg); opacity: 0.85; }
        }

        /* Mobile orb sizes */
        .orb-outer-halo  { width: 260px; height: 260px; }
        .orb-main-group  { width: 200px; height: 200px; }
        .orb-badge       { display: none; }
        @media (min-width: 360px) {
          .orb-outer-halo { width: 290px; height: 290px; }
          .orb-main-group { width: 220px; height: 220px; }
        }
        @media (min-width: 430px) {
          .orb-outer-halo { width: 320px; height: 320px; }
          .orb-main-group { width: 245px; height: 245px; }
        }
        @media (min-width: 768px) {
          .orb-outer-halo { width: 400px; height: 400px; }
          .orb-main-group { width: 300px; height: 300px; }
        }
        @media (min-width: 1024px) {
          .orb-outer-halo  { width: 520px; height: 520px; }
          .orb-main-group  { width: 330px; height: 330px; }
          .orb-badge       { display: block; }
        }
        @media (min-width: 1280px) {
          .orb-outer-halo  { width: 580px; height: 580px; }
          .orb-main-group  { width: 370px; height: 370px; }
        }
      `}</style>

      {/* ── Large ambient halo — blends into page background ── */}
      <div className="orb-outer-halo" style={{
        position: "absolute",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(37,99,235,0.18) 0%, rgba(139,92,246,0.10) 35%, rgba(56,189,248,0.05) 60%, transparent 78%)",
        animation: "haloBreath 5s ease-in-out infinite",
        filter: "blur(32px)",
        zIndex: 0,
      }} />

      {/* ── Floating tech badges (desktop only) ── */}
      <div className="orb-badge" style={{
        position: "absolute",
        top: "12%", left: "2%",
        background: "rgba(255,255,255,0.92)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(37,99,235,0.15)",
        borderRadius: "12px",
        padding: "8px 12px",
        fontSize: "0.75rem",
        fontWeight: 600,
        color: "#2563EB",
        boxShadow: "0 4px 20px rgba(37,99,235,0.12)",
        animation: "codeFloat1 4s ease-in-out infinite",
        zIndex: 3,
        display: "flex",
        alignItems: "center",
        gap: "6px",
        whiteSpace: "nowrap",
      }}>
        <span style={{ fontSize: "1rem" }}>⚡</span>
        AI-Powered
      </div>

      <div className="orb-badge" style={{
        position: "absolute",
        bottom: "22%", left: "0%",
        background: "rgba(255,255,255,0.92)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(139,92,246,0.15)",
        borderRadius: "12px",
        padding: "8px 12px",
        fontSize: "0.75rem",
        fontWeight: 600,
        color: "#7C3AED",
        boxShadow: "0 4px 20px rgba(139,92,246,0.12)",
        animation: "codeFloat2 5s ease-in-out infinite",
        animationDelay: "0.8s",
        zIndex: 3,
        display: "flex",
        alignItems: "center",
        gap: "6px",
        whiteSpace: "nowrap",
      }}>
        <span style={{ fontSize: "1rem" }}>🚀</span>
        Full Stack Dev
      </div>

      <div className="orb-badge" style={{
        position: "absolute",
        top: "18%", right: "0%",
        background: "rgba(255,255,255,0.92)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(56,189,248,0.2)",
        borderRadius: "12px",
        padding: "8px 12px",
        fontSize: "0.75rem",
        fontWeight: 600,
        color: "#0369A1",
        boxShadow: "0 4px 20px rgba(56,189,248,0.15)",
        animation: "codeFloat3 4.5s ease-in-out infinite",
        animationDelay: "1.4s",
        zIndex: 3,
        display: "flex",
        alignItems: "center",
        gap: "6px",
        whiteSpace: "nowrap",
      }}>
        <span style={{ fontSize: "1rem" }}>💎</span>
        SaaS Builder
      </div>

      {/* ── Main orb group ── */}
      <div className="orb-main-group" style={{
        position: "relative",
        animation: "orbFloat 6s ease-in-out infinite",
        perspective: "900px",
        zIndex: 2,
      }}>
        {/* Sphere */}
        <div style={{
          position: "absolute",
          inset: 0,
          borderRadius: "50%",
          background: `
            radial-gradient(circle at 38% 32%,
              rgba(255,255,255,0.95) 0%,
              rgba(219,234,254,0.9) 18%,
              rgba(147,197,253,0.7) 42%,
              rgba(37,99,235,0.85) 68%,
              rgba(30,58,138,0.95) 100%
            )
          `,
          boxShadow: `
            0 0 0 1px rgba(255,255,255,0.35) inset,
            0 30px 90px rgba(37,99,235,0.5),
            0 10px 40px rgba(99,102,241,0.3),
            inset 0 -20px 45px rgba(30,58,138,0.5)
          `,
          overflow: "hidden",
        }}>
          {/* Primary specular */}
          <div style={{
            position: "absolute",
            top: "11%", left: "17%",
            width: "44%", height: "38%",
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.2) 60%, transparent 100%)",
            filter: "blur(5px)",
          }} />
          {/* Secondary highlight */}
          <div style={{
            position: "absolute",
            top: "55%", right: "14%",
            width: "22%", height: "16%",
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(255,255,255,0.35) 0%, transparent 100%)",
            filter: "blur(3px)",
          }} />
          {/* Shimmer sweep */}
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(135deg, transparent 30%, rgba(255,255,255,0.14) 50%, transparent 70%)",
            animation: "shimmer 4.5s ease-in-out infinite",
            animationDelay: "1s",
          }} />
          {/* Inner glow core */}
          <div style={{
            position: "absolute", inset: "20%",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(96,165,250,0.45) 0%, transparent 70%)",
            animation: "innerGlow 3s ease-in-out infinite",
          }} />
        </div>

        {/* Orbital ring 1 */}
        <div style={{
          position: "absolute",
          inset: "-10%",
          borderRadius: "50%",
          border: "2px solid transparent",
          borderTop: "2px solid rgba(96,165,250,0.85)",
          borderBottom: "2px solid rgba(96,165,250,0.3)",
          animation: "ring1 4s linear infinite",
          boxShadow: "0 0 14px rgba(96,165,250,0.45)",
        }} />

        {/* Orbital ring 2 */}
        <div style={{
          position: "absolute",
          inset: "-18%",
          borderRadius: "50%",
          border: "1.5px solid transparent",
          borderLeft: "1.5px solid rgba(139,92,246,0.75)",
          borderRight: "1.5px solid rgba(139,92,246,0.2)",
          animation: "ring2 6s linear infinite",
          boxShadow: "0 0 10px rgba(139,92,246,0.35)",
        }} />

        {/* Orbital ring 3 */}
        <div style={{
          position: "absolute",
          inset: "-26%",
          borderRadius: "50%",
          border: "1px solid transparent",
          borderTop: "1px solid rgba(56,189,248,0.65)",
          borderLeft: "1px solid rgba(56,189,248,0.2)",
          animation: "ring3 8s linear infinite",
          boxShadow: "0 0 8px rgba(56,189,248,0.25)",
        }} />

        {/* Floating orb particles */}
        {[
          { size: 10, color: "#38BDF8", top: "-16%", left: "76%", anim: "orb-p1", delay: 0 },
          { size: 8,  color: "#8B5CF6", top: "74%", left: "-7%",  anim: "orb-p2", delay: 0.4 },
          { size: 6,  color: "#60A5FA", top: "24%", left: "-13%", anim: "orb-p3", delay: 0.8 },
          { size: 7,  color: "#A78BFA", top: "84%", left: "64%",  anim: "orb-p1", delay: 1.2 },
          { size: 5,  color: "#2563EB", top: "-11%", left: "29%", anim: "orb-p2", delay: 1.6 },
          { size: 9,  color: "#38BDF8", top: "48%", left: "94%",  anim: "orb-p3", delay: 0.6 },
        ].map((p, i) => (
          <div key={i} style={{
            position: "absolute",
            width: p.size, height: p.size,
            borderRadius: "50%",
            background: p.color,
            top: p.top, left: p.left,
            boxShadow: `0 0 ${p.size * 2}px ${p.color}, 0 0 ${p.size * 4}px ${p.color}55`,
            animation: `${p.anim} ${3.2 + i * 0.45}s ease-in-out infinite`,
            animationDelay: `${p.delay}s`,
          }} />
        ))}

        {/* Drop shadow */}
        <div style={{
          position: "absolute",
          bottom: "-18%", left: "50%",
          transform: "translateX(-50%)",
          width: "60%", height: "10%",
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(37,99,235,0.25) 0%, transparent 70%)",
          filter: "blur(10px)",
        }} />
      </div>
    </div>
  );
}
