"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  Users,
  FolderKanban,
  UploadCloud,
  Receipt,
  BarChart3,
} from "lucide-react";
import DashboardSidebar, { type SidebarItem } from "@/components/DashboardSidebar";
import DashboardCard, { StatCard } from "@/components/DashboardCard";
import StatusBadge from "@/components/StatusBadge";
import FileUploadBox from "@/components/FileUploadBox";
import Icon from "@/components/Icon";
import {
  adminClients,
  adminProjects,
  analyticsStats,
  type OrderStatus,
} from "@/lib/data";
import { formatDate } from "@/lib/utils";

const items: SidebarItem[] = [
  { id: "overview", label: "Analytics", icon: BarChart3 },
  { id: "clients", label: "Manage Clients", icon: Users },
  { id: "projects", label: "Manage Projects", icon: FolderKanban },
  { id: "deliverables", label: "Upload Deliverables", icon: UploadCloud },
  { id: "invoicing", label: "Send Invoices", icon: Receipt },
];

export default function AdminDashboardApp() {
  const [active, setActive] = useState("overview");

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-6 lg:flex-row">
      <DashboardSidebar
        items={items}
        activeId={active}
        onSelect={setActive}
        title="Studio Console"
        subtitle="Artist / Admin view"
      />

      <div className="flex-1 space-y-6">
        {active === "overview" && (
          <div className="space-y-6">
            <h2 className="font-display text-2xl text-ink">
              <LayoutDashboard className="mb-1 inline h-6 w-6" aria-hidden /> Studio Overview
            </h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {analyticsStats.map((stat, i) => (
                <StatCard
                  key={stat.id}
                  label={stat.label}
                  value={stat.value}
                  delta={stat.delta}
                  icon={(props: { className?: string }) => <Icon name={stat.icon} {...props} />}
                  index={i}
                />
              ))}
            </div>
            <DashboardCard>
              <h3 className="font-display text-lg text-ink">Recent Activity</h3>
              <ul className="mt-4 space-y-3 text-sm text-ink/70">
                <li>• Lior K. uploaded a new concept for ORD-1042.</li>
                <li>• Priya Chandran approved final files for ORD-1041.</li>
                <li>• Invoice INV-3052 sent to Hana Lindqvist.</li>
                <li>• New project request received: ORD-1044.</li>
              </ul>
            </DashboardCard>
          </div>
        )}

        {active === "clients" && (
          <div className="space-y-4">
            <h2 className="font-display text-2xl text-ink">Manage Clients</h2>
            <DashboardCard padded={false} className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-left text-sm">
                <thead>
                  <tr className="border-b-2 border-ink/10 text-xs uppercase tracking-wide text-ink/50">
                    <th className="px-5 py-3">Client</th>
                    <th className="px-5 py-3">Active Orders</th>
                    <th className="px-5 py-3">Total Spent</th>
                    <th className="px-5 py-3">Joined</th>
                  </tr>
                </thead>
                <tbody>
                  {adminClients.map((c) => (
                    <tr key={c.id} className="border-b border-ink/10 last:border-0">
                      <td className="px-5 py-3">
                        <p className="font-display text-ink">{c.name}</p>
                        <p className="text-xs text-ink/50">{c.email}</p>
                      </td>
                      <td className="px-5 py-3">{c.activeOrders}</td>
                      <td className="px-5 py-3">${c.totalSpent}</td>
                      <td className="px-5 py-3">{formatDate(c.joined)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </DashboardCard>
          </div>
        )}

        {active === "projects" && (
          <div className="space-y-4">
            <h2 className="font-display text-2xl text-ink">Manage Projects</h2>
            {adminProjects.map((p, i) => (
              <DashboardCard key={p.id} index={i}>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="font-display text-base text-ink">{p.title}</p>
                    <p className="text-xs text-ink/55">
                      {p.id} · {p.client} · Artist: {p.artist} · Due {formatDate(p.dueDate)}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <StatusBadge status={p.status} />
                    <select
                      defaultValue={p.status}
                      aria-label={`Update status for ${p.id}`}
                      className="rounded-full comic-border bg-white px-3 py-1.5 text-xs"
                    >
                      {(
                        [
                          "Awaiting Brief",
                          "In Progress",
                          "In Review",
                          "Revisions",
                          "Completed",
                        ] as OrderStatus[]
                      ).map((s) => (
                        <option key={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </DashboardCard>
            ))}
          </div>
        )}

        {active === "deliverables" && (
          <div className="space-y-4">
            <h2 className="font-display text-2xl text-ink">Upload Deliverables</h2>
            <DashboardCard>
              <label className="block">
                <span className="mb-2 block font-display text-sm text-ink">Project</span>
                <select className="w-full rounded-xl comic-border bg-white px-4 py-2.5 text-sm">
                  {adminProjects.map((p) => (
                    <option key={p.id}>{p.id} — {p.title}</option>
                  ))}
                </select>
              </label>
              <div className="mt-5">
                <FileUploadBox label="Final deliverable files" hint="Source + export files up to 100MB" />
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-4">
                <label className="flex items-center gap-2 text-sm text-ink/70">
                  <input type="checkbox" className="h-4 w-4 accent-magenta" /> Mark as ready for client review
                </label>
              </div>
              <button
                type="button"
                className="pop-hover mt-4 rounded-full comic-border bg-mint px-6 py-2.5 font-display text-sm text-ink shadow-pop-sm"
              >
                Upload &amp; Notify Client
              </button>
            </DashboardCard>
          </div>
        )}

        {active === "invoicing" && (
          <div className="space-y-4">
            <h2 className="font-display text-2xl text-ink">Send Invoices</h2>
            <DashboardCard>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block font-display text-sm text-ink">Client</span>
                  <select className="w-full rounded-xl comic-border bg-white px-4 py-2.5 text-sm">
                    {adminClients.map((c) => (
                      <option key={c.id}>{c.name}</option>
                    ))}
                  </select>
                </label>
                <label className="block">
                  <span className="mb-2 block font-display text-sm text-ink">Amount (USD)</span>
                  <input
                    type="number"
                    placeholder="0.00"
                    className="w-full rounded-xl comic-border bg-white px-4 py-2.5 text-sm"
                  />
                </label>
              </div>
              <label className="mt-4 block">
                <span className="mb-2 block font-display text-sm text-ink">Note for client</span>
                <textarea
                  rows={3}
                  placeholder="e.g. Final balance for Brand Identity Kit"
                  className="w-full rounded-2xl comic-border bg-paper-2/50 p-4 text-sm outline-none focus-visible:ring-2 focus-visible:ring-magenta"
                />
              </label>
              <button
                type="button"
                className="pop-hover mt-4 rounded-full comic-border bg-magenta px-6 py-2.5 font-display text-sm text-white shadow-pop-sm"
              >
                Send Invoice
              </button>
            </DashboardCard>
          </div>
        )}
      </div>
    </div>
  );
}
