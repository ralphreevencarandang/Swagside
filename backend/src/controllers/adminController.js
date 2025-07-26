import { User } from "../models/UserModel.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'
import { Product } from "../models/ProductModel.js";

export const adminLogin = async(req, res)=>{
     try {
        const {email, password} = req.body;

        if(!email || !password){
            res.status(422).json({success:false, message:'Please input your credentials '});
            return
        }

        const user = await User.findOne({email});

        if(!user){
            res.status(404).json({success:false, message:'Account does\'t exists!'});
            return
        }

        const isAdmin = await bcrypt.compare(password, user.password) && user.isAdmin === true;

        if(!isAdmin){
            res.status(404).json({success:false, message:'Incorrect credentials'});
            return
        }

        const token = jwt.sign({
            id:user._id,
            email:user.email,
            isAdmin: user.isAdmin
        },process.env.JWT_SECRET,{expiresIn: '1d'} );

        res.cookie('token', token, {
             httpOnly: true,  
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'none',
            maxAge: 1 * 24 * 60 *60 * 100
        })


        res.status(201).json({success:true, message:'Admin login successfull'})
    
    } catch (error) {
        console.log('Error in create product function: ', error);
        res.status(500).json({success:false, message:'Internal server error'})
    }

}

export const adminLogout = async(req, res)=>{
    try {

        res.clearCookie('token', {
            httpOnly: true,  
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'none',
            maxAge: 1 * 24 * 60 *60 * 100
        })
        res.status(201).json({success:true, message:'Logout successfully'})
    } catch (error) {
        console.log('Error in logout function: ',error);
        res.status(500).json({success:false, message:'Internal server error'})
        
    }
}

export const createProduct = async(req, res)=>{
    try {

        const {name, image, description, category, subCategory, price, size, isBestSeller, stock} = req.body;
        
        if(!name || !image || !description || !category || !subCategory || !price || !size || !isBestSeller || !stock){
            res.status(422).json({success:false, message:'Please input all fields '});
            return
        }

        const newProduct = new Product( {
            name,
            image,
            description,
            category,
            subCategory,
            price,
            size,
            isBestSeller,
            stock
        })

        await newProduct.save();

        res.status(201).json({success: true, message:'Product added successfully'})

    } catch (error) {
        console.log('Error in create product function: ', error);
        res.status(500).json({success:false, message:'Internal server error'})
        
    }
}