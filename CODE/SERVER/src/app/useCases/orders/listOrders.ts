import { Order } from '../../models/Order';

export async function listOrders() {
  const orders = await Order.find()
    .sort({ createdAt: 1 })
    .populate('products.product');

  return orders;
}
