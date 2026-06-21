import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import { faqItems } from "@/lib/data";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about revisions, delivery, payments, file formats, commercial use, AI usage, refunds, and custom orders.",
};

export default function FAQPage() {
  return (
    <>
      <section className="border-b-4 border-ink bg-paper-2/40 px-5 py-14 sm:px-8 sm:py-20">
        <SectionHeader
          eyebrow="FAQ"
          title="Questions, answered"
          description="Can't find what you're looking for? Reach out and we'll answer directly."
        />
      </section>
      <section className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <FAQAccordion items={faqItems} />
        </div>
      </section>
      <CTASection
        title="Still have a question?"
        description="Send us a message and we'll get back to you within one business day."
        primaryHref="/contact"
        primaryLabel="Contact Us"
        secondaryHref="/order"
        secondaryLabel="Start a Project"
      />
    </>
  );
}
