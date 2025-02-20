import { Request, Response } from 'express';

import { AppError } from '../errors/AppError';

import { listOrders } from '../useCases/orders/listOrders';
import { createOrder } from '../useCases/orders/createOrder';
import { changeOrderStatus } from '../useCases/orders/changeOrderStatus';
import { cancelOrder } from '../useCases/orders/cancelOrder';

export const ordersController = {
  listOrders: async (req: Request, res: Response) => {
    const orders = await listOrders();

    return res.status(200).json(orders);
  },
  createOrder: async (req: Request, res: Response) => {
    const { table, products } = req.body;

    const order = await createOrder({ table, products });

    return res.status(201).json(order);
  },
  changeOrderStatus: async (req: Request, res: Response) => {
    const { orderId } = req.params;
    const { status } = req.body;

    if (!['WAITING', 'IN_PRODUCTION', 'DONE'].includes(status)) {
      throw new AppError(
        'Status should be one of these: "WAITING", "IN_PRODUCTION", "DONE"'
      );
    }

    await changeOrderStatus({ orderId, status });

    return res.sendStatus(204);
  },
  cancelOrder: async (req: Request, res: Response) => {
    const { orderId } = req.params;

    await cancelOrder(orderId);

    return res.sendStatus(204);
  }
};
