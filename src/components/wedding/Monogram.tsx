import { motion } from "framer-motion";

export function Monogram({
  size = 120,
  className = "",
  animate = true,
}: {
  size?: number;
  className?: string;
  animate?: boolean;
}) {
  return (
    <motion.div
      initial={animate ? { opacity: 0, scale: 0.85 } : false}
      animate={animate ? { opacity: 1, scale: 1 } : undefined}
      transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Ambient glow */}
      <motion.span
        aria-hidden
        animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.08, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle, oklch(0.86 0.12 84 / 0.55), transparent 65%)",
          filter: "blur(14px)",
        }}
      />

      {/* Rotating outer ring */}
      <motion.svg
        viewBox="0 0 120 120"
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      >
        <defs>
          <linearGradient id="mg-ring" x1="0" y1="0" x2="1" y2="1">
            <stop
              offset="0%"
              stopColor="oklch(0.92 0.10 84)"
              stopOpacity="0.9"
            />
            <stop
              offset="50%"
              stopColor="oklch(0.78 0.12 82)"
              stopOpacity="0.4"
            />
            <stop
              offset="100%"
              stopColor="oklch(0.62 0.14 70)"
              stopOpacity="0.9"
            />
          </linearGradient>
        </defs>
        <circle
          cx="60"
          cy="60"
          r="56"
          fill="none"
          stroke="url(#mg-ring)"
          strokeWidth="0.7"
        />
        <circle
          cx="60"
          cy="60"
          r="50"
          fill="none"
          stroke="oklch(0.86 0.12 84 / 0.25)"
          strokeWidth="0.4"
          strokeDasharray="1 4"
        />
      </motion.svg>

      {/* Ornamental flourishes */}
      <svg viewBox="0 0 120 120" className="absolute inset-0 text-gold/70">
        <g fill="currentColor">
          <path d="M60 6 L62 12 L60 18 L58 12 Z" opacity="0.8" />
          <path d="M60 114 L62 108 L60 102 L58 108 Z" opacity="0.8" />
          <path d="M6 60 L12 62 L18 60 L12 58 Z" opacity="0.8" />
          <path d="M114 60 L108 62 L102 60 L108 58 Z" opacity="0.8" />
        </g>
      </svg>

      {/* Inner emblem */}
      <div
        className="relative flex items-center justify-center rounded-full"
        style={{
          width: "72%",
          height: "72%",
          background:
            "radial-gradient(circle at 30% 25%, oklch(0.32 0.13 18 / 0.85), oklch(0.12 0.06 22 / 0.95))",
          border: "1px solid oklch(0.86 0.12 84 / 0.5)",
          boxShadow:
            "inset 0 0 24px oklch(0 0 0 / 0.6), 0 0 30px oklch(0.78 0.12 82 / 0.35)",
        }}
      >
        <span className="font-display italic text-[1.5em] leading-none gradient-gold-text drop-shadow">
          G
        </span>
        <span className="mx-[0.2em] text-gold/80" style={{ fontSize: "0.7em" }}>
          ✦
        </span>
        <span className="font-display italic text-[1.5em] leading-none gradient-gold-text drop-shadow">
          S
        </span>
      </div>
    </motion.div>
  );
}
