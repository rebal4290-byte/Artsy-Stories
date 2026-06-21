"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, ArrowUpRight } from "lucide-react";
import Icon from "@/components/Icon";
import type { Service } from "@/lib/data";

export default function ServiceCard({
  service,
  index = 0,
}: {
  service: Service;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: (index % 6) * 0.06 }}
      className="pop-hover flex h-full flex-col rounded-3xl comic-border bg-white p-6 text-ink shadow-pop-sm"
    >
      <div className="flex items-start justify-between">
        <span className="grid h-12 w-12 place-items-center rounded-2xl comic-border bg-sunshine">
          <Icon name={service.icon} className="h-6 w-6 text-ink" />
        </span>

        <span className="stamp bg-paper text-ink">
          ${service.startingPrice}+
        </span>
      </div>

      <h3 className="mt-4 font-display text-xl text-ink">
        {service.name}
      </h3>

      <p className="mt-2 flex-1 text-sm font-medium leading-6 text-ink/75">
        {service.description}
      </p>

      <div className="mt-4 flex items-center gap-2 font-utility text-xs uppercase tracking-wide text-ink/70">
        <Clock className="h-3.5 w-3.5 text-ink" aria-hidden="true" />
        <span>{service.timeline}</span>
      </div>

      <Link
        href={`/order?service=${service.slug}`}
        className="pop-hover mt-5 inline-flex items-center justify-center gap-1.5 rounded-full comic-border bg-cyan px-4 py-2.5 font-display text-sm text-ink shadow-pop-sm"
      >
        Order This
        <ArrowUpRight className="h-4 w-4 text-ink" aria-hidden="true" />
      </Link>
    </motion.div>
  );
}
