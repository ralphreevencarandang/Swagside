import { queryOptions } from "@tanstack/react-query";
import { toast } from "react-toastify";
import axios from '../lib/axios'
import { mutationOptions } from "@tanstack/react-query";


const signIn = async (values) => {
    try {
        const res = await axios.post('/admin/login', values)
        toast.success('Login Successful')
    } catch (error) {
        console.log('Error in Sign in function: ',error);
        toast.error(error.response.data.message)
        throw error; 
    }
}

export const signinQuery = mutationOptions({
        mutationFn: signIn,
        onError: (error)=>{
            console.log('Error in mutaion: ', error);
        }
})










