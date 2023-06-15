'use client'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ColumnDef } from "@tanstack/react-table"
export type Product = {
  id: string
  name: string
  status?: "pending" | "processing" | "success" | "failed"
  brand: string
  description: string
  price: number
  quantity: number

}

export const products: Product[] = [
  {
    id: "728ed52f",
    name: "Short",
    status: "pending",
    brand: "Under Armour",
    description: "Short products description",
    price: 40.59,
    quantity: 10,
  },
  {
    id: "7258ed52f",
    name: "Short",
    status: "processing",
    brand: "Under Armour",
    description: "Short products description",
    price: 40.59,
    quantity: 10,
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
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => {
      return (
        <span>

          {`${row.original.price} $`}
          <span
            className={cn('w-3 h-3 ml-2 rounded-full px-2 py-1', {
              'bg-yellow-500': row.original.price < 50,
              'bg-green-500': row.original.price > 50,

            })}
          >
            {row.original.price > 50 ? 'High' : 'Low'}
          </span>

        </span>

      )
    }
  },

  {
    accessorKey: "quantity",
    header: "Quantity",
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: () => {
      return (
        <div className="flex gap-2">
          <Button variant='outline' className="btn btn-primary">Edit</Button>
          <Button variant='destructive' className="btn btn-primary">Delete</Button>
        </div>
      )
    }

  }
]
