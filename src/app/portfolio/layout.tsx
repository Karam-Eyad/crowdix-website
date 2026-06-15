import type { Metadata } from "next"
export const metadata: Metadata = {
  title: "Portfolio",
  description: "Selected work by Crowdix — NLP pipelines, predictive analytics, computer vision, and custom LLMs.",
  openGraph: { title: "Crowdix — Portfolio", description: "Engineered excellence. Systems built with computational precision." },
}
export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
