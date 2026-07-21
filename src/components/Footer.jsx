import React from "react";
import { EMAIL } from "./UI.jsx";

export default function Footer() {
  return (
    <footer className="py-14 bg-bg border-t border-white/8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-8">
        <div>
          <p className="font-display text-lg font-bold mb-2 text-text">
            Vil<span className="text-accentGlow">Growth</span>
          </p>
          <p className="text-sm text-textTertiary max-w-xs">
            Helping Dealerships Move Inventory Faster.
          </p>
        </div>

        <div className="flex flex-col gap-2 text-sm text-textTertiary">
          <a href="#top" className="hover:text-text transition-colors">Home</a>
          <a href="#process" className="hover:text-text transition-colors">Process</a>
          <a href="#founder" className="hover:text-text transition-colors">About</a>
          <a href="#faq" className="hover:text-text transition-colors">FAQ</a>
        </div>

        <div className="flex flex-col gap-2 text-sm text-textTertiary">
          <a href={`mailto:${EMAIL}`} className="hover:text-text transition-colors">{EMAIL}</a>
          <a href="#" className="hover:text-text transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-text transition-colors">Privacy Policy</a>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 mt-10 pt-6 border-t border-white/8 text-xs text-textTertiary">
        © {new Date().getFullYear()} VilGrowth. All rights reserved.
      </div>
    </footer>
  );
}
