import { Star } from "lucide-react";

export function HeroSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <div className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
        <span>Categories</span>
        <span>/</span>
        <span>Blog</span>
        <span>/</span>
        <span className="text-foreground">Isla</span>
      </div>

      {/* Title and Description */}
      <div className="mb-12 max-w-3xl">
        <h1 className="mb-6 text-5xl font-bold leading-tight text-foreground md:text-6xl">
          Isla — Wellness Landing Page
        </h1>
        <p className="text-lg leading-relaxed text-muted-foreground">
          The perfect starting point for your projects in the field of
          well-being, health and personal care. It transmits peace and serenity
          thanks to a combination of colors, animations and a carefully crafted
          design.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-4">
        <button className="rounded-full bg-foreground px-6 py-3 font-semibold text-background transition-opacity hover:opacity-90">
          Purchase for $39
        </button>
        <button className="rounded-full border border-border px-6 py-3 text-foreground transition-colors hover:bg-accent/50">
          Preview
        </button>
      </div>
    </section>
  );
}
