import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../sections/Navbar'
import Footer from '../sections/Footer'
const AuthLayout = () => {
  return (
   <div className="flex flex-col min-h-screen">
      <Navbar />
  
      <div className="flex-1 mb-10">
        <div className="max-container padding-x">
          <Outlet />
        </div>
      </div>

      <Footer />
</div>
  )
}

export default AuthLayout
