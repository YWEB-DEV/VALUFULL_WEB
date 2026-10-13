export default function SectionLink({ href, className, children, onNavigate, ...rest }) {
  return (
    <a
      href={href}
      className={className}
      {...rest}
      onClick={(event) => {
        const href = event.currentTarget.getAttribute('href')
        if (!href?.startsWith('#')) return
        event.preventDefault()
        onNavigate?.()
        window.requestAnimationFrame(() => {
          const target = document.querySelector(href)
          if (!target) return
          const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
          target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
          target.focus({ preventScroll: true })
        })
      }}
    >
      {children}
    </a>
  )
}
