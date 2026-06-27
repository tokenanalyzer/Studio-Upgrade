export default function FallbackOrb() {
  return (
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
      <style>{`
        @keyframes orbFloat {
          0%, 100% { transform: translateY(0px); }
          40%  { transform: translateY(-18px); }
          70%  { transform: translateY(-8px); }
        }
        @keyframes ring1 {
          from { transform: rotateX(72deg) rotateY(0deg) rotateZ(25deg); }
          to   { transform: rotateX(72deg) rotateY(360deg) rotateZ(25deg); }
        }
        @keyframes ring2 {
          from { transform: rotateX(18deg) rotateY(0deg) rotateZ(65deg); }
          to   { transform: rotateX(18deg) rotateY(-360deg) rotateZ(65deg); }
        }
        @keyframes ring3 {
          from { transform: rotateX(48deg) rotateY(120deg) rotateZ(0deg); }
          to   { transform: rotateX(48deg) rotateY(480deg) rotateZ(0deg); }
        }
        @keyframes op1 {
          0%,100% { transform: translate(0,0) scale(1); opacity:0.9; }
          50%     { transform: translate(16px,-24px) scale(1.5); opacity:1; }
        }
        @keyframes op2 {
          0%,100% { transform: translate(0,0) scale(1); opacity:0.7; }
          50%     { transform: translate(-18px,-16px) scale(1.2); opacity:1; }
        }
        @keyframes op3 {
          0%,100% { transform: translate(0,0) scale(1); opacity:0.8; }
          50%     { transform: translate(10px,22px) scale(0.8); opacity:0.5; }
        }
        @keyframes haloBreath {
          0%,100% { opacity:0.55; transform:scale(1); }
          50%     { opacity:0.85; transform:scale(1.08); }
        }
        @keyframes innerGlow {
          0%,100% { opacity:0.4; }
          50%     { opacity:0.72; }
        }
        @keyframes shimmerSweep {
          0%   { transform: translateX(-100%) rotate(45deg); }
          100% { transform: translateX(220%) rotate(45deg); }
        }

        /* Responsive orb sizes */
        .fo-halo  { width:240px; height:240px; }
        .fo-group { width:175px; height:175px; }
        @media (min-width:360px)  { .fo-halo{width:270px;height:270px;} .fo-group{width:195px;height:195px;} }
        @media (min-width:430px)  { .fo-halo{width:300px;height:300px;} .fo-group{width:220px;height:220px;} }
        @media (min-width:768px)  { .fo-halo{width:400px;height:400px;} .fo-group{width:290px;height:290px;} }
        @media (min-width:1024px) { .fo-halo{width:580px;height:580px;} .fo-group{width:420px;height:420px;} }
        @media (min-width:1280px) { .fo-halo{width:660px;height:660px;} .fo-group{width:490px;height:490px;} }
        @media (min-width:1536px) { .fo-halo{width:720px;height:720px;} .fo-group{width:540px;height:540px;} }
      `}</style>

      {/* Outer ambient halo — blends into background */}
      <div className="fo-halo" style={{
        position: "absolute",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(37,99,235,0.20) 0%, rgba(139,92,246,0.12) 32%, rgba(56,189,248,0.06) 58%, transparent 78%)",
        animation: "haloBreath 5.5s ease-in-out infinite",
        filter: "blur(36px)",
        zIndex: 0,
      }} />

      {/* Main orb group */}
      <div className="fo-group" style={{
        position: "relative",
        animation: "orbFloat 6.5s ease-in-out infinite",
        zIndex: 2,
      }}>
        {/* Sphere */}
        <div style={{
          position: "absolute", inset: 0, borderRadius: "50%",
          background: `radial-gradient(circle at 36% 30%,
            rgba(255,255,255,0.98) 0%,
            rgba(219,234,254,0.9) 16%,
            rgba(147,197,253,0.75) 38%,
            rgba(59,130,246,0.82) 62%,
            rgba(37,99,235,0.9) 78%,
            rgba(30,58,138,0.96) 100%
          )`,
          boxShadow: `
            0 0 0 1px rgba(255,255,255,0.4) inset,
            0 30px 100px rgba(37,99,235,0.55),
            0 12px 50px rgba(99,102,241,0.35),
            inset 0 -22px 50px rgba(30,58,138,0.55)
          `,
          overflow: "hidden",
        }}>
          {/* Primary specular */}
          <div style={{
            position: "absolute", top: "10%", left: "15%", width: "44%", height: "40%",
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.2) 60%, transparent 100%)",
            filter: "blur(6px)",
          }} />
          {/* Secondary specular */}
          <div style={{
            position: "absolute", top: "54%", right: "12%", width: "22%", height: "16%",
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(255,255,255,0.4) 0%, transparent 100%)",
            filter: "blur(3px)",
          }} />
          {/* Shimmer */}
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(135deg, transparent 28%, rgba(255,255,255,0.16) 50%, transparent 72%)",
            animation: "shimmerSweep 5s ease-in-out infinite",
            animationDelay: "1.2s",
          }} />
          {/* Inner glow core */}
          <div style={{
            position: "absolute", inset: "18%", borderRadius: "50%",
            background: "radial-gradient(circle, rgba(96,165,250,0.5) 0%, transparent 70%)",
            animation: "innerGlow 3.5s ease-in-out infinite",
          }} />
        </div>

        {/* Ring 1 */}
        <div style={{
          position: "absolute", inset: "-10%", borderRadius: "50%",
          border: "2px solid transparent",
          borderTop: "2px solid rgba(96,165,250,0.9)",
          borderBottom: "2px solid rgba(96,165,250,0.25)",
          animation: "ring1 4s linear infinite",
          boxShadow: "0 0 16px rgba(96,165,250,0.5)",
        }} />
        {/* Ring 2 */}
        <div style={{
          position: "absolute", inset: "-20%", borderRadius: "50%",
          border: "1.5px solid transparent",
          borderLeft: "1.5px solid rgba(139,92,246,0.8)",
          borderRight: "1.5px solid rgba(139,92,246,0.2)",
          animation: "ring2 6s linear infinite",
          boxShadow: "0 0 12px rgba(139,92,246,0.4)",
        }} />
        {/* Ring 3 */}
        <div style={{
          position: "absolute", inset: "-30%", borderRadius: "50%",
          border: "1px solid transparent",
          borderTop: "1px solid rgba(56,189,248,0.7)",
          borderLeft: "1px solid rgba(56,189,248,0.2)",
          animation: "ring3 9s linear infinite",
          boxShadow: "0 0 10px rgba(56,189,248,0.3)",
        }} />

        {/* Floating orb particles */}
        {[
          { sz:12, c:"#38BDF8", t:"-16%", l:"76%", a:"op1", d:0    },
          { sz:9,  c:"#8B5CF6", t:"74%",  l:"-8%", a:"op2", d:0.4  },
          { sz:7,  c:"#60A5FA", t:"24%",  l:"-14%",a:"op3", d:0.8  },
          { sz:8,  c:"#A78BFA", t:"84%",  l:"64%", a:"op1", d:1.2  },
          { sz:6,  c:"#2563EB", t:"-12%", l:"29%", a:"op2", d:1.6  },
          { sz:10, c:"#38BDF8", t:"48%",  l:"95%", a:"op3", d:0.6  },
          { sz:5,  c:"#C4B5FD", t:"62%",  l:"80%", a:"op1", d:2.0  },
          { sz:7,  c:"#7DD3FC", t:"30%",  l:"92%", a:"op2", d:0.3  },
        ].map((p, i) => (
          <div key={i} style={{
            position: "absolute", width: p.sz, height: p.sz, borderRadius: "50%",
            background: p.c, top: p.t, left: p.l,
            boxShadow: `0 0 ${p.sz*2}px ${p.c}, 0 0 ${p.sz*4}px ${p.c}55`,
            animation: `${p.a} ${3.2+i*0.4}s ease-in-out infinite`,
            animationDelay: `${p.d}s`,
          }} />
        ))}

        {/* Drop shadow ellipse */}
        <div style={{
          position: "absolute", bottom: "-18%", left: "50%",
          transform: "translateX(-50%)",
          width: "62%", height: "10%", borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(37,99,235,0.28) 0%, transparent 70%)",
          filter: "blur(12px)",
        }} />
      </div>
    </div>
  );
}
