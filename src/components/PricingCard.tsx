"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import type { PricingPlan } from "@/lib/data";

export default function PricingCard({ plan, index = 0 }: { plan: PricingPlan; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className={cn(
        "pop-hover relative flex h-full flex-col rounded-3xl comic-border p-7",
        plan.highlighted ? "bg-magenta text-white shadow-pop-lg" : "bg-white text-ink shadow-pop-sm"
      )}
    >
      {plan.highlighted && (
        <span className="stamp absolute -top-4 right-6 bg-sunshine text-ink">
          Most Popular
        </span>
      )}

      <h3 className="font-display text-2xl">{plan.name}</h3>
      <p className={cn("mt-1 text-sm", plan.highlighted ? "text-white/80" : "text-ink/65")}>
        {plan.tagline}
      </p>

      <div className="mt-5 flex items-baseline gap-1.5">
        {plan.price !== null ? (
          <>
            <span className="font-display text-4xl">${plan.price}</span>
            <span className={cn("text-sm font-utility", plan.highlighted ? "text-white/70" : "text-ink/60")}>
              {plan.period}
            </span>
          </>
        ) : (
          <span className="font-display text-3xl">Let&apos;s talk</span>
        )}
      </div>

      <ul className="mt-6 flex-1 space-y-3">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm">
            <Check
              className={cn(
                "mt-0.5 h-4 w-4 shrink-0",
                plan.highlighted ? "text-sunshine" : "text-magenta"
              )}
              aria-hidden
            />
            <span className={plan.highlighted ? "text-white/90" : "text-ink/80"}>{f}</span>
          </li>
        ))}
      </ul>

      <Link
        href="/order"
        className={cn(
          "pop-hover mt-7 inline-flex items-center justify-center rounded-full comic-border px-5 py-3 font-display text-sm shadow-pop-sm",
          plan.highlighted ? "bg-sunshine text-ink" : "bg-ink text-paper"
        )}
      >
        {plan.cta}
      </Link>
    </motion.div>
  );
}
