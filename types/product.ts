export type Product = {
  id: string
  name: string
  status: "in stock" | "for pricing" | "sold out" | "on sale"
  brand: string
  description?: string
  price: number
  quantity: number
}
