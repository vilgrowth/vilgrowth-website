import React from "react";
import { motion } from "framer-motion";
import {
  Search,
  Rocket,
  SlidersHorizontal,
  TrendingUp,
  ArrowDown,
} from "lucide-react";
import { Reveal } from "./UI.jsx";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery",
    copy:
      "We review your dealership, current inventory, market position and the vehicles that need attention first.",
  },
  {
    number: "02",
    icon: Rocket,
    title: "Launch",
    copy:
      "We build and launch campaigns around your inventory, buyer intent and dealership goals.",
  },
  {
    number: "03",
    icon: SlidersHorizontal,
    title: "Optimize",
    copy:
      "We monitor performance, improve creative and adjust targeting based on real buyer response.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Scale",
    copy:
      "We increase investment only where the data shows stronger demand and faster inventory movement.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-[#070A10] py-24 md:py-32"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-full max-w-6xl -translate-x-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="pointer-events-none absolute -left-40 top-24 h-[420px] w-[420px] rounded-full bg-blue-600/10 blur-[150px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-blue-500/5 blur-[140px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <Reveal>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/15 bg-blue-500/5 px-4 py-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />

                <span className="text-xs font-medium uppercase tracking-[0.18em] text-white/50">
                  How It Works
                </span>
              </div>
            </Reveal>

            <Reveal delay={1}>
              <h2 className="max-w-2xl font-display text-4xl font-semibold leading-[1.04] tracking-[-0.04em] text-white sm:text-5xl lg:text-[3.8rem]">
                A focused process.
                <span className="block text-white/35">
                  Built around your inventory.
                </span>
              </h2>
            </Reveal>
          </div>

          <Reveal delay={2}>
            <p className="max-w-xl text-lg leading-relaxed text-white/50 lg:ml-auto">
              No complicated retainers, vague activity or unnecessary layers.
              Every step is designed to create better buyer demand and move the
              right vehicles faster.
            </p>
          </Reveal>
        </div>

        <div className="relative mt-16">
          <div className="absolute bottom-10 left-[24px] top-10 hidden w-px bg-gradient-to-b from-blue-500/60 via-blue-400/25 to-transparent lg:block" />

          <div className="space-y-5">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <Reveal key={step.number} delay={index + 1}>
                  <motion.article
                    whileHover={{ x: 6 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="group relative grid gap-6 rounded-3xl border border-white/10 bg-white/[0.025] p-6 backdrop-blur-sm md:grid-cols-[110px_1fr_auto] md:items-center md:p-7"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/[0.08] via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                    <div className="relative flex items-center gap-4">
                      <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/15 bg-blue-500/10 text-blue-400 shadow-[0_0_30px_rgba(37,99,235,0.08)]">
                        <Icon size={21} strokeWidth={1.8} />
                      </div>

                      <span className="font-display text-sm font-medium tracking-[0.18em] text-white/20">
                        {step.number}
                      </span>
                    </div>

                    <div className="relative">
                      <h3 className="font-display text-2xl font-semibold tracking-[-0.03em] text-white">
                        {step.title}
                      </h3>

                      <p className="mt-2 max-w-2xl text-sm leading-7 text-white/45">
                        {step.copy}
                      </p>
                    </div>

                    <div className="relative hidden items-center gap-3 md:flex">
                      <span className="text-xs font-medium uppercase tracking-[0.16em] text-white/20">
                        Step {step.number}
                      </span>

                      {index < steps.length - 1 && (
                        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/30">
                          <ArrowDown size={15} />
                        </div>
                      )}
                    </div>

                    <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-blue-500 to-blue-300 transition-all duration-500 group-hover:w-full" />
                  </motion.article>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal delay={5}>
          <div className="mt-8 rounded-3xl border border-blue-400/15 bg-gradient-to-r from-blue-600/[0.12] via-blue-500/[0.05] to-transparent px-7 py-7">
            <p className="font-display text-xl font-semibold tracking-[-0.02em] text-white">
              Simple process. Clear priorities. Better execution.
            </p>

            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/45">
              You always know what is being launched, what is improving and how
              each decision connects back to inventory movement.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}