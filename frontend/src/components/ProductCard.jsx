import React from 'react'
import { p_img38 } from '../assets/images'
const ProductCard = ({products}) => {
  return (
    <div className='flex flex-col'>
        <img src={`${import.meta.env.VITE_BACKEND_URL}/${products.image}`} alt={products.name} className='object-contain' />
        <p className='font-montserrat py-2 flex-1'>{products.name}</p>
        <p className='font-oswald'>₱{products.price}.00</p>
    </div>
  )
}

export default ProductCard
 