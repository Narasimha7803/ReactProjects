import React from "react";
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <Link to="/">
        <span>HOME</span><br />
      </Link>
      <Link to="/app/about"><span>ABOUT</span></Link><br />
      
      <Link to="/app/contact">
        <span>CONTACT</span>
      </Link>
    </div>
  );
}

export default Navbar;
