import React, { useEffect, useState } from 'react'

const DynamicTable = () => {
    const[rowsCount, setRowsCount] = useState(0);
    const [price, setPrice] = useState(0);
    const [totalPrice, setTotalPrice]=useState(0);
    // useEffect(()=>{
    //     setTotalPrice(parseInt(totalPrice) + parseInt(price));
        
    // },[price])
    const addingPrice = (e)=>{
      setPrice();
      setTotalPrice(parseInt(totalPrice) + parseInt(e.target.value))
    }
    setTimeout(()=>{
    },"4000")
    const addingRowsCount = (rCount) => {
        const rows = [];
        for (let count = 0; count <= rCount; count++) {
            rows.push(
            <tr key={count}>
              <td><input type="text" onChange={(e) => addingPrice(e)}/></td>
              <td><input type="text" /></td>
            </tr>
          );
        }
        
        return rows;
    }
   
    //  let fullPrice = setTotalPrice(parseInt(totalPrice) + parseInt(price));;
    console.log(totalPrice,"fullPrice") 
  return (
      <>
      <button onClick={()=>{setRowsCount(rowsCount+1)}}>Add</button>
    <table>
    <tr>
      <th>Price</th>
      <th>Product</th>
    </tr>
    {/* {rowsCount.length } */}
    {/* <tr>
      <td><input type="number"/></td>
      <td><input type="text"/></td>
    </tr> */}
    {addingRowsCount(rowsCount)}
    {totalPrice}
  </table>
      </>
  )
}

export default DynamicTable