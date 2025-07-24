import mongoose from 'mongoose'
import dotenv from 'dotenv';
dotenv.config();
export const connectDB = async ()=>{

    try {
        await mongoose.connect(process.env.MONGOOSE_CONNECTION_STRING);
        console.log('DATABASE CONNECTED!');
    } catch (error) {
        console.log('Error Connecting Database: ', error);
        
    }
}