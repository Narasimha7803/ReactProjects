import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PostDataComponent = () => {
    const [responseData, setResponseData] = useState([]);
    const [model,setModel] = useState(null)

    useEffect(() => {
       
        const data = {
            name: 'narasimha',
            job: 'leader'
        };
        
  const postData = () => {
    axios
    .post('https://reqres.in/api/users', data)
    .then((response) => {
        setResponseData(response.data)
    })
    .catch((error) => console.error(error));
  }
  postData();
    }, []); 
   
    return (
        <div>   
            <p>{responseData.name}</p>
            <p>{responseData.job}</p>
        </div>
    );
};

export default PostDataComponent;
