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
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-6xl px-6 flex flex-col gap-6">
        <div className="flex justify-center gap-2">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="h-10 w-10 rounded-full border border-border flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs uppercase tracking-wider text-muted-foreground">
          <div>
            © {year} devname. {t("footer.rights")}
          </div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {t("footer.built")}
          </div>
        </div>
      </div>
    </footer>
  );
}
