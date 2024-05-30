import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(10);

  const addvalue=()=>{
    if(counter != 13)
    setCounter(counter+1)
  }

  const removeValue=()=>{
    setCounter(counter-1);
  }

  return (
    <>
      <h1>hello world {counter}</h1>
      <button onClick={addvalue}>add count</button>
      <br></br>
      <button onClick={removeValue}>remove count</button>
      <footer>count value is {counter}</footer>
    </>
  )
}

export default App
