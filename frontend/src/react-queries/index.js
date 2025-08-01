import { queryOptions } from "@tanstack/react-query";
import { toast } from "react-toastify";
import axios from '../lib/axios'
import { mutationOptions } from "@tanstack/react-query";
import { useNavigate } from "react-router";

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

const logout = async ()=>{


    try {
        const res = await axios.post('/admin/logout')
        res.data.success && toast.success(res.data.message)
        console.log('Logout submiited');
        
 

    } catch (error) {
        console.log('Error in logout function', error);
        toast.error(error.response.data.message)
        throw error; 
    }
}

const createProduct = async(values)=>{
    try {
        // Convert Formik values to FormData
        const formData = new FormData();

        // Append all form fields
        formData.append('name', values.name);
        formData.append('description', values.description);
        formData.append('category', values.category);
        formData.append('subCategory', values.subCategory);
        formData.append('price', values.price);
        formData.append('stock', values.stock);
        formData.append('size', JSON.stringify(values.size)); // Convert array to JSON string
        formData.append('isBestSeller', values.isBestSeller);
        
        // Append the image file
        if (values.image) {
            formData.append('image', values.image); // This should be the File object
        }

        const res = await axios.post('/admin/addProduct', formData, {
            headers: {
                'Content-Type': 'multipart/form-data' // Important for file uploads
            }
        });
        
        res.data.success && toast.success(res.data.message);
        return res.data; // Return data for React Query
    } catch (error) {
        console.log('Error in create product function: ', error);   
        toast.error(error.response.data.message)
        throw error; 
        
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


export const logoutQuery = mutationOptions({
    mutationFn: logout,
     onError: (error)=>{
        console.log('Error in Create Product mutation: ', error);
    }

})







