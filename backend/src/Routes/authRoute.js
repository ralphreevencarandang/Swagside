import express from 'express'
import { register, login, logout } from '../controllers/authController.js';
import { userAuth } from '../middlewares/userAuth.js';
const router = express.Router();

router.post('/user/register', register)
router.post('/user/login', login)
router.post('/user/logout', logout)


export default router