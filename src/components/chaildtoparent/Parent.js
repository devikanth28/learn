import React, { useState } from 'react'
import Chaild from './Chaild'

const Parent = () => {
  const [data, setData] = useState('');

  const handleClick = (data) => {
    setData(data);
  };
  return (
    <React.Fragment>
      <div>Parent</div>
      <Chaild handleOnClick={handleClick} />
      <p>Data from chaild to parent {data}</p>
    </React.Fragment>
  )
}

export default Parent