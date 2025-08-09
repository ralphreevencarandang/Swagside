import React from 'react'
import {useField} from 'formik'
const TextField = ({...props}) => {

    const [field, meta] = useField(props)

    
  return (
    <div className='w-full'>
        <input {...props} {...field}  className={`border ${meta.touched && meta.error ? 'border-red-400' : 'border-slate-200'} rounded px-2 py-2 w-full `}/>
       
        {meta.touched && meta.error && <p className='text-xs text-red-400'>{meta.error}</p>}
    </div>
  )
}

export default TextField
