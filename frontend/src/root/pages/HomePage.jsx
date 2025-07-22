import React from 'react'
import Hero from '../../sections/Hero'
import LatestCollection from '../../sections/LatestCollection'
import BestSellers from '../../sections/BestSellers'
import Policy from '../../sections/Policy'
import Subscription from '../../sections/Subscription'
import Footer from '../../sections/Footer'
const HomePage = () => {
  return (

    <section className=" ">
      <Hero/>
      <LatestCollection/>
      <BestSellers/>
      <Policy/>
      <Subscription/>
     
    
    </section>


  )
}

export default HomePage
