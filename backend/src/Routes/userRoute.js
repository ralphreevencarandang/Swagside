import express from 'express';
import { getAllProducts } from '../controllers/userController.js';
const router = express.Router();

router.get('/user/products',getAllProducts)


export default router