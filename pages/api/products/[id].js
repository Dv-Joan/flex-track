import data from "@/data/products.json";
import asyncHandler from "@/pages/libs/async.handler";
import * as fs from 'node:fs'
const path = require('node:path');

const productPath = path.resolve("@/data/products.json");

const controllers = {
  DELETE: asyncHandler(async (req, res) => {
    const { id } = req.query;
    const productId = id

    const newData = data.filter((product) => product.id != productId);

    fs.writeFile(productPath, JSON.stringify(newData), (err) => {
      if (err) {
        console.error(err);
        res
          .status(500)
          .json({ message: "Error al guardar los datos del product" });
      } else {
        res.status(200).json(req.body);
      }
    });
  }),
  /* DELETE: asyncHandler(async (req, res) => {
    const { id } = req.query;
    const document = req.body;
    await deleteDoc(collection(db, "documents", id));
    res.status(200).json(document);
  }), */
};

export default function handler(req, res) {
  const controller = controllers[req.method];
  if (controller) {
    controller(req, res);
  } else {
    res.status(405).json({
      messge: "Method not allowed",
    });
  }
}