import { queryOptions } from "@tanstack/react-query";
import { toast } from "react-toastify";
import axios from '../lib/axios'
import { mutationOptions } from "@tanstack/react-query";


const signIn = async (values) => {
    try {
        const res = await axios.post('/admin/login', values)
        res.data.success && toast.success(res.data.message)
    } catch (error) {
        console.log('Error in Sign in function: ',error);
        toast.error(error.response.data.message)
        throw error; 
    }
}

const signUp = async (values) => {
    try {
        const res = await axios.post('/user/register', values)
        res.data.success && toast.success(res.data.message)
    } catch (error) {
        console.log('Error in sign up function');
        toast.error(error.response.data.message)
        throw error; 
    }
}

const createProduct = async(values)=>{
    try {
        const res = await axios.post('/admin/addProduct', values)
        res.data.success && toast.success(res.data.message)
    
    } catch (error) {
        console.log('Error in create product function: ', error);   
        toast.error(error.response.data.message)
        
    }
}   

export const signinQuery = mutationOptions({
        mutationFn: signIn,
        onError: (error)=>{
            console.log('Error in sign in mutaion: ', error);
        }
});

export const signupQuery = mutationOptions({
    mutationFn: signUp,
    onError: (error)=>{
        console.log('Error in sign up mutation: ', error);
        
    }
});


export const createProductQuery = mutationOptions({
    mutationFn: createProduct,
    onError: (error)=>{
        console.log('Error in Create Product mutation: ', error);
    }
})








