import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alex Rivera — Senior Creative Developer & Systems Architect",
  description:
    "Portfolio of Alex Rivera, a Senior Frontend Engineer and Creative Developer crafting modern web applications, interactive 3D experiences, and high-performance digital systems.",
  keywords: [
    "Alex Rivera",
    "Creative Developer",
    "Senior Frontend Engineer",
    "Three.js",
    "React Three Fiber",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
  ],
  authors: [{ name: "Alex Rivera" }],
  creator: "Alex Rivera",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alexrivera.dev",
    title: "Alex Rivera — Senior Creative Developer & Systems Architect",
    description:
      "Crafting modern web applications, interactive 3D experiences, and high-performance digital systems.",
    siteName: "Alex Rivera Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Rivera — Senior Creative Developer & Systems Architect",
    description:
      "Crafting modern web applications, interactive 3D experiences, and high-performance digital systems.",
    creator: "@alexrivera_dev",
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
