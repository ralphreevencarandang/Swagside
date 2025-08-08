import React from 'react'
import { Trash2 } from 'lucide-react'
import { useCartStore } from '../store/cart-store'
const CartTable = ({product}) => {

    const {removeToCart, updateQuantity} = useCartStore()
    
  return (
    <div >

            <div className='flex gap-4 my-3 border-b border-slate-200 pb-3'>
                 <img src={`${import.meta.env.VITE_BACKEND_URL}/${product.image}`} alt="Product Image" className='w-20 object-contain' />
    
                <div className='w-full font-montserrat'>
                    <p className=' text-sm'>{product.name}</p>
                    <div className='flex items-center justify-between mt-4  '>
                            <p>₱{product.price}</p>
                            <p className='border border-slate-300 px-2 py-1'>{product.size}</p>
                            <input type="number"  value={product.quantity}  className='border border-slate-300 py-1 px-1 max-w-10 text-center'   
                            onChange={(e) => updateQuantity(product._id, e.target.value)   } />
                             
                         
                            <button onClick={()=> removeToCart(product._id)}>
                                <Trash2 className='text-slate-600' />

                            </button>
                    </div>
                </div>

            </div>
        
       
</div>
  )
}

export default CartTable
