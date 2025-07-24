import React from 'react'
import { Linkedin,Github,Facebook } from 'lucide-react';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className=''>
        <div className='max-container padding-x pb-10'>

          <div className='flex flex-col gap-10 lg:flex-row lg:gap-20'> 
              <div>
                  <h1 className='mb-5 font-oswald text-4xl'>LOGO</h1>
                  <p className='text-sm font-montserrat text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non ex quibusdam, numquam beatae velit soluta nisi enim sed quis ducimus accusamus fugiat quae voluptatem error saepe minima, dolorum, dignissimos labore.</p>
              </div>

              <div>
                <h1 className='mb-5 font-oswald text-4xl'>COMPANY</h1>
                <div className='flex flex-col font-montserrat text-sm'>
                  <a href="">Home</a>
                  <a href="">About us</a>
                  <a href="">Delivery</a>
                  <a href="">Privacy policy</a>
                </div>
              </div>

              <div>
                <h1 className='mb-5 font-oswald text-4xl'>GET IN TOUCH</h1>
                <p className='font-montserrat text-sm'>+63 912-3456-789</p>
                <p className='font-montserrat text-sm'>ralphreevencarandang@gmail.com</p>
                <p className='font-montserrat text-sm'>https://ralph-reeven.vercel.app</p>
                <div className='flex items-center gap-2 pt-3'>
                  <Link to={'https://www.linkedin.com/in/ralph-reeven-carandang-273877265/'} target='_blank'>
                    <Linkedin className='bg-black text-white rounded-full w-10 h-10 px-2'/>
                  </Link>

                  <Link to={'https://github.com/ralphreevencarandang'} target='_blank'>
                    <Github className='bg-black text-white rounded-full w-10 h-10 px-2'/>
                  </Link>
                  <Link to={'https://www.facebook.com/arar404'} target='_blank'>
                    <Facebook className='bg-black text-white rounded-full w-10 h-10 px-2'/>
                  </Link>
                </div>
              </div>

          </div>

        </div>

        <div className='border border-slate-200 text-center'>
           <p className='font-montserrat py-5 text-sm'>Copyright 2025 @ralphreeven.dev - All Right Reserved.</p>
        </div>
    </footer>
  )
}

export default Footer
