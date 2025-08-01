import * as yup from 'yup';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/

export const signinSchema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email field is required'),
    password: yup.string().required('Password field is required')
})


export const signupSchema =  yup.object().shape({
    name: yup.string().min(3, 'Name must be at least 3 characters'),
    email: yup.string().email('Invalid email').required('Email field is required'),
    password: yup.string().min(8, 'Password must be at least 8 characters long').matches(passwordRules,{message: 'Please create a stronger password'}).required('Password field is required'),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'Password doesn\'t match').required('Confirm password field is requierd')
})

export const createProductSchema = yup.object().shape({
    name:yup.string().min(3, 'Name must be at least 3 characters').required('Name field is required'),
    description: yup.string().min(4, 'Description must be at least 4 characters').required('Description field is required'),
    price: yup.number().min(1, 'Price must be greater than zero').required('Price field is required'),
    category: yup.string().oneOf(["Men", "Women", "Kids"], 'Please Select Category').required('Category field is required'),
    subCategory: yup.string().oneOf(["Topwear", "Bottomwear", "Winterwear"], "Please select sub category").required('Sub category field is required'),
    stock: yup.number().min(1, 'Stock must be greater than zero').required('Stock field is required'),
    size: yup.array().min(1, 'Please select sizes').required('Size field is required'),
    image:yup.string().required('Please upload image')
})