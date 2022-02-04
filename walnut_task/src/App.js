import {useState} from 'react'

import logo from './logo.svg';
import './App.css';

function App() {
  const [age,setAge] = useState("")
  const [day,setDay] = useState(0)
  const [month,setMonth] = useState(0)
  const [year,setYear] = useState(0)
  const [error,setError] = useState("")

  const calculateAge = () =>{
    setAge("")
    let a = -1;
    let d = new Date(Date.now())
    let day_today = d.getDate()
    let month_today = d.getMonth()+1
    let year_today = d.getFullYear()

    if(parseInt(year)>year_today){
      setError("Year cannot be greater than the current one")
    }
    else if((parseInt(day)<=0 && parseInt(day)>31) || (parseInt(month)<=0 && parseInt(month)>12) || (parseInt(year)<=0)){
      setError("Invalid input")
    }
    else{
      if(parseInt(year)===year_today && parseInt(month)>month_today){
        setError("Month cannot be greater than the current one")
      }
      else{
        if(parseInt(month)===month_today && parseInt(day)>day_today){
          setError("Day cannot be greater than the current one")
        }
        else{
          a = year_today-parseInt(year)
          if(parseInt(year)===year_today){
            a = 0
          }
          else{ 
            if(parseInt(month)===month_today){
              if(parseInt(day)<day_today){
                a = a-1
              }
            }
            else if(parseInt(month)>month_today){
              a=a-1
            }
          } 
        }
      }
    }
    if(a>=0){
      console.log("pass")
      setAge(`Age: ${a}`)
    }
    else{
      console.log("fail")
      setAge("")
    }  
  }


function onClickGetAge(){
    setError("")
    calculateAge()
    console.log("click")
  }

  return (
    <div className="App">
      <h3>Age calculator</h3>
      <div className='container'>
        <label>Day</label>
        <input type="number" onChange={e=>{setDay(e.target.value)}}/>
        <label>Month</label>
        <input type="number" onChange={e=>{setMonth(e.target.value)}}/>
        <label>Year</label>
        <input type="number" onChange={e=>{setYear(e.target.value)}}/>
        <button onClick={onClickGetAge}>Get Age</button>
      </div>
      <p>
          {age}
          {error}
        </p>
    </div>
  );
}

export default App;
