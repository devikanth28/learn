import React, { useContext } from 'react'
import { CountContext } from './MyContext'

const DisplayCount = () => {
    const {count} = useContext(CountContext)
  return (
    <div>This component is Display Copmnent {count}</div>
  )
}

export default DisplayCount