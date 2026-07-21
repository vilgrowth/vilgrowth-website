import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Camera,
  Target,
  CarFront,
  Check,
} from "lucide-react";
import { Reveal } from "./UI.jsx";
import viliusPhoto from "../assets/vilius-transparent.png";

const principles = [
  {
    icon: CarFront,
    title: "Automotive Focus",
    copy: "Built specifically around dealership inventory and buyer behaviour.",
  },
  {
    icon: Camera,
    title: "Strong Presentation",
    copy: "Professional creative designed to make vehicles stand out.",
  },
  {
    icon: Target,
    title: "Clear Objective",
    copy: "Every decision stays focused on moving inventory faster.",
  },
];

const cardMotion = {
  initial: {
    opacity: 0,
    y: 24,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

export default function Founder() {
  return (
    <section
      id="founder"
      className="relative overflow-hidden bg-[#05070B] py-24 md:py-32"
    >
      {/* Top divider */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-full max-w-6xl -translate-x-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[480px] w-[480px] rounded-full bg-blue-600/[0.08] blur-[160px]" />

      <div className="pointer-events-none absolute -right-48 bottom-0 h-[420px] w-[420px] rounded-full bg-blue-500/[0.05] blur-[150px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          {/* Founder image */}
          <Reveal>
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -6 }}
              className="group relative mx-auto w-full max-w-[460px] lg:mx-0"
            >
              {/* External blue glow */}
              <div className="pointer-events-none absolute inset-8 -z-10 rounded-[2.2rem] bg-blue-600/20 opacity-60 blur-[80px] transition duration-700 group-hover:opacity-90" />

              <div className="relative h-[540px] overflow-hidden rounded-[2rem] bg-[#0A0D13] shadow-[0_0_90px_rgba(37,99,235,0.12),0_35px_110px_rgba(0,0,0,0.55)] ring-1 ring-white/[0.06] transition duration-500 group-hover:ring-blue-400/[0.12]">
                {/* Image */}
                <motion.img
                  src={viliusPhoto}
                  alt="Vilius Savickas, Founder of VilGrowth"
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{ objectPosition: "center 18%" }}
                  initial={{ scale: 1.06 }}
                  whileHover={{ scale: 1.095 }}
                  transition={{
                    duration: 0.9,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />

                {/* Soft top light */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-blue-400/[0.08] to-transparent" />

                {/* Edge highlight */}
                <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/[0.05] via-transparent to-blue-500/[0.05]" />

                {/* Bottom image fade */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/[0.12] to-transparent" />

                {/* Name */}
                <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black via-black/70 to-transparent px-7 pb-7 pt-40">
                  <p className="font-display text-2xl font-semibold tracking-[-0.03em] text-white">
                    Vilius Savickas
                  </p>

                  <p className="mt-1 text-sm text-white/50">
                    Founder of VilGrowth
                  </p>
                </div>

                {/* Badge */}
                <div className="absolute right-5 top-5 z-20 rounded-full border border-white/[0.08] bg-black/30 px-3 py-1.5 shadow-lg backdrop-blur-xl">
                  <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/60">
                    Automotive Growth
                  </span>
                </div>
              </div>
            </motion.div>
          </Reveal>

          {/* Founder content */}
          <div>
            <Reveal>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/15 bg-blue-500/[0.05] px-4 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-40" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-blue-500" />
                </span>

                <span className="text-xs font-medium uppercase tracking-[0.18em] text-white/50">
                  Meet the Founder
                </span>
              </div>
            </Reveal>

            <Reveal delay={1}>
              <h2 className="max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-white sm:text-5xl lg:text-[3.7rem]">
                Built from a real interest
                <span className="block bg-gradient-to-r from-white/40 via-white/25 to-white/15 bg-clip-text text-transparent">
                  in cars, creative and sales.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={2}>
              <div className="mt-8 max-w-2xl space-y-5 text-[15px] leading-7 text-white/50">
                <p>
                  VilGrowth was created around a simple observation: dealerships
                  do not need more marketing noise. They need a focused partner
                  who understands how important it is to present inventory
                  properly, reach serious buyers and keep vehicles moving.
                </p>

                <p>
                  My background in automotive photography and content creation
                  showed me how much stronger presentation can influence buyer
                  attention. VilGrowth combines that visual understanding with
                  focused advertising and clear performance tracking.
                </p>

                <p>
                  The business is intentionally built for dealerships rather
                  than every type of company. That focus keeps the strategy,
                  creative and reporting connected to one objective: faster
                  inventory movement.
                </p>
              </div>
            </Reveal>

            {/* Principle cards */}
            <Reveal delay={3}>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {principles.map((principle, index) => {
                  const Icon = principle.icon;

                  return (
                    <motion.div
                      key={principle.title}
                      variants={cardMotion}
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{
                        delay: index * 0.08,
                        duration: 0.55,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      whileHover={{
                        y: -5,
                        transition: { duration: 0.25 },
                      }}
                      className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.025)] transition duration-300 hover:border-blue-400/[0.18] hover:bg-blue-500/[0.045]"
                    >
                      <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-blue-500/10 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

                      <div className="relative mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/[0.14] bg-blue-500/[0.08] text-blue-400 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition duration-300 group-hover:bg-blue-500/[0.13]">
                        <Icon size={18} strokeWidth={1.8} />
                      </div>

                      <h3 className="relative font-display text-sm font-semibold text-white">
                        {principle.title}
                      </h3>

                      <p className="relative mt-2 text-xs leading-5 text-white/40">
                        {principle.copy}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </Reveal>

            {/* Contact box */}
            <Reveal delay={4}>
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.25 }}
                className="relative mt-8 overflow-hidden rounded-3xl border border-blue-400/[0.14] bg-gradient-to-r from-blue-600/[0.11] via-blue-500/[0.045] to-transparent p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.035)]"
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-500/10 blur-[60px]" />

                <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-blue-400/20 bg-blue-500/10 text-blue-400">
                      <Check size={13} strokeWidth={2.2} />
                    </span>

                    <div>
                      <p className="font-display text-base font-semibold text-white">
                        Direct founder involvement
                      </p>

                      <p className="mt-1 text-sm leading-relaxed text-white/45">
                        Strategy, creative direction and performance stay closely
                        connected.
                      </p>
                    </div>
                  </div>

                  <a
                    href="mailto:vilius@vilgrowth.com"
                    className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-blue-400 transition duration-300 hover:text-blue-300"
                  >
                    Contact Vilius

                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                </div>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}