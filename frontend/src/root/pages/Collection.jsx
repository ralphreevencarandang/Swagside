import React from 'react'
import ProductCard from '../../components/ProductCard'
import { useQuery } from '@tanstack/react-query'
import { getAllProductsOptions } from '../../react-queries/userQueries'
const Collection = () => {

  const {data, isPending, error} = useQuery(getAllProductsOptions)
  return (
    <section className='py-25 flex flex-col lg:gap-10  lg:flex-row'>
      {isPending && <p>Loading...</p>}
      {error && <p>{error}</p>}


      {/* Filter div */}
   
          <div className='flex flex-col gap-3 lg:w-100'>
              <h1 className='text-xl font-oswald'>FILTERS</h1>
              <div className='border border-gray-200 p-3'>
                  <div className='flex flex-col '>
                    <p className='font-oswald py-2'>CATEGORIES</p>
                    <label className='font-montserrat'> <input type="checkbox" className='accent-pink-400'/> Men</label>
                    <label className='font-montserrat'> <input type="checkbox" className='accent-pink-400'/> Women</label>
                    <label className='font-montserrat'> <input type="checkbox" className='accent-pink-400'/> Kids</label>
                  </div>
              </div>
              
              <div className='border border-gray-200 p-3'>
                  <div className='flex flex-col '>
                    <p className='font-oswald py-2'>TYPE</p>
                    <label className='font-montserrat'> <input type="checkbox" className='accent-pink-400'/> Topwear</label>
                    <label className='font-montserrat'> <input type="checkbox" className='accent-pink-400'/> Bottomwear</label>
                    <label className='font-montserrat'> <input type="checkbox" className='accent-pink-400'/> Winterwear</label>
                  </div>
              </div>
          </div>

          <div>
              <div className='flex justify-between gap-2 my-5 lg:mt-0'>
                <h1 className='text-lg sm:text-xl font-montserrat'>ALL COLLECTIONS</h1>
                <select className='border border-gray-200 font-montserrat text-sm sm:px-1.5 sm:py-3'>
                  <option value="relevant">Sort by: relevant</option>
                  <option value="low-to-high">Sort by: Low to High</option>
                  <option value="high-to-low">Sort by: High to Low</option>
                </select>
              </div>

              <div className='grid grid-cols-2 gap-3 place-content-center md:grid-cols-3 lg:grid-cols-4'>
                {data && data.products.map((item, index)=>  <ProductCard products={item} key={index}/>)}
                 
                 
              </div>
          </div>
   


      
    </section>
  )
}

export default Collection
