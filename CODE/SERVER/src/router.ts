import { Router } from 'express';
import multer from 'multer';
import path from 'node:path';
import fs from 'fs';

import { categoriesController } from './app/controllers/categoriesController';
import { ordersController } from './app/controllers/ordersController';
import { productsController } from './app/controllers/productsController';

const uploadDir = path.join(__dirname, 'public', 'uploads');

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(_req, _file, callback) {
      callback(null, uploadDir);
    },
    filename(_req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});

// const upload = multer({ dest: path.resolve(__dirname, '..', 'uploads') });

// List Categories
router.get('/categories', categoriesController.listCategories);

// Create Category
router.post('/categories', categoriesController.createCategory);

// List Products
router.get('/products', productsController.listProducts);

// Create Product
router.post('/products', upload.single('image'), productsController.createProduct);

// Get Products By Category
router.get('/categories/:categoryId/products', categoriesController.listProductsByCategory);

// List Orders
router.get('/orders', ordersController.listOrders);

// Create Order
router.post('/orders', ordersController.createOrder);

// Change Order Status
router.patch('/orders/:orderId', ordersController.changeOrderStatus);

// Delete/Cancel order
router.delete('/orders/:orderId', ordersController.cancelOrder);
