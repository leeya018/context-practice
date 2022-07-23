import React, { useContext } from 'react'
import { ThemeContext } from './App'


/* 
GrandSon function comonent can consume the style directly from the grandFather */
export default function GrandSon() {

    const style = useContext(ThemeContext)
    
    console.log("grandson : " + style.color)
  return (
    <div style={{"color":style.color}}>grandSon</div>
  )
}
