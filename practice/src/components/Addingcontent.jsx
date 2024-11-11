import React from 'react'
import { Outlet } from 'react-router-dom'
function Addingcontent() {
  return (
    <div>
        <h1>This is content</h1>
      <Outlet/>
    </div>
  )
}

export default Addingcontent
