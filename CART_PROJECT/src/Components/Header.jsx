import React, { useState,useContext } from 'react'
import Usercontext from '../Context/Usercontext';
import 'bootstrap/dist/css/bootstrap.css';

function Header({}) {
   const [products,setProducts] = useState('')
   const {user,setUser} = useContext(Usercontext)

  const handlesubmit=( )=>{
setProducts('block')
  }

  const changeQuantity = (product, mode) => {
    
    const temp = user.map((item) => {
      if(product.ids === item.ids){
        if(mode === 'inc'){item.quantity += 1; 
        }
        
        else if (mode === 'dec' && item.quantity>1 ){
          item.quantity -= 1;
        }
          

      }
      return item;
    });
    setUser(temp);
  }

  
     
return (
  <div style={{backgroundColor:'pink'}}>
  <ul className="nav justify-content-center">
  
  <li className="nav-item">
    <a className="nav-link" href="#">HOME</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">ABOUT</a>
  </li>
  <li className="nav-item">
    <a className="nav-link disabled" aria-disabled="true">CART</a>
  </li>

<button onClick={handlesubmit}  type="button" class="btn btn-primary position-relative">
<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
</svg>
  <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
    <span class="visually">{user.quantity}3</span>
  </span>
</button>

</ul>

<div id='overlay' style={{display:products}} >
  <b><h3>CART PRODUCTS</h3></b> 
      
       <div className='cartdetails'> 
       {user.map((product, index) => (
                <div key={index}>
                  MODEL: {product.m} <br />
                  PRICE: {product.p*product.quantity} <br />
                  PRODUCT ID: {product.ids}
                  <div>
                    Quantity: {product.quantity}
                    <button onClick={() => changeQuantity(product, 'inc')}  style={{  backgroundColor: 'green' }}>count +</button>
                    <button onClick={() => changeQuantity(product, 'dec')}  style={{ backgroundColor: 'red',marginLeft: "10px" }}>count -</button>
                  </div> <hr />                
                </div>                
              ))}
     </div>      
      <button type="submit" className='buynow'>BUY NOW</button>    
</div>
</div>
  )
}   

export default Header
