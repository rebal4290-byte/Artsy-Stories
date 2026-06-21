import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={cn("mx-auto max-w-4xl text-center text-ink", className)}>
      {eyebrow ? (
        <p className="mx-auto mb-5 inline-flex w-fit rotate-[-2deg] rounded-full comic-border bg-sunshine px-5 py-2 font-utility text-xs font-black uppercase tracking-[0.22em] text-ink shadow-pop-sm">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="font-display text-4xl leading-tight text-ink sm:text-5xl md:text-6xl">
        {title}
      </h2>

      {description ? (
        <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-7 text-ink/70 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
