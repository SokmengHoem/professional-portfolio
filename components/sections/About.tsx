"use client";

import { motion } from "framer-motion";
import { statsData } from "@/data/social-links";
import { Reveal } from "@/components/animations/Reveal";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { TiltCard } from "@/components/animations/TiltCard";
import {
  Code2,
  Terminal,
  Cpu,
  Sparkles,
  Zap,
  Globe2,
  CheckCircle2,
  Layers,
  Award,
} from "lucide-react";

export function About() {
  const philosophies = [
    {
      icon: Sparkles,
      title: "Art Meets Engineering",
      desc: "Pixel-perfection and fluid physics-based micro-interactions that elevate users from passive viewers to active participants.",
    },
    {
      icon: Zap,
      title: "Zero-Compromise Performance",
      desc: "Sub-second load times, 60+ FPS rendering pipelines, and rigorous Core Web Vitals optimization across all devices.",
    },
    {
      icon: Layers,
      title: "Architectural Durability",
      desc: "Clean modular architectures, strict TypeScript typing, decoupled systems, and automated test coverage that scales effortlessly.",
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <Reveal>
            <Badge variant="cyan">ABOUT ME</Badge>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Driven by curiosity, executed with{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                precision
              </span>
              .
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-base sm:text-lg text-neutral-400">
              Merging deep technical mastery with creative intuition to build software that users love and engineering teams trust.
            </p>
          </Reveal>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          {/* Left Column: Interactive Developer Profile Card */}
          <div className="lg:col-span-5">
            <Reveal delay={0.2} direction="right">
              <TiltCard maxTilt={8} glowColor="rgba(6, 182, 212, 0.2)">
                <div className="rounded-3xl border border-white/10 bg-neutral-900/70 backdrop-blur-2xl p-6 sm:p-8 shadow-2xl space-y-6 relative overflow-hidden">
                  {/* Subtle terminal-like top bar */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <span className="text-xs font-mono text-neutral-500">
                      sokmeng@terminal ~ profile.sh
                    </span>
                  </div>

                  {/* Profile Summary */}
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500 via-sky-500 to-indigo-600 p-[2px] shadow-lg">
                      <div className="w-full h-full rounded-[14px] bg-neutral-950 flex items-center justify-center text-white font-bold text-xl">
                        SH
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">Sokmeng Hoem</h3>
                      <p className="text-xs text-cyan-400 font-mono">Senior Creative Technologist</p>
                      <p className="text-xs text-neutral-400 mt-0.5">Based in San Francisco / Remote</p>
                    </div>
                  </div>

                  {/* Code snippet quote */}
                  <div className="rounded-xl bg-neutral-950/80 p-4 border border-white/5 font-mono text-xs text-neutral-300 space-y-1.5 overflow-x-auto">
                    <p className="text-cyan-400">// Core Philosophy</p>
                    <p>
                      <span className="text-purple-400">const</span> developer = {"{"}
                    </p>
                    <p className="pl-4">
                      mindset: <span className="text-amber-300">&quot;Craftsmanship&quot;</span>,
                    </p>
                    <p className="pl-4">
                      obsession: <span className="text-emerald-300">&quot;Fluid UX & 60 FPS&quot;</span>,
                    </p>
                    <p className="pl-4">
                      architecture: <span className="text-sky-300">&quot;Resilient & Type-safe&quot;</span>,
                    </p>
                    <p>{"};"}</p>
                  </div>

                  {/* Tech pill highlights */}
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                      Specializations
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {["Next.js", "TypeScript", "Three.js", "WebGL / GLSL", "Tailwind CSS", "Go", "Docker"].map(
                        (tag) => (
                          <Badge key={tag} variant="secondary" size="sm">
                            {tag}
                          </Badge>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-7 space-y-6">
            <Reveal delay={0.3}>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Designing experiences that bridge imagination and real-world scale.
              </h3>
            </Reveal>

            <Reveal delay={0.4}>
              <p className="text-neutral-300 leading-relaxed text-sm sm:text-base">
                Over the past 7+ years, I have worked at the intersection of creative frontend engineering, design systems, and distributed cloud computing. I believe exceptional software shouldn&apos;t just function flawlessly under heavy traffic—it should evoke delight and confidence at every user touchpoint.
              </p>
            </Reveal>

            <Reveal delay={0.5}>
              <p className="text-neutral-400 leading-relaxed text-sm sm:text-base">
                Whether orchestrating complex WebGL shaders for interactive 3D product visualizers or architecting event-driven microservices processing millions of daily events, I approach every project with uncompromising standards for maintainability, accessibility, and visual elegance.
              </p>
            </Reveal>

            {/* Philosophy cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {philosophies.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <Reveal key={item.title} delay={0.5 + idx * 0.1}>
                    <div className="p-4 rounded-2xl bg-neutral-900/40 border border-white/5 hover:border-cyan-500/30 transition-all duration-300 space-y-2 h-full">
                      <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-semibold text-white">{item.title}</h4>
                      <p className="text-xs text-neutral-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>

        {/* Animated Statistics Counters */}
        <Reveal delay={0.4}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 p-6 sm:p-8 rounded-3xl bg-neutral-900/50 backdrop-blur-xl border border-white/10 shadow-xl">
            {statsData.map((stat, idx) => (
              <div key={idx} className="text-center space-y-1">
                <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
                  {stat.value}
                  <span className="text-cyan-400">{stat.suffix}</span>
                </p>
                <p className="text-xs sm:text-sm font-medium text-neutral-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
