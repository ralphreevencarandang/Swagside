import React from 'react'
import { contactImg } from '../../assets/images'
import Subscription from '../../sections/Subscription'
const Contact = () => {
  return (
    <section className='pt-25'>
        <h1 className='font-oswald text-4xl mb-4 text-center py-5'><span className='text-slate-600'>CONTACT</span> US</h1>
        
        <div className='flex flex-col justify-center sm:items-center sm:flex-row  gap-10'>
 
            <img src={contactImg} alt="Contact Image" className=' object-contain sm:w-[500px]'/>

          

            <div className='font-montserrat'>
                <h4 className='font-oswald text-2xl pb-5'>Our Store</h4>
                <p className='pb-3'>Maisog St. San Andres 1, Dasmariñas Cavite, Philippines</p>

                <p className='pb-3'>Tel: (+63) 912-3456-789</p>
                <p className='pb-3'>Email: Swagside@gmail.com</p>

                <h1 className='font-oswald text-2xl pb-5'>Careers at Swapside</h1>
                <p>Learn more about our teams and job openings</p>

                <button className='border px-4 py-4 hover:bg-black hover:text-white transition-colors ease-out duration-200 cursor-pointer'>Explore Jobs</button>
            </div>

        </div>

            <Subscription/>


    </section>
  )
}

export default Contact
