import { useEffect, useState } from "react";

export function Particles({ count = 40 }: { count?: number }) {
  const [items, setItems] = useState<
    { left: number; top: number; size: number; delay: number; dur: number }[]
  >([]);
  useEffect(() => {
    setItems(
      Array.from({ length: count }).map(() => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 1 + Math.random() * 2.5,
        delay: Math.random() * 4,
        dur: 3 + Math.random() * 4,
      })),
    );
  }, [count]);
  return (
    <div className="pointer-events-none absolute inset-0">
      {items.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-gold flicker"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            boxShadow: "0 0 8px oklch(0.86 0.12 84 / 0.9)",
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.dur}s`,
          }}
        />
      ))}
    </div>
  );
}
