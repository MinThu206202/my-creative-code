import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { SectionHeader } from "./SectionHeader";

const groups = [
  {
    titleKey: "skills.frontend" as const,
    items: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Tailwind", level: 92 },
      { name: "Framer Motion", level: 80 },
    ],
  },
  {
    titleKey: "skills.backend" as const,
    items: [
      { name: "PHP", level: 88 },
      { name: "Laravel", level: 90 },
      { name: ".NET", level: 80 },
      { name: "C#", level: 80 },
    ],
  },
  {
    titleKey: "skills.devops" as const,
    items: [
      { name: "Docker", level: 80 },
      { name: "DigitalOcean", level: 78 },
      { name: "MySQL", level: 90 },
      { name: "SQL Server", level: 82 },
      { name: "AWS", level: 70 },
    ],
  },
  {
    titleKey: "skills.tools" as const,
    items: [
      { name: "Git", level: 92 },
      { name: "Figma", level: 78 },
      { name: "Postman", level: 85 },
    ],
  },
];

export function Skills() {
  const { t } = useI18n();
  return (
    <section id="skills" className="py-24 md:py-32 border-t border-border bg-muted/30">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader kicker={t("skills.kicker")} title={t("skills.title")} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {groups.map((g, i) => (
            <motion.div
              key={g.titleKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-xl border border-border bg-card p-6"
            >
              <h3 className="font-mono text-xs uppercase tracking-wider text-accent mb-5">
                {t(g.titleKey)}
              </h3>
              <ul className="space-y-4">
                {g.items.map((item, idx) => (
                  <li key={item.name}>
                    <div className="flex items-baseline justify-between mb-1.5">
                      <span className="font-display text-base">{item.name}</span>
                      <span className="font-mono text-xs text-muted-foreground tabular-nums">
                        {item.level}%
                      </span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.08 + idx * 0.05, ease: "easeOut" }}
                        className="h-full rounded-full bg-accent"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
