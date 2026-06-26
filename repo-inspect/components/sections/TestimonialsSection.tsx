"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { createBrowserClient } from "@/lib/supabase/client";

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
}

const fallbackTestimonials: Testimonial[] = [
  {
    id: "1",
    quote: "M.D Studio transformed our vision into a reality that exceeded every expectation. The attention to detail and technical excellence is unmatched.",
    author: "Sarah Mitchell", role: "CEO", company: "TechVenture Inc.",
  },
  {
    id: "2",
    quote: "Working with M.D Studio was a game-changer for our startup. The SaaS platform they built helped us secure our Series A funding.",
    author: "Marcus Chen", role: "Founder", company: "DataFlow Labs",
  },
  {
    id: "3",
    quote: "The level of craftsmanship in every pixel and line of code is extraordinary. M.D Studio delivers work that truly stands out.",
    author: "Elena Rodriguez", role: "Creative Director", company: "Bloom Agency",
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const supabase = createBrowserClient();
        const { data } = await supabase
          .from("testimonials")
          .select("*")
          .eq("published", true)
          .order("order", { ascending: true })
          .limit(3);

        setTestimonials(data || []);
      } catch {
        // Fallback
      }
    };

    fetchTestimonials();
  }, []);

  const displayTestimonials = testimonials.length > 0 ? testimonials : fallbackTestimonials;

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-50/30 rounded-full blur-3xl pointer-events-none" />

      <div className="section-padding relative z-10">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="inline-block text-sm font-semibold text-accent-600 uppercase tracking-widest mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              What Clients{" "}
              <span className="text-gradient">Say</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {displayTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative p-6 lg:p-8 glass-card card-glow-hover"
              >
                <Quote className="w-8 h-8 text-accent-200 mb-4" />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent-400 text-accent-400" />
                  ))}
                </div>
                <p className="text-slate-700 leading-relaxed mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent-50 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold text-accent-600">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900 text-sm">{testimonial.author}</p>
                    <p className="text-xs text-slate-500">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
