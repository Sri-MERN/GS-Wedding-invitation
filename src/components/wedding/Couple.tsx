import groomImg from "@/assets/groom.png";
import brideImg from "@/assets/bride.png";
import { Reveal } from "./Reveal";
import { Ornament } from "./Ornament";
import { motion, useSpring, useTransform } from "framer-motion";
import React, { useRef, MouseEvent } from "react";

function LocalParticles() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-gold/40 blur-[0.5px]"
          style={{
            left: `${15 + Math.random() * 70}%`,
            top: `${15 + Math.random() * 70}%`,
          }}
          animate={{
            y: [-12, 12, -12],
            x: [-8, 8, -8],
            opacity: [0.2, 0.7, 0.2],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 6 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function CinematicPortrait({
  img,
  name,
  role,
  company,
  align,
  desc,
  tamilRole,
}: {
  img: string;
  name: string;
  role: string;
  company: string;
  align: "left" | "right";
  desc: string;
  tamilRole: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Springy mouse movement for 3D parallax card tilt (desktop only)
  const x = useSpring(0, { stiffness: 100, damping: 20 });
  const y = useSpring(0, { stiffness: 100, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    x.set((mouseX / (width / 2)) * 6);
    y.set((mouseY / (height / 2)) * -6);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const frameX = useTransform(x, (val) => -val * 1.5);
  const frameY = useTransform(y, (val) => -val * 1.5);
  const imgX = useTransform(x, (val) => val * 0.8);
  const imgY = useTransform(y, (val) => val * 0.8);

  return (
    <Reveal y={60} className="group relative w-full">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative mx-auto max-w-xs sm:max-w-sm md:max-w-none flex flex-col items-center"
        style={{ perspective: 1200 }}
      >
        {/* Soft Blurred Backlit Portrait Halo */}
        <div className="absolute inset-0 -z-20 pointer-events-none scale-105 overflow-visible">
          <img
            src={img}
            alt=""
            className="w-full h-full object-cover blur-3xl opacity-35 transition-opacity duration-1000 group-hover:opacity-50"
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-radial from-gold/20 via-transparent to-transparent blur-2xl opacity-70" />
        </div>

        {/* 3D Moving Base Card - tilt disabled on mobile for performance */}
        <motion.div
          style={{ rotateX: y, rotateY: x }}
          className="relative w-full aspect-[3/4.2] overflow-visible rounded-sm"
        >
          {/* Parallax Golden Outer Frame */}
          <motion.div
            style={{ x: frameX, y: frameY }}
            className="absolute -inset-3 sm:-inset-4 border border-gold/30 rounded-sm pointer-events-none z-0 hidden sm:block"
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            <div className="absolute top-0 left-0 w-3 sm:w-4 h-3 sm:h-4 border-t border-l border-gold" />
            <div className="absolute top-0 right-0 w-3 sm:w-4 h-3 sm:h-4 border-t border-r border-gold" />
            <div className="absolute bottom-0 left-0 w-3 sm:w-4 h-3 sm:h-4 border-b border-l border-gold" />
            <div className="absolute bottom-0 right-0 w-3 sm:w-4 h-3 sm:h-4 border-b border-r border-gold" />
          </motion.div>

          {/* Main Portrait Card Wrapper */}
          <div className="relative w-full h-full overflow-hidden rounded-sm bg-maroon-deep/30 backdrop-blur-sm border border-gold/15 shadow-cinematic z-10">
            <div className="absolute inset-0 bg-ambient mix-blend-overlay opacity-30 pointer-events-none z-10" />
            <div className="absolute inset-0 bg-black/10 z-0" />

            <LocalParticles />

            <motion.div
              style={{ x: imgX, y: imgY, scale: 1.05 }}
              className="absolute inset-0 w-full h-full z-0"
            >
              <img
                src={img}
                alt={`Portrait of ${name}`}
                className="w-full h-full object-cover object-center filter saturate-[0.95] contrast-[1.05] transition-transform duration-[1200ms] group-hover:scale-[1.03]"
                width={800}
                height={1120}
              />
            </motion.div>

            <div className="absolute inset-0 bg-gradient-to-t from-background via-black/15 to-transparent z-10" />
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/50 pointer-events-none z-10" />

            <div className="absolute inset-2 sm:inset-3 border border-gold/25 pointer-events-none z-20" />
          </div>
        </motion.div>

        {/* Editorial Magazine Typography Card */}
        <div
          className={`relative z-20 mt-6 sm:mt-8 w-full px-2 ${align === "right" ? "md:text-right" : "md:text-left"} text-center`}
        >
          <div
            className={`flex items-center justify-center ${align === "right" ? "md:justify-end" : "md:justify-start"} gap-2 mb-2`}
          >
            <span className="text-[10px] tracking-[0.4em] uppercase text-gold-soft">
              {role}
            </span>
            <span className="h-[3px] w-[3px] rounded-full bg-gold/50" />
            <span className="text-[11px] font-tamil tracking-wider text-gold/70">
              {tamilRole}
            </span>
          </div>

          <h3 className="font-display text-3xl sm:text-5xl lg:text-6xl text-ivory tracking-wide leading-tight shimmer-text">
            {name}
          </h3>

          <div
            className={`h-[1px] w-16 sm:w-20 bg-gradient-to-r ${align === "right" ? "md:from-transparent md:to-gold/50" : "md:from-gold/50 md:to-transparent"} from-transparent via-gold/40 to-transparent my-3 sm:my-4 mx-auto ${align === "right" ? "md:mr-0 md:ml-auto" : "md:ml-0 md:mr-auto"}`}
          />

          <p className="text-xs sm:text-sm font-light text-gold-soft/90 tracking-wide font-sans mb-1">
            {company.split(" · ")[0]}
          </p>
          <p className="text-[11px] sm:text-xs text-ivory/60 tracking-wider font-sans mb-3 sm:mb-4 uppercase">
            {company.split(" · ")[1]}
          </p>

          <p className="text-sm italic font-display text-ivory/70 max-w-sm mx-auto md:mx-0 leading-relaxed">
            "{desc}"
          </p>
        </div>
      </div>
    </Reveal>
  );
}

export function Couple() {
  return (
    <section
      id="couple"
      className="relative py-24 sm:py-48 px-5 sm:px-6 overflow-hidden bg-background"
    >
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-gold/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-maroon/10 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <Reveal className="text-center mb-16 sm:mb-24">
          <p className="text-[10px] tracking-[0.5em] uppercase text-gold/70 mb-3 sm:mb-4">
            The Union
          </p>
          <h2 className="font-display text-4xl sm:text-7xl shimmer-text">
            Two Souls, One Destiny
          </h2>
          <Ornament className="mt-6 sm:mt-8 opacity-70" />
        </Reveal>

        <div className="grid md:grid-cols-12 gap-12 sm:gap-16 md:gap-8 items-start">
          <div className="md:col-span-5 md:pr-4">
            <CinematicPortrait
              img={groomImg}
              name="R. Gururajan"
              role="The Groom"
              tamilRole="மணமகன்"
              company="Software Engineer · Neurealm Chennai"
              align="left"
              desc="An anchor of strength and brilliant intellect, navigating our future with deep devotion and silent grace."
            />
          </div>

          <div className="hidden md:flex md:col-span-2 h-full flex-col items-center justify-center self-stretch py-12 relative">
            <div className="w-px h-full bg-gradient-to-b from-transparent via-gold/25 to-transparent absolute animate-pulse" />
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 rounded-full border border-gold/20 flex items-center justify-center bg-background/85 backdrop-blur-md relative z-10 shadow-glow"
            >
              <span className="font-display italic text-lg text-gold/70 select-none">
                G&S
              </span>
            </motion.div>
          </div>

          <div className="md:col-span-5 md:pl-4 md:mt-24">
            <CinematicPortrait
              img={brideImg}
              name="S. Shagathiya"
              role="The Bride"
              tamilRole="மணமகள்"
              company="Technology Analyst · Infosys Chennai"
              align="right"
              desc="A vision of elegance and gentle warmth, illuminating our path with quiet wisdom, compassion, and love."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
