import { motion } from "framer-motion";

export function SectionHeader({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="mb-12 md:mb-16">
      <motion.div
        initial={{ opacity: 0, x: -8 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4 flex items-center gap-3"
      >
        <span className="h-px w-8 bg-accent" />
        {kicker}
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="font-display text-4xl md:text-6xl font-bold tracking-tight text-balance max-w-3xl"
      >
        {title}
      </motion.h2>
    </div>
  );
}
