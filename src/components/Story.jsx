import { storyTracks } from '../content'
import Reveal from './Reveal'
import SectionLink from './SectionLink'

export default function Story() {
  return (
    <section className="section story" id="story" tabIndex={-1} aria-labelledby="story-title">
      <div className="container">
        <div className="story__panel">
          <Reveal>
            <p className="eyebrow">Our story</p>
            <h2 id="story-title">Most of the research and the development was done with AI.</h2>
            <p className="lead">
              ValuFull was developed with artificial intelligence doing most of the
              research work and most of the development work. The study of refill retail,
              the design of the station experience, and this website were built that way.
              We say it in the open because it is how the company was made.
            </p>
          </Reveal>
          <div className="story__grid">
            {storyTracks.map((track, index) => (
              <Reveal as="article" key={track.title} className="story__card" delay={index * 90}>
                <p className="story__index" aria-hidden="true">0{index + 1}</p>
                <h3>{track.title}</h3>
                <p>{track.text}</p>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="story__note">
              AI accelerated the work. Operators, partners, and the people behind the
              brand still decide the limits and the promises.
            </p>
            <SectionLink href="#contact" className="btn btn--green">
              Talk with the team
            </SectionLink>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
