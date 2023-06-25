"use client"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { cn } from "@/lib/utils"
import { Pen, Trash } from "lucide-react"

import { Title } from "@radix-ui/react-toast"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Product } from "@/types/product"
import { headers } from "./table-headers"

interface DataTableProps<TData, TValue> {
    data: TData[]
    handleDelete: (id: string) => void
}

export function DataTable<TData, TValue>({
    data,
    handleDelete
}: DataTableProps<TData, TValue>) {
    const getProducts = async () => {
        const res = await fetch('http://localhost:3001/products')
        return res.json()
    }
    const queryClient = useQueryClient()
    const query = useQuery({
        queryKey: ['products'],
        queryFn: getProducts,

    })


    return (
        <div className="space-y-7">
            <Title>
                <h2 className="text-2xl font-bold">Products</h2>
            </Title>
            <div className="w-full border rounded-md">
                <Table>
                    <TableHeader>
                        <TableRow>
                            {
                                headers.map(header => <TableHead>
                                    {header}
                                </TableHead>
                                )
                            }
                        </TableRow>

                    </TableHeader>
                    <TableBody>
                        {
                            query.data ?
                                (query.data.map((product: Product) => (
                                    <TableRow
                                        key={product.id}
                                    >
                                        <TableCell>
                                            {product.name}
                                        </TableCell>
                                        <TableCell>
                                            {product.brand}
                                        </TableCell>

                                        <TableCell>

                                            {product.quantity}

                                        </TableCell>
                                        <TableCell width={100}>
                                            $ {product.price}
                                        </TableCell>
                                        <TableCell width={120}>
                                            <Badge
                                                variant='outline'
                                                className={cn(
                                                    product.status === "on sale" && "border-[#ABF71D]",
                                                    product.status === "sold out" && "border-[#f71d1d]",
                                                    product.status === "for pricing" && "border-[#f7b71d]",
                                                    product.status === "in stock" && "border-[#1df7b7]",
                                                )}
                                            >
                                                {product.status}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="flex gap-3.5">

                                            <Button title="edit" variant='outline' size='sm' >
                                                <Pen className=" h-3.5 w-3.5 text-muted-foreground/70" />
                                            </Button>

                                            <Button title="delete" size='sm' variant='ghost' type='reset' >
                                                <Trash className=" h-3.5 w-3.5 text-destructive " />                                           </Button>
                                        </TableCell>

                                    </TableRow>
                                ))) :
                                (<TableRow>
                                    <TableCell colSpan={5} className="h-24 text-center">
                                        No results.
                                    </TableCell>
                                </TableRow>
                                )
                        }

                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
