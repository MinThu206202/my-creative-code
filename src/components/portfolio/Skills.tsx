import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { SectionHeader } from "./SectionHeader";

const groups = [
  { titleKey: "skills.frontend" as const, items: ["React", "TypeScript", "Next.js", "Tailwind", "Framer Motion"] },
  { titleKey: "skills.backend" as const, items: ["Node.js", "PostgreSQL", "tRPC", "GraphQL", "Redis"] },
  { titleKey: "skills.devops" as const, items: ["AWS", "Docker", "Cloudflare", "Vercel", "Terraform"] },
  { titleKey: "skills.tools" as const, items: ["Git", "Figma", "Vitest", "Playwright", "Linear"] },
];

const marquee = ["TypeScript", "React", "Node.js", "PostgreSQL", "AWS", "Docker", "Tailwind", "Next.js", "GraphQL", "Redis", "Vercel", "Cloudflare"];

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
              <h3 className="font-mono text-xs uppercase tracking-wider text-accent mb-4">{t(g.titleKey)}</h3>
              <ul className="space-y-2 font-display text-lg">
                {g.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Marquee */}
      <div className="mt-16 overflow-hidden border-y border-border bg-foreground text-background py-6">
        <div className="flex gap-12 whitespace-nowrap" style={{ animation: "marquee 35s linear infinite" }}>
          {[...marquee, ...marquee].map((item, i) => (
            <span key={i} className="font-display text-3xl md:text-5xl font-bold flex items-center gap-12">
              {item}
              <span className="text-accent">★</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
