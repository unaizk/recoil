import { useState } from 'react'
import './App.css'

function App() {

  return (
   <div>
      <Count/>
   </div>
  )
}

function Count(){
  return (
    <div>
      <CountRender />
      <Button />
    </div>
  )
}



function CountRender(){
  const count = 0
  return (
    {count}
  )
}

function Button(){
  return (
    <div>
      <button onClick={() =>{
        
      }}></button>
      <button onClick={() =>{
        
      }}></button>
    </div>
  )
}
export default App
