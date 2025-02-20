import { Request, Response } from 'express';

import { listCategories } from '../useCases/categories/listCategories';
import { createCategory } from '../useCases/categories/createCategory';
import { listProductsByCategory } from '../useCases/categories/listProductsByCategory';

export const categoriesController = {
  listCategories: async (req: Request, res: Response) => {
    const categories = await listCategories();

    return res.status(200).json(categories);
  },
  createCategory: async (req: Request, res: Response) => {
    const { name, icon } = req.body;

    const category = await createCategory({ name, icon });

    return res.status(201).json(category);
  },
  listProductsByCategory: async (req: Request, res: Response) => {
    const { categoryId } = req.params;

    const products = await listProductsByCategory(categoryId);

    return res.status(200).json(products);
  }
};