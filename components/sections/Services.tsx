"use client";

import { servicesData } from "@/data/services";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/animations/Reveal";
import { TiltCard } from "@/components/animations/TiltCard";
import {
  Monitor,
  Sparkles,
  Server,
  Database,
  Cloud,
  Palette,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export function Services() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Monitor":
        return <Monitor className="w-6 h-6" />;
      case "Sparkles":
        return <Sparkles className="w-6 h-6" />;
      case "Server":
        return <Server className="w-6 h-6" />;
      case "Database":
        return <Database className="w-6 h-6" />;
      case "Cloud":
        return <Cloud className="w-6 h-6" />;
      case "Palette":
        return <Palette className="w-6 h-6" />;
      default:
        return <Monitor className="w-6 h-6" />;
    }
  };

  const handleConsultation = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-1/4 left-1/3 w-[600px] h-[600px] bg-indigo-500/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <Reveal>
            <Badge variant="cyan">SERVICES & EXPERTISE</Badge>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              What I bring to your{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                engineering team
              </span>
              .
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-base sm:text-lg text-neutral-400">
              End-to-end capabilities spanning creative technical direction, design systems, and robust full-stack infrastructure.
            </p>
          </Reveal>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service, index) => (
            <TiltCard
              key={service.id}
              maxTilt={6}
              glowColor="rgba(6, 182, 212, 0.15)"
              className="h-full"
            >
              <div className="h-full rounded-3xl border border-white/10 bg-neutral-900/50 backdrop-blur-xl p-7 hover:border-cyan-500/40 hover:bg-neutral-900/70 transition-all duration-300 flex flex-col justify-between group shadow-xl">
                <div className="space-y-5">
                  {/* Icon Header */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`p-3.5 rounded-2xl bg-gradient-to-br ${service.accentGradient} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      {getIcon(service.iconName)}
                    </div>
                    <span className="text-xs font-mono text-neutral-500">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs font-medium text-cyan-400/90 mt-1">
                      {service.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-neutral-400 mt-2.5 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Bullet features */}
                  <div className="space-y-2 pt-2 border-t border-white/5">
                    {service.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-xs text-neutral-300"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies and Action */}
                <div className="mt-6 pt-5 border-t border-white/5 space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {service.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" size="sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <button
                    onClick={handleConsultation}
                    className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-cyan-500/10 border border-white/5 hover:border-cyan-500/30 text-xs font-semibold text-neutral-300 hover:text-cyan-300 flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                  >
                    <span>Discuss Project Scope</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
