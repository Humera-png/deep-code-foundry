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
    date: "2021 — Present",
    role: "Independent Front-End Developer",
    company: "Upwork & LinkedIn",
    url: "#",
    description:
      "Architecting and deploying high-performance web platforms for global startups. Specializing in design-to-code fidelity, performance auditing, and AI API integrations — leading collaborative engineering workflows alongside backend and design partners.",
    tech: ["React", "TypeScript", "Next.js", "Tailwind CSS", "OpenAI API", "Vercel"],
  },
  {
    date: "Jan 2025 — July 2025",
    role: "Founder & Lead Developer",
    company: "FoundryFour",
    url: "#",
    description:
      "Directed the technical roadmap for a creative development studio. Managed full product lifecycles for early-stage founders before successfully closing the venture to focus on independent high-scale engineering work.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
  },
  {
    date: "Oct 2024 — June 2025",
    role: "Founder",
    company: "Scrollcraft",
    url: "#",
    description:
      "Built modular landing-page frameworks for local enterprises, reducing project turnaround by 30% through reusable component systems and a sharp design hand-off process.",
    tech: ["React", "Next.js", "Tailwind CSS", "Vercel"],
  },
  {
    date: "Jan 2025 — June 2025",
    role: "Front-End Engineering Intern",
    company: "InfoLabz",
    url: "#",
    description:
      "Focused on performance optimization for legacy systems — code-splitting, image strategy, and trimming render-blocking JS — meaningfully reducing bundle sizes and improving Core Web Vitals.",
    tech: ["React", "JavaScript", "SCSS", "Webpack", "Git"],
  },
  {
    date: "2020 — 2024",
    role: "Technical Content Writer",
    company: "GeeksforGeeks",
    url: "https://www.geeksforgeeks.org/",
    description:
      "Standardized documentation for complex JavaScript frameworks, reaching 50k+ readers. Authored and reviewed 100+ tutorials covering React, the event loop, hooks, layout systems, and CSS specificity.",
    tech: ["JavaScript", "React", "CSS", "Technical Writing", "Mentoring"],
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
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-card/40 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(99,102,241,0.15)]" />
              <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2">
                {job.date}
              </header>
              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-foreground tracking-tight">
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
