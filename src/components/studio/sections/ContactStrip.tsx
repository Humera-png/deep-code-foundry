import { Link } from "@tanstack/react-router";

export function ContactStrip() {
  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32">
      <div className="border-t border-border pt-16">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">Next</p>
        <h2 className="mt-4 font-serif text-5xl md:text-8xl leading-[0.95]">
          The studio is <em className="italic">open</em>.
          <br />
          <Link
            to="/contact"
            className="inline-block hover:gradient-gold-text transition-colors"
          >
            Begin a project →
          </Link>
        </h2>
      </div>
    </section>
  );
}
