export type Product = {
  id: string
  name: string
  status?: "pending" | "processing" | "success" | "failed"
  brand: string
  description: string
  price: number
  quantity: number
}
