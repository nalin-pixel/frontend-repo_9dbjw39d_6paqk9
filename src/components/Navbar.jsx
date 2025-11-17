import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#services', label: 'What I Offer' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (e, href) => {
    e.preventDefault()
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className={`fixed top-0 inset-x-0 z-40 transition-all ${
      scrolled ? 'backdrop-blur-xl bg-white/60 shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-bold text-lg tracking-tight" onClick={(e)=>handleNav(e,'#home')}>
          <span className="text-indigo-600">F.</span>Blue
        </a>
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e)=>handleNav(e,l.href)}
              className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e)=>handleNav(e,'#contact')}
            className="px-4 py-2 rounded-md bg-indigo-600 text-white text-sm shadow hover:bg-indigo-700"
          >
            Let’s talk
          </a>
        </div>
        <button className="md:hidden p-2" onClick={()=>setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="h-6 w-6"/> : <Menu className="h-6 w-6"/>}
        </button>
      </nav>
      {open && (
        <div className="md:hidden px-4 pb-4">
          <div className="rounded-lg border bg-white/80 backdrop-blur p-3 space-y-2">
            {links.map((l)=>(
              <a key={l.href} href={l.href} onClick={(e)=>handleNav(e,l.href)} className="block px-3 py-2 rounded-md text-gray-800 hover:bg-gray-100">
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={(e)=>handleNav(e,'#contact')} className="block px-3 py-2 rounded-md bg-indigo-600 text-white text-center">Let’s talk</a>
          </div>
        </div>
      )}
    </header>
  )
}
