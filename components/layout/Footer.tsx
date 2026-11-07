"use client";

import { navItems, socialLinks } from "@/data/social-links";
import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/ui/Icons";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
        return <GithubIcon className="w-4 h-4" />;
    }
  };

  return (
    <footer className="relative border-t border-white/[0.08] bg-neutral-950/90 backdrop-blur-xl overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-cyan-500/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-12">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 via-sky-500 to-indigo-600 p-[1.5px] shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                <div className="w-full h-full bg-neutral-950 rounded-[10px] flex items-center justify-center font-bold text-white text-sm">
                  AR
                </div>
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Alex Rivera</h3>
                <p className="text-xs text-neutral-400">Senior Creative Developer & Systems Architect</p>
              </div>
            </div>

            <p className="text-sm text-neutral-400 max-w-md leading-relaxed">
              Crafting premium digital experiences, WebGL 3D interfaces, and high-concurrency cloud architectures for the next generation of web applications.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              Available for select Q1/Q2 engineering & architecture advisory
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-neutral-400 hover:text-cyan-300 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
              Connect & Source
            </h4>
            <div className="flex flex-col space-y-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-sm text-neutral-400 hover:text-white transition-colors group"
                >
                  <span className="p-1.5 rounded-lg bg-white/5 border border-white/5 group-hover:border-cyan-500/40 group-hover:text-cyan-400 transition-colors">
                    {getSocialIcon(social.icon)}
                  </span>
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p className="flex items-center gap-1">
            © {new Date().getFullYear()} Alex Rivera. Engineered with Next.js, Three.js & Tailwind CSS.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-cyan-500/40 text-neutral-400 hover:text-white transition-all cursor-pointer"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
