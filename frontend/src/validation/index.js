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