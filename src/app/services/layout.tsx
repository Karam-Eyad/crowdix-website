import type { Metadata } from "next"
export const metadata: Metadata = {
  title: "Services",
  description: "Five AI practices, one engineering bench — automation systems, AI agents, websites, content, and design.",
  openGraph: { title: "Crowdix — Services", description: "End-to-end AI department, on demand." },
}
export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
