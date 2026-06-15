import type { Metadata } from "next"
import { Geist, Geist_Mono, IBM_Plex_Sans_Arabic } from "next/font/google"
import "./globals.css"
import { LangProvider } from "@/lib/i18n"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

import { PageTransition } from "@/components/ui/page-transition"

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] })
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] })
const ibmArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: { default: "Crowdix — AI That Runs Your Business", template: "%s | Crowdix" },
  description: "Crowdix designs, deploys and operates production-grade AI systems — agents, automations, websites and content.",
  openGraph: {
    siteName: "Crowdix",
    type: "website",
    locale: "en_US",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${ibmArabic.variable} h-full antialiased dark`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <LangProvider>

          <Navbar />
          <main className="flex-1">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </LangProvider>
      </body>
    </html>
  )
}
