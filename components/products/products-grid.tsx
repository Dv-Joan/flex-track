import React from "react"
import { useQuery } from "@tanstack/react-query"

import { Product } from "@/types/product"

import { ProductCard } from "./product-card"

export function ProductsViewer() {
  const getProducts = async () => {
    const res = await fetch("http://localhost:3001/products")
    return res.json()
  }
  const query = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  })
  return (
    <div>
      <section className="grid grid-cols-1 justify-around gap-y-14 text-gray-400 lg:grid-cols-3">
        {query.data?.map((product: Product) => (
          <ProductCard
            title={product.title}
            description={product.description}
            imageSrc={product.imageSrc}
            alt={product.alt}
          />
        ))}
      </section>
    </div>
  )
}
