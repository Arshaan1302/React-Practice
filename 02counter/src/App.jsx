import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
   let [counter,setCounter] =useState(10)
   let [name,setName]=useState('Arshaan')

   const addValue = () =>{
    if(counter<20){

      setCounter(counter+1)
    }
   }
   const removeValue = () =>{
    if(counter>0){
      
      setCounter(counter-1)
    }
   }

   const clear = () =>{
    setCounter(0)
   }
   
   const changeName = () =>{
    let value =  document.getElementById('renameAccount').value
    setName(value)
   }
   

  return (
    <>
    <h2>Your name is {name} </h2>
      <h1>Counter Application</h1>
      <h1>Count : {counter}</h1>
      <button onClick={addValue}>Increase</button>
      <button onClick={removeValue}>Decrease</button>
      <button onClick={clear}>Clear</button>
      <div>
      <input id='renameAccount' type="text" />
      <button onClick={changeName}>Change Name</button>
      </div>
      <p>You are currently logged in : {name} </p>
    </>
  )
}

export default App
