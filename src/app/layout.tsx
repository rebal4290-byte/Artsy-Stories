import type { Metadata } from "next";
import "@fontsource/lilita-one/400.css";
import "@fontsource/plus-jakarta-sans/400.css";
import "@fontsource/plus-jakarta-sans/500.css";
import "@fontsource/plus-jakarta-sans/700.css";
import "@fontsource/space-mono/400.css";
import "@fontsource/space-mono/700.css";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Artsy Stories — Graphic Design & Digital Art Studio",
    template: "%s | Artsy Stories",
  },
  description:
    "Artsy Stories is a premium graphic design and digital art studio crafting bold branding, illustration, and character art for clients worldwide — finished by real human artists.",
  keywords: [
    "graphic design studio",
    "digital art commissions",
    "logo design",
    "branding agency",
    "character art",
    "anime art commission",
    "portrait commission",
  ],
  openGraph: {
    title: "Artsy Stories — Graphic Design & Digital Art Studio",
    description:
      "Bold branding, illustration, and character art — human-made, professionally finished.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-sunshine focus:px-4 focus:py-2 focus:comic-border focus:rounded-full"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
