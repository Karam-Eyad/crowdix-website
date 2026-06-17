"use client"

import Link from "next/link"
import { useLang } from "@/lib/i18n"
import { HeroPill } from "@/components/ui/hero-pill"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { HeroGeometricBg } from "@/components/ui/hero-geometric-bg"

const CALENDLY = "https://calendly.com/crowdix/intro"

const FEATURED_PROJECTS = [
  {
    id: "dental",
    title: "Dental Landing Page",
    category: "Landing Pages",
    desc: "Dental clinic landing page with appointment booking form and WhatsApp integration.",
    img: "/screenshots/dental.png",
    badge: null as string | null,
  },
  {
    id: "carousel",
    title: "Carousel Project",
    category: "AI Tools",
    desc: "AI-powered Instagram carousel generator — turns any topic into a publish-ready carousel in seconds.",
    img: "/screenshots/carousel.png",
    badge: null as string | null,
  },
  {
    id: "story-maker",
    title: "Story Maker",
    category: "AI Tools",
    desc: "Arabic Instagram story generator with correct RTL text rendering and PNG export.",
    img: "/screenshots/story-maker.png",
    badge: null as string | null,
  },
]

export default function Home() {
  const { t } = useLang()

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        <HeroGeometricBg />
        <div className="relative z-10 max-w-4xl flex flex-col items-center space-y-6">
          <HeroPill tag={t("hero_pill")} animateIndex={1}>{t("hero_pill_text")}</HeroPill>
          <h1 className="text-5xl md:text-[72px] font-bold text-white tracking-tight leading-tight" data-animate="2">
            {t("hero_h1_a")}{" "}
            <br className="hidden md:block" />
            <span className="italic" style={{ color: "var(--cx-accent-soft)" }}>{t("hero_h1_b")}</span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }} data-animate="3">
            {t("hero_sub")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4" data-animate="4">
            <a href={CALENDLY} target="_blank" rel="noopener" className="btn-primary">
              {t("hero_cta")}
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
            </a>
            <Link href="/services" className="btn-outline">{t("hero_cta_alt")}</Link>
          </div>
        </div>
      </section>

      {/* ── Services Bento ── */}
      <ScrollReveal>
        <section className="py-20 max-w-6xl mx-auto px-4 md:px-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-widest font-mono" style={{ color: "var(--cx-accent)" }}>{t("svc_label")}</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">{t("svc_h")}</h2>
              <p className="text-base max-w-lg" style={{ color: "rgba(255,255,255,0.5)" }}>{t("svc_p")}</p>
            </div>
            <Link href="/services" className="text-sm flex items-center gap-1 hover:underline transition-all" style={{ color: "var(--cx-accent)" }}>
              {t("learn")} <span className="material-symbols-outlined" style={{ fontSize: 16 }}>north_east</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8 glass-card p-8 relative overflow-hidden group">
              <div className="relative z-10">
                <span className="material-symbols-outlined text-2xl mb-5 block" style={{ color: "var(--cx-accent)" }}>settings_suggest</span>
                <h3 className="text-xl font-semibold text-white mb-2">{t("svc1_t")}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{t("svc1_p")}</p>
              </div>
              <div className="absolute bottom-[-10%] right-[-5%] opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none select-none">
                <span className="material-symbols-outlined" style={{ fontSize: 180, color: "var(--cx-accent)" }}>hub</span>
              </div>
            </div>
            {[
              { span: 4, icon: "smart_toy",    tk: "svc2_t", pk: "svc2_p" },
              { span: 4, icon: "terminal",     tk: "svc3_t", pk: "svc3_p" },
              { span: 4, icon: "auto_awesome", tk: "svc4_t", pk: "svc4_p" },
              { span: 4, icon: "palette",      tk: "svc5_t", pk: "svc5_p" },
            ].map(({ span, icon, tk, pk }) => (
              <div key={icon} className={`md:col-span-${span} glass-card p-8 group`}>
                <span className="material-symbols-outlined text-2xl mb-5 block" style={{ color: "var(--cx-accent)" }}>{icon}</span>
                <h3 className="text-xl font-semibold text-white mb-2">{t(tk as any)}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{t(pk as any)}</p>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* ── Featured Work ── */}
      <ScrollReveal>
        <section className="py-20 max-w-6xl mx-auto px-4 md:px-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-widest font-mono" style={{ color: "var(--cx-accent)" }}>{t("feat_label")}</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                {t("pg_port_h1_a")}{" "}
                <span className="italic" style={{ color: "var(--cx-accent-soft)" }}>{t("pg_port_h1_b")}</span>
              </h2>
              <p className="text-base max-w-lg" style={{ color: "rgba(255,255,255,0.5)" }}>{t("feat_p")}</p>
            </div>
            <Link href="/portfolio" className="text-sm flex items-center gap-1 hover:underline transition-all shrink-0" style={{ color: "var(--cx-accent)" }}>
              {t("feat_all")} <span className="material-symbols-outlined" style={{ fontSize: 16 }}>north_east</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FEATURED_PROJECTS.map(p => (
              <Link key={p.id} href="/portfolio" className="glass-card group overflow-hidden flex flex-col cursor-pointer" style={{ textDecoration: "none" }}>
                <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
                  <img src={p.img} alt={p.title}
                    className="w-full h-full object-cover opacity-50 group-hover:opacity-90 transition-all duration-500 grayscale group-hover:grayscale-0" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 40%, rgba(6,8,14,0.9))" }} />
                  {p.badge && (
                    <span className="absolute top-4 right-4 text-xs px-2.5 py-1 rounded-full font-mono backdrop-blur-md"
                      style={{ background: "rgba(79,142,247,0.15)", color: "var(--cx-accent)", border: "1px solid rgba(79,142,247,0.3)" }}>
                      {p.badge}
                    </span>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-xs uppercase tracking-widest font-mono mb-1" style={{ color: "var(--cx-accent)" }}>{p.category}</p>
                  <h3 className="text-lg font-semibold text-white mb-2">{p.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{p.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* ── Why Crowdix ── */}
      <ScrollReveal>
        <section className="py-20 px-4 md:px-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-xs uppercase tracking-widest font-mono mb-3" style={{ color: "var(--cx-accent)" }}>{t("why_label")}</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t("why_h")}</h2>
              <p style={{ color: "rgba(255,255,255,0.5)" }}>{t("why_p")}</p>
              <div className="h-0.5 w-20 mx-auto mt-6 rounded-full" style={{ background: "var(--cx-accent)" }} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { icon: "bolt",      tk: "why1_t", pk: "why1_p" },
                { icon: "neurology", tk: "why2_t", pk: "why2_p" },
                { icon: "verified",  tk: "why3_t", pk: "why3_p" },
              ].map(({ icon, tk, pk }) => (
                <div key={icon} className="flex flex-col items-center text-center space-y-4">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center"
                    style={{
                      background: "rgba(255,255,255,0.07)",
                      backdropFilter: "blur(40px) saturate(180%)",
                      WebkitBackdropFilter: "blur(40px) saturate(180%)",
                      border: "1px solid rgba(255,255,255,0.14)",
                      boxShadow: "0 1px 0 rgba(255,255,255,0.18) inset, 0 4px 24px rgba(0,0,0,0.3)",
                    }}>
                    <span className="material-symbols-outlined text-3xl" style={{ color: "var(--cx-accent)" }}>{icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">{t(tk as any)}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{t(pk as any)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── Final CTA ── */}
      <ScrollReveal>
        <section className="py-20 px-4 md:px-10 mb-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="glass-card p-12 md:p-20" style={{ borderColor: "rgba(79,142,247,0.18)" }}>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 whitespace-pre-line">{t("cta_h")}</h2>
              <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.6)" }}>{t("cta_p")}</p>
              <a href={CALENDLY} target="_blank" rel="noopener" className="btn-primary text-base">
                {t("cta_btn")}
              </a>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </>
  )
}
