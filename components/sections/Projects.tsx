"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData } from "@/data/projects";
import { Project, ProjectCategory } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { TiltCard } from "@/components/animations/TiltCard";
import { Reveal } from "@/components/animations/Reveal";
import { ProjectModal } from "@/components/ui/ProjectModal";
import { GithubIcon } from "@/components/ui/Icons";
import {
  ExternalLink,
  ArrowRight,
  Code2,
  Eye,
} from "lucide-react";

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("All");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories: ProjectCategory[] = [
    "All",
    "Creative & 3D",
    "AI & Systems",
    "Full Stack",
    "Mobile & Cloud",
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === selectedCategory);

  return (
    <section id="projects" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-cyan-500/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <Reveal>
            <Badge variant="cyan">FEATURED WORK</Badge>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Selected projects that push{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                boundaries
              </span>
              .
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-base sm:text-lg text-neutral-400">
              A curated selection of production applications, creative 3D environments, and systems engineering triumphs.
            </p>
          </Reveal>
        </div>

        {/* Filter categories */}
        <Reveal delay={0.3}>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
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

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {filteredProjects.map((project) => (
              <TiltCard
                key={project.id}
                maxTilt={6}
                glowColor="rgba(6, 182, 212, 0.15)"
                className="h-full"
              >
                <div className="h-full rounded-3xl border border-white/10 bg-neutral-900/50 backdrop-blur-xl overflow-hidden hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl">
                  {/* Visual Preview / Header Thumbnail */}
                  <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 border-b border-white/5 flex items-center justify-center p-6">
                    {/* Abstract procedural background graphics */}
                    <div
                      className="absolute inset-0 opacity-25 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500"
                      style={{
                        background: `radial-gradient(circle at 50% 50%, ${project.featuredColor}44, transparent 75%)`,
                      }}
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:1.5rem_1.5rem]" />

                    {/* Central Icon / Graphic */}
                    <div className="relative z-10 text-center space-y-2">
                      <div
                        className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center border shadow-2xl transition-transform duration-300 group-hover:scale-110"
                        style={{
                          backgroundColor: `${project.featuredColor}15`,
                          borderColor: `${project.featuredColor}55`,
                          color: project.featuredColor,
                        }}
                      >
                        <Code2 className="w-8 h-8" />
                      </div>
                      <span className="text-xs font-mono text-neutral-400 block tracking-wider">
                        {project.tagline}
                      </span>
                    </div>

                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 flex gap-2 z-10">
                      <Badge variant="cyan" size="sm">
                        {project.category}
                      </Badge>
                      {project.featured && (
                        <Badge variant="purple" size="sm">
                          Featured
                        </Badge>
                      )}
                    </div>

                    <div className="absolute top-4 right-4 z-10">
                      <span className="text-[11px] font-mono text-neutral-400 bg-black/60 px-2 py-0.5 rounded-full border border-white/10">
                        {project.year}
                      </span>
                    </div>

                    {/* Hover Quick View Trigger */}
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="absolute inset-0 z-20 bg-black/60 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white font-medium text-xs cursor-pointer"
                    >
                      <span className="px-4 py-2 rounded-full bg-cyan-500 text-neutral-950 font-semibold flex items-center gap-1.5 shadow-[0_0_15px_rgba(6,182,212,0.6)]">
                        <Eye className="w-4 h-4" /> Inspect Architecture
                      </span>
                    </button>
                  </div>

                  {/* Body Info */}
                  <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-400 line-clamp-3 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="space-y-3 pt-2">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.slice(0, 4).map((tag) => (
                          <Badge key={tag} variant="secondary" size="sm">
                            {tag}
                          </Badge>
                        ))}
                        {project.tags.length > 4 && (
                          <span className="text-[10px] text-neutral-500 self-center">
                            +{project.tags.length - 4} more
                          </span>
                        )}
                      </div>

                      {/* Footer Actions */}
                      <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                        <button
                          onClick={() => setActiveModalProject(project)}
                          className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 cursor-pointer transition-colors"
                        >
                          View Details <ArrowRight className="w-3.5 h-3.5" />
                        </button>

                        <div className="flex items-center gap-2">
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors"
                              aria-label="GitHub Repository"
                            >
                              <GithubIcon className="w-4 h-4" />
                            </a>
                          )}
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 hover:text-cyan-300 transition-colors"
                              aria-label="Live Demo"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
