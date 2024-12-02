import { useState } from "react"


function App() {
 
const [color,setColor]=useState("olive")

const changeColor=()=>{
  let colorinp = document.getElementById('colorPicker').value;
  setColor(colorinp);

}

  return (
    <>
     <div className="w-full h-screen flex justify-center"
     style={{backgroundColor:color}}
     >
      <div className="w-1/2 px-10  h-12 bg-white rounded-full flex justify-center items-center">
        <h2 className="mx-2">Pick a color :</h2>
        <input className="w-1/2" type="color" name="" id="colorPicker" />
        <button className="m-2 px-5 py-2 rounded-full" style={{backgroundColor:color}} onClick={changeColor}>Apply Color</button>
      </div>
     </div>
    </>
  )
}

export default App
