"use client"

import { createContext, useContext, useEffect, useState } from "react"

const I18N = {
  en: {
    nav_home: "Home", nav_services: "Services", nav_portfolio: "Portfolio",
    nav_about: "About", nav_book: "Book a Call",
    status: "Accepting projects · Q3",

    hero_pill: "NEW", hero_pill_text: "Now building agents that ship code",
    hero_h1_a: "We Build AI That",
    hero_h1_b: "Runs Your Business",
    hero_sub: "Crowdix designs, deploys and operates production-grade AI systems — agents, automations, websites and content — for teams that want to move 10× faster without hiring 10× more people.",
    hero_cta: "Book a Call", hero_cta_alt: "See our services",

    svc_label: "What we do",
    svc_h: "An end-to-end AI department, on demand.",
    svc_p: "Five tightly integrated practices. One team. We sit between strategy and execution so your operators can focus on the work that matters.",
    svc1_t: "Automation Systems", svc1_p: "Custom workflows that connect your stack, eliminate manual handoffs and run 24/7 — built on n8n, Make, and bespoke pipelines.",
    svc2_t: "AI Agents", svc2_p: "Autonomous and assistive agents that handle ops, research, sales outreach and internal Q&A. Memory, tools, guardrails included.",
    svc3_t: "Websites & Applications", svc3_p: "Production web apps, dashboards and marketing sites — designed in-house, shipped on modern stacks (Next.js, Supabase, Vercel).",
    svc4_t: "AI Content", svc4_p: "Short-form video, voice and image pipelines for brands that need to publish weekly without drowning in production.",
    svc5_t: "Graphic Design", svc5_p: "Brand systems, decks, ad creative and product UI — the design layer most AI shops forget.",
    learn: "Learn more",
    feat_label: "Selected Work", feat_p: "Systems built with computational precision.", feat_all: "View all work",

    why_label: "Why Crowdix", why_h: "We are operators first. Engineers second.",
    why_p: "Most AI consultancies sell slideware. We sell systems that run.",
    why1_t: "Speed", why1_p: "Discovery to deployed pilot in 14 days. We pre-build the boring parts so we can focus on yours.",
    why2_t: "Deep Understanding", why2_p: "We embed in your ops, read your tickets, sit on your calls. The system is shaped by reality — not a one-page brief.",
    why3_t: "Quality", why3_p: "Production code, traceable evals, observability dashboards. Not a wrapper around a prompt. Built to survive scrutiny.",

    cta_h: "Ready to Automate\nYour Future?", cta_p: "Join the ranks of elite businesses leveraging Crowdix AI to reclaim thousands of hours and scale effortlessly.",
    cta_btn: "Get Started Now",

    // Services page
    pg_svc_pill: "Services", pg_svc_pill_sub: "Future-Proof Your Workflow",
    pg_svc_h1_a: "Architecting", pg_svc_h1_b: "Intelligent Systems",
    pg_svc_sub: "We bridge the gap between your business goals and cutting-edge AI capabilities, turning complex challenges into streamlined, intelligent solutions.",
    svc_bento1_t: "Automation Systems",
    svc_bento1_b1: "End-to-end workflow design and deployment",
    svc_bento1_b2: "n8n, Make, Zapier & bespoke pipelines",
    svc_bento1_b3: "24/7 monitoring and self-healing triggers",
    svc_bento2_t: "AI Agents",
    svc_bento2_b1: "Custom LLM agents with memory & tools",
    svc_bento2_b2: "Sales, support, research & ops automation",
    svc_bento2_b3: "Guardrails, evals, and observability built-in",
    svc_bento3_t: "Websites & Apps",
    svc_bento3_b1: "Next.js, Supabase, Vercel stack",
    svc_bento3_b2: "AI-integrated dashboards & portals",
    svc_bento3_b3: "Performance-first, mobile-optimised",
    svc_bento4_t: "AI Content",
    svc_bento4_b1: "Short-form video & voice pipelines",
    svc_bento4_b2: "Weekly publishing without production overhead",
    svc_bento4_b3: "Brand-consistent image generation",
    svc_bento5_t: "Graphic Design",
    svc_bento5_b1: "Brand systems & visual identity",
    svc_bento5_b2: "Pitch decks & ad creative",
    svc_bento5_b3: "Product UI & component libraries",
    svc_devfirst_h: "Built for the Developer-First Mindset",
    svc_devfirst_p: "Every system we ship is observable, testable, and handoff-ready. We don't lock you in — we build for your team's long-term ownership.",
    svc_feat1: "High-Concurrency", svc_feat2: "Enterprise Security",
    svc_cta_h: "Ready to automate your future?",
    svc_cta_p: "A 30-minute call. No pitch deck. Bring your messiest workflow.",
    svc_cta_btn1: "Book Discovery Session", svc_cta_btn2: "Download Services Deck",

    // Portfolio page
    pg_port_pill: "Portfolio", pg_port_pill_sub: "Our selected works",
    pg_port_h1_a: "Engineered", pg_port_h1_b: "Excellence",
    pg_port_sub: "Systems built with computational precision. More public case studies landing this quarter.",
    filter_all: "All", filter_web: "Websites", filter_ai: "AI Tools",

    // About page
    pg_about_pill: "About", pg_about_pill_sub: "Intelligence First",
    pg_about_h1_a: "Architecting the Future of",
    pg_about_h1_b: "Intelligent Systems",
    pg_about_sub: "We bridge computational power and human utility — building AI that doesn't just impress in demos but transforms how businesses operate day-to-day.",
    story_label: "Our story",
    story_h: "Built by operators who got tired of demos.",
    story_p1: "Crowdix was started in 2024 by <strong>Karam Eyad</strong> after a year of watching enterprise AI projects stall at the PowerPoint stage. The thesis was simple: most companies don't need another LLM strategy. They need a small, senior team that will quietly replace the broken parts of their operation with software that thinks.",
    story_p2: "We are headquartered between Amman and Dubai, work bilingually in <strong>Arabic and English</strong>, and serve clients across the GCC, Europe and North America. Every engagement is hands-on. Every system we deliver is one we'd run ourselves.",
    stat1_v: "99%", stat1_l: "Model Accuracy",
    stat2_v: "2.5s", stat2_l: "Avg Latency",
    values_label: "Core Values", values_h: "Built on First Principles.",
    val1_t: "Precision Intelligence", val1_p: "Every model we deploy is evaluated, calibrated, and traceable. No black boxes shipped to production.",
    val2_t: "Ethical Guardrails", val2_p: "Safety and reliability aren't afterthoughts. They're architectural requirements baked into every system.",
    val3_t: "Dev-First Logic", val3_p: "We build for your team's long-term ownership. Clean APIs, readable code, full documentation.",
    val4_t: "Future Proofing", val4_p: "Modular architecture means your system evolves as AI does — without costly rewrites.",
    founder_role: "Founder & Principal", founder_name: "Karam Eyad",
    founder_q: "We don't just write code — we understand your operation. Every system we ship is one we'd trust to run our own business.",
    founder_p: "Karam previously led automation engineering at a regional fintech, built a 9-figure-MRR analytics pipeline from scratch, and has been deploying LLMs in production since GPT-3.5. He sits in on every Crowdix engagement personally.",
    founder_book: "Book with Karam",
    about_cta_h: "Ready to scale your", about_cta_h2: "intelligence?",
    about_cta_p: "A 30-minute call. No pitch deck. Bring your messiest workflow.",
    about_cta_btn1: "Schedule Consultation", about_cta_btn2: "View Portfolio",

    // Footer
    foot_explore: "Explore", foot_contact: "Contact", foot_status: "Status",
    foot_email: "crowdiix@gmail.com", foot_calendar: "Book a Call",
    foot_status_v: "All systems nominal",
    foot_desc: "A boutique AI agency building production systems for teams that want to move faster.",
    foot_rights: "© 2026 Crowdix · All rights reserved",
    foot_priv: "Privacy", foot_terms: "Terms",
  },
  ar: {
    nav_home: "الرئيسية", nav_services: "الخدمات", nav_portfolio: "أعمالنا",
    nav_about: "من نحن", nav_book: "احجز مكالمة",
    status: "نقبل المشاريع · الربع الثالث",

    hero_pill: "جديد", hero_pill_text: "نبني وكلاء يكتبون الكود",
    hero_h1_a: "نبني ذكاءً اصطناعياً",
    hero_h1_b: "يُدير أعمالك",
    hero_sub: "تصمم كراودكس وتنشر وتُشغّل أنظمة ذكاء اصطناعي بمستوى إنتاجي — وكلاء، أتمتة، مواقع، ومحتوى — للفرق التي تريد التحرك أسرع بعشرة أضعاف.",
    hero_cta: "احجز مكالمة", hero_cta_alt: "تعرف على خدماتنا",

    svc_label: "ماذا نقدم",
    svc_h: "قسم ذكاء اصطناعي متكامل، عند الطلب.",
    svc_p: "خمس ممارسات متكاملة، فريق واحد.",
    svc1_t: "أنظمة الأتمتة", svc1_p: "تدفقات عمل مخصصة تربط أدواتك، تُلغي العمل اليدوي، وتعمل ٢٤/٧.",
    svc2_t: "وكلاء الذكاء الاصطناعي", svc2_p: "وكلاء مستقلون يديرون العمليات والمبيعات والإجابة الداخلية.",
    svc3_t: "مواقع وتطبيقات", svc3_p: "تطبيقات ويب بمستوى إنتاجي ومنشورة على أحدث المنصات.",
    svc4_t: "محتوى بالذكاء الاصطناعي", svc4_p: "أنابيب فيديو وصوت وصور للعلامات التجارية.",
    svc5_t: "تصميم جرافيكي", svc5_p: "أنظمة هوية بصرية وعروض وإعلانات وواجهات منتج.",
    learn: "اعرف المزيد",
    feat_label: "أعمال مختارة", feat_p: "أنظمة مبنية بدقة حسابية.", feat_all: "جميع الأعمال",

    why_label: "لماذا كراودكس", why_h: "نحن مُشغّلون أولاً. مهندسون ثانياً.",
    why_p: "معظم استشاريي الذكاء الاصطناعي يبيعون شرائح. نحن نبيع أنظمة تعمل.",
    why1_t: "السرعة", why1_p: "من الاكتشاف إلى نموذج تجريبي منشور خلال ١٤ يوماً.",
    why2_t: "فهم عميق", why2_p: "نندمج في عملياتك، نقرأ تذاكرك، نحضر اجتماعاتك.",
    why3_t: "جودة", why3_p: "كود إنتاجي، تقييمات قابلة للتتبع، لوحات مراقبة.",

    cta_h: "هل أنت مستعد\nلأتمتة مستقبلك؟", cta_p: "انضم إلى الشركات التي تستخدم كراودكس لاسترداد آلاف الساعات.",
    cta_btn: "ابدأ الآن",

    pg_svc_pill: "الخدمات", pg_svc_pill_sub: "حوّل عملك للمستقبل",
    pg_svc_h1_a: "هندسة", pg_svc_h1_b: "الأنظمة الذكية",
    pg_svc_sub: "نربط أهدافك التجارية بأحدث قدرات الذكاء الاصطناعي.",
    svc_bento1_t: "أنظمة الأتمتة",
    svc_bento1_b1: "تصميم ونشر تدفقات العمل الكاملة",
    svc_bento1_b2: "n8n وMake وأنابيب مخصصة",
    svc_bento1_b3: "مراقبة ٢٤/٧ ومشغّلات ذاتية الإصلاح",
    svc_bento2_t: "وكلاء الذكاء الاصطناعي",
    svc_bento2_b1: "وكلاء مخصصون مع ذاكرة وأدوات",
    svc_bento2_b2: "أتمتة المبيعات والدعم والبحث",
    svc_bento2_b3: "ضوابط وتقييمات ومراقبة مدمجة",
    svc_bento3_t: "مواقع وتطبيقات",
    svc_bento3_b1: "Next.js وSupabase وVercel",
    svc_bento3_b2: "لوحات تحكم وبوابات مدمجة بالذكاء الاصطناعي",
    svc_bento3_b3: "أداء عالٍ ومتوافق مع الجوال",
    svc_bento4_t: "محتوى بالذكاء الاصطناعي",
    svc_bento4_b1: "أنابيب الفيديو القصير والصوت",
    svc_bento4_b2: "نشر أسبوعي دون تكاليف إنتاج",
    svc_bento4_b3: "توليد صور متسق مع الهوية البصرية",
    svc_bento5_t: "تصميم جرافيكي",
    svc_bento5_b1: "أنظمة الهوية البصرية",
    svc_bento5_b2: "عروض تقديمية وإعلانات",
    svc_bento5_b3: "واجهات المنتج ومكتبات المكوّنات",
    svc_devfirst_h: "مبني للمطورين أولاً",
    svc_devfirst_p: "كل نظام نُسلّمه قابل للمراقبة والاختبار والتسليم. نبني لملكية فريقك على المدى البعيد.",
    svc_feat1: "تزامن عالٍ", svc_feat2: "أمان المؤسسات",
    svc_cta_h: "هل أنت مستعد لأتمتة مستقبلك؟",
    svc_cta_p: "مكالمة ٣٠ دقيقة. بلا عرض تقديمي. أحضر أكثر تدفقاتك فوضى.",
    svc_cta_btn1: "احجز جلسة اكتشاف", svc_cta_btn2: "تحميل ملف الخدمات",

    pg_port_pill: "أعمالنا", pg_port_pill_sub: "مختارات من مشاريعنا",
    pg_port_h1_a: "تميّز", pg_port_h1_b: "مُهندَس",
    pg_port_sub: "أنظمة مبنية بدقة حسابية. المزيد من دراسات الحالة قادمة.",
    filter_all: "الكل", filter_web: "المواقع", filter_ai: "أدوات الذكاء",

    pg_about_pill: "نبذة", pg_about_pill_sub: "الذكاء أولاً",
    pg_about_h1_a: "هندسة مستقبل",
    pg_about_h1_b: "الأنظمة الذكية",
    pg_about_sub: "نربط القدرة الحسابية بالفائدة البشرية — نبني ذكاءً اصطناعياً يغير طريقة عمل الشركات.",
    story_label: "قصتنا",
    story_h: "بناها مُشغّلون تعبوا من العروض التوضيحية.",
    story_p1: "أُسست كراودكس عام ٢٠٢٤ على يد <strong>كرم إياد</strong> بعد سنة من مشاهدة مشاريع الذكاء الاصطناعي تتوقف عند مرحلة العرض التقديمي.",
    story_p2: "مقرنا بين عمّان ودبي، نعمل بـ <strong>العربية والإنجليزية</strong>، ونخدم عملاء في الخليج وأوروبا وأمريكا الشمالية.",
    stat1_v: "٩٩٪", stat1_l: "دقة النموذج",
    stat2_v: "٢.٥ث", stat2_l: "متوسط وقت الاستجابة",
    values_label: "قيمنا", values_h: "مبنية على مبادئ أساسية.",
    val1_t: "دقة الذكاء", val1_p: "كل نموذج نُنشره مُقيَّم ومعايَر وقابل للتتبع.",
    val2_t: "ضوابط أخلاقية", val2_p: "السلامة والموثوقية متطلبات معمارية في كل نظام.",
    val3_t: "منطق المطور أولاً", val3_p: "نبني لملكية فريقك على المدى البعيد.",
    val4_t: "مقاوم للمستقبل", val4_p: "هندسة معيارية تتطور مع الذكاء الاصطناعي.",
    founder_role: "المؤسس والمدير العام", founder_name: "كرم إياد",
    founder_q: "لا نكتب كوداً فحسب — نفهم عملياتك. كل نظام نُسلّمه هو نظام نثق به لتشغيل أعمالنا.",
    founder_p: "قاد كرم سابقاً هندسة الأتمتة في شركة تقنية مالية إقليمية، وبنى خط تحليلات بإيرادات شهرية بتسعة أرقام من الصفر.",
    founder_book: "احجز مع كرم",
    about_cta_h: "هل أنت مستعد لتوسيع", about_cta_h2: "ذكاءك الاصطناعي؟",
    about_cta_p: "مكالمة ٣٠ دقيقة. بلا عرض تقديمي. أحضر أكثر تدفقاتك فوضى.",
    about_cta_btn1: "احجز استشارة", about_cta_btn2: "عرض الأعمال",

    foot_explore: "استكشف", foot_contact: "تواصل", foot_status: "الحالة",
    foot_email: "crowdiix@gmail.com", foot_calendar: "احجز مكالمة",
    foot_status_v: "كل الأنظمة طبيعية",
    foot_desc: "وكالة ذكاء اصطناعي بوتيكية تبني أنظمة إنتاجية للفرق التي تريد التحرك أسرع.",
    foot_rights: "© ٢٠٢٦ كراودكس · جميع الحقوق محفوظة",
    foot_priv: "الخصوصية", foot_terms: "الشروط",
  },
} as const

type Lang = "en" | "ar"
type Keys = keyof typeof I18N.en

interface LangContextValue {
  lang: Lang
  setLang: (l: Lang) => void
  t: (key: Keys) => string
}

const LangContext = createContext<LangContextValue>({
  lang: "en",
  setLang: () => {},
  t: (k) => I18N.en[k],
})

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en")

  useEffect(() => {
    try {
      const saved = localStorage.getItem("crowdix_lang") as Lang | null
      if (saved === "en" || saved === "ar") setLangState(saved)
    } catch {}
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr"
    try { localStorage.setItem("crowdix_lang", lang) } catch {}
  }, [lang])

  const setLang = (l: Lang) => setLangState(l)
  const t = (key: Keys): string => (I18N[lang] as Record<string, string>)[key] ?? (I18N.en as Record<string, string>)[key] ?? key

  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>
}

export function useLang() {
  return useContext(LangContext)
}
