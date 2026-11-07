"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/types";
import { X, ExternalLink, CheckCircle2, Layers, Calendar } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { Badge } from "./Badge";
import { Button } from "./Button";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/15 bg-neutral-950/95 p-6 sm:p-8 md:p-10 shadow-2xl z-10 custom-scrollbar"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="space-y-3 pr-8">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="cyan">{project.category}</Badge>
                {project.featured && <Badge variant="purple">Featured Project</Badge>}
                <span className="text-xs text-neutral-400 flex items-center gap-1 ml-auto">
                  <Calendar className="w-3.5 h-3.5" /> {project.year}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                {project.title}
              </h2>
              <p className="text-sm sm:text-base text-cyan-400 font-medium">
                {project.tagline}
              </p>
            </div>

            {/* Meta info */}
            <div className="my-6 grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-neutral-900/60 border border-white/5 text-xs">
              <div>
                <p className="text-neutral-500 font-medium">Role</p>
                <p className="text-neutral-200 font-semibold mt-0.5">{project.role}</p>
              </div>
              <div>
                <p className="text-neutral-500 font-medium">Timeline</p>
                <p className="text-neutral-200 font-semibold mt-0.5">{project.year}</p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="text-neutral-500 font-medium">Primary Focus</p>
                <p className="text-neutral-200 font-semibold mt-0.5">{project.category}</p>
              </div>
            </div>

            {/* Detailed Description */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-300">
                Project Overview
              </h4>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                {project.longDescription || project.description}
              </p>
            </div>

            {/* Metrics */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="mt-8 space-y-3">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-300">
                  Key Metrics & Impact
                </h4>
                <div className="grid grid-cols-3 gap-3">
                  {project.metrics.map((metric, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-xl bg-cyan-950/20 border border-cyan-800/30 text-center"
                    >
                      <p className="text-lg sm:text-2xl font-bold text-cyan-300">
                        {metric.value}
                      </p>
                      <p className="text-xs text-neutral-400 mt-1">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Architecture Highlights */}
            {project.architectureHighlights && (
              <div className="mt-8 space-y-3">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-300 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-cyan-400" /> Architecture & Engineering Highlights
                </h4>
                <ul className="space-y-2">
                  {project.architectureHighlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack */}
            <div className="mt-8 space-y-3">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-300">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="primary" size="sm">
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </Button>
                  </a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="secondary" size="sm">
                      <GithubIcon className="w-4 h-4" /> View Code
                    </Button>
                  </a>
                )}
              </div>
              <Button variant="ghost" size="sm" onClick={onClose}>
                Close
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
