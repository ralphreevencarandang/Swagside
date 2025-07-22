import React from 'react'
import Button from '../components/Button'
const Hero = () => {
  return (
    <section className='min-h-screen flex justify-center items-center'>  
        <div>

            <h1 className='font-oswald text-4xl pb-2'>Unleash Your Street Style</h1>
            <h3 className='font-oswald text-xl pb-2'>Baggy, Bold, and Built for the Culture</h3>
            <p className='font-montserrat pb-5'>Step into the scene with fashion made for movement — streetwear that speaks loud, lives loud.</p>
            <Button label={'Shop now'}/>

        </div>

        

    </section>
  )
}

export default Hero
    