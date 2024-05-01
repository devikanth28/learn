import React from 'react'
import { useSelector } from 'react-redux'

const SubscribeReduxStore = () => {
    const storeSubscribe = useSelector((store)=>store.counter.number);
    console.log("storeSubscribe", storeSubscribe)
  return (
    <div>SubscribeReduxStore</div>
  )
}

export default SubscribeReduxStore