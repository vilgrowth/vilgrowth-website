import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Camera,
  BarChart3,
  ArrowUpRight,
  Check,
} from "lucide-react";
import { Reveal } from "./UI.jsx";

const steps = [
  {
    number: "01",
    icon: Users,
    title: "Attract Qualified Buyers",
    copy:
      "We build campaigns around people actively looking to buy — not empty clicks, weak traffic or vanity metrics.",
    points: [
      "Buyer-focused targeting",
      "Inventory-specific campaigns",
      "Less wasted attention",
    ],
  },
  {
    number: "02",
    icon: Camera,
    title: "Showcase Inventory Properly",
    copy:
      "Every vehicle needs strong creative, clear positioning and enough visibility to stand out from competing listings.",
    points: [
      "Stronger vehicle presentation",
      "Clearer dealership positioning",
      "Creative built to stop the scroll",
    ],
  },
  {
    number: "03",
    icon: BarChart3,
    title: "Optimize for Real Sales",
    copy:
      "We track what creates serious buyer demand and improve campaigns around the inventory that needs to move.",
    points: [
      "Clear performance tracking",
      "Ongoing campaign optimization",
      "Decisions tied to inventory movement",
    ],
  },
];

export default function Solution() {
  return (
    <section
      id="solution"
      className="relative overflow-hidden bg-[#05070B] py-24 md:py-32"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-full max-w-6xl -translate-x-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="pointer-events-none absolute -right-40 top-16 h-[460px] w-[460px] rounded-full bg-blue-600/10 blur-[150px]" />

      <div className="pointer-events-none absolute -left-48 bottom-0 h-[420px] w-[420px] rounded-full bg-blue-500/5 blur-[140px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <Reveal>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/15 bg-blue-500/5 px-4 py-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                <span className="text-xs font-medium uppercase tracking-[0.18em] text-white/50">
                  The VilGrowth Approach
                </span>
              </div>
            </Reveal>

            <Reveal delay={1}>
              <h2 className="max-w-2xl font-display text-4xl font-semibold leading-[1.04] tracking-[-0.04em] text-white sm:text-5xl lg:text-[3.8rem]">
                A system built to
                <span className="block bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600 bg-clip-text text-transparent">
                  move inventory faster.
                </span>
              </h2>
            </Reveal>
          </div>

          <Reveal delay={2}>
            <p className="max-w-xl text-lg leading-relaxed text-white/50 lg:ml-auto">
              VilGrowth connects the full path from buyer attention to dealership
              performance — so every campaign is built around moving vehicles,
              not just generating activity.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <Reveal key={step.title} delay={index + 1}>
                <motion.article
                  whileHover={{ y: -7 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-7"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.10] via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                  <div className="relative flex h-full flex-col">
                    <div className="mb-10 flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/15 bg-blue-500/10 text-blue-400">
                        <Icon size={21} strokeWidth={1.8} />
                      </div>

                      <span className="font-display text-sm font-medium tracking-[0.18em] text-white/20">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="mb-4 font-display text-2xl font-semibold tracking-[-0.03em] text-white">
                      {step.title}
                    </h3>

                    <p className="text-sm leading-7 text-white/45">
                      {step.copy}
                    </p>

                    <div className="mt-8 space-y-3">
                      {step.points.map((point) => (
                        <div
                          key={point}
                          className="flex items-start gap-3 text-sm text-white/60"
                        >
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-blue-400/20 bg-blue-500/10 text-blue-400">
                            <Check size={12} strokeWidth={2.2} />
                          </span>

                          <span>{point}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto pt-10">
                      <div className="h-px w-full bg-white/8" />
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-blue-500 to-blue-300 transition-all duration-500 group-hover:w-full" />
                </motion.article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={4}>
          <div className="mt-8 flex flex-col gap-5 rounded-3xl border border-blue-400/15 bg-gradient-to-r from-blue-600/[0.12] via-blue-500/[0.05] to-transparent px-7 py-7 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-display text-xl font-semibold tracking-[-0.02em] text-white">
                Every decision stays tied to one outcome.
              </p>

              <p className="mt-1 text-sm leading-relaxed text-white/45">
                Better buyer attention, stronger vehicle visibility and faster
                inventory movement.
              </p>
            </div>

            <a
              href="#process"
              className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-blue-400 transition hover:text-blue-300"
            >
              View the process
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}