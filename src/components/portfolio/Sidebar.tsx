import { useEffect, useState } from "react";
import { Github, Linkedin, Briefcase } from "lucide-react";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
];

export function Sidebar() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 py-12">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-100 sm:text-5xl">
          <a href="/">Humera Shaikh</a>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          Front-End Developer
        </h2>
        <p className="mt-4 max-w-xs leading-normal text-muted-foreground">
          I build performance-focused, pixel-perfect interfaces for the web. I
          thrive at the intersection of design and engineering, turning complex
          ideas into clean, scalable code.
        </p>

        <nav className="nav hidden lg:block mt-16" aria-label="In-page jump links">
          <ul className="w-max space-y-3">
            {sections.map((s) => {
              const isActive = active === s.id;
              return (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="group flex items-center py-3"
                  >
                    <span
                      className={`mr-4 h-px transition-all duration-200 ${
                        isActive
                          ? "w-16 bg-foreground"
                          : "w-8 bg-muted-foreground/40 group-hover:w-16 group-hover:bg-foreground"
                      }`}
                    />
                    <span
                      className={`text-xs font-bold uppercase tracking-widest transition-colors ${
                        isActive
                          ? "text-foreground"
                          : "text-muted-foreground group-hover:text-foreground"
                      }`}
                    >
                      {s.label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <ul className="ml-1 mt-8 flex items-center gap-5" aria-label="Social media">
        <li>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="h-6 w-6" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin className="h-6 w-6" />
          </a>
        </li>
        <li>
          <a
            href="https://www.upwork.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Upwork"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Briefcase className="h-6 w-6" />
          </a>
        </li>
      </ul>
    </header>
  );
}
