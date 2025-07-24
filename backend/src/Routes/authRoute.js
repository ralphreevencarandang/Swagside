import express from 'express'
import { register } from '../controllers/authController.js';
const router = express.Router();

router.post('/user/register', register)


export default router