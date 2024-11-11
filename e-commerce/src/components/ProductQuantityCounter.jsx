import React, { useState } from 'react'
import { useEffect } from 'react';

function ProductQuantityCounter() {

    const [ quantity, setQuantity] = useState(1);

    useEffect(() =>{
      if(quantity>4){
        alert("Maximum products reached")
      }

    }
    )
    const increaseQuantity = () => {
        setQuantity(quantity + 1)
    }
    const decreaseQuantity = () => {
        if(quantity > 1){
            setQuantity(quantity - 1)
        }
    }

  return (
    <div>
      Quantity :   {quantity}
      <button onClick={increaseQuantity}  style={{backgroundColor:'greenyellow'}}>count +</button>
      <button onClick={decreaseQuantity}  style={{backgroundColor:'red'}}>count -</button>
    </div>
  )
}

export default ProductQuantityCounter
