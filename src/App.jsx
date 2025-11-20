import Hero from './components/Hero'
import ParallaxSection from './components/Parallax'
import Gallery from './components/Gallery'
import About from './components/About'
import { useEffect, useRef } from 'react'

function App() {
  const glowRef = useRef(null)

  useEffect(() => {
    const glow = glowRef.current
    if (!glow) return
    const onMove = (e) => {
      const x = e.clientX
      const y = e.clientY
      glow.style.transform = `translate(${x - 150}px, ${y - 150}px)`
    }
    window.addEventListener('pointermove', onMove)
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-white selection:bg-emerald-300/50 selection:text-emerald-900 relative">
      {/* Cursor glow */}
      <div ref={glowRef} className="pointer-events-none fixed z-50 h-[300px] w-[300px] rounded-full bg-emerald-400/20 blur-3xl mix-blend-screen" />

      <Hero />
      <ParallaxSection />
      <Gallery />
      <About />

      {/* CTA strip */}
      <section className="relative py-16">
        <div className="absolute inset-0 bg-[radial-gradient(800px_200px_at_50%_50%,rgba(16,185,129,0.08),transparent)]" />
        <div className="relative mx-auto max-w-5xl px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 rounded-3xl border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.05] p-8 backdrop-blur-xl">
            <div>
              <h3 className="text-2xl font-bold tracking-tight">Let’s craft something unforgettable</h3>
              <p className="mt-2 text-black/70 dark:text-white/70">Available for select collaborations. Motion-forward. Results-obsessed.</p>
            </div>
            <a href="#" className="inline-flex items-center gap-2 rounded-2xl bg-emerald-500 px-6 py-3 text-black font-semibold shadow-[0_10px_30px_rgba(16,185,129,0.35)] hover:bg-emerald-400 transition">
              Start a project <span>→</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="pb-12 pt-6 text-center text-sm text-black/60 dark:text-white/60">
        <div className="mx-auto max-w-7xl px-6">
          Built with love, motion, and a dash of chaos.
        </div>
      </footer>
    </div>
  )
}

export default App
