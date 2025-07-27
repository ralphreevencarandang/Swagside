import React from 'react'
import { PackagePlus,Boxes,ShoppingBasket, CircleUserRound } from 'lucide-react';
import { Link } from 'react-router';
const Sidebar = () => {
  return (
    <section className='h-full min-h-screen text-xs pt-20 md:w-1/4 border-r border-gray-200'>
        <div className='flex gap-3 items-center  py-5 px-1 md:px-2 font-montserrat'>
            <CircleUserRound size={40} /> 
                <p className='hidden md:block'>Admin</p>

        </div>
        <nav className='px-1 font-montserrat'>
                <Link className='flex gap-3 py-3 items-center md:px-2 hover:bg-gray-300 rounded'>
                    <PackagePlus size={35}/> 
                    <p className='hidden md:block'>Add Product</p>
                </Link>
                <Link className='flex gap-3 py-3 items-center md:px-2 hover:bg-gray-300 rounded'>
                    <Boxes size={35} /> 
                    <p className='hidden md:block'>Product List</p>

                </Link>
                <Link className='flex gap-3 py-3 items-center md:px-2 hover:bg-gray-300 rounded'>
                    <ShoppingBasket size={35} />
                    <p className='hidden md:block'>Orders</p>

                </Link>           
        </nav>
    </section>
  )
}

export default Sidebar
