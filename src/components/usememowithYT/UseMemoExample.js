import React, { useMemo, useState } from 'react'
import ExpensiveCalCulation from './ExpensiveCalCulation';

const UseMemoExample = () => {
    const [count, setCount]=useState(0);
    const [todos, setTodos]=useState([]);
    const calculation = useMemo(()=>
        ExpensiveCalCulation(count)
    ,[count]) 
    const addTodo = () =>{
        setTodos((prevTodo)=>[...prevTodo, "NEW TODO"])
    }
    const increment = () =>{
        setCount(count + 1);
    }
  return (
      <>
        <h2>My Todos</h2>
        {
            todos?.map((item)=>{
                return(
                    <p>{item}</p>
                )
            })
        }
        <button onClick={addTodo}>Add Todo</button>
        <hr/>
        {count}
        <button onClick={increment}>+</button>
        <p>Expensive Calculation</p>
        {calculation}
      </>
  )
}

export default UseMemoExample
