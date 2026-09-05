"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function FloemaCursor() {
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only enable on fine pointer (mouse)
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Check hovered element for data-cursor attribute
      const target = e.target as HTMLElement | null;
      const cursorTarget = target?.closest("[data-cursor]") as HTMLElement | null;

      if (cursorTarget) {
        const text = cursorTarget.getAttribute("data-cursor") || "VIEW";
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
          scale: isHovered ? 1 : 0.6,
          backgroundColor: isHovered ? "#E9E778" : "#241F21",
          color: "#241F21",
          borderRadius: isHovered ? 9999 : 9999,
          paddingLeft: isHovered ? 16 : 6,
          paddingRight: isHovered ? 16 : 6,
          paddingTop: isHovered ? 8 : 6,
          paddingBottom: isHovered ? 8 : 6,
          boxShadow: isHovered
            ? "0 12px 30px rgba(36, 31, 33, 0.25)"
            : "0 0 0 rgba(0,0,0,0)",
        }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
        className="flex items-center justify-center font-mono text-[11px] font-bold uppercase tracking-wider select-none overflow-hidden"
      >
        {isHovered && <span>{cursorText}</span>}
      </motion.div>
    </motion.div>
  );
}
