import React from "react";
import { Clock3, MessageSquareWarning, BadgeDollarSign } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "./UI.jsx";

const problems = [
  {
    number: "01",
    icon: Clock3,
    title: "Inventory sits too long",
    copy:
      "Every extra week on the lot ties up capital, reduces momentum and makes vehicles harder to move.",
  },
  {
    number: "02",
    icon: MessageSquareWarning,
    title: "Too many weak enquiries",
    copy:
      "Sales teams spend time chasing people who browse, disappear or were never serious buyers.",
  },
  {
    number: "03",
    icon: BadgeDollarSign,
    title: "Ad spend doesn't move vehicles",
    copy:
      "Budget gets used on clicks and impressions without a clear connection to inventory turnover.",
  },
];

export default function Problem() {
  return (
    <section
      id="problem"
      className="relative overflow-hidden bg-[#070A10] py-24 md:py-32"
    >
      {/* Background details */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-full max-w-6xl -translate-x-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-blue-700/10 blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[380px] w-[380px] rounded-full bg-blue-500/5 blur-[130px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <Reveal>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/15 bg-blue-500/5 px-4 py-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                <span className="text-xs font-medium uppercase tracking-[0.18em] text-white/50">
                  The Real Problem
                </span>
              </div>
            </Reveal>

            <Reveal delay={1}>
              <h2 className="max-w-xl font-display text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-[3.8rem]">
                Moving inventory
                <span className="block text-white/35">
                  shouldn't take months.
                </span>
              </h2>
            </Reveal>
          </div>

          <Reveal delay={2}>
            <p className="max-w-xl text-lg leading-relaxed text-white/50 lg:ml-auto">
              Most dealerships do not have an inventory problem. They have an
              attention, buyer quality and execution problem.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {problems.map((problem, index) => {
            const Icon = problem.icon;

            return (
              <Reveal key={problem.title} delay={index + 1}>
                <motion.article
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-7 backdrop-blur-sm"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.08] via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                  <div className="relative">
                    <div className="mb-12 flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/15 bg-blue-500/10 text-blue-400">
                        <Icon size={21} strokeWidth={1.8} />
                      </div>

                      <span className="font-display text-sm font-medium tracking-[0.18em] text-white/20">
                        {problem.number}
                      </span>
                    </div>

                    <h3 className="mb-3 font-display text-xl font-semibold tracking-[-0.02em] text-white">
                      {problem.title}
                    </h3>

                    <p className="text-sm leading-7 text-white/45">
                      {problem.copy}
                    </p>
                  </div>

                  <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-blue-500 to-blue-300 transition-all duration-500 group-hover:w-full" />
                </motion.article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={4}>
          <div className="mt-8 flex flex-col gap-4 rounded-3xl border border-white/10 bg-gradient-to-r from-blue-600/[0.10] to-transparent px-7 py-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-display text-lg font-semibold text-white">
                More activity does not always mean more sales.
              </p>

              <p className="mt-1 text-sm text-white/45">
                The goal is not more noise. It is more qualified buyer demand.
              </p>
            </div>

            <a
              href="#solution"
              className="inline-flex shrink-0 items-center text-sm font-semibold text-blue-400 transition hover:text-blue-300"
            >
              See the VilGrowth approach
              <span className="ml-2">→</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}