import React, { useEffect, useMemo, useState  } from 'react'
import ChaildComponent from './ChaildComponent';

const UseMemoHook = () => {
    
    const [count, setCount] = useState(0);
    const [nums, setNums] = useState(0);
    let num =0;
    console.log(num);
    useEffect(() =>{
    console.log("useEffecr mounted..........")
    
    },[count])
    const filteredData  = useMemo(()=>{
        console.log("useMemo",count);
        console.log(Date.now());
        return  Date.now();
    },[count])
 

    const filteredData1  = useEffect(()=>{
        console.log("useEffect",count)
        const data = Date.now();
        console.log(Date.now());
    },[count])

    console.log("devikanth");
 
    return (
      <>
      {count}
      {console.log("return is executing")}
      <p>filteredData,{filteredData}</p>
      <p>filteredData1{filteredData1}</p>
     
      <button onClick={()=>setCount(count+1)}>increment UseMo</button>
      <button onClick={()=>setCount(count-1)}>Decrement</button>
      <button onClick={() => {setNums(nums+1);num++;}}>Nums</button>
      </>
  )
}

export default UseMemoHook