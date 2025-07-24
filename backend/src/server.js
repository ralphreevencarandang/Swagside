import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { connectDB } from './config/db.js';
import authRoute from '../src/Routes/authRoute.js'
dotenv.config();

await connectDB();
const app = express();
const PORT = process.env.PORT || 5001;

app.use(cookieParser())

app.use(cors({
    origin: [''],
    allowedHeaders: '',
    credentials: true,
}))

app.use(express.json());

app.use(authRoute)





app.listen(PORT, ()=>{ 
    console.log(`This server is running on http://localhost:${PORT}`);
    
})