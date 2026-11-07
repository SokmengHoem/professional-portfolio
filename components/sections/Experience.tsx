"use client";

import { experienceData } from "@/data/experience";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/animations/Reveal";
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Trophy,
  ArrowUpRight,
} from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <Reveal>
            <Badge variant="cyan">CAREER JOURNEY</Badge>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Work experience &{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                leadership
              </span>
              .
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-base sm:text-lg text-neutral-400">
              A track record of engineering innovation, design system architecture, and shipping high-value digital products.
            </p>
          </Reveal>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l border-white/10 ml-4 sm:ml-8 md:ml-12 pl-6 sm:pl-10 space-y-12">
          {experienceData.map((item, index) => (
            <div key={item.id} className="relative group">
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full border-2 border-cyan-400 bg-neutral-950 shadow-[0_0_12px_rgba(6,182,212,0.8)] group-hover:scale-125 transition-transform duration-300" />

              <Reveal delay={0.1 * index}>
                <div className="rounded-3xl border border-white/10 bg-neutral-900/40 backdrop-blur-xl p-6 sm:p-8 hover:border-cyan-500/40 hover:bg-neutral-900/60 transition-all duration-300 shadow-xl space-y-5">
                  {/* Header: Company & Role */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/5 pb-4">
                    <div>
                      <div className="flex items-center gap-2.5">
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {item.role}
                        </h3>
                        {item.badge && (
                          <Badge variant="cyan" size="sm">
                            {item.badge}
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm font-semibold text-cyan-400 mt-1">
                        {item.company}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-400 font-mono">
                      <span className="flex items-center gap-1 bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                        <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                        {item.period}
                      </span>
                      <span className="flex items-center gap-1 bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                        <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Responsibilities */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                      Core Responsibilities
                    </h4>
                    <ul className="space-y-2">
                      {item.responsibilities.map((resp, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300"
                        >
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Achievements */}
                  {item.keyAchievements && item.keyAchievements.length > 0 && (
                    <div className="p-4 rounded-2xl bg-cyan-950/20 border border-cyan-800/30 space-y-2">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-cyan-300 flex items-center gap-1.5">
                        <Trophy className="w-3.5 h-3.5 text-amber-400" /> Key Impact & Accolades
                      </h4>
                      <ul className="space-y-1.5">
                        {item.keyAchievements.map((ach, i) => (
                          <li
                            key={i}
                            className="text-xs text-neutral-300 flex items-start gap-2"
                          >
                            <span className="text-cyan-400 font-bold">•</span>
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tech stack badges */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {item.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" size="sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
