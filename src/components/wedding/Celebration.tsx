import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export function Celebration() {
  return (
    <div className="fixed inset-0 z-[55] pointer-events-none overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.4, 0] }}
        transition={{
          duration: 2.4,
          times: [0, 0.2, 1],
          ease: "easeInOut",
        }}
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, oklch(0.92 0.10 84 / 0.12), transparent 60%)",
        }}
      />

      {[0, 1, 2].map((i) => (
        <motion.div
          key={`ring-${i}`}
          initial={{ scale: 0, opacity: 0.35 }}
          animate={{ scale: 4, opacity: 0 }}
          transition={{
            delay: i * 0.25,
            duration: 1.8,
            ease,
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: 80,
            height: 80,
            border: "1px solid oklch(0.86 0.12 84 / 0.25)",
          }}
        />
      ))}
    </div>
  );
}
