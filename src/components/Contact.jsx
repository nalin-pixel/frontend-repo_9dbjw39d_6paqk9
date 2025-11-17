import { useState } from 'react'

export default function Contact(){
  const [status, setStatus] = useState(null)

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      if(res.ok){
        setStatus('Message sent! I will get back to you shortly.')
        e.currentTarget.reset()
      }else{
        setStatus(data.detail || 'Something went wrong.')
      }
    } catch (err){
      setStatus(err.message)
    }
  }

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Let’s build something great</h2>
        <p className="mt-2 text-gray-600">Tell me about your project, timeline, and goals.</p>
        <form onSubmit={onSubmit} className="mt-8 grid md:grid-cols-2 gap-4">
          <input name="name" required placeholder="Name" className="w-full rounded-md border px-4 py-3"/>
          <input name="email" type="email" required placeholder="Email" className="w-full rounded-md border px-4 py-3"/>
          <input name="subject" placeholder="Subject" className="md:col-span-2 w-full rounded-md border px-4 py-3"/>
          <textarea name="message" required placeholder="Message" rows="5" className="md:col-span-2 w-full rounded-md border px-4 py-3"/>
          <div className="md:col-span-2 flex items-center gap-3">
            <button className="px-5 py-3 rounded-md bg-indigo-600 text-white hover:bg-indigo-700">Send message</button>
            {status && <p className="text-sm text-gray-600">{status}</p>}
          </div>
        </form>
      </div>
    </section>
  )
}
