export interface Product {
  id: string
  priceId: string
  name: string
  description: string
  mode: 'payment' | 'subscription'
  price: number
}

export const products: Product[] = [
  {
    id: 'basic-plan',
    priceId: 'price_basic_29',
    name: 'Basic Plan',
    description: 'Perfect for small businesses, consultants, and single product companies. Get started with essential customer journey mapping tools.',
    mode: 'subscription',
    price: 29.00
  },
  {
    id: 'pro-plan',
    priceId: 'price_pro_49',
    name: 'Pro Plan',
    description: 'Ideal for marketing teams, agencies, and multi-product companies. Unlock unlimited journey maps and advanced analytics.',
    mode: 'subscription',
    price: 49.00
  }
]

export const getProductByPriceId = (priceId: string): Product | undefined => {
  return products.find(product => product.priceId === priceId)
}