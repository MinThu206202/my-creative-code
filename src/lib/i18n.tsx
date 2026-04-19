import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "mm";

type Dict = Record<string, { en: string; mm: string }>;

export const dict: Dict = {
  "nav.work": { en: "Work", mm: "လုပ်ငန်း" },
  "nav.about": { en: "About", mm: "အကြောင်း" },
  "nav.skills": { en: "Skills", mm: "ကျွမ်းကျင်မှု" },
  "nav.contact": { en: "Contact", mm: "ဆက်သွယ်ရန်" },
  "nav.cv": { en: "Résumé", mm: "ကိုယ်ရေးရာဇဝင်" },

  "hero.available": { en: "Available for new projects", mm: "ပရောဂျက်အသစ်များ လက်ခံနေပါသည်" },
  "hero.role": { en: "Full-Stack Developer", mm: "Full-Stack ဆော့ဖ်ဝဲရေးသား" },
  "hero.name": { en: "Min Thu", mm: "မင်းသူ" },
  "hero.title1": { en: "Building", mm: "တည်ဆောက်နေသည်" },
  "hero.title2": { en: "delightful", mm: "နှစ်သက်ဖွယ်" },
  "hero.title3": { en: "web products.", mm: "ဝဘ်ထုတ်ကုန်များ။" },
  "hero.lede": {
    en: "I design and ship end-to-end web applications — from pixel-perfect interfaces to scalable APIs and cloud infrastructure.",
    mm: "အသုံးပြုသူ မျက်နှာပြင်မှ cloud infrastructure အထိ end-to-end ဝဘ်အပလီကေးရှင်းများကို ဒီဇိုင်းဆွဲ၍ ထုတ်ဝေပေးပါသည်။",
  },
  "hero.cta": { en: "See my work", mm: "လုပ်ငန်းများကြည့်ရန်" },
  "hero.cta2": { en: "Get in touch", mm: "ဆက်သွယ်ရန်" },

  "about.kicker": { en: "About", mm: "အကြောင်း" },
  "about.title": { en: "A developer obsessed with craft.", mm: "အရည်အသွေးကို စွဲလမ်းသော developer တစ်ဦး။" },
  "about.body1": {
    en: "I'm a full-stack engineer with 5+ years of experience building products used by thousands. I specialize in TypeScript, React, Node, and modern cloud platforms — turning complex problems into clean, intuitive software.",
    mm: "လူသုံးထောင်နှင့်ချီသော ထုတ်ကုန်များကို တည်ဆောက်ခဲ့သည့် ၅ နှစ်ကျော်အတွေ့အကြုံရှိ full-stack engineer တစ်ဦးဖြစ်ပါသည်။ TypeScript, React, Node နှင့် modern cloud platform များတွင် အထူးပြုပါသည်။",
  },
  "about.body2": {
    en: "When I'm not coding, you'll find me writing about systems design, contributing to open source, or hunting for the perfect cup of coffee.",
    mm: "ကုဒ်မရေးချိန်တွင် systems design အကြောင်းရေးခြင်း၊ open source တွင် ပါဝင်ခြင်းနှင့် ကောင်းသော ကော်ဖီရှာဖွေခြင်းတို့ကို နှစ်သက်ပါသည်။",
  },

  "skills.kicker": { en: "Stack", mm: "နည်းပညာ" },
  "skills.title": { en: "Tools I reach for.", mm: "အသုံးပြုလေ့ရှိသော tools များ။" },
  "skills.frontend": { en: "Frontend", mm: "Frontend" },
  "skills.backend": { en: "Backend", mm: "Backend" },
  "skills.devops": { en: "DevOps & Cloud", mm: "DevOps နှင့် Cloud" },
  "skills.tools": { en: "Tooling", mm: "ကိရိယာ" },

  "work.kicker": { en: "Selected Work", mm: "ရွေးချယ်ထားသော လုပ်ငန်းများ" },
  "work.title": { en: "Things I've shipped.", mm: "ထုတ်ဝေခဲ့သော လက်ရာများ။" },
  "work.view": { en: "View case", mm: "အသေးစိတ်" },
  "work.live": { en: "Live", mm: "ကြည့်ရန်" },
  "work.code": { en: "Code", mm: "ကုဒ်" },

  "exp.kicker": { en: "Experience", mm: "အတွေ့အကြုံ" },
  "exp.title": { en: "Where I've worked.", mm: "လုပ်ခဲ့သော နေရာများ။" },

  "contact.kicker": { en: "Contact", mm: "ဆက်သွယ်ရန်" },
  "contact.title": { en: "Let's build something.", mm: "အတူတကွ တည်ဆောက်ကြရအောင်။" },
  "contact.lede": {
    en: "Have a project in mind or just want to chat? Drop a message — I reply within 24 hours.",
    mm: "ပရောဂျက်တစ်ခုခု သို့မဟုတ် စကားပြောချင်ပါသလား? ၂၄ နာရီအတွင်း ပြန်ဖြေပေးပါမည်။",
  },
  "contact.name": { en: "Your name", mm: "သင့်နာမည်" },
  "contact.email": { en: "Email", mm: "အီးမေးလ်" },
  "contact.message": { en: "Message", mm: "စာ" },
  "contact.send": { en: "Send message", mm: "ပို့မည်" },
  "contact.sending": { en: "Sending...", mm: "ပို့နေသည်..." },
  "contact.success": { en: "Message sent! I'll get back to you soon.", mm: "ပို့ပြီးပါပြီ! မကြာမီပြန်ဆက်သွယ်ပါမည်။" },
  "contact.error.name": { en: "Please enter your name", mm: "နာမည်ထည့်ပါ" },
  "contact.error.email": { en: "Please enter a valid email", mm: "မှန်ကန်သော အီးမေးလ်ထည့်ပါ" },
  "contact.error.message": { en: "Please enter a message", mm: "စာထည့်ပါ" },

  "footer.rights": { en: "All rights reserved.", mm: "မူပိုင်ခွင့်အားလုံး။" },
  "footer.built": { en: "Built with care.", mm: "ဂရုတစိုက်တည်ဆောက်ထားသည်။" },
};

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: keyof typeof dict) => string;
};

const I18nCtx = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem("lang")) as Lang | null;
    if (saved === "en" || saved === "mm") setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("lang", l);
  };

  const t = (key: keyof typeof dict) => dict[key]?.[lang] ?? String(key);

  return <I18nCtx.Provider value={{ lang, setLang, t }}>{children}</I18nCtx.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nCtx);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
