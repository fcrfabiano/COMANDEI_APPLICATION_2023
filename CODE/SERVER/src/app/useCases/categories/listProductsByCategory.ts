import { Product } from '../../models/Product';

export async function listProductsByCategory(categoryId: string) {
  const products = await Product.find().where('category').equals(categoryId);

  return products;
}