import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Business design services and digital art commissions from Artsy Stories, with starting prices and timelines.",
};

export default function ServicesPage() {
  const businessServices = services.filter((s) => s.category === "business");
  const digitalArtServices = services.filter((s) => s.category === "digital-art");

  return (
    <>
      <section className="border-b-4 border-ink bg-paper-2/40 px-5 py-14 sm:px-8 sm:py-20">
        <SectionHeader
          eyebrow="Services"
          title="Everything we draw, design, and deliver"
          description="Two studios under one roof: business design for brands, and digital art for personal and creative projects."
        />
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <span className="stamp bg-cyan">Business Design Services</span>
          <h2 className="mt-4 font-display text-3xl text-ink sm:text-4xl">
            For brands that need to look sharp
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {businessServices.map((s, i) => (
              <ServiceCard key={s.id} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      <div className="comic-gutter" />

      <section className="bg-paper-2/40 px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <span className="stamp bg-grape text-white">Digital Art Studio</span>
          <h2 className="mt-4 font-display text-3xl text-ink sm:text-4xl">
            For stories that need a face
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {digitalArtServices.map((s, i) => (
              <ServiceCard key={s.id} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
