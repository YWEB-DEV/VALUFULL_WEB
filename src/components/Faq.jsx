import { useState } from 'react'
import { faqs } from '../content'
import Reveal from './Reveal'

export default function Faq() {
  const [openId, setOpenId] = useState(faqs[0].id)

  return (
    <section className="section faq" id="questions" tabIndex={-1} aria-labelledby="faq-title">
      <div className="container faq__layout">
        <Reveal className="faq__intro">
          <p className="eyebrow">Questions</p>
          <h2 id="faq-title">Straight answers before a first visit.</h2>
          <p className="lead">
            The card, the container, and the balance.
          </p>
        </Reveal>
        <div className="faq__list">
          {faqs.map((item) => {
            const open = openId === item.id
            const panelId = `faq-${item.id}`
            const buttonId = `faq-button-${item.id}`
            return (
              <article className={`faq__item${open ? ' is-open' : ''}`} key={item.id}>
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpenId(open ? '' : item.id)}
                  >
                    {item.question}
                    <span className="faq__icon" aria-hidden="true" />
                  </button>
                </h3>
                <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!open}>
                  <p>{item.answer}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
