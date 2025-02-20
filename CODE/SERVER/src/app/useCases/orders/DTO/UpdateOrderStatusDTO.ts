export enum OrderStatusDTO {
  WAITING = 'WAITING',
  IN_PRODUCTION = 'IN_PRODUCTION',
  DONE = 'DONE'
}

export interface UpdateOrderStatusDTO {
  orderId: string;
  status: OrderStatusDTO;
}