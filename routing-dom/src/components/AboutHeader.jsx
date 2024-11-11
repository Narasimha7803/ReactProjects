import React from 'react'
import { Outlet } from 'react-router-dom'

function AboutHeader() {
  return (
    <div>
      <h1 style={{color: 'yellow'}}>Main Header</h1>
      <Outlet />
    </div>
  )
}

export default AboutHeader
