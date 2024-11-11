import React, { useState,useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { EditPageList,putpagelist,postpagelist } from '../service components/ContactuService';

function Form({mode,id}) {
  const[form,setForm]= useState('');
  const[editdata,setEditdata]= useState('none');

  const Edit= async (id) => {
      let editdata = await EditPageList(id);
      setForm(editdata);
      setEditdata('block');
  }

  useEffect(()=>{
      if(mode && mode != undefined ){
          if(mode === 'edit')
            Edit(id);
          else(mode === 'add')
            setForm(editdata);
            setEditdata('block');
  }},[mode, id]);

  const closeOverlay=()=>{
    setEditdata('none');
    location.reload();
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.success(" Data Updated Sucessfully !");
    if (mode === 'edit') {
        await putpagelist(form);
    } else{
        await postpagelist(form);
    }
    closeOverlay();
  }

  return (
    <div>
      
      <div id="overlay" style={{display:editdata}}>
        <div className="form">
          <a href="" onClick={closeOverlay}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-square-fill" viewBox="0 0 16 16" style={{width:"30px",height:"30px",marginLeft:'470PX'}}>
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708"/>
              </svg>
          </a>  
            <form onSubmit={handleSubmit} className="container mt-4">
              <h1>{mode === 'add' ? 'Add' : 'Edit'} DATA</h1>
              <div className="input-group mb-3">
                <span className="input-group-text" id="addon-wrapping">NAME</span>
                <input type="text" className="form-control" id="fullName" value={form && form.full_name} onChange={(e) => setForm({ ...form, full_name: e.target.value })} required />
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text" id="addon-wrapping">EMAIL</span>
                <input type="email" className="form-control" id="user_email" value={form && form.user_email} onChange={(e) => setForm({ ...form, user_email: e.target.value })} required />
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text" id="addon-wrapping">PHNO</span>
                <input type="number" className="form-control" id="user_mobile" value={form && form.user_mobile} onChange={(e) => setForm({ ...form, user_mobile: e.target.value })} required />
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text" id="addon-wrapping">MESSAGE</span>
                <input type="textarea" className="form-control" id="message" value={form && form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required />
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text" id="addon-wrapping">STATUS</span>
                <input type="text" className="form-control" id="status" value={form && form.status} onChange={(e) => setForm({ ...form, status: e.target.value })} required />
              </div>

              <button type="submit" className="btn btn-primary">Save</button>
            </form> 
            <ToastContainer/>
        </div>  
      </div>
    </div>
  )
}
export default Form