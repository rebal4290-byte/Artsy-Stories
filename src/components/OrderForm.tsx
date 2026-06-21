"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  PartyPopper,
} from "lucide-react";
import Icon from "@/components/Icon";
import FileUploadBox from "@/components/FileUploadBox";
import { services, addOns, deadlineOptions } from "@/lib/data";

const steps = ["Service", "References", "Project", "Deadline", "Add-ons", "Review"];

interface OrderFormProps {
  initialServiceSlug?: string;
}

export default function OrderForm({ initialServiceSlug }: OrderFormProps) {
  const [step, setStep] = useState(0);
  const [serviceId, setServiceId] = useState(
    services.find((s) => s.slug === initialServiceSlug)?.id ?? services[0].id
  );
  const [description, setDescription] = useState("");
  const [deadlineId, setDeadlineId] = useState(deadlineOptions[0].id);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const service = services.find((s) => s.id === serviceId) ?? services[0];
  const deadline = deadlineOptions.find((d) => d.id === deadlineId) ?? deadlineOptions[0];

  const estimate = useMemo(() => {
    const base = service.startingPrice * deadline.multiplier;
    const addOnTotal = selectedAddOns.reduce((sum, id) => {
      const addOn = addOns.find((a) => a.id === id);
      return sum + (addOn?.price ?? 0);
    }, 0);
    return Math.round(base + addOnTotal);
  }, [service, deadline, selectedAddOns]);

  function toggleAddOn(id: string) {
    setSelectedAddOns((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  }

  function next() {
    setStep((s) => Math.min(s + 1, steps.length - 1));
  }
  function back() {
    setStep((s) => Math.max(s - 1, 0));
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-3xl comic-border bg-white p-10 text-center shadow-pop-lg"
      >
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-full comic-border bg-mint">
          <PartyPopper className="h-7 w-7 text-ink" />
        </span>
        <h2 className="mt-5 font-display text-2xl text-ink sm:text-3xl">
          Your project request is in!
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-ink/70">
          We&apos;ve sent a confirmation to your dashboard. An artist will review your
          brief for <strong>{service.name}</strong> and follow up within 24 hours
          with a concept timeline.
        </p>
        <div className="mt-6 inline-flex items-center gap-2 rounded-full comic-border bg-paper px-5 py-2.5 font-display text-sm">
          Estimated total: <span className="text-magenta">${estimate}</span>
        </div>
      </motion.div>
    );
  }

  return (
    <div>
      {/* progress */}
      <ol className="mb-8 flex flex-wrap items-center gap-2" aria-label="Order steps">
        {steps.map((label, i) => (
          <li key={label} className="flex items-center gap-2">
            <span
              className={`flex h-8 w-8 items-center justify-center rounded-full comic-border font-utility text-xs ${
                i <= step ? "bg-magenta text-white" : "bg-white text-ink/50"
              }`}
            >
              {i < step ? <CheckCircle2 className="h-4 w-4" /> : i + 1}
            </span>
            <span className={`hidden text-xs font-utility uppercase sm:inline ${i === step ? "text-ink" : "text-ink/45"}`}>
              {label}
            </span>
            {i < steps.length - 1 && <span className="h-px w-4 bg-ink/20 sm:w-8" aria-hidden />}
          </li>
        ))}
      </ol>

      <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
        <div className="rounded-3xl comic-border bg-white p-6 shadow-pop sm:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.25 }}
            >
              {step === 0 && (
                <div>
                  <h2 className="font-display text-2xl text-ink">Choose a service</h2>
                  <p className="mt-1 text-sm text-ink/60">Pick what you&apos;d like us to create.</p>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {services.map((s) => (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => setServiceId(s.id)}
                        className={`flex items-center gap-3 rounded-2xl comic-border p-3 text-left transition-colors ${
                          serviceId === s.id ? "bg-sunshine" : "bg-white hover:bg-paper-2"
                        }`}
                      >
                        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl comic-border bg-white">
                          <Icon name={s.icon} className="h-5 w-5 text-ink" />
                        </span>
                        <span>
                          <span className="block font-display text-sm text-ink">{s.name}</span>
                          <span className="block text-xs text-ink/55">From ${s.startingPrice}</span>
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 1 && (
                <div>
                  <h2 className="font-display text-2xl text-ink">Upload references</h2>
                  <p className="mt-1 text-sm text-ink/60">
                    Moodboards, sketches, or photos help your artist nail the brief.
                  </p>
                  <div className="mt-5">
                    <FileUploadBox />
                  </div>
                </div>
              )}

              {step === 2 && (
                <div>
                  <h2 className="font-display text-2xl text-ink">Describe your project</h2>
                  <p className="mt-1 text-sm text-ink/60">
                    The more detail, the fewer revision rounds you&apos;ll need.
                  </p>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={7}
                    placeholder="Tell us about the style, colors, mood, and anything you'd like included…"
                    className="mt-5 w-full rounded-2xl comic-border bg-paper-2/50 p-4 text-sm outline-none focus-visible:ring-2 focus-visible:ring-magenta"
                  />
                  <p className="mt-2 text-right text-xs text-ink/40">{description.length} characters</p>
                </div>
              )}

              {step === 3 && (
                <div>
                  <h2 className="font-display text-2xl text-ink">Choose your deadline</h2>
                  <p className="mt-1 text-sm text-ink/60">Need it sooner? Rush options are available.</p>
                  <div className="mt-5 space-y-3">
                    {deadlineOptions.map((d) => (
                      <button
                        key={d.id}
                        type="button"
                        onClick={() => setDeadlineId(d.id)}
                        className={`flex w-full items-center justify-between rounded-2xl comic-border p-4 text-left transition-colors ${
                          deadlineId === d.id ? "bg-cyan" : "bg-white hover:bg-paper-2"
                        }`}
                      >
                        <span>
                          <span className="block font-display text-sm text-ink">{d.label}</span>
                          <span className="block text-xs text-ink/55">{d.detail}</span>
                        </span>
                        {d.multiplier > 1 && (
                          <span className="stamp bg-white">+{Math.round((d.multiplier - 1) * 100)}%</span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 4 && (
                <div>
                  <h2 className="font-display text-2xl text-ink">Select add-ons</h2>
                  <p className="mt-1 text-sm text-ink/60">Optional extras for this project.</p>
                  <div className="mt-5 space-y-3">
                    {addOns.map((a) => (
                      <label
                        key={a.id}
                        className={`flex cursor-pointer items-start justify-between gap-3 rounded-2xl comic-border p-4 transition-colors ${
                          selectedAddOns.includes(a.id) ? "bg-grape/15" : "bg-white hover:bg-paper-2"
                        }`}
                      >
                        <span className="flex items-start gap-3">
                          <input
                            type="checkbox"
                            checked={selectedAddOns.includes(a.id)}
                            onChange={() => toggleAddOn(a.id)}
                            className="mt-1 h-4 w-4 accent-magenta"
                          />
                          <span>
                            <span className="block font-display text-sm text-ink">{a.name}</span>
                            <span className="block text-xs text-ink/55">{a.description}</span>
                          </span>
                        </span>
                        <span className="stamp shrink-0 bg-paper">+${a.price}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {step === 5 && (
                <div>
                  <h2 className="font-display text-2xl text-ink">Review &amp; submit</h2>
                  <p className="mt-1 text-sm text-ink/60">Double-check everything before sending it off.</p>
                  <dl className="mt-5 space-y-3 text-sm">
                    <div className="flex justify-between rounded-xl bg-paper-2/60 px-4 py-3">
                      <dt className="text-ink/60">Service</dt>
                      <dd className="font-display text-ink">{service.name}</dd>
                    </div>
                    <div className="flex justify-between rounded-xl bg-paper-2/60 px-4 py-3">
                      <dt className="text-ink/60">Deadline</dt>
                      <dd className="font-display text-ink">{deadline.label}</dd>
                    </div>
                    <div className="flex justify-between rounded-xl bg-paper-2/60 px-4 py-3">
                      <dt className="text-ink/60">Add-ons</dt>
                      <dd className="font-display text-ink text-right">
                        {selectedAddOns.length === 0
                          ? "None"
                          : selectedAddOns
                              .map((id) => addOns.find((a) => a.id === id)?.name)
                              .join(", ")}
                      </dd>
                    </div>
                    <div className="flex justify-between rounded-xl bg-paper-2/60 px-4 py-3">
                      <dt className="text-ink/60">Project notes</dt>
                      <dd className="max-w-[60%] text-right text-ink/80">
                        {description.trim() ? description.slice(0, 90) + (description.length > 90 ? "…" : "") : "Not provided"}
                      </dd>
                    </div>
                  </dl>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-between">
            <button
              type="button"
              onClick={back}
              disabled={step === 0}
              className="inline-flex items-center gap-1.5 rounded-full px-4 py-2.5 font-display text-sm text-ink/60 disabled:opacity-30"
            >
              <ArrowLeft className="h-4 w-4" /> Back
            </button>

            {step < steps.length - 1 ? (
              <button
                type="button"
                onClick={next}
                className="pop-hover inline-flex items-center gap-1.5 rounded-full comic-border bg-magenta px-6 py-2.5 font-display text-sm text-white shadow-pop-sm"
              >
                Continue <ArrowRight className="h-4 w-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setSubmitted(true)}
                className="pop-hover inline-flex items-center gap-1.5 rounded-full comic-border bg-mint px-6 py-2.5 font-display text-sm text-ink shadow-pop-sm"
              >
                Submit Project Request
              </button>
            )}
          </div>
        </div>

        {/* live estimate sidebar */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-3xl comic-border bg-ink p-6 text-paper shadow-pop">
            <p className="font-utility text-xs uppercase tracking-wide text-sunshine">
              Estimated Price
            </p>
            <p className="mt-2 font-display text-4xl text-white">${estimate}</p>
            <ul className="mt-5 space-y-2 text-sm text-paper/75">
              <li className="flex justify-between">
                <span>{service.name}</span>
                <span>${service.startingPrice}</span>
              </li>
              {deadline.multiplier > 1 && (
                <li className="flex justify-between">
                  <span>{deadline.label} delivery</span>
                  <span>+{Math.round((deadline.multiplier - 1) * 100)}%</span>
                </li>
              )}
              {selectedAddOns.map((id) => {
                const a = addOns.find((ad) => ad.id === id);
                if (!a) return null;
                return (
                  <li key={id} className="flex justify-between">
                    <span>{a.name}</span>
                    <span>+${a.price}</span>
                  </li>
                );
              })}
            </ul>
            <p className="mt-5 text-xs text-paper/55">
              Final pricing is confirmed by your matched artist before any payment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
