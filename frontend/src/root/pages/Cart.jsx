import React from 'react'
import CartTable from '../../components/CartTable'
import { useCartStore } from '../../store/cart-store'
const Cart = () => {
    const {cart} = useCartStore()
        console.log('Cart Table:  ',cart);
  return (
    <section className='pt-25'>
        <h1>YOUR CART</h1>
        {cart.length > 0 ?   
        ( 
            cart.map((product, index)=>
                <div key={index}>
                    <CartTable product={product}/>
                </div>
            )
        ) : 
        <p>Empty Cart</p>}
      
        
 
    </section>
  )
}

export default Cart
