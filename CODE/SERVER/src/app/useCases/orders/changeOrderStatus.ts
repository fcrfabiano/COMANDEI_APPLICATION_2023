import { Order } from '../../models/Order';
import { UpdateOrderStatusDTO } from './DTO/UpdateOrderStatusDTO';

export async function changeOrderStatus({ orderId, status }: UpdateOrderStatusDTO) {
  await Order.findByIdAndUpdate(orderId, { status });
}