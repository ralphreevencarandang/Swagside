import express from 'express'
import { User } from '../models/UserModel.js';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken';

export const register = async (req, res)=>{
    try {
        const {name, email, password } = req.body;

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
            password:hashedPassword
        })
        await newUser.save();
        res.status(201).json({success:true, message:'User successfully created!' })

    } catch (error) {
        console.log('Error in register function: ', error);
        res.status(500).json({success: false, message: 'Internal server error'})
        
    }
}