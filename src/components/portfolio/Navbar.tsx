import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Moon, Sun, Languages } from "lucide-react";
import { useTheme } from "@/lib/theme";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";

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
          <span>devname</span>
          <span className="text-accent">.</span>
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
        </div>
      </nav>
    </motion.header>
  );
}
