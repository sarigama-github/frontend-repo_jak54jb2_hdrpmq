import { motion } from 'framer-motion'

function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(400px_200px_at_20%_20%,rgba(255,255,255,0.08),transparent),radial-gradient(400px_200px_at_80%_80%,rgba(255,255,255,0.06),transparent)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="md:col-span-2">
            <h2 className="text-4xl font-bold text-white tracking-tight">About the creator</h2>
            <p className="mt-6 text-white/80 max-w-2xl">
              I craft expressive interfaces and kinetic brand experiences. My focus is on blending 3D, motion, and delightful micro-interactions to tell your story.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {[
                ['Expertise', 'WebGL · Framer Motion · React · Design Systems'],
                ['Approach', 'Playful, detail-obsessed, and outcome-driven'],
                ['Availability', 'Open for select collaborations'],
                ['Location', 'Remote-first, timezone-flexible'],
              ].map(([title, desc]) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                  <div className="text-sm text-white/60">{title}</div>
                  <div className="mt-1 text-white">{desc}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="sticky top-24">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="text-sm text-white/60">Contact</div>
              <a href="mailto:hello@portfolio.dev" className="mt-1 block text-xl font-semibold text-white hover:underline">hello@portfolio.dev</a>
              <div className="mt-4 flex gap-3">
                {['Twitter','GitHub','LinkedIn'].map(s => (
                  <a key={s} href="#" className="rounded-xl border border-white/10 bg-white/10 px-3 py-1 text-white/80 hover:bg-white/20">{s}</a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
