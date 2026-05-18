import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import { Reveal } from "./Reveal";
import { Ornament } from "./Ornament";

type Event = {
  title: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  mapUrl: string;
  calUrl: string;
};

const events: Event[] = [
  {
    title: "Marriage Ceremony",
    date: "Sunday · June 07, 2026",
    time: "7:30 AM – 9:00 AM",
    venue: "D.R. Mahal",
    address: "Santhapet, T.K. Mandapam",
    mapUrl: "https://maps.app.goo.gl/euVwhDnwRAAoPEUL7?g_st=iw",
    calUrl:
      "https://calendar.google.com/calendar/render?action=TEMPLATE&text=R.+Gururajan+%26+S.+Shagathiya+Wedding&dates=20260607T020000Z/20260607T033000Z&details=Marriage+Ceremony&location=D.R.+Mahal,+Santhapet,+T.K.+Mandapam",
  },
  {
    title: "Reception",
    date: "Wednesday · June 10, 2026",
    time: "6:00 PM onwards",
    venue: "Royal Mahal",
    address: "Vellalar Street, Pattur, Chennai – 600122",
    mapUrl: "https://maps.app.goo.gl/95ZHTS6tsVyDLoT97?g_st=iw",
    calUrl:
      "https://calendar.google.com/calendar/render?action=TEMPLATE&text=R.+Gururajan+%26+S.+Shagathiya+Reception&dates=20260610T123000Z/20260610T160000Z&details=Wedding+Reception&location=Royal+Mahal,+Vellalar+Street,+Pattur,+Chennai+600122",
  },
];

function DirectionButton({ href }: { href: string }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className="group relative inline-flex items-center gap-2.5 px-6 py-3 text-[10px] tracking-[0.3em] uppercase text-gold rounded-full overflow-hidden"
      style={{
        border: "1px solid oklch(0.78 0.12 82 / 0.4)",
        boxShadow: "0 0 0 oklch(0.86 0.12 84 / 0)",
        transition: "box-shadow 0.5s ease, border-color 0.5s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow =
          "0 0 24px oklch(0.86 0.12 84 / 0.3), inset 0 0 20px oklch(0.86 0.12 84 / 0.08)";
        e.currentTarget.style.borderColor = "oklch(0.86 0.12 84 / 0.7)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 0 0 oklch(0.86 0.12 84 / 0)";
        e.currentTarget.style.borderColor = "oklch(0.78 0.12 82 / 0.4)";
      }}
    >
      <span className="absolute inset-0 bg-gradient-to-r from-gold/0 via-gold/12 to-gold/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
      <motion.span
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        <MapPin className="w-3.5 h-3.5" />
      </motion.span>
      <motion.span
        className="relative inline-flex items-center gap-1.5"
        initial={{ opacity: 0.8 }}
        whileHover={{ opacity: 1 }}
      >
        <span>Directions</span>
        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </motion.span>
    </motion.a>
  );
}

function CalendarButton({ href }: { href: string }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className="group relative inline-flex items-center gap-2.5 px-5 py-3 text-[10px] tracking-[0.3em] uppercase text-ivory/80 rounded-full overflow-hidden"
      style={{
        border: "1px solid oklch(0.94 0.025 80 / 0.15)",
        transition: "border-color 0.5s ease, color 0.5s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "oklch(0.94 0.025 80 / 0.5)";
        e.currentTarget.style.color = "oklch(0.94 0.025 80 / 0.95)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "oklch(0.94 0.025 80 / 0.15)";
        e.currentTarget.style.color = "oklch(0.94 0.025 80 / 0.8)";
      }}
    >
      <Calendar className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity" />
      <span className="inline-flex items-center gap-1.5">
        <span>Add to Calendar</span>
        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </span>
    </motion.a>
  );
}

export function Events() {
  return (
    <section id="events" className="relative py-24 sm:py-40 px-5 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-16 sm:mb-20">
          <p className="text-[10px] tracking-[0.5em] uppercase text-gold/70 mb-3 sm:mb-4">
            Save The Dates
          </p>
          <h2 className="font-display text-3xl sm:text-6xl shimmer-text">
            Celebrations
          </h2>
          <Ornament className="mt-6 sm:mt-8 opacity-70" />
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-12">
          {events.map((e, i) => {
            const [dayName, fullDate] = e.date.split(" · ");
            return (
              <Reveal key={e.title} delay={i * 0.15}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className={`group relative glass rounded-sm p-6 sm:p-12 overflow-hidden shadow-cinematic ${i % 2 === 1 ? "md:translate-y-12" : ""}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-maroon/30 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                  <div
                    className="absolute -inset-px rounded-sm pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.86 0.12 84 / 0.6), transparent 40%, transparent 60%, oklch(0.86 0.12 84 / 0.6))",
                      WebkitMask:
                        "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                      WebkitMaskComposite: "xor",
                      maskComposite: "exclude",
                      padding: "1px",
                    }}
                  />
                  <div className="absolute inset-2 sm:inset-3 border border-gold/20 pointer-events-none" />
                  <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-gold/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                  <div className="relative">
                    <p className="text-[10px] tracking-[0.5em] uppercase text-gold/70 mb-3 sm:mb-4">
                      {i === 0 ? "Mangalya Dharanam" : "Reception"}
                    </p>
                    <h3 className="font-display text-2xl sm:text-4xl text-ivory mb-6 sm:mb-8">
                      {e.title}
                    </h3>

                    <div
                      className="relative mb-6 sm:mb-8 p-5 sm:p-8 rounded-sm overflow-hidden"
                      style={{
                        background:
                          "linear-gradient(135deg, oklch(0.86 0.12 84 / 0.06), oklch(0.68 0.10 30 / 0.04), transparent 70%)",
                        border: "1px solid oklch(0.78 0.12 82 / 0.15)",
                      }}
                    >
                      <div
                        className="absolute -top-16 -right-16 w-40 h-40 rounded-full pointer-events-none"
                        style={{
                          background:
                            "radial-gradient(circle, oklch(0.86 0.12 84 / 0.12), transparent 60%)",
                          filter: "blur(30px)",
                        }}
                      />
                      <div className="absolute left-0 top-3 bottom-3 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent" />

                      <div className="relative pl-4 sm:pl-5">
                        <p className="text-[10px] tracking-[0.4em] uppercase text-gold/60 mb-2">
                          {dayName}
                        </p>
                        <p
                          className="font-display text-2xl sm:text-4xl md:text-5xl leading-[1.1] pb-[0.12em]"
                          style={{
                            color: "oklch(0.86 0.12 84)",
                            filter:
                              "drop-shadow(0 2px 12px oklch(0.86 0.12 84 / 0.25))",
                          }}
                        >
                          {fullDate}
                        </p>
                        <div className="gold-divider opacity-50 my-2 sm:my-3 w-12 sm:w-16" />
                        <p className="text-xs sm:text-sm text-ivory/70 font-light tracking-wide">
                          {e.time}
                        </p>
                      </div>
                    </div>

                    <div className="mb-6 sm:mb-8 space-y-1 sm:space-y-1.5 pl-1">
                      <p className="font-display text-lg sm:text-xl text-ivory/90">
                        {e.venue}
                      </p>
                      <p className="text-xs sm:text-sm text-ivory/55 font-light">
                        {e.address}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <DirectionButton href={e.mapUrl} />
                      <CalendarButton href={e.calUrl} />
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
