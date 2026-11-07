import React, { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "outline" | "cyan" | "purple" | "emerald";
  size?: "sm" | "md";
}

export function Badge({
  className,
  variant = "default",
  size = "md",
  children,
  ...props
}: BadgeProps) {
  const variantStyles = {
    default: "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20",
    secondary: "bg-white/5 text-neutral-300 border border-white/10",
    outline: "border border-neutral-700 text-neutral-300 hover:border-neutral-500",
    cyan: "bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 shadow-[0_0_12px_rgba(6,182,212,0.15)]",
    purple: "bg-purple-500/15 text-purple-300 border border-purple-500/30 shadow-[0_0_12px_rgba(168,85,247,0.15)]",
    emerald: "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30",
  };

  const sizeStyles = {
    sm: "text-xs px-2 py-0.5 rounded-full font-medium tracking-wide",
    md: "text-xs px-3 py-1 rounded-full font-medium tracking-wide",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 transition-colors duration-200",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
