import React from 'react'
import {Link, Routes,Route} from 'react-router-dom'
import Addtask from './Addtask'
function Todolist() {
    

  return (

    
    <div className='addtask'>
      <div className='buttonadd'>
        
      <Link to='/addtitle'  > ADD TASK</Link>

      </div>
      
    <Routes>
        <Route path='/addtitle' element={<Addtask/>}/>
    </Routes>

    </div>
  )
}

export default Todolist
