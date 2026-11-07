"use client";

import { motion, Variants } from "framer-motion";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  gradient?: boolean;
}

export function TextReveal({
  text,
  className = "",
  delay = 0,
  as: Component = "h1",
  gradient = false,
}: TextRevealProps) {
  const words = text.split(" ");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: delay * i },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 18,
        stiffness: 120,
      },
    },
    hidden: {
      opacity: 0,
      y: 30,
      filter: "blur(6px)",
      transition: {
        type: "spring",
        damping: 18,
        stiffness: 120,
      },
    },
  };

  return (
    <Component className={className}>
      <motion.span
        className="inline-flex flex-wrap gap-x-2.5 overflow-hidden"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {words.map((word, index) => (
          <motion.span
            variants={child}
            key={index}
            className={`inline-block ${
              gradient
                ? "bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent"
                : ""
            }`}
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Component>
  );
}
