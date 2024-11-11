import React from 'react'
import { useState,useContext } from 'react';
import Userproducts from '../context/Userproducts';
function Products1() {
    const [product,setProduct]=useState('');
    const [productprice,setProductprice]=useState('');

    const {setuser} = useContext(Userproducts)

    const handleSubmit = (e) => {
        e.preventDefault()
        setuser({product,productprice})
    }

  return (
    <div>
      <input
				type='text'
				value={product}
				onChange={(e) => setProduct(e.target.value)}
				placeholder='Please Enter product Name'
				style={{ fontSize: '20px', marginRight:'30px' }}
			/>
			<input
				type='number'
				value={productprice}
				onChange={(e) => setProductprice(e.target.value)}
				placeholder='Please Enter Ammount'
				style={{ fontSize: '20px' }}
			/>
			<button onClick={handleSubmit} style={{ border: '2px', outline: '2px' }}>
				submit
			</button>
    </div>
  )
}

export default Products1
