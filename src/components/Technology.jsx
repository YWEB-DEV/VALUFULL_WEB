import { flow, techFeatures } from '../content'
import Icon from './Icon'
import Reveal from './Reveal'

export default function Technology() {
  return (
    <section className="section technology" id="technology" tabIndex={-1} aria-labelledby="technology-title">
      <div className="technology__glow technology__glow--green" aria-hidden="true" />
      <div className="technology__glow technology__glow--orange" aria-hidden="true" />
      <div className="container">
        <Reveal className="section__intro section__intro--light">
          <p className="eyebrow eyebrow--light">ValuFull Technology</p>
          <h2 id="technology-title">A card, a machine, and a balance that moves in the open.</h2>
          <p className="lead lead--light">
            The station is a connected retail system. It recognises a prepaid account,
            measures the product, and shows what is left. That is how a compact store
            can sell essentials with care and with a smaller floor team.
          </p>
        </Reveal>

        <ol className="flow">
          {flow.map((item, index) => (
            <Reveal as="li" key={item.title} delay={index * 70}>
              <p className="flow__index" aria-hidden="true">0{index + 1}</p>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </ol>

        <ul className="tech-grid">
          {techFeatures.map((feature, index) => (
            <Reveal as="li" key={feature.title} delay={(index % 3) * 80}>
              <article className="tech-card">
                <span className="tech-card__icon">
                  <Icon name={feature.icon} />
                </span>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
