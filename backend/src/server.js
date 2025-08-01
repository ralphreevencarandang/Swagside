import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { connectDB } from './config/db.js';
import authRoute from '../src/Routes/authRoute.js'
import adminRoute from '../src/Routes/adminRoute.js'
dotenv.config();

await connectDB();
const app = express();
const PORT = process.env.PORT || 5001;

app.use(cookieParser())

app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true,
    methods: ['GET', 'POST', 'DELETE', 'PUT', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
}))

app.use(express.json());

app.use('/uploads', express.static('src/uploads'));
app.use('/api',authRoute);
app.use('/api',adminRoute);





app.listen(PORT, ()=>{ 
    console.log(`This server is running on http://localhost:${PORT}`);
    
})