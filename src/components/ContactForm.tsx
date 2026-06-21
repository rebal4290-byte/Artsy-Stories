"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="rounded-3xl comic-border bg-white p-7 shadow-pop sm:p-9">
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="sent"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center py-8 text-center"
          >
            <span className="grid h-14 w-14 place-items-center rounded-full comic-border bg-mint">
              <CheckCircle2 className="h-7 w-7 text-ink" />
            </span>
            <h3 className="mt-4 font-display text-xl text-ink">Message sent!</h3>
            <p className="mt-2 text-sm text-ink/65">
              Thanks for reaching out — we&apos;ll reply within one business day.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block font-display text-sm text-ink">Name</span>
                <input
                  required
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-xl comic-border bg-paper-2/40 px-4 py-2.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-magenta"
                />
              </label>
              <label className="block">
                <span className="mb-2 block font-display text-sm text-ink">Email</span>
                <input
                  required
                  type="email"
                  placeholder="you@email.com"
                  className="w-full rounded-xl comic-border bg-paper-2/40 px-4 py-2.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-magenta"
                />
              </label>
            </div>
            <label className="block">
              <span className="mb-2 block font-display text-sm text-ink">Subject</span>
              <input
                required
                type="text"
                placeholder="What's this about?"
                className="w-full rounded-xl comic-border bg-paper-2/40 px-4 py-2.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-magenta"
              />
            </label>
            <label className="block">
              <span className="mb-2 block font-display text-sm text-ink">Message</span>
              <textarea
                required
                rows={5}
                placeholder="Tell us a bit about what you need…"
                className="w-full rounded-2xl comic-border bg-paper-2/40 p-4 text-sm outline-none focus-visible:ring-2 focus-visible:ring-magenta"
              />
            </label>
            <button
              type="submit"
              className="pop-hover inline-flex items-center gap-2 rounded-full comic-border bg-magenta px-7 py-3 font-display text-sm text-white shadow-pop-sm"
            >
              Send Message <Send className="h-4 w-4" aria-hidden />
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
