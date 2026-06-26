"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Mail, ArrowUp } from "lucide-react";

export default function FloatingButtons() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed right-4 lg:right-8 bottom-4 lg:bottom-8 z-40 flex flex-col gap-3">
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToTop}
            className="w-12 h-12 bg-white border border-slate-200 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:border-accent-300 transition-all duration-300 group"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5 text-slate-500 group-hover:text-accent-600 transition-colors" />
          </motion.button>
        )}
      </AnimatePresence>

      <motion.a
        href="mailto:hello@mdstudio.com"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.3 }}
        className="w-12 h-12 bg-white border border-slate-200 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:border-accent-300 transition-all duration-300 group"
        aria-label="Send email"
      >
        <Mail className="w-5 h-5 text-slate-500 group-hover:text-accent-600 transition-colors" />
      </motion.a>

      <motion.a
        href="https://wa.me/15551234567"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.3 }}
        className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:bg-emerald-600 transition-all duration-300 group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 text-white" />
      </motion.a>
    </div>
  );
}
