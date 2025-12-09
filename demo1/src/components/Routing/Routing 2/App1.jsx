import React from 'react'
import NavBar from './NavBar.jsx'
import Home from '../Home.jsx'
import About from '../About.jsx'
import Contact from '../Contact.jsx'
import ErrorPage from '../ErrorPage.jsx'
import User from './User.jsx'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Products from './Products.jsx'
import Mobile from './Mobile.jsx'
import Laptop from './Laptop.jsx'
import PrivateRoutes from '../Protected Routes/PrivateRoutes.jsx'
import Dashboard from '../Protected Routes/Dashboard.jsx'

const App1 = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<><NavBar /><Home /></>} />
                <Route path='/about' element={<><NavBar /><About /></>}  />
                <Route path='/contact' element={<><NavBar /><Contact /></>}  />
                <Route path='*' element={<><NavBar /><ErrorPage /></>}  />
                <Route path='/user/:username' element={<><NavBar /><User /></>}  /> 
                {/* NESTED ROUTING */}
                <Route path='/products' element={<><NavBar /><Products /></>}>
                    <Route path='mobile' element={<Mobile />} />
                    <Route path='laptop' element={<Laptop />} />
                </Route>
                <Route path='/dashboard' element={
                  <PrivateRoutes>
                    <Dashboard />
                  </PrivateRoutes>
                  } 
                />
            </Routes>        
        </BrowserRouter>
    </div>
  )
}

export default App1