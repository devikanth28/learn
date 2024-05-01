import React, { createContext, useState } from 'react';

// Create a new context
const CountContext = createContext();

// Create a provider component to provide the context value
const CountProvider = ({ children }) => {
  const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState()
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const addButton = (value) =>{
    setInputValue(value);
  }
const contextValue ={
  count,
  increment,
  decrement,
  inputValue,
  addButton
}
  // Provide the context value to its children
  return (
    <CountContext.Provider value={contextValue}>
      {children}
    </CountContext.Provider>
  );
};

export { CountContext, CountProvider };
