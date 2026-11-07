"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
}

export function Reveal({
  children,
  width = "100%",
  delay = 0.1,
  duration = 0.5,
  direction = "up",
  className = "",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { y: 35, opacity: 0 };
      case "down":
        return { y: -35, opacity: 0 };
      case "left":
        return { x: 35, opacity: 0 };
      case "right":
        return { x: -35, opacity: 0 };
      case "none":
        return { opacity: 0 };
    }
  };

  return (
    <div ref={ref} style={{ width }} className={className}>
      <motion.div
        variants={{
          hidden: getInitialPosition(),
          visible: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
              duration,
              delay,
              ease: [0.25, 0.1, 0.25, 1.0],
            },
          },
        }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {children}
      </motion.div>
    </div>
  );
}
