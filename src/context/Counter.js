import React, { useContext } from 'react'
import { CountContext } from './MyContext';

const ContextCounter = () => {
    const {count,increment,decrement} = useContext(CountContext);
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
      );
}

export default ContextCounter