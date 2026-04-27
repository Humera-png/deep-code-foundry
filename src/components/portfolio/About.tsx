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
          I'm a front-end developer who cares deeply about the craft of building
          interfaces that feel fast, accessible, and effortless. My work sits
          where design intent meets implementation — translating Figma files,
          ideas, and rough sketches into production-grade React code.
        </p>
        <p>
          Currently, I lead front-end work at{" "}
          <span className="font-medium text-foreground">FoundryFour</span>,
          where I ship interfaces for product launches, marketing sites, and
          internal tools. Previously, I contributed to learning experiences at{" "}
          <span className="font-medium text-foreground">GeeksforGeeks</span>,
          built client work at{" "}
          <span className="font-medium text-foreground">InfoLabz</span>, and
          freelanced through{" "}
          <span className="font-medium text-foreground">Scrollcraft</span>.
        </p>
        <p>
          When I'm not coding, I'm reading about typography, exploring new
          animation libraries, or refactoring my own portfolio (again).
        </p>
      </div>
    </section>
  );
}
