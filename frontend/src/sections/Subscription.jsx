import React from 'react'
import Button from '../components/Button'
const Subscription = () => {
  return (
    <section className='flex-col-center py-20'>
          <h1 className='text-center font-oswald text-3xl py-2'>Subscribe now & get 20% off</h1>
          <p className='text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, praesentium! </p>
         

          <div className='flex w-full max-w-[620px] py-5'>
            <input type="email" className='border border-slate-200 py-2 px-4 w-full'/>
            <Button label={'SUBSCRIBE'}/>
          </div>
    </section>
  )
}

export default Subscription
  