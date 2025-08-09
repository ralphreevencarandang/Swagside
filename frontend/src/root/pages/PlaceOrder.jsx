import React from 'react'
import { Formik, Form, Field } from 'formik'
import CartTotal from '../../components/CartTotal'
import { razorpay, stripe_logo } from '../../assets/images'
import {toast} from 'react-toastify'
import { checkoutSchema } from '../../validation'
import TextField from '../../components/forms/delivery/TextField'
import { Link } from 'react-router'
import Button from '../../components/Button'
const PlaceOrder = () => {
  return (
    <section className='pt-25 '>
        <h1 className='font-montserrat text-2xl mb-4'>DELIVERY INFORMATION</h1>

            <Formik initialValues={{firstname: '', lastname:'', email: '', street:'', city: '', state: '', zipcode:'', country:'', phonenumber: ''}} 
            validationSchema={checkoutSchema}
            onSubmit={(values,actions)=>{
                console.log('Values: ', values);
                console.log('Actions: ', actions);
                
            }}
            >
                {(props)=>
                    <Form>
                        <div className='flex flex-col gap-3 w-full font-inter  text-slate-700'>
                            <div className='flex justify-between gap-3'>
                                <TextField type="text" name='firstname'  placeholder='First name'/>
                                <TextField type="text" name='lastname'  placeholder='Last name'/>
                            </div>
                            <TextField type="text" name='email'  placeholder='Email address'/>
                            <TextField type="text" name='street'  placeholder='Street'/>
                            <div className='flex justify-between gap-3'>
                                <TextField type="text" name='city'  placeholder='City'/>
                                <TextField type="text" name='state'  placeholder='State'/>
                            </div>
                            <div className='flex justify-between gap-3'>
                                <TextField type="text" name='zipcode'  placeholder='Zipcode'/>
                                <TextField type="text" name='country'  placeholder='Country'/>
                            </div>
                            <TextField type="text" name='phonenumber'  placeholder='+63 - 09'/>

                        </div>
                            
           
            <div>
                
                <div>
                    <h1 className='font-montserrat text-2xl py-5'>PAYMENT METHOD</h1>
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
                 <div className='text-end'>
                        <Button type={'submit'} label={'PROCEED TO CHECKOUT'}/>
                </div>
            </div>
                     </Form>
                    
                }
            </Formik>
    </section>
  )
}

export default PlaceOrder
