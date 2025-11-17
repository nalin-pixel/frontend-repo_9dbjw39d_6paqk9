import { motion } from 'framer-motion'

const projects = [
  {
    title: 'AI Documentation Copilot',
    desc: 'RAG-powered assistant that indexes product docs and answers with citations.',
    tags: ['Next.js', 'FastAPI', 'Pinecone', 'OpenAI'],
    link: '#'
  },
  {
    title: 'Realtime Chat + Analytics',
    desc: 'Websocket chat with dashboards and event streaming.',
    tags: ['React', 'Node', 'Postgres', 'Redis'],
    link: '#'
  },
  {
    title: 'Vision QA for Support',
    desc: 'Image understanding pipeline with fine-tuned LLM scoring.',
    tags: ['PyTorch', 'Transformers', 'FastAPI'],
    link: '#'
  },
]

export default function Projects(){
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-3xl sm:text-4xl font-bold text-gray-900">
          Selected work
        </motion.h2>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i)=> (
            <motion.a key={p.title} href={p.link} target="_blank" rel="noreferrer" initial={{opacity:0, y:16}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5, delay:i*0.05}} className="group rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-video rounded-xl bg-gradient-to-br from-indigo-100 to-slate-100 mb-4"/>
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-700 transition-colors">{p.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-700">{t}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
