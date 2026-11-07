import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sokmeng Hoem — Senior Creative Developer & Systems Architect",
  description:
    "Portfolio of Sokmeng Hoem, a Senior Frontend Engineer and Creative Developer crafting modern web applications, interactive 3D experiences, and high-performance digital systems.",
  keywords: [
    "Sokmeng Hoem",
    "Creative Developer",
    "Senior Frontend Engineer",
    "Three.js",
    "React Three Fiber",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
  ],
  authors: [{ name: "Sokmeng Hoem" }],
  creator: "Sokmeng Hoem",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sokmenghoem.dev",
    title: "Sokmeng Hoem — Senior Creative Developer & Systems Architect",
    description:
      "Crafting modern web applications, interactive 3D experiences, and high-performance digital systems.",
    siteName: "Sokmeng Hoem Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sokmeng Hoem — Senior Creative Developer & Systems Architect",
    description:
      "Crafting modern web applications, interactive 3D experiences, and high-performance digital systems.",
    creator: "@sokmenghoem",
  },
};

export const viewport: Viewport = {
  themeColor: "#05070f",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}
