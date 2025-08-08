import React from 'react'
import { Search, UserRound, ShoppingCart, Menu, X } from 'lucide-react';
import { Link } from 'react-router';
import { useState } from 'react';
import { Logo } from '../assets/images';
import { useCartStore } from '../store/cart-store';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const {cart} = useCartStore();
  
  return (
    <section className='w-full  py-5 shadow bg-[#FFFBF7] fixed '>
      <div className='max-container padding-x'>

        <div className='flex items-center justify-between font-oswald'>  
        
          <Link to={'/'}><h1 className='text-2xl'>SwagSide</h1>  </Link>      
          <div className='hidden sm:flex gap-3 items-center '>
              <Link to="/">HOME</Link>
              <Link to="/collection">COLLECTION</Link>
              <Link to="/about">ABOUT</Link>
              <Link to="/contact">CONTACT</Link>
          </div>

          <div className='flex gap-3 items-center justify-center'>
            <Link to={'/collection'}> < Search /></Link>
             
              <Link to={'/sign-in'}> <UserRound /></Link>
              <div className='relative '>
                  <Link to={'/cart'}>  <ShoppingCart className='z-20'/></Link>
             
              <div className='absolute border rounded-full bg-black top-2 left-4'>
                {cart.length > 0 &&  <p className='text-[9px] px-1.5 text-white'>{cart.length}</p>}

              </div>
              
              </div>
          
            
              <div className='sm:hidden cursor-pointer' onClick={()=> setIsOpen(!isOpen)}>
                {isOpen ? (<X />) : ( <Menu  />)}
                
               
              </div>
              
          </div>

           
        </div>

        {isOpen && 
          <div className='sm:hidden flex flex-col items-center justify-center mt-3 font-oswald'>
              <Link to="/" className=' py-1'>HOME</Link>
              <Link to="/collection" className=' py-1'>COLLECTION</Link>
              <Link to="/about" className=' py-1'>ABOUT</Link>
              <Link to="/contact" className=' py-1'>CONTACT</Link>

          </div>
        }


   
      </div>
    </section>
  )
}

export default Navbar
    