import { z } from "zod"

export const formSchema = z.object({
  name: z.string().min(3, {
    message: "Product name must be at least 3 characters.",
  }),
  brand: z.string().min(2, {
    message: "Model name must be at least 2 characters.",
  }),
  description: z.string().min(10),
  price: z.number().positive().min(1, {
    message: "Price must be at least 1.",
  }),
  quantity: z
    .number()
    .min(1, {
      message: "Quantity must be at least 1.",
    })
    .max(500, {
      message: "Quantity must be at most 500.",
    }),
  status: z.enum(["pending", "processing", "success", "failed"]),
})
