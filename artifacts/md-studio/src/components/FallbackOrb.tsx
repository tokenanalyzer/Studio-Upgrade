export default function FallbackOrb() {
  return (
    <div style={{
      width: "100%", height: "100%",
      display: "flex", alignItems: "center", justifyContent: "center",
      position: "relative",
    }}>
      <style>{`
        @keyframes orbFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-18px) rotate(2deg); }
          66% { transform: translateY(-8px) rotate(-1deg); }
        }
        @keyframes ring1 {
          from { transform: rotateX(70deg) rotateY(0deg) rotateZ(30deg); }
          to { transform: rotateX(70deg) rotateY(360deg) rotateZ(30deg); }
        }
        @keyframes ring2 {
          from { transform: rotateX(20deg) rotateY(0deg) rotateZ(60deg); }
          to { transform: rotateX(20deg) rotateY(-360deg) rotateZ(60deg); }
        }
        @keyframes ring3 {
          from { transform: rotateX(50deg) rotateY(120deg) rotateZ(0deg); }
          to { transform: rotateX(50deg) rotateY(480deg) rotateZ(0deg); }
        }
        @keyframes particle1 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.9; }
          50% { transform: translate(12px, -20px) scale(1.3); opacity: 1; }
        }
        @keyframes particle2 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.7; }
          50% { transform: translate(-15px, -12px) scale(1.2); opacity: 1; }
        }
        @keyframes particle3 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.8; }
          50% { transform: translate(8px, 18px) scale(0.8); opacity: 0.5; }
        }
        @keyframes glow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.1); }
        }
        @keyframes innerGlow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.7; }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%) rotate(45deg); }
          100% { transform: translateX(200%) rotate(45deg); }
        }
      `}</style>

      {/* Outer glow bloom */}
      <div style={{
        position: "absolute",
        width: "340px", height: "340px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(219,234,254,0.6) 0%, rgba(237,233,254,0.3) 50%, transparent 70%)",
        animation: "glow 4s ease-in-out infinite",
        filter: "blur(20px)",
      }} />

      {/* Main orb group */}
      <div style={{
        position: "relative",
        width: "260px", height: "260px",
        animation: "orbFloat 6s ease-in-out infinite",
        perspective: "800px",
      }}>
        {/* Main sphere */}
        <div style={{
          position: "absolute",
          inset: 0,
          borderRadius: "50%",
          background: `
            radial-gradient(circle at 38% 32%,
              rgba(255,255,255,0.95) 0%,
              rgba(219,234,254,0.9) 20%,
              rgba(147,197,253,0.7) 45%,
              rgba(37,99,235,0.85) 70%,
              rgba(30,58,138,0.95) 100%
            )
          `,
          boxShadow: `
            0 0 0 1px rgba(255,255,255,0.4) inset,
            0 30px 80px rgba(37,99,235,0.45),
            0 10px 30px rgba(99,102,241,0.25),
            inset 0 -20px 40px rgba(30,58,138,0.5)
          `,
          overflow: "hidden",
        }}>
          {/* Specular highlight */}
          <div style={{
            position: "absolute",
            top: "12%", left: "18%",
            width: "44%", height: "38%",
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.2) 60%, transparent 100%)",
            filter: "blur(6px)",
          }} />
          {/* Secondary highlight */}
          <div style={{
            position: "absolute",
            top: "55%", right: "15%",
            width: "22%", height: "16%",
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(255,255,255,0.35) 0%, transparent 100%)",
            filter: "blur(4px)",
          }} />
          {/* Shimmer sweep */}
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(135deg, transparent 30%, rgba(255,255,255,0.12) 50%, transparent 70%)",
            animation: "shimmer 4s ease-in-out infinite",
            animationDelay: "1s",
          }} />
          {/* Inner glow */}
          <div style={{
            position: "absolute", inset: "20%",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(96,165,250,0.4) 0%, transparent 70%)",
            animation: "innerGlow 3s ease-in-out infinite",
          }} />
        </div>

        {/* Orbital ring 1 — blue */}
        <div style={{
          position: "absolute",
          inset: "-28px",
          borderRadius: "50%",
          border: "2px solid transparent",
          borderTop: "2px solid rgba(96,165,250,0.8)",
          borderBottom: "2px solid rgba(96,165,250,0.3)",
          animation: "ring1 4s linear infinite",
          boxShadow: "0 0 12px rgba(96,165,250,0.4)",
        }} />

        {/* Orbital ring 2 — violet */}
        <div style={{
          position: "absolute",
          inset: "-44px",
          borderRadius: "50%",
          border: "1.5px solid transparent",
          borderLeft: "1.5px solid rgba(139,92,246,0.7)",
          borderRight: "1.5px solid rgba(139,92,246,0.2)",
          animation: "ring2 6s linear infinite",
          boxShadow: "0 0 8px rgba(139,92,246,0.3)",
        }} />

        {/* Orbital ring 3 — sky */}
        <div style={{
          position: "absolute",
          inset: "-60px",
          borderRadius: "50%",
          border: "1px solid transparent",
          borderTop: "1px solid rgba(56,189,248,0.6)",
          borderLeft: "1px solid rgba(56,189,248,0.2)",
          animation: "ring3 8s linear infinite",
          boxShadow: "0 0 6px rgba(56,189,248,0.2)",
        }} />

        {/* Floating particles */}
        {[
          { size: 10, color: "#38BDF8", top: "-18%", left: "78%", anim: "particle1" },
          { size: 8, color: "#8B5CF6", top: "75%", left: "-8%", anim: "particle2" },
          { size: 6, color: "#60A5FA", top: "25%", left: "-14%", anim: "particle3" },
          { size: 7, color: "#A78BFA", top: "85%", left: "65%", anim: "particle1" },
          { size: 5, color: "#2563EB", top: "-12%", left: "30%", anim: "particle2" },
          { size: 9, color: "#38BDF8", top: "50%", left: "95%", anim: "particle3" },
        ].map((p, i) => (
          <div key={i} style={{
            position: "absolute",
            width: p.size, height: p.size,
            borderRadius: "50%",
            background: p.color,
            top: p.top, left: p.left,
            boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
            animation: `${p.anim} ${3 + i * 0.5}s ease-in-out infinite`,
            animationDelay: `${i * 0.4}s`,
          }} />
        ))}

        {/* Ground shadow */}
        <div style={{
          position: "absolute",
          bottom: "-55px", left: "50%",
          transform: "translateX(-50%)",
          width: "160px", height: "30px",
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(37,99,235,0.2) 0%, transparent 70%)",
          filter: "blur(8px)",
        }} />
      </div>

      {/* Platform rings */}
      <div style={{
        position: "absolute",
        bottom: "10%",
        width: "200px", height: "40px",
        left: "50%", transform: "translateX(-50%)",
      }}>
        {[140, 110, 80].map((w, i) => (
          <div key={i} style={{
            position: "absolute",
            left: "50%", top: "50%",
            transform: "translateX(-50%) translateY(-50%)",
            width: `${w}px`, height: `${w * 0.22}px`,
            borderRadius: "50%",
            border: `1px solid rgba(37,99,235,${0.15 - i * 0.04})`,
          }} />
        ))}
      </div>
    </div>
  );
}
