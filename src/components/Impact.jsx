import { stats } from '../content'
import { useCountUp, useInView } from '../hooks'

function Stat({ stat, start, delay }) {
  const value = useCountUp(stat.value, start, 1200, delay)
  const figure = `${stat.value}${stat.suffix}`

  return (
    <li className="stat">
      <p className="stat__value" aria-hidden="true">
        {value}
        {stat.suffix}
      </p>
      <p className="stat__label">
        <span className="visually-hidden">{figure} </span>
        {stat.label}
      </p>
    </li>
  )
}

export default function Impact() {
  const [setNode, inView] = useInView()

  return (
    <section className="impact" id="impact" tabIndex={-1} aria-labelledby="impact-title">
      <div className="container">
        <div className="section__intro section__intro--light">
          <p className="eyebrow eyebrow--light">By design</p>
          <h2 id="impact-title">A simpler shop, counted in the way it works.</h2>
          <p className="lead lead--light">
            These figures describe the visit itself. They are part of the model, not a
            claim about one store’s sales or a guaranteed discount.
          </p>
        </div>
        <ul className="stats" ref={setNode}>
          {stats.map((stat, index) => (
            <Stat key={stat.label} stat={stat} start={inView} delay={index * 120} />
          ))}
        </ul>
      </div>
    </section>
  )
}
