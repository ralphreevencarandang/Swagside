import React from 'react'
import {UserRound} from 'lucide-react';
import { Link } from 'react-router';

import { useMutation } from '@tanstack/react-query';
import { logoutQuery } from '../../react-queries/adminQueries';
import { useNavigate } from 'react-router';
const AdminNavbar = () => {

  const navigate = useNavigate()
  const logoutMutation = useMutation(logoutQuery)
  
  return (
    <section className='w-full  py-5 shadow bg-[#FFFBF7] fixed z-10'>
      <div className='max-container padding-x'>
        <div className='flex items-center justify-between font-oswald'>  
          <Link to={'/'}><h1 className='text-2xl'>Logo</h1>  </Link>    

          <div className=' relative group'> 
                <UserRound className='cursor-pointer'/>
                <div className='absolute hidden bg-gray-200  group-hover:block    -left-6' >
                    <ul className='list-none font-montserrat text-sm' >
                      <li className='hover:bg-gray-300 px-5   py-2'><Link>Settings</Link></li>
                      <li className='hover:bg-gray-300 cursor-pointer  px-5  py-2' onClick={()=>{logoutMutation.mutate(); navigate('/')}}>Logout</li>
                    </ul>
                </div>
                
          </div>

           
        </div>

      </div>
    </section>
  )
}

export default AdminNavbar
    