import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/studio/Layout";

export const Route = createFileRoute("/founder")({
  head: () => ({
    meta: [
      { title: "Founder's Note — FoundryFour by Humera Shaikh" },
      {
        name: "description",
        content:
          "On FoundryFour — the venture where I led the technical vision. A note on craft, autonomy, and engineering as authorship.",
      },
      { property: "og:title", content: "Founder's Note — FoundryFour" },
      {
        property: "og:description",
        content:
          "The venture where I led the technical vision. A note on craft and engineering as authorship.",
      },
    ],
  }),
  component: FounderPage,
});

function FounderPage() {
  return (
    <Layout>
      <article className="mx-auto max-w-3xl px-6 lg:px-10 pt-24 pb-16">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">Founder's Note</p>
        <h1 className="mt-4 font-serif text-5xl md:text-7xl leading-[1] tracking-tight">
          On <em className="italic">FoundryFour</em>.
        </h1>
        <div className="mt-10 space-y-6 text-lg leading-relaxed text-foreground/85 font-serif">
          <p className="first-letter:font-serif first-letter:text-7xl first-letter:float-left first-letter:mr-3 first-letter:leading-[0.85] first-letter:text-gold">
            FoundryFour began as an answer to a quiet frustration: that most software is
            shipped without a point of view. As founding engineer, I led the technical
            vision — choosing the stack, defining the architecture, and setting the bar
            for what "finished" meant.
          </p>
          <p>
            The mandate was simple. Build interfaces that feel inevitable. Treat
            performance as an aesthetic. Ship less, ship deliberately. Every commit was
            a small argument for a particular kind of internet — slower in cadence,
            faster at runtime, and unwilling to apologize for taste.
          </p>
          <p>
            I wrote the foundation in React and TypeScript, drew the design system in
            Tailwind, and put a hard ceiling on bundle size. The studio practice you
            see today is the same discipline, distilled.
          </p>
          <p className="font-sans text-sm not-italic uppercase tracking-[0.25em] text-muted-foreground pt-8">
            — Humera Shaikh, Founding Engineer
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden">
          {[
            { k: "Role", v: "Founding Engineer" },
            { k: "Discipline", v: "Front-End / Systems" },
            { k: "Tenure", v: "2023 — Present" },
          ].map((m) => (
            <div key={m.k} className="bg-card p-6">
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                {m.k}
              </p>
              <p className="mt-2 font-serif text-2xl">{m.v}</p>
            </div>
          ))}
        </div>
      </article>
    </Layout>
  );
}
