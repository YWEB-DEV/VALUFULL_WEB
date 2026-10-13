export const nav = [
  { href: '#why', label: 'Why ValuFull' },
  { href: '#visit', label: 'A visit' },
  { href: '#products', label: 'Products' },
  { href: '#technology', label: 'Technology' },
  { href: '#contact', label: 'Contact' },
]

export const footerNav = [
  ...nav,
  { href: '#partners', label: 'Partners' },
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

export const fixedPack = [
  'The bag decides how much you buy.',
  'Part of the price is the wrapping.',
  'A new pack is binned after the shop.',
  'You queue, then pay at a till.',
]

export const refillWay = [
  'You set the grams or the litres.',
  'You pay for the product you take.',
  'Your container goes home and returns.',
  'You tap a card and the balance updates.',
]

export const steps = [
  {
    title: 'Get a card',
    text: 'Collect a ValuFull RFID card at the station. It is the prepaid wallet for this visit and the ones after it. You keep the card.',
  },
  {
    title: 'Load the value you choose',
    text: 'Add money before you dispense. The budget is yours. The machine does not take cash at the nozzle.',
  },
  {
    title: 'Bring a clean container',
    text: 'A jar, bottle, or tub from home is the pack. Use something suited to dry food or to liquid, and make sure it is clean.',
  },
  {
    title: 'Tap, choose, and dispense',
    text: 'Hold the card to the reader, pick the staple, and set the amount. The machine measures that quantity into your container.',
  },
  {
    title: 'See the balance move',
    text: 'The cost of that pour leaves the card immediately. What remains is on screen for the next staple, or for the next visit.',
  },
]

export const products = [
  {
    name: 'Rice',
    text: 'A base for family pots, released by weight so tonight’s meal and the month’s store are different purchases.',
    unit: 'Sold by weight',
    icon: 'rice',
  },
  {
    name: 'Sugar',
    text: 'Take a small jar for the week or a larger fill when you are baking. The measure follows the kitchen.',
    unit: 'Sold by weight',
    icon: 'sugar',
  },
  {
    name: 'Maize meal',
    text: 'The everyday staple, dispensed to the pot you actually cook — not to a bag size chosen far from home.',
    unit: 'Sold by weight',
    icon: 'maize',
  },
  {
    name: 'Beans',
    text: 'Buy the portion that matches the meal. Dry staples stay on the station until you decide the amount.',
    unit: 'Sold by weight',
    icon: 'beans',
  },
  {
    name: 'Cooking oil',
    text: 'Refill the bottle you already own. Oil is poured by volume, so a top-up does not require a fresh bottle.',
    unit: 'Sold by volume',
    icon: 'oil',
  },
  {
    name: 'Detergents',
    text: 'Washing liquid and other cleaning basics can be refilled into a container, without a new jug every time.',
    unit: 'Sold by volume',
    icon: 'detergent',
  },
]

export const techFeatures = [
  {
    title: 'RFID prepaid system',
    text: 'Each card carries an identity the station can read with a tap. Value sits on the prepaid account behind the card, so a shopper pays without cash at the machine and without scanning a barcode on a bag.',
    icon: 'card',
  },
  {
    title: 'Automated refill machines',
    text: 'Dry goods and liquids are released by measured dispense. The shopper chooses the product and the quantity. The machine is built to stop when that quantity is reached, into a container they brought.',
    icon: 'machine',
  },
  {
    title: 'Real-time balance tracking',
    text: 'Every pour is priced as it happens. The remaining balance updates on the spot, so a household can move from maize meal to oil to detergent and see what the card can still buy.',
    icon: 'balance',
  },
  {
    title: 'Reduced labour costs',
    text: 'Self-service measurement replaces scooping, weighing, and packing by hand. Teams spend their time on replenishment, cleanliness, and the people in the store. A smaller floor team can still serve a busy hour.',
    icon: 'labour',
  },
  {
    title: 'Community empowerment',
    text: 'When essentials are sold in useful amounts, without a packaging premium, more of a household’s money stays in the household. A local station shortens the trip for basics and gives partners a shop they can host in the community.',
    icon: 'people',
  },
]

export const flow = [
  { title: 'Tap the card', text: 'The station recognises the prepaid account.' },
  { title: 'Set the amount', text: 'Choose the staple and the quantity.' },
  { title: 'Dispense', text: 'The machine measures into your container.' },
  { title: 'Balance updates', text: 'That pour is deducted immediately.' },
]

export const stats = [
  { value: 1, suffix: '', label: 'prepaid RFID card, kept for the next visit' },
  { value: 6, suffix: '+', label: 'household essentials in the core range' },
  { value: 100, suffix: '%', label: 'of each pour set by the shopper, not by a pack' },
  { value: 5, suffix: '', label: 'steps from the door to a filled container' },
]

export const audiences = [
  {
    title: 'Families',
    text: 'Stretch a grocery week by buying the amount that matches the pot, not a pack size from somewhere else. What you do not pour stays on the card.',
    link: { href: '#visit', label: 'See how a visit works' },
  },
  {
    title: 'Communities',
    text: 'A refill station is a practical shop: familiar staples, less waste to carry home, and a payment habit neighbours can teach one another.',
    link: { href: '#technology', label: 'See the station system' },
  },
  {
    title: 'Environmentally conscious households',
    text: 'Reuse the containers already in the kitchen. Each refill is packaging that was never produced for that purchase.',
    link: { href: '#why', label: 'Why the model is lighter' },
  },
  {
    title: 'Investors',
    text: 'The model joins a prepaid RFID account with automated dispensing, so a station can serve essentials with a leaner floor team. ValuFull is opening conversations with people who want to back neighbourhood retail of this kind. This is not an offer of shares or a promise of returns.',
    link: { href: '#contact', label: 'Start a conversation' },
  },
  {
    title: 'Community partners',
    text: 'Host a station, introduce ValuFull to a place you already serve, or help keep staples supplied. The shop is meant to belong to the neighbourhood it stands in.',
    link: { href: '#contact', label: 'Talk about a site' },
  },
]

export const faqs = [
  {
    id: 'card',
    question: 'What is the ValuFull card?',
    answer:
      'It is a prepaid RFID card. You load money onto it, then tap it at a refill station. The station reads the card and deducts the cost of the amount you dispense. You keep the card for later visits.',
  },
  {
    id: 'amount',
    question: 'Do I have to buy a set pack size?',
    answer:
      'No. You choose the quantity — a small pour for tonight or a larger fill for the week. You pay for that quantity of product.',
  },
  {
    id: 'container',
    question: 'What should I bring?',
    answer:
      'A clean container from home. Dry goods and liquids need suitable jars, bottles, or tubs. The station fills what you bring; it does not wrap a new pack around the product.',
  },
  {
    id: 'balance',
    question: 'How do I know what I have left?',
    answer:
      'The balance is tracked as you shop. After each dispense it updates, so you can decide the next product with the remaining value in front of you.',
  },
  {
    id: 'budget',
    question: 'How does this help a household budget?',
    answer:
      'You are not pushed into a fixed bag, and you are not paying for wrapping you will throw away. The amount follows the week you are actually shopping for. ValuFull does not publish a blanket discount against every retailer, because prices move — the saving is built into buying only the product you take.',
  },
]

export const interests = [
  'I shop for a household',
  'I am part of a community group',
  'I want to host a station',
  'I am an investor',
  'Something else',
]
