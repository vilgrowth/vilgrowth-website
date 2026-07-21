import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const CALENDLY_LINK = "https://calendly.com/your-link";
export const EMAIL = "vilius@vilgrowth.com";

export const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
};

export function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      custom={delay}
      variants={fadeUp}
    >
      {children}
    </motion.div>
  );
}

export function PrimaryButton({ children, className = "", href = CALENDLY_LINK }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full font-semibold text-sm bg-accent text-white shadow-glow transition-colors hover:bg-[#2650E0] ${className}`}
    >
      {children}
      <ArrowRight size={16} />
    </motion.a>
  );
}

export function SecondaryButton({ children, href, className = "" }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full font-semibold text-sm text-text border border-white/15 hover:border-accentGlow/60 transition-colors ${className}`}
    >
      {children}
    </a>
  );
}

export function Eyebrow({ children }) {
  return (
    <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase mb-4 text-accentGlow font-display">
      <span className="w-5 h-[2px] rounded-full bg-accentGlow inline-block" />
      {children}
    </div>
  );
}

export function SectionHeading({ eyebrow, title, sub, center = false }) {
  return (
    <div className={`max-w-2xl mb-16 ${center ? "mx-auto text-center" : ""}`}>
      <Reveal>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="font-display text-3xl sm:text-[2.4rem] font-semibold tracking-tight leading-[1.12] mb-4 text-text">
          {title}
        </h2>
        {sub && (
          <p className={`text-[15px] leading-relaxed text-textSecondary ${center ? "mx-auto" : ""}`} style={{ maxWidth: 460 }}>
            {sub}
          </p>
        )}
      </Reveal>
    </div>
  );
}

export function Card({ children, className = "", hover = true }) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, borderColor: "rgba(108,141,255,0.4)" } : {}}
      transition={{ duration: 0.25 }}
      className={`rounded-2xl bg-card border border-border ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function IconBox({ icon: Icon, size = 20 }) {
  return (
    <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 bg-accent/10 border border-accent/25">
      <Icon size={size} className="text-accentGlow" />
    </div>
  );
}
