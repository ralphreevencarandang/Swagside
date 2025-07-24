import React from 'react'

const Footer = () => {
  return (
    <footer className=''>
        <div className='max-container padding-x pb-20'>

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
