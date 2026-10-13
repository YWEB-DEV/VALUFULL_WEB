import { useEffect, useRef } from 'react'
import { nav } from '../content'
import SectionLink from './SectionLink'

export default function Header({ open, onToggle, onClose }) {
  const toggleRef = useRef(null)
  const panelRef = useRef(null)

  useEffect(() => {
    if (!open) return undefined
    const panel = panelRef.current
    const firstLink = panel?.querySelector('a')
    firstLink?.focus()

    const onKey = (event) => {
      if (event.key === 'Escape') {
        onClose()
        toggleRef.current?.focus()
      }
    }
    const desktop = window.matchMedia('(min-width: 1081px)')
    const onDesktop = () => {
      if (desktop.matches) onClose()
    }
    window.addEventListener('keydown', onKey)
    desktop.addEventListener('change', onDesktop)
    return () => {
      window.removeEventListener('keydown', onKey)
      desktop.removeEventListener('change', onDesktop)
    }
  }, [open, onClose])

  return (
    <>
    <header className={`site-header${open ? ' is-open' : ''}`}>
      <div className="container site-header__bar">
        <SectionLink href="#top" className="brand" aria-label="ValuFull home" onNavigate={onClose}>
          <img
            className="brand__word"
            src="/wordmark.png"
            alt=""
            width="308"
            height="104"
          />
        </SectionLink>

        <nav className="desktop-nav" aria-label="Primary">
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <SectionLink href={item.href}>{item.label}</SectionLink>
              </li>
            ))}
          </ul>
        </nav>

        <SectionLink href="#contact" className="btn btn--orange header-cta">
          Start a conversation
        </SectionLink>

        <button
          ref={toggleRef}
          className="nav-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={onToggle}
        >
          <span className="visually-hidden">{open ? 'Close menu' : 'Open menu'}</span>
          <span className="nav-toggle__bars" aria-hidden="true" />
        </button>
      </div>
    </header>

      {open ? (
        <div
          id="mobile-nav"
          ref={panelRef}
          className="nav-panel"
          role="dialog"
          aria-modal="true"
          aria-label="Primary"
        >
          <nav aria-label="Mobile">
            <ul>
              {nav.map((item) => (
                <li key={item.href}>
                  <SectionLink href={item.href} onNavigate={onClose}>
                    {item.label}
                  </SectionLink>
                </li>
              ))}
            </ul>
          </nav>
          <SectionLink href="#contact" className="btn btn--orange" onNavigate={onClose}>
            Start a conversation
          </SectionLink>
        </div>
      ) : null}
    </>
  )
}
