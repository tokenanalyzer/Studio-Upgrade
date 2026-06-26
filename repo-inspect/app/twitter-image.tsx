import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "M.D Studio - Award-Winning Digital Studio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #ffffff 0%, #EFF6FF 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 80,
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 40 }}>
          <span style={{ fontSize: 72, fontWeight: 800, color: "#2563EB" }}>M</span>
          <span style={{ fontSize: 72, fontWeight: 800, color: "#2563EB" }}>D</span>
          <span style={{ fontSize: 72, fontWeight: 800, color: "#0F172A", marginLeft: 12 }}>Studio</span>
        </div>
        <p style={{ fontSize: 36, color: "#475569", textAlign: "center" }}>
          Award-Winning Digital Studio
        </p>
      </div>
    ),
    { ...size }
  );
}
