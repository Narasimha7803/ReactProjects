import React from 'react'

function Cart() {
  return (
    <div>
      <h1 style={{color:'darkviolet'}} >CART ITEMS</h1>
       <h3>name: "Samsung Galaxy S25", price: 70000, description: "Samsung Galaxy S25 16Gb ram</h3>
       <button style={{backgroundColor:'LIGHTBLUE'}}> REMOVE ITEM</button><button style={{backgroundColor:'coral'}}> SAVE FOR LATER</button><button style={{backgroundColor:'LIGHTGREEN'}}> BUY THIS NOW</button>
       <h3>name: "OPPO", price: 50000, description: "OPPO S25 16Gb ram</h3>
       <button style={{backgroundColor:'LIGHTBLUE'}}> REMOVE ITEM</button><button style={{backgroundColor:'coral'}}> SAVE FOR LATER</button><button style={{backgroundColor:'LIGHTGREEN'}}> BUY THIS NOW</button>
       <h3>name: "IPHONE 16", price: 100000, description: "IPHONE 16Gb ram</h3>
       <button style={{backgroundColor:'LIGHTBLUE'}}> REMOVE ITEM</button><button style={{backgroundColor:'coral'}}> SAVE FOR LATER</button><button style={{backgroundColor:'LIGHTGREEN'}}> BUY THIS NOW</button>
      <br />
      <br />
      AMOUNT: 299999 <button style={{backgroundColor:'gold'}}>Place order</button>
    </div>
    
  )
}

export default Cart
