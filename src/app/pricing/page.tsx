import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import PricingCard from "@/components/PricingCard";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import { pricingPlans, faqItems } from "@/lib/data";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Simple, transparent pricing tiers for graphic design and digital art commissions.",
};

export default function PricingPage() {
  const pricingFaqs = faqItems.filter((f) =>
    ["Payments", "Revisions", "Licensing", "Custom Orders"].includes(f.category)
  );

  return (
    <>
      <section className="border-b-4 border-ink bg-paper-2/40 px-5 py-14 sm:px-8 sm:py-20">
        <SectionHeader
          eyebrow="Pricing"
          title="Pricing that's clear from the start"
          description="Every tier includes a concept review and a confirmed timeline before you pay anything. No hidden fees once work begins."
        />
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pricingPlans.map((plan, i) => (
            <PricingCard key={plan.id} plan={plan} index={i} />
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-ink/55">
          Prices shown are starting points — your exact quote depends on the specific
          service, complexity, and any add-ons you choose on the order form.
        </p>
      </section>

      <section className="bg-paper-2/40 px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <SectionHeader eyebrow="Pricing FAQ" title="Common pricing questions" />
          <div className="mt-10">
            <FAQAccordion items={pricingFaqs} />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
