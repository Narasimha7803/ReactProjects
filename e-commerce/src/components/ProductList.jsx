import React from 'react'
import ProductQuantityCounter from './ProductQuantityCounter'

function ProductList() {
  const productList = [{name: "Samsung Galaxy S25", price: 70000, description: "Samsung Galaxy S25 16Gb ram"},
    {name: "Lenovo Laptop G540", price: 100000, description: "Lenovo Laptop G%40 Ram 24GB"},
    {name: "Iphone", price: 200000, description: "Iphone 16 16Gb ram 256GB internal"},
    {name: "OPPO", price: 50000, description: "Oppo 16Gb ram 256GB internal"},
    {name: "Realme", price: 20000, description: "Realme 16Gb ram 256GB internal"}
  ]
   
  return (
    <div  >
        <h2 style={{color:'yellow'}}>Product List</h2>
        <form>
          
          <input type="text" />
        </form>
        <ul style={{listStyleType:'none'}}>
            
                {productList.map(( product,index) =>
                <li key={index}>
                <>
                <h4 style={{color:'brown'}}>Product Name: {product.name}</h4>
                <h5 style={{color:'green'}}> Product Price: {product.price}</h5>
                <p style={{color:'orange'}}>Description: {product.description}</p>
                <ProductQuantityCounter/>
                <br />
                <button style={{backgroundColor:"aquamarine"}}   >ADD TO CART</button>
                </>
                </li>
                )}
            
          
        </ul>


    </div>
  )
}

export default ProductList
