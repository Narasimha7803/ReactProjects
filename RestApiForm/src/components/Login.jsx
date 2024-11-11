import React from 'react'
import  {useState,useEffect} from 'react';
import axios from 'axios';


function Login() {
    const [model,setModel] = useState(null);
    const [form, setForm] = useState(null);
    useEffect(() => {
        axios
        .get('https://reqres.in/api/users')
        .then((response) =>{
            setModel(response.data.data)
        })
        .catch((error) => console.error(error));
    },[])
   


    
    const fetchEdit = () => {
        axios
        .get('https://reqres.in/api/users')
        .then((response) => {
            setForm(response.data.data)
        })
        .catch((error) => console.error(error));
      }
      console.log(model)
  return (
    <div>
      {model &&(
            <>
                {model.map((item)=>{
                    return <div key={item.id}>
                        <div>{item.email}</div>
                        <div>{item.first_name}</div>
                        <div>{item.last_name}</div>
                        <div><a href="javascript:void(0)" onClick={() => fetchEdit(item)}>edit</a></div>
                    </div>
                })}
            </>
        )
      }
      <form>
            <input type="text" value ={form && form.email} />
            <input type="text" value={form && form.first_name} />
            <input type="text" value={form && form.last_name} />
            <button type="submit">save</button>
        </form>
    </div>
  )
}

export default Login
