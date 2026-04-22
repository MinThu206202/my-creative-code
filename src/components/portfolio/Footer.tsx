import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  const socials = [
    { icon: Mail, href: "mailto:mint12696@gmail.com", label: "Email", external: false },
    { icon: Github, href: "https://github.com/MinThu206202", label: "GitHub", external: true },
    { icon: Linkedin, href: "https://www.linkedin.com/in/min-thu-18772734b", label: "LinkedIn", external: true },
    { icon: Instagram, href: "#", label: "Instagram", external: true },
  ];

  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
          © {year} devname. {t("footer.rights")}
        </div>
        <div className="flex justify-center gap-2">
          {socials.map(({ icon: Icon, href, label, external }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="h-10 w-10 rounded-full border border-border flex items-center justify-center transition-all duration-300 hover:bg-accent hover:text-accent-foreground hover:border-accent hover:-translate-y-1 hover:scale-110 hover:shadow-lg hover:shadow-accent/30"
            >
              <Icon className="h-4 w-4 transition-transform duration-300" />
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          {t("footer.built")}
        </div>
      </div>
    </footer>
  );
}
