import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../sections/Navbar'
import Footer from '../sections/Footer'
const RootLayout = () => {
  return (
    <div className='w-full'>
        <Navbar/>
        <div className='min-h-screen max-container padding-x -z-10'>
            <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}

export default RootLayout
    