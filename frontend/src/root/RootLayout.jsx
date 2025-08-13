import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../sections/Navbar'
import Footer from '../sections/Footer'
import Hero from '../sections/Hero'
const RootLayout = () => {
  return (
    <div className='w-full min-h-screen flex flex-col'>
        <Navbar/>

        <div className='flex-1  '>
            <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}

export default RootLayout
    