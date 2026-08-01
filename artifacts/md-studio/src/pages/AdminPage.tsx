import { useState, useEffect } from "react";
import { NAV_H } from "@/components/Navbar";
import { Logo } from "@/components/Navbar";
import { Plus, Trash2, Save, LogOut, Eye, EyeOff, Package, Star, Settings, ChevronDown, ChevronUp, Edit3 } from "lucide-react";

const ADMIN_PASSWORD = "mdstudio2025";
const PORTFOLIO_KEY = "md-admin-portfolio";
const TESTIMONIALS_KEY = "md-admin-testimonials";

/* ── Types ── */
interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  tech: string;
  link: string;
  github: string;
  featured: boolean;
}

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  text: string;
  country: string;
}

/* ── Defaults ── */
const defaultPortfolio: PortfolioItem[] = [
  { id: "1", title: "AI SaaS Dashboard", category: "SaaS", description: "Full-stack SaaS with AI features, subscription billing, and analytics.", tech: "Next.js · OpenAI · Stripe · PostgreSQL", link: "", github: "", featured: true },
  { id: "2", title: "E-commerce Platform", category: "Web App", description: "Multi-vendor marketplace with real-time inventory, payments, and seller dashboard.", tech: "React · Node.js · Stripe · MongoDB", link: "", github: "", featured: false },
  { id: "3", title: "AI Document Analyzer", category: "AI / ML", description: "LangChain RAG pipeline that extracts insights from PDF/DOCX documents using GPT-4.", tech: "Python · LangChain · FastAPI · Pinecone", link: "", github: "", featured: true },
];

const defaultTestimonials: Testimonial[] = [
  { id: "1", name: "Sarah Johnson", role: "Founder", company: "TechVenture Inc.", rating: 5, text: "Adil delivered an exceptional SaaS platform in record time. His AI integration skills are truly world-class.", country: "🇺🇸 USA" },
  { id: "2", name: "Mohammed Al-Rashid", role: "CTO", company: "Gulf Solutions", rating: 5, text: "Outstanding work on our enterprise dashboard. Clean code, great communication, and delivered ahead of schedule.", country: "🇸🇦 Saudi Arabia" },
  { id: "3", name: "Emma Williams", role: "Product Manager", company: "FinStart UK", rating: 5, text: "Best developer we've worked with. Built our entire fintech MVP from scratch — we launched in 6 weeks!", country: "🇬🇧 United Kingdom" },
];

/* ── Local storage helpers ── */
function loadPortfolio(): PortfolioItem[] {
  try { return JSON.parse(localStorage.getItem(PORTFOLIO_KEY) || "null") ?? defaultPortfolio; }
  catch { return defaultPortfolio; }
}
function loadTestimonials(): Testimonial[] {
  try { return JSON.parse(localStorage.getItem(TESTIMONIALS_KEY) || "null") ?? defaultTestimonials; }
  catch { return defaultTestimonials; }
}

/* ── Password Gate ── */
function LoginGate({ onLogin }: { onLogin: () => void }) {
  const [pw, setPw] = useState("");
  const [show, setShow] = useState(false);
  const [err, setErr] = useState("");

  const submit = () => {
    if (pw === ADMIN_PASSWORD) { onLogin(); }
    else { setErr("Incorrect password. Try again."); setPw(""); }
  };

  return (
    <div style={{ minHeight: "100vh", background: "#0a0f1e", display: "flex", alignItems: "center", justifyContent: "center", padding: "1.5rem" }}>
      <div style={{ width: "100%", maxWidth: "400px", background: "#111827", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "1.5rem", padding: "2.5rem", boxShadow: "0 24px 64px rgba(0,0,0,0.4)" }}>
        <div style={{ marginBottom: "2rem", textAlign: "center" }}>
          <div style={{ marginBottom: "1rem" }}><Logo /></div>
          <h1 style={{ color: "#f1f5f9", fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.4rem" }}>Admin Panel</h1>
          <p style={{ color: "#64748b", fontSize: "0.9rem" }}>Enter your admin password to continue</p>
        </div>
        <div style={{ position: "relative", marginBottom: "1rem" }}>
          <input
            type={show ? "text" : "password"}
            value={pw}
            onChange={e => { setPw(e.target.value); setErr(""); }}
            onKeyDown={e => e.key === "Enter" && submit()}
            placeholder="Admin password"
            style={{ width: "100%", padding: "0.85rem 3rem 0.85rem 1rem", background: "rgba(255,255,255,0.05)", border: `1px solid ${err ? "#EF4444" : "rgba(255,255,255,0.1)"}`, borderRadius: "10px", color: "#f1f5f9", fontSize: "0.95rem", outline: "none", fontFamily: "inherit", boxSizing: "border-box" }}
          />
          <button onClick={() => setShow(v => !v)} style={{ position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "#64748b" }}>
            {show ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
        {err && <p style={{ color: "#EF4444", fontSize: "0.83rem", marginBottom: "0.75rem" }}>{err}</p>}
        <button onClick={submit} style={{ width: "100%", padding: "0.85rem", background: "linear-gradient(135deg, #2563EB, #1D4ED8)", color: "white", border: "none", borderRadius: "10px", fontWeight: 600, fontSize: "0.95rem", cursor: "pointer", fontFamily: "inherit" }}>
          Sign In
        </button>
      </div>
    </div>
  );
}

/* ── Portfolio Editor ── */
function PortfolioEditor() {
  const [items, setItems] = useState<PortfolioItem[]>(loadPortfolio);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);

  const save = () => {
    localStorage.setItem(PORTFOLIO_KEY, JSON.stringify(items));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const add = () => {
    const id = Date.now().toString();
    setItems(prev => [...prev, { id, title: "New Project", category: "Web App", description: "", tech: "", link: "", github: "", featured: false }]);
    setExpanded(id);
  };

  const remove = (id: string) => setItems(prev => prev.filter(i => i.id !== id));

  const update = (id: string, field: keyof PortfolioItem, value: string | boolean) =>
    setItems(prev => prev.map(i => i.id === id ? { ...i, [field]: value } : i));

  const categories = ["Web App", "SaaS", "AI / ML", "Mobile", "Tools", "E-commerce"];

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.5rem" }}>
        <h2 style={{ color: "#f1f5f9", fontSize: "1.1rem", fontWeight: 700 }}>Portfolio Items ({items.length})</h2>
        <div style={{ display: "flex", gap: "10px" }}>
          <button onClick={add} style={{ display: "flex", alignItems: "center", gap: "6px", padding: "8px 16px", background: "rgba(37,99,235,0.15)", border: "1px solid rgba(37,99,235,0.3)", borderRadius: "8px", color: "#60A5FA", fontSize: "0.85rem", fontWeight: 500, cursor: "pointer", fontFamily: "inherit" }}>
            <Plus size={14} /> Add Project
          </button>
          <button onClick={save} style={{ display: "flex", alignItems: "center", gap: "6px", padding: "8px 16px", background: saved ? "rgba(5,150,105,0.15)" : "rgba(37,99,235,0.9)", border: "none", borderRadius: "8px", color: "white", fontSize: "0.85rem", fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>
            <Save size={14} /> {saved ? "Saved!" : "Save"}
          </button>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {items.map(item => (
          <div key={item.id} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px", overflow: "hidden" }}>
            <div
              onClick={() => setExpanded(expanded === item.id ? null : item.id)}
              style={{ padding: "1rem 1.25rem", display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ padding: "3px 10px", background: "rgba(37,99,235,0.15)", borderRadius: "999px", color: "#60A5FA", fontSize: "0.75rem", fontWeight: 600 }}>{item.category}</span>
                <span style={{ color: "#f1f5f9", fontWeight: 600, fontSize: "0.95rem" }}>{item.title}</span>
                {item.featured && <span style={{ fontSize: "0.7rem", color: "#F59E0B" }}>★ Featured</span>}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <button onClick={e => { e.stopPropagation(); remove(item.id); }} style={{ background: "none", border: "none", cursor: "pointer", color: "#EF4444", opacity: 0.6, padding: "4px" }}>
                  <Trash2 size={14} />
                </button>
                {expanded === item.id ? <ChevronUp size={16} color="#64748b" /> : <ChevronDown size={16} color="#64748b" />}
              </div>
            </div>

            {expanded === item.id && (
              <div style={{ padding: "0 1.25rem 1.25rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                <Field label="Title" value={item.title} onChange={v => update(item.id, "title", v)} />
                <div>
                  <label style={labelStyle}>Category</label>
                  <select value={item.category} onChange={e => update(item.id, "category", e.target.value)} style={inputStyle}>
                    {categories.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div style={{ gridColumn: "1 / -1" }}>
                  <Field label="Description" value={item.description} onChange={v => update(item.id, "description", v)} multiline />
                </div>
                <Field label="Tech Stack (comma separated)" value={item.tech} onChange={v => update(item.id, "tech", v)} />
                <Field label="Live URL" value={item.link} onChange={v => update(item.id, "link", v)} />
                <Field label="GitHub URL" value={item.github} onChange={v => update(item.id, "github", v)} />
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <input type="checkbox" id={`feat-${item.id}`} checked={item.featured} onChange={e => update(item.id, "featured", e.target.checked)} />
                  <label htmlFor={`feat-${item.id}`} style={{ color: "#94a3b8", fontSize: "0.85rem" }}>Featured project</label>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Testimonials Editor ── */
function TestimonialsEditor() {
  const [items, setItems] = useState<Testimonial[]>(loadTestimonials);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);

  const save = () => {
    localStorage.setItem(TESTIMONIALS_KEY, JSON.stringify(items));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const add = () => {
    const id = Date.now().toString();
    setItems(prev => [...prev, { id, name: "Client Name", role: "Founder", company: "Company", rating: 5, text: "Add testimonial text here...", country: "🌍" }]);
    setExpanded(id);
  };

  const remove = (id: string) => setItems(prev => prev.filter(i => i.id !== id));
  const update = (id: string, field: keyof Testimonial, value: string | number) =>
    setItems(prev => prev.map(i => i.id === id ? { ...i, [field]: value } : i));

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.5rem" }}>
        <h2 style={{ color: "#f1f5f9", fontSize: "1.1rem", fontWeight: 700 }}>Testimonials ({items.length})</h2>
        <div style={{ display: "flex", gap: "10px" }}>
          <button onClick={add} style={{ display: "flex", alignItems: "center", gap: "6px", padding: "8px 16px", background: "rgba(37,99,235,0.15)", border: "1px solid rgba(37,99,235,0.3)", borderRadius: "8px", color: "#60A5FA", fontSize: "0.85rem", fontWeight: 500, cursor: "pointer", fontFamily: "inherit" }}>
            <Plus size={14} /> Add Review
          </button>
          <button onClick={save} style={{ display: "flex", alignItems: "center", gap: "6px", padding: "8px 16px", background: saved ? "rgba(5,150,105,0.15)" : "rgba(37,99,235,0.9)", border: "none", borderRadius: "8px", color: "white", fontSize: "0.85rem", fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>
            <Save size={14} /> {saved ? "Saved!" : "Save"}
          </button>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {items.map(item => (
          <div key={item.id} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px", overflow: "hidden" }}>
            <div onClick={() => setExpanded(expanded === item.id ? null : item.id)} style={{ padding: "1rem 1.25rem", display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ color: "#F59E0B" }}>{"★".repeat(item.rating)}</span>
                <span style={{ color: "#f1f5f9", fontWeight: 600 }}>{item.name}</span>
                <span style={{ color: "#64748b", fontSize: "0.85rem" }}>{item.company}</span>
              </div>
              <div style={{ display: "flex", gap: "8px" }}>
                <button onClick={e => { e.stopPropagation(); remove(item.id); }} style={{ background: "none", border: "none", cursor: "pointer", color: "#EF4444", opacity: 0.6 }}>
                  <Trash2 size={14} />
                </button>
                {expanded === item.id ? <ChevronUp size={16} color="#64748b" /> : <ChevronDown size={16} color="#64748b" />}
              </div>
            </div>
            {expanded === item.id && (
              <div style={{ padding: "0 1.25rem 1.25rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                <Field label="Name" value={item.name} onChange={v => update(item.id, "name", v)} />
                <Field label="Country (with flag emoji)" value={item.country} onChange={v => update(item.id, "country", v)} />
                <Field label="Job Title" value={item.role} onChange={v => update(item.id, "role", v)} />
                <Field label="Company" value={item.company} onChange={v => update(item.id, "company", v)} />
                <div>
                  <label style={labelStyle}>Rating</label>
                  <select value={item.rating} onChange={e => update(item.id, "rating", parseInt(e.target.value))} style={inputStyle}>
                    {[5, 4, 3].map(r => <option key={r} value={r}>{r} Stars</option>)}
                  </select>
                </div>
                <div style={{ gridColumn: "1 / -1" }}>
                  <Field label="Review Text" value={item.text} onChange={v => update(item.id, "text", v)} multiline />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Small helpers ── */
const labelStyle: React.CSSProperties = { display: "block", color: "#64748b", fontSize: "0.78rem", fontWeight: 600, marginBottom: "5px", textTransform: "uppercase", letterSpacing: "0.05em" };
const inputStyle: React.CSSProperties = { width: "100%", padding: "0.7rem 0.85rem", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", color: "#f1f5f9", fontSize: "0.88rem", outline: "none", fontFamily: "inherit", boxSizing: "border-box" };

function Field({ label, value, onChange, multiline }: { label: string; value: string; onChange: (v: string) => void; multiline?: boolean }) {
  return (
    <div>
      <label style={labelStyle}>{label}</label>
      {multiline ? (
        <textarea value={value} onChange={e => onChange(e.target.value)} rows={3} style={{ ...inputStyle, resize: "vertical" }} />
      ) : (
        <input type="text" value={value} onChange={e => onChange(e.target.value)} style={inputStyle} />
      )}
    </div>
  );
}

/* ── Settings Panel ── */
function SettingsPanel() {
  const resetAll = () => {
    if (confirm("Reset all admin data to defaults? This cannot be undone.")) {
      localStorage.removeItem(PORTFOLIO_KEY);
      localStorage.removeItem(TESTIMONIALS_KEY);
      alert("Data reset to defaults. Refresh to see changes.");
    }
  };

  const exportData = () => {
    const data = {
      portfolio: loadPortfolio(),
      testimonials: loadTestimonials(),
      exported: new Date().toISOString(),
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "md-studio-data.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px", padding: "1.5rem" }}>
        <h3 style={{ color: "#f1f5f9", fontWeight: 700, marginBottom: "0.5rem" }}>Export Data</h3>
        <p style={{ color: "#64748b", fontSize: "0.88rem", marginBottom: "1rem" }}>Download all portfolio and testimonial data as JSON.</p>
        <button onClick={exportData} style={{ padding: "8px 20px", background: "rgba(37,99,235,0.15)", border: "1px solid rgba(37,99,235,0.3)", borderRadius: "8px", color: "#60A5FA", cursor: "pointer", fontFamily: "inherit", fontWeight: 500 }}>
          Export JSON
        </button>
      </div>
      <div style={{ background: "rgba(239,68,68,0.05)", border: "1px solid rgba(239,68,68,0.15)", borderRadius: "12px", padding: "1.5rem" }}>
        <h3 style={{ color: "#f1f5f9", fontWeight: 700, marginBottom: "0.5rem" }}>Reset Data</h3>
        <p style={{ color: "#64748b", fontSize: "0.88rem", marginBottom: "1rem" }}>Reset all portfolio and testimonials to default placeholder data.</p>
        <button onClick={resetAll} style={{ padding: "8px 20px", background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)", borderRadius: "8px", color: "#EF4444", cursor: "pointer", fontFamily: "inherit", fontWeight: 500 }}>
          Reset All Data
        </button>
      </div>
    </div>
  );
}

/* ── Main Admin Page ── */
export default function AdminPage() {
  const [authed, setAuthed] = useState(() => sessionStorage.getItem("md-admin-auth") === "1");
  const [tab, setTab] = useState<"portfolio" | "testimonials" | "settings">("portfolio");

  const login = () => {
    sessionStorage.setItem("md-admin-auth", "1");
    setAuthed(true);
  };

  const logout = () => {
    sessionStorage.removeItem("md-admin-auth");
    setAuthed(false);
  };

  if (!authed) return <LoginGate onLogin={login} />;

  const tabs = [
    { key: "portfolio" as const, label: "Portfolio", icon: Package },
    { key: "testimonials" as const, label: "Testimonials", icon: Star },
    { key: "settings" as const, label: "Settings", icon: Settings },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "#0a0f1e", fontFamily: "'Inter', system-ui, sans-serif" }}>
      {/* Top bar */}
      <header style={{ background: "#111827", borderBottom: "1px solid rgba(255,255,255,0.07)", padding: "0 1.5rem", height: "64px", display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 50 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <Logo />
          <span style={{ color: "rgba(255,255,255,0.25)", fontSize: "1rem" }}>|</span>
          <span style={{ color: "#60A5FA", fontSize: "0.85rem", fontWeight: 600 }}>Admin Panel</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <a href="/" style={{ display: "flex", alignItems: "center", gap: "5px", padding: "7px 14px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px", color: "#94a3b8", fontSize: "0.82rem", textDecoration: "none" }}>
            <Eye size={14} /> View Site
          </a>
          <button onClick={logout} style={{ display: "flex", alignItems: "center", gap: "5px", padding: "7px 14px", background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.15)", borderRadius: "8px", color: "#EF4444", fontSize: "0.82rem", cursor: "pointer", fontFamily: "inherit" }}>
            <LogOut size={14} /> Logout
          </button>
        </div>
      </header>

      <div style={{ maxWidth: "960px", margin: "0 auto", padding: "2rem 1.5rem" }}>
        {/* Tabs */}
        <div style={{ display: "flex", gap: "4px", background: "rgba(255,255,255,0.04)", borderRadius: "12px", padding: "4px", marginBottom: "2rem", width: "fit-content" }}>
          {tabs.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              style={{ display: "flex", alignItems: "center", gap: "6px", padding: "8px 18px", borderRadius: "9px", border: "none", cursor: "pointer", fontFamily: "inherit", fontWeight: 500, fontSize: "0.88rem", transition: "all 0.2s", background: tab === key ? "#1e293b" : "transparent", color: tab === key ? "#f1f5f9" : "#64748b" }}
            >
              <Icon size={15} /> {label}
            </button>
          ))}
        </div>

        {/* Content */}
        {tab === "portfolio" && <PortfolioEditor />}
        {tab === "testimonials" && <TestimonialsEditor />}
        {tab === "settings" && <SettingsPanel />}
      </div>
    </div>
  );
}
