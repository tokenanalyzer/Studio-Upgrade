"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export default function AboutStory() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-slate-50/50">
      <div className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-sm font-semibold text-accent-600 uppercase tracking-widest mb-4">
                Our Story
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                From Passion to{" "}
                <span className="text-gradient">Excellence</span>
              </h2>
              <div className="space-y-4 text-slate-500 leading-relaxed">
                <p>
                  Founded with a vision to bridge the gap between beautiful design
                  and powerful technology, M.D Studio has grown from a one-person
                  operation into an award-winning digital studio.
                </p>
                <p>
                  We believe that great digital products are born from the
                  intersection of user-centered design, clean code, and strategic
                  thinking. Every project we take on is an opportunity to push
                  boundaries and deliver something extraordinary.
                </p>
                <p>
                  Our team of designers, developers, and strategists work
                  collaboratively to ensure every detail is perfect — from the
                  first pixel to the final deployment.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden glass-card">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                  alt="M.D Studio Team"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
