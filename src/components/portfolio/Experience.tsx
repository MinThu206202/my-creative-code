import { motion } from "framer-motion";
import { useI18n, type Lang } from "@/lib/i18n";
import { SectionHeader } from "./SectionHeader";

type Item = {
  role: { en: string; mm: string };
  company: string;
  period: string;
  desc: { en: string; mm: string };
};

const items: Item[] = [
  {
    role: { en: "Senior Full-Stack Engineer", mm: "Senior Full-Stack Engineer" },
    company: "Nebula Labs",
    period: "2023 — Now",
    desc: {
      en: "Lead engineer on the analytics platform. Architected an event ingestion pipeline handling 10M+ events/day at p99 < 30ms.",
      mm: "Analytics platform ၏ lead engineer။ နေ့စဉ် event ၁၀ သန်းကျော် ကိုင်တွယ်နိုင်သော pipeline ဒီဇိုင်းဆွဲခဲ့သည်။",
    },
  },
  {
    role: { en: "Full-Stack Developer", mm: "Full-Stack Developer" },
    company: "Loop Commerce",
    period: "2021 — 2023",
    desc: {
      en: "Built the merchant dashboard used by 200+ stores. Migrated legacy monolith to a typed tRPC service mesh.",
      mm: "ဆိုင် ၂၀၀ ကျော်အသုံးပြုသော merchant dashboard ကို တည်ဆောက်ခဲ့သည်။",
    },
  },
  {
    role: { en: "Frontend Developer", mm: "Frontend Developer" },
    company: "Studio Atlas",
    period: "2019 — 2021",
    desc: {
      en: "Designed and shipped marketing sites and product UI for early-stage startups. Established the in-house design system.",
      mm: "Startup အစောပိုင်းများအတွက် marketing site နှင့် UI များ ဒီဇိုင်းပြီး ထုတ်ပေးခဲ့သည်။",
    },
  },
];

export function Experience() {
  const { t, lang } = useI18n();
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader kicker={t("exp.kicker")} title={t("exp.title")} />
        <ol className="relative border-l border-border ml-2">
          {items.map((it, i) => (
            <Row key={it.company} it={it} i={i} lang={lang} />
          ))}
        </ol>
      </div>
    </section>
  );
}

function Row({ it, i, lang }: { it: Item; i: number; lang: Lang }) {
  return (
    <motion.li
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      className="pl-8 pb-12 last:pb-0 relative"
    >
      <span className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-accent ring-4 ring-background" />
      <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-1">{it.period}</div>
      <h3 className="font-display text-2xl md:text-3xl font-semibold">
        {it.role[lang]} <span className="text-muted-foreground">· {it.company}</span>
      </h3>
      <p className="mt-2 text-muted-foreground max-w-2xl leading-relaxed">{it.desc[lang]}</p>
    </motion.li>
  );
}
