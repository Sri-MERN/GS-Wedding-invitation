import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "./Reveal";
import { Ornament } from "./Ornament";
import g1 from "@/assets/gallery-1.webp";
import g2 from "@/assets/gallery-2.webp";
import g3 from "@/assets/gallery-3.webp";
import g4 from "@/assets/gallery-4.webp";
import g5 from "@/assets/gallery-5.webp";
import g6 from "@/assets/gallery-6.webp";
import groomImg from "@/assets/groom.webp";
import brideImg from "@/assets/bride.webp";

const images = [
  {
    src: g1,
    alt: "Mandap with marigold garlands",
    span: "row-span-2",
    caption: "The Mandap",
    subtitle: "Marigolds & mantras",
  },
  {
    src: g2,
    alt: "Bridal mehndi and gold bangles",
    span: "",
    caption: "Hands of Henna",
    subtitle: "Stories drawn in sandalwood",
  },
  {
    src: groomImg,
    alt: "R. Gururajan portrait",
    span: "row-span-2",
    caption: "R. Gururajan",
    subtitle: "The Groom · மணமகன்",
  },
  {
    src: g3,
    alt: "Temple jewelry on maroon silk",
    span: "row-span-2",
    caption: "Heirloom Gold",
    subtitle: "Carried through generations",
  },
  {
    src: g4,
    alt: "Glowing brass diya",
    span: "",
    caption: "Flame of Blessings",
    subtitle: "Light that never dims",
  },
  {
    src: brideImg,
    alt: "S. Shagathiya portrait",
    span: "row-span-2",
    caption: "S. Shagathiya",
    subtitle: "The Bride · மணமகள்",
  },
  {
    src: g6,
    alt: "Jasmine flowers on silk",
    span: "",
    caption: "Jasmine & Silk",
    subtitle: "Fragrance of celebration",
  },
  {
    src: g5,
    alt: "Banana leaf feast",
    span: "row-span-2",
    caption: "Sadhya",
    subtitle: "A feast shared in love",
  },
];

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <section className="relative py-24 sm:py-40 px-5 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-16 sm:mb-20">
          <p className="text-[10px] tracking-[0.5em] uppercase text-gold/70 mb-3 sm:mb-4">
            Moments
          </p>
          <h2 className="font-display text-3xl sm:text-6xl shimmer-text">
            A Visual Diary
          </h2>
          <Ornament className="mt-6 sm:mt-8 opacity-70" />
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[140px] sm:auto-rows-[240px] gap-2 sm:gap-4">
          {images.map((img, i) => (
            <Reveal key={i} delay={i * 0.06} className={img.span}>
              <motion.button
                whileHover={{ scale: 1.015 }}
                transition={{ duration: 0.5 }}
                onClick={() => setActive(i)}
                className="group relative h-full w-full overflow-hidden rounded-sm shadow-cinematic cursor-pointer"
                aria-label={`View ${img.caption}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />
                <div className="absolute inset-1 sm:inset-2 border border-gold/0 group-hover:border-gold/40 transition-colors duration-500 pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 p-3 sm:p-5 text-left translate-y-1 sm:translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                  <p className="font-display text-sm sm:text-xl text-ivory leading-tight">
                    {img.caption}
                  </p>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-gold/70 mt-0.5 sm:mt-1">
                    {img.subtitle}
                  </p>
                </div>
              </motion.button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-h-[88vh] max-w-[95vw] sm:max-w-[92vw]"
            >
              <motion.img
                initial={{ scale: 1 }}
                animate={{ scale: 1.04 }}
                transition={{ duration: 8, ease: "easeOut" }}
                src={images[active].src}
                alt={images[active].alt}
                className="max-h-[75vh] sm:max-h-[82vh] max-w-[90vw] sm:max-w-[92vw] object-contain rounded-sm shadow-cinematic"
              />
              <div className="absolute inset-x-0 -bottom-10 sm:-bottom-12 text-center">
                <p className="font-display italic text-xl sm:text-3xl text-ivory">
                  {images[active].caption}
                </p>
                <p className="mt-1 text-[10px] tracking-[0.4em] uppercase text-gold/70">
                  {images[active].subtitle}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
