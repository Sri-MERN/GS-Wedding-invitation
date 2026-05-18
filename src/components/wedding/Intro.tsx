import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Ornament } from "./Ornament";
import { Monogram } from "./Monogram";
import { Celebration } from "./Celebration";

export function Intro({
  open,
  onOpen,
  onCelebrate,
}: {
  open: boolean;
  onOpen: () => void;
  onCelebrate?: () => void;
}) {
  const [celebrating, setCelebrating] = useState(false);

  const handleOpen = () => {
    if (celebrating) return;
    setCelebrating(true);
    onCelebrate?.();
    onOpen();
  };

  return (
    <AnimatePresence>
      {!open && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.06, filter: "blur(8px)" }}
          transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
          className="fixed inset-0 z-50 bg-maroon-deep bg-ambient flex items-center justify-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            className="relative z-10 text-center px-5 sm:px-6 max-w-2xl"
          >
            <div className="mx-auto mb-6 sm:mb-8 scale-[0.7] sm:scale-100 origin-center">
              <Monogram size={120} className="mx-auto" />
            </div>
            <Ornament className="mb-6 sm:mb-8 opacity-80" />
            <p className="text-[10px] sm:text-sm tracking-[0.35em] sm:tracking-[0.4em] uppercase text-gold/80 mb-6 sm:mb-8">
              With the blessings of our families
            </p>
            <h1
              className="font-display text-4xl sm:text-7xl md:text-8xl leading-[1.15] pb-[0.18em] shimmer-text"
              style={{ filter: "drop-shadow(0 4px 10px oklch(0 0 0 / 0.5))" }}
            >
              <span className="text-gold/60 text-[0.4em] sm:text-[0.5em] align-super font-sans tracking-[0.2em] sm:tracking-[0.3em]">
                R.
              </span>
              Gururajan
              <span className="block text-gold/80 text-xl sm:text-3xl my-2 sm:my-3 font-light">
                &
              </span>
              <span className="text-gold/60 text-[0.4em] sm:text-[0.5em] align-super font-sans tracking-[0.2em] sm:tracking-[0.3em]">
                S.
              </span>
              Shagathiya
            </h1>
            <p className="mt-6 sm:mt-8 text-xs sm:text-sm tracking-[0.25em] sm:tracking-[0.3em] uppercase text-ivory/70">
              07 · 06 · 2026
            </p>

            <motion.button
              whileHover={celebrating ? {} : { scale: 1.04 }}
              whileTap={celebrating ? {} : { scale: 0.98 }}
              onClick={handleOpen}
              disabled={celebrating}
              className="group mt-10 sm:mt-14 relative inline-flex items-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full border border-gold/50 text-gold text-[10px] sm:text-sm tracking-[0.3em] sm:tracking-[0.35em] uppercase overflow-hidden transition-opacity min-h-[48px]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-gold/0 via-gold/15 to-gold/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <span className="relative">
                {celebrating ? "Opening..." : "Open Invitation"}
              </span>
              <span className="relative">→</span>
            </motion.button>
          </motion.div>

          {celebrating && <Celebration />}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
