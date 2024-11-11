import React from 'react'

function Tablelist({results ,y,z}) {

    
  return (
    <div>
         <b>TOTALINTEREST:</b>  {y}  <br />
        <b>INTEREST PER MONTH:</b>  {z} 
        <table >
          <thead>
            <tr>
              <th>Month</th>
              <th>Interest per month</th>
              <th>Total Amount</th>
            </tr>
          </thead>
          <tbody>
            {results.map((row) => (
              <tr key={row.month}>
                <td>{row.month}</td>
                <td>{row.interest}</td>
                <td>{row.totalAmount}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  )
}

export default Tablelist
