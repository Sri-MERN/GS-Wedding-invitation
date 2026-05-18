import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { Ornament } from "./Ornament";

const TARGET = new Date("2026-06-07T07:30:00+05:30").getTime();

function useCountdown() {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(TARGET - now, 0);
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff / 3600000) % 24);
  const minutes = Math.floor((diff / 60000) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
}

export function Countdown() {
  const t = useCountdown();
  const items = [
    { label: "Days", value: t.days },
    { label: "Hours", value: t.hours },
    { label: "Minutes", value: t.minutes },
    { label: "Seconds", value: t.seconds },
  ];
  return (
    <section className="relative py-24 sm:py-40 px-5 sm:px-6 overflow-hidden">
      <div className="absolute inset-0 bg-ambient opacity-60" />
      <div className="relative max-w-5xl mx-auto text-center">
        <Reveal>
          <p className="text-[10px] tracking-[0.5em] uppercase text-gold/70 mb-3 sm:mb-4">
            Counting Every Moment
          </p>
          <h2 className="font-display text-3xl sm:text-6xl shimmer-text mb-4 sm:mb-6">
            Until We Begin
          </h2>
          <Ornament className="mb-12 sm:mb-16 opacity-70" />
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
          {items.map((it, i) => (
            <Reveal key={it.label} delay={i * 0.1}>
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{
                  duration: 4 + i * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="glass shadow-glow rounded-xl sm:rounded-2xl p-4 sm:p-10 relative overflow-hidden"
              >
                <div className="absolute -inset-1 bg-gradient-to-br from-gold/10 via-transparent to-maroon/20 pointer-events-none" />
                <div
                  suppressHydrationWarning
                  className="relative font-display text-4xl sm:text-7xl text-gold tabular-nums leading-none"
                >
                  {String(it.value).padStart(2, "0")}
                </div>
                <div className="relative mt-2 sm:mt-3 text-[9px] sm:text-xs tracking-[0.3em] sm:tracking-[0.35em] uppercase text-ivory/70">
                  {it.label}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
