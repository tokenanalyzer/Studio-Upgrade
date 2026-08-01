const tickerItems = [
  "Website Development",
  "Web Applications",
  "Android Apps",
  "iOS Applications",
  "AI Agents",
  "Automation Systems",
  "CRM Development",
  "Dashboard Development",
  "SaaS Development",
  "API Integration",
  "Cloud Solutions",
  "UI/UX Design",
  "AI Integration",
  "Business Automation",
];

export default function ServicesTicker() {
  const doubled = [...tickerItems, ...tickerItems];

  return (
    <div style={{
      background: "#0f172a",
      overflow: "hidden",
      padding: "0.85rem 0",
      position: "relative",
    }}>
      <style>{`
        @keyframes ticker-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .ticker-track {
          display: flex;
          width: max-content;
          animation: ticker-scroll 34s linear infinite;
          will-change: transform;
        }
        .ticker-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Left fade */}
      <div style={{
        position: "absolute", left: 0, top: 0, bottom: 0, width: "80px", zIndex: 2,
        background: "linear-gradient(90deg, #0f172a 0%, transparent 100%)",
        pointerEvents: "none",
      }} />
      {/* Right fade */}
      <div style={{
        position: "absolute", right: 0, top: 0, bottom: 0, width: "80px", zIndex: 2,
        background: "linear-gradient(270deg, #0f172a 0%, transparent 100%)",
        pointerEvents: "none",
      }} />

      <div className="ticker-track">
        {doubled.map((item, i) => (
          <span key={i} style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            padding: "0 2rem", fontSize: "0.82rem", fontWeight: 500,
            color: i % 3 === 0 ? "#60A5FA" : i % 3 === 1 ? "#A78BFA" : "#94A3B8",
            whiteSpace: "nowrap",
            letterSpacing: "0.03em",
          }}>
            <span style={{
              width: "5px", height: "5px", borderRadius: "50%",
              background: i % 3 === 0 ? "#3B82F6" : i % 3 === 1 ? "#8B5CF6" : "#64748B",
              flexShrink: 0,
            }} />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
