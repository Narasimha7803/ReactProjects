import React, { useContext, useState } from 'react'
import Usercontext from '../Context/Usercontext';

const productsList = [
    {
     img: "https://specs-arena.com/wp-content/uploads/2024/01/Samsung-Galaxy-S24-Ultra-3.webp",
     company: "SAMSUNG",
     model: "Samsung Galaxy S26",
     price: 70000,                   
     id: 1               
    },                 
    {
     img: "https://www.bhphotovideo.com/images/images2000x2000/lenovo_81lg004uus_ideapad_l340_i5_8265u_8gb_1tb_1542745.jpg",
     company: "LENOVO",
     model: "LENOVO IDEAPAD SLIM 3(15)",
     price: 90000,
     id: 2
    },
    {
     img: "https://techpp.com/wp-content/uploads/2024/09/iPhone-16-Wallpapers.jpg",
     company: "IPHONE",
     model: "IPHONE 16 Pro Max",
     price: 190000,
     id: 3
    }
   ];

    const Item = ({element}) => {
    const {model, price,id } = element;
    const [m, setM] = useState(model)
    const [p,setP]  = useState(price)
    const [ids,setIds] = useState(id)
    const [ quantity, setQuantity] = useState(1);
    const {user, setUser} = useContext(Usercontext)
    
    
 
   const displaydetails=()=>{
    let temp  = user.filter(item => item.ids === ids);
    if(temp.length == 0){
      setUser((prevUser) => [...prevUser, { m, p, ids,quantity }]);
    } else {
      const temp2 = user.map((item) => {
        if(ids === item.ids){
            item.quantity += 1;ws
        }
      
        return item;
        
      });
      setUser(temp2);
    }
   }

    return (
      <>
        <div className="card" style={{width:'250px'}}>
        <img src={element.img} className="card-img-top" alt={element.company}/>
        <div className="card-body">
        <h5 className="card-title">Model:{element.model}</h5>
        <h5 className="card-title">Price:{element.price}</h5>
        <h5 className="card-title">Product Id:{element.id}</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <button className="btn btn-primary" onClick={displaydetails} > ADD TO CART</button>
        </div>
        </div>
      </>
    )
  }
function Products() {
  return (
    <>
    <div>
      <h1>Products</h1>
                <div class="container text-center">
                <div class="row">
                <div class="col">
                {productsList.map((item) =>
                    <div key={item.id}>
                    <Item element={item} />
                    </div>
                 )}
                </div>
                <div class="col">
                {productsList.map((item) =>
                    <div key={item.id}>
                    <Item element={item} />
                    </div>
                  )}
                </div>     
                <div class="col">
                {productsList.map((item) =>
                    <div key={item.id}>
                    <Item element={item} />
                    </div>
                  )}
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Products
