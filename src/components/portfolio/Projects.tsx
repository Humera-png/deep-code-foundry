import { ArrowUpRight, Figma } from "lucide-react";

type Project = {
  title: string;
  url?: string;
  description: string;
  tech: string[];
  preview: string;
};

const projects: Project[] = [
  {
    title: "Khidma.live — Front-End Redesign",
    url: "https://khidma.live",
    description:
      "Lead front-end on a complete interface re-engineering. Rebuilt the core experience around modern UI patterns, prioritizing performance, accessible navigation, and a component system the team could extend without me.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    preview: "from-indigo-400/30 via-violet-300/20 to-slate-700/40",
  },
  {
    title: "Hypermoon — High-Fidelity Brand Build",
    url: "https://hypermoon.netlify.app",
    description:
      "High-fidelity brand development for a bespoke web experience. Translated the design system into pixel-perfect code with carefully tuned motion and a strict performance budget on the critical path.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    preview: "from-fuchsia-400/30 via-indigo-300/20 to-slate-700/40",
  },
  {
    title: "Usmani Chicken Centre — B2B Billing System",
    url: "#",
    description:
      "Led the front-end architecture for a dual-tier pricing engine and wholesale/retail billing dashboard. Designed the state model and UI for complex line-item logic, leading a collaborative engineering workflow with backend partners on the data and pricing layer.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Zod", "REST APIs"],
    preview: "from-emerald-400/30 via-indigo-300/20 to-slate-700/40",
  },
  {
    title: "Jarvis AI & FlowSync — AI Engineering",
    url: "#",
    description:
      "Built a Python-based NLP assistant using GPT-4 APIs to automate system-level business workflows. Owned the front-end command surface and orchestration UI, leading a collaborative engineering workflow with the backend automation layer.",
    tech: ["Python", "GPT-4 API", "React", "TypeScript", "Node.js"],
    preview: "from-sky-400/30 via-indigo-300/20 to-slate-700/40",
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Selected projects"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">
          Projects
        </h2>
      </div>
      <ul className="group/list">
        {projects.map((p) => (
          <li key={p.title} className="mb-12">
            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-card/40 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(99,102,241,0.15)]" />
              <div className="z-10 sm:order-1 sm:col-span-2 sm:translate-y-1">
                <div
                  className={`aspect-video w-full rounded border border-border/60 bg-gradient-to-br ${p.preview}`}
                  aria-hidden="true"
                />
              </div>
              <div className="z-10 sm:col-span-6">
                <h3 className="tracking-tight">
                  <a
                    href={p.url ?? "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-baseline gap-1 text-base font-medium leading-tight text-foreground group/link hover:text-teal focus-visible:text-teal"
                  >
                    <span>
                      {p.title}
                      <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1" />
                    </span>
                  </a>
                </h3>
                <p className="mt-2 text-sm leading-normal text-muted-foreground">
                  {p.description}
                </p>
                <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Tech stack">
                  {p.tech.map((t) => (
                    <li key={t}>
                      <span className="flex items-center rounded-full bg-teal/10 px-3 py-1 text-xs font-medium leading-5 text-teal">
                        {t}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* Design Artifacts archive */}
      <div className="mt-4 rounded-md border border-border/60 bg-card/30 p-5">
        <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-foreground">
          <Figma className="h-4 w-4 text-teal" aria-hidden="true" />
          Design Artifacts & Figma Prototypes
        </h3>
        <p className="mt-2 text-sm leading-normal text-muted-foreground">
          While my focus is now purely on engineering, I maintain a deep
          design-native background.{" "}
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-foreground hover:text-teal focus-visible:text-teal"
          >
            View past UI/UX case studies and design systems
            <ArrowUpRight className="ml-1 inline-block h-3.5 w-3.5 -translate-y-px" />
          </a>
        </p>
      </div>
    </section>
  );
}
