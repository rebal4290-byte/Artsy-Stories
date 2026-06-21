import Link from "next/link";
import {
  Brush,
  ShieldCheck,
  Clock3,
  Users2,
  ArrowUpRight,
} from "lucide-react";
import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import MarqueeStrip from "@/components/MarqueeStrip";
import ServiceCard from "@/components/ServiceCard";
import PortfolioCard from "@/components/PortfolioCard";
import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";
import Icon from "@/components/Icon";
import { services, portfolioItems, testimonials, processSteps } from "@/lib/data";

const whyChoose = [
  {
    icon: Brush,
    title: "Human-finished art",
    description:
      "AI is a tool we use early on — every final piece is hand-finished by a real artist.",
  },
  {
    icon: ShieldCheck,
    title: "Clear, fair pricing",
    description:
      "Know your estimate before you commit. No surprise fees once work begins.",
  },
  {
    icon: Clock3,
    title: "Reliable turnaround",
    description:
      "Most projects ship in days, with rush options when you're in a hurry.",
  },
  {
    icon: Users2,
    title: "Artists who listen",
    description:
      "Unlimited messaging and revision rounds on our higher tiers, until it's right.",
  },
];

export default function HomePage() {
  const featuredDigitalArt = portfolioItems
    .filter((p) => p.categories.includes("Digital Art"))
    .slice(0, 3);

  const featuredDesign = portfolioItems
    .filter((p) => p.categories.includes("Graphic Design"))
    .slice(0, 3);

  return (
    <>
      <Hero />

      <MarqueeStrip
        items={[
          "Logo Design",
          "Character Art",
          "Branding",
          "Anime Art",
          "Packaging",
          "Portraits",
          "Comic Covers",
          "Twitch Assets",
        ]}
        bg="bg-sunshine"
        textClassName="text-ink"
      />

      {/* services overview */}
      <section className="px-5 py-16 text-ink sm:px-8 sm:py-24">
        <SectionHeader
          eyebrow="What We Make"
          title="Two studios, one roof"
          description="Business design for brands that need to look sharp, and a digital art studio for stories that need a face."
          className="[&_*]:!text-ink"
        />

        <div className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.slice(0, 8).map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="pop-hover inline-flex items-center gap-2 rounded-full comic-border bg-ink px-6 py-3 font-display text-sm text-paper shadow-pop-sm"
          >
            See All Services <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <div className="comic-gutter" />

      {/* featured digital art */}
      <section className="bg-paper-2/40 px-5 py-16 text-ink sm:px-8 sm:py-24">
        <SectionHeader
          eyebrow="Digital Art Studio"
          title="Featured digital art"
          description="Characters, portraits, and fantasy scenes built from a description, a photo, or just a vibe."
          className="[&_*]:!text-ink"
        />

        <div className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredDigitalArt.map((item, i) => (
            <PortfolioCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </section>

      {/* featured graphic design */}
      <section className="px-5 py-16 text-ink sm:px-8 sm:py-24">
        <SectionHeader
          eyebrow="Business Design"
          title="Featured graphic design"
          description="Logos, packaging, and social kits that make a brand instantly recognizable."
          className="[&_*]:!text-ink"
        />

        <div className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredDesign.map((item, i) => (
            <PortfolioCard key={item.id} item={item} index={i} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/portfolio"
            className="pop-hover inline-flex items-center gap-2 rounded-full comic-border bg-cyan px-6 py-3 font-display text-sm text-ink shadow-pop-sm"
          >
            Explore Full Portfolio <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <MarqueeStrip
        items={[
          "Fast Turnaround",
          "Unlimited Messaging",
          "Human-Finished",
          "Fair Pricing",
          "100% Original Art",
        ]}
        reverse
        bg="bg-grape"
        textClassName="text-white"
      />

      {/* why choose us */}
      <section className="px-5 py-16 text-ink sm:px-8 sm:py-24">
        <SectionHeader
          eyebrow="Why Artsy Stories"
          title="Why clients keep coming back"
          className="[&_*]:!text-ink"
        />

        <div className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyChoose.map((w) => (
            <div
              key={w.title}
              className="pop-hover rounded-3xl comic-border bg-white p-6 text-ink shadow-pop-sm"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl comic-border bg-mint">
                <w.icon className="h-6 w-6 text-ink" aria-hidden />
              </span>

              <h3 className="mt-4 font-display text-lg text-ink">
                {w.title}
              </h3>

              <p className="mt-2 text-sm text-ink/70">
                {w.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* process */}
      <section className="bg-ink px-5 py-16 text-paper sm:px-8 sm:py-24">
        <SectionHeader
          eyebrow="How It Works"
          title="From brief to final file"
          description="A typed sequence — each step happens in order, on your dashboard."
          className="[&>p]:text-paper/70"
        />

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <div
              key={step.id}
              className="relative rounded-3xl border-2 border-paper/25 bg-white/5 p-6"
            >
              <span className="font-display text-4xl text-sunshine/80">
                0{i + 1}
              </span>

              <span className="mt-3 grid h-10 w-10 place-items-center rounded-xl comic-border bg-paper">
                <Icon name={step.icon} className="h-5 w-5 text-ink" />
              </span>

              <h3 className="mt-3 font-display text-lg text-paper">
                {step.title}
              </h3>

              <p className="mt-2 text-sm text-paper/65">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* testimonials */}
      <section className="px-5 py-16 text-ink sm:px-8 sm:py-24">
        <SectionHeader
          eyebrow="Client Stories"
          title="Don't take our word for it"
          className="[&_*]:!text-ink"
        />

        <div className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(0, 6).map((t, i) => (
            <TestimonialCard key={t.id} {...t} index={i} />
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
