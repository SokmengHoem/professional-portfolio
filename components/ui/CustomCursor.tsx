"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  const cursorX = useSpring(0, { damping: 25, stiffness: 250 });
  const cursorY = useSpring(0, { damping: 25, stiffness: 250 });

  const dotX = useSpring(0, { damping: 40, stiffness: 450 });
  const dotY = useSpring(0, { damping: 40, stiffness: 450 });

  useEffect(() => {
    // Only enable on fine pointer devices (desktop mouse)
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      dotX.set(e.clientX - 3);
      dotY.set(e.clientY - 3);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (
        target?.closest("button") ||
        target?.closest("a") ||
        target?.closest("input") ||
        target?.closest("textarea") ||
        target?.getAttribute("role") === "button"
      ) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY, dotX, dotY, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block">
      {/* Outer subtle glow ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-cyan-400/50 bg-cyan-400/10 pointer-events-none"
        style={{
          x: cursorX,
          y: cursorY,
          width: isPointer ? 48 : 32,
          height: isPointer ? 48 : 32,
          transition: "width 0.2s ease-out, height 0.2s ease-out, background-color 0.2s ease-out",
        }}
      />
      {/* Inner precise dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-cyan-300 pointer-events-none shadow-[0_0_8px_rgba(6,182,212,0.8)]"
        style={{
          x: dotX,
          y: dotY,
        }}
      />
    </div>
  );
}
