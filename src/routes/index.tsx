import { createFileRoute } from "@tanstack/react-router";
import { Spotlight } from "@/components/portfolio/Spotlight";
import { Sidebar } from "@/components/portfolio/Sidebar";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Writing } from "@/components/portfolio/Writing";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Humera Shaikh — Front-End Engineer & AI-Driven Interfaces" },
      {
        name: "description",
        content:
          "Humera Shaikh is a front-end engineer specializing in front-end architecture, design-to-code fidelity, and AI-driven interfaces for global clients.",
      },
      { property: "og:title", content: "Humera Shaikh — Front-End Engineer" },
      {
        property: "og:description",
        content:
          "Front-end engineer specializing in front-end architecture, design-to-code fidelity, and AI-driven interfaces.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <Spotlight>
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <a
          href="#content"
          className="absolute left-0 top-0 block -translate-x-full rounded bg-teal px-4 py-3 text-sm font-bold uppercase tracking-widest text-black focus-visible:translate-x-0"
        >
          Skip to Content
        </a>
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Sidebar />
          <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
            <About />
            <Experience />
            <Writing />
            <Projects />
            <footer className="max-w-md pb-16 text-sm text-muted-foreground sm:pb-0">
              <p>
                Built in TanStack Start, styled with Tailwind CSS, deployed on
                Vercel. Set in Inter typeface. Inspired by{" "}
                <a
                  href="https://brittanychiang.com"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-foreground hover:text-teal"
                >
                  Brittany Chiang
                </a>
                .
              </p>
            </footer>
          </main>
        </div>
      </div>
    </Spotlight>
  );
}
