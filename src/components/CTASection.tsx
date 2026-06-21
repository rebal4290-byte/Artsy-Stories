"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Mascot from "@/components/Mascot";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}

export default function CTASection({
  title = "Got a story to tell? Let's draw it.",
  description = "Tell us what you need and get a concept back in days, not weeks — every piece finished by a real human artist.",
  primaryHref = "/order",
  primaryLabel = "Start a Project",
  secondaryHref = "/portfolio",
  secondaryLabel = "See the Portfolio",
}: CTASectionProps) {
  return (
    <section className="px-5 py-16 sm:px-8 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="relative mx-auto flex max-w-5xl flex-col items-center overflow-hidden rounded-[2.5rem] comic-border bg-magenta px-6 py-14 text-center shadow-pop-lg sm:px-12"
      >
        <div className="halftone absolute inset-0 text-white" aria-hidden />
        <div className="relative -mb-6">
          <Mascot size={120} />
        </div>
        <h2 className="relative font-display text-3xl text-white sm:text-4xl md:text-5xl">
          {title}
        </h2>
        <p className="relative mt-4 max-w-xl text-sm text-white/85 sm:text-base">
          {description}
        </p>
        <div className="relative mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href={primaryHref}
            className="pop-hover inline-flex items-center gap-2 rounded-full comic-border bg-sunshine px-7 py-3.5 font-display text-sm text-ink shadow-pop-sm sm:text-base"
          >
            {primaryLabel}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <Link
            href={secondaryHref}
            className="pop-hover inline-flex items-center gap-2 rounded-full comic-border bg-white px-7 py-3.5 font-display text-sm text-ink shadow-pop-sm sm:text-base"
          >
            {secondaryLabel}
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
