import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/studio/Layout";
import { Hero } from "@/components/studio/sections/Hero";
import { Manifesto } from "@/components/studio/sections/Manifesto";
import { SelectedWorks } from "@/components/studio/sections/SelectedWorks";
import { BentoSkills } from "@/components/studio/sections/BentoSkills";
import { FounderTeaser } from "@/components/studio/sections/FounderTeaser";
import { ContactStrip } from "@/components/studio/sections/ContactStrip";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Humera Shaikh — Front-End Engineering Studio" },
      {
        name: "description",
        content:
          "Engineering the intersection of high-end aesthetics and high-performance code. Selected works, founder's note, and the studio of Humera Shaikh.",
      },
      { property: "og:title", content: "Humera Shaikh — Front-End Engineering Studio" },
      {
        property: "og:description",
        content:
          "Engineering the intersection of high-end aesthetics and high-performance code.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <Layout>
      <Hero />
      <Manifesto />
      <SelectedWorks />
      <BentoSkills />
      <FounderTeaser />
      <ContactStrip />
    </Layout>
  );
}
