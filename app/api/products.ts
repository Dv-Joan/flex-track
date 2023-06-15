import fs from "fs"
import path from "path"
import { NextApiRequest, NextApiResponse } from "next"

const dbPath = path.join(__dirname, "./../../data/products.json")

const productsApi = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { name, brand, description, price, quantity, status } = req.body
    const newProduct = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      brand,
      description,
      price,
      quantity,
      status,
    }

    const db = JSON.parse(fs.readFileSync(dbPath, "utf8"))
    db.products.push(newProduct)
    fs.writeFileSync(dbPath, JSON.stringify(db))

    return res
      .status(200)
      .json({ message: "Product added", product: newProduct })
  }
}

module.exports = productsApi
