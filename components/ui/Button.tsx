"use client";

import React, { ButtonHTMLAttributes, forwardRef } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "glass" | "gradient";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  glow?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      glow = false,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "relative inline-flex items-center justify-center font-medium transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950";

    const variantStyles = {
      primary:
        "bg-cyan-500 text-neutral-950 hover:bg-cyan-400 active:scale-[0.98] font-semibold shadow-[0_0_20px_rgba(6,182,212,0.35)] hover:shadow-[0_0_28px_rgba(6,182,212,0.55)]",
      secondary:
        "bg-neutral-900 text-white hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 active:scale-[0.98]",
      outline:
        "border border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 active:scale-[0.98]",
      ghost:
        "text-neutral-300 hover:text-white hover:bg-white/5 active:scale-[0.98]",
      glass:
        "backdrop-blur-md bg-white/[0.07] border border-white/10 text-white hover:bg-white/[0.12] hover:border-white/20 active:scale-[0.98] shadow-lg",
      gradient:
        "bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 text-white font-semibold hover:opacity-95 shadow-[0_0_24px_rgba(6,182,212,0.4)] active:scale-[0.98]",
    };

    const sizeStyles = {
      sm: "h-9 px-3.5 text-xs rounded-lg gap-1.5",
      md: "h-11 px-5 text-sm rounded-xl gap-2",
      lg: "h-13 px-7 text-base rounded-xl gap-2.5",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          glow && "animate-pulse",
          className
        )}
        {...props}
      >
        {isLoading && <Loader2 className="w-4 h-4 animate-spin text-current" />}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
