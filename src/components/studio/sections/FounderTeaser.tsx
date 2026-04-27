import { Link } from "@tanstack/react-router";

export function FounderTeaser() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-obsidian-elevated via-card to-obsidian p-10 md:p-20">
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
        <div className="relative max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Founder's Note</p>
          <h2 className="mt-6 font-serif text-4xl md:text-6xl leading-[1.05]">
            On <em className="italic gradient-gold-text">FoundryFour</em> — the venture
            where I led the technical vision.
          </h2>
          <p className="mt-8 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            A short essay on building a company from the engineering side of the
            table: choosing the stack, defending the bundle, and treating taste as
            an architectural concern.
          </p>
          <Link
            to="/founder"
            className="mt-10 inline-flex items-center gap-3 text-sm uppercase tracking-[0.25em] border-b border-gold pb-1 hover:gap-5 transition-all"
          >
            Read the note <span className="text-gold">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
