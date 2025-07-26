import React from 'react'
import { PackagePlus,Boxes,ShoppingBasket, CircleUserRound } from 'lucide-react';
import { Link } from 'react-router';
const Sidebar = () => {
  return (
    <section className='h-full min-h-screen text-sm pt-20 w-full max-w-[160px] border-r border-gray-200'>
        <div className='flex gap-3 items-center  py-5 px-2 font-montserrat'>
            <CircleUserRound size={50} /> Admin
        </div>
        <nav className='px-2 font-montserrat'>
                <Link className='flex gap-3 py-3 items-center hover:bg-gray-300 rounded'>
                    <PackagePlus size={35}/> Add Product
                </Link>
                <Link className='flex gap-3 py-3 items-center hover:bg-gray-300 rounded'>
                    <Boxes size={35} /> Product List
                </Link>
                <Link className='flex gap-3 py-3 items-center hover:bg-gray-300 rounded'>
                    <ShoppingBasket size={35} />Orders
                </Link>           
        </nav>
    </section>
  )
}

export default Sidebar
