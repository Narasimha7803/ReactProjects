import React from 'react'
import { useState } from 'react';
function Usestate() {
      
  const [color, setColor] = useState("red");
    
  return (
    <>
      <h1 style={{color: 'orange' }}>My favorite color is <span style={{color: color }} >{color}</span>  !</h1>
      <button style={{color:'blue'}}
        type="button"    
        onClick={() => setColor("blue")}
      >Blue</button>
      <button  style={{color:'red'}}
        type="button"
        onClick={() => setColor("red")}
      >Red</button>
      
      <button  style={{color:'green'}}
        type="button"
        onClick={() => setColor("green")}
      >Green</button>
    </>
  );
}

export default Usestate
