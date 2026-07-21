import React from "react";
import { motion } from "framer-motion";
import { PrimaryButton, SecondaryButton, Reveal } from "./UI.jsx";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden bg-[#05070B] pt-32"
    >
      {/* Background image */}
      <img
        src="/hero-car.jpg"
        alt="Premium dealership vehicle"
        className="absolute inset-0 h-full w-full scale-[1.03] object-cover object-[72%_center]"
      />

      {/* Dark overlays */}
      <div className="absolute inset-0 bg-[#05070B]/50" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#05070B] via-[#071120]/95 to-[#071120]/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#071120] via-transparent to-[#05070B]/55" />

      {/* Blue atmospheric glow */}
      <motion.div
        className="absolute right-[10%] top-[18%] h-[420px] w-[420px] rounded-full bg-blue-600/20 blur-[130px]"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-8rem)] max-w-6xl items-center px-6 pb-20">
        <div className="max-w-4xl">
          <Reveal>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/5 px-4 py-2 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              <span className="text-xs font-medium uppercase tracking-[0.16em] text-white/60">
                Dealership Growth Partner
              </span>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <h1 className="max-w-4xl font-display text-5xl font-semibold leading-[0.98] tracking-[-0.04em] text-white sm:text-6xl lg:text-[5.2rem]">
              Helping Dealerships
              <span className="block bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600 bg-clip-text text-transparent">
                Move Inventory Faster.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={2}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/60 sm:text-xl">
              We help dealerships attract qualified buyers, increase visibility
              and move inventory faster.
            </p>
          </Reveal>

          <Reveal delay={3}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <PrimaryButton>Book a Strategy Call</PrimaryButton>

              <SecondaryButton href="#process">
                View Our Process
              </SecondaryButton>
            </div>
          </Reveal>

          <Reveal delay={4}>
            <div className="mt-8 flex flex-wrap gap-3">
              <div className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/65 backdrop-blur-sm">
                Qualified Buyers
              </div>

              <div className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/65 backdrop-blur-sm">
                Faster Inventory Turnover
              </div>

              <div className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/65 backdrop-blur-sm">
                Clear Performance
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />
    </section>
  );
}