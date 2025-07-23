import React from 'react'
import { Search, UserRound, ShoppingCart, Menu, X } from 'lucide-react';
import { Link } from 'react-router';
import { useState } from 'react';
import { Logo } from '../assets/images';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  
  return (
    <section className='w-full  py-5 shadow bg-[#FFFBF7] fixed '>
      <div className='max-container padding-x'>

        <div className='flex items-center justify-between font-oswald'>        
            <h1 className='text-2xl'>Logo</h1> 
          <div className='hidden sm:flex gap-3 items-center '>
              <Link to="">HOME</Link>
              <Link to="">COLLECTION</Link>
              <Link to="">ABOUT</Link>
              <Link to="">CONTACT</Link>
          </div>

          <div className='flex gap-3 items-center justify-center'>
              <Search />
              <UserRound  />
              <ShoppingCart />
              <div className='sm:hidden cursor-pointer' onClick={()=> setIsOpen(!isOpen)}>
                {isOpen ? (<X />) : ( <Menu  />)}
                
               
              </div>
              
          </div>

           
        </div>

        {isOpen && 
          <div className='sm:hidden flex flex-col items-center justify-center mt-3 font-oswald'>
              <Link to="" className=' py-1'>HOME</Link>
              <Link to="" className=' py-1'>COLLECTION</Link>
              <Link to="" className=' py-1'>ABOUT</Link>
              <Link to="" className=' py-1'>CONTACT</Link>

          </div>
        }


   
      </div>
    </section>
  )
}

export default Navbar
    