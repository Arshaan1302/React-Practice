import {useCallback, useState,useEffect,useRef} from 'react'

import './App.css'



function App() {
 
  const [length, setLength] = useState(10)
  const[numberAllowed,setnumberAllowed] = useState(false)
  const[charAllowed,setcharAllowed] = useState(false)
  const[password,setPassword] =useState("")

  const passwordGenerator = useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed)str +="1234567890"
    if(charAllowed) str +="!@#$%^&*()?/{}[]~"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass +=str.charAt(char);
    }
    setPassword(pass)
  },[length,numberAllowed,charAllowed,setPassword])


  //useRef Hook 
  const passwordRef = useRef(null)

  const copytoClipboard = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator();
  },[length,numberAllowed,charAllowed,passwordGenerator])

  return (
    <>
      <div className='w-screen h-screen bg-gray-800 py-5 px-5'>
      <div className='px-5 py-5 bg-gray-400 flex justify-center items-center'>
          <h1 className='text-white text-lg m-2 font-bold'>Password Generator</h1>
          </div>
        <div className='px-5 py-5 bg-gray-400 flex justify-center items-center'>
          <input 
          placeholder='Password'  
          className='outline-none w-1/2 px-5 py-2' 
          type="text" 
          value={password}
          name="" id="" 
          ref={passwordRef}
          />
          <button 
          onClick={copytoClipboard}
          className='px-5 py-2 text-white shadow-lg border-violet-700 border  bg-blue-600'>Copy</button>
        </div>
        <div className='px-5 py-5 bg-gray-400 flex justify-center items-center'>
          <input type='range'
            min={6}
            max={20}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}
          />
          <label>Length:{length}</label>
          <input
          type='checkbox'
          defaultChecked={numberAllowed}
          id='numberInput'
          onChange={()=>{
            setnumberAllowed((prev)=>!prev)
          }}
          />
          <label>Numbers </label>
          <input
          type='checkbox'
          defaultChecked={charAllowed}
          id='charInput'
          onChange={()=>{
            setcharAllowed((prev)=>{
              prev = !prev
              return prev
          })
          }}
          />
          <label>Special Characters </label>
        </div>
      </div>
    </>
  )
}

export default App
