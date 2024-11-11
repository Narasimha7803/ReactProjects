import React, { useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react'


function Contact() {
    const [contact,setContact] = useState(null);
    const [form, setForm] = useState(null);
    const[editdata,seteditdata]= useState('none');
    
    // const [isediting,setisEditing]= useState(false)
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
    seteditdata('block');
  }

  const handlesubmit =(e) =>{
    e.preventDefault(); 
    console.log(form);
      axios
    .put('http://18.130.219.171:3200/cont/'+form.id,form)
    .then((response)=>{
        console.log(response)     
    })

    };

  //  useEffect(()=>{
  //   const data={
  //       full_name:'narasimha',
  //       user_email:'naidu@gmail',
  //       user_mobile:'123456789',
  //       message:'testing',
  //       status:'unread'
  //       }
  //         const postData=()=>{
  //           axios
  //           .post('http://18.130.219.171:3200/cont', data)
            
  //           .catch((error) => console.error(error));   
  //         }
  //         postData();
  //       })
 
      

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

const addingdata = () => {
  setForm({
  full_name: '',
  user_email: '',
  user_mobile: '',
  message: '',
  status: ''
  });
  setisEditing(false);
  seteditdata('block');
  };

const closeOverlay = () => {
  seteditdata('none');
  };

  return (
    <div>
      <h1>CONTACT US</h1>
      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
      <button type="button" class="btn btn-primary" onClick={addingdata}>ADD</button>
      </div>
        <table class="table table-success table-striped">
          <thead>
            <tr>
              <th >ID</th>
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
                <td><a href="javascript:void(0)" onClick={() => Edit(item.id)} ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                      <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                      <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                    </svg></a>
                </td>              
                <td><a href="javascript:void(0)" onClick={() => Delete(item.id)}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
                      </svg></a>
                  </td>
                
              </tr>
                })}
                </>
        )}
          </tbody>
        </table>

        <div id='overlay' style={{display: editdata}} >
            <div className='form'>
              <a href="javascript:void(0)" onClick={closeOverlay} > 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square-fill" viewBox="0 0 16 16" style={{width:"30px",height:"30px",marginLeft:'470PX'}}>
                  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708"/>
                </svg>
              </a>
            <form onSubmit={handlesubmit} className="container mt-4">
              <h1>UPDATE DATA</h1>
              <div class="input-group mb-3">
              <span class="input-group-text" id="addon-wrapping">NAME</span>
              <input type="text" className="form-control" id="fullName"value={form && form.full_name} onChange={(e) => setForm({ ...form, full_name: e.target.value })}  />
              </div>
              <div class="input-group mb-3">
              <span class="input-group-text" id="addon-wrapping">EMAIL</span>
              <input type="email" className="form-control" id="user_email"value={form && form.user_email} onChange={(e) => setForm({ ...form, user_email: e.target.value })}  />
              </div>
              <div class="input-group mb-3">
              <span class="input-group-text" id="addon-wrapping">PHNO</span>
              <input type="number" className="form-control" id="user_mobile" value={form && form.user_mobile} onChange={(e) => setForm({ ...form, user_mobile: e.target.value })}  />
              </div>
              <div class="input-group mb-3">
              <span class="input-group-text" id="addon-wrapping">MESSAGE</span>
              <input type="textarea" className="form-control" id="message" value={form && form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}  />
              </div>
              <div class="input-group mb-3">
              <span class="input-group-text" id="addon-wrapping">STATUS</span>
              <input type="text" className="form-control" id="status" value={form && form.status} onChange={(e) => setForm({ ...form, status: e.target.value })}  />
              </div>
              <button type="submit" className="btn btn-primary">Save</button>
            </form>
            </div>
        </div>       
    </div>
  )
}

export default Contact
