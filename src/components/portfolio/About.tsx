import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { SectionHeader } from "./SectionHeader";

const stats = [
  { value: "5+", label: { en: "Years", mm: "နှစ်" } },
  { value: "40+", label: { en: "Projects", mm: "ပရောဂျက်" } },
  { value: "12", label: { en: "Clients", mm: "ဖောက်သည်" } },
  { value: "∞", label: { en: "Coffee", mm: "ကော်ဖီ" } },
];

export function About() {
  const { t, lang } = useI18n();
  return (
    <section id="about" className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader kicker={t("about.kicker")} title={t("about.title")} />
        <div className="grid md:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3 space-y-5 text-lg text-muted-foreground leading-relaxed"
          >
            <p>{t("about.body1")}</p>
            <p>{t("about.body2")}</p>
          </motion.div>
          <div className="md:col-span-2 grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.value}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-xl border border-border bg-card p-6"
              >
                <div className="font-display text-4xl font-bold text-accent">{s.value}</div>
                <div className="mt-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  {s.label[lang]}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
