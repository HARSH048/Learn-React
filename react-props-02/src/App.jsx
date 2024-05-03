import { useState } from 'react'
import './App.css'
import Comp from './components/comp'

function App() {
  const elements=['harsh','komal','rekha','mansi']
  return (
    <>
      <div className="rounded-lg bg-blue-500 p-4">
      hello users
    </div>
    {elements.map((element, index) => (
        <Comp userName={element}/>
      ))}
    </>
  )
}

export default App
