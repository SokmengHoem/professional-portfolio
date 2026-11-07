import { Metadata } from "next";
import { notFound } from "next/navigation";
import { projectsData } from "@/data/projects";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { GithubIcon } from "@/components/ui/Icons";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Calendar,
  Layers,
  CheckCircle2,
  Code2,
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} — Case Study | Alex Rivera`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <SmoothScroll>
        <CustomCursor />
        <Navbar />
        <main className="min-h-screen pt-32 pb-24 relative overflow-hidden">
          {/* Ambient Lighting */}
          <div
            className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] blur-[160px] pointer-events-none opacity-20"
            style={{ backgroundColor: project.featuredColor }}
          />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
            {/* Back link */}
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-400 hover:text-cyan-300 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to all projects
            </Link>

            {/* Header */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="cyan">{project.category}</Badge>
                {project.featured && <Badge variant="purple">Featured Work</Badge>}
                <span className="text-xs text-neutral-400 flex items-center gap-1 ml-auto font-mono">
                  <Calendar className="w-3.5 h-3.5" /> {project.year}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                {project.title}
              </h1>
              <p className="text-lg sm:text-xl text-cyan-400 font-medium">
                {project.tagline}
              </p>
            </div>

            {/* Visual Header Banner */}
            <div className="relative rounded-3xl border border-white/10 bg-neutral-900/60 backdrop-blur-2xl p-8 sm:p-12 overflow-hidden shadow-2xl flex flex-col items-center justify-center text-center space-y-4">
              <div
                className="w-20 h-20 rounded-3xl flex items-center justify-center border shadow-2xl"
                style={{
                  backgroundColor: `${project.featuredColor}20`,
                  borderColor: `${project.featuredColor}60`,
                  color: project.featuredColor,
                }}
              >
                <Code2 className="w-10 h-10" />
              </div>
              <p className="max-w-lg text-sm text-neutral-300 leading-relaxed">
                {project.description}
              </p>

              {/* Action buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="primary" size="md">
                      <ExternalLink className="w-4 h-4" /> Launch Production App
                    </Button>
                  </a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="secondary" size="md">
                      <GithubIcon className="w-4 h-4" /> Source Code
                    </Button>
                  </a>
                )}
              </div>
            </div>

            {/* Metrics */}
            {project.metrics && (
              <div className="grid grid-cols-3 gap-4">
                {project.metrics.map((metric, i) => (
                  <div
                    key={i}
                    className="p-4 sm:p-6 rounded-2xl bg-neutral-900/50 border border-white/10 text-center"
                  >
                    <p className="text-xl sm:text-3xl font-extrabold text-cyan-300">
                      {metric.value}
                    </p>
                    <p className="text-xs text-neutral-400 mt-1 font-medium">{metric.label}</p>
                  </div>
                ))}
              </div>
            )}

            {/* In-depth Narrative */}
            <div className="space-y-4 rounded-3xl border border-white/10 bg-neutral-900/40 p-6 sm:p-8 backdrop-blur-xl">
              <h3 className="text-lg font-bold text-white">System Architecture & Overview</h3>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                {project.longDescription || project.description}
              </p>
            </div>

            {/* Highlights */}
            {project.architectureHighlights && (
              <div className="space-y-4 rounded-3xl border border-white/10 bg-neutral-900/40 p-6 sm:p-8 backdrop-blur-xl">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Layers className="w-5 h-5 text-cyan-400" /> Key Engineering Triumphs
                </h3>
                <ul className="space-y-3">
                  {project.architectureHighlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-neutral-300">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technologies */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-400">
                Technologies & Tools Employed
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </SmoothScroll>
    </ThemeProvider>
  );
}
