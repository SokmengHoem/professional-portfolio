"use client";

import { motion } from "framer-motion";
import { HeroSceneDynamic } from "@/components/three/HeroSceneWrapper";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { socialLinks } from "@/data/social-links";
import { ArrowRight, Sparkles, Mail, Code2, Layers, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/ui/Icons";
import { Reveal } from "@/components/animations/Reveal";

export function Hero() {
  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case "Github":
        return <GithubIcon className="w-4 h-4" />;
      case "Linkedin":
        return <LinkedinIcon className="w-4 h-4" />;
      case "Twitter":
        return <TwitterIcon className="w-4 h-4" />;
      case "Mail":
        return <Mail className="w-4 h-4" />;
      default:
        return <Sparkles className="w-4 h-4" />;
    }
  };

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 md:py-32 flex items-center justify-center overflow-hidden"
    >
      {/* Background ambient radial gradients & grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(14,165,233,0.15),rgba(255,255,255,0))] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Subtle floating glow spheres */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-purple-500/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Copy & Actions */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Super Header / Greeting */}
            <Reveal delay={0.1}>
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 text-xs sm:text-sm font-medium tracking-wide">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span>HELLO, I&apos;M A SENIOR CREATIVE DEVELOPER</span>
              </div>
            </Reveal>

            {/* Main Title Heading */}
            <Reveal delay={0.2}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
                Building Digital{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                  Experiences
                </span>{" "}
                That Matter.
              </h1>
            </Reveal>

            {/* Sub-headline description */}
            <Reveal delay={0.3}>
              <p className="text-base sm:text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                I specialize in crafting cutting-edge web applications, interactive 3D WebGL interfaces, and resilient high-performance cloud architectures. Bringing top-tier creative agency polish to enterprise engineering.
              </p>
            </Reveal>

            {/* Call to Action Buttons */}
            <Reveal delay={0.4}>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => handleScrollTo("projects")}
                  className="font-semibold"
                >
                  View My Projects <ArrowRight className="w-4 h-4" />
                </Button>

                <Button
                  variant="glass"
                  size="lg"
                  onClick={() => handleScrollTo("contact")}
                >
                  Contact Me
                </Button>

                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollTo("contact");
                  }}
                  className="hidden sm:inline-flex"
                >
                  <Button variant="ghost" size="lg" className="text-neutral-400 hover:text-white">
                    <Download className="w-4 h-4" /> Start Collaboration
                  </Button>
                </a>
              </div>
            </Reveal>

            {/* Social Links & Trust Badges */}
            <Reveal delay={0.5}>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 border-t border-white/[0.08]">
                <div className="flex items-center gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-neutral-400 hover:text-cyan-300 hover:border-cyan-500/40 hover:bg-white/10 transition-all duration-200"
                      aria-label={social.name}
                    >
                      {getSocialIcon(social.icon)}
                    </a>
                  ))}
                </div>

                <div className="hidden sm:block h-5 w-px bg-white/10" />

                <div className="flex items-center gap-2 text-xs text-neutral-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                  <span>Available for high-impact contracts & advisory</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Interactive 3D Canvas Scene */}
          <div className="lg:col-span-5 relative w-full h-[400px] sm:h-[480px] lg:h-[580px] flex items-center justify-center">
            {/* Interactive 3D Canvas */}
            <div className="w-full h-full relative">
              <HeroSceneDynamic />

              {/* Floating feature pills around 3D canvas */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute top-6 left-2 sm:left-4 z-20 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-neutral-900/80 backdrop-blur-md border border-cyan-500/30 shadow-[0_4px_20px_rgba(6,182,212,0.2)] text-xs text-cyan-300"
              >
                <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Next.js 16 + React 19</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.6 }}
                className="absolute bottom-8 right-2 sm:right-4 z-20 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-neutral-900/80 backdrop-blur-md border border-purple-500/30 shadow-[0_4px_20px_rgba(168,85,247,0.2)] text-xs text-purple-300"
              >
                <Layers className="w-3.5 h-3.5 text-purple-400" />
                <span>Interactive WebGL 3D</span>
              </motion.div>

              {/* Interaction Hint */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[11px] text-neutral-500 tracking-wider uppercase pointer-events-none">
                Drag to rotate 3D mesh
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
