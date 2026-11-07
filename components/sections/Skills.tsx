"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillsData } from "@/data/skills";
import { SkillCategory } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/animations/Reveal";
import { TiltCard } from "@/components/animations/TiltCard";
import {
  Layout,
  Code2,
  Palette,
  Cpu,
  Server,
  Terminal,
  Binary,
  Network,
  Database,
  Zap,
  Layers,
  Table,
  Box,
  Compass,
  Cloud,
  GitBranch,
  Sparkles,
  Gauge,
  Wind,
  Activity,
  GitMerge,
  ShieldCheck,
  FolderGit2,
} from "lucide-react";

export function Skills() {
  const categories: SkillCategory[] = [
    "Frontend",
    "Backend",
    "Creative & 3D",
    "Database",
    "DevOps & Cloud",
    "Architecture & Tools",
  ];

  const [activeCategory, setActiveCategory] = useState<SkillCategory>("Frontend");

  const getIcon = (name: string) => {
    switch (name) {
      case "Layout":
        return <Layout className="w-5 h-5" />;
      case "Code2":
        return <Code2 className="w-5 h-5" />;
      case "Palette":
        return <Palette className="w-5 h-5" />;
      case "Cpu":
        return <Cpu className="w-5 h-5" />;
      case "Server":
        return <Server className="w-5 h-5" />;
      case "Terminal":
        return <Terminal className="w-5 h-5" />;
      case "Binary":
        return <Binary className="w-5 h-5" />;
      case "Network":
        return <Network className="w-5 h-5" />;
      case "Database":
        return <Database className="w-5 h-5" />;
      case "Zap":
        return <Zap className="w-5 h-5" />;
      case "Layers":
        return <Layers className="w-5 h-5" />;
      case "Table":
        return <Table className="w-5 h-5" />;
      case "Box":
        return <Box className="w-5 h-5" />;
      case "Compass":
        return <Compass className="w-5 h-5" />;
      case "Cloud":
        return <Cloud className="w-5 h-5" />;
      case "GitBranch":
        return <GitBranch className="w-5 h-5" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5" />;
      case "Gauge":
        return <Gauge className="w-5 h-5" />;
      case "Wind":
        return <Wind className="w-5 h-5" />;
      case "Activity":
        return <Activity className="w-5 h-5" />;
      case "GitMerge":
        return <GitMerge className="w-5 h-5" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-5 h-5" />;
      case "FolderGit2":
        return <FolderGit2 className="w-5 h-5" />;
      default:
        return <Code2 className="w-5 h-5" />;
    }
  };

  const filteredSkills = skillsData.filter(
    (skill) => skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-purple-500/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <Reveal>
            <Badge variant="cyan">TECHNICAL CAPABILITIES</Badge>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              A modern, battle-tested{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                technology stack
              </span>
              .
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-base sm:text-lg text-neutral-400">
              From creative WebGL shaders and smooth 60 FPS interfaces to scalable distributed backend systems and zero-trust cloud infrastructure.
            </p>
          </Reveal>
        </div>

        {/* Category Filter Tabs */}
        <Reveal delay={0.3}>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-cyan-500 text-neutral-950 shadow-[0_0_20px_rgba(6,182,212,0.4)] font-semibold scale-105"
                      : "bg-neutral-900/60 hover:bg-neutral-800 text-neutral-300 border border-white/5 hover:border-white/15"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Skills Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {filteredSkills.map((skill, index) => (
              <TiltCard
                key={skill.name}
                maxTilt={8}
                glowColor="rgba(6, 182, 212, 0.12)"
                className="h-full"
              >
                <div className="h-full rounded-2xl border border-white/10 bg-neutral-900/50 backdrop-blur-xl p-5 hover:border-cyan-500/40 hover:bg-neutral-900/70 transition-all duration-300 flex flex-col justify-between group">
                  <div className="space-y-3">
                    {/* Header: Icon & Badge */}
                    <div className="flex items-start justify-between">
                      <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:scale-110 group-hover:bg-cyan-500/20 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300">
                        {getIcon(skill.iconName)}
                      </div>

                      {skill.badge ? (
                        <Badge variant="cyan" size="sm">
                          {skill.badge}
                        </Badge>
                      ) : (
                        <span className="text-[11px] font-mono text-neutral-500">
                          {skill.experience}
                        </span>
                      )}
                    </div>

                    {/* Skill Name */}
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {skill.name}
                      </h3>
                      {skill.description && (
                        <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                          {skill.description}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Proficiency Meter */}
                  <div className="pt-4 mt-3 border-t border-white/5 space-y-1.5">
                    <div className="flex justify-between items-center text-[11px]">
                      <span className="text-neutral-400 font-medium">Proficiency</span>
                      <span className="text-cyan-400 font-mono font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 w-full bg-neutral-800 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-cyan-500 to-sky-400 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.05 }}
                      />
                    </div>
                  </div>
                </div>
              </TiltCard>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
