import { useEffect, useState } from "react";

export function Petals({
  count = 18,
  color = "gold",
}: {
  count?: number;
  color?: "gold" | "rose";
}) {
  const [petals, setPetals] = useState<
    {
      left: number;
      dur: number;
      delay: number;
      drift: number;
      size: number;
      rotate: number;
    }[]
  >([]);
  useEffect(() => {
    setPetals(
      Array.from({ length: count }).map(() => ({
        left: Math.random() * 100,
        dur: 14 + Math.random() * 16,
        delay: -Math.random() * 20,
        drift: (Math.random() - 0.5) * 200,
        size: 6 + Math.random() * 10,
        rotate: Math.random() * 360,
      })),
    );
  }, [count]);
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {petals.map((p, i) => (
        <span
          key={i}
          className="petal absolute block rounded-full"
          style={{
            left: `${p.left}%`,
            top: `-5%`,
            width: p.size,
            height: p.size * 0.6,
            background:
              color === "gold"
                ? "radial-gradient(circle at 30% 30%, oklch(0.92 0.10 84), oklch(0.62 0.14 70))"
                : "radial-gradient(circle at 30% 30%, oklch(0.85 0.10 25), oklch(0.45 0.16 22))",
            transform: `rotate(${p.rotate}deg)`,
            filter: "blur(0.3px)",
            opacity: 0.75,
            ["--dur" as never]: `${p.dur}s`,
            ["--delay" as never]: `${p.delay}s`,
            ["--drift" as never]: `${p.drift}px`,
          }}
        />
      ))}
    </div>
  );
}
