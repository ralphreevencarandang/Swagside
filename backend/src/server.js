import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import { connectDB } from './config/db.js';
import authRoute from '../src/Routes/authRoute.js'
dotenv.config();

await connectDB();
const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors())
app.use(express.json());

app.use(authRoute)





app.listen(PORT, ()=>{ 
    console.log(`This server is running on http://localhost:${PORT}`);
    
})