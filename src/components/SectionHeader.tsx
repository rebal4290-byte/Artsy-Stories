import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-2xl text-ink",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <span className="inline-flex rotate-[-2deg] rounded-full border-4 border-ink bg-sunshine px-5 py-2 font-utility text-xs font-black uppercase tracking-[0.22em] text-[#14111f] shadow-[4px_4px_0_#14111f]">
          {eyebrow}
        </span>
      )}

      <h2 className="mt-4 font-display text-3xl leading-tight text-ink sm:text-4xl md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-base text-ink/70 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
