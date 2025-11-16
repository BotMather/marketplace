import { HeroSection } from "./sections/hero-section";
import { TemplateStats } from "./sections/template-stats";
import { AboutSection } from "./sections/about-section";
import { RelatedTemplates } from "./sections/related-templates";
import { Footer } from "./sections/footer";

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <div className="border-b border-border/50" />
      <HeroSection />
      <TemplateStats />
      <AboutSection />
      <RelatedTemplates />
      <Footer />
    </main>
  );
}
