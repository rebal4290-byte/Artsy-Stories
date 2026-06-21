import type { Metadata } from "next";
import { Heart, Eye, Compass, ShieldCheck } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import PopComicPanel from "@/components/PopComicPanel";
import Mascot from "@/components/Mascot";
import Icon from "@/components/Icon";
import CTASection from "@/components/CTASection";
import { processSteps } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story, mission, and values behind Artsy Stories — plus our policy on AI use in the creative process.",
};

const values = [
  { title: "Craft over shortcuts", description: "Every commission gets real attention, not a template swap." },
  { title: "Honest communication", description: "Clear pricing, clear timelines, and no disappearing mid-project." },
  { title: "Original work, always", description: "No tracing, no reselling other artists' work, no exceptions." },
  { title: "Kept it fun", description: "Comics taught us color and rhythm — we keep that spirit in client work too." },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b-4 border-ink bg-paper-2/40 px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <span className="stamp bg-sunshine">Our Story</span>
            <h1 className="mt-4 font-display text-4xl text-ink sm:text-5xl">
              Started with a sketchbook, grew into a studio
            </h1>
            <p className="mt-5 text-base text-ink/70 sm:text-lg">
              Artsy Stories began as one artist taking small commissions between
              classes — a logo here, a pet portrait there. As requests grew past
              what one set of hands could finish, we brought together illustrators
              and designers who shared the same standard: every piece should look
              hand-considered, not assembly-lined. Today we work with brands,
              streamers, and individuals who want art that actually feels personal.
            </p>
          </div>
          <PopComicPanel halftone tint="bg-cyan" className="flex items-center justify-center p-8">
            <Mascot size={200} />
          </PopComicPanel>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2">
          <PopComicPanel className="p-7">
            <span className="grid h-12 w-12 place-items-center rounded-2xl comic-border bg-magenta">
              <Compass className="h-6 w-6 text-white" aria-hidden />
            </span>
            <h2 className="mt-4 font-display text-2xl text-ink">Mission</h2>
            <p className="mt-2 text-sm text-ink/70">
              Make professional-grade design and original art accessible to brands
              and individuals, without losing the human craft that makes art worth
              commissioning in the first place.
            </p>
          </PopComicPanel>
          <PopComicPanel className="p-7">
            <span className="grid h-12 w-12 place-items-center rounded-2xl comic-border bg-grape">
              <Eye className="h-6 w-6 text-white" aria-hidden />
            </span>
            <h2 className="mt-4 font-display text-2xl text-ink">Vision</h2>
            <p className="mt-2 text-sm text-ink/70">
              To be the studio people think of first when an idea deserves more
              than a stock image or a generic template — for businesses and
              personal stories alike.
            </p>
          </PopComicPanel>
        </div>
      </section>

      <div className="comic-gutter" />

      <section className="bg-paper-2/40 px-5 py-16 sm:px-8 sm:py-20">
        <SectionHeader eyebrow="Values" title="What guides every commission" />
        <div className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="pop-hover rounded-3xl comic-border bg-white p-6 shadow-pop-sm">
              <Heart className="h-6 w-6 text-magenta" aria-hidden />
              <h3 className="mt-3 font-display text-lg text-ink">{v.title}</h3>
              <p className="mt-2 text-sm text-ink/65">{v.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-20">
        <SectionHeader eyebrow="Creative Process" title="How a piece comes together" />
        <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <div key={step.id} className="rounded-3xl comic-border bg-white p-6 shadow-pop-sm">
              <span className="font-display text-3xl text-magenta/70">0{i + 1}</span>
              <span className="mt-3 grid h-10 w-10 place-items-center rounded-xl comic-border bg-sunshine">
                <Icon name={step.icon} className="h-5 w-5 text-ink" />
              </span>
              <h3 className="mt-3 font-display text-lg text-ink">{step.title}</h3>
              <p className="mt-2 text-sm text-ink/65">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 pb-16 sm:px-8 sm:pb-20">
        <div className="mx-auto max-w-4xl rounded-3xl comic-border bg-ink p-8 text-paper shadow-pop sm:p-10">
          <span className="grid h-12 w-12 place-items-center rounded-2xl comic-border bg-mint">
            <ShieldCheck className="h-6 w-6 text-ink" aria-hidden />
          </span>
          <h2 className="mt-4 font-display text-2xl sm:text-3xl">Our AI Policy</h2>
          <p className="mt-3 text-sm text-paper/75 sm:text-base">
            AI may be used only as a productivity tool — for early sketches, layout
            exploration, or reference gathering. Every final artwork delivered by
            Artsy Stories is professionally finished and approved by a human artist
            before it reaches you. We don&apos;t sell raw AI output, and we never will.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
