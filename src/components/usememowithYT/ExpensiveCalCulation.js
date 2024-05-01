import React from 'react'

const ExpensiveCalCulation = (count) => {
    console.log("calculating");
    for(let i =0; i < 1000000000; i++){
        count += 1;
    }
  return count;

}

export default ExpensiveCalCulation