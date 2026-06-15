"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { useLang } from "@/lib/i18n"
import { HeroPill } from "@/components/ui/hero-pill"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { HeroGeometricBg } from "@/components/ui/hero-geometric-bg"

const CALENDLY = "https://calendly.com/crowdix/intro"

export default function AboutPage() {
  const { t } = useLang()
  const logoRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const logo = logoRef.current
    if (!logo) return
    const id = setInterval(() => {
      if (Math.random() > 0.98) {
        logo.style.opacity = "0.5"
        setTimeout(() => { logo.style.opacity = "1" }, 50)
      }
    }, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <>
      {/* ── Hero ── */}
      <section className="hero-section relative min-h-[80vh] flex flex-col items-center justify-start pt-[13vh] text-center px-4 overflow-hidden">
        <HeroGeometricBg />
        <div className="relative z-10 max-w-4xl flex flex-col items-center space-y-6">
          <HeroPill tag={t("pg_about_pill")} animateIndex={1}>{t("pg_about_pill_sub")}</HeroPill>
          <h1 className="text-5xl md:text-[64px] font-bold text-white tracking-tight leading-tight" data-animate="2">
            {t("pg_about_h1_a")}{" "}
            <br className="hidden md:block" />
            <span className="italic" style={{ color: "var(--cx-accent-soft)" }}>{t("pg_about_h1_b")}</span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }} data-animate="3">
            {t("pg_about_sub")}
          </p>
        </div>
        {/* Large hero image */}
        <div className="relative z-10 w-full max-w-5xl mx-auto mt-12 rounded-2xl overflow-hidden group" data-animate="4"
          style={{ border: "1px solid rgba(79,142,247,0.1)" }}>
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80"
            alt="Crowdix team"
            className="w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            style={{ height: 400 }}
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 50%, rgba(10,10,10,0.8))" }} />
        </div>
      </section>

      {/* ── Story / Mission ── */}
      <ScrollReveal>
        <section className="py-20 max-w-6xl mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-widest font-mono" style={{ color: "var(--cx-accent)" }}>{t("story_label")}</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">{t("story_h")}</h2>
              <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}
                dangerouslySetInnerHTML={{ __html: t("story_p1") }} />
              <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}
                dangerouslySetInnerHTML={{ __html: t("story_p2") }} />
              <div className="grid grid-cols-2 gap-4 pt-4">
                {([["stat1_v","stat1_l"],["stat2_v","stat2_l"]] as const).map(([vk,lk]) => (
                  <div key={vk} className="glass-card p-5 text-center">
                    <p className="text-3xl font-bold mb-1" style={{ color: "var(--cx-accent-soft)" }}>{t(vk)}</p>
                    <p className="text-xs font-mono" style={{ color: "rgba(255,255,255,0.5)" }}>{t(lk)}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Image grid */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { src: "photo-1498050108023-c5249f4df085", h: "h-64" },
                { src: "photo-1461749280684-dccba630e2f6", h: "h-48" },
                { src: "photo-1555949963-aa79dcee981c", h: "h-48" },
                { src: "photo-1504639725590-34d0984388bd", h: "h-64" },
              ].map(({ src, h }) => (
                <div key={src} className={`${h} rounded-xl overflow-hidden`}>
                  <img src={`https://images.unsplash.com/${src}?w=400&q=80`} alt=""
                    className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── Core Values Bento ── */}
      <ScrollReveal>
        <section className="py-20 max-w-6xl mx-auto px-4 md:px-10">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-widest font-mono mb-3" style={{ color: "var(--cx-accent)" }}>{t("values_label")}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">{t("values_h")}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Precision — wide */}
            <div className="md:col-span-8 glass-card p-8 group relative overflow-hidden">
              <span className="material-symbols-outlined text-2xl mb-5 block" style={{ color: "var(--cx-accent)" }}>psychology</span>
              <h3 className="text-xl font-semibold text-white mb-2">{t("val1_t")}</h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.55)" }}>{t("val1_p")}</p>
              <div className="flex gap-2">
                {["RAG","Fine-Tuning"].map(tag => (
                  <span key={tag} className="text-xs px-3 py-1 rounded font-mono"
                    style={{ background: "var(--cx-accent-dim)", color: "var(--cx-accent)", border: "1px solid rgba(79,142,247,0.2)" }}>{tag}</span>
                ))}
              </div>
              <div className="absolute bottom-[-10%] right-[-5%] opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
                <span className="material-symbols-outlined" style={{ fontSize: 160, color: "var(--cx-accent)" }}>auto_awesome</span>
              </div>
            </div>
            {/* Ethical */}
            <div className="md:col-span-4 glass-card p-8 group">
              <span className="material-symbols-outlined text-2xl mb-5 block" style={{ color: "var(--cx-accent)" }}>security</span>
              <h3 className="text-xl font-semibold text-white mb-2">{t("val2_t")}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>{t("val2_p")}</p>
            </div>
            {/* Dev-First */}
            <div className="md:col-span-4 glass-card p-8 group">
              <span className="material-symbols-outlined text-2xl mb-5 block" style={{ color: "var(--cx-accent)" }}>terminal</span>
              <h3 className="text-xl font-semibold text-white mb-2">{t("val3_t")}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>{t("val3_p")}</p>
            </div>
            {/* Future-Proof — wide, with logo */}
            <div className="md:col-span-8 glass-card p-8 group flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <span className="material-symbols-outlined text-2xl mb-5 block" style={{ color: "var(--cx-accent)" }}>rocket_launch</span>
                <h3 className="text-xl font-semibold text-white mb-2">{t("val4_t")}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>{t("val4_p")}</p>
              </div>
              <div className="w-24 h-24 rounded-2xl flex items-center justify-center shrink-0"
                style={{ background: "rgba(79,142,247,0.08)", border: "1px solid rgba(79,142,247,0.15)" }}>
                <img ref={logoRef} src="/crowdix-icon-new.png" alt="Crowdix"
                  style={{ width: 48, height: 48, transition: "opacity 0.05s" }} />
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── Founder ── */}
      <ScrollReveal>
        <section className="py-20 max-w-6xl mx-auto px-4 md:px-10">
          <div className="glass-card overflow-hidden grid grid-cols-1 md:grid-cols-2">
            {/* Portrait */}
            <div className="relative min-h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
                alt={t("founder_name")}
                className="w-full h-full object-cover object-top"
                style={{ minHeight: 400 }}
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(6,8,14,0.95) 0%, transparent 60%)" }} />
              <div className="absolute bottom-6 left-6">
                <p className="text-xs font-mono mb-1" style={{ color: "var(--cx-accent)" }}>{t("founder_role")}</p>
                <p className="text-xl font-bold text-white">{t("founder_name")}</p>
              </div>
            </div>
            {/* Quote + bio */}
            <div className="p-8 md:p-12 flex flex-col justify-center space-y-6">
              <span className="material-symbols-outlined text-5xl" style={{ color: "var(--cx-accent-dim)" }}>format_quote</span>
              <blockquote className="text-xl font-medium italic leading-relaxed" style={{ color: "rgba(255,255,255,0.9)" }}>
                &ldquo;{t("founder_q")}&rdquo;
              </blockquote>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>{t("founder_p")}</p>
              <div className="flex gap-3 pt-2">
                <a href={CALENDLY} target="_blank" rel="noopener" className="btn-primary text-sm" style={{ padding: "10px 20px" }}>
                  {t("founder_book")}
                </a>
                <a href={`mailto:crowdiix@gmail.com`} className="btn-outline text-sm" style={{ padding: "10px 20px" }}>
                  Email
                </a>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── CTA ── */}
      <ScrollReveal>
        <section className="py-20 px-4 md:px-10 mb-8">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-12 md:p-16 text-center relative overflow-hidden">
              {/* gradient top border */}
              <div className="absolute top-0 left-0 right-0 h-px"
                style={{ background: "linear-gradient(to right, transparent, var(--cx-accent), transparent)" }} />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                {t("about_cta_h")}{" "}
                <span className="italic" style={{ color: "var(--cx-accent-soft)" }}>{t("about_cta_h2")}</span>
              </h2>
              <p className="text-base mb-8 max-w-xl mx-auto mt-4" style={{ color: "rgba(255,255,255,0.6)" }}>{t("about_cta_p")}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={CALENDLY} target="_blank" rel="noopener" className="btn-primary">{t("about_cta_btn1")}</a>
                <Link href="/portfolio" className="btn-outline">{t("about_cta_btn2")}</Link>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </>
  )
}
