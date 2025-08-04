import { Product } from "../models/ProductModel.js";

export const getAllProducts = async(req, res)=>{
    try {
    
        const products = await Product.find()
        if(!products){
            res.status(404).json({success: false, message: 'Products not found'});
        }
        res.status(200).json({success: true, products})
    } catch (error) {
        console.log('Error in get all Products controller: ',error);
        res.status(500).json({success: false, message: "Internal server error"})
        
    }
}