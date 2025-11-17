import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Services from './components/Services'
import Contact from './components/Contact'

function App() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Services />
        <Contact />
        <footer className="py-12 text-center text-sm text-gray-500">© {new Date().getFullYear()} Built with love and clean code.</footer>
      </main>
    </div>
  )
}

export default App
