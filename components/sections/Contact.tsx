"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import confetti from "canvas-confetti";
import { contactFormSchema, ContactFormData } from "@/lib/validations";
import { socialLinks } from "@/data/social-links";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Reveal } from "@/components/animations/Reveal";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/ui/Icons";
import {
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  Clock,
  MapPin,
} from "lucide-react";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      projectType: "Full Stack Web Application",
      budget: "$10k - $25k",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus("success");
        reset();

        // Launch celebratory confetti effect
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 },
            colors: ["#06b6d4", "#38bdf8", "#a855f7", "#ec4899"],
          });
        } catch {
          // Ignore
        }
      } else {
        setSubmitStatus("error");
        setErrorMessage(
          result?.message || "Failed to deliver message. Please try again."
        );
      }
    } catch {
      setSubmitStatus("error");
      setErrorMessage("Network error occurred. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("sokmeng@sokmenghoem.dev");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
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
        return <Mail className="w-4 h-4" />;
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-500/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <Reveal>
            <Badge variant="cyan">GET IN TOUCH</Badge>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Let&apos;s build something{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                extraordinary
              </span>
              .
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-base sm:text-lg text-neutral-400">
              Have a visionary project in mind or need senior architectural firepower? Let&apos;s connect and make it a reality.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Info & Social Cards */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal delay={0.3}>
              <div className="rounded-3xl border border-white/10 bg-neutral-900/50 backdrop-blur-xl p-6 sm:p-8 space-y-6 shadow-xl">
                <div>
                  <h3 className="text-xl font-bold text-white">Contact Details</h3>
                  <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                    Feel free to reach out directly via email or any of my social profiles.
                  </p>
                </div>

                {/* Direct Email with One-Click Copy */}
                <div className="p-4 rounded-2xl bg-neutral-950/80 border border-white/5 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="truncate">
                      <p className="text-[11px] text-neutral-400 font-medium">Direct Email</p>
                      <p className="text-sm font-mono text-cyan-300 font-semibold truncate">
                        sokmeng@sokmenghoem.dev
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={copyEmailToClipboard}
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white transition-colors cursor-pointer shrink-0"
                    aria-label="Copy Email"
                    title="Copy Email"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Availability status */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-xs text-neutral-300">
                    <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Response time: Usually within 24 hours</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-neutral-300">
                    <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Timezone: US Pacific (UTC-8) — Remote Worldwide</span>
                  </div>
                </div>

                {/* Social media connections */}
                <div className="pt-4 border-t border-white/5 space-y-3">
                  <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                    Online Presence
                  </p>
                  <div className="grid grid-cols-2 gap-2.5">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-cyan-500/30 text-xs text-neutral-300 hover:text-white flex items-center gap-2.5 transition-all"
                      >
                        <span className="text-cyan-400">{getSocialIcon(social.icon)}</span>
                        <span className="font-medium truncate">{social.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <Reveal delay={0.4}>
              <div className="rounded-3xl border border-white/10 bg-neutral-900/50 backdrop-blur-xl p-6 sm:p-8 md:p-10 shadow-2xl space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">Send a Message</h3>
                  <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                    Fill out the form below and I&apos;ll get back to you promptly.
                  </p>
                </div>

                {/* Status Banners */}
                {submitStatus === "success" && (
                  <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-sm flex items-center gap-3 animate-fadeIn">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <div>
                      <p className="font-semibold">Message dispatched successfully!</p>
                      <p className="text-xs text-emerald-400/90 mt-0.5">
                        Thank you for reaching out. I look forward to speaking with you.
                      </p>
                    </div>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="p-4 rounded-2xl bg-red-950/40 border border-red-500/40 text-red-300 text-sm flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
                    <div>
                      <p className="font-semibold">Transmission Failed</p>
                      <p className="text-xs text-red-400/90 mt-0.5">{errorMessage}</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                        Your Name <span className="text-cyan-400">*</span>
                      </label>
                      <Input
                        placeholder="e.g. Elena Rostova"
                        error={errors.name?.message}
                        {...register("name")}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                        Your Email <span className="text-cyan-400">*</span>
                      </label>
                      <Input
                        type="email"
                        placeholder="elena@company.com"
                        error={errors.email?.message}
                        {...register("email")}
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                      Subject <span className="text-cyan-400">*</span>
                    </label>
                    <Input
                      placeholder="e.g. New WebGL Experience & Design System"
                      error={errors.subject?.message}
                      {...register("subject")}
                    />
                  </div>

                  {/* Project Type & Budget Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                        Project Scope / Type
                      </label>
                      <select
                        className="flex h-12 w-full rounded-xl border border-white/10 bg-neutral-900/60 backdrop-blur-md px-4 py-2 text-sm text-neutral-100 transition-all duration-200 focus:border-cyan-500/80 focus:bg-neutral-900/90 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 cursor-pointer"
                        {...register("projectType")}
                      >
                        <option value="Full Stack Web Application" className="bg-neutral-900">
                          Full Stack Web Application
                        </option>
                        <option value="Creative 3D / WebGL Showcase" className="bg-neutral-900">
                          Creative 3D / WebGL Showcase
                        </option>
                        <option value="Design System & Component Library" className="bg-neutral-900">
                          Design System & Component Library
                        </option>
                        <option value="Systems & Cloud Architecture" className="bg-neutral-900">
                          Systems & Cloud Architecture
                        </option>
                        <option value="Consulting / Advisory" className="bg-neutral-900">
                          Consulting / Advisory
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                        Target Budget
                      </label>
                      <select
                        className="flex h-12 w-full rounded-xl border border-white/10 bg-neutral-900/60 backdrop-blur-md px-4 py-2 text-sm text-neutral-100 transition-all duration-200 focus:border-cyan-500/80 focus:bg-neutral-900/90 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 cursor-pointer"
                        {...register("budget")}
                      >
                        <option value="< $10k" className="bg-neutral-900">&lt; $10k</option>
                        <option value="$10k - $25k" className="bg-neutral-900">$10k - $25k</option>
                        <option value="$25k - $50k" className="bg-neutral-900">$25k - $50k</option>
                        <option value="$50k+" className="bg-neutral-900">$50k+</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                      Your Message <span className="text-cyan-400">*</span>
                    </label>
                    <Textarea
                      placeholder="Tell me about your goals, timeline, and what you would like to create..."
                      rows={5}
                      error={errors.message?.message}
                      {...register("message")}
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full font-semibold"
                      isLoading={isSubmitting}
                    >
                      <Send className="w-4 h-4" /> Send Inquiry
                    </Button>
                  </div>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
