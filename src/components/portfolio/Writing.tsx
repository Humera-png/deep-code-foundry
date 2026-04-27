import { ArrowUpRight, BookOpen } from "lucide-react";

type Piece = {
  date: string;
  title: string;
  publication: string;
  url?: string;
  description: string;
  tags: string[];
};

const pieces: Piece[] = [
  {
    date: "2021 — Present",
    title: "100+ Technical Articles on JavaScript, React & CSS",
    publication: "GeeksforGeeks",
    url: "https://www.geeksforgeeks.org/",
    description:
      "Four years of authoring and reviewing tutorials that simplify complex front-end concepts — closures, the event loop, hooks, layout systems, and CSS specificity — for a global audience of learners. The work sharpened how I mentor, document, and explain technical decisions to teammates and clients.",
    tags: ["JavaScript", "React", "CSS", "Mentoring", "Documentation"],
  },
];

export function Writing() {
  return (
    <section
      id="writing"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Writing"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">
          Writing
        </h2>
      </div>
      <ul className="group/list">
        {pieces.map((p) => (
          <li key={p.title} className="mb-12">
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-card/40 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(168,85,247,0.15)]" />
              <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2">
                {p.date}
              </header>
              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-foreground">
                  <a
                    href={p.url ?? "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-baseline gap-1 text-base group/link hover:text-teal focus-visible:text-teal"
                  >
                    <BookOpen className="mr-1 h-4 w-4 shrink-0 self-center text-teal" aria-hidden="true" />
                    <span>
                      {p.title}
                      <span className="block text-sm font-normal text-muted-foreground">
                        {p.publication}
                      </span>
                      <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1" />
                    </span>
                  </a>
                </h3>
                <p className="mt-2 text-sm leading-normal text-muted-foreground">
                  {p.description}
                </p>
                <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Topics">
                  {p.tags.map((t) => (
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
