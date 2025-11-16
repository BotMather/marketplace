"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function AboutSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const features = [
    { id: "1", title: "Fully Optimized", icon: "✨" },
    { id: "2", title: "Animations & Effects", icon: "🎬" },
    { id: "3", title: "Automated SEO", icon: "📊" },
    { id: "4", title: "Built-in Analytics", icon: "📈" },
    { id: "5", title: "CMS", icon: "💾" },
    { id: "6", title: "Components", icon: "🧩" },
    { id: "7", title: "Overlays & Modals", icon: "🎯" },
    { id: "8", title: "Project Styles", icon: "🎨" },
    { id: "9", title: "Site Search", icon: "🔍" },
    { id: "10", title: "Sticky Scrolling", icon: "📌" },
    { id: "11", title: "Visual Breakpoints", icon: "📱" },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-12 md:grid-cols-3">
        {/* Main content */}
        <div className="md:col-span-2">
          <h2 className="mb-6 text-3xl font-bold text-foreground">
            About this Template
          </h2>
          <p className="mb-6 leading-relaxed text-muted-foreground">
            This modern, versatile Framer template has been specifically
            designed for wellness-focused brands and businesses. It seamlessly
            combines beautiful design with all the essential features needed to
            showcase your products and services.
          </p>
          <p className="mb-6 leading-relaxed text-muted-foreground">
            Whether you're promoting natural products, vegan cosmetics, or
            luxury items, this template is built with optimization at its core.
            It prioritizes both user experience and conversion, perfect for
            entrepreneurs and businesses committed to holistic health, emotional
            well-being, holistic therapies, and healthy lifestyles. It's an
            excellent choice for entrepreneurs, life coaches, therapists,
            wellness practitioners, alternative medicine practitioners, and
            businesses promoting natural products, vegan cosmetics, or luxury
            items.
          </p>

          {/* Features list */}
          <div className="mt-12">
            <h3 className="mb-6 text-2xl font-bold text-foreground">
              Features
            </h3>
            <div className="space-y-3">
              {features.map((feature) => (
                <button
                  key={feature.id}
                  onClick={() =>
                    setExpandedId(expandedId === feature.id ? null : feature.id)
                  }
                  className="group flex w-full items-center justify-between rounded-lg border border-border/50 p-4 text-left transition-colors hover:bg-accent/50"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{feature.icon}</span>
                    <span className="font-semibold text-foreground">
                      {feature.title}
                    </span>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 text-muted-foreground transition-transform ${expandedId === feature.id ? "rotate-180" : ""}`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Categories
            </h3>
            <div className="space-y-2 text-sm">
              {[
                "Blog",
                "Health",
                "Landing Page",
                "Modern",
                "Illustrative",
                "Light",
                "Professional",
              ].map((cat) => (
                <a
                  key={cat}
                  href="#"
                  className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <span>•</span>
                  {cat}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Pages
            </h3>
            <div className="space-y-2 text-sm">
              {["Home", "Blogs", "FAQ", "Articles", "404"].map((page) => (
                <a
                  key={page}
                  href="#"
                  className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <span>•</span>
                  {page}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Support
            </h3>
            <div className="space-y-2 text-sm">
              {["About Templates", "Contact Creator", "Report Template"].map(
                (support) => (
                  <a
                    key={support}
                    href="#"
                    className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <span>•</span>
                    {support}
                  </a>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
