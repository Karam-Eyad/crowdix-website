"use client"

import { MeshGradient } from "@paper-design/shaders-react"

export function MeshGradientBg() {
  return (
    <MeshGradient
      className="fixed inset-0 w-full h-full"
      style={{ zIndex: -2 }}
      colors={["#0a0a0a", "#0d1520", "#1a2840", "#acc7ff"]}
      speed={0.8}
      backgroundColor="#0a0a0a"
    />
  )
}
