import { useEffect, useRef, type ReactNode } from "react";

export function Spotlight({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handler = (e: MouseEvent) => {
      el.style.setProperty("--mx", `${e.clientX}px`);
      el.style.setProperty("--my", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <div ref={ref} className="relative min-h-screen bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 z-30 spotlight transition duration-300" />
      {children}
    </div>
  );
}
