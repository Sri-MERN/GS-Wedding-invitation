import { motion } from "framer-motion";
import { useMemo } from "react";

const HEART_COUNT = 8;
const PARTICLE_COUNT = 12;

type HeartConfig = {
  id: number;
  left: number;
  delay: number;
  dur: number;
  size: number;
  drift: number;
  rotate: number;
  opacity: number;
  tone: "gold" | "rose";
};

type ParticleConfig = {
  id: number;
  angle: number;
  distance: number;
  delay: number;
  dur: number;
  size: number;
};

function generateHearts(): HeartConfig[] {
  return Array.from({ length: HEART_COUNT }, (_, i) => ({
    id: i,
    left: 6 + Math.random() * 88,
    delay: 0.15 + Math.random() * 1.0,
    dur: 3.5 + Math.random() * 2.0,
    size: 8 + Math.random() * 20,
    drift: (Math.random() - 0.5) * 160,
    rotate: (Math.random() - 0.5) * 30,
    opacity: 0.08 + Math.random() * 0.22,
    tone: Math.random() > 0.45 ? "gold" : "rose",
  }));
}

function generateParticles(): ParticleConfig[] {
  return Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
    id: i,
    angle: Math.random() * 360,
    distance: 60 + Math.random() * 280,
    delay: Math.random() * 0.6,
    dur: 1.0 + Math.random() * 1.2,
    size: 1.2 + Math.random() * 2.8,
  }));
}

const ringEasing = [0.16, 1, 0.3, 1] as const;
const heartEasing = [0.25, 0.1, 0.35, 1] as const;

const GOLD_HEART = "oklch(0.78 0.12 82)";
const ROSE_HEART = "oklch(0.68 0.10 30)";
const GOLD_GLOW = "0 0 8px oklch(0.86 0.12 84 / 0.25)";
const ROSE_GLOW = "0 0 8px oklch(0.72 0.10 28 / 0.2)";

function HeartSVG({
  size,
  color,
  glow,
  opacity,
}: {
  size: number;
  color: string;
  glow: string;
  opacity: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      style={{
        filter: `blur(0.5px) drop-shadow(${glow})`,
        opacity,
      }}
    >
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}

export function Celebration() {
  const hearts = useMemo(generateHearts, []);
  const particles = useMemo(generateParticles, []);

  return (
    <div className="fixed inset-0 z-[55] pointer-events-none overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.55, 0.25, 0] }}
        transition={{
          duration: 2.8,
          times: [0, 0.3, 0.55, 1],
          ease: "easeInOut",
        }}
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, oklch(0.92 0.10 84 / 0.15), oklch(0.78 0.12 82 / 0.05), transparent 65%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.35, 0] }}
        transition={{ duration: 2.4, times: [0, 0.2, 1], ease: "easeInOut" }}
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, oklch(0.72 0.08 30 / 0.12), transparent 50%)",
        }}
      />

      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={`ring-${i}`}
          initial={{ scale: 0, opacity: 0.35 }}
          animate={{ scale: 4, opacity: 0 }}
          transition={{
            delay: i * 0.2,
            duration: 1.8,
            ease: ringEasing,
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: 80,
            height: 80,
            border: "1px solid oklch(0.86 0.12 84 / 0.3)",
            boxShadow: "0 0 20px oklch(0.86 0.12 84 / 0.1)",
          }}
        />
      ))}

      {hearts.map((h) => {
        const color = h.tone === "gold" ? GOLD_HEART : ROSE_HEART;
        const glow = h.tone === "gold" ? GOLD_GLOW : ROSE_GLOW;
        return (
          <motion.div
            key={h.id}
            initial={{ opacity: 0, y: 0 }}
            animate={{
              opacity: [0, h.opacity, h.opacity * 0.6, 0],
              y: [0, -300, -600, -900],
              x: [0, h.drift * 0.5, h.drift * 0.8, h.drift],
              rotate: [0, h.rotate, -h.rotate * 0.4, h.rotate * 0.2],
            }}
            transition={{
              delay: h.delay,
              duration: h.dur,
              ease: heartEasing,
            }}
            className="absolute bottom-[30%]"
            style={{ left: `${h.left}%` }}
          >
            <HeartSVG size={h.size} color={color} glow={glow} opacity={1} />
          </motion.div>
        );
      })}

      {particles.map((p) => {
        const rad = (p.angle * Math.PI) / 180;
        return (
          <motion.div
            key={`p-${p.id}`}
            initial={{ opacity: 0, x: 0, y: 0 }}
            animate={{
              opacity: [0, 0.9, 0.7, 0],
              x: Math.cos(rad) * p.distance,
              y: Math.sin(rad) * p.distance - 60,
            }}
            transition={{
              delay: p.delay,
              duration: p.dur,
              ease: "easeOut",
            }}
            className="absolute top-1/2 left-1/2 rounded-full"
            style={{
              width: p.size,
              height: p.size,
              background: "oklch(0.86 0.12 84)",
              boxShadow: "0 0 6px oklch(0.86 0.12 84 / 0.7)",
              filter: "blur(0.4px)",
            }}
          />
        );
      })}
    </div>
  );
}
