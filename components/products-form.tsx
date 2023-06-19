"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { v4 as uuidv4 } from "uuid"
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
import { Product } from "@/types/product"
import { useEffect } from "react"
const INITIAL_FORM_VALUES = {
    name: "",
    brand: "",
    description: "",
    price: "",
    quantity: "",
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
    price: z.number().min(1, {
        message: "Price must be at least 1.",
    }),
    quantity: z.number().min(1, {
        message: "Quantity must be at least 1.",
    }).max(500, {
        message: "Quantity must be at most 500.",
    }),
    status: z.enum(["pending", "processing", "success", "failed"]),


})
type FormProps = {
    products: Product[]
    product: Product
    setProducts: (product: Product[]) => void
    setProduct: (product: Product) => void
}

export function ProductForm({
    products, product, setProducts, setProduct

}: FormProps) {
    const { register, setValue, formState: { errors } } = useForm();
    const form = useForm({
        resolver: zodResolver(formSchema),
    });

    useEffect(() => {
        if (Object.keys(products).length
            && Object.keys(product).length) {
            setValue("name", product.name);
            setValue("brand", product.brand);
            setValue("description", product.description);
            setValue("price", product.price);
            setValue("quantity", product.quantity);
            setValue("status", product.status);
        }
    }, [product]);



    const onSubmit = async (values: any) => {
        const { name, brand, description, price, quantity, status } = values;
        const newProduct = {
            name,
            brand,
            description,
            price,
            quantity,
            status,
        };
        const res = await fetch("@/pages/api/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newProduct),
        });
        const data = await res.json();
        data.id = uuidv4();
        setProducts([...products, data]);
        setProduct(data);
        if (data) {
            alert("enviado");
        } else {
            alert("error");
        }
    };




    return (
        <Form  {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-md space-y-8 rounded-lg border-1 p-7 ">
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
                                    <Input type="number" defaultValue={5} placeholder="$ 40.59" {...field} />
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
                                    <Input type="number" placeholder="3 " {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div >
                <div className="flex justify-between">

                    <Button className="px-14" type="submit">Submit</Button>

                    <Button onClick={
                        () => {
                            form.reset(INITIAL_FORM_VALUES)
                        }
                    } className="px-14" variant='outline'>Cancel</Button>
                </div>
            </form>
        </Form>
    )
}
