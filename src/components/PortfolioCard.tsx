"use client";

import { motion } from "framer-motion";
import Icon from "@/components/Icon";
import type { PortfolioItem } from "@/lib/data";

export default function PortfolioCard({ item, index = 0 }: { item: PortfolioItem; index?: number }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35, delay: (index % 9) * 0.04 }}
      whileHover={{ rotate: index % 2 === 0 ? -0.6 : 0.6 }}
      className="group relative overflow-hidden rounded-3xl comic-border bg-white shadow-pop-sm"
    >
      <div
        className="relative flex h-52 items-center justify-center overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${item.palette[0]}, ${item.palette[1]})`,
          borderBottomWidth: 3,
          borderBottomColor: "#161221",
          borderBottomStyle: "solid",
        }}
      >
        <div className="halftone absolute inset-0 text-white" aria-hidden />
        <span className="relative grid h-20 w-20 place-items-center rounded-full comic-border bg-white/90 shadow-pop-sm">
          <Icon name={item.icon} className="h-9 w-9 text-ink" />
        </span>

        <div className="absolute inset-0 flex flex-col items-start justify-end gap-2 bg-ink/0 p-4 opacity-0 transition-all duration-200 group-hover:bg-ink/55 group-hover:opacity-100">
          <p className="font-display text-sm text-white">{item.blurb}</p>
          <div className="flex flex-wrap gap-1.5">
            {item.tags.map((t) => (
              <span key={t} className="rounded-full border border-white/70 px-2 py-0.5 text-[10px] font-utility uppercase text-white">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-display text-lg text-ink">{item.title}</h3>
        <p className="mt-1 text-xs text-ink/55">{item.client}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {item.categories.slice(0, 2).map((c) => (
            <span key={c} className="stamp bg-paper text-[10px]">
              {c}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
