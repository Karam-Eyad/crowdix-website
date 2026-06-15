"use client"

import Image from "next/image"
import Link from "next/link"
import { useLang } from "@/lib/i18n"

const CALENDLY = "https://calendly.com/crowdix/intro"

export function Footer() {
  const { t } = useLang()
  return (
    <footer className="cx-footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div>
            <Image src="/crowdix-logo-new.png" alt="Crowdix" width={220} height={55}
              style={{ height: 55, width: 220 }} />
            <p className="footer-desc">{t("foot_desc")}</p>
          </div>
          <div className="footer-col">
            <h4>{t("foot_explore")}</h4>
            <ul>
              <li><Link href="/">{t("nav_home")}</Link></li>
              <li><Link href="/services">{t("nav_services")}</Link></li>
              <li><Link href="/portfolio">{t("nav_portfolio")}</Link></li>
              <li><Link href="/about">{t("nav_about")}</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>{t("foot_contact")}</h4>
            <ul>
              <li><a href={`mailto:${t("foot_email")}`}>{t("foot_email")}</a></li>
              <li><a href={CALENDLY} target="_blank" rel="noopener">{t("foot_calendar")}</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>{t("foot_status")}</h4>
            <ul>
              <li>
                <a href="#">
                  <span style={{ color: "#4F8EF7" }}>●</span> {t("foot_status_v")}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>{t("foot_rights")}</span>
          <span>
            <a href="#">{t("foot_priv")}</a>
            &nbsp;·&nbsp;
            <a href="#">{t("foot_terms")}</a>
          </span>
        </div>
      </div>
    </footer>
  )
}
