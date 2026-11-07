"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navItems } from "@/data/social-links";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Button } from "@/components/ui/Button";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { Menu, X, Sparkles, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollProgress = useScrollProgress();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Detect active section based on scroll position
      const sections = navItems.map((item) => item.href.replace("#", ""));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Top Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 h-[2.5px] z-50 bg-transparent">
        <motion.div
          className="h-full bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "py-3 bg-neutral-950/80 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="group flex items-center gap-3 cursor-pointer select-none"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 via-sky-500 to-indigo-600 p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
              <div className="w-full h-full bg-neutral-950 rounded-[10px] flex items-center justify-center font-bold text-white tracking-wider text-sm">
                AR
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                Alex Rivera
              </span>
              <span className="text-[11px] text-neutral-400 font-mono tracking-wider">
                Creative Dev / Systems
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 p-1.5 rounded-full bg-neutral-900/60 backdrop-blur-md border border-white/10 shadow-inner">
            {navItems.map((item) => {
              const targetId = item.href.replace("#", "");
              const isActive = activeSection === targetId;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-4 py-2 rounded-full text-xs font-medium transition-colors duration-200 cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? "text-white"
                      : "text-neutral-400 hover:text-neutral-200"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavBackground"
                      className="absolute inset-0 rounded-full bg-white/10 border border-white/10 shadow-[0_0_12px_rgba(255,255,255,0.05)]"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                  {item.badge && (
                    <span className="relative z-10 px-1.5 py-0.2 rounded-full text-[10px] bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                      {item.badge}
                    </span>
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
            >
              <Button variant="primary" size="sm" className="font-medium text-xs">
                Contact Me <ArrowRight className="w-3.5 h-3.5" />
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-neutral-900/80 border border-white/10 text-neutral-300 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden border-b border-white/10 bg-neutral-950/95 backdrop-blur-2xl overflow-hidden px-4 pt-3 pb-6"
            >
              <nav className="flex flex-col space-y-1">
                {navItems.map((item, idx) => {
                  const targetId = item.href.replace("#", "");
                  const isActive = activeSection === targetId;

                  return (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.04 }}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20"
                          : "text-neutral-300 hover:bg-white/5"
                      }`}
                    >
                      <span>{item.label}</span>
                      {item.badge && (
                        <Badge variant="cyan" size="sm">
                          {item.badge}
                        </Badge>
                      )}
                    </motion.a>
                  );
                })}
              </nav>

              <div className="mt-5 pt-4 border-t border-white/10">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="block"
                >
                  <Button variant="gradient" size="md" className="w-full">
                    Let&apos;s Build Together <ArrowRight className="w-4 h-4" />
                  </Button>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
