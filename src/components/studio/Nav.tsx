import { Link } from "@tanstack/react-router";

const links = [
  { to: "/", label: "Index" },
  { to: "/works", label: "Selected Works" },
  { to: "/founder", label: "Founder's Note" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="group flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-gold shadow-[0_0_12px_var(--gold)]" />
          <span className="font-serif text-lg tracking-wide">
            Humera <span className="italic text-gold">Shaikh</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="hover:text-foreground transition-colors"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <a
          href="mailto:hello@humera.dev"
          className="hidden md:inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] border border-border px-4 py-2 rounded-full hover:border-gold hover:text-gold transition-colors"
        >
          Commission
        </a>
      </div>
    </header>
  );
}
