import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  CalendarDays,
  Layers3,
} from "lucide-react";
import { Reveal } from "./UI.jsx";

const benefits = [
  "No long-term contracts",
  "Automotive focused",
  "Direct founder involvement",
];

export default function CTA() {
  const scrollToServices = () => {
    document
      .getElementById("solution")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#05070B] px-6 py-24 md:py-32"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-full max-w-6xl -translate-x-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.12] blur-[170px]" />

      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-[360px] w-[700px] -translate-x-1/2 rounded-full bg-blue-500/[0.07] blur-[150px]" />

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative mx-auto max-w-6xl"
      >
        <div className="group relative overflow-hidden rounded-[2.25rem] border border-white/[0.08] bg-[#080B11]/90 px-6 py-16 shadow-[0_45px_140px_rgba(0,0,0,0.55),0_0_100px_rgba(37,99,235,0.08)] backdrop-blur-xl sm:px-10 md:py-20 lg:px-16">
          <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.14] blur-[110px] transition duration-700 group-hover:bg-blue-500/[0.18]" />

          <div
            className="pointer-events-none absolute inset-0 opacity-[0.16]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/35 to-transparent" />

          <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
            <Reveal>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/15 bg-blue-500/[0.06] px-4 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-35" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-blue-500" />
                </span>

                <span className="text-xs font-medium uppercase tracking-[0.18em] text-white/50">
                  Ready when you are
                </span>
              </div>
            </Reveal>

            <Reveal delay={1}>
              <h2 className="max-w-4xl font-display text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-white sm:text-5xl md:text-6xl lg:text-[4.7rem]">
                Ready to move
                <span className="block bg-gradient-to-r from-white via-white/70 to-white/35 bg-clip-text text-transparent">
                  more inventory?
                </span>
              </h2>
            </Reveal>

            <Reveal delay={2}>
              <p className="mt-7 max-w-2xl text-base leading-7 text-white/48 sm:text-lg sm:leading-8">
                Every dealership is different. That is why every strategy starts
                with a conversation, not a template.
              </p>
            </Reveal>

            <Reveal delay={3}>
              <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
                <motion.a
                  href="mailto:vilius@vilgrowth.com?subject=VilGrowth Discovery Call"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-blue-600 px-7 py-4 text-sm font-semibold text-white shadow-[0_14px_40px_rgba(37,99,235,0.32)] transition duration-300 hover:bg-blue-500 hover:shadow-[0_18px_55px_rgba(37,99,235,0.42)] sm:w-auto"
                >
                  <CalendarDays size={18} strokeWidth={1.9} />
                  Book a Discovery Call

                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </motion.a>

                <motion.button
                  type="button"
                  onClick={scrollToServices}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="group inline-flex w-full items-center justify-center gap-3 rounded-full border border-white/[0.1] bg-white/[0.035] px-7 py-4 text-sm font-semibold text-white/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-md transition duration-300 hover:border-blue-400/[0.2] hover:bg-blue-500/[0.06] hover:text-white sm:w-auto"
                >
                  <Layers3 size={18} strokeWidth={1.8} />
                  View Services
                </motion.button>
              </div>
            </Reveal>

            <Reveal delay={4}>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 text-sm text-white/42 sm:flex-row sm:gap-7">
                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-2.5 whitespace-nowrap"
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-full border border-blue-400/20 bg-blue-500/10 text-blue-400">
                      <Check size={11} strokeWidth={2.4} />
                    </span>

                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </motion.div>
    </section>
  );
}