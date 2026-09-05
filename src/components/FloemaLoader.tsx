"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloemaLoader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 200);
          return 100;
        }
        return prev + 5;
      });
    }, 45);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
          className="fixed inset-0 z-[10000] pointer-events-none bg-[#020A19] flex flex-col items-center justify-center p-6"
        >
          {/* Central Flashing Geometric Matrix (Hubtown style) */}
          <div className="relative w-48 h-48 flex items-center justify-center">
            {/* Ambient Cyan Glow */}
            <div className="absolute inset-0 bg-[#7099FF]/20 rounded-full blur-2xl" />

            {/* Matrix Frame */}
            <div className="relative border border-[#D5E0FF]/20 p-6 rounded-2xl backdrop-blur-xl bg-[#D5E0FF]/5 flex flex-col items-center justify-center gap-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#D5E0FF] animate-ping" />
                <span className="w-2 h-2 bg-[#D5E0FF]" />
                <span className="w-2 h-2 bg-[#D5E0FF]" />
              </div>

              <div className="text-center font-mono">
                <div className="text-3xl font-bold tracking-tighter text-[#D5E0FF]">
                  {progress}%
                </div>
                <div className="text-[10px] text-[#D5E0FF]/60 uppercase tracking-widest mt-1">
                  CALIBRATING PRECISION
                </div>
              </div>

              {/* Progress Line */}
              <div className="w-32 h-1 bg-[#D5E0FF]/10 rounded-full overflow-hidden">
                <motion.div
                  style={{ width: `${progress}%` }}
                  className="h-full bg-[#D5E0FF] shadow-sm shadow-[#D5E0FF]"
                />
              </div>
            </div>
          </div>

          <div className="absolute bottom-10 font-mono text-[11px] text-[#D5E0FF]/50 uppercase tracking-widest text-center">
            SUCCESS ENGINEERING ENTERPRISES // SIDCO KAKKALUR // ISO 9001:2015
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
