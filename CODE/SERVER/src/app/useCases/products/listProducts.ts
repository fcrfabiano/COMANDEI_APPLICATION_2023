import { Product } from '../../models/Product';

export async function listProducts() {
  const products = await Product.find();

  return products;
}
