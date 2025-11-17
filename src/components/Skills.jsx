import { motion } from 'framer-motion'
import { Code2, Brain, Server, Boxes } from 'lucide-react'

const skills = [
  { icon: Code2, title: 'Frontend', items: ['React', 'Next.js', 'Vite', 'Tailwind', 'Framer Motion'] },
  { icon: Server, title: 'Backend', items: ['FastAPI', 'Node', 'Postgres', 'MongoDB', 'GraphQL/REST'] },
  { icon: Brain, title: 'AI/ML', items: ['Transformers', 'RAG', 'LangChain', 'Vector DBs', 'OpenAI'] },
  { icon: Boxes, title: 'DevOps', items: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Observability'] },
]

export default function Skills(){
  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-3xl sm:text-4xl font-bold text-gray-900">
          Skills at a glance
        </motion.h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map(({icon:Icon,title,items})=> (
            <motion.div key={title} initial={{opacity:0, y:12}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5}} className="rounded-2xl border bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-md bg-indigo-600/10 text-indigo-700"><Icon className="h-5 w-5"/></div>
                <h3 className="font-semibold text-gray-900">{title}</h3>
              </div>
              <ul className="mt-4 space-y-1 text-sm text-gray-600">
                {items.map(i=> <li key={i}>• {i}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
