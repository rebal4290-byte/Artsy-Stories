"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  UploadCloud,
  MessageSquareText,
  Receipt,
  Download,
} from "lucide-react";
import DashboardSidebar, { type SidebarItem } from "@/components/DashboardSidebar";
import DashboardCard from "@/components/DashboardCard";
import StatusBadge from "@/components/StatusBadge";
import FileUploadBox from "@/components/FileUploadBox";
import MessagePanel from "@/components/MessagePanel";
import InvoiceCard from "@/components/InvoiceCard";
import { clientOrders, invoices, clientMessages } from "@/lib/data";
import { formatDate } from "@/lib/utils";

const items: SidebarItem[] = [
  { id: "orders", label: "Current Orders", icon: LayoutDashboard },
  { id: "revisions", label: "Upload Revisions", icon: UploadCloud },
  { id: "messages", label: "Messages", icon: MessageSquareText },
  { id: "billing", label: "Invoices & Payments", icon: Receipt },
  { id: "downloads", label: "Downloads", icon: Download },
];

export default function ClientDashboardApp() {
  const [active, setActive] = useState("orders");

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-6 lg:flex-row">
      <DashboardSidebar
        items={items}
        activeId={active}
        onSelect={setActive}
        title="Hi, Hana 👋"
        subtitle="Comet & Co. — Client since Nov 2025"
      />

      <div className="flex-1 space-y-6">
        {active === "orders" && (
          <div className="space-y-4">
            <h2 className="font-display text-2xl text-ink">Current Orders</h2>
            {clientOrders.map((order, i) => (
              <DashboardCard key={order.id} index={i}>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="font-display text-lg text-ink">{order.title}</p>
                    <p className="text-xs text-ink/55">
                      {order.id} · Artist: {order.artist} · Due {formatDate(order.dueDate)}
                    </p>
                  </div>
                  <StatusBadge status={order.status} />
                </div>
                <div className="mt-4 h-3 overflow-hidden rounded-full comic-border bg-paper-2">
                  <div
                    className="h-full rounded-full bg-mint transition-all"
                    style={{ width: `${order.progress}%` }}
                  />
                </div>
                <div className="mt-2 flex justify-between text-xs text-ink/55">
                  <span>{order.progress}% complete</span>
                  <span>${order.price}</span>
                </div>
              </DashboardCard>
            ))}
          </div>
        )}

        {active === "revisions" && (
          <div className="space-y-4">
            <h2 className="font-display text-2xl text-ink">Upload Revisions</h2>
            <DashboardCard>
              <p className="text-sm text-ink/65">
                Choose an order to attach revision notes or marked-up files for your artist.
              </p>
              <label className="mt-4 block">
                <span className="mb-2 block font-display text-sm text-ink">Select an order</span>
                <select className="w-full rounded-xl comic-border bg-white px-4 py-2.5 text-sm">
                  {clientOrders.map((o) => (
                    <option key={o.id}>{o.id} — {o.title}</option>
                  ))}
                </select>
              </label>
              <div className="mt-5">
                <FileUploadBox label="Attach revision files" hint="Annotated PNG, PDF, or PSD up to 25MB" />
              </div>
              <textarea
                rows={4}
                placeholder="Describe the changes you'd like…"
                className="mt-4 w-full rounded-2xl comic-border bg-paper-2/50 p-4 text-sm outline-none focus-visible:ring-2 focus-visible:ring-magenta"
              />
              <button
                type="button"
                className="pop-hover mt-4 rounded-full comic-border bg-magenta px-6 py-2.5 font-display text-sm text-white shadow-pop-sm"
              >
                Send Revision Notes
              </button>
            </DashboardCard>
          </div>
        )}

        {active === "messages" && (
          <div className="space-y-4">
            <h2 className="font-display text-2xl text-ink">Messages</h2>
            <MessagePanel messages={clientMessages} />
          </div>
        )}

        {active === "billing" && (
          <div className="space-y-6">
            <div>
              <h2 className="font-display text-2xl text-ink">Invoices &amp; Payment History</h2>
              <div className="mt-4 space-y-3">
                {invoices.map((inv) => (
                  <InvoiceCard key={inv.id} invoice={inv} />
                ))}
              </div>
            </div>
          </div>
        )}

        {active === "downloads" && (
          <div className="space-y-4">
            <h2 className="font-display text-2xl text-ink">Downloads</h2>
            {clientOrders
              .filter((o) => o.status === "Completed" || o.status === "In Review")
              .map((o, i) => (
                <DashboardCard key={o.id} index={i}>
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="font-display text-sm text-ink">{o.title}</p>
                      <p className="text-xs text-ink/55">Final files · {o.id}</p>
                    </div>
                    <button
                      type="button"
                      className="pop-hover inline-flex items-center gap-2 rounded-full comic-border bg-mint px-4 py-2 font-display text-xs text-ink shadow-pop-sm"
                    >
                      <Download className="h-3.5 w-3.5" /> Download
                    </button>
                  </div>
                </DashboardCard>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
