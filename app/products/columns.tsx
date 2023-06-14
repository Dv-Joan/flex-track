'use client'
import { ColumnDef } from "@tanstack/react-table"
export type Product = {
  id: string
  name: string
  status: "pending" | "processing" | "success" | "failed"
  brand: string
  description: string
}

export const products: Product[] = [
  {
    id: "728ed52f",
    name: "Short",
    status: "pending",
    brand: "Under Armour",
    description: "Short products description",
  },
  {
    id: "7258ed52f",
    name: "Short",
    status: "processing",
    brand: "Under Armour",
    description: "Short products description",
  },
]

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "name",
    header: "Product",

  },
  {
    accessorKey: "brand",
    header: "Brand",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
]
