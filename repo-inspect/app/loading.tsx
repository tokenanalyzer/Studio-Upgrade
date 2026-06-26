"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center"
      >
        <div className="flex items-baseline gap-0.5 justify-center mb-4">
          <span className="text-3xl font-bold text-accent-600">M</span>
          <span className="text-3xl font-bold text-accent-600">D</span>
          <span className="text-3xl font-bold text-slate-900 ml-1">Studio</span>
        </div>
        <motion.div
          className="w-32 h-0.5 bg-slate-100 rounded-full mx-auto overflow-hidden"
        >
          <motion.div
            className="h-full bg-accent-600 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
