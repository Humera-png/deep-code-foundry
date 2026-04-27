import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/studio/Layout";
import { SelectedWorks } from "@/components/studio/sections/SelectedWorks";

export const Route = createFileRoute("/works")({
  head: () => ({
    meta: [
      { title: "Selected Works — Humera Shaikh" },
      {
        name: "description",
        content:
          "Flagship engineering projects: Sartorial Luxe and the Zakat Calculator. Performant, accessible, expressive interfaces.",
      },
      { property: "og:title", content: "Selected Works — Humera Shaikh" },
      {
        property: "og:description",
        content: "Flagship engineering projects by Humera Shaikh.",
      },
    ],
  }),
  component: WorksPage,
});

function WorksPage() {
  return (
    <Layout>
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-24 pb-12">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">Volume I</p>
        <h1 className="mt-4 font-serif text-6xl md:text-7xl leading-[0.95]">
          Selected <em className="italic">Works</em>
        </h1>
        <p className="mt-6 max-w-2xl text-muted-foreground">
          A small, deliberate catalogue. Each project is engineered end-to-end —
          from typography decisions to bundle budgets.
        </p>
      </section>
      <SelectedWorks heading={false} />
    </Layout>
  );
}
