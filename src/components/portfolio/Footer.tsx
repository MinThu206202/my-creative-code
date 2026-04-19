import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs uppercase tracking-wider text-muted-foreground">
        <div>
          © {year} devname. {t("footer.rights")}
        </div>
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {t("footer.built")}
        </div>
      </div>
    </footer>
  );
}
