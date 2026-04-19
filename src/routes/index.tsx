import { createFileRoute } from "@tanstack/react-router";
import { ThemeProvider } from "@/lib/theme";
import { I18nProvider } from "@/lib/i18n";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Work } from "@/components/portfolio/Work";
import { Experience } from "@/components/portfolio/Experience";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Min Thu" },
      {
        name: "description",
        content:
          "Full-stack developer crafting fast, accessible web products. React, TypeScript, Node, and modern cloud platforms.",
      },
      { property: "og:title", content: "Min Thu" },
      {
        property: "og:description",
        content: "Full-stack developer crafting fast, accessible web products.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <ThemeProvider>
      <I18nProvider>
        <div className="min-h-screen bg-background text-foreground">
          <Navbar />
          <main>
            <Hero />
            <Work />
            <About />
            <Skills />
            <Experience />
            <Contact />
          </main>
          <Footer />
          <Toaster position="bottom-right" />
        </div>
      </I18nProvider>
    </ThemeProvider>
  );
}
