import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name: {type:String, required:true, min:[3, 'Name must be at least 3 characters']},
    email:{type:String, required: true, unique:true},
    password:{type:String, required:true, min:[8, 'Password must be at least 8 characters']},
    isAdmin:{type:Boolean, default:false},
    cart:[{
        productId:{type:Number, required:true},
        quantity:{type:Number, required:true},
    },]
}, {timestamps:true, minimize:false})


export const User = mongoose.model('user',userSchema)