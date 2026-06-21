"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MascotProps {
  size?: number;
  className?: string;
  float?: boolean;
}

/**
 * Coco — the studio's paint-splat star mascot. A single SVG character
 * reused as a floating host in the hero and as a friendly empty-state
 * companion in the dashboards.
 */
export default function Mascot({ size = 220, className, float = true }: MascotProps) {
  return (
    <motion.div
      className={cn(float && "animate-float", className)}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <svg
        viewBox="0 0 220 220"
        width={size}
        height={size}
        role="img"
        aria-label="Coco the studio mascot, a star-shaped character holding a paintbrush"
      >
        <ellipse cx="112" cy="196" rx="58" ry="10" fill="#161221" opacity="0.12" />
        {/* body: rounded 5-point star */}
        <path
          d="M110 14
             L132 70
             L192 74
             L146 112
             L162 172
             L110 138
             L58 172
             L74 112
             L28 74
             L88 70
             Z"
          fill="#FFCF3F"
          stroke="#161221"
          strokeWidth="6"
          strokeLinejoin="round"
        />
        {/* cheeks */}
        <circle cx="84" cy="118" r="9" fill="#FF3D78" opacity="0.55" />
        <circle cx="140" cy="118" r="9" fill="#FF3D78" opacity="0.55" />
        {/* eyes */}
        <circle cx="92" cy="104" r="6" fill="#161221" />
        <circle cx="132" cy="104" r="6" fill="#161221" />
        {/* smile */}
        <path
          d="M96 122 Q112 136 128 122"
          fill="none"
          stroke="#161221"
          strokeWidth="5"
          strokeLinecap="round"
        />
        {/* paintbrush */}
        <g transform="translate(150 130) rotate(28)">
          <rect x="-6" y="-4" width="12" height="46" rx="5" fill="#7C5CFC" stroke="#161221" strokeWidth="4" />
          <path d="M-9 -4 L0 -26 L9 -4 Z" fill="#29C5EE" stroke="#161221" strokeWidth="4" strokeLinejoin="round" />
        </g>
        {/* paint splat trail */}
        <circle cx="186" cy="156" r="5" fill="#29C5EE" stroke="#161221" strokeWidth="3" />
        <circle cx="198" cy="170" r="3.2" fill="#FF3D78" stroke="#161221" strokeWidth="2.5" />
      </svg>
    </motion.div>
  );
}
