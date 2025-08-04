import React from 'react'
import ProductCard from '../components/ProductCard'
import { useQuery } from '@tanstack/react-query'
import { getAllProductsOptions } from '../react-queries/userQueries'
const LatestCollection = ({result}) => {


  return (
    <section className='mb-10'> 
      <div className='text-center mb-10'>
          <h1 className='font-oswald text-5xl mb-4'><span className='text-blue-500'>Latest</span> Collection</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, aut?</p>
      </div>

      {result.isPending && <p>Loading....</p>}
      {result.error && <p>{error}</p>}
      {result.data && 
      <div className='grid gird-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 place-content-center'>
        {result.data.products?.sort((a , b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0,10).map( (item, index)=>
          <ProductCard products={item} key={index}/>
         )}
      </div>
      }

    </section>
  )
}

export default LatestCollection
