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
            Pay for what you pour.
            <span>Not for the packet.</span>
          </h1>
          <p className="lead lead--light">
            ValuFull is a neighbourhood refill store for the basics a home uses every week.
            Load a prepaid RFID card, tap a self-service station, and dispense rice, sugar,
            maize meal, beans, cooking oil, detergents, and other essentials — in the exact
            amount you came for.
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
