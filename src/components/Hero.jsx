import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import ThemeToggle from './ThemeToggle'

function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for depth */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent dark:from-black/70"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 pb-16">
        <div className="flex items-start justify-between gap-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Live • Interactive Portfolio
            </div>
            <h1 className="mt-6 text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
              Build a portfolio like never before
            </h1>
            <p className="mt-6 text-lg text-white/80">
              Extreme animations. Playful interactions. Zero boredom. A kinetic personal site that feels alive, with parallax layers, 3D touches, and an immersive gallery.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#gallery" className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-5 py-3 text-white/90 backdrop-blur-md transition hover:scale-[1.02] hover:bg-white/20">
                Explore the Gallery
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a href="#about" className="inline-flex items-center gap-2 rounded-xl bg-emerald-500/90 px-5 py-3 text-black font-semibold shadow-[0_10px_30px_rgba(16,185,129,0.35)] hover:bg-emerald-400 transition">
                About Me
              </a>
            </div>
          </motion.div>

          <ThemeToggle />
        </div>

        {/* Parallax floating chips */}
        <div className="pointer-events-none relative mt-20">
          <motion.div initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="absolute left-0 top-0">
            <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-2 text-white/80 backdrop-blur-md rotate-[-2deg]">Design Systems</div>
          </motion.div>
          <motion.div initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.35 }} className="absolute left-1/2 top-10 -translate-x-1/2">
            <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-2 text-white/80 backdrop-blur-md rotate-[2deg]">Creative Code</div>
          </motion.div>
          <motion.div initial={{ y: 40, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.5 }} className="absolute right-0 top-0">
            <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-2 text-white/80 backdrop-blur-md rotate-[-3deg]">3D & Motion</div>
          </motion.div>
          <div className="h-24" />
        </div>
      </div>
    </section>
  )
}

export default Hero
