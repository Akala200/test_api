/* eslint-disable no-unused-vars */

import { Router } from 'express';
import aggregateController from '../controllers/aggregateController';
import auth from '../middlewares/authMiddleware';

const router = Router();

const {
  orders,
  updateOrder,
  orderById,
  deleteOrder,

} = aggregateController;

router.get('/order_items', auth, orders);
router.get('/order_items/:id', auth, orderById);
router.put('/order_items/:id', auth, updateOrder);
router.delete('/order_items/:id', auth, deleteOrder);


export default router;
