import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import PortfolioGrid from "@/components/PortfolioGrid";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Browse branding, illustration, character art, and design work from the Artsy Stories studio.",
};

export default function PortfolioPage() {
  return (
    <>
      <section className="border-b-4 border-ink bg-paper-2/40 px-5 py-14 sm:px-8 sm:py-20">
        <SectionHeader
          eyebrow="Portfolio"
          title="A wall of finished stories"
          description="Every piece below started as a brief like yours. Search, filter, and find the style closest to what you have in mind."
        />
      </section>
      <section className="px-5 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <PortfolioGrid />
        </div>
      </section>
      <CTASection
        title="See your idea in this gallery next"
        description="Tell us the brief, and we'll match you with the right artist for the style you want."
      />
    </>
  );
}
