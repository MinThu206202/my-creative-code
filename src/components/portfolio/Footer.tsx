import { Github, Linkedin, Twitter, Instagram, Mail } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  const socials = [
    { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
          © {year} devname. {t("footer.rights")}
        </div>
        <div className="flex justify-center gap-2">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
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
