import { cn } from "@/lib/utils";

interface PopComicPanelProps {
  children: React.ReactNode;
  className?: string;
  halftone?: boolean;
  tint?: string;
  as?: "div" | "figure";
}

export default function PopComicPanel({
  children,
  className,
  halftone = false,
  tint = "bg-white",
  as = "div",
}: PopComicPanelProps) {
  const Tag = as;
  return (
    <Tag
      className={cn(
        "relative overflow-hidden rounded-3xl comic-border shadow-pop",
        tint,
        className
      )}
    >
      {halftone && (
        <div className="halftone pointer-events-none absolute inset-0" aria-hidden />
      )}
      <div className="relative">{children}</div>
    </Tag>
  );
}
