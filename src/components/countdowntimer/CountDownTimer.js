import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);

  useEffect(() => {
    let countdownInterval;

    if (timerRunning) {
      countdownInterval = setInterval(() => {
        if (hours === 0 && minutes === 0 && seconds === 0) {
          clearInterval(countdownInterval);
          setTimerRunning(false);
        } else {
          if (seconds === 0) {
            if (minutes === 0) {
              setHours((prevHours) => prevHours - 1);
              setMinutes(59);
            } else {
              setMinutes((prevMinutes) => prevMinutes - 1);
            }
            setSeconds(59);
          } else {
            setSeconds((prevSeconds) => prevSeconds - 1);
          }
        }
      }, 1000);
    }

    return () => clearInterval(countdownInterval);
  }, [timerRunning, hours, minutes, seconds]);

  const startTimer = () => {
    if (hours >= 0 && minutes >= 0 && seconds >= 0) {
      setTimerRunning(true);
    }
  };

  const stopTimer = () => {
    setTimerRunning(false);
  };

  return (
    <div>
      <h2>Countdown Timer</h2>
      <div>
        <input
          type="number"
          placeholder="Hours"
          value={hours}
          onChange={(e) => setHours(parseInt(e.target.value))}
        />
        <input
          type="number"
          placeholder="Minutes"
          value={minutes}
          onChange={(e) => setMinutes(parseInt(e.target.value))}
        />
        <input
          type="number"
          placeholder="Seconds"
          value={seconds}
          onChange={(e) => setSeconds(parseInt(e.target.value))}
        />
      </div>
      <div>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
      </div>
      <div>
        <p>
          {hours.toString().padStart(2, '0')}:
          {minutes.toString().padStart(2, '0')}:
          {seconds.toString().padStart(2, '0')}
        </p>
      </div>
    </div>
  );
};

export default CountdownTimer;
