export function Manifesto() {
  const lines = [
    { n: "01", t: "Performance is a feature", d: "Lighthouse scores aren't a vanity metric — they're a contract with the user's time." },
    { n: "02", t: "Typography first", d: "Before color, before motion. The text sets the room temperature." },
    { n: "03", t: "Ship less, finish more", d: "A small surface, executed with discipline, beats a sprawling one half-built." },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32">
      <p className="text-xs uppercase tracking-[0.3em] text-gold">Manifesto</p>
      <h2 className="mt-4 font-serif text-4xl md:text-6xl max-w-3xl leading-tight">
        The studio is built on three <em className="italic">non-negotiables</em>.
      </h2>
      <div className="mt-16 grid md:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
        {lines.map((l) => (
          <div key={l.n} className="bg-card p-8 md:p-10">
            <p className="font-mono text-xs text-gold">{l.n}</p>
            <h3 className="mt-4 font-serif text-2xl">{l.t}</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{l.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
