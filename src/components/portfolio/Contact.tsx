import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { Send, Mail, Check } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { SectionHeader } from "./SectionHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export function Contact() {
  const { t } = useI18n();
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const schema = z.object({
    name: z.string().trim().min(1, t("contact.error.name")).max(100),
    email: z.string().trim().email(t("contact.error.email")).max(255),
    message: z.string().trim().min(1, t("contact.error.message")).max(2000),
  });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      message: fd.get("message"),
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Invalid input");
      return;
    }
    setSubmitting(true);
    // Simulated send — open mail client as fallback
    const { name, email, message } = parsed.data;
    const body = encodeURIComponent(`From: ${name} <${email}>\n\n${message}`);
    setTimeout(() => {
      window.location.href = `mailto:hello@example.com?subject=${encodeURIComponent("Portfolio inquiry from " + name)}&body=${body}`;
      setSubmitting(false);
      setSent(true);
      toast.success(t("contact.success"));
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setSent(false), 4000);
    }, 600);
  };

  return (
    <section id="contact" className="py-24 md:py-32 border-t border-border bg-muted/30">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader kicker={t("contact.kicker")} title={t("contact.title")} />
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 max-w-2xl mx-auto text-center"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">{t("contact.lede")}</p>
            <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 font-display text-2xl hover:text-accent transition-colors">
              <Mail className="h-5 w-5" /> hello@example.com
            </a>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={onSubmit}
            className="w-full rounded-2xl border border-border bg-card p-6 md:p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label={t("contact.name")} name="name" />
              <Field label={t("contact.email")} name="email" type="email" />
            </div>
            <div>
              <Label htmlFor="message" className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                {t("contact.message")}
              </Label>
              <Textarea id="message" name="message" rows={5} className="mt-2" maxLength={2000} required />
            </div>
            <Button type="submit" size="lg" disabled={submitting} className="rounded-full w-full sm:w-auto group">
              {sent ? <Check className="h-4 w-4 mr-1" /> : <Send className="h-4 w-4 mr-1 transition-transform group-hover:translate-x-0.5" />}
              {submitting ? t("contact.sending") : t("contact.send")}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <Label htmlFor={name} className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
        {label}
      </Label>
      <Input id={name} name={name} type={type} className="mt-2" required maxLength={255} />
    </div>
  );
}
