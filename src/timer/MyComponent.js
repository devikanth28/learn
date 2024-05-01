import React from 'react'
import useTimer from './useTimer'

const MyComponent = () => {
const {seconds, handleStartTimer, handlePause, resetTimer} = useTimer();

  return (
    <div>
        {seconds}
        <button onClick={handleStartTimer}>start</button>
        <button onClick={handlePause}>pause</button>
        <button onClick={resetTimer}>reset</button>
    </div>
  )
}

export default MyComponent