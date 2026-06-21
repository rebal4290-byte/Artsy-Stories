import { MessageSquare } from "lucide-react";
import type { DashboardMessage } from "@/lib/data";

export default function MessagePanel({ messages }: { messages: DashboardMessage[] }) {
  return (
    <div className="space-y-3">
      {messages.map((m) => (
        <div
          key={m.id}
          className="flex items-start gap-3 rounded-2xl comic-border bg-white p-4 shadow-pop-sm"
        >
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full comic-border bg-cyan">
            <MessageSquare className="h-4 w-4 text-ink" aria-hidden />
          </span>
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-2">
              <p className="truncate font-display text-sm text-ink">{m.from}</p>
              <span className="shrink-0 text-xs text-ink/50">{m.time}</span>
            </div>
            <p className="mt-0.5 truncate text-sm text-ink/65">{m.preview}</p>
          </div>
          {m.unread && (
            <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-magenta" aria-label="Unread" />
          )}
        </div>
      ))}
    </div>
  );
}
