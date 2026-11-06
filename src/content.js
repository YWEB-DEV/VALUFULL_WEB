import rice from './assets/products/rice.png'
import sugar from './assets/products/sugar.png'
import maize from './assets/products/maize.png'
import beans from './assets/products/beans.png'
import flour from './assets/products/flour.png'
import oil from './assets/products/oil.png'
import detergent from './assets/products/detergent.png'

export const nav = [
  { href: '#why', label: 'Why ValuFull' },
  { href: '#visit', label: 'A visit' },
  { href: '#products', label: 'Products' },
  { href: '#technology', label: 'Technology' },
  { href: '#contact', label: 'Contact' },
]

export const footerNav = [
  ...nav,
  { href: '#questions', label: 'Questions' },
]

export const pillars = [
  {
    title: 'Affordable essentials',
    text: 'Staples are sold by the amount a household takes, so the shop can follow a real budget instead of a factory bag.',
    icon: 'coin',
  },
  {
    title: 'Community focused',
    text: 'Stations are planned for neighbourhoods: familiar food, a card people learn once, and a stop that is easy to explain.',
    icon: 'people',
  },
  {
    title: 'Eco-friendly',
    text: 'Bring a container back and fill it again. The purchase does not have to begin with a new single-use pack.',
    icon: 'leaf',
  },
  {
    title: 'Smart technology',
    text: 'An RFID card, a measured machine, and a live balance take the place of guessing at a scoop and a scale.',
    icon: 'card',
  },
  {
    title: 'Modern retail',
    text: 'Self-service refill is a different kind of grocery stop — precise, repeatable, and quick on the second visit.',
    icon: 'machine',
  },
  {
    title: 'Sustainable living',
    text: 'Less wrapping, fewer half-used bags, and a weekly habit that gets lighter each time the container comes back.',
    icon: 'cycle',
  },
]

export const steps = [
  {
    title: 'Get a card',
    text: 'Load money onto your card before you start. You decide your budget and stay in control of your spending. (The machine does not take cash)',
  },
  {
    title: 'Load your wallet',
    text: 'Add money before you dispense. The budget is yours. The machine does not take cash at the nozzle.',
  },
  {
    title: 'Bring a clean container',
    text: "Bring a bottle, jar, tub, or container from home. Make sure it's clean and suitable for the product you're buying.",
  },
  {
    title: 'Fill only what you need',
    text: "Tap your card, choose your product, and select the amount you'd like. The refill station measures everything for you.",
  },
  {
    title: 'Pay as you refill',
    text: 'The cost is deducted automatically from your card as you dispense. Any remaining balance stays on your card for your next refill.',
  },
]

export const products = [
  {
    name: 'Rice',
    image: rice,
  },
  {
    name: 'Sugar',
    image: sugar,
  },
  {
    name: 'Maize meal',
    image: maize,
  },
  {
    name: 'Beans',
    image: beans,
  },
  {
    name: 'Flour',
    image: flour,
  },
  {
    name: 'Cooking oil',
    image: oil,
  },
  {
    name: 'Detergents',
    image: detergent,
  },
]

export const flow = [
  { title: 'Tap the card', text: 'The station recognises the prepaid account.' },
  { title: 'Set the amount', text: 'Choose the staple and the quantity.' },
  { title: 'Dispense', text: 'The machine measures into your container.' },
  { title: 'Balance updates', text: 'That pour is deducted immediately.' },
]

export const faqs = [
  {
    id: 'card',
    question: 'What is the ValuFull card?',
    answer:
      'The ValuFull card is your refill card and your wallet. Simply load money onto it and use it whenever you visit. As you refill products, the cost is automatically deducted from your balance. You can keep and reuse the same card every time you shop. Your balance remains as you left it 🙂',
  },
  {
    id: 'amount',
    question: 'Do I have to buy a set pack size?',
    answer:
      "No. You are in control of how much you buy. Whether you need a little for tonight's meal or enough for the week, you can refill the exact quantity you want and pay only for what you take.",
  },
  {
    id: 'container',
    question: 'What should I bring?',
    answer:
      "Bring a clean container from home, such as a bottle, jar, tub, or refillable container.Different products may require different containers, so just make sure your container is clean and suitable for the product you're buying.",
  },
  {
    id: 'balance',
    question: 'How do I know how much money I have left?',
    answer:
      'Your remaining balance is displayed during your refill and stays on your ValuFull card for future visits. You can easily see how much you have available before your next purchase.',
  },
  {
    id: 'budget',
    question: 'How does this help a household budget?',
    answer:
      'ValuFull helps you avoid paying for unnecessary packaging and allows you to buy only what you need. That means less waste, fewer unused products at home, and better control over your grocery and household spending.',
  },
]

export const interests = [
  'I shop for a household',
  'I am part of a community group',
  'I want to host a station',
  'I am an investor',
  'Something else',
]
