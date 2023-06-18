import { NextApiRequest, NextApiResponse } from "next"

import { products } from "../../data/products.json"

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
): void {
  res.status(200).json(products)
}
