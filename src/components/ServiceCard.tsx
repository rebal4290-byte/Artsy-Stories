"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, ArrowUpRight } from "lucide-react";
import Icon from "@/components/Icon";
import type { Service } from "@/lib/data";

export default function ServiceCard({ service, index = 0 }: { service: Service; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: (index % 6) * 0.06 }}
      className="pop-hover flex h-full flex-col rounded-3xl comic-border bg-white p-6 shadow-pop-sm"
    >
      <div className="flex items-start justify-between">
        <span className="grid h-12 w-12 place-items-center rounded-2xl comic-border bg-sunshine">
          <Icon name={service.icon} className="h-6 w-6 text-ink" />
        </span>
        <span className="stamp bg-paper">${service.startingPrice}+</span>
      </div>

      <h3 className="mt-4 font-display text-xl text-ink">{service.name}</h3>
      <p className="mt-2 flex-1 text-sm text-ink/70">{service.description}</p>

      <div className="mt-4 flex items-center gap-2 text-xs text-ink/60 font-utility uppercase tracking-wide">
        <Clock className="h-3.5 w-3.5" aria-hidden />
        {service.timeline}
      </div>

      <Link
        href={`/order?service=${service.slug}`}
        className="pop-hover mt-5 inline-flex items-center justify-center gap-1.5 rounded-full comic-border bg-cyan px-4 py-2.5 font-display text-sm text-ink shadow-pop-sm"
      >
        Order This
        <ArrowUpRight className="h-4 w-4" aria-hidden />
      </Link>
    </motion.div>
  );
}
