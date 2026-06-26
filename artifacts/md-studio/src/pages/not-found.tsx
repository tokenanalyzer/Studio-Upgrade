import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div style={{
      minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
      background: "white", textAlign: "center",
    }}>
      <div>
        <div style={{ fontSize: "8rem", marginBottom: "1.5rem" }}>🔍</div>
        <h1 style={{ fontSize: "4rem", fontWeight: 800, color: "#0f172a", marginBottom: "1rem", letterSpacing: "-0.03em" }}>
          404
        </h1>
        <p style={{ fontSize: "1.25rem", color: "#64748B", marginBottom: "2rem" }}>
          This page doesn't exist (yet).
        </p>
        <Link
          href="/"
          style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            padding: "0.75rem 1.5rem",
            background: "#2563EB", color: "white",
            borderRadius: "0.75rem", textDecoration: "none",
            fontWeight: 500, fontSize: "1rem",
            transition: "all 0.2s ease",
          }}
        >
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </div>
    </div>
  );
}
