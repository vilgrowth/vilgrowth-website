import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SectionHeading, Reveal } from "./UI.jsx";

const FAQS = [
  {
    q: "What dealerships do you work with?",
    a: "Independent used-car dealers, premium dealerships, and growing dealership groups looking for a dedicated growth partner.",
  },
  {
    q: "What does the service include?",
    a: "Automotive creative, campaign management, advertising strategy, and ongoing optimization — all focused on moving inventory faster.",
  },
  {
    q: "How do we get started?",
    a: "Book a strategy call. We'll discuss your dealership, inventory priorities, and current marketing to see if we're the right fit.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="faq" className="py-24 md:py-28 bg-bgAlt">
      <div className="max-w-2xl mx-auto px-6">
        <SectionHeading eyebrow="FAQ" title="A Few Common Questions." center />

        <div className="flex flex-col gap-3">
          {FAQS.map((f, i) => {
            const isOpen = openIdx === i;

            return (
              <Reveal key={f.q} delay={i}>
                <div className="rounded-xl overflow-hidden bg-card border border-border">
                  <button
                    className="w-full flex items-center justify-between text-left px-6 py-5"
                    onClick={() => setOpenIdx(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm font-semibold pr-6 text-text">
                      {f.q}
                    </span>

                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <ChevronDown
                        size={18}
                        className="text-textTertiary flex-shrink-0"
                      />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-5 text-sm leading-relaxed text-textSecondary">
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}