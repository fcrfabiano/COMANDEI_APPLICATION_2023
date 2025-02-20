export interface ProductOrderDTO {
  product: string;
  quantity: number;
}

export interface CreateOrderDTO {
  table: string;
  products: ProductOrderDTO[];
}