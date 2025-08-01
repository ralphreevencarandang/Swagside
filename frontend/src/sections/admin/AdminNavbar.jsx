import React from 'react'
import {UserRound} from 'lucide-react';
import { Link } from 'react-router';

import { useMutation } from '@tanstack/react-query';
import { logoutQuery } from '../../react-queries';
const AdminNavbar = () => {

  const logoutMutation = useMutation(logoutQuery)
  
  return (
    <section className='w-full  py-5 shadow bg-[#FFFBF7] fixed '>
      <div className='max-container padding-x'>
        <div className='flex items-center justify-between font-oswald'>  
          <Link to={'/'}><h1 className='text-2xl'>Logo</h1>  </Link>    

          <div className=' relative group'> 
                <UserRound className='cursor-pointer'/>
                <div className='absolute hidden bg-gray-200  group-hover:block z-10    -left-6' >
                    <ul className='list-none font-montserrat text-sm' >
                      <li className='hover:bg-gray-300 px-5   py-2'><Link>Settings</Link></li>
                      <li className='hover:bg-gray-300  px-5  py-2' onClick={logoutMutation.mutate}>Logout</li>
                    </ul>
                </div>
                
          </div>

           
        </div>

      </div>
    </section>
  )
}

export default AdminNavbar
    