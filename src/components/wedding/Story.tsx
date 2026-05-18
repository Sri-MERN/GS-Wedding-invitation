import { Reveal } from "./Reveal";
import { Ornament } from "./Ornament";

const chapters = [
  {
    no: "I",
    title: "Family Blessings",
    text: "Two families, bound by tradition and love, came together with prayers and blessings — the quiet beginning of every great Tamil love story.",
  },
  {
    no: "II",
    title: "The Engagement",
    text: "Under the warm glow of the kuthuvilakku, promises were exchanged. Rings, garlands, and the gentle hum of nadaswaram sealed a new chapter.",
  },
  {
    no: "III",
    title: "The Wedding",
    text: "And now, surrounded by everyone we love, we tie the sacred thread — stepping forward into a lifetime written together.",
  },
];

export function Story() {
  return (
    <section className="relative py-24 sm:py-40 px-5 sm:px-6 overflow-hidden">
      <div className="absolute inset-0 bg-ambient opacity-50 pointer-events-none" />
      <div className="relative max-w-4xl mx-auto">
        <Reveal className="text-center mb-16 sm:mb-20">
          <p className="text-[10px] tracking-[0.5em] uppercase text-gold/70 mb-3 sm:mb-4">
            Our Journey
          </p>
          <h2 className="font-display text-3xl sm:text-6xl shimmer-text">
            Chapters of Love
          </h2>
          <Ornament className="mt-6 sm:mt-8 opacity-70" />
        </Reveal>

        <div className="relative">
          <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent" />
          {chapters.map((c, i) => (
            <Reveal key={c.no} delay={i * 0.1} y={40}>
              <div
                className={`relative grid sm:grid-cols-2 gap-6 sm:gap-16 mb-16 sm:mb-28 items-center ${
                  i % 2 === 1 ? "sm:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="pl-16 sm:pl-0 sm:pr-12 sm:text-right">
                  <span className="absolute left-0 sm:left-1/2 sm:-translate-x-1/2 top-2 w-10 h-10 sm:w-12 sm:h-12 rounded-full glass flex items-center justify-center text-gold font-display text-base sm:text-lg shadow-glow">
                    <span className="absolute inset-0 rounded-full bg-gold/20 blur-md animate-pulse" />
                    <span className="relative">{c.no}</span>
                  </span>
                  <p className="text-[10px] tracking-[0.5em] uppercase text-gold/70 mb-2 sm:mb-3">
                    Chapter {c.no}
                  </p>
                  <h3 className="font-display text-2xl sm:text-4xl text-ivory mb-3 sm:mb-4">
                    {c.title}
                  </h3>
                  <p className="text-sm sm:text-base text-ivory/65 leading-relaxed font-light">
                    {c.text}
                  </p>
                </div>
                <div />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
