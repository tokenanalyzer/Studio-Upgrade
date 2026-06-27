import { useEffect, useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Mehta",
    role: "Founder, FinFlow",
    avatar: "👨‍💼",
    rating: 5,
    text: "Adil delivered our FinTech dashboard in 6 weeks — on time, on budget, and beyond expectations. The code quality is exceptional. We've since hired him for two more projects.",
  },
  {
    name: "Sarah Chen",
    role: "CTO, NovaSaaS",
    avatar: "👩‍💻",
    rating: 5,
    text: "Working with MD Studio was a game-changer. Adil built our entire SaaS platform from scratch — authentication, billing, multi-tenancy, analytics. Flawless execution.",
  },
  {
    name: "Priya Sharma",
    role: "Product Manager, HealthTech Inc.",
    avatar: "👩‍🔬",
    rating: 5,
    text: "Our patient portal app went from wireframes to App Store in 10 weeks. Adil's ability to handle both backend and mobile simultaneously is rare. Highly recommend.",
  },
  {
    name: "Marcus Williams",
    role: "CEO, AutomateHQ",
    avatar: "🧑‍💼",
    rating: 5,
    text: "The AI automation system Adil built saves our team 40+ hours per week. His understanding of LangChain and GPT-4 is elite. This is the future, and he's building it.",
  },
  {
    name: "Ananya Patel",
    role: "Founder, EduLeap",
    avatar: "👩‍🎓",
    rating: 5,
    text: "Our EdTech platform handles 10k+ students. Adil's architecture choices were spot-on — it's been running without issues for 8 months. True senior-level thinking.",
  },
  {
    name: "David Kim",
    role: "Head of Engineering, Logistics Co.",
    avatar: "👨‍🏭",
    rating: 5,
    text: "Adil took over our legacy codebase and modernized it in 3 months. Clear communication, clean commits, and zero surprises. That's rare in freelance development.",
  },
];

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.06 }
    );
    sectionRef.current?.querySelectorAll(".animate-on-scroll")?.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="testimonials" ref={sectionRef} className="section-block" style={{ background: "#f8faff", position: "relative", overflow: "hidden" }}>
      <style>{`
        .testimonial-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }
        @media (min-width: 640px)  { .testimonial-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .testimonial-grid { grid-template-columns: repeat(3, 1fr); } }
        .t-card {
          background: white;
          border: 1px solid #E2E8F0;
          border-radius: 1.25rem;
          padding: 1.6rem;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          transition: all 0.3s ease;
        }
        .t-card:hover { transform: translateY(-4px); box-shadow: 0 14px 40px -8px rgba(37,99,235,0.1); border-color: #BFDBFE; }
      `}</style>

      <div className="section-padding">
        <div className="container-wide">
          <div className="animate-on-scroll" style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="section-label" style={{ justifyContent: "center" }}>
              <span>💬</span> Testimonials
            </div>
            <h2 style={{ fontSize: "clamp(1.9rem, 3.5vw, 3rem)", fontWeight: 800, color: "#0f172a", marginBottom: "0.85rem", letterSpacing: "-0.03em" }}>
              What Clients Say About <span className="text-gradient">Working With Us</span>
            </h2>
            <div style={{ display: "flex", gap: "2px", justifyContent: "center", marginBottom: "0.5rem" }}>
              {[1,2,3,4,5].map(s => <Star key={s} size={20} fill="#F59E0B" color="#F59E0B" />)}
            </div>
            <p style={{ fontSize: "0.88rem", color: "#64748B" }}>5.0 average from 89+ client reviews</p>
          </div>

          <div className="testimonial-grid">
            {testimonials.map((t, i) => (
              <div key={t.name} className="t-card animate-on-scroll" style={{ transitionDelay: `${(i % 3) * 65}ms` }}>
                <Quote size={24} style={{ color: "#BFDBFE" }} />
                <p style={{ fontSize: "0.88rem", color: "#475569", lineHeight: 1.75, margin: 0 }}>"{t.text}"</p>
                <div style={{ display: "flex", gap: "1px", marginTop: "auto" }}>
                  {[1,2,3,4,5].map(s => <Star key={s} size={13} fill={s <= t.rating ? "#F59E0B" : "#E2E8F0"} color={s <= t.rating ? "#F59E0B" : "#E2E8F0"} />)}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", borderTop: "1px solid #F1F5F9", paddingTop: "0.85rem" }}>
                  <div style={{ width: "38px", height: "38px", borderRadius: "50%", background: "#EFF6FF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem", flexShrink: 0 }}>
                    {t.avatar}
                  </div>
                  <div>
                    <p style={{ fontSize: "0.85rem", fontWeight: 700, color: "#0f172a", margin: 0 }}>{t.name}</p>
                    <p style={{ fontSize: "0.75rem", color: "#94A3B8", margin: 0 }}>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
