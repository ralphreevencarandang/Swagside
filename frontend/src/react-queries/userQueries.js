
import { toast } from "react-toastify";
import axios from '../lib/axios'
import { mutationOptions, queryOptions } from "@tanstack/react-query";

const getAllProducts = async ()=>{
    try {
        const res = await axios.get('/user/products');
        console.log(res.data);
        return res.data
        
    } catch (error) {
        console.log('Error in get all products function: ', error);
        toast.error(error.response.data.message)
        throw error; 
    }
}

export const getAllProductsOptions = queryOptions({
    queryKey: ['products'],
    queryFn: getAllProducts
})