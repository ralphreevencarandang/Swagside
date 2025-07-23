import React from 'react'
import { p_img38 } from '../assets/images'
const ProductCard = ({product}) => {
  return (
    <div className=''>
        <img src={p_img38} alt="Product Image" className='object-contain' />
        <p className='font-montserrat py-2'>Boy Round Neck Pure Cotton T-shirt</p>
        <p className='font-oswald'>₱60</p>
    </div>
  )
}

export default ProductCard
 