import { Product } from "../models/ProductModel.js";
import { User } from "../models/UserModel.js";
import { Order } from "../models/OrderModel.js";
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


export const createOrder = async (req, res)=>{
    try {
        const {firstname, lastname, email, address, phonenumber, totalPrice, paymentMethod, orderStatus, items} = req.body;
        if(!firstname || !lastname || !email || !address || !phonenumber || !totalPrice || !paymentMethod || !items){
            res.status(422).json({success:false, message: 'Please input all required fields'});
            return
        }

        const order = new Order({
            firstname, 
            lastname, 
            email, 
            address, 
            phonenumber, 
            totalPrice, 
            paymentMethod, 
            orderStatus, 
            items
        });

        await order.save();

        res.status(201).json({success:true, message: 'Order successful'})


    } catch (error) {
        console.log('Error in get products controller: ',error);
        res.status(500).json({success: false, message: "Internal server error"})
    }
}
