import React from 'react'
import Button from '../../components/Button'
import { useParams } from 'react-router'
import { useQueries, useQuery } from '@tanstack/react-query'
import { getProductOptions } from '../../react-queries/userQueries'
import { star_icon, star_dull_icon } from '../../assets/images'
import ProductCard from '../../components/ProductCard'
import { getAllProductsOptions } from '../../react-queries/userQueries'
import { useCartStore } from '../../store/cart-store'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { useAuthStore } from '../../store/authStore'
import { useNavigate } from 'react-router'
const Product = () => {
  
  const {id} = useParams();
  const [result1, result2] = useQueries({queries:[getProductOptions(id), getAllProductsOptions]})
   const navigate = useNavigate();
  const [size, setSize] = useState('')
  const [quantity, setQuantity] = useState(1)
  const { cart, addToCart} = useCartStore();

  const {isUserLoggedIn} = useAuthStore();

  const handleAddToCart = ()=>{
    if(!isUserLoggedIn){
        toast.error('Please log in to add items to your cart');
        navigate('/sign-in')
    }else{
      if(size){
        addToCart({...result1.data.product, size: size, quantity: quantity}) 
      }else{
        toast.error('Please select size')
      }
    }
  }

  return (
    <section className='pt-25 max-container padding-x'>
      {result1.isPending && <p>Loading....</p>}
      {result1.error && <p>{error}</p>}
      {result1.data && 
        <div className='flex flex-col sm:flex-row items-center gap-5 '>
              <div className='mb-4'>
                <img src={`${import.meta.env.VITE_BACKEND_URL}/${result1.data.product.image}`} alt="Product Image" className='object-contain w-150 ' />
              </div>

              <div className='mb-4'>
                  <p className='font-oswald text-2xl mb-1'>{result1.data.product.name}</p>

                  <div className='flex items-center mb-4'>
                    <img src={star_icon} alt="Star Icon" className='w-3 h-3' />
                    <img src={star_icon} alt="Star Icon" className='w-3 h-3'/>
                    <img src={star_icon} alt="Star Icon" className='w-3 h-3'/>
                    <img src={star_icon} alt="Star Icon" className='w-3 h-3'/>
                    <img src={star_dull_icon} alt="Star Icon" className='w-3 h-3'/>
                    <p>(69)</p>
                  </div>

                  <p className='font-oswald text-3xl mb-4'>₱{result1.data.product.price}</p>
                  <p className='text-slate-600 mb-4'>{result1.data.product.description}</p>
                  <p className='font-inter mb-2'>Select Size</p>

                  <div className='flex gap-2 items-center font-oswald mb-4'>
                      <button className={` border border-slate-400 ${size === 'S' ? 'bg-gray-400' : 'bg-gray-200'} px-4 py-2`} onClick={()=>setSize('S')}>S</button>
                      <button className={` border border-slate-400 ${size === 'M' ? 'bg-gray-400' : 'bg-gray-200'} px-4 py-2`} onClick={()=>setSize('M')}>M</button>
                      <button className={` border border-slate-400 ${size === 'L' ? 'bg-gray-400' : 'bg-gray-200'} px-4 py-2`} onClick={()=>setSize('L')}>L</button>
                      <button className={` border border-slate-400 ${size === 'XL' ? 'bg-gray-400' : 'bg-gray-200'} px-4 py-2`} onClick={()=>setSize('XL')}>XL</button>
                  </div>

                  <Button label={'ADD TO CART'} onClick={()=> handleAddToCart() } />
                   
                   
                  <hr className='mt-10 border-gray-300 mb-4' />

                  <div className='text-sm text-slate-500'>
                      <p >100% Original product.</p>
                      <p >Cash on delivery is available on this product.</p>
                      <p >Easy return and exchange policy within 7 days.</p>
                  </div>

              </div>
          </div>
      
      
      }

      <div className='mt-10'>
          <div className='flex items-center text-sm'>
              <p className='font-bold border border-slate-200 px-3 py-2'>Description</p>
              <p className=' border px-3 py-2 border-slate-200'>Reviews (69)</p>
          </div>

          <div className='text-sm text-slate-500 py-5 border border-slate-200 px-3'>
            <p>An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.</p>
            <br />
            <p>E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.</p>
            
          </div>

      </div>


      
      {result2.isPending && <p>Loading....</p>}
      {result2.error && <p>{error}</p>}

      {result2.data &&
      
      
      <div className='mb-10'>
              <h1 className='font-oswald text-3xl mb-4 text-center py-5'><span className=''>Related</span> Products</h1>
              <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4'>
                  {result2.data.products.slice(0,4).map((item, index)=> 
                    <ProductCard products={item} key={index}/>
                  )}
              </div>
      </div>
      }

      

   
         

   

    </section>
  )
}

export default Product
