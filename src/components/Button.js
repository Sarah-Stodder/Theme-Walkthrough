import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'


const buttonDark = {
    backgroundColor: 'rgba(255, 255, 255)',
     
}

const buttonReg = {
    regular:{
        backgroundColor: 'rgba(0, 0, 0)',
    }
}
export default function Button() {
    const {currentTheme} = useContext(ThemeContext)
  return (
    <div style={currentTheme=='primaryTheme'? buttonReg: buttonDark}>Button</div>
  )
}
