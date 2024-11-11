import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Home'
import Products from './Products'
import Cart from './Cart'


function Navbar() {
   
  return (
    <div>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/products' element={<Products />}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </div>
  )
}

export default Navbar
