import { useState } from 'react'
import "./App.css";
import React from "react";
import Layout from './components/Layout';
import { useEffect } from 'react';

function App() {
  const [count, setCount] = useState(1);
 

  useEffect(() => {
    if(count%5 === 0){
      alert("It is divisble by 5");
    }
  }, [count]);

  return (
    <>

     
    
      <Layout />

      <div className="card">
        <h1>new content created</h1>
        <button  style={{backgroundColor:'greenyellow' , color:'red'}}  onClick={() => setCount((count) => count + 2)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
