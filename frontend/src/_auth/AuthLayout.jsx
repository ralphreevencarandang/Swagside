import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../sections/Navbar'
import Footer from '../sections/Footer'
const AuthLayout = () => {
  return (
    <div>
      <Navbar/>
      <div className='min-h-screen max-container padding-x'>
        <Outlet/>
      </div>
         <Footer/>
    </div>
  )
}

export default AuthLayout
