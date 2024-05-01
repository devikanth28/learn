import React, { useCallback, useState } from 'react'
import ChaildrenComponent from './ChaildrenComponent';

const ParentComponent = () => {
    const [count, setCount]=useState(0);
    const [callBackCount, setCallBackCount]=useState([]);

    // const handleClick = useCallback(()=>{
    //     console.log("Callback is calling")
    //     setCount(count + 1)
    // },[]);

    const handleClick = () =>{
        console.log("call back is calling");
        setCount(count + 1);
        console.log("count",count)
    }
// const onClickChangeFunction = useCallback(() =>{
//     console.log("onClickChangeFunction");
//     setCallBackCount((prevValue)=>[...prevValue, "NEW CALL BACK FUNCTION"])
// },[callBackCount])

// const onClickChangeFunction = useCallback(()=>{
//     // setCallBackCount((preValue) => [...preValue, "CALL BACK FUNCTION CALLING"])
//     setCallBackCount(["CALL BACK"])
// },[callBackCount])

const onClickChangeFunction = useCallback(() => {
    setCallBackCount((prevValue) => [...prevValue, "CALL BACK FUNCTION"])
},[callBackCount])


  return (
      <React.Fragment>
          <ChaildrenComponent callBackCount = {callBackCount} onClickChangeFunction={onClickChangeFunction}/>
          <p>Count : {count} </p>
          {/* <button onClick={handleClick}>Click me</button>    */}
          {/* <button onClick={() => setCount(count + 1)}>Increment</button> */}
          {/* <ChaildComponent onClick={handleClick}/> */}
          <button onClick={handleClick}>Increment</button>
      </React.Fragment>
  )
}

// function ChaildComponent ({onClick}){
//     return(
//         <button onClick={onClick}>Increment</button>
//     )
// }
export default ParentComponent