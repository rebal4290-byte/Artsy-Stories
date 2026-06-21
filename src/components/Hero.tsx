"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Star, Zap } from "lucide-react";
import Mascot from "@/components/Mascot";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b-4 border-ink bg-paper">
      <div className="halftone pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-6">
        {/* left panel */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 lg:pr-10"
        >
          <motion.span variants={item} className="stamp bg-sunshine">
            <Zap className="h-3.5 w-3.5" /> Open for new projects
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-5 font-display text-4xl leading-[1.05] text-ink sm:text-5xl md:text-6xl"
          >
            Bold art &amp;
            <br />
            <span className="text-magenta">brand stories,</span>
            <br />
            drawn by hand.
          </motion.h1>

          <motion.p variants={item} className="mt-5 max-w-md text-base text-ink/70 sm:text-lg">
            Artsy Stories is a graphic design and digital art studio for brands,
            streamers, and dreamers — logos, illustration, and character art that
            actually looks like <em>you</em>.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/order"
              className="pop-hover inline-flex items-center gap-2 rounded-full comic-border bg-magenta px-7 py-3.5 font-display text-sm text-white shadow-pop sm:text-base"
            >
              Start a Project
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              href="/portfolio"
              className="pop-hover inline-flex items-center gap-2 rounded-full comic-border bg-white px-7 py-3.5 font-display text-sm text-ink shadow-pop sm:text-base"
            >
              View Portfolio
            </Link>
          </motion.div>

          <motion.div variants={item} className="mt-9 flex items-center gap-4">
            <div className="flex -space-x-3">
              {["#FF3D78", "#29C5EE", "#FFCF3F", "#7C5CFC"].map((c, i) => (
                <span
                  key={i}
                  className="grid h-10 w-10 place-items-center rounded-full comic-border text-xs font-display text-ink"
                  style={{ backgroundColor: c }}
                >
                  {["HL", "DO", "PC", "MB"][i]}
                </span>
              ))}
            </div>
            <div>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5" fill="#FFCF3F" stroke="#161221" />
                ))}
              </div>
              <p className="font-utility text-xs text-ink/60">128+ happy clients</p>
            </div>
          </motion.div>
        </motion.div>

        {/* right panel: comic gutter split with floating mascot + sticker collage */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto aspect-square w-full max-w-md lg:max-w-none"
        >
          <div className="absolute inset-0 rounded-[2.5rem] comic-border bg-cyan shadow-pop-lg" />
          <div className="halftone-color absolute inset-0 rounded-[2.5rem] text-ink" aria-hidden />

          <div className="absolute -left-2 top-6 -rotate-6 rounded-2xl comic-border bg-white px-4 py-2 shadow-pop-sm sm:-left-6">
            <p className="font-display text-sm text-magenta">Logos</p>
          </div>
          <div className="absolute -right-3 top-1/3 rotate-6 rounded-2xl comic-border bg-sunshine px-4 py-2 shadow-pop-sm sm:-right-8">
            <p className="font-display text-sm text-ink">Character Art</p>
          </div>
          <div className="absolute -left-4 bottom-10 rotate-3 rounded-2xl comic-border bg-grape px-4 py-2 shadow-pop-sm sm:-left-10">
            <p className="font-display text-sm text-white">Branding</p>
          </div>
          <div className="absolute bottom-4 right-2 -rotate-3 rounded-2xl comic-border bg-mint px-4 py-2 shadow-pop-sm sm:right-4">
            <p className="font-display text-sm text-ink">Portraits</p>
          </div>

          <div className="absolute inset-0 grid place-items-center">
            <Mascot size={210} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
