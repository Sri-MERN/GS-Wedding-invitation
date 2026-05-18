import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "./Reveal";
import { Ornament } from "./Ornament";

const blessings = [
  {
    title: "From the Groom's Family",
    name: "Family of R. Gururajan",
    text: "With abundant joy and blessings, we welcome you to share in this sacred moment as our son begins a new chapter with his beloved.",
  },
  {
    title: "From the Bride's Family",
    name: "Family of S. Shagathiya",
    text: "It is with grateful hearts that we invite you to bless our daughter as she steps into a beautiful new beginning beside the one she loves.",
  },
];

export function Family() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative py-24 sm:py-40 px-5 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <Reveal className="text-center mb-12 sm:mb-16">
          <p className="text-[10px] tracking-[0.5em] uppercase text-gold/70 mb-3 sm:mb-4">
            With Blessings
          </p>
          <h2 className="font-display text-3xl sm:text-6xl shimmer-text">
            Our Families
          </h2>
          <p className="font-tamil text-gold/80 text-xs sm:text-sm mt-3 sm:mt-4 tracking-wide">
            குடும்ப ஆசிர்வாதங்களுடன்
          </p>
          <Ornament className="mt-6 sm:mt-8 opacity-70" />
        </Reveal>

        <div className="space-y-3">
          {blessings.map((b, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="glass rounded-sm overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 sm:p-8 text-left min-h-[64px] sm:min-h-0"
                >
                  <div className="flex-1 pr-4">
                    <p className="text-[10px] tracking-[0.4em] uppercase text-gold/70 mb-1 sm:mb-2">
                      {b.title}
                    </p>
                    <h3 className="font-display text-lg sm:text-2xl text-ivory">
                      {b.name}
                    </h3>
                  </div>
                  <motion.span
                    animate={{ rotate: open === i ? 45 : 0 }}
                    transition={{ duration: 0.4 }}
                    className="text-gold text-2xl font-light flex-shrink-0"
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-8 pb-6 sm:pb-8">
                        <div className="gold-divider opacity-40 mb-4 sm:mb-6" />
                        <p className="text-sm sm:text-base text-ivory/70 leading-relaxed font-light">
                          {b.text}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
