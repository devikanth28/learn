import React, { useRef } from 'react'
import ChaildRef from './ChaildRef';

const ParentRef = () => {
    const chaild = useRef();
    const handleClick = () =>{
        console.log(chaild.current.innerText);
        chaild?.current?.scrollIntoView()
    }
  return (
    // <div>ParentRef</div>
    <React.Fragment>
        <ChaildRef ref={chaild}/>
        <button onClick={handleClick}>Click</button>
    </React.Fragment>
  )
}

export default ParentRef