import React from "react";
import { Building2, Car, Warehouse, Store, ShieldCheck } from "lucide-react";
import { Reveal } from "./UI.jsx";

const MARKS = [
  { icon: Car, label: "Dealer Group" },
  { icon: Building2, label: "Auto Holdings" },
  { icon: Warehouse, label: "Motor Lot Co." },
  { icon: Store, label: "Premium Autos" },
  { icon: ShieldCheck, label: "Trusted Dealers" },
];

export default function Trust() {
  return (
    <section className="py-14 bg-bgAlt border-y border-white/8">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-9">
          <p className="text-xs font-semibold tracking-widest uppercase text-textTertiary font-display">
            Trusted by ambitious dealerships
          </p>
        </Reveal>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-70">
          {MARKS.map((m) => (
            <div key={m.label} className="flex items-center gap-2 text-textSecondary">
              <m.icon size={18} />
              <span className="text-sm font-medium font-display tracking-tight">{m.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
