"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center opacity-60" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative w-9 h-9 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 flex items-center justify-center text-neutral-300 hover:text-white transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
      aria-label="Toggle Dark / Light Theme"
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-amber-300 transition-transform duration-300 hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 text-cyan-400 transition-transform duration-300 hover:-rotate-12" />
      )}
    </button>
  );
}
