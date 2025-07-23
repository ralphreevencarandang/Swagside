import React from 'react'

const Button = ({label, onClick}) => {
  return (
    <button className='cursor-pointer px-2 py-1  bg-black text-white hover:bg-stone-800 font-oswald' onClick={onClick} >
        {label}
    </button>
  )
}

export default Button
