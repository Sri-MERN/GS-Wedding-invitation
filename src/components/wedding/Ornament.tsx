export function Ornament({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <span className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent to-gold/60" />
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        className="text-gold"
      >
        <path
          d="M12 2 L13.5 9 L21 10 L13.5 11 L12 22 L10.5 11 L3 10 L10.5 9 Z"
          fill="currentColor"
          opacity="0.85"
        />
      </svg>
      <span className="h-px w-16 sm:w-24 bg-gradient-to-l from-transparent to-gold/60" />
    </div>
  );
}
