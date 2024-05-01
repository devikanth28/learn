import React, { useEffect, useState } from 'react'

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState(
        {
            width:window.innerWidth,
            height:window.innerHeight
        }
    );
    function handleResize(){
        setWindowSize({
            width:window.innerWidth,
            height:window.innerHeight
        })
    }
    useEffect(()=>{
        handleResize();
        window.addEventListener('resize',handleResize);
        return() =>{
            window.removeEventListener('resize',handleResize)
        }
    },[]);
  return (
    windowSize
  )
}

export default useWindowSize