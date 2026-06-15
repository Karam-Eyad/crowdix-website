"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useLang } from "@/lib/i18n"

const CALENDLY = "https://calendly.com/crowdix/intro"

export function Navbar() {
  const { t, lang, setLang } = useLang()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const links = [
    { href: "/",          key: "nav_home" as const },
    { href: "/services",  key: "nav_services" as const },
    { href: "/portfolio", key: "nav_portfolio" as const },
    { href: "/about",     key: "nav_about" as const },
  ]

  return (
    <>
      <nav className={`cx-nav${scrolled ? " cx-nav--scrolled" : ""}`}>
        <div className="cx-nav-grid">
          {/* Left — Logo */}
          <div className="cx-nav-left">
            <Link href="/" className="brand">
              <Image
                src="/crowdix-navbar-icon.png"
                alt="Crowdix"
                width={42}
                height={42}
                className="brand-logo"
                style={{ height: 42, width: 42, objectFit: "contain", display: "block" }}
                priority
              />
              <span className="brand-status">
                <span className="dot" />
                <span>{t("status")}</span>
              </span>
            </Link>
          </div>

          {/* Center — Nav links */}
          <div className="cx-nav-center">
            {links.map(({ href, key }) => (
              <Link
                key={href}
                href={href}
                className={pathname === href ? "active" : ""}
                onClick={() => setOpen(false)}
              >
                {t(key)}
              </Link>
            ))}
          </div>

          {/* Right — Lang toggle + CTA + Burger */}
          <div className="cx-nav-right">
            <div className="lang-toggle" role="group">
              <button className={lang === "en" ? "active" : ""} onClick={() => setLang("en")}>EN</button>
              <button className={lang === "ar" ? "active" : ""} onClick={() => setLang("ar")}>AR</button>
            </div>
            <a className="cx-nav-cta" href={CALENDLY} target="_blank" rel="noopener">
              <span style={{ fontSize: 10, color: "#4F8EF7" }}>✦</span>
              {t("nav_book")}
            </a>
            <button className="burger" aria-label="Menu" onClick={() => setOpen(!open)}>
              <svg viewBox="0 0 16 16" fill="none" strokeWidth="1.5">
                <path d="M2 4h12M2 8h12M2 12h12" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`mobile-drawer${open ? " open" : ""}`}>
        {links.map(({ href, key }) => (
          <Link key={href} href={href} onClick={() => setOpen(false)}>
            {t(key)}
          </Link>
        ))}
        <a className="cx-nav-cta" href={CALENDLY} target="_blank" rel="noopener" onClick={() => setOpen(false)}>
          {t("nav_book")}
        </a>
      </div>
    </>
  )
}
