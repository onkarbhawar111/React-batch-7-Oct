import React from 'react'
import NavBar from './NavBar'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './ErrorPage'

const App1 = () => {

    const router = createBrowserRouter([
        {
            path:'/',
            element: <><NavBar /><Home /></>
        },
        {
            path:'/about',
            element:<><NavBar /><About /></>
        },
        {
            path:'/contact',
            element:<><NavBar /><Contact /></>
        } ,
        {
            path:'*',
            element: <><ErrorPage /></>
        }  
     ])

  return (
    <div>
        <RouterProvider router={router} />
    </div>
  )
}

export default App1