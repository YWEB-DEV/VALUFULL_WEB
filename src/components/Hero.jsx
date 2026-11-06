import SectionLink from './SectionLink'

export default function Hero() {
  return (
    <section className="hero" id="top" tabIndex={-1} aria-labelledby="hero-title">
      <div className="hero__glow hero__glow--green" aria-hidden="true" />
      <div className="hero__glow hero__glow--orange" aria-hidden="true" />
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="eyebrow eyebrow--light">Save more. Waste less.</p>
          <h1 id="hero-title">
            Buy exactly what you need.
            <span>Save money on every refill.</span>
          </h1>
          <p className="lead lead--light">
          ValuFull is a neighbourhood refill store that gives households access to everyday essentials, helping you save money and reduce waste. 
          Simply tap your prepaid RFID card, dispense the exact amount of rice, sugar, beans, detergents, and more, 
          and pay only for the product you take home. 
          </p>
          <div className="hero__actions">
            <SectionLink href="#visit" className="btn btn--orange">
              See how a visit works
            </SectionLink>
            <SectionLink href="#technology" className="btn btn--glass">
              Explore the technology
            </SectionLink>
          </div>
          <ul className="hero__points">
            <li>Prepaid RFID card</li>
            <li>Exact quantities</li>
            <li>Less packaging waste</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
