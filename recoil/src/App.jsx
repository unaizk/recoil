import { useState } from 'react'
import './App.css'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { countAtom } from './store/atoms/count'

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
  const count = useRecoilValue(countAtom)
  return (
    <div>
{count}
    </div>
    
  )
}

function Button(){
  const setCount = useSetRecoilState(countAtom)
  return (
    
    <div>
      <button onClick={() =>{
        setCount((prev) => prev+1)
      }}>increment</button>
      <button onClick={() =>{
        setCount((prev) => prev-1)
      }}>decrement</button>
    </div>
  )
}
export default App
