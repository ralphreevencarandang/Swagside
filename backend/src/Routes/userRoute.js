import express from 'express';
import { getAllProducts, getProduct, createOrder, getOrder } from '../controllers/userController.js';
import { authenticate } from '../middlewares/authenticate.js';
import { requireUser } from '../middlewares/requireUser.js';

const router = express.Router();

router.get('/user/products',getAllProducts)
router.get('/user/product/:id', getProduct)
router.post('/user/createOrder',authenticate, requireUser, createOrder)
router.get('/user/orders', authenticate, requireUser ,getOrder)



export default router