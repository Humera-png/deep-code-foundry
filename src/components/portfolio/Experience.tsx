import { ArrowUpRight } from "lucide-react";

type Job = {
  date: string;
  role: string;
  company: string;
  url?: string;
  description: string;
  tech: string[];
};

const jobs: Job[] = [
  {
    date: "2024 — Present",
    role: "Front-End Developer",
    company: "FoundryFour",
    url: "#",
    description:
      "Lead the technical vision for client-facing web products. Build component libraries, marketing sites, and dashboards with a focus on performance budgets and accessibility.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
  },
  {
    date: "2023 — 2024",
    role: "Front-End Developer",
    company: "InfoLabz",
    url: "#",
    description:
      "Shipped pixel-perfect responsive interfaces for client web apps. Collaborated closely with designers and back-end engineers to deliver features end-to-end.",
    tech: ["React", "JavaScript", "SCSS", "REST APIs", "Git"],
  },
  {
    date: "2022 — 2023",
    role: "Technical Content Engineer",
    company: "GeeksforGeeks",
    url: "#",
    description:
      "Authored and reviewed technical articles on JavaScript, React, and front-end fundamentals. Built interactive code examples used by thousands of learners.",
    tech: ["JavaScript", "React", "HTML", "CSS"],
  },
  {
    date: "2021 — 2022",
    role: "Freelance Developer",
    company: "Scrollcraft",
    url: "#",
    description:
      "Built marketing sites and landing pages for early-stage founders. Owned design hand-off, implementation, and deployment.",
    tech: ["React", "Next.js", "Tailwind CSS", "Vercel"],
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Work experience"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">
          Experience
        </h2>
      </div>
      <ol className="group/list">
        {jobs.map((job) => (
          <li key={job.role + job.company} className="mb-12">
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-card/40 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]" />
              <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2">
                {job.date}
              </header>
              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-foreground">
                  <a
                    href={job.url ?? "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-baseline gap-1 text-base group/link hover:text-teal focus-visible:text-teal"
                  >
                    <span>
                      {job.role} ·{" "}
                      <span className="inline-block">
                        {job.company}
                        <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1" />
                      </span>
                    </span>
                  </a>
                </h3>
                <p className="mt-2 text-sm leading-normal text-muted-foreground">
                  {job.description}
                </p>
                <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Tech stack">
                  {job.tech.map((t) => (
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
      </ol>
    </section>
  );
}
