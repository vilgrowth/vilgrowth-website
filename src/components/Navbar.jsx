import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navigation = [
  { label: "Process", href: "#process" },
  { label: "Why VilGrowth", href: "#why-vilgrowth" },
  { label: "Founder", href: "#founder" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <motion.header
        initial={{ y: -90, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "border-b border-white/10 bg-[#05070B]/85 shadow-[0_12px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-24 max-w-6xl items-center justify-between px-6">
          <a
            href="#top"
            onClick={closeMenu}
            className="group inline-flex items-center gap-3"
            aria-label="VilGrowth homepage"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 shadow-[0_0_30px_rgba(47,92,255,0.12)] transition duration-300 group-hover:border-blue-400/40 group-hover:bg-blue-500/15">
              <span className="text-sm font-bold tracking-[-0.08em] text-white">
                VG
              </span>
            </div>

            <span className="font-display text-xl font-semibold tracking-[-0.04em] text-white">
              Vil
              <span className="bg-gradient-to-r from-blue-300 to-blue-600 bg-clip-text text-transparent">
                Growth
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-9 md:flex">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative text-sm font-medium text-white/60 transition duration-200 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_35px_rgba(37,99,235,0.28)] transition duration-300 hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-[0_14px_45px_rgba(37,99,235,0.38)]"
            >
              Book a Strategy Call
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen((current) => !current)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white transition hover:bg-white/[0.08] md:hidden"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#05070B]/98 px-6 pb-8 pt-32 backdrop-blur-xl md:hidden"
          >
            <motion.div
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 16, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto flex max-w-md flex-col"
            >
              <div className="flex flex-col divide-y divide-white/10 border-y border-white/10">
                {navigation.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={closeMenu}
                    initial={{ x: -18, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.06 }}
                    className="flex items-center justify-between py-5 text-xl font-medium text-white"
                  >
                    {item.label}
                    <ArrowUpRight size={18} className="text-blue-400" />
                  </motion.a>
                ))}
              </div>

              <a
                href="#contact"
                onClick={closeMenu}
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-4 font-semibold text-white shadow-[0_14px_45px_rgba(37,99,235,0.28)]"
              >
                Book a Strategy Call
                <ArrowUpRight size={18} />
              </a>

              <p className="mt-6 text-center text-sm text-white/35">
                Helping dealerships move inventory faster.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}