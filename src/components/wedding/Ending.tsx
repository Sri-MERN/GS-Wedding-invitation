import { motion } from "framer-motion";
import { Monogram } from "./Monogram";

const revealEase = [0.16, 1, 0.3, 1] as const;

export function Ending() {
  return (
    <section className="relative py-20 sm:py-32 px-5 sm:px-6 overflow-hidden bg-maroon-deep">
      <div className="absolute inset-0 bg-ambient opacity-60" />

      <div className="relative max-w-3xl mx-auto text-center">
        {/* ── Emotional closing message ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.4, ease: revealEase }}
        >
          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, delay: 0.2, ease: revealEase }}
            className="block h-px w-20 sm:w-24 mx-auto mb-8 sm:mb-10"
            style={{
              background:
                "linear-gradient(90deg, transparent, oklch(0.86 0.12 84 / 0.8), transparent)",
            }}
          />

          <p className="font-tamil text-gold/80 text-sm sm:text-base tracking-widest mb-4 sm:mb-6">
            ஆசீர்வாதங்களுடன் வரவேற்கிறோம்
          </p>

          <p className="font-display italic text-xl sm:text-3xl md:text-4xl text-ivory/85 max-w-2xl mx-auto leading-[1.5] sm:leading-[1.6] tracking-wide px-2">
            "Your presence will make our celebration complete."
          </p>

          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, delay: 0.6, ease: revealEase }}
            className="block h-px w-20 sm:w-24 mx-auto mt-8 sm:mt-10"
            style={{
              background:
                "linear-gradient(90deg, transparent, oklch(0.86 0.12 84 / 0.8), transparent)",
            }}
          />
        </motion.div>

        {/* ── Monogram ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1.6, delay: 0.3, ease: revealEase }}
          className="flex justify-center mt-10 sm:mt-14 mb-6 sm:mb-8"
        >
          <div className="relative">
            <div
              aria-hidden
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, oklch(0.86 0.12 84 / 0.4), transparent 65%)",
                filter: "blur(30px)",
                transform: "scale(1.5)",
              }}
            />
            <Monogram size={80} />
          </div>
        </motion.div>

        {/* ── Couple names & date ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1.2, delay: 0.5, ease: revealEase }}
        >
          <p className="font-tamil text-gold/70 tracking-widest text-xs sm:text-sm mb-2 sm:mb-3">
            ஆசிர்வாதங்களுடன்
          </p>
          <h3 className="font-display text-xl sm:text-4xl md:text-5xl shimmer-text leading-tight">
            R. Gururajan &amp; S. Shagathiya
          </h3>
          <p className="mt-3 sm:mt-5 text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] uppercase text-gold/60">
            07 · 06 · 2026
          </p>
        </motion.div>

        {/* ── Final divider & closing line ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.7 }}
        >
          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, delay: 0.8, ease: revealEase }}
            className="block h-px w-20 sm:w-24 mx-auto mt-8 sm:mt-12 mb-6 sm:mb-8"
            style={{
              background:
                "linear-gradient(90deg, transparent, oklch(0.78 0.12 82 / 0.6), transparent)",
            }}
          />

          <p className="text-xs sm:text-sm text-ivory/55 font-light italic">
            Made with love, for our family and friends.
          </p>

          <p className="mt-6 sm:mt-8 text-[10px] tracking-[0.5em] uppercase text-gold/50">
            With love, blessings, and joy
          </p>
          <p className="text-[10px] tracking-[0.4em] uppercase text-gold/40 mt-1">
            We await your presence
          </p>
        </motion.div>
      </div>
    </section>
  );
}
