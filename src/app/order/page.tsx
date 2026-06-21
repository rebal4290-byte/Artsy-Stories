import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import OrderForm from "@/components/OrderForm";

export const metadata: Metadata = {
  title: "Start a Project",
  description: "Tell us what you need and get an estimated price for your graphic design or digital art project.",
};

export default async function OrderPage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string }>;
}) {
  const params = await searchParams;

  return (
    <>
      <section className="border-b-4 border-ink bg-paper-2/40 px-5 py-12 sm:px-8 sm:py-16">
        <SectionHeader
          eyebrow="Start a Project"
          title="Let's build your brief"
          description="Six quick steps. No payment required until your artist confirms the final scope."
        />
      </section>
      <section className="px-5 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <OrderForm initialServiceSlug={params.service} />
        </div>
      </section>
    </>
  );
}
