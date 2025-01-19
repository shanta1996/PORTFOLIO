import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const error=useRouteError()
  return (
    <div className='h-screen w-full flex flex-col items-center justify-center text-[20px]'>Oops! An Error accured 😢
    {error && <p>{error.data}</p>}
    <Link to="/" className='bg-teal-500 text-white p-2 rounded-lg mt-6'>Back to Home</Link>
        
    </div>
  )
}

export default ErrorPage