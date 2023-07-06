"use client"

import React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"

interface ProductCardProps {
  title: string
  description: string
  imageSrc: string
}

export function ProductCard({
  title,
  description,
  imageSrc,
}: ProductCardProps) {
  const { toast } = useToast()
  return (
    <Card className="w-[300px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description} </CardDescription>
      </CardHeader>
      <CardContent>
        <img
          src={imageSrc}
          alt={`${imageSrc.length} `}
          className="rounded-md"
          width={200}
        />
      </CardContent>
      <CardFooter className="flex justify-between">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">View</Button>
          </DialogTrigger>
          <DialogContent
            onCloseAutoFocus={() => true}
            onEscapeKeyDown={() => true}
            className="sm:max-w-[425px] w-96 lg:w-auto h-auto"
          >
            <DialogHeader>
              <DialogTitle>Product Overview</DialogTitle>
              <DialogDescription>
                Thank you for exploring the details of this product! If you have
                any additional questions or need more information, our team will
                be happy to help you.
              </DialogDescription>
            </DialogHeader>
            <img
              src={imageSrc}
              alt={`${imageSrc.length} `}
              className="w-36 rounded-md "
            />
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Size</Label>
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select" />
                      <SelectContent position="popper">
                        <SelectItem value="small">Small</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="fit">Fit</SelectItem>
                        <SelectItem value="large">Large</SelectItem>
                      </SelectContent>
                    </SelectTrigger>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Color</Label>
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select" />
                      <SelectContent position="popper">
                        <SelectItem value="zinc">Zinc</SelectItem>
                        <SelectItem value="sveltekit">Black & White</SelectItem>
                        <SelectItem value="astro">Red Fire</SelectItem>
                        <SelectItem value="nuxt">Blue Ocean</SelectItem>
                      </SelectContent>
                    </SelectTrigger>
                  </Select>
                </div>
              </div>
            </div>
            <Textarea
              className="w-72 lg:w-auto"
              placeholder="Note about your purchase to the seller."
            />
            <DialogFooter>
              <Button type="submit" className="w-24 lg:w-auto">
                Ok
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <Button
          onClick={() => {
            toast({
              title: "Product added to cart! ",
              description:
                "The product has been successfully added to your shopping cart. We hope you enjoy your choice and find everything you need for your exercise routine.",
              action: (
                <ToastAction altText="Continue Exploring">Undo</ToastAction>
              ),
            })
          }}
        >
          Add to cart
        </Button>
      </CardFooter>
    </Card>
  )
}
