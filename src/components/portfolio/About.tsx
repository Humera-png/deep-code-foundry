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
          I'm a Computer Science Engineer (B.Tech) and the founder of{" "}
          <span className="font-medium text-foreground">FoundryFour</span>, a
          small studio I started to help early-stage startups ship fast,
          accessible, and well-engineered web products. My work sits at the
          intersection of careful engineering and clear communication.
        </p>
        <p>
          Over the last four years, I've authored{" "}
          <span className="font-medium text-foreground">
            100+ technical articles
          </span>{" "}
          for{" "}
          <span className="font-medium text-foreground">GeeksforGeeks</span>,
          breaking down JavaScript, React, and CSS concepts for a global
          audience of developers. That practice shaped how I write code: with
          the same care I put into documentation — readable, intentional, and
          built to be handed off.
        </p>
        <p>
          Today I lead front-end engineering at FoundryFour and partner with
          founders on everything from marketing sites to full product UIs.
          Previously, I shipped client work at{" "}
          <span className="font-medium text-foreground">InfoLabz</span> and
          freelanced as <span className="font-medium text-foreground">Scrollcraft</span>.
        </p>
        <p>
          When I'm not coding, I'm usually writing — about typography, web
          performance, or whatever rabbit hole the docs led me down this week.
        </p>
      </div>
    </section>
  );
}
