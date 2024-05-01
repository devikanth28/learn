import React, { useCallback, useState } from 'react'

const UseCallbackComponent = () => {
const [counter, setCounter] = useState(0);

    const handleVuttonClicked = () =>{
        console.log("Button Clicked")
    }
 

    const memoizedFunc = useCallback(()=>{
        handleVuttonClicked();
    },[])
  return (
    <div>
        {counter}
        <button onClick={()=>{setCounter(counter + 1)}}>Increment</button>
        <button onClick={memoizedFunc}>click</button>
    </div>
  )
}

export default UseCallbackComponent