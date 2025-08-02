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
            secure: true,
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
            secure: true,
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

        const {name, description, category, subCategory, price, size, stock, isBestSeller} = req.body;
        
        if(!name  || !description || !category || !subCategory || !price || !size  || !stock){
            res.status(422).json({success:false, message:'Please input all fields '});
            return
        }

        const parseSize = JSON.parse(size)
        const imagePaths = req.file.path;


        const newProduct = new Product( {
            name,
            image: imagePaths, 
            description,
            category,
            subCategory,
            price,
            size: parseSize,
            stock,
            isBestSeller
        })

        await newProduct.save();

        res.status(201).json({success: true, message:'Product added successfully'})

    } catch (error) {
        console.log('Error in create product function: ', error);
        res.status(500).json({success:false, message:'Internal server error'})
        
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const {id} = req.params;

        if(!id){
            res.status(400).json({success: false, message:'Product not found'});
            return
        }
        await Product.findByIdAndDelete(id)
        res.status(201).json({success:true, message: 'Product deleted successfully'})
    } catch (error) {
        console.log('Error in delete product function: ', error);
        res.status(500).json({success:false, message:'Internal server error'})
    }
}

export const updateProduct = async (req, res) => {
    try {
        const {id} = req.params
        const { name, image, description, category, subCategory, price, size, isBestSeller, stock} = req.body;

        if(!id){
            res.status(400).json({success: false, message:'Please provide product id'});
            return
        }
        if(!name  || !description || !category || !subCategory || !price || !size  || !stock){
            res.status(422).json({success:false, message:'Please input all fields '});
            return
        }

        const parseSize = JSON.parse(size)

        const product = await Product.findById(id)

        if(!product){
            res.status(400).json({success: false, message:'Product not found'});
            return
        }
        const imagePaths = req.file ? req.file.path : product.image;

        const newProduct = {
            name:name,
            image: imagePaths,
            description,
            category,
            subCategory,
            price,
            size: parseSize,
            isBestSeller,
            stock
        }

        await Product.findByIdAndUpdate(id, newProduct)
        res.status(201).json({success:true, message: 'Product updated successfully'})
        
    } catch (error) {
        console.log('Error in update product funtion: ', error);
        res.status(500).json({success:false, message:'Internal server error'})
        
    }
}

export const getAllProduct = async (req, res) => {
    try {

        const products = await Product.find();

        res.status(200).json({success:true, products})
        
    } catch (error) {
        console.log('Error in get all product function: ', error);
        res.status(500).json({success:false, message:'Internal server error'})
        
    }
}

export const getProduct = async (req, res) => {
    try {
        const {id} = req.params;


        const product = await Product.findById(id);

        if(!product){
            res.status(404).json({success:false, message:'Product not found'})
            return
        }
        res.status(200).json({success:true, product})
    } catch (error) {
        console.log('Error in get product function: ', error);
        res.status(500).json({success:false, message:'Internal server error'})
        
    }
}