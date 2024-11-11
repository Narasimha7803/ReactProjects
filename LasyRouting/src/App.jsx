import React from "react";
import { Link } from "react-router-dom";
import Routesapp from "./components/Routes";
function App() {
  

  return (
    <>
    
        <Link  to='/' > home</Link>
        <Link  to='/contact' > contact</Link>
        <Link  to='/about' > about</Link>
        
        <Routesapp/>
    </>
  )
}

export default App
