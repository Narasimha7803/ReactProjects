import React from 'react'

function Updatedata({results}) {
   // console.log('Results:', results);
  return (
    <div>
        <h1>updated data</h1>
       
        <table>
            <thead>
                <tr>
                <th>ID</th>
                <th>Name</th>
                <th>EMAIL</th>
                <th>Phno</th>
                <th>message</th>
                <th>status</th>
                </tr>
            </thead>
            <tbody>
            {results && results.map((item) => (
                
                <tr key={item.id}>
                   
                <td>{item.id}</td>
                <td>{item.full_name}</td>
                <td>{item.user_email}</td>
                <td>{item.user_mobile}</td>
                <td>{item.message}</td>
                <td>{item.status}</td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Updatedata
