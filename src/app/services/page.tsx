"use client"

import Link from "next/link"
import { useLang } from "@/lib/i18n"
import { HeroPill } from "@/components/ui/hero-pill"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { HeroGeometricBg } from "@/components/ui/hero-geometric-bg"

const CALENDLY = "https://calendly.com/crowdix/intro"

function Check() {
  return <span className="material-symbols-outlined text-base" style={{ color: "var(--cx-accent)" }}>check_circle</span>
}

export default function ServicesPage() {
  const { t } = useLang()

  return (
    <>
      {/* ── Hero ── */}
      <section className="hero-section relative min-h-[80vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        <HeroGeometricBg />
        <div className="relative z-10 max-w-4xl flex flex-col items-center space-y-6">
          <HeroPill tag={t("pg_svc_pill")} animateIndex={1}>{t("pg_svc_pill_sub")}</HeroPill>
          <h1 className="text-5xl md:text-[68px] font-bold text-white tracking-tight leading-tight" data-animate="2">
            {t("pg_svc_h1_a")}{" "}
            <br className="hidden md:block" />
            <span className="italic" style={{ color: "var(--cx-accent-soft)" }}>{t("pg_svc_h1_b")}</span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }} data-animate="3">
            {t("pg_svc_sub")}
          </p>
        </div>
      </section>

      {/* ── Services Bento ── */}
      <ScrollReveal>
        <section className="pb-20 max-w-6xl mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

            {/* Automation — col 7 */}
            <div className="md:col-span-7 glass-card p-8 group relative overflow-hidden">
              <span className="material-symbols-outlined text-2xl mb-5 block" style={{ color: "var(--cx-accent)" }}>settings_input_component</span>
              <h3 className="text-xl font-semibold text-white mb-3">{t("svc_bento1_t")}</h3>
              <ul className="space-y-2 text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
                {(["svc_bento1_b1","svc_bento1_b2","svc_bento1_b3"] as const).map(k => (
                  <li key={k} className="flex items-center gap-2"><Check />{t(k)}</li>
                ))}
              </ul>
              <div className="absolute bottom-0 right-0 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none select-none">
                <span className="material-symbols-outlined" style={{ fontSize: 160, color: "var(--cx-accent)" }}>settings_suggest</span>
              </div>
            </div>

            {/* AI Agents — col 5 */}
            <div className="md:col-span-5 glass-card p-8 group">
              <span className="material-symbols-outlined text-2xl mb-5 block" style={{ color: "var(--cx-accent)" }}>smart_toy</span>
              <h3 className="text-xl font-semibold text-white mb-3">{t("svc_bento2_t")}</h3>
              <ul className="space-y-2 text-sm mb-6" style={{ color: "rgba(255,255,255,0.55)" }}>
                {(["svc_bento2_b1","svc_bento2_b2","svc_bento2_b3"] as const).map(k => (
                  <li key={k} className="flex items-center gap-2"><Check />{t(k)}</li>
                ))}
              </ul>
              {/* Avatar stack */}
              <div className="flex items-center gap-3 mt-auto">
                <div className="flex -space-x-2">
                  {["4F8EF7","6ba3f8","acc7ff"].map((c,i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-[#111] flex items-center justify-center text-xs font-bold"
                      style={{ background: `#${c}`, color: "#000" }}>{String.fromCharCode(65+i)}</div>
                  ))}
                </div>
                <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>Powered by GPT-4 & Llama 3</p>
              </div>
            </div>

            {/* Websites / Content / Design — 4+4+4 */}
            {[
              { icon: "terminal",     bk: ["svc_bento3_b1","svc_bento3_b2","svc_bento3_b3"], tk: "svc_bento3_t" },
              { icon: "auto_awesome", bk: ["svc_bento4_b1","svc_bento4_b2","svc_bento4_b3"], tk: "svc_bento4_t" },
              { icon: "palette",      bk: ["svc_bento5_b1","svc_bento5_b2","svc_bento5_b3"], tk: "svc_bento5_t" },
            ].map(({ icon, bk, tk }) => (
              <div key={icon} className="md:col-span-4 glass-card p-8 group">
                <span className="material-symbols-outlined text-2xl mb-5 block" style={{ color: "var(--cx-accent)" }}>{icon}</span>
                <h3 className="text-xl font-semibold text-white mb-3">{t(tk as any)}</h3>
                <ul className="space-y-2 text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
                  {bk.map(k => <li key={k} className="flex items-start gap-2">
                    <span className="mt-0.5 shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: "var(--cx-accent)", marginTop: 6 }} />
                    {t(k as any)}
                  </li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* ── Dev-First Feature section ── */}
      <ScrollReveal>
        <section className="py-20 px-4 md:px-10" style={{ background: "rgba(6,8,14,0.4)" }}>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">{t("svc_devfirst_h")}</h2>
              <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>{t("svc_devfirst_p")}</p>
              <div className="flex flex-wrap gap-3">
                {(["svc_feat1","svc_feat2"] as const).map((k,i) => (
                  <div key={k} className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium"
                    style={{ background: "var(--cx-accent-dim)", border: "1px solid rgba(79,142,247,0.2)", color: "var(--cx-accent)" }}>
                    <span className="material-symbols-outlined text-base">{i===0?"speed":"security"}</span>
                    {t(k)}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative group">
              <div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden"
                style={{ border: "1px solid rgba(79,142,247,0.15)" }}>
                <img
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80"
                  alt="Developer workspace"
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity grayscale group-hover:grayscale-0"
                />
              </div>
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                style={{ boxShadow: "0 0 40px rgba(79,142,247,0.2)" }} />
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── CTA ── */}
      <ScrollReveal>
        <section className="py-20 px-4 md:px-10 mb-8">
          <div className="max-w-4xl mx-auto text-center glass-card p-12 md:p-16" style={{ borderColor: "rgba(79,142,247,0.18)" }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t("svc_cta_h")}</h2>
            <p className="text-base mb-10 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.6)" }}>{t("svc_cta_p")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={CALENDLY} target="_blank" rel="noopener" className="btn-primary">{t("svc_cta_btn1")}</a>
              <button className="btn-outline">{t("svc_cta_btn2")}</button>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </>
  )
}
