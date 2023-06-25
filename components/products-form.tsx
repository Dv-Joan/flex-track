"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Title } from "@radix-ui/react-toast"
import {
    useMutation,
    useQueryClient,

} from '@tanstack/react-query'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
const INITIAL_FORM_VALUES = {
    id: "asdasd5484",
    name: "Laptop",
    brand: "Asus",
    description: "A laptop for gaming and work.",
    price: '250',
    quantity: '11',
    status: "",
}


const formSchema = z.object({
    name: z.string().min(3, {
        message: "Product name must be at least 3 characters.",
    }),
    brand: z.string().min(2, {
        message: "Model name must be at least 2 characters.",
    }),
    description: z.string().min(10),
    price: z.string().refine((val) => !Number.isNaN(parseInt(val, 10)), {
        message: "Expected number, received an string"
    }),
    quantity: z.string().refine((val) => !Number.isNaN(parseInt(val, 10)), {
        message: "Expected number, received an string"
    }),


})


export function ProductForm() {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: INITIAL_FORM_VALUES,
    });
    const queryClient = useQueryClient()


    const postProduct = async (newProduct: any) => {
        const res = await fetch('http://localhost:3001/products', {
            method: 'POST',
            body: JSON.stringify(newProduct),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        return res.json()
    }

    const mutation = useMutation({
        mutationFn: postProduct,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['products']
            })
        },
    }

    )




    const onSubmit = (data: any) => {
        mutation.mutate(data)
        console.log(data)
    }



    return (
        <Form  {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-md space-y-8 rounded-lg max-h-[550px] border-1 p-7 ">
                <Title>
                    <h2 className="text-2xl font-bold">Add Product</h2>
                </Title>
                <div className="flex gap-3.5">

                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Product</FormLabel>
                                <FormControl>
                                    <Input placeholder="Bahamas Short" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="brand"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Brand</FormLabel>
                                <FormControl>
                                    <Input placeholder="Under Armour " {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Short products description " {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex gap-3.5">

                    <FormField
                        control={form.control}
                        name="price"
                        render={({ field }) => (

                            <FormItem>
                                <FormLabel>Price</FormLabel>
                                <FormControl>
                                    <Input type="number"  {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="quantity"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Quantity</FormLabel>
                                <FormControl>
                                    <Input type="number" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="status"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Status</FormLabel>
                                <FormControl>
                                    <Select>
                                        <SelectTrigger className="w-[180px]">
                                            <SelectValue placeholder="pending" />
                                            <SelectContent position="popper">
                                                <SelectItem {...field} value="in stock" >in stock</SelectItem>
                                                <SelectItem {...field} value="sold out">sold out</SelectItem>
                                                <SelectItem {...field} value="on sale">on sale</SelectItem>
                                                <SelectItem {...field} value="for pricing">for pricing</SelectItem>
                                            </SelectContent>
                                        </SelectTrigger>
                                    </Select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div >
                <div className="flex justify-between">

                    <Button className="px-14" type="submit" >Submit</Button>

                    <Button onClick={
                        () => {
                            form.reset(INITIAL_FORM_VALUES)
                        }
                    } className="px-14" type="reset" variant='outline'>Clear</Button>
                </div>
            </form>
        </Form >
    )
}
