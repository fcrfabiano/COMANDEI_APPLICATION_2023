import { Category } from '../../models/Category';

export async function listCategories() {
  const categories = await Category.find();

  return categories;
}