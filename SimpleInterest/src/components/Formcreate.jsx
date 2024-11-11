import React from 'react'
import Tablelist from './Tablelist';
import { useState } from 'react';

function Formcreate() {

  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');

  const [results, setResults] = useState([]);
  
  const[totalinterest,settotalinterest]=useState('')
  const[monthlyinterest,setmonthlyinterest]=useState('')

  const calculateInterest = (e) => {
    e.preventDefault();

    const P = parseFloat(principal);
    const R = parseFloat(rate);
    const T = parseFloat(time);
    const simpleInterest = (P * R * T) / 100;
    settotalinterest(simpleInterest);
    const monthlyInterest = (P * R) / 100;
    setmonthlyinterest(monthlyInterest);
   
    const tempResults = [];
    for (let month = 1; month <= T; month++) {
      const interest = monthlyInterest;
      const totalAmount = P + interest * month;
      tempResults.push({ month, interest, totalAmount });
    }
    setResults(tempResults);
    
  };

  const handlereset= () =>{
    
    setPrincipal('')
    setRate('')
    setTime('')
    settotalinterest('')
    setmonthlyinterest('')
    setResults([])
  }

  return (
    <div>
            <h1>SIMPLE INTEREST</h1>
      <form onSubmit={calculateInterest}>

        <div>
          <label>Principal (P): </label>
          <input type="number" id='principal' name='principal'  value={principal} onChange={(event) => setPrincipal(event.target.value)} />
        </div>

        <div>
          <label>Rate of Interest:  </label>
          <input type="number" id='rate' name='rate' value={rate} onChange={(event) => setRate(event.target.value)} />
        </div>

        <div>
          <label>Time (T months): </label>
          <input type="number" value={time} onChange={(event) => setTime(event.target.value)} /> 
        </div>

        <br />
        <button type="submit">Calculate</button> 
        <button type="reset"  onClick={handlereset}>reset</button>
        <div>
          <br />  
        

        </div>
        <br />

      </form>

      <Tablelist results={results} y= {totalinterest} z={monthlyinterest} />

    </div>
  )
}

export default Formcreate
