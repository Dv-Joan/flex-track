import data from '@/data/products.json'
import asyncHandler from '@/pages/libs/async.handler';
import fs from "fs";
import path from "path";

const productPath = path.resolve("@/data/products.json");

const controllers = {
  GET: asyncHandler(async (req, res) => {
    res.status(200).json(data);
  }),
  POST: asyncHandler(async (req, res) => {
    const newProduct = req.body;
    data.push(newProduct);

    fs.writeFile(productPath, JSON.stringify(data), (err) => {
      if (err) {
        console.error(err);
        res
          .status(500)
          .json({ message: "Error al guardar los datos del producto" });
      } else {
        res.status(201).json({ message: "Producto agregado exitosamente" });
      }
    });
  }),
  PATCH: asyncHandler(async (req, res) => {
    const productModified = req.body;
    const productId = productModified.id;

    const newData = data.map((product) => {
      if (product.id === productId) {
        return {
          ...product,
          ...productModified,
        };
      }
      return product;
    });

    fs.writeFile(productPath, JSON.stringify(newData), (err) => {
      if (err) {
        console.error(err);
        res
          .status(500)
          .json({ message: "Error al guardar los datos del producto" });
      } else {
        res.status(200).json({ message: "Producto modificado exitosamente" });
      }
    });
  })
};

export default function handler(req, res) {
  const controller = controllers[req.method];

  if (controller) {
    controller(req, res);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}


