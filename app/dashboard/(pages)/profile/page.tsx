'use client'
import { useUserContext } from '@/app/auth/userContext/userContext';
import React from 'react'
import Sidebar from '../../components/sidebar';

function page() {
const { user } = useUserContext();
console.log(user)
  return (
    <>
    <div className="flex min-h-screen flex-auto flex-shrink-0 z-10 antialiased  text-gray-800">
    
            <Sidebar/>
            <div className='w-full max-h-screen overflow-scroll no-scrollbar  p-5'>
                
    Profile
            </div>
            </div>
        </>
  )
}

export default page
