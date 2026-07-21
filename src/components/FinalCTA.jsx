import React from "react";
import { PrimaryButton, Reveal } from "./UI.jsx";
import viliusPhoto from "../assets/vilius-transparent.png";

export default function FinalCTA() {
  return (
    <section className="py-28 relative overflow-hidden bg-gradient-to-br from-bgAlt to-bg">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(47,92,255,0.16)_0%,transparent_70%)]" />
      <div className="max-w-2xl mx-auto px-6 text-center relative">
        <Reveal>
          <div className="flex justify-center mb-7">
            <div className="w-[68px] h-[68px] rounded-full p-1 bg-gradient-to-br from-bgAlt to-bg border border-white/15 shadow-card">
              <div className="w-full h-full rounded-full overflow-hidden bg-bgAlt">
                <img
                  src={viliusPhoto}
                  alt="Vilius Savickas, Founder of VilGrowth"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight mb-4 text-text">
            Ready to Move More Inventory?
          </h2>
          <p className="text-base mb-9 text-textSecondary">
            Let's talk about your dealership, your inventory priorities, and whether VilGrowth is
            the right fit.
          </p>
          <PrimaryButton>Book a Strategy Call</PrimaryButton>
        </Reveal>
      </div>
    </section>
  );
}
