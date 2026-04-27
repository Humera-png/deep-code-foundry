type Skill = { name: string; note?: string };
type Group = {
  area: string;
  title: string;
  blurb: string;
  skills: Skill[];
  span: string;
  accent?: boolean;
};

const groups: Group[] = [
  {
    area: "Core Logic",
    title: "The thinking layer.",
    blurb:
      "Component architecture, state choreography, and type-safe contracts. Where the application earns its predictability.",
    skills: [
      { name: "JavaScript", note: "ES2024" },
      { name: "TypeScript", note: "strict" },
      { name: "React", note: "19" },
      { name: "TanStack" },
      { name: "Zod" },
    ],
    span: "md:col-span-3 md:row-span-2",
    accent: true,
  },
  {
    area: "Styling",
    title: "The felt layer.",
    blurb: "Design tokens, motion, and the typography that holds the room.",
    skills: [
      { name: "Tailwind v4" },
      { name: "CSS" },
      { name: "Motion" },
      { name: "shadcn/ui" },
    ],
    span: "md:col-span-3",
  },
  {
    area: "Infrastructure",
    title: "The shipping layer.",
    blurb: "Versioning, edge delivery, and the boring parts that make Friday deploys safe.",
    skills: [
      { name: "Git" },
      { name: "Vercel" },
      { name: "Cloudflare" },
      { name: "Vite" },
      { name: "CI" },
    ],
    span: "md:col-span-2",
  },
  {
    area: "Discipline",
    title: "Performance & A11y.",
    blurb: "Budgets defended in PR. Keyboard, screen reader, and reduced-motion paths.",
    skills: [{ name: "Lighthouse" }, { name: "WCAG 2.2" }, { name: "Web Vitals" }],
    span: "md:col-span-2",
  },
  {
    area: "Practice",
    title: "Authorship.",
    blurb:
      "Every interface is a small argument. The studio writes them in code, comments, and changelogs.",
    skills: [{ name: "Design Systems" }, { name: "Documentation" }, { name: "Mentorship" }],
    span: "md:col-span-2",
  },
];

export function BentoSkills() {
  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32">
      <div className="flex items-end justify-between mb-12">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Capabilities</p>
          <h2 className="mt-4 font-serif text-5xl md:text-7xl leading-[0.95]">
            The <em className="italic">toolset</em>.
          </h2>
        </div>
        <p className="hidden md:block text-xs uppercase tracking-[0.25em] text-muted-foreground max-w-xs text-right">
          Grouped by intent, not by logo wall.
        </p>
      </div>

      <div className="grid md:grid-cols-6 gap-4 md:auto-rows-[minmax(180px,auto)]">
        {groups.map((g) => (
          <div
            key={g.area}
            className={`${g.span} relative rounded-2xl border border-border p-7 md:p-9 transition-colors hover:border-gold/40 ${
              g.accent
                ? "bg-gradient-to-br from-card to-obsidian-elevated"
                : "bg-card"
            }`}
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">
              {g.area}
            </p>
            <h3 className="mt-3 font-serif text-3xl md:text-4xl leading-tight">
              {g.title}
            </h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-md">
              {g.blurb}
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {g.skills.map((s) => (
                <li
                  key={s.name}
                  className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 border border-border rounded-full text-foreground/70"
                >
                  {s.name}
                  {s.note && <span className="text-gold/70 ml-1">·{s.note}</span>}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
