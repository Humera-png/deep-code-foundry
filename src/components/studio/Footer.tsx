export function Footer() {
  return (
    <footer className="relative border-t border-border mt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="font-serif text-3xl">
            Humera <span className="italic text-gold">Shaikh</span>
          </h3>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            A front-end engineering studio of one. Building interfaces with the discipline of architecture.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Studio</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>Front-End Engineering</li>
            <li>Performance Optimization</li>
            <li>Interface Architecture</li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Elsewhere</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a className="hover:text-gold" href="mailto:hello@humera.dev">hello@humera.dev</a></li>
            <li><a className="hover:text-gold" href="#">GitHub ↗</a></li>
            <li><a className="hover:text-gold" href="#">LinkedIn ↗</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex justify-between text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span>© {new Date().getFullYear()} Humera Shaikh</span>
          <span>Engineered in Mumbai</span>
        </div>
      </div>
    </footer>
  );
}
