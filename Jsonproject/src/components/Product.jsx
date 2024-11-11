import React from 'react'
import data from './Jsondata.json'
function Product() {
   
  return (
    <>  
        {data.products.map((product)=>{
                 return <div key={product.id}>
                            <img src={product.img} style={{width:"200px", height:"200px"}}/>
                            <h2>{product.model}</h2>
                            <h3>{product.company}</h3>
                            <h4>{product.price}</h4>
                            
                        </div>
                     })}
     </>   
    )
    
    
}

export default Product
