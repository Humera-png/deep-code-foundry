export function Hero() {
  return (
    <section className="relative grain overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-24 md:pt-36 pb-24 md:pb-44">
        <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          <span className="h-px w-10 bg-gold" />
          <span>Front-End Engineering Studio · Est. 2023</span>
        </div>

        <h1 className="mt-10 font-serif leading-[0.95] tracking-tight text-[clamp(3rem,9vw,8.5rem)]">
          Engineering the <em className="italic gradient-gold-text">intersection</em>
          <br />
          of high-end <span className="italic">aesthetics</span>
          <br />
          and high-performance <span className="italic">code</span>.
        </h1>

        <div className="mt-14 grid md:grid-cols-12 gap-8 items-end">
          <p className="md:col-span-6 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
            Humera Shaikh is a front-end engineer building expressive, accessible, and
            performance-obsessed interfaces in React, TypeScript, and Tailwind. The
            studio operates at the seam where typography meets the network tab.
          </p>
          <div className="md:col-span-6 md:text-right space-y-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <p>↳ Currently accepting Q3 engagements</p>
            <p>↳ Available for retainer & lead engineering</p>
          </div>
        </div>
      </div>

      <div className="hairline" />
      <Marquee />
    </section>
  );
}

function Marquee() {
  const items = [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Performance",
    "Accessibility",
    "Design Systems",
    "Animation",
    "Edge Rendering",
  ];
  return (
    <div className="overflow-hidden border-y border-border bg-obsidian">
      <div className="flex gap-12 py-4 animate-[marquee_45s_linear_infinite] whitespace-nowrap">
        {[...items, ...items, ...items].map((t, i) => (
          <span
            key={i}
            className="font-serif italic text-2xl md:text-3xl text-foreground/40"
          >
            {t} <span className="text-gold not-italic"> ✦ </span>
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-33.333%) } }`}</style>
    </div>
  );
}
