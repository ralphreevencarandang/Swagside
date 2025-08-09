import * as yup from 'yup';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
const phonenumberRules = /^(09|\+639)\d{9}$/;
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

export const checkoutSchema = yup.object().shape({
    firstname: yup.string().min(2, 'First must be at least 2 characters').required('Name field is required'),
    lastname: yup.string().min(2, 'First must be at least 2 characters').required('Lastname field is required'),
    email: yup.string().email('Invalid email').required('Email field si required'),
    street: yup.string().required('Street field is required'),
    city: yup.string().required('City field is required'),
    state: yup.string().required('State field is required'),
    zipcode: yup.number().required('Zipcode field is required'),
    country: yup.string().required('Country field is required'),
    phonenumber: yup.string().matches(phonenumberRules, {message: 'Please input valid phonenumber'}).required('Phonenumber field is required'),
})