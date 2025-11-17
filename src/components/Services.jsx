import { motion } from 'framer-motion'
import { Sparkles, Workflow, Cpu } from 'lucide-react'

const services = [
  {
    icon: Sparkles,
    title: 'Product Engineering',
    desc: 'Design and build polished web apps with performance and accessibility baked in.'
  },
  {
    icon: Cpu,
    title: 'AI Systems',
    desc: 'Ship useful AI features: RAG, agents, fine-tuning, evaluation, and safety.'
  },
  {
    icon: Workflow,
    title: 'Architecture & Scale',
    desc: 'Cloud-native backends, observability, CI/CD, and cost-aware scaling.'
  },
]

export default function Services(){
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-3xl sm:text-4xl font-bold text-gray-900">
          What I offer
        </motion.h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {services.map(({icon:Icon,title,desc})=> (
            <motion.div key={title} initial={{opacity:0, y:12}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5}} className="rounded-2xl border bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-md bg-indigo-600/10 text-indigo-700"><Icon className="h-5 w-5"/></div>
                <h3 className="font-semibold text-gray-900">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-gray-600">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
