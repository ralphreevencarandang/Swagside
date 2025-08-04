import React from 'react'
import { p_img38 } from '../assets/images'
const ProductCard = ({products}) => {
  return (
    <div className=''>
        <img src={`${import.meta.env.VITE_BACKEND_URL}/${products.image}`} alt={products.name} className='object-contain' />
        <p className='font-montserrat py-2'>{products.name}</p>
        <p className='font-oswald'>₱{products.price}</p>
    </div>
  )
}

export default ProductCard
 