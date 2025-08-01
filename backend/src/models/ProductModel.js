import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{type:String, required:true, min:[3, 'Product name must be at least 3 characters']},
    image:{type:String, required:true},
    description:{type:String, required:true, min:[4, 'Product description must be at least 4 characters']},
    category: {type:String, required:true},
    subCategory: {type:String, required:true},
    price:{type:Number, required:true, min:[1, 'Product price must be greater than zero']},
    size:[String],
    isBestSeller:{type:Boolean , default:false},
    stock:{type:Number, required:true, min:[1, 'Product stock must be greater than zero']},
}, {timestamps:true, minimize:false})

export const Product = mongoose.model('product', productSchema)