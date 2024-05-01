import React, { useEffect, useState } from 'react'

const CounterWithSetInterval = () => {
    const [counter, setCounter] = useState(0);

   setInterval(()=>{
       setCounter(counter + 1)
   },3000)

  return (
    <div>{counter}</div>
  )
}

export default CounterWithSetInterval