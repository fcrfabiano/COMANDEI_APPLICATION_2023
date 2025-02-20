import { io } from '../../..';
import { Order } from '../../models/Order';
import { CreateOrderDTO } from './DTO/CreateOrderDTO';

export async function createOrder({ table, products }: CreateOrderDTO) {
  const order = await Order.create({
    table,
    products,
  });
  const orderDetails = await order.populate('products.product');

  io.emit('order@new', orderDetails);

  return order;
}
