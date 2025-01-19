import React, { lazy } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Layouts from '../layout/Layouts'
// import HomePage from '../page/HomePage'
// import ErrorPage from '../page/ErrorPage'
// import Contact from '../components/Contact'

const Layouts=lazy(()=>import('../layout/Layouts'))
const Contact=lazy(()=>import('../components/Contact'))
const ErrorPage=lazy(()=>import('../page/ErrorPage'))
const HomePage=lazy(()=>import('../page/HomePage'))

const router=createBrowserRouter([
    {
        path:'/',
        element:<Layouts/>,
        errorElement:<ErrorPage/>,
        children:[
          {
            index:true,
            element:<HomePage/>
          },{
            path:'/contact',
            element:<Contact/>
          }
        ]
    }
])
const Routes = () => {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default Routes