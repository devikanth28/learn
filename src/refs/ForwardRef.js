import React, { useRef } from 'react'

const ForwardRef = () => {
    const inputRef = useRef();
    console.log(inputRef)
    const handleClick = () =>{
        console.log("Devikanth")
        if(inputRef){
            console.log("inputref",inputRef.current?.innerText,inputRef.current?.offsetHeight)
        }
    }
    // const chaildComponent = (elementRef,title) => {
    //     return(
    //         <div ref={elementRef}>
    //             <h1>{title}</h1>
    //         </div>
    //     )
    // }
    const ChaildComponent = (props) =>{
        return(
            <div ref={props.inputRef}>
                <h1>{props.title}</h1>
            </div>
        )
    }
  return (
    
    <div>
    ForwardRef
    <ChaildComponent elementRef={inputRef} title={"Kundnasir"}/>
    {/* {chaildComponent(inputRef,"Devikanth")} */}
    <p onClick={()=>{handleClick()}}>click</p>
    </div>
  )
}

export default ForwardRef