import React from 'react'

const Chaild = ({handleOnClick}) => {
    const handleChaildComponent = () =>{
        handleOnClick('data from chaild component')
    }
  return (
      <>
      <div>Chaild</div>
      <button onClick={handleChaildComponent}>
      Click me to send data to the parent component
    </button>
      </>
  )
}

export default Chaild