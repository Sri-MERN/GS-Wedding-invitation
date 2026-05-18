import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export function Divider({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`relative flex items-center justify-center py-12 sm:py-20 ${className}`}
    >
      {/* Primary glowing gold line */}
      <motion.span
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.6, ease }}
        className="absolute left-0 right-0 mx-auto h-px max-w-4xl origin-center"
        style={{
          background: "var(--gradient-divider)",
        }}
      />

      {/* Secondary ambient glow beneath */}
      <motion.span
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.8, delay: 0.1, ease }}
        className="absolute left-1/4 right-1/4 mx-auto h-[3px] -translate-y-[1px] rounded-full origin-center pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, oklch(0.78 0.12 82 / 0.2), transparent 70%)",
          filter: "blur(6px)",
        }}
      />

      {/* Central ornament */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.2, delay: 0.3, ease }}
        className="relative flex items-center justify-center"
      >
        {/* Glow behind ornament */}
        <motion.div
          animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-12 h-12 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, oklch(0.78 0.12 82 / 0.25), transparent 70%)",
            filter: "blur(10px)",
          }}
        />

        {/* Temple-inspired star motif */}
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          className="relative text-gold/80"
          style={{ filter: "drop-shadow(0 0 8px oklch(0.86 0.12 84 / 0.4))" }}
        >
          <path
            d="M12 2 L13.2 8.8 L20 10 L13.2 11.2 L12 18 L10.8 11.2 L4 10 L10.8 8.8 Z"
            fill="currentColor"
          />
        </svg>

        {/* Golden dot accent */}
        <motion.span
          animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.5, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="block h-1.5 w-1.5 rounded-full mx-2"
          style={{
            background: "oklch(0.86 0.12 84)",
            boxShadow: "0 0 12px oklch(0.86 0.12 84 / 0.7)",
          }}
        />

        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          className="relative text-gold/80"
          style={{ filter: "drop-shadow(0 0 8px oklch(0.86 0.12 84 / 0.4))" }}
        >
          <path
            d="M12 2 L13.2 8.8 L20 10 L13.2 11.2 L12 18 L10.8 11.2 L4 10 L10.8 8.8 Z"
            fill="currentColor"
          />
        </svg>
      </motion.div>
    </div>
  );
}
