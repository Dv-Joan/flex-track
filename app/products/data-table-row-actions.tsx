"use client"

import { Row } from "@tanstack/react-table"
import { Pen, Trash } from "lucide-react"
import { Button } from "@/components/ui/button"
import { formSchema } from "@/schemas/form"

interface DataTableRowActionsProps<TData> {
    row: Row<TData>
}

export function DataTableRowActions<TData>({
    row,
}: DataTableRowActionsProps<TData>) {
    const form = formSchema.parse(row.original)

    return (


        <div className="flex gap-2">
            <Button onClick={
                () => {

                }
            } className="btn btn-primary">
                <Pen className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
                Edit
            </Button>
            <Button variant='outline' onClick={
                () => {
                    alert('delete')
                }
            } className="btn btn-primary">
                <Trash className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />Delete</Button>
        </div>

    )
}