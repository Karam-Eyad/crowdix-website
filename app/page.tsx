import { MeshGradientBg } from "@/components/ui/mesh-gradient-bg"
import { BackgroundShaders } from "@/components/ui/background-paper-shaders"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Layer -2: MeshGradient base */}
      <MeshGradientBg />
      {/* Layer -1: ShaderPlane + EnergyRings */}
      <BackgroundShaders />
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs text-white/60 mb-8 font-mono">
          <span className="bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-full text-xs uppercase tracking-wider font-medium">NEW</span>
          Now building agents that ship code
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 leading-tight">
          We Build AI That <br />
          <span className="text-[#acc7ff] italic">Runs Your Business</span>
        </h1>
        <p className="text-lg text-white/60 max-w-2xl mb-10 leading-relaxed">
          Transforming complex operations into seamless autonomous systems. We architect, deploy, and scale enterprise-grade AI solutions for visionary companies.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://calendly.com/crowdix/intro"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#4F8EF7] hover:bg-[#6ba3f8] text-white font-semibold rounded-xl transition-all hover:-translate-y-0.5"
          >
            Book a Call
          </a>
          <button className="px-8 py-4 border border-white/15 text-white font-semibold rounded-xl hover:bg-white/5 transition-all">
            View Portfolio
          </button>
        </div>
      </div>
    </main>
  )
}
