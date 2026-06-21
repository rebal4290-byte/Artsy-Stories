"use client";

import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

export interface SidebarItem {
  id: string;
  label: string;
  icon: LucideIcon;
}

export default function DashboardSidebar({
  items,
  activeId,
  onSelect,
  title,
  subtitle,
}: {
  items: SidebarItem[];
  activeId: string;
  onSelect: (id: string) => void;
  title: string;
  subtitle: string;
}) {
  return (
    <aside className="w-full shrink-0 lg:w-64">
      <div className="rounded-3xl comic-border bg-white p-5 shadow-pop-sm lg:sticky lg:top-24">
        <p className="font-display text-lg text-ink">{title}</p>
        <p className="text-xs text-ink/55">{subtitle}</p>

        <nav
          className="mt-5 flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible lg:pb-0"
          aria-label="Dashboard sections"
        >
          {items.map((linkItem) => {
            const active = activeId === linkItem.id;
            const LinkIcon = linkItem.icon;
            return (
              <button
                key={linkItem.id}
                type="button"
                onClick={() => onSelect(linkItem.id)}
                aria-current={active ? "true" : undefined}
                className={cn(
                  "flex shrink-0 items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-left font-display text-sm transition-colors lg:shrink",
                  active
                    ? "comic-border bg-sunshine text-ink shadow-pop-sm"
                    : "text-ink/70 hover:bg-paper-2"
                )}
              >
                <LinkIcon className="h-4 w-4" aria-hidden />
                {linkItem.label}
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
