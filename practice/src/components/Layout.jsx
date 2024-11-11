import React from 'react'
import Mainpage from './Mainpage'
import Firstpage from './Firstpage';
import Secondpage from './Secondpage';
import Navbars from './Navbars';
import Addingcontent from './Addingcontent';
import { Routes, Route } from "react-router-dom";


function Layout() {
  return (
    <div>
         <Navbars/>
      <Routes>
        <Route path='/' element={<Mainpage/>} />
        <Route path='/app' element={<Addingcontent/>}>
        <Route path='firstpage' element={<Firstpage/>} />
        <Route path='secondpage' element={<Secondpage/>} />
        </Route>
      </Routes>
       
       
    </div>
  )
}

export default Layout
