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
    en: "Senior Web Developer with 2+ years of experience specializing in backend and full-stack web development using PHP and Laravel. Proven ability to design and build scalable, high-performance web applications.",
    mm: "PHP နှင့် Laravel ဖြင့် backend နှင့် full-stack web development တွင် အထူးပြုထားသော ၂ နှစ်ကျော် အတွေ့အကြုံရှိ Senior Web Developer တစ်ဦးဖြစ်ပါသည်။ Scalable နှင့် high-performance web application များ ဒီဇိုင်းဆွဲ၍ တည်ဆောက်နိုင်စွမ်း သက်သေပြပြီးဖြစ်သည်။",
  },
  "about.body2": {
    en: "Experienced in real-world business systems like a Training Management System and a Delivery Management System, with a strong foundation in system architecture, clean code, and performance optimization. Skilled in OOP, SOLID principles, and modern design patterns (MVC, Repository, Service Layer), RESTful APIs, and cloud deployment on DigitalOcean — currently expanding into the .NET ecosystem for enterprise-level web and API development.",
    mm: "Training Management System နှင့် Delivery Management System ကဲ့သို့ လက်တွေ့ business system များ တည်ဆောက်ခဲ့ဖူးပြီး system architecture, clean code နှင့် performance optimization တွင် ခိုင်မာသော အခြေခံရှိပါသည်။ OOP, SOLID principles, MVC/Repository/Service Layer ကဲ့သို့ design pattern များ၊ RESTful API နှင့် DigitalOcean cloud deployment တို့တွင် ကျွမ်းကျင်ပြီး၊ ယခုအခါ enterprise-level web/API အတွက် .NET ecosystem သို့ ချဲ့ထွင်လေ့လာနေပါသည်။",
  },

  "skills.kicker": { en: "Stack", mm: "နည်းပညာ" },
  "skills.title": { en: "Tools I reach for.", mm: "အသုံးပြုလေ့ရှိသော tools များ။" },
  "skills.frontend": { en: "Frontend", mm: "Frontend" },
  "skills.backend": { en: "Backend", mm: "Backend" },
  "skills.devops": { en: "Database & Cloud", mm: "Database နှင့် Cloud" },
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
