import React from 'react'

function Titles({titles, ondelete,onedit}) {

    
  return (
    <div className='table'>
      
            <ul >
            
            {titles.map((item,index) =>
    
                <li key={index}  className='list'>
                  <input type="checkbox"   className='checkbox'  />
                  <div className='listdata'>
                    <div> <h2>{item.addtitle} </h2></div>
                    <div className='dandt'>{item.date},
                    {item.time} </div>                  
                    
                     <div>
                        <br />
                        <button className='buttondel'  onClick={() => ondelete(index) }>Delete</button>
                        <button  className='button1edit' onClick={()=> onedit(index) } >Edit</button>
                     </div>
                    
                  </div>
                  
                </li>  
                )}
            </ul>   
  
    </div>
  )
}

export default Titles
