import React from 'react'
import Hero from '../../sections/Hero'
import LatestCollection from '../../sections/LatestCollection'
import BestSellers from '../../sections/BestSellers'
import Policy from '../../sections/Policy'
import Subscription from '../../sections/Subscription'
import { useQuery } from '@tanstack/react-query'
import { getAllProductsOptions } from '../../react-queries/userQueries'

const HomePage = () => {

  const data = useQuery(getAllProductsOptions)
  return (

    <section className=" ">
      <Hero/>
      <LatestCollection result={data}/>
      <BestSellers result={data}/>
      <Policy/>
      <Subscription/>
     
    
    </section>


  )
}

export default HomePage
