"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloemaLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
          className="fixed inset-0 z-[10000] pointer-events-none flex flex-col justify-start"
        >
          {/* Floema Signature Fluor-Yellow Top Loading Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
            className="w-full h-1.5 bg-[#E9E778] origin-left shadow-lg shadow-[#E9E778]/50"
          />

          {/* Minimalist Floema Curtain Background */}
          <motion.div
            initial={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
            className="w-full flex-1 bg-[#F2EFEA] origin-top flex items-center justify-center"
          >
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E9E778] animate-ping" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#241F21]">
                SUCCESS ENGINEERING® • KAKKALUR
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
