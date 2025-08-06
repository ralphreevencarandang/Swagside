import React from 'react'
import Button from '../../components/Button'
import { useParams } from 'react-router'
import { useQuery } from '@tanstack/react-query'
import { getProductOptions } from '../../react-queries/userQueries'
import { star_icon, star_dull_icon } from '../../assets/images'
import ProductCard from '../../components/ProductCard'
const Product = () => {
  const {id} = useParams();

  const {data, isPending, error} = useQuery(getProductOptions(id))



  return (
    <section className='pt-25'>

      {isPending && <p>Loading....</p>}
      {error && <p>{error}</p>}
      {data && 
        <div className='flex flex-col sm:flex-row items-center gap-5 '>
              <div className='mb-4'>
                <img src={`${import.meta.env.VITE_BACKEND_URL}/${data.product.image}`} alt="Product Image" className='object-contain w-150 ' />
              </div>

              <div className='mb-4'>
                  <p className='font-oswald text-2xl mb-1'>{data.product.name}</p>

                  <div className='flex items-center mb-4'>
                    <img src={star_icon} alt="Star Icon" className='w-3 h-3' />
                    <img src={star_icon} alt="Star Icon" className='w-3 h-3'/>
                    <img src={star_icon} alt="Star Icon" className='w-3 h-3'/>
                    <img src={star_icon} alt="Star Icon" className='w-3 h-3'/>
                    <img src={star_dull_icon} alt="Star Icon" className='w-3 h-3'/>
                    <p>(69)</p>
                  </div>

                  <p className='font-oswald text-3xl mb-4'>₱{data.product.price}</p>
                  <p className='text-slate-600 mb-4'>{data.product.description}</p>
                  <p className='font-inter mb-2'>Select Size</p>

                  <div className='flex gap-2 items-center font-oswald mb-4'>
                      <button className='bg-gray-200 border border-slate-400 px-4 py-2'>S</button>
                      <button className='bg-gray-200 border border-slate-400 px-4 py-2'>M</button>
                      <button className='bg-gray-200 border border-slate-400 px-4 py-2'>L</button>
                      <button className='bg-gray-200 border border-slate-400 px-4 py-2'>XL</button>
                  </div>

                  <Button label={'ADD TO CART'} />
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

      {data &&
      
      
      <div className='mb-10'>
              <h1 className='font-oswald text-3xl mb-4 text-center py-5'><span className=''>Related</span> Products</h1>
              <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4'>
                    <ProductCard products={data.product}/>
                    <ProductCard products={data.product}/>
                    <ProductCard products={data.product}/>
                    <ProductCard products={data.product}/>
              </div>
      </div>
      }

      

   
         

   

    </section>
  )
}

export default Product
