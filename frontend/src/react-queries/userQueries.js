
import { toast } from "react-toastify";
import axios from '../lib/axios'
import { mutationOptions, queryOptions } from "@tanstack/react-query";

const login = async (values)=>{
    try {
        const res = await axios.post('/user/login', values)
        res.data.success && toast.success('Login successful!')
    } catch (error) {
        console.log('Error in login function: ', error);
        toast.error(error.response.data.message)
        throw error; 
    }
}
const getAllProducts = async ()=>{
    try {
        const res = await axios.get('/user/products');
        // console.log(res.data);
        return res.data
        
    } catch (error) {
        console.log('Error in get all products function: ', error);
        toast.error(error.response.data.message)
        throw error; 
    }
}

const getProduct = async (id)=>{
    try {

        const res = await axios.get(`/user/product/${id}`)
        // console.log(res.data);
        return res.data
        
        
    } catch (error) {
        console.log('Error in get all products function: ', error);
        toast.error(error.response.data.message)
        throw error; 
    }    
}

const createOrder = async (values)=>{
    try {

        const res = await axios.post('/user/createOrder', values)
        res.data.success && toast.success('Order successful!')

        
    } catch (error) {
        console.log('Error in Create order function: ', error);
        toast.error(error.response.data.message)
        throw error; 
    }
}

export const getAllProductsOptions = queryOptions({
    queryKey: ['products'],
    queryFn: getAllProducts
})

export const loginOptions = mutationOptions({
    mutationFn: login,
    onError: (error)=>{
        console.log('Error in login mutations: ',error);
        
    }
})

export const getProductOptions = (id)=>({
      queryKey: ['product', id],
        queryFn: () => getProduct(id),
})

export const createOrderOptions = mutationOptions({
    mutationFn: createOrder,
    onError: (error)=>{
        console.log('Error in login mutations: ',error);
        
    }
})

