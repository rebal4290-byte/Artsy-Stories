import { cn } from "@/lib/utils";
import type { OrderStatus } from "@/lib/data";

const statusStyles: Record<OrderStatus, string> = {
  "Awaiting Brief": "bg-paper-2 text-ink",
  "In Progress": "bg-cyan text-ink",
  "In Review": "bg-grape text-white",
  Revisions: "bg-sunshine text-ink",
  Completed: "bg-mint text-ink",
};

interface StatusBadgeProps {
  status: OrderStatus;
  className?: string;
}

export default function StatusBadge({ status, className }: StatusBadgeProps) {
  return (
    <span className={cn("stamp", statusStyles[status], className)}>
      {status}
    </span>
  );
}
