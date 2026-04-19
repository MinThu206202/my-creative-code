import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import minthu from "@/assets/minthu.jpeg";

export function Hero() {
  const { t } = useI18n();

  return (
    <section id="top" className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      {/* Decorative grain + gradient */}
      <div className="pointer-events-none absolute inset-0 grain opacity-[0.15]" />
      <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-accent/30 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-6 grid md:grid-cols-[1.4fr_1fr] gap-12 md:gap-16 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted-foreground mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            {t("hero.available")} — {t("hero.role")}
          </motion.div>

          <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl leading-[0.95] tracking-tight text-balance">
            <Stagger delay={0.05}>Hi, I'm</Stagger>{" "}
            <Stagger delay={0.15}>
              <em className="italic font-normal text-accent">{t("hero.name")}</em>
            </Stagger>
            <br />
            <Stagger delay={0.3}>{t("hero.title1")}</Stagger>{" "}
            <Stagger delay={0.45}>
              <em className="italic font-normal text-accent">{t("hero.title2")}</em>
            </Stagger>{" "}
            <Stagger delay={0.6}>{t("hero.title3")}</Stagger>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-8 max-w-xl text-lg text-muted-foreground text-balance"
          >
            {t("hero.lede")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.6 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <Button asChild size="lg" className="rounded-full font-medium group">
              <a href="#work">
                {t("hero.cta")}
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full font-medium">
              <a href="#contact">{t("hero.cta2")}</a>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="relative mx-auto md:mx-0 w-full max-w-sm"
        >
          <div className="absolute -inset-4 bg-accent/20 blur-2xl rounded-full" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-surface shadow-[var(--shadow-card)]">
            <img
              src={minthu}
              alt="Portrait of Min Thu, full-stack developer"
              width={896}
              height={1152}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-3 -left-3 rounded-full bg-accent text-accent-foreground font-mono text-[10px] uppercase tracking-widest px-3 py-1.5 shadow-md">
            Min Thu · Dev
          </div>
        </motion.div>

        <motion.a
          href="#work"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="hidden md:flex absolute right-6 bottom-0 items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted-foreground hover:text-accent"
        >
          <ArrowDown className="h-4 w-4 animate-bounce" /> scroll
        </motion.a>
      </div>
    </section>
  );
}

function Stagger({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
      className="inline-block"
    >
      {children}
    </motion.span>
  );
}
