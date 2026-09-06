"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function FloemaCursor() {
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 320, mass: 0.4 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      const cursorTarget = target?.closest("[data-cursor]") as HTMLElement | null;

      if (cursorTarget) {
        const text = cursorTarget.getAttribute("data-cursor") || "EXPLORE";
        setCursorText(text);
        setIsHovered(true);
      } else {
        setIsHovered(false);
        setCursorText("");
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      style={{
        x: smoothX,
        y: smoothY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center transition-opacity duration-300"
    >
      <motion.div
        animate={{
          scale: isHovered ? 1 : 0.8,
          backgroundColor: isHovered ? "rgba(213, 224, 255, 0.95)" : "#D5E0FF",
          boxShadow: isHovered
            ? "0 0 30px rgba(213, 224, 255, 0.6), 0 0 50px rgba(112, 153, 255, 0.4)"
            : "0 0 12px rgba(213, 224, 255, 0.8)",
        }}
        transition={{ type: "spring", damping: 22, stiffness: 320 }}
        className={`flex items-center justify-center font-mono text-[10px] font-bold uppercase tracking-wider select-none rounded-full text-[#020A19] ${
          isHovered ? "px-3.5 py-1.5" : "w-2.5 h-2.5"
        }`}
      >
        {isHovered && <span>{cursorText}</span>}
      </motion.div>
    </motion.div>
  );
}
