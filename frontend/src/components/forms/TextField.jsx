import React from 'react'
import { useField } from 'formik'
const TextField = ({...props}) => {

  const [field, meta] = useField(props)

  
  return (
              <div className="mt-2">
                <input
                {...props}
                {...field}
                  className={`${meta.error && meta.touched && 'outline-red-400'} block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6`}
                />
                {meta.error && meta.touched &&  <p className='text-xs text-red-500 font-light'>{meta.error}</p>}
       
              </div>

  )
}

export default TextField
