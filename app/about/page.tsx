import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { About } from "@/components/sections/About";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

export const metadata: Metadata = {
  title: "About — Alex Rivera | Senior Creative Developer",
  description: "Learn more about Alex Rivera, engineering background, philosophy, and accomplishments.",
};

export default function AboutPage() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <SmoothScroll>
        <CustomCursor />
        <Navbar />
        <main className="pt-16">
          <About />
        </main>
        <Footer />
      </SmoothScroll>
    </ThemeProvider>
  );
}
