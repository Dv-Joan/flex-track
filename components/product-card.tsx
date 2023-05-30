import React from 'react'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

interface ProductCardProps {
    title: string
    description: string
    imageSrc: string
    alt: string
}

function ProductCard({ title, description, imageSrc, alt }: ProductCardProps) {
    return (
        <Card className="w-[300px]">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description} </CardDescription>
            </CardHeader>
            <CardContent>

                <img src={imageSrc} alt={alt} className="rounded-md" width={200} />
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="ghost">View</Button>
                <Button>Add to Cart</Button>
            </CardFooter>
        </Card>
    )
}

export default ProductCard