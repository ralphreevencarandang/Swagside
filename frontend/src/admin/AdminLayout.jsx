import React from 'react'
import { Outlet } from 'react-router'
import Sidebar from '../sections/admin/Sidebar'
import AdminNavbar from '../sections/admin/AdminNavbar'
const AdminLayout = () => {
  return (
    <section className='w-full'>
        <AdminNavbar/>
        <div className='flex  max-container px-0 md:px-16 '>
            <Sidebar/>
            <Outlet/>
        </div>
    </section>
  )
}

export default AdminLayout
