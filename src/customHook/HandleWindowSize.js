import React from 'react'
import useWindowSize from './useWindowSize'

const HandleWindowSize = () => {
    const window = useWindowSize();
  return (
    <div>
        window width :{window.width}
        <br/>
        window height:{window.height}
    </div>
  )
}

export default HandleWindowSize