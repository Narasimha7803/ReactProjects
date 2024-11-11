import React from 'react'
import { Link } from 'react-router-dom'
function Header({message}) {
  return (
    <div>
        <h1 style={{color:'green'}}>Welcome To E-commerce Website</h1>
        <p>{message}</p>
        <Link to="/home"  className='spacing'>Home</Link>
        <Link to="/products" className='spacing'>Products</Link>
        <Link to="/cart">Cart(items)</Link>
    </div>
  )
}

export default Header
