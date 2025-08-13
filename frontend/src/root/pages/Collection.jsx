import React from 'react'
import ProductCard from '../../components/ProductCard'
import { useQuery } from '@tanstack/react-query'
import { getAllProductsOptions } from '../../react-queries/userQueries'
import { useState } from 'react'
const Collection = () => {

  const {data, isPending, error} = useQuery(getAllProductsOptions);

const [sortBy, setSortBy] = useState("");
const [categoryFilter, setCategoryFilter] = useState([]);
const [typeFilter, setTypeFilter] = useState([]);

let filteredProducts = data?.products || [];

if (categoryFilter.length > 0) {
  filteredProducts = filteredProducts.filter(
    (item) => categoryFilter.includes(item.category)
  );
}

if(typeFilter.length > 0){
  filteredProducts = filteredProducts.filter(
    (item) => typeFilter.includes(item.subCategory)
  )
}

if(sortBy === 'low-to-high'){
  filteredProducts.sort((a,b) => a.price - b.price);
}else if(sortBy === 'high-to-low'){
  filteredProducts.sort((a,b) => b.price - a.price);
}else if(sortBy === 'relevant'){
  filteredProducts.sort((a,b)=> new Date(b.createdAt) - new Date(a.createdAt))
}



  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setCategoryFilter((prev) =>
      e.target.checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };
  const handleTypeChange = (e) => {
    const value = e.target.value;
    setTypeFilter((prev) =>
      e.target.checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };


  
  return (
    <section className='max-container padding-x py-25 flex flex-col lg:gap-10  lg:flex-row'>
      {isPending && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {/* Filter div */}
          <div className='flex flex-col gap-3 lg:w-100'>
              <h1 className='text-xl font-oswald'>FILTERS</h1>
              <div className='border border-gray-200 p-3'>
                  <div className='flex flex-col '>
                    <p className='font-oswald py-2'>CATEGORIES</p>
                    <label className='font-montserrat'> <input type="checkbox" className='accent-pink-400' value='Men' onChange={handleCategoryChange}/> Men</label>
                    <label className='font-montserrat'> <input type="checkbox" className='accent-pink-400' value='Women' onChange={handleCategoryChange}/> Women</label>
                    <label className='font-montserrat'> <input type="checkbox" className='accent-pink-400' value='Kids' onChange={handleCategoryChange}/> Kids</label>
                  </div>
              </div>
              
              <div className='border border-gray-200 p-3'>
                  <div className='flex flex-col '>
                    <p className='font-oswald py-2'>TYPE</p>
                    <label className='font-montserrat'> <input type="checkbox" value='Topwear' className='accent-pink-400' onChange={handleTypeChange} /> Topwear</label>
                    <label className='font-montserrat'> <input type="checkbox" value='Bottomwear' className='accent-pink-400' onChange={handleTypeChange}/> Bottomwear</label>
                    <label className='font-montserrat'> <input type="checkbox" value='Winterwear' className='accent-pink-400' onChange={handleTypeChange}/> Winterwear</label>
                  </div>
              </div>
          </div>

          <div>
              <div className='flex justify-between gap-2 my-5 lg:mt-0'>
                <h1 className='text-lg sm:text-xl font-montserrat'>ALL COLLECTIONS</h1>
                <select className='border border-gray-200 font-montserrat text-sm sm:px-1.5 sm:py-3'  onChange={(e)=> setSortBy(e.target.value)}>
                  <option value="relevant">Sort by: relevant</option>
                  <option value="low-to-high">Sort by: Low to High</option>
                  <option value="high-to-low">Sort by: High to Low</option>
                </select>
              </div>
              <div className='grid grid-cols-2 gap-3 place-content-center md:grid-cols-3 lg:grid-cols-4'>
                {filteredProducts && filteredProducts.map((item, index) =>  <ProductCard products={item} key={index}/>)}
              </div>
          </div>
    </section>
  )
}

export default Collection
