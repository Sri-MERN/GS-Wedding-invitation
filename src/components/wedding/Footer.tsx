import { motion } from "framer-motion";
import { Petals } from "./Petals";
import { Particles } from "./Particles";
import { Reveal } from "./Reveal";
import { Monogram } from "./Monogram";

const ease = [0.16, 1, 0.3, 1] as const;

export function Footer() {
  return (
    <footer className="relative py-28 sm:py-44 px-5 sm:px-6 overflow-hidden bg-maroon-deep">
      <div className="absolute inset-0 bg-ambient opacity-70" />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, oklch(0.78 0.12 82 / 0.06), transparent 60%)",
        }}
      />
      <Particles count={30} />
      <Petals count={6} />
      <div className="absolute inset-0 grain opacity-50" />

      <div className="relative max-w-3xl mx-auto text-center">
        <Reveal>
          <div className="mx-auto mb-8 sm:mb-10 scale-[0.8] sm:scale-100 origin-center">
            <Monogram size={130} className="mx-auto" />
          </div>
          <p className="font-tamil text-gold/80 tracking-widest mb-2 sm:mb-3 text-sm sm:text-base">
            ஆசிர்வாதங்களுடன்
          </p>
          <h3 className="font-display text-2xl sm:text-5xl shimmer-text leading-tight">
            R. Gururajan &amp; S. Shagathiya
          </h3>
          <p className="mt-4 sm:mt-6 text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] uppercase text-gold/70">
            07 · 06 · 2026
          </p>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, delay: 0.4, ease }}
            className="h-px w-24 mx-auto mt-8 sm:mt-12 mb-8 sm:mb-12"
            style={{
              background:
                "linear-gradient(90deg, transparent, oklch(0.78 0.12 82 / 0.6), transparent)",
            }}
          />

          <p className="text-xs sm:text-sm text-ivory/55 font-light italic">
            Made with love, for our family and friends.
          </p>
        </Reveal>
      </div>
    </footer>
  );
}
