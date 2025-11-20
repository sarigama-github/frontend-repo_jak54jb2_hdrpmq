import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

function ParallaxSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -300])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -450])

  useEffect(() => {}, [])

  return (
    <section ref={ref} className="relative py-32 overflow-hidden bg-gradient-to-b from-transparent to-black/30">
      <div className="absolute inset-0 -z-0">
        <motion.div style={{ y: y3 }} className="absolute -top-24 -left-10 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
        <motion.div style={{ y: y2 }} className="absolute top-10 right-10 h-96 w-96 rounded-full bg-sky-500/20 blur-3xl" />
        <motion.div style={{ y: y1 }} className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Parallax layers that breathe
            </h2>
            <p className="mt-6 text-white/80">
              Multiple depths glide at different speeds to create a cinematic scroll. Subtle, playful, never boring.
            </p>
          </motion.div>
          <motion.div initial={{ scale: 0.95, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative">
            <div className="aspect-video w-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">
              <div className="absolute inset-0 grid grid-cols-3">
                {[...Array(9)].map((_, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 * i }} className="border-white/5 border" />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ParallaxSection
