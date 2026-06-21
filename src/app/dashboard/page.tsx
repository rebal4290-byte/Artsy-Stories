import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import ClientDashboardApp from "@/components/ClientDashboardApp";

export const metadata: Metadata = {
  title: "Client Dashboard",
  description: "Track your orders, revisions, messages, and invoices in one place.",
};

export default function DashboardPage() {
  return (
    <>
      <section className="border-b-4 border-ink bg-paper-2/40 px-5 py-10 sm:px-8 sm:py-14">
        <SectionHeader
          eyebrow="Client Dashboard"
          title="Your projects, all in one place"
          align="left"
          className="max-w-none"
        />
      </section>
      <section className="px-5 py-10 sm:px-8 sm:py-14">
        <ClientDashboardApp />
      </section>
    </>
  );
}
