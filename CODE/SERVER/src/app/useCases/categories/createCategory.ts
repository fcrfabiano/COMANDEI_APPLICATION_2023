import { Category } from '../../models/Category';
import { CreateCategoryDTO } from './DTO/CreateCategoryDTO';

export async function createCategory({ name, icon }: CreateCategoryDTO) {
  const category = await Category.create({
    name,
    icon
  });

  return category;
}
