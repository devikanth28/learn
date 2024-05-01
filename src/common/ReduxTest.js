import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from './CounterSlice'
const ReduxTest = () => {
    const dispatch = useDispatch();
    const subscribeStore = useSelector((store)=>store.counter.number);
    console.log(subscribeStore)
    const handleIncrement = (value) => {
        dispatch(increment(value))
    }

    const handleDecrement = (value) => {
        dispatch(decrement(value));
    }
  return (
    <div>
        <button onClick={()=>handleIncrement(1)}>increment the redux counter</button>
        <button onClick={()=>handleDecrement(2)}>decrement the redux counter</button>
        {subscribeStore}
    </div>
  )
}

export default ReduxTest