import { useState, useEffect, useRef } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, TalentFlow",
    avatar: "SJ",
    bg: "#DBEAFE",
    color: "#2563EB",
    rating: 5,
    quote: "MD Studio delivered an enterprise-grade HR platform in 3 months that would have taken our in-house team a year. The quality, communication, and attention to detail were exceptional. Our team efficiency went up 4x.",
    company: "TalentFlow",
  },
  {
    name: "Marcus Rivera",
    role: "Founder & CEO, ShopSense",
    avatar: "MR",
    bg: "#D1FAE5",
    color: "#059669",
    rating: 5,
    quote: "From day one, they understood our vision. The e-commerce platform they built handles 50k+ products seamlessly. Revenue went up 130% in the first quarter after launch. Couldn't recommend them more highly.",
    company: "ShopSense",
  },
  {
    name: "Dr. Amina Hassan",
    role: "Head of Product, EduLearn",
    avatar: "AH",
    bg: "#FEF3C7",
    color: "#D97706",
    rating: 5,
    quote: "The AI-powered personalization they implemented transformed our learning outcomes. Completion rates jumped from 23% to 78%, and user retention is at an all-time high. A genuinely world-class team.",
    company: "EduLearn",
  },
  {
    name: "Liam O'Brien",
    role: "VP Engineering, FinSight",
    avatar: "LO",
    bg: "#F5F3FF",
    color: "#8B5CF6",
    rating: 5,
    quote: "Technical excellence combined with clear communication — rare combination. The analytics platform reduced our reporting time from days to minutes, with 97% accuracy. Worth every penny and more.",
    company: "FinSight Capital",
  },
  {
    name: "Chen Wei",
    role: "Operations Director, GreenPath",
    avatar: "CW",
    bg: "#FCE7F3",
    color: "#DB2777",
    rating: 5,
    quote: "MD Studio transformed our decade-old logistics operation in just 4 months. The mobile app and cloud platform they built now handle 3x our previous volume. Our fleet managers love it.",
    company: "GreenPath Logistics",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval>>();

  const navigate = (dir: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent((prev) => (prev + dir + testimonials.length) % testimonials.length);
      setIsAnimating(false);
    }, 250);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => navigate(1), 6000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const t = testimonials[current];
  const visibleDots = testimonials.map((_, i) => i);

  return (
    <section id="testimonials" style={{ padding: "6rem 0", background: "white" }}>
      <div className="section-padding">
        <div className="container-wide">
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              padding: "6px 16px", borderRadius: "999px",
              background: "#FDF2F8", border: "1px solid #FBCFE8",
              marginBottom: "1rem",
            }}>
              <span style={{ fontSize: "0.82rem", fontWeight: 600, color: "#DB2777", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                Testimonials
              </span>
            </div>
            <h2 style={{
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              fontWeight: 800, color: "#0f172a",
              letterSpacing: "-0.02em", marginBottom: "1rem",
            }}>
              Clients Who{" "}
              <span className="text-gradient">Trust Us</span>
            </h2>
          </div>

          {/* Carousel */}
          <div style={{ maxWidth: "900px", margin: "0 auto", position: "relative" }}>
            <div style={{
              background: "#F8FAFC",
              borderRadius: "1.5rem",
              padding: "clamp(1.5rem, 5vw, 3rem)",
              border: "1px solid #E2E8F0",
              transition: "opacity 0.25s ease",
              opacity: isAnimating ? 0 : 1,
              minHeight: "280px",
            }}>
              <Quote size={40} style={{ color: "#BFDBFE", marginBottom: "1.5rem" }} />

              {/* Stars */}
              <div style={{ display: "flex", gap: "4px", marginBottom: "1.5rem" }}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={18} style={{ fill: "#F59E0B", color: "#F59E0B" }} />
                ))}
              </div>

              {/* Quote */}
              <blockquote style={{
                fontSize: "clamp(1rem, 2vw, 1.2rem)",
                color: "#334155",
                lineHeight: 1.8,
                fontStyle: "italic",
                marginBottom: "2rem",
                fontWeight: 400,
              }}>
                "{t.quote}"
              </blockquote>

              {/* Author */}
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <div style={{
                  width: "52px", height: "52px", borderRadius: "50%",
                  background: t.bg, color: t.color,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "0.85rem", fontWeight: 700,
                  flexShrink: 0,
                }}>
                  {t.avatar}
                </div>
                <div>
                  <div style={{ fontSize: "1rem", fontWeight: 700, color: "#0f172a" }}>{t.name}</div>
                  <div style={{ fontSize: "0.875rem", color: "#64748B" }}>{t.role}</div>
                </div>
                <div style={{ marginLeft: "auto" }}>
                  <span style={{
                    padding: "5px 14px", borderRadius: "999px",
                    background: `${t.color}12`, color: t.color,
                    fontSize: "0.8rem", fontWeight: 600,
                  }}>
                    {t.company}
                  </span>
                </div>
              </div>
            </div>

            {/* Controls */}
            <div style={{
              display: "flex", alignItems: "center", justifyContent: "center",
              gap: "1.5rem", marginTop: "2rem",
            }}>
              <button
                onClick={() => navigate(-1)}
                style={{
                  width: "42px", height: "42px", borderRadius: "50%",
                  background: "white", border: "1px solid #E2E8F0",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  cursor: "pointer",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                  transition: "all 0.2s ease",
                }}
              >
                <ChevronLeft size={18} style={{ color: "#64748B" }} />
              </button>

              <div style={{ display: "flex", gap: "8px" }}>
                {visibleDots.map((i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    style={{
                      width: i === current ? "24px" : "8px",
                      height: "8px",
                      borderRadius: "999px",
                      background: i === current ? "#2563EB" : "#CBD5E1",
                      border: "none", cursor: "pointer",
                      transition: "all 0.3s ease",
                    }}
                  />
                ))}
              </div>

              <button
                onClick={() => navigate(1)}
                style={{
                  width: "42px", height: "42px", borderRadius: "50%",
                  background: "white", border: "1px solid #E2E8F0",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  cursor: "pointer",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                  transition: "all 0.2s ease",
                }}
              >
                <ChevronRight size={18} style={{ color: "#64748B" }} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
