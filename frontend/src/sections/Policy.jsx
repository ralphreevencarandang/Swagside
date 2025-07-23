import React from 'react'
import { policy } from '../constants'

const Policy = () => {
  return (
    <section className='flex-col-center sm:flex-row sm:flex-center gap-6 py-10' >
        {policy.map((item, index)=> 
          <div key={index} className='flex-col-center'>
              <img src={item.imgUrl} alt={item.title} className='object-contain' />
              <h4 className='text-center font-oswald pt-3'>{item.title}</h4>
              <p className='text-center text-sm text-stone-600'>{item.description}</p>
          </div>
        )}
    </section>
  )
}

export default Policy
