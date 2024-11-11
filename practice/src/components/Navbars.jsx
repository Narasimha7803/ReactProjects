import React from 'react'
import { Link } from 'react-router-dom'
function Navbars() {
  return (
    <div>
      
        <Link to= "/">
        <span>MAINPAGE</span><br />
        </Link>
        <Link to= "/app/firstpage">
        <span>FIRSTPAGE</span><br />
        </Link>
        <Link to= "/app/secondpage">
        <span>SECONDPAGE</span>
        </Link>
    </div>
  )
}

export default Navbars
