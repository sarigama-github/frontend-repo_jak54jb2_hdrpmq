import { useMemo, useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

const IMAGES = [
  'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1527434007881-2d08f47f7c32?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1600&auto=format&fit=crop',
]

function TiltCard({ src, idx }) {
  const ref = useRef(null)

  const handleMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * -8
    const rotateY = ((x - centerX) / centerX) * 8
    el.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`
  }

  const reset = () => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)'
  }

  return (
    <motion.div
      ref={ref}
      className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl will-change-transform"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.06 }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
    >
      <img src={src} alt="portfolio" className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
        <div className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur">
          Hover me
        </div>
        <div className="rounded-full bg-emerald-500/90 px-3 py-1 text-xs text-black font-semibold">View</div>
      </div>
    </motion.div>
  )
}

function Gallery() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const rotate = useTransform(scrollYProgress, [0, 1], [-8, 8])
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [50, -50]), { stiffness: 120, damping: 20 })

  const rows = useMemo(() => {
    const half = Math.ceil(IMAGES.length / 2)
    return [IMAGES.slice(0, half), IMAGES.slice(half)]
  }, [])

  return (
    <section id="gallery" ref={ref} className="relative py-24">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(600px_circle_at_30%_20%,rgba(16,185,129,0.15),transparent_40%),radial-gradient(700px_circle_at_70%_70%,rgba(99,102,241,0.12),transparent_40%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">Interactive gallery</h2>
            <p className="mt-3 text-white/80 max-w-2xl">Hover, tilt, and glide. Cards respond to your cursor with 3D tilt and cinematic scaling.</p>
          </div>
          <div className="hidden md:block rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-white/80 backdrop-blur-md">Drag to scroll</div>
        </div>

        <motion.div style={{ rotate }} className="grid grid-cols-2 md:grid-cols-4 gap-4 will-change-transform" drag="x" dragConstraints={{ left: -200, right: 200 }}>
          {rows[0].map((src, i) => (
            <TiltCard key={src} src={src} idx={i} />
          ))}
          {rows[1].map((src, i) => (
            <TiltCard key={src} src={src} idx={i + rows[0].length} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Gallery
