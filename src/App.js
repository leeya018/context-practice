import React, { useState } from 'react';
import Counter from './Counter'
import CounterHooks from './CounterHooks'
import { createContext } from 'react';

/* 
createContext - come from react . we use it to send props to children by a context objec 
the context have 2 properties : consumer and provider. 
providre is the parent / 
consumer is the child as it consume the data form parent.
in the parent we use : Conetxt.Provider and pass prop name "value"
the value we gonna put in value will be consume by the child  */
export const ThemeContext = createContext()

function App() {
  const [theme, setTheme] = useState("red")
  const [color, setColor] = useState("yellow")

  

  console.log("Render App")

  function changeStyle(){
    setTheme(prevTheme => {
      return prevTheme === "red" ? "blue": "red"
  })
    setColor(prevColor => {
      return prevColor === "yellow"? "black" :"yellow"
    })
  }
  return (
    // we are useing the state to send it to the style object
    // I used to stated and both of them I am sending the the object so the child 
    //  can consume it 
    <ThemeContext.Provider value={{backgroundColor:theme, color:color}}>
        Counter
        <Counter initialCount={0} />
        Counter Hooks
        <CounterHooks initialCount={0} />
      <button onClick={changeStyle }>change theme</button>

    </ThemeContext.Provider>
  )
}

export default App 
