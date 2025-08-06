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

export const getProduct = async(req,res)=>{
    try {
        const {id} = req.params;

        if(!id){
            res.status(404).json({success:false, message:"Product ID not found"});
            return
        }

        const product = await Product.findById(id)

        if(!product){
            res.status(404).json({success:false, message:"Product not found"});
            return
        }

        res.status(200).json({success: true, product})

    } catch (error) {
        console.log('Error in get products controller: ',error);
        res.status(500).json({success: false, message: "Internal server error"})
    }
}

