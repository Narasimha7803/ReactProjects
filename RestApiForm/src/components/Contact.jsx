import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react'
import Updatedata from './Updatedata';

function Contact() {
    const [contact,setContact] = useState(null);
    const [form, setForm] = useState(null)
   const [updatedata, setUpdatedata] = useState([]);

    useEffect(()=>{
        axios
        .get('http://18.130.219.171:3200/cont')
    .then((response) => {
        setContact(response.data.data.items)
    })
    .catch((error) => console.error(error));
  }, []);


  const Edit = (id) => {
    axios
    .get('http://18.130.219.171:3200/cont/'+id)
    .then((response) => {
        setForm(response.data.data)
    })
    .catch((error) => console.error(error));
   
  }
  const handlesubmit =(e) =>{
    e.preventDefault(); 
    console.log(form);
   
    axios
    .put('http://18.130.219.171:3200/cont/'+form.id,form)
    .then((response)=>{
        console.log(response)
        setUpdatedata((prevData) => [...prevData, form]);
        console.log(updatedata); 
    })
    };

//    useEffect(()=>{
//     const data={
//         full_name:'narasimha',
//         user_email:'naidu@gmail',
//         user_mobile:'123456789',
//         message:'testing',
//         status:'unread'
//     }
//     const postData = async () => {
//         try {
//          axios.post('http://18.130.219.171:3200/cont', data);
//         } 
//     };
//     postData()
// },); 
      

const Delete =(id)=>{
    if(confirm('Are you sure you want to delete the item?')){
        axios
        .delete('http://18.130.219.171:3200/cont/' + id)
        .then(() => {
        setContact((Contact) => Contact.filter((item) => item.id !== id));
        })
        .catch((error) => console.error(error));        
    }
}
  return (
    <div>
        <table >
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL </th>
              <th>PH NO</th>
              <th>MESSAGE</th>
              <th>status</th>
              <th>EDIT</th>
              <th>DEL</th>
            </tr>
          </thead>
          <tbody>
          {contact && (
            <>
            {contact.map((item) => {
              return <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.full_name} </td>
                <td>{item.user_email}</td>
                <td>{item.user_mobile}</td>
                <td>{item.message}</td>
                <td>{item.status}</td>
                <td><a href="javascript:void(0)" onClick={() => Edit(item.id)}>Edit</a></td>               
                <td><a href="javascript:void(0)" onClick={() => Delete(item.id)}><img src="https://pluspng.com/img-png/delete-button-png-delete-icon-1600.png" alt="del" style={{width:"20px",height:"20px"}} /></a></td>
              </tr>
                })}
                </>
        )}
          </tbody>
        </table>

        <div>
        <form action="" onSubmit={handlesubmit}>           
               <div>Name: <input type="text" value={form && form.full_name} onChange={(e)=>setForm({...form, full_name: e.target.value})}/></div>
               <div>E-mail <input type="text" value={form && form.user_email} onChange={(e)=>setForm({...form, user_eamil: e.target.value})}/></div> 
               <div>Phno<input type="text" value={form && form.user_mobile} onChange={(e)=>setForm({...form, user_mobile: e.target.value})} /></div>
               <div>Message<input type="text" value={form && form.message} onChange={(e)=>setForm({...form, message: e.target.value})} /></div>
               <div>Status<input type="text" value={form && form.status} onChange={(e)=>setForm({...form, status: e.target.value})} /></div> 
               <button type="submit">save</button>  
            </form>
            
        </div>
        <Updatedata results={updatedata} />
    </div>
    
  )
  
}

  

export default Contact
