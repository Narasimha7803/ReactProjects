import React from 'react'
import { useState } from 'react'

function Form()  {
    const [fname,setFname] = useState('');
    const [lname,setLname] = useState('');
    const [email,setEmail] = useState('');
    const [phno,setPhno] = useState('');
    const [description,setDescription] = useState('')
  
  return (
    <div className='forms'>
        <form action=""  >
          <h1>Signup</h1>
        <div>Firstname: <input type="text" id='fname' name='fname' value={fname}  onChange={(e) => setFname(e.target.value)} required /></div>
        <div>Lastname:  <input type="text" id='lname' name='lname' value={lname}  onChange={(e) => setLname(e.target.value)} /></div>
        <div>Email:     <input type="email"  value={email} id='email' name='email' onChange={(e) => setEmail(e.target.value)}/></div>
        <div>Phno:      <input type="number" id='number' name='number' value={phno} onChange={(e) => setPhno(e.target.value)}/></div>
        <div>Gender:    <input type="radio" id='male' name='gender' value='male'   onChange={(e)=> (e.target.value)}/>
                        <label htmlFor='male'>male</label>
                        <input type="radio" id='female' name='gender' value='female'   onChange={(e)=> (e.target.value)}/>
                        <label htmlFor='female'>female</label>
        </div>
        <div>Languages: <input type="checkbox" name="language" id="telugu" value='telugu'  onChange={(e) => (e.target.value)}/>
                        <label htmlFor="telugu">Telugu</label>
                        <input type="checkbox" name="language" id="english" value='english'  onChange={(e) => (e.target.value)}/>
                        <label htmlFor="english">English</label>
                        <input type="checkbox" name="language" id="hindi" value='hindi'  onChange={(e) => (e.target.value)}/>
                        <label htmlFor="hindi">Hindi</label>
        </div>
        <div>
            choose a Course:  <select name="course" id="course" >
                <option>CSE</option>
                <option>ECE</option>
                <option>EEE</option>
                <option>MECH</option>
            </select>
        </div>
        <div>
            Description: 
             <textarea type="textarea" value={description} rows="2" cols="20" onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div><input type="submit" value="submit" /></div>
        </form>
    </div>
  )
}

export default Form
