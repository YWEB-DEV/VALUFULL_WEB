import { footerNav } from '../content'
import SectionLink from './SectionLink'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <div className="footer__plate">
            <img src={`${import.meta.env.BASE_URL}logo.png`} alt="ValuFull. Save More. Waste Less." width="302" height="198" />
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
            Household essentials, filled to the amount a home actually needs.
          </p>
        </div>
      </div>
      <div className="container footer__base">
        <p>© {new Date().getFullYear()} ValuFull.</p>
      </div>
    </footer>
  )
}
