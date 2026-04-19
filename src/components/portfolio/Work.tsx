import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { useI18n, type Lang } from "@/lib/i18n";
import { SectionHeader } from "./SectionHeader";

type Project = {
  title: string;
  desc: { en: string; mm: string };
  tags: string[];
  year: string;
  gradient: string;
};

const projects: Project[] = [
  {
    title: "Nimbus Analytics",
    desc: {
      en: "Real-time analytics dashboard processing 10M+ events daily. Built with React, TimescaleDB, and edge functions.",
      mm: "နေ့စဉ် ၁၀ သန်းကျော် events များကို real-time လုပ်ဆောင်သော analytics dashboard။",
    },
    tags: ["React", "Node", "TimescaleDB", "Cloudflare"],
    year: "2024",
    gradient: "from-accent/40 via-accent/10 to-transparent",
  },
  {
    title: "Loop Commerce",
    desc: {
      en: "Headless e-commerce platform with subscription billing, inventory sync, and a custom CMS for 200+ stores.",
      mm: "subscription, inventory sync နှင့် custom CMS ပါဝင်သော headless e-commerce platform။",
    },
    tags: ["Next.js", "Stripe", "Postgres", "AWS"],
    year: "2024",
    gradient: "from-blue-500/30 via-accent/10 to-transparent",
  },
  {
    title: "Pulse DevTools",
    desc: {
      en: "Open-source observability suite for Node.js services. 4k+ stars on GitHub, used by teams at scale.",
      mm: "Node.js services များအတွက် open-source observability suite။ GitHub ပေါ်တွင် star ၄ထောင်ကျော်။",
    },
    tags: ["TypeScript", "OpenTelemetry", "Vite"],
    year: "2023",
    gradient: "from-purple-500/30 via-accent/10 to-transparent",
  },
  {
    title: "Mira Studio",
    desc: {
      en: "AI-powered design tool that turns sketches into responsive websites. Won Product Hunt #1 of the day.",
      mm: "ပုံကြမ်းများကို responsive ဝဘ်ဆိုဒ်အဖြစ် ပြောင်းပေးသော AI design tool။",
    },
    tags: ["React", "Canvas", "OpenAI", "Edge"],
    year: "2023",
    gradient: "from-orange-500/30 via-accent/10 to-transparent",
  },
];

export function Work() {
  const { t, lang } = useI18n();
  return (
    <section id="work" className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader kicker={t("work.kicker")} title={t("work.title")} />
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} p={p} i={i} lang={lang} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ p, i, lang, t }: { p: Project; i: number; lang: Lang; t: (k: any) => string }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
      className="group relative rounded-2xl border border-border bg-card overflow-hidden hover:border-accent/40 transition-all duration-500"
    >
      <div className={`relative h-56 overflow-hidden bg-gradient-to-br ${p.gradient}`}>
        <div className="absolute inset-0 grain opacity-20" />
        <div className="absolute top-4 left-4 font-mono text-xs uppercase tracking-wider text-foreground/60">
          {p.year}
        </div>
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
          <h3 className="font-display text-3xl md:text-4xl font-bold tracking-tight">{p.title}</h3>
          <ArrowUpRight className="h-6 w-6 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </div>
      <div className="p-6">
        <p className="text-muted-foreground leading-relaxed">{p.desc[lang]}</p>
        <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
          <ul className="flex flex-wrap gap-2">
            {p.tags.map((tag) => (
              <li key={tag} className="font-mono text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground">
                {tag}
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3 text-sm">
            <a href="#" className="inline-flex items-center gap-1 hover:text-accent transition-colors">
              {t("work.live")} <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <a href="#" className="inline-flex items-center gap-1 hover:text-accent transition-colors">
              <Github className="h-3.5 w-3.5" /> {t("work.code")}
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
