import React from 'react'
import { Suspense,lazy } from 'react'
import {Routes,Route} from 'react-router-dom'

const Home = lazy(()=>import('./Home'));
const About = lazy(() => import('./About'));
const Contact = lazy(() => import('./Contact'));

function Routesapp() {
  
  return (
    <div>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </Suspense>

    </div>
  )
}

export default Routesapp
