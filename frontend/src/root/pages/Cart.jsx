import React from 'react'
import CartTable from '../../components/CartTable'
import { useCartStore } from '../../store/cart-store'
import Button from '../../components/Button'
import { Link } from 'react-router'
import CartTotal from '../../components/CartTotal'
const Cart = () => {
    const {cart } = useCartStore()
      
  return (
    <section className='pt-25'>
     
        <h1 className='font-montserrat text-4xl mb-4'>Your Cart</h1>

        {cart.length > 0 ?   
        ( 
            <div>
                { cart.map((product, index)=>
                <div key={index}>
                    <CartTable product={product}/>
                    
                </div>
            )}
                 <CartTotal/>
                <div className='text-end'>
                    <Link to={'/place-order'}><Button label={'PROCEED TO CHECKOUT'}/></Link>
                </div>
            </div>
           
        ) : 
         <h1 className='font-oswald text-2xl mb-4'>Your cart is empty ☺ </h1>}
        

        
      
        
 
    </section>
  )
}

export default Cart
