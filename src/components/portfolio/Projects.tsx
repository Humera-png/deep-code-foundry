import { ArrowUpRight } from "lucide-react";

type Project = {
  title: string;
  url?: string;
  description: string;
  tech: string[];
  preview: string; // gradient class for placeholder
};

const projects: Project[] = [
  {
    title: "Sartorial Luxe",
    url: "#",
    description:
      "A high-end fashion e-commerce experience with editorial layouts, smooth product galleries, and a performance budget under 50KB of JS on the critical path.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    preview: "from-rose-300/30 via-amber-200/20 to-slate-700/40",
  },
  {
    title: "Zakat Calculator",
    url: "#",
    description:
      "Accessible, multi-currency Zakat calculator with real-time conversions, persistent state, and a fully keyboard-navigable interface — built to WCAG AA standards.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    preview: "from-emerald-300/30 via-teal-200/20 to-slate-700/40",
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
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-card/40 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]" />
              <div className="z-10 sm:order-1 sm:col-span-2 sm:translate-y-1">
                <div
                  className={`aspect-video w-full rounded border border-border/60 bg-gradient-to-br ${p.preview}`}
                  aria-hidden="true"
                />
              </div>
              <div className="z-10 sm:col-span-6">
                <h3>
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
    </section>
  );
}
