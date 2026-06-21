import { cn } from "@/lib/utils";

interface MarqueeStripProps {
  items: string[];
  reverse?: boolean;
  bg?: string;
  textClassName?: string;
}

export default function MarqueeStrip({
  items,
  reverse = false,
  bg = "bg-ink",
  textClassName = "text-paper",
}: MarqueeStripProps) {
  const loop = [...items, ...items];

  return (
    <div className={cn("overflow-hidden border-y-4 border-ink py-3", bg)} aria-hidden={false}>
      <div
        className={cn("marquee-track", reverse && "marquee-track-reverse")}
        style={{ animationDuration: `${items.length * 3.2}s` }}
      >
        {loop.map((item, i) => (
          <span
            key={i}
            className={cn(
              "mx-4 flex items-center gap-3 font-display text-lg uppercase sm:text-2xl",
              textClassName
            )}
          >
            {item}
            <span aria-hidden className="text-sunshine">★</span>
          </span>
        ))}
      </div>
    </div>
  );
}
