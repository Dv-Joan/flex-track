"use client"

import { formSchema } from "@/schemas/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Title } from "@radix-ui/react-toast"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useForm } from "react-hook-form"

import { Product } from "@/types/product"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const INITIAL_FORM_VALUES = {
  id: "asdasd5484",
  title: "Men's UA Freedom Eagle T-Shirt",
  description:
    "Ultra-comfortable fit and feel, while giving you the sweat-wicking, heat-battling & performance benefits",
  imageSrc:
    "https://underarmour.scene7.com/is/image/Underarmour/PS1363510-824_HB?rp=standard-0pad|gridTileDesktop&scl=1&fmt=jpg&qlt=50&resMode=sharp2&cache=on,on&bgc=F0F0F0&wid=512&hei=640&size=512,640",
}

type FormProps = {
  products: Product[]
  product: Product
  setProducts: (product: Product[]) => void
  setProduct: (product: Product) => void
}

export function ProductForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: INITIAL_FORM_VALUES,
  })
  const queryClient = useQueryClient()

  const postProduct = async (newProduct: any) => {
    const res = await fetch("http://localhost:3001/products", {
      method: "POST",
      body: JSON.stringify(newProduct),
      headers: {
        "Content-Type": "application/json",
      },
    })
    return res.json()
  }

  const mutation = useMutation({
    mutationFn: postProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["products"],
      })
    },
  })

  const onSubmit = (data: any) => {
    mutation.mutate(data)
    alert(data)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="max-h-[550px] min-w-[400px] space-y-8 rounded-lg border-1 p-7 "
      >
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <Title>
              <h2 className="text-2xl font-bold">Add Product</h2>
            </Title>
          </div>
        </div>
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Product Title</FormLabel>
              <FormControl>
                <Input placeholder="Bahamas Short" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Short products description "
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="imageSrc"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image</FormLabel>
              <FormControl>
                <Input type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-between gap-7">
          <Button className="px-7" type="submit">
            Submit
          </Button>

          <Button
            onClick={() => {
              form.reset(INITIAL_FORM_VALUES)
            }}
            className="px-7"
            type="reset"
            variant="outline"
          >
            Clear
          </Button>
        </div>
      </form>
    </Form>
  )
}
