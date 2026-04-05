import Navbar from './components/Navbar'
import HeroCarousel from './components/HeroCarousel'
import Highlights from './components/Highlights'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { profile } from './data/content'

function App() {
  return (
    <div className="min-h-svh bg-[var(--color-surface)] text-slate-900 dark:bg-[var(--color-surface-dark)] dark:text-slate-100">
      <Navbar siteName={profile.name} />
      <main>
        <HeroCarousel />
        <Highlights />
        <About />
        <Experience />
        <Projects />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
