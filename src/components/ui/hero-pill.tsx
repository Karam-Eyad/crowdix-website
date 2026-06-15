interface HeroPillProps {
  tag: string
  children: React.ReactNode
  animateIndex?: number
}

export function HeroPill({ tag, children, animateIndex = 1 }: HeroPillProps) {
  return (
    <div className="hero-pill" data-animate={String(animateIndex)}>
      <span className="tag">{tag}</span>
      <span>{children}</span>
    </div>
  )
}
