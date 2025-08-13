import React from 'react'
import { aboutImg } from '../../assets/images'
import { whyChooseUs } from '../../constants'
import Subscription from '../../sections/Subscription'
const About = () => {
  return (
    <section className='pt-25 '>
        <h1 className='font-oswald text-5xl mb-4 text-center py-5'><span className='text-slate-600'>About</span> us</h1>


        <div className='flex flex-col lg:flex-row gap-10' >
            <div className=''>
                <img src={aboutImg} alt="object-contain" className='max-w-400 w-full'/>
            </div>

            <div className='text-justify'>
                <p className='font-montserrat'>Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.</p>
                <br />

                <p className='font-montserrat'> Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.</p>

                <h5 className='font-oswald text-lg py-5'>Our Misson</h5>
                <p>Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</p>
            </div>
        </div>


        <div className='pt-15'>
            <h1 className='font-oswald text-2xl mb-10'>WHY CHOOSE US</h1>
            
            <div className='grid grid-cols-1 md:grid-cols-3'>

                {whyChooseUs.map((item, index)=>
                    <div key={index} className='border border-gray-400 p-10 text-justify'>
                        <h3 className='font-oswald pb-2'>{item.title}</h3>
                        <p className='font-montserrat text-sm'>{item.description}</p>
                    </div>
                )}
            </div>
        </div>

        <div>

            <Subscription/>

        </div>

    
    </section>
  )
}

export default About
