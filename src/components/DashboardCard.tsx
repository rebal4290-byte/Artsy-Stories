"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface DashboardCardProps {
  children: React.ReactNode;
  className?: string;
  index?: number;
  padded?: boolean;
}

export default function DashboardCard({
  children,
  className,
  index = 0,
  padded = true,
}: DashboardCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: (index % 8) * 0.05 }}
      className={cn(
        "rounded-3xl comic-border bg-white shadow-pop-sm",
        padded && "p-5 sm:p-6",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

export function StatCard({
  label,
  value,
  delta,
  icon: IconCmp,
  index = 0,
}: {
  label: string;
  value: string;
  delta: string;
  icon: React.ElementType;
  index?: number;
}) {
  return (
    <DashboardCard index={index}>
      <div className="flex items-center justify-between">
        <span className="text-xs font-utility uppercase tracking-wide text-ink/55">{label}</span>
        <span className="grid h-9 w-9 place-items-center rounded-xl comic-border bg-sunshine">
          <IconCmp className="h-4 w-4 text-ink" aria-hidden />
        </span>
      </div>
      <p className="mt-3 font-display text-3xl text-ink">{value}</p>
      <p className="mt-1 text-xs text-ink/60">{delta}</p>
    </DashboardCard>
  );
}
