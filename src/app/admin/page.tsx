import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import AdminDashboardApp from "@/components/AdminDashboardApp";

export const metadata: Metadata = {
  title: "Artist / Admin Dashboard",
  description: "Manage clients, projects, deliverables, and invoices for Artsy Stories.",
};

export default function AdminPage() {
  return (
    <>
      <section className="border-b-4 border-ink bg-paper-2/40 px-5 py-10 sm:px-8 sm:py-14">
        <SectionHeader
          eyebrow="Artist / Admin Dashboard"
          title="Run the studio from one screen"
          align="left"
          className="max-w-none"
        />
      </section>
      <section className="px-5 py-10 sm:px-8 sm:py-14">
        <AdminDashboardApp />
      </section>
    </>
  );
}
