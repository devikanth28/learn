import React from 'react'
import UseLocalStorage from './UseLocalStorage'

const LocalStorageUsed = () => {
    const {value, setValue} = UseLocalStorage('count', 0);

    const handleIncrement = () => {
        setValue(prevCount => prevCount +1);
    }

    const handleDecrement = () => {
        setValue(prevCount => prevCount - 1)
    }
  return (
    <div>
        <button onClick={handleIncrement}>increment</button>
        {value}
        <button onClick={handleDecrement}>decrement</button>
    </div>
  )
}

export default LocalStorageUsed