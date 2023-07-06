"use client"

import React, { useEffect, useState } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import { Product } from "@/types/product"
import { ProductForm, ProductsViewer } from "@/components/products"

const queryClient = new QueryClient()
export default function Page() {
  const [products, setProducts] = useState<Product[]>([])
  const [product, setProduct] = useState<Product>({} as Product)
  const [data, setData] = useState<Product[]>([])

  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((res) => res.json())
      .then((data) => setData(data))
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <div className="mx-14 my-7 flex flex-col gap-20">
        <ProductsViewer />
        <div className="flex gap-7">
          <ProductForm />
        </div>
      </div>
    </QueryClientProvider>
  )
}
