import React, { memo } from 'react'

const ChaildrenComponent = ({onClickChangeFunction,callBackCount}) => {
    console.log("childrennnn re render")
  return (
      <>
        <p>this is from children component count {callBackCount}</p>
         <div onClick={onClickChangeFunction}>ChaildrenComponent</div>
      </>
  )
}

export default memo(ChaildrenComponent)