import React from 'react'
import { useContext } from 'react'
import Userproducts from '../context/Userproducts'
function Productsprofile1() {
    const {user} = useContext(Userproducts)
    if(!user)
        return <h3>ENTER PRODUCT NAME AND AMOUNT</h3>


    return (
      <div>
    
        <h2>PRODUCTNAME:</h2>
        {user.product}
        <h2>PRODUCTPRICE: </h2>
        {user.productprice}
      </div>
    )
}

export default Productsprofile1
