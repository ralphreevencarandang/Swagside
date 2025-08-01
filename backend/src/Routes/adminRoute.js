import express from 'express'
import { adminLogin, adminLogout, createProduct, deleteProduct, updateProduct, getAllProduct, getProduct } from '../controllers/adminController.js'
import { authenticate } from '../middlewares/authenticate.js';
import { requireAdmin } from '../middlewares/requireAdmin.js';
import { upload } from '../config/multer.js';
const router = express.Router()

router.post('/admin/login', adminLogin);
router.post('/admin/logout', adminLogout);
router.post('/admin/addProduct',upload.single('image') ,authenticate,requireAdmin ,createProduct);
router.delete('/admin/deleteProduct/:id',authenticate,requireAdmin ,deleteProduct);
router.put('/admin/updateProduct',authenticate,requireAdmin ,updateProduct);
router.get('/admin/products',authenticate,requireAdmin ,getAllProduct);
router.get('/admin/product/:id',authenticate,requireAdmin ,getProduct);

export default router