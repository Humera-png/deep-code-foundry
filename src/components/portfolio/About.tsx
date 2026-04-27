export function About() {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">
          About
        </h2>
      </div>
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <p>
          I'm a Computer Science Engineer (B.Tech) specializing in{" "}
          <span className="font-medium text-foreground">
            front-end architecture
          </span>{" "}
          and{" "}
          <span className="font-medium text-foreground">
            AI-driven interfaces
          </span>
          . Currently, I operate as an independent developer for global clients
          on Upwork and LinkedIn, often leading collaborative engineering teams
          that bridge the gap between design intent and complex backends.
        </p>
        <p>
          I evolved from a UI/UX background into pure engineering because I
          wanted to own the execution, not just the vision. That design-native
          perspective is now what lets me implement high-fidelity interfaces
          with extreme technical precision — pixel discipline, predictable
          performance budgets, and code that's safe to hand off.
        </p>
        <p>
          Alongside client work, I have a four-year tenure at{" "}
          <span className="font-medium text-foreground">GeeksforGeeks</span>,
          where I've authored{" "}
          <span className="font-medium text-foreground">
            100+ technical articles
          </span>{" "}
          deconstructing React, JavaScript, and CSS for a global audience of
          developers — work that continues to shape how I document, mentor, and
          explain technical decisions on every team I join.
        </p>
        <p>
          Previously, I founded{" "}
          <span className="font-medium text-foreground">FoundryFour</span> and{" "}
          <span className="font-medium text-foreground">Scrollcraft</span>, and
          shipped optimization work as a front-end engineering intern at
          InfoLabz.
        </p>
      </div>
    </section>
  );
}
