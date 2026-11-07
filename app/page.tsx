import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Services } from "@/components/sections/Services";
import { Contact } from "@/components/sections/Contact";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <SmoothScroll>
        <CustomCursor />
        <Navbar />
        <main className="relative flex flex-col w-full overflow-hidden">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Services />
          <Contact />
        </main>
        <Footer />
      </SmoothScroll>
    </ThemeProvider>
  );
}
