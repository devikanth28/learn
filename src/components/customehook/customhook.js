import React, { useState } from 'react'

const useCustomhook = (initialState) => {
  const [counter, setCounter] = useState(initialState);

  const handleIncrement = () =>{
      setCounter(counter+1);
  }

  const handleDecrement = () => {
      setCounter(counter - 1);
  }

  return {counter, handleDecrement, handleIncrement}
}

export default useCustomhook;