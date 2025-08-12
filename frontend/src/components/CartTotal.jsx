import React from 'react'
import { Link } from 'react-router'
import Button from './Button'
import { useCartStore } from '../store/cart-store'
const CartTotal = () => {
        const {totalPrice, shippingFee, subTotal } = useCartStore()
    
  return (
    <div className='my-10'>
            <h1 className='font-montserrat text-2xl'>CART TOTALS</h1>
            <div className='flex flex-col gap-2 mb-10'>
                <div className='flex justify-between font-montserrat text-sm'>
                    <p>Subtotal</p>
                    <p>₱{subTotal.toFixed(2)}</p>
                </div>
                <div className='flex justify-between font-montserrat text-sm'>

                    <p>Shipping Fee</p>
                    <p>₱ {shippingFee.toFixed(2)}</p>
                </div>
                <div className='flex justify-between font-montserrat text-sm font-bold'>
                    <p>Total</p>
                    <p>₱{totalPrice.toFixed(2) }</p>
                </div>
            </div>
        </div>
  )
}

export default CartTotal
