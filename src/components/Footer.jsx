import { footerNav } from '../content'
import SectionLink from './SectionLink'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <div className="footer__plate">
            <img src="/logo.png" alt="ValuFull. Save More. Waste Less." width="302" height="198" />
          </div>
          <p>Smart refill stores for household essentials.</p>
        </div>
        <nav aria-label="Footer">
          <ul>
            {footerNav.map((item) => (
              <li key={item.href}>
                <SectionLink href={item.href}>{item.label}</SectionLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="footer__note">
          <p>
            Most of ValuFull’s research work and development work was done with
            artificial intelligence. People set the purpose and the promises.
          </p>
        </div>
      </div>
      <div className="container footer__base">
        <p>© {new Date().getFullYear()} ValuFull.</p>
      </div>
    </footer>
  )
}
