import { motion } from "framer-motion";
import { Petals } from "./Petals";
import { Particles } from "./Particles";
import { Monogram } from "./Monogram";

const revealEase = [0.16, 1, 0.3, 1] as const;

export function Ending() {
  return (
    <section className="relative py-32 sm:py-48 px-6 overflow-hidden bg-maroon-deep">
      {/* Atmospheric layers */}
      <div className="absolute inset-0 bg-ambient opacity-60" />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, oklch(0.78 0.12 82 / 0.1), transparent 65%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 60%, oklch(0.55 0.09 55 / 0.08), transparent 50%)",
        }}
      />
      <div className="absolute inset-0 grain opacity-40" />

      <Particles count={35} />
      <Petals count={6} />

      {/* Cinematic vignette overlay */}
      <motion.div
        animate={{ opacity: [0.5, 0.75, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, oklch(0 0 0 / 0.4) 100%)",
        }}
      />

      {/* Warm gold glow sweep */}
      <motion.div
        animate={{ opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
        className="absolute -top-1/3 left-1/2 -translate-x-1/2 h-[80vh] w-[80vh] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.78 0.12 82 / 0.18), transparent 60%)",
          filter: "blur(50px)",
        }}
      />

      <div className="relative max-w-3xl mx-auto text-center">
        {/* Closing message */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.4, ease: revealEase }}
          className="mb-16"
        >
          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, delay: 0.2, ease: revealEase }}
            className="block h-px w-24 mx-auto mb-10"
            style={{
              background:
                "linear-gradient(90deg, transparent, oklch(0.86 0.12 84 / 0.8), transparent)",
            }}
          />

          <p className="font-tamil text-gold/80 text-sm sm:text-base tracking-widest mb-6">
            ஆசீர்வாதங்களுடன் வரவேற்கிறோம்
          </p>

          <p className="font-display italic text-2xl sm:text-3xl md:text-4xl text-ivory/85 max-w-2xl mx-auto leading-[1.6] tracking-wide">
            "Your presence will make our celebration complete."
          </p>

          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, delay: 0.6, ease: revealEase }}
            className="block h-px w-24 mx-auto mt-10"
            style={{
              background:
                "linear-gradient(90deg, transparent, oklch(0.86 0.12 84 / 0.8), transparent)",
            }}
          />
        </motion.div>

        {/* Monogram with glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.6, delay: 0.4, ease: revealEase }}
          className="flex justify-center mb-12"
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
            <Monogram size={100} />
          </div>
        </motion.div>

        {/* Floating particles accent */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 0.8 }}
        >
          <p className="text-[10px] tracking-[0.5em] uppercase text-gold/60 mb-4">
            With love, blessings, and joy
          </p>
          <p className="text-xs tracking-[0.4em] uppercase text-gold/50">
            We await your presence
          </p>
        </motion.div>
      </div>
    </section>
  );
}
