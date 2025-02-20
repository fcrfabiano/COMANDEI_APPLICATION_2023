import { Order } from '../../models/Order';

export async function cancelOrder(orderId: string) {
  await Order.findByIdAndDelete(orderId);
}
