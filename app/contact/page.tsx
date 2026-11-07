import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Contact } from "@/components/sections/Contact";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

export const metadata: Metadata = {
  title: "Contact & Collaboration — Alex Rivera",
  description: "Get in touch with Alex Rivera for senior engineering, creative development, or technical architecture.",
};

export default function ContactPage() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <SmoothScroll>
        <CustomCursor />
        <Navbar />
        <main className="pt-16">
          <Contact />
        </main>
        <Footer />
      </SmoothScroll>
    </ThemeProvider>
  );
}
