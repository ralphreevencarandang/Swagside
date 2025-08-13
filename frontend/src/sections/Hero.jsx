import React from 'react'
import Button from '../components/Button'
import { Banner } from '../assets/images'
import {Link} from 'react-router'
const Hero = () => {
  return (

    <section className='min-h-screen  flex justify-center items-center bg-[url(./src/assets/images/bohlemdia.jpg)] bg-no-repeat bg-cover'>  
        <div className='max-container padding-x'>
            <h1 className='font-oswald text-4xl pb-2'>Unleash Your Street Style</h1>
            <h3 className='font-oswald text-xl pb-2'>Baggy, Bold, and Built for the Culture</h3>
            <p className='font-montserrat pb-5'>Step into the scene with fashion made for movement — streetwear that speaks loud, lives loud.</p>
            <Link to={'/collection'} className='cursor-pointer text-xl px-4 py-2  bg-black text-white hover:bg-stone-800 font-oswald'>Shop now</Link>
        </div>
    </section>
  )
}

export default Hero
    