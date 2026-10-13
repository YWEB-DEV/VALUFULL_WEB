import { steps } from '../content'
import Reveal from './Reveal'

export default function Visit() {
  return (
    <section className="section visit" id="visit" tabIndex={-1} aria-labelledby="visit-title">
      <div className="container visit__layout">
        <Reveal className="visit__intro">
          <p className="eyebrow">A visit</p>
          <h2 id="visit-title">Five calm steps. Then you are on your way.</h2>
          <p className="lead">
            A first visit should feel obvious. The next one should feel quick. The card
            stays with you, and the station does the measuring.
          </p>
        </Reveal>
        <ol className="steps">
          {steps.map((step, index) => (
            <Reveal as="li" key={step.title} delay={index * 60}>
              <article className="step">
                <p className="step__num" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
