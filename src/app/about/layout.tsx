import type { Metadata } from "next"
export const metadata: Metadata = {
  title: "About",
  description: "Crowdix was founded in 2024 — a boutique AI agency building production systems for teams that want to move faster.",
  openGraph: { title: "Crowdix — About", description: "Built by operators who got tired of demos." },
}
export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
