import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Projects } from "@/components/sections/Projects";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

export const metadata: Metadata = {
  title: "Projects & Architecture — Sokmeng Hoem",
  description: "Browse featured projects, architectural case studies, and creative web development by Sokmeng Hoem.",
};

export default function ProjectsPage() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <SmoothScroll>
        <CustomCursor />
        <Navbar />
        <main className="pt-16">
          <Projects />
        </main>
        <Footer />
      </SmoothScroll>
    </ThemeProvider>
  );
}
