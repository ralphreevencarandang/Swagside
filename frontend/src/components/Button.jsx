import React from 'react'

const Button = ({label, onClick}) => {
  return (
    <button className='cursor-pointer text-xl px-4 py-2  bg-black text-white hover:bg-stone-800 font-oswald' onClick={onClick} >
        {label}
    </button>
  )
}

export default Button
