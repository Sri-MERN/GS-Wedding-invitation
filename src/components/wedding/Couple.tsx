import { Reveal } from "./Reveal";
import { Ornament } from "./Ornament";

function PortraitDetails({
  name,
  role,
  company,
  align,
  desc,
  tamilRole,
}: {
  name: string;
  role: string;
  company: string;
  align: "left" | "right";
  desc: string;
  tamilRole: string;
}) {
  return (
    <Reveal y={60} className="w-full">
      <div className="flex flex-col items-center md:items-start">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[10px] tracking-[0.4em] uppercase text-gold-soft">
            {role}
          </span>
          <span className="h-[3px] w-[3px] rounded-full bg-gold/50" />
          <span className="text-[11px] font-tamil tracking-wider text-gold/70">
            {tamilRole}
          </span>
        </div>

        <h3 className="font-display text-3xl sm:text-5xl lg:text-6xl text-ivory tracking-wide leading-tight shimmer-text text-center md:text-left">
          {name}
        </h3>

        <div
          className={`h-[1px] w-16 sm:w-20 bg-gradient-to-r from-gold/50 to-transparent my-3 sm:my-4 ${align === "right" ? "md:ml-auto md:mr-0" : "md:ml-0 md:mr-auto"} mx-auto md:mx-0`}
        />

        <p className="text-xs sm:text-sm font-light text-gold-soft/90 tracking-wide font-sans mb-1 text-center md:text-left">
          {company.split(" · ")[0]}
        </p>
        <p className="text-[11px] sm:text-xs text-ivory/60 tracking-wider font-sans mb-3 sm:mb-4 uppercase text-center md:text-left">
          {company.split(" · ")[1]}
        </p>

        <p className="text-sm italic font-display text-ivory/70 w-full leading-relaxed text-center md:text-left">
          "{desc}"
        </p>
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

        <div className="grid md:grid-cols-2 gap-12 sm:gap-16 md:gap-24">
          <div>
            <PortraitDetails
              name="R. Gururajan"
              role="The Groom"
              tamilRole="மணமகன்"
              company="Software Engineer · Neurealm Chennai"
              align="left"
              desc="An anchor of strength and brilliant intellect, navigating our future with deep devotion and silent grace."
            />
          </div>

          <div className="md:mt-24">
            <PortraitDetails
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
