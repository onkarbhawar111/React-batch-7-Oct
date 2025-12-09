import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Products = () => {
  return (

    <div>
        <h1>Products</h1>
        <Link to='mobile'>Mobile</Link>
        <Link to='laptop'>Laptop</Link>
        <Outlet />
    </div>
  )
}

export default Products