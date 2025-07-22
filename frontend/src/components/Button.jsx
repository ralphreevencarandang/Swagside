import React from 'react'

const Button = ({label}) => {
  return (
    <button className='cursor-pointer px-2 py-1  bg-black text-white hover:bg-gray-950' >
        {label}
    </button>
  )
}

export default Button
