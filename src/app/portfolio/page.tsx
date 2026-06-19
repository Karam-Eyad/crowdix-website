"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { useLang } from "@/lib/i18n"
import { HeroPill } from "@/components/ui/hero-pill"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { HeroGeometricBg } from "@/components/ui/hero-geometric-bg"

const PROJECTS = [
  {
    id: "dental",
    tag: "web",
    title: "Dental Landing Page",
    category: "Landing Pages",
    desc: "Dental clinic landing page with appointment booking form and WhatsApp integration.",
    status: "LIVE",
    statusStyle: { background: "rgba(34,197,94,0.12)", color: "#4ade80", border: "1px solid rgba(34,197,94,0.3)" },
    img: "/screenshots/dental_cover.png",
    wide: true,
    tags: ["#HTML", "#CSS", "#WhatsApp"],
    liveUrl: "https://dental-landing-page-rho.vercel.app",
    githubUrl: "https://github.com/Karam-Eyad/dental-landing-page",
  },
  {
    id: "carousel",
    tag: "ai",
    title: "Carousel Project",
    category: "AI Tools",
    desc: "AI-powered Instagram carousel generator — turns any news item or topic into a publish-ready carousel in seconds.",
    status: "LIVE",
    statusStyle: { background: "rgba(34,197,94,0.12)", color: "#4ade80", border: "1px solid rgba(34,197,94,0.3)" },
    img: "/screenshots/carousel.png",
    wide: false,
    tags: ["#HTML", "#CSS", "#AI"],
    liveUrl: "https://carousel-project-liard.vercel.app",
    githubUrl: "https://github.com/Karam-Eyad/carousel-project",
  },
  {
    id: "story-maker",
    tag: "ai",
    title: "Story Maker",
    category: "AI Tools",
    desc: "Arabic Instagram story generator (1080×1920) with Playbook identity — PNG export with correct Arabic text rendering.",
    status: "LIVE",
    statusStyle: { background: "rgba(34,197,94,0.12)", color: "#4ade80", border: "1px solid rgba(34,197,94,0.3)" },
    img: "/screenshots/story-maker.png",
    wide: false,
    tags: ["#HTML", "#CSS", "#Arabic"],
    liveUrl: "https://story-maker-olive.vercel.app",
    githubUrl: "https://github.com/Karam-Eyad/story-maker",
  },
  {
    id: "crowdix-site",
    tag: "web",
    title: "Crowdix Website",
    category: "Websites & Apps",
    desc: "Full-stack bilingual AI agency site built with Next.js 16, glassmorphism UI, and deployed on Vercel.",
    status: "LIVE",
    statusStyle: { background: "rgba(34,197,94,0.12)", color: "#4ade80", border: "1px solid rgba(34,197,94,0.3)" },
    img: "/screenshots/crowdix.png",
    wide: true,
    tags: ["#Next.js", "#Tailwind", "#AI"],
    liveUrl: "https://crowdix-website.vercel.app",
    githubUrl: "https://github.com/Karam-Eyad/crowdix-website",
  },
]

function ProjectCard({ p, onMouseMove }: { p: typeof PROJECTS[number]; onMouseMove: (e: React.MouseEvent<HTMLDivElement>) => void }) {
  const { t } = useLang()

  if (p.wide) {
    return (
      <div className="md:col-span-2 glass-card group overflow-hidden flex flex-col md:flex-row cursor-pointer"
        onMouseMove={onMouseMove}
        style={{ "--mouse-x": "50%", "--mouse-y": "50%" } as React.CSSProperties}>
        <div className="md:w-1/2 relative aspect-video md:aspect-auto overflow-hidden">
          <img src={p.img} alt={p.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-90 transition-all duration-500 grayscale group-hover:grayscale-0" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, transparent, rgba(6,8,14,0.7))" }} />
        </div>
        <div className="md:w-1/2 p-8 flex flex-col justify-center">
          <p className="text-xs uppercase tracking-widest font-mono mb-2" style={{ color: "var(--cx-accent)" }}>{p.category}</p>
          <h3 className="text-2xl font-bold text-white mb-3">{p.title}</h3>
          <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.55)" }}>{p.desc}</p>
          <div className="flex gap-2 flex-wrap mb-4">
            {p.tags?.map(tag => (
              <span key={tag} className="text-xs px-2 py-1 rounded font-mono"
                style={{ background: "var(--cx-accent-dim)", color: "var(--cx-accent)" }}>{tag}</span>
            ))}
          </div>
          <div className="flex gap-3 flex-wrap">
            {(p as any).liveUrl && (
              <a href={(p as any).liveUrl} target="_blank" rel="noopener"
                className="text-xs flex items-center gap-1 px-3 py-1.5 rounded-full font-mono transition-all hover:opacity-80"
                style={{ background: "rgba(34,197,94,0.12)", color: "#4ade80", border: "1px solid rgba(34,197,94,0.25)" }}>
                <span className="material-symbols-outlined" style={{ fontSize: 12 }}>open_in_new</span> Live
              </a>
            )}
            {(p as any).githubUrl && (
              <a href={(p as any).githubUrl} target="_blank" rel="noopener"
                className="text-xs flex items-center gap-1 px-3 py-1.5 rounded-full font-mono transition-all hover:opacity-80"
                style={{ background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.6)", border: "1px solid rgba(255,255,255,0.12)" }}>
                <span className="material-symbols-outlined" style={{ fontSize: 12 }}>code</span> GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="glass-card group overflow-hidden flex flex-col cursor-pointer"
      onMouseMove={onMouseMove}
      style={{ "--mouse-x": "50%", "--mouse-y": "50%" } as React.CSSProperties}>
      <div className="relative aspect-video overflow-hidden">
        {p.status && (
          <span className="absolute top-4 right-4 z-10 text-xs px-2.5 py-1 rounded-full font-mono backdrop-blur-md"
            style={p.statusStyle}>{p.status}</span>
        )}
        <img src={p.img} alt={p.title} className="w-full h-full object-cover opacity-50 group-hover:opacity-90 transition-all duration-500 grayscale group-hover:grayscale-0" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 40%, rgba(6,8,14,0.9))" }} />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <p className="text-xs uppercase tracking-widest font-mono mb-1" style={{ color: "var(--cx-accent)" }}>{p.category}</p>
        <h3 className="text-lg font-semibold text-white mb-2">{p.title}</h3>
        <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{p.desc}</p>
      </div>
    </div>
  )
}

export default function PortfolioPage() {
  const { t } = useLang()
  const [filter, setFilter] = useState("all")

  const filters = [
    { id: "all", label: t("filter_all") },
    { id: "web", label: t("filter_web") },
    { id: "ai",  label: t("filter_ai") },
  ]

  const visible = filter === "all" ? PROJECTS : PROJECTS.filter(p => p.tag === filter)

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = e.currentTarget as HTMLDivElement
    const rect = el.getBoundingClientRect()
    el.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`)
    el.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`)
  }

  return (
    <>
      {/* ── Hero ── */}
      <section className="hero-section relative min-h-[65vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        <HeroGeometricBg />
        <div className="relative z-10 max-w-4xl flex flex-col items-center space-y-6">
          <HeroPill tag={t("pg_port_pill")} animateIndex={1}>{t("pg_port_pill_sub")}</HeroPill>
          <h1 className="text-5xl md:text-[68px] font-bold text-white tracking-tight leading-tight" data-animate="2">
            {t("pg_port_h1_a")}{" "}
            <span className="italic" style={{ color: "var(--cx-accent-soft)" }}>{t("pg_port_h1_b")}</span>
          </h1>
          <p className="text-lg max-w-xl mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }} data-animate="3">
            {t("pg_port_sub")}
          </p>
        </div>
      </section>

      {/* ── Filter + Grid ── */}
      <ScrollReveal>
        <section className="pb-20 max-w-6xl mx-auto px-4 md:px-10">
          {/* Filter chips */}
          <div className="flex flex-wrap gap-3 mb-12">
            {filters.map(f => (
              <button key={f.id} onClick={() => setFilter(f.id)}
                className="px-4 py-2 rounded-full text-sm font-medium font-mono transition-all"
                style={filter === f.id
                  ? { background: "var(--cx-accent-dim)", color: "var(--cx-accent)", border: "1px solid rgba(79,142,247,0.4)" }
                  : { background: "transparent", color: "rgba(255,255,255,0.5)", border: "1px solid rgba(255,255,255,0.1)" }
                }>{f.label}</button>
            ))}
          </div>

          {/* Project cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visible.map(p => (
              <ProjectCard key={p.id} p={p} onMouseMove={handleMouseMove} />
            ))}
          </div>

          {/* Coming soon */}
          <div className="mt-12 text-center glass-card p-10">
            <h3 className="text-xl font-semibold text-white mb-3">More launching soon</h3>
            <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.5)" }}>
              We&apos;re publishing two new case studies this quarter — leave your email and we&apos;ll send them over.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-sm mx-auto">
              <input type="email" placeholder="your@email.com"
                className="flex-1 px-4 py-2.5 rounded-lg text-sm text-white placeholder:text-white/30 outline-none"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }} />
              <button className="btn-primary text-sm px-6 py-2.5" style={{ padding: "10px 24px" }}>Notify me</button>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </>
  )
}
