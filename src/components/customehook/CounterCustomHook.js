import React from 'react'
import useCustomhook from './customhook'

const CounterCustomHook = () => {
    const {counter, handleIncrement, handleDecrement} = useCustomhook(90)
  return (
    <div>
        {counter}
        <button onClick={()=>{handleIncrement()}}>increment</button>
        <button onClick={()=>{handleDecrement()}}>decrement</button>
    </div>
  )
}

export default CounterCustomHook