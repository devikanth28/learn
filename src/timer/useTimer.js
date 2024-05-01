import React, { useEffect, useState } from 'react'

const useTimer = () => {
    const [startTimer, setTimer]=useState();
    const [seconds, setSeconds] = useState(0);

    useEffect(()=>{
        let interval;
        if(startTimer){
            interval = setInterval(()=>{
                setSeconds((prevSec)=>prevSec+1)
            },1000)
        }
        else{
            clearInterval(interval)
        }
        return()=>clearInterval(interval)
    },[startTimer])

    const handleStartTimer = () => {
        setTimer(true)
    }

    const handlePause = () => {
        setTimer(false)
    }

    const resetTimer = () => {
        setSeconds(0)
        setTimer(false);
    }
  return {seconds, handleStartTimer, handlePause, resetTimer}
   
  
}

export default useTimer