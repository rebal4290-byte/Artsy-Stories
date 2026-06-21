import { Download, Receipt } from "lucide-react";
import { cn, formatDate } from "@/lib/utils";
import type { Invoice } from "@/lib/data";

const statusStyles: Record<Invoice["status"], string> = {
  Paid: "bg-mint text-ink",
  Due: "bg-sunshine text-ink",
  Overdue: "bg-magenta text-white",
};

export default function InvoiceCard({ invoice }: { invoice: Invoice }) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-2xl comic-border bg-white p-4 shadow-pop-sm">
      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full comic-border bg-paper-2">
          <Receipt className="h-4 w-4 text-ink" aria-hidden />
        </span>
        <div>
          <p className="font-display text-sm text-ink">{invoice.id}</p>
          <p className="text-xs text-ink/55">
            {invoice.orderId} · {formatDate(invoice.date)}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <span className="font-display text-sm text-ink">${invoice.amount}</span>
        <span className={cn("stamp", statusStyles[invoice.status])}>{invoice.status}</span>
        <button
          type="button"
          aria-label={`Download invoice ${invoice.id}`}
          className="grid h-9 w-9 place-items-center rounded-full comic-border bg-white text-ink hover:bg-paper-2"
        >
          <Download className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
