import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What services does MD Studio offer?",
    a: "We offer full-stack web development, web applications, Android & iOS mobile apps, AI agents, automation systems, CRM development, dashboard development, SaaS platforms, API integrations, cloud solutions, UI/UX design, AI integration, and business automation — everything a modern software product needs.",
  },
  {
    q: "How long does a project typically take?",
    a: "Timeline depends on scope. Simple websites: 2–4 weeks. Web applications: 4–12 weeks. Complex AI/SaaS products: 3–6 months. We provide a precise estimate after the discovery session and stick to it with weekly milestone updates.",
  },
  {
    q: "What is your development process?",
    a: "We follow a 6-phase process: Discovery → Planning → Design → Development → Deployment → Support. Every phase has clear deliverables, and you receive weekly progress updates throughout development.",
  },
  {
    q: "What technologies do you use?",
    a: "React, Next.js, TypeScript, Node.js, Python, FastAPI, PostgreSQL, MongoDB, Supabase, React Native, Expo, OpenAI, LangChain, AWS, Docker, Vercel, and GitHub Actions. We choose the stack that best fits your project's requirements and scale.",
  },
  {
    q: "Do you work with international clients?",
    a: "Absolutely. We work with clients across India, US, UK, UAE, Canada, and Australia. Communication happens via email, Zoom, WhatsApp, or Slack — whichever works for you. Payments accepted via UPI, bank transfer, and international gateways.",
  },
  {
    q: "What is your pricing model?",
    a: "Pricing is project-based or on a monthly retainer. Simple websites start from ₹15,000. Web applications from ₹50,000. AI products and SaaS platforms are priced based on complexity. Contact us for a free, detailed quote with no obligation.",
  },
  {
    q: "Do you offer post-launch support?",
    a: "Yes — every project includes 30 days of free post-launch support. Beyond that, we offer monthly retainers for ongoing maintenance, feature additions, performance optimization, and monitoring.",
  },
  {
    q: "Can you take over an existing codebase?",
    a: "Yes. We regularly take over existing projects — whether it's a legacy codebase that needs modernization, an app that needs new features, or a product that needs performance fixes. We start with a technical audit.",
  },
  {
    q: "How do I get started?",
    a: "Simple: reach out via the contact form below, send a WhatsApp message to +91 9967873413, or email adilhusain3176@gmail.com. We'll schedule a free 30-minute discovery call to understand your requirements and provide a proposal within 24 hours.",
  },
];

function FAQItem({ item, open, onToggle }: { item: typeof faqs[0]; open: boolean; onToggle: () => void }) {
  return (
    <div style={{
      border: "1px solid",
      borderColor: open ? "#BFDBFE" : "#E2E8F0",
      borderRadius: "1rem",
      overflow: "hidden",
      transition: "border-color 0.25s",
      background: open ? "rgba(239,246,255,0.5)" : "white",
    }}>
      <button
        onClick={onToggle}
        style={{
          width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "1.1rem 1.4rem", background: "none", border: "none", cursor: "pointer",
          textAlign: "left", gap: "1rem", fontFamily: "inherit",
        }}
      >
        <span style={{ fontSize: "0.95rem", fontWeight: 600, color: "#0f172a", lineHeight: 1.4 }}>
          {item.q}
        </span>
        <ChevronDown
          size={20}
          style={{ color: "#2563EB", flexShrink: 0, transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s ease" }}
        />
      </button>
      <div style={{
        maxHeight: open ? "300px" : "0",
        overflow: "hidden",
        transition: "max-height 0.35s cubic-bezier(0.4,0,0.2,1)",
      }}>
        <p style={{ padding: "0 1.4rem 1.2rem", fontSize: "0.9rem", color: "#475569", lineHeight: 1.75, margin: 0 }}>
          {item.a}
        </p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.08 }
    );
    sectionRef.current?.querySelectorAll(".animate-on-scroll")?.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="faq" ref={sectionRef} className="section-block" style={{ background: "#f8faff", position: "relative" }}>
      <div className="section-padding">
        <div className="container-wide">
          <div className="animate-on-scroll" style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <div className="section-label" style={{ justifyContent: "center" }}>
              <span>❓</span> FAQ
            </div>
            <h2 style={{ fontSize: "clamp(1.9rem, 3.5vw, 3rem)", fontWeight: 800, color: "#0f172a", marginBottom: "0.85rem", letterSpacing: "-0.03em" }}>
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p style={{ fontSize: "clamp(0.95rem, 1.1vw, 1.05rem)", color: "#64748B", maxWidth: "38rem", margin: "0 auto", lineHeight: 1.72 }}>
              Everything you need to know before starting your project. Still have questions? Just reach out.
            </p>
          </div>

          <div style={{ maxWidth: "56rem", margin: "0 auto", display: "flex", flexDirection: "column", gap: "0.6rem" }} className="animate-on-scroll">
            {faqs.map((item, i) => (
              <FAQItem
                key={i}
                item={item}
                open={open === i}
                onToggle={() => setOpen(open === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
