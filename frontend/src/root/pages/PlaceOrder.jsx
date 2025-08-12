import React from 'react'
import { Formik, Form, Field } from 'formik'
import CartTotal from '../../components/CartTotal'
import { razorpay, stripe_logo } from '../../assets/images'
import {toast} from 'react-toastify'
import { checkoutSchema } from '../../validation'
import TextField from '../../components/forms/delivery/TextField'
import { Link } from 'react-router'
import Button from '../../components/Button'
import { useCartStore } from '../../store/cart-store'
import { useMutation } from '@tanstack/react-query'
import { createOrderOptions } from '../../react-queries/userQueries'
const PlaceOrder = () => {

    const {cart, totalPrice} = useCartStore();
    // console.log(cart);
    // console.log(totalPrice);

    const createOrderMutation = useMutation(createOrderOptions)
    
  return (
    <section className='pt-25 '>

            <Formik initialValues={{
                firstname: '', 
                lastname:'', 
                email: '', 
                address: {
                    street:'', 
                    city: '', 
                    state: '', 
                    zipcode:'', 
                    country:'', 
                },
                phonenumber: '',
                totalPrice: totalPrice,
                paymentMethod: 'COD',
                items: cart.map((item) => ({
                    productId: item._id,
                    name: item.name,
                    size: item.size,
                    quantity: item.quantity

                }))
                
            }} 
            validationSchema={checkoutSchema}
            onSubmit={(values,actions)=>{
                console.log('Values: ', values);
         
                
                // console.log('Actions: ', actions);
                if(cart.length <= 0){
                    toast.error('Your cart is empty!');
                    return
                }
                createOrderMutation.mutate(values)
            }}
            >
                {(props)=>
                    <Form className='flex flex-col lg:flex-row lg:justify-between  '>
                        
                        <div className='flex flex-col gap-3 font-inter  text-slate-700 '>
                            <h1 className='font-montserrat text-2xl mb-4'>DELIVERY INFORMATION</h1>
                            
                            <div className='flex justify-between gap-3'>
                                <TextField type="text" name='firstname'  placeholder='First name'/>
                                <TextField type="text" name='lastname'  placeholder='Last name'/>
                            </div>
                            <TextField type="text" name='email'  placeholder='Email address'/>
                            <TextField type="text" name='address.street'  placeholder='Street'/>
                            <div className='flex justify-between gap-3'>
                                <TextField type="text" name='address.city'  placeholder='City'/>
                                <TextField type="text" name='address.state'  placeholder='State'/>
                            </div>
                            <div className='flex justify-between gap-3'>
                                <TextField type="text" name='address.zipcode'  placeholder='Zipcode'/>
                                <TextField type="text" name='address.country'  placeholder='Country'/>
                            </div>
                            <TextField type="text" name='phonenumber'  placeholder='+63 - 09'/>

                        </div>
                            
           
                        <div className=' lg:w-1/2 ' >
                                <div>
                                    <h1 className='font-montserrat text-2xl max-lg:pt-5  mb-4'>PAYMENT METHOD</h1>
                                    <div className='flex flex-col gap-2'>
                                        <button className='border border-slate-200 py-2 flex items-center gap-5 pl-3'
                                        onClick={()=> toast.warn('Stripe is disabled, use COD')}
                                        
                                        >
                                            <p className='border  border-slate-300 w-3.5 h-3.5 rounded-full '></p>
                                            <img src={stripe_logo} alt="Stripe Logo" className='w-12'/></button>
                                        <button className='border border-slate-200 py-2 flex items-center gap-5 pl-3'
                                        onClick={()=> toast.warn('Razorpay is disabled, use COD')}
                                        >
                                            <p className='border  border-slate-300 w-3.5 h-3.5 rounded-full '></p>
                                            <img src={razorpay} alt="Razorpay Logo" className='w-25'/>
                                        </button>
                                        <button className='border border-slate-200 py-2 flex items-center gap-5 pl-3 font-montserrat'>
                                            <p className='bg-green-500 w-3.5 h-3.5 rounded-full '></p>
                                            <p className='text-slate-500'>CASH ON DELIVERY</p>
                                        </button>
                                    </div>
                                </div>

                                <CartTotal/>

                                <div className='text-end mb-10'>
                                        <Button type={'submit'} label={'PROCEED TO CHECKOUT'} disabled={createOrderMutation.isPending} />
                                </div>
                        </div>
                     </Form>
                }
            </Formik>

    </section>
  )
}

export default PlaceOrder
