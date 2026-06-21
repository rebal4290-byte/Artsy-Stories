"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search } from "lucide-react";
import PortfolioCard from "@/components/PortfolioCard";
import {
  portfolioItems,
  portfolioCategories,
  type PortfolioCategory,
} from "@/lib/data";

export default function PortfolioGrid() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory | "All">("All");

  const filtered = useMemo(() => {
    return portfolioItems.filter((item) => {
      const matchesCategory =
        activeCategory === "All" || item.categories.includes(activeCategory);
      const haystack = `${item.title} ${item.blurb} ${item.tags.join(" ")}`.toLowerCase();
      const matchesQuery = haystack.includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [query, activeCategory]);

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-sm">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/50" aria-hidden />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search the portfolio…"
            aria-label="Search the portfolio"
            className="w-full rounded-full comic-border bg-white py-3 pl-11 pr-4 text-sm shadow-pop-sm outline-none placeholder:text-ink/40 focus-visible:ring-2 focus-visible:ring-magenta"
          />
        </div>
        <p className="font-utility text-xs uppercase tracking-wide text-ink/55">
          {filtered.length} piece{filtered.length === 1 ? "" : "s"} shown
        </p>
      </div>

      <div className="mt-5 flex flex-wrap gap-2" role="group" aria-label="Filter by category">
        {(["All", ...portfolioCategories] as const).map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveCategory(cat)}
            aria-pressed={activeCategory === cat}
            className={`pop-hover rounded-full comic-border px-4 py-1.5 font-utility text-xs uppercase tracking-wide shadow-pop-sm transition-colors ${
              activeCategory === cat ? "bg-ink text-paper" : "bg-white text-ink"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((item, i) => (
            <PortfolioCard key={item.id} item={item} index={i} />
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <div className="mt-10 rounded-3xl comic-border bg-white p-10 text-center shadow-pop-sm">
          <p className="font-display text-xl text-ink">No pieces match yet.</p>
          <p className="mt-2 text-sm text-ink/60">
            Try a different search term or clear the category filter.
          </p>
        </div>
      )}
    </div>
  );
}
