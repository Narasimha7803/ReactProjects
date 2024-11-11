import React, { useState, useEffect } from 'react'
import Titles from './Titles'

function Addtask() {
    const[addtitle,setaddtitle]=useState('')
    const[date,setdate]=useState('')
    const[time,settime]=useState('');
    const [modalOpenFlag, setModalOpenFlag] = useState('none');

    const[titles,settitles]=useState([])

    useEffect(() => {
      const savedTasks = JSON.parse(localStorage.getItem('tasks'));
     if(savedTasks){
      settitles(savedTasks);
     } 
  }, []);

    const addingtask =(e) => {
        e.preventDefault();

        const newTask = { addtitle, date, time };
        const updatedTasks = [...titles, newTask];
        
        settitles(updatedTasks)
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        setModalOpenFlag('none');
    }
    

    const reset =() =>{

        setaddtitle(''); 
        setdate('');
        settime('');
    }
    const openmodel=() => {
      setModalOpenFlag('block');
    }
  return (
    <div className='form'>
      <button onClick={openmodel}  className='button'>New</button>
      <div id='overlay' style={{display: modalOpenFlag}}>

      <form action="" onSubmit={addingtask}>
        <label htmlFor="">ADD TITLE :</label>
        <input type="text" id='title'  name='title' value={addtitle} onChange={(e)=> setaddtitle(e.target.value)}  required/> <br /> <br />
        
        <label htmlFor="">DATE:</label>
        <input type='date' value={date} onChange={(e)=> setdate(e.target.value)} required/> <br /> <br />

        <label htmlFor="">TIME:</label>
        <input type='time'  value={time}   onChange={(e)=> settime(e.target.value)} required/> <br /> <br />

        <button  type='submit'  className='button2save'>SAVE</button>
        <button onClick={reset} className='button3reset'>RESET</button>
        
      </form>
      </div>
      <Titles titles={titles}

        const ondelete={(deleteitem) => {
          if(confirm('Are you sure you want to delete the item?')) {
             const updatedTasks = titles.filter((item,index) => index !== deleteitem);
             settitles(updatedTasks)
             localStorage.setItem('tasks', JSON.stringify(updatedTasks));
       }}}
       
        onedit={(index)  => {
          const item = titles[index]
          setaddtitle(item.addtitle)
          setdate(item.date)
          settime(item.time)
          
       }}
       
       /> 
    </div>
  )
}

export default Addtask
