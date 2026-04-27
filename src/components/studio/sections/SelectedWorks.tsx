const works = [
  {
    n: "01",
    title: "Sartorial Luxe",
    tag: "Atelier E-commerce",
    year: "2024",
    summary:
      "A made-to-measure menswear storefront engineered for craft. Silky route transitions, image-heavy art direction, and a sub-second time-to-interactive across every device class.",
    stack: ["React", "TypeScript", "Tailwind", "View Transitions"],
    metric: "98 / 100 Lighthouse",
  },
  {
    n: "02",
    title: "Zakat Calculator",
    tag: "Civic Utility",
    year: "2024",
    summary:
      "An accessible, multi-currency calculator for the annual obligation. Deterministic math, audited UI states, full keyboard parity, and an offline-first PWA shell.",
    stack: ["React", "Zod", "i18n", "PWA"],
    metric: "WCAG 2.2 AA",
  },
];

export function SelectedWorks({ heading = true }: { heading?: boolean }) {
  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32">
      {heading && (
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Volume I</p>
            <h2 className="mt-4 font-serif text-5xl md:text-7xl leading-[0.95]">
              Selected <em className="italic">Works</em>.
            </h2>
          </div>
          <p className="hidden md:block text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Two of two
          </p>
        </div>
      )}

      <div className="space-y-px bg-border rounded-2xl overflow-hidden">
        {works.map((w) => (
          <article
            key={w.n}
            className="group relative bg-card hover:bg-obsidian-elevated transition-colors"
          >
            <div className="grid md:grid-cols-12 gap-6 p-8 md:p-12">
              <div className="md:col-span-1 font-mono text-xs text-gold pt-2">{w.n}</div>
              <div className="md:col-span-4">
                <h3 className="font-serif text-3xl md:text-5xl leading-tight">
                  {w.title}
                </h3>
                <p className="mt-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  {w.tag} · {w.year}
                </p>
              </div>
              <div className="md:col-span-5">
                <p className="text-base text-foreground/80 leading-relaxed">
                  {w.summary}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {w.stack.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 border border-border rounded-full text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div className="md:col-span-2 md:text-right flex md:flex-col justify-between md:justify-start gap-4">
                <p className="font-serif italic text-gold text-lg">{w.metric}</p>
                <span className="self-start md:self-end text-xs uppercase tracking-[0.25em] group-hover:text-gold transition-colors">
                  View →
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
