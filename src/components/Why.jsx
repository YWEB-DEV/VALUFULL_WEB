import { pillars } from '../content'
import Icon from './Icon'
import Reveal from './Reveal'

export default function Why() {
  return (
    <section className="section why" id="why" tabIndex={-1} aria-labelledby="why-title">
      <div className="container">
        <Reveal className="section__intro">
          <p className="eyebrow">Why ValuFull</p>
          <h2 id="why-title">A shop organised around the household, not the pack.</h2>
          <p className="lead">
            Traditional packs decide the size, then charge for plastic that goes straight
            to the bin. ValuFull turns that around. You bring a container, choose a
            quantity, and pay for what leaves the machine.
          </p>
        </Reveal>

        <ul className="pillar-grid">
          {pillars.map((pillar, index) => (
            <Reveal as="li" key={pillar.title} delay={index * 70}>
              <article className="pillar">
                <span className="pillar__icon">
                  <Icon name={pillar.icon} />
                </span>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
