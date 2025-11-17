import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/90 pointer-events-none"/>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center py-24">
        <motion.div initial={{opacity:0, y: 20}} animate={{opacity:1, y:0}} transition={{duration:0.8}}>
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-600/10 text-indigo-700 text-xs font-semibold">Full‑Stack & AI Engineer</span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
            Building delightful products with code and intelligence
          </h1>
          <p className="mt-4 text-gray-700 text-lg leading-relaxed">
            I design, build, and deploy end‑to‑end systems — from pixel‑perfect frontends and scalable backends to ML models that ship value.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#projects" className="px-5 py-3 rounded-md bg-gray-900 text-white hover:bg-black transition">See my work</a>
            <a href="#contact" className="px-5 py-3 rounded-md bg-white/70 backdrop-blur border border-gray-200 hover:bg-white transition">Get in touch</a>
          </div>
        </motion.div>

        <motion.ul
          initial={{opacity:0, y: 20}}
          animate={{opacity:1, y:0}}
          transition={{delay:0.15, duration:0.8}}
          className="grid grid-cols-2 gap-4"
        >
          {[
            {k:'Frontend',v:'React, Next.js, Tailwind, Framer Motion'},
            {k:'Backend',v:'FastAPI, Node, PostgreSQL, MongoDB'},
            {k:'AI/ML',v:'PyTorch, Transformers, LangChain'},
            {k:'Cloud',v:'AWS, Docker, CI/CD'},
          ].map((s)=>(
            <li key={s.k} className="rounded-xl bg-white/70 backdrop-blur border border-gray-200 p-4">
              <p className="text-xs text-gray-500">{s.k}</p>
              <p className="text-sm font-medium text-gray-900 mt-1">{s.v}</p>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
