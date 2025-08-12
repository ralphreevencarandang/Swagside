import React from 'react'

const Button = ({label,...props}) => {
  return (
    <button {...props} className='cursor-pointer text-xl px-4 py-2  bg-black text-white hover:bg-stone-800 font-oswald'  >
        {label}
    </button>
  )
}

export default Button
