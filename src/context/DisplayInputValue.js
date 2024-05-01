import React, { useContext } from 'react'
import { CountContext } from './MyContext'

const DisplayInputValue = () => {
    const{inputValue} = useContext(CountContext)
  return (
    <div>DisplayInputValue{inputValue}</div>
  )
}

export default DisplayInputValue