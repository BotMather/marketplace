import type React from "react";
import Link from "next/link";

export function Navigation() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            <span className="text-primary">Bot</span>
            <span className="text-accent">Mather</span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <Link
              href="/template"
              className="text-sm text-foreground/70 transition hover:text-foreground"
            >
              Templates
            </Link>
            <Link
              href="/price"
              className="text-sm text-foreground/70 transition hover:text-foreground"
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              className="text-sm text-foreground/70 transition hover:text-foreground"
            >
              Contact
            </Link>
          </div>

          <Link
            href="/template"
            className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
