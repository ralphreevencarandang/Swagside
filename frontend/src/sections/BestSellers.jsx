import React from 'react'
import ProductCard from '../components/ProductCard'

const BestSellers = ({result}) => {


  return (
    <section className='py-20'>
      <div className='text-center mb-10'>
          <h1 className='font-oswald text-5xl mb-4'><span className='text-blue-500'>Best</span> Sellers</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, aut?</p>
      </div>

       {result.isPending && <p>Loading....</p>}
      {result.error && <p>{error}</p>}
      {result.data && 
      <div className='grid gird-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 place-content-center'>
        {result.data.products?.filter( element => element.isBestSeller == true).map( (item, index)=>
        <ProductCard products={item} key={index}/>
         )}
      </div>
      }
      
    </section>
  )
}

export default BestSellers
