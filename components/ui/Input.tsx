import React, { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", error, ...props }, ref) => {
    return (
      <div className="w-full">
        <input
          type={type}
          className={cn(
            "flex h-12 w-full rounded-xl border border-white/10 bg-neutral-900/60 backdrop-blur-md px-4 py-2 text-sm text-neutral-100 placeholder:text-neutral-500 transition-all duration-200 focus:border-cyan-500/80 focus:bg-neutral-900/90 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 disabled:cursor-not-allowed disabled:opacity-50",
            error && "border-red-500/80 focus:border-red-500 focus:ring-red-500/20",
            className
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <p className="mt-1.5 text-xs text-red-400 font-medium pl-1">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
