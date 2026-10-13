import { audiences } from '../content'
import Reveal from './Reveal'
import SectionLink from './SectionLink'

export default function Audiences() {
  return (
    <section className="section audiences" id="partners" tabIndex={-1} aria-labelledby="partners-title">
      <div className="container">
        <Reveal className="section__intro">
          <p className="eyebrow">Who it is for</p>
          <h2 id="partners-title">Households first. Partners and investors beside them.</h2>
          <p className="lead">
            ValuFull is built for people buying the week’s staples, and for the communities,
            hosts, and backers who can help a station exist.
          </p>
        </Reveal>
        <ul className="audience-grid">
          {audiences.map((audience, index) => (
            <Reveal as="li" key={audience.title} delay={(index % 3) * 70}>
              <article className="audience">
                <h3>{audience.title}</h3>
                <p>{audience.text}</p>
                <SectionLink href={audience.link.href} className="text-link">
                  {audience.link.label}
                </SectionLink>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
