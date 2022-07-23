import React, { useContext, useState } from 'react'
import { ThemeContext } from './App'
import GrandSon from './GrandSon'
/* 
  we are importing the Context from the parent in order to use it 
  we are using useContext function from react to send it 
  the context from parent 
  and the value it return it the value we set in the parent . the "value"
*/
export default function CounterHooks({initialCount}) {
  const [count, setCount] = useState(initialCount)
  // this is value (style)
  let style = useContext(ThemeContext)

  console.log(style.color)

  return (
    // we use the style in the buttons and when we are changing the state of the style , it change all over the app 
    //  the context have to be conected to a state so the app will be reneder when it changed
    <div>
      <button  style={style} onClick={()=>setCount(prevCount=>prevCount-1)}>-</button>
      {count}
      <button  style={style} onClick={()=>setCount(prevCount=>prevCount+1)}>+</button>
      <button  style={style} onClick={
        ()=>{
          setCount(prevCount=>prevCount+1)
          setCount(prevCount=>prevCount+1)

        }

      }>+2</button>
      <GrandSon />
    </div>
  )
}