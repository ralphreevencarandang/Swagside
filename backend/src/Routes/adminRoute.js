import express from 'express'
import { adminLogin, adminLogout, createProduct } from '../controllers/adminController.js'
import { authenticate } from '../middlewares/authenticate.js';
import { requireAdmin } from '../middlewares/requireAdmin.js';

const router = express.Router()

router.post('/admin/login', adminLogin);
router.post('/admin/logout', adminLogout);
router.post('/admin/addProduct',authenticate,requireAdmin ,createProduct);

export default router