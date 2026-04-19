import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Moon, Sun, Languages, Menu } from "lucide-react";
import { useTheme } from "@/lib/theme";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from "@/components/ui/sheet";

const links = [
  { id: "work", key: "nav.work" as const },
  { id: "about", key: "nav.about" as const },
  { id: "skills", key: "nav.skills" as const },
  { id: "contact", key: "nav.contact" as const },
];

export function Navbar() {
  const { theme, toggle } = useTheme();
  const { lang, setLang, t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl bg-background/70 border-b border-border" : ""
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-display text-xl font-bold tracking-tight flex items-center gap-1">
          <span>Minn Thu</span>
        </a>

        <ul className="hidden md:flex items-center gap-1 font-mono text-xs uppercase tracking-wider">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className="px-3 py-2 rounded-md hover:text-accent transition-colors text-muted-foreground hover:bg-muted"
              >
                {t(l.key)}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setLang(lang === "en" ? "mm" : "en")}
            className="font-mono text-xs uppercase gap-1.5"
            aria-label="Toggle language"
          >
            <Languages className="h-4 w-4" />
            {lang === "en" ? "EN" : "MM"}
          </Button>
          <Button variant="ghost" size="icon" onClick={toggle} aria-label="Toggle theme">
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>

          {/* Mobile sidebar trigger */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 flex flex-col">
              <SheetHeader>
                <SheetTitle className="font-display text-2xl text-left">
                  Min Thu<span className="text-accent">.</span>
                </SheetTitle>
              </SheetHeader>
              <ul className="mt-8 flex flex-col gap-1 font-mono text-sm uppercase tracking-wider">
                {links.map((l) => (
                  <li key={l.id}>
                    <a
                      href={`#${l.id}`}
                      onClick={() => setOpen(false)}
                      className="block px-3 py-3 rounded-md text-muted-foreground hover:text-accent hover:bg-muted transition-colors"
                    >
                      {t(l.key)}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-6 border-t border-border font-mono text-xs text-muted-foreground">
                © {new Date().getFullYear()} Min Thu
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </motion.header>
  );
}
