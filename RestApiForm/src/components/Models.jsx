import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Models() {
    const [model,setModel] = useState(null);

    useEffect(() => {
        axios
        .get('http://192.168.1.115:3200/CarModels')
        .then((response) =>{
            setModel(response.data.data.items)
        })
        .catch((error) => console.error(error));
    },[])
    console.log(model)
  return (
    <div>
      {model &&(
            <>
                {model.map((item)=>{
                    return <div key={item.id}>
                        <div>{item.title}</div>
                        <div>{item.descripton}</div>
                    </div>
                })}
            </>
        )
      }
    </div>
  )
}

export default Models
