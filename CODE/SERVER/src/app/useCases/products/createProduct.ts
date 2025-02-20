import { Product } from '../../models/Product';
import { CreateProductDTO } from './DTO/CreateProductDTO';


export async function createProduct({
  name,
  description,
  imagePath,
  price,
  ingredients,
  category,
}: CreateProductDTO) {
  const product = await Product.create({
    name,
    description,
    imagePath,
    price,
    ingredients: ingredients ? JSON.parse(ingredients) : [],
    category,
  });

  return product;
}
