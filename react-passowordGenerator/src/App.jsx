
import { useCallback, useEffect, useState } from 'react';

function App() {
  const [length,setLength]=useState(8)
  const [charAllowed,setCharAllowed]=useState(false);
  const [numAllowed,setNumAllowed]=useState(false);
  const [passWord,setPassWord]=useState("")

  const passwordGenerator=useCallback(()=>{
    let pass = "";
    let str = "ABCDEFHIJKLMNOPQRSTUVWXYZ"

    console.log(numAllowed)

    if(numAllowed){
      str+="0123456789"
    }

    if(charAllowed){
      str+="%^&*()@#$"
    }

    for(let i=1;i<=length;i++){
      let char = Math.floor(Math.random()* str.length+1);
      pass+=str.charAt(char)
    }
    setPassWord(pass);
  },[length,numAllowed,charAllowed])

  useEffect(()=>{
    passwordGenerator()
  },[length,charAllowed,numAllowed])
    return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="flex items-center space-x-2 my-4">
          <input
            type="text"
            readOnly
            value={passWord}
            className="border border-gray-300 px-3 py-2 rounded-md w-60"
          />
          <button
            className="bg-blue-500 text-white px-3 py-2 rounded-md focus:outline-none"
          >
            Copy
          </button>
        </div>
        
        <div className="bg-gray-800 p-4">
          <nav className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <label className="text-white">Characters:</label>
              <input
                type="checkbox"
                value={charAllowed}
                onChange={() => setCharAllowed(prev => !prev)}
              />
              <label className="text-white" onChange={()=>{setNumAllowed((prev)=>!prev)}}>Numbers:</label>
              <input
                type="checkbox"
                value={numAllowed}
                onChange={() => setNumAllowed(prev => !prev)}
              />
            </div>
            <div className="flex items-center space-x-4">
              <label className="text-white">Length: {length}</label>
              <input
                type="range"
                min="1"
                max="90"
                className="w-40"
                onChange={(e)=>{setLength(e.target.value)}}
              />
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}

export default App;

