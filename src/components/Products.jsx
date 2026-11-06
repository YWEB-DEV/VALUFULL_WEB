import { products } from '../content'
import Reveal from './Reveal'

export default function Products() {
  return (
    <section className="section products" id="products" tabIndex={-1} aria-labelledby="products-title">
      <div className="container">
        <Reveal className="section__intro">
          <p className="eyebrow">What you can fill</p>
          <h2 id="products-title">The essentials a home reaches for every week.</h2>
          <p className="lead">
            Rice, sugar, maize meal, beans, flour, cooking oil, detergents, and room for other
            household basics as a neighbourhood’s needs become clear. Each one is sold
            by weight or by volume.
          </p>
        </Reveal>
        <ul className="product-grid">
          {products.map((product, index) => (
            <Reveal as="li" key={product.name} delay={(index % 3) * 80}>
              <article className="product">
                <span className="product__icon product__icon--image">
                  <img src={product.image} alt="" />
                </span>
                <h3>{product.name}</h3>
                {product.text ? <p>{product.text}</p> : null}
                {product.unit ? <p className="product__unit">{product.unit}</p> : null}
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
