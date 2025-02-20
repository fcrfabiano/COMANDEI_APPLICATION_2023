import { Request, Response } from 'express';

import { createProduct } from '../useCases/products/createProduct';
import { listProducts } from '../useCases/products/listProducts';

import { CreateProductDTO } from '../useCases/products/DTO/CreateProductDTO';

export const productsController = {
  listProducts: async (req: Request, res: Response) => {
    const products = await listProducts();

    return res.status(200).json(products);
  },
  createProduct: async (req: Request, res: Response) => {
    const imagePath = req.file?.filename;
    const { name, description, price, ingredients, category } = req.body;
    const product = await createProduct({
      name,
      description,
      price: Number(price),
      ingredients,
      imagePath,
      category,
    } as CreateProductDTO);

    return res.status(201).json(product);
  },
};
