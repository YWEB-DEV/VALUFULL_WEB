import { useCallback, useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Why from './components/Why.jsx'
import Visit from './components/Visit.jsx'
import Products from './components/Products.jsx'
import Technology from './components/Technology.jsx'
import Story from './components/Story.jsx'
import Impact from './components/Impact.jsx'
import Audiences from './components/Audiences.jsx'
import Faq from './components/Faq.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import { usePrefersReducedMotion } from './hooks.js'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showTop, setShowTop] = useState(false)
  const reduce = usePrefersReducedMotion()
  const closeMenu = useCallback(() => setMenuOpen(false), [])
  const toggleMenu = useCallback(() => setMenuOpen((open) => !open), [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
    return () => document.body.classList.remove('menu-open')
  }, [menuOpen])

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <ScrollProgress />
      <Header open={menuOpen} onToggle={toggleMenu} onClose={closeMenu} />
      <div inert={menuOpen ? true : undefined}>
        <main id="main" tabIndex={-1}>
          <Hero />
          <Why />
          <Visit />
          <Products />
          <Technology />
          <Story />
          <Impact />
          <Audiences />
          <Faq />
          <Contact />
        </main>
        <Footer />
        {showTop ? (
        <a
          className="to-top"
          href="#top"
          onClick={(event) => {
            const target = document.getElementById('top')
            if (!target) return
            event.preventDefault()
            target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
            target.focus({ preventScroll: true })
          }}
        >
          <span className="visually-hidden">Back to top</span>
          <span aria-hidden="true">↑</span>
        </a>
        ) : null}
      </div>
    </>
  )
}
