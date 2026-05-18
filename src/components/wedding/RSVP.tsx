import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { Ornament } from "./Ornament";

const actions = [
  {
    label: "WhatsApp RSVP",
    sub: "Send us a message",
    href: "https://wa.me/918428892641?text=I%20will%20be%20attending%20R.%20Gururajan%20%26%20S.%20Shagathiya%27s%20wedding",
  },
  { label: "Call Us", sub: "We'd love to hear you", href: "tel:+918428892641" },
  {
    label: "Navigate to Venue",
    sub: "D.R. Mahal, Santhapet",
    href: "https://maps.app.goo.gl/euVwhDnwRAAoPEUL7?g_st=iw",
  },
];

export function RSVP() {
  return (
    <section className="relative py-24 sm:py-40 px-5 sm:px-6 overflow-hidden">
      <div className="absolute inset-0 bg-ambient opacity-50" />
      <div className="relative max-w-4xl mx-auto text-center">
        <Reveal>
          <p className="text-[10px] tracking-[0.5em] uppercase text-gold/70 mb-3 sm:mb-4">
            Kindly Reply
          </p>
          <h2 className="font-display text-3xl sm:text-6xl shimmer-text">
            Be Part of Our Story
          </h2>
          <Ornament className="mt-6 sm:mt-8 mb-8 sm:mb-10 opacity-70" />
          <p className="text-base sm:text-xl font-display italic text-ivory/80 max-w-xl mx-auto leading-relaxed px-2">
            "Your graceful presence will make our celebration complete."
          </p>
        </Reveal>

        <div className="mt-10 sm:mt-16 grid sm:grid-cols-3 gap-3 sm:gap-5">
          {actions.map((a, i) => (
            <Reveal key={a.label} delay={i * 0.1}>
              <motion.a
                href={a.href}
                target={a.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.4 }}
                className="group relative block glass rounded-sm p-5 sm:p-8 overflow-hidden min-h-[80px] sm:min-h-0"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute -inset-px rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700 shadow-glow pointer-events-none" />
                <div className="relative">
                  <p className="font-display text-lg sm:text-2xl text-ivory mb-1 sm:mb-2">
                    {a.label}
                  </p>
                  <p className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-gold/70">
                    {a.sub}
                  </p>
                </div>
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
