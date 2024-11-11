import React, { useEffect, useState } from 'react'
import ProductList from './ProductList'
import { Link } from 'react-router-dom'
import {Routes,Route} from 'react-router-dom'

const productsList = [
 {
  img: "https://specs-arena.com/wp-content/uploads/2024/01/Samsung-Galaxy-S24-Ultra-3.webp",
  company: "SAMSUNG",
  model: "Samsung Galaxy S26",
  price: 70000,
  rating: "******",
  id: 1
 },
 {
  img: "https://www.bhphotovideo.com/images/images2000x2000/lenovo_81lg004uus_ideapad_l340_i5_8265u_8gb_1tb_1542745.jpg",
  company: "SAMSUNG",
  model: "Samsung Galaxy S25",
  price: 90000,
  rating: "*****",
  id: 2
 },
 {
  img: "https://specs-arena.com/wp-content/uploads/2024/01/Samsung-Galaxy-S24-Ultra-3.webp",
  company: "SAMSUNG",
  model: "Samsung Galaxy S25",
  price: 90000,
  rating: "*****",
  id: 2
 }
];

const Item = ({element}) => {
  return (
    <>
      <img src={element.img} alt={element.company} className='images' /> 
      <h3>MODEL: {element.model} </h3>
      <h3> PRICE: {element.price}</h3>
      <h4>RATING: {element.rating}</h4>
      
    </>
  )
}

function Products() {
    
  return (
    <div>
      <h1>Products</h1>
      
      {productsList.map((item) =>
        <div key={item.id}>
          <Item element={item} />
        </div>
      )}
    </div>
  )
}

export default Products
