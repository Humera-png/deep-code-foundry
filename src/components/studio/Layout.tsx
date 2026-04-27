import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 veil" />
      <Nav />
      <main className="relative pt-16">{children}</main>
      <Footer />
    </div>
  );
}
