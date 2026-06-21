"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  quote: string;
  rating: number;
  initials: string;
  accent: string;
  index?: number;
}

export default function TestimonialCard({
  name,
  role,
  quote,
  rating,
  initials,
  accent,
  index = 0,
}: TestimonialCardProps) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: (index % 5) * 0.07 }}
      className="speech-bubble flex h-full flex-col p-6 shadow-pop-sm"
    >
      <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className="h-4 w-4"
            fill={i < rating ? "#FFCF3F" : "none"}
            stroke="#161221"
          />
        ))}
      </div>
      <blockquote className="mt-3 flex-1 text-sm text-ink/80">&ldquo;{quote}&rdquo;</blockquote>
      <figcaption className="mt-5 flex items-center gap-3">
        <span
          className="grid h-10 w-10 place-items-center rounded-full comic-border font-display text-sm text-ink"
          style={{ backgroundColor: accent }}
        >
          {initials}
        </span>
        <div>
          <p className="font-display text-sm text-ink">{name}</p>
          <p className="text-xs text-ink/55">{role}</p>
        </div>
      </figcaption>
    </motion.figure>
  );
}
