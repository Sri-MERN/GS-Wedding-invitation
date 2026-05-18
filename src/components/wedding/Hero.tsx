import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroBg from "@/assets/hero-bg.webp";
import groomImg from "@/assets/groom.webp";
import brideImg from "@/assets/bride.webp";
import { Petals } from "./Petals";
import { Particles } from "./Particles";
import { Ornament } from "./Ornament";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.04, 1.16]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] w-full overflow-hidden"
    >
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img
          src={heroBg}
          alt="Cinematic Tamil wedding ambience with brass diyas, jasmine and maroon silk"
          className="h-full w-full object-cover scale-105"
          width={1920}
          height={1280}
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/35 to-background" />
        <div className="absolute inset-0 bg-ambient mix-blend-overlay" />
        <div className="absolute inset-0 [background:radial-gradient(ellipse_at_center,transparent_40%,oklch(0_0_0/0.55)_100%)] pointer-events-none" />
        <motion.div
          aria-hidden
          animate={{ opacity: [0.35, 0.55, 0.35] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-1/3 left-1/2 -translate-x-1/2 h-[120vh] w-[120vh] rounded-full"
          style={{
            background:
              "radial-gradient(circle, oklch(0.78 0.13 70 / 0.22), transparent 60%)",
            filter: "blur(40px)",
          }}
        />
      </motion.div>

      <Petals count={5} />
      <Particles count={12} />

      {/* Desktop Cinematic Side Portrait Overlays with Slow Floating Effect */}
      <div className="hidden lg:block absolute left-8 xl:left-16 top-1/2 -translate-y-1/2 z-20 w-44 xl:w-48 overflow-visible">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{
            opacity: 0.85,
            x: 0,
            y: [-8, 8, -8],
          }}
          transition={{
            initial: { delay: 1.8, duration: 1.5, ease: [0.16, 1, 0.3, 1] },
            y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          }}
          whileHover={{ scale: 1.05, opacity: 1, y: 0 }}
          className="relative aspect-[3/4.5] rounded-sm overflow-hidden border border-gold/30 shadow-cinematic group cursor-pointer"
        >
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500 z-10" />
          <img
            src={groomImg}
            alt="Groom R. Gururajan"
            className="w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-110"
          />
          <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-20 text-center">
            <p className="text-[9px] tracking-[0.3em] uppercase text-gold/80">
              The Groom
            </p>
            <p className="font-display text-base text-ivory mt-0.5 tracking-wide">
              R. Gururajan
            </p>
          </div>
          <div className="absolute inset-2 border border-gold/15 pointer-events-none z-30" />
        </motion.div>
      </div>

      <div className="hidden lg:block absolute right-8 xl:right-16 top-1/2 -translate-y-1/2 z-20 w-44 xl:w-48 overflow-visible">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{
            opacity: 0.85,
            x: 0,
            y: [8, -8, 8],
          }}
          transition={{
            initial: { delay: 2.0, duration: 1.5, ease: [0.16, 1, 0.3, 1] },
            y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          }}
          whileHover={{ scale: 1.05, opacity: 1, y: 0 }}
          className="relative aspect-[3/4.5] rounded-sm overflow-hidden border border-gold/30 shadow-cinematic group cursor-pointer"
        >
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500 z-10" />
          <img
            src={brideImg}
            alt="Bride S. Shagathiya"
            className="w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-110"
          />
          <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-20 text-center">
            <p className="text-[9px] tracking-[0.3em] uppercase text-gold/80">
              The Bride
            </p>
            <p className="font-display text-base text-ivory mt-0.5 tracking-wide">
              S. Shagathiya
            </p>
          </div>
          <div className="absolute inset-2 border border-gold/15 pointer-events-none z-30" />
        </motion.div>
      </div>

      <motion.div
        style={{ opacity, y: contentY }}
        className="relative z-10 flex min-h-[100svh] items-center justify-center px-5 sm:px-6"
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
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-gold/60"
      >
        <span className="text-[10px] tracking-[0.4em] uppercase">Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="h-8 w-px bg-gradient-to-b from-gold/70 to-transparent"
        />
      </motion.div>
    </section>
  );
}
