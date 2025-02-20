import { Schema } from 'mongoose';

export interface CreateProductDTO {
  name: string;
  description: string;
  imagePath: string;
  price: number;
  ingredients: string;
  category: Schema.Types.ObjectId;
}
