import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { useI18n, type Lang } from "@/lib/i18n";
import { SectionHeader } from "./SectionHeader";
import deliveryImg from "@/assets/projects/delivery.jpg";
import trainingImg from "@/assets/projects/training.png";
import employeeImg from "@/assets/projects/employee.jpg";
import ticketImg from "@/assets/projects/ticket.png";

type Project = {
  title: string;
  desc: { en: string; mm: string };
  tags: string[];
  year: string;
  gradient: string;
  image: string;
  github?: string;
  demo?: string;
};

const projects: Project[] = [
  {
    title: "Delivery Management System",
    desc: {
      en: "End-to-end parcel delivery platform inspired by Royal Express — handles order intake, route assignment, driver tracking, and proof of delivery. Built from scratch with pure PHP and MySQL.",
      mm: "Royal Express ပုံစံ parcel delivery platform — order, route assignment, driver tracking နှင့် proof of delivery အပြည့်အစုံ။ Pure PHP ဖြင့် တည်ဆောက်ထားသည်။",
    },
    tags: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    year: "2025",
    gradient: "from-accent/40 via-accent/10 to-transparent",
    image: deliveryImg,
    github: "https://github.com/MinThu206202/GoDelivery",
  },
  {
    title: "Training Management System",
    desc: {
      en: "School operations platform managing students, instructors, classes, and schedules with role-based access. Deployed on DigitalOcean with automated backups and zero-downtime releases.",
      mm: "ကျောင်းသား၊ ဆရာ၊ အတန်းနှင့် schedule များ စီမံသည့် training platform။ DigitalOcean တွင် deploy လုပ်ထားသည်။",
    },
    tags: ["Laravel", "MySQL", "DigitalOcean", "Blade"],
    year: "2023",
    gradient: "from-blue-500/30 via-accent/10 to-transparent",
    image: trainingImg,
    demo: "https://www.itvisionsoft.com/",
  },
  {
    title: "Employee Management System",
    desc: {
      en: "Internal HR platform covering employee records, attendance, leave requests, and payroll reporting. Built on .NET with SQL Server and a clean, role-aware admin UI.",
      mm: "ဝန်ထမ်းမှတ်တမ်း၊ အလုပ်တက်ချိန်၊ ခွင့်နှင့် လစာ report များအတွက် HR platform။ .NET ဖြင့် တည်ဆောက်ထားသည်။",
    },
    tags: [".NET", "C#", "SQL Server", "Bootstrap"],
    year: "2023",
    gradient: "from-purple-500/30 via-accent/10 to-transparent",
    image: employeeImg,
    github: "https://github.com/MinThu206202/EmployeesManagement",
  },
  {
    title: "Support Ticket Portal",
    desc: {
      en: "Customer support portal with ticket creation, threaded replies, status workflows, and agent dashboards. React SPA backed by a Laravel REST API.",
      mm: "Ticket ဖန်တီးခြင်း၊ status workflow နှင့် agent dashboard ပါဝင်သော customer support portal။ React + Laravel API ဖြင့် တည်ဆောက်ထားသည်။",
    },
    tags: ["React", "Laravel", "REST API", "MySQL"],
    year: "2024",
    gradient: "from-orange-500/30 via-accent/10 to-transparent",
    image: ticketImg,
    github: "https://github.com/MinThu206202",
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
        <img
          src={p.image}
          alt={p.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-background/60 to-transparent" />
        <div className="absolute inset-0 grain opacity-10" />
        <div className="absolute top-4 left-4 font-mono text-xs uppercase tracking-wider text-foreground/80 bg-background/60 backdrop-blur px-2 py-1 rounded">
          {p.year}
        </div>
        <div className="absolute top-4 right-4 flex items-center gap-2 text-xs">
          <a
            href="#"
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-background/70 backdrop-blur border border-border hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors"
          >
            {t("work.live")} <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-background/70 backdrop-blur border border-border hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors"
          >
            <Github className="h-3.5 w-3.5" /> {t("work.code")}
          </a>
        </div>
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
          <h3 className="font-display text-3xl md:text-4xl font-bold tracking-tight">{p.title}</h3>
          <ArrowUpRight className="h-6 w-6 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight">{p.title}</h3>
          <ArrowUpRight className="h-6 w-6 mt-1 shrink-0 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
        <p className="mt-3 text-muted-foreground leading-relaxed">{p.desc[lang]}</p>
        <div className="mt-5">
          <ul className="flex flex-wrap gap-2">
            {p.tags.map((tag) => (
              <li key={tag} className="font-mono text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground">
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.article>
  );
}
