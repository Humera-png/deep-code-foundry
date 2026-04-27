import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/studio/Layout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Humera Shaikh" },
      {
        name: "description",
        content:
          "Commission a project, propose a collaboration, or simply say hello. The studio is currently accepting select engagements.",
      },
      { property: "og:title", content: "Contact — Humera Shaikh" },
      {
        property: "og:description",
        content: "Commission the studio. Currently accepting select engagements.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <Layout>
      <section className="mx-auto max-w-5xl px-6 lg:px-10 pt-24 pb-24">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">Commission</p>
        <h1 className="mt-4 font-serif text-6xl md:text-8xl leading-[0.95]">
          Let's build something <em className="italic">unhurried</em>.
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
          The studio takes on a small number of engagements each quarter. If you have a
          product that deserves a front-end built with care, write in.
        </p>

        <div className="mt-16 grid md:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden">
          <a
            href="mailto:hello@humera.dev"
            className="group bg-card p-10 hover:bg-obsidian-elevated transition-colors"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Email</p>
            <p className="mt-3 font-serif text-3xl group-hover:text-gold transition-colors">
              hello@humera.dev
            </p>
          </a>
          <a
            href="#"
            className="group bg-card p-10 hover:bg-obsidian-elevated transition-colors"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Calendar</p>
            <p className="mt-3 font-serif text-3xl group-hover:text-gold transition-colors">
              Book an intro →
            </p>
          </a>
        </div>
      </section>
    </Layout>
  );
}
