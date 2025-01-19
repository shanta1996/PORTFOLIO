import React, { Suspense } from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const Layouts = () => {
  return (
    <div>
        <Navbar/>
        <Suspense fallback={<p className='h-screen w-full text-4xl text-black flex items-center justify-center'>Loading...</p>} >
        <Outlet/>
        </Suspense>
        
    </div>
  )
}

export default Layouts