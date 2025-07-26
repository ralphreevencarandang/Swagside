
import { User } from '../models/UserModel.js';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken';

export const register = async (req, res)=>{
    try {
        const {name, email, password, isAdmin = false } = req.body;

        if(!name || !email || !password){
            res.status(422).json({success:false, message:'Please input required fields'})
            return
        }

        const existingUser = await User.findOne({email})

        if(existingUser){
            res.status(422).json({success:false, message:'Email already exist!'})
            return
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = new User({
            name,
            email,
            password:hashedPassword,
            isAdmin
        })
        await newUser.save();
        res.status(201).json({success:true, message:'User successfully created!' })

    } catch (error) {
        console.log('Error in register function: ', error);
        res.status(500).json({success: false, message: 'Internal server error'})
        
    }
}

export const login = async (req, res)=>{
    try {
        const {email, password} = req.body;

        if(!email || !password){
            res.status(422).json({success:false, message: 'Please input your credentials'});
            return
        }

        const user = await User.findOne({email});

        if(!user){
            res.status(422).json({success:false, message: 'Account doesn\'t exist'});
            return
        }

        const isMatch = await bcrypt.compare(password, user.password) && user.isAdmin === false;

        if(!isMatch){
            res.status(422).json({success:false, message: 'Incorrect credentials'});
            return
        }

        const token = jwt.sign(
            // Sign the id, role and email
            {
                id:user._id,
                isAdmin: user.isAdmin,
                email: user.email
            }, process.env.JWT_SECRET, {expiresIn: '1d'});

          res.cookie('token', token, {
            httpOnly: true,  
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'none',
            // 1 day in milliseconds
            maxAge: 24 * 60 * 60 * 1000
        })

        res.status(201).json({success:true, message:'Successfully login'})

    } catch (error) {
        console.log('Error in login function: ', error);
        res.status(500).json({success: false, message: 'Internal server error'})
    }
}

export const logout = async (req, res)=>{
    try {

        res.clearCookie('token',{
            httpOnly: true,  
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'none',
            maxAge: 1 * 24 * 60 *60 * 100
        })

        res.status(201).json({success:true, message:'Logout success!'})
        
    } catch (error) {
        console.log('Error in logout function: ', error);
        res.status(500).json({success: false, message: 'Internal server error'})
        
    }
}