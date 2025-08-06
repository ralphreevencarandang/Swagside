import express from 'express';
import { getAllProducts, getProduct } from '../controllers/userController.js';

const router = express.Router();

router.get('/user/products',getAllProducts)
router.get('/user/product/:id', getProduct)


export default router