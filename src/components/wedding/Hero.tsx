import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.webp";
import { Ornament } from "./Ornament";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Cinematic Tamil wedding ambience with brass diyas, jasmine and maroon silk"
          className="h-full w-full object-cover"
          width={1920}
          height={1280}
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/35 to-background" />
        <div className="absolute inset-0 [background:radial-gradient(ellipse_at_center,transparent_40%,oklch(0_0_0/0.55)_100%)] pointer-events-none" />
      </div>



      <div className="relative z-10 flex min-h-[100svh] items-center justify-center px-5 sm:px-6"
      >
        <div className="text-center max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1.2 }}
            className="text-[10px] sm:text-xs tracking-[0.5em] sm:tracking-[0.6em] uppercase text-gold/80 mb-6 sm:mb-8"
          >
            — The Wedding of —
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl sm:text-8xl md:text-[10rem] leading-[1.15] sm:leading-[1.2] pb-[0.15em] sm:pb-[0.18em] tracking-tight shimmer-text"
            style={{ filter: "drop-shadow(0 4px 12px oklch(0 0 0 / 0.55))" }}
          >
            <span className="text-gold/60 text-[0.3em] sm:text-[0.35em] align-super font-sans tracking-[0.2em] sm:tracking-[0.3em]">
              R.
            </span>
            Gururajan
          </motion.h1>

          <div className="my-4 sm:my-6 flex items-center justify-center gap-3 sm:gap-5">
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                delay: 1.2,
                duration: 1.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="h-px w-10 sm:w-28 origin-right bg-gradient-to-l from-gold/80 to-transparent"
            />
            <motion.span
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4, duration: 1.2 }}
              className="font-display italic text-xl sm:text-3xl text-gold/90"
            >
              &
            </motion.span>
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                delay: 1.2,
                duration: 1.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="h-px w-10 sm:w-28 origin-left bg-gradient-to-r from-gold/80 to-transparent"
            />
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-display italic text-4xl sm:text-8xl md:text-[10rem] leading-[1.15] sm:leading-[1.2] pb-[0.15em] sm:pb-[0.18em] tracking-tight shimmer-text"
            style={{ filter: "drop-shadow(0 4px 12px oklch(0 0 0 / 0.55))" }}
          >
            <span className="text-gold/60 text-[0.3em] sm:text-[0.35em] align-super font-sans tracking-[0.2em] sm:tracking-[0.3em]">
              S.
            </span>
            Shagathiya
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, duration: 1.2 }}
            className="mt-8 sm:mt-10 text-sm sm:text-lg text-ivory/75 font-light max-w-xl mx-auto leading-relaxed px-2 sm:px-0"
          >
            Together with our families, we invite you to celebrate the beginning
            of our forever.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.0, duration: 1.2 }}
            className="mt-6 sm:mt-8 text-[10px] sm:text-sm tracking-[0.4em] sm:tracking-[0.5em] uppercase text-gold/80"
          >
            June 07, 2026 · Chennai
          </motion.p>
        </div>
      </div>
    </section>
  );
}
