import React, { useState } from 'react';
import {data} from './data.js'; // Assuming 'data' is an array exported from './data'

const Home = () => {
  const [selectedEmployee, setSelectedEmployee] = useState(data[0]);
  const [extractedData, setExtractedData] = useState(data);

  const handleEmployeeSelection = (employee) => {
    setSelectedEmployee(employee);
  };

//   const extractedData = [...data];

  console.log("extractedData",extractedData)
  const handleRemoveEmployee = (empId) => {
    const updatedData = extractedData.filter((emp) => emp.id !== empId);
    setExtractedData(updatedData);
  };
  return (
    <div className='row m-0 card'>
      <div className='col-5'>
        {extractedData.map((eachEmp) => (
          <div
            key={eachEmp.id}
            className='bg-brand d-flex justify-content-between border-bottom p-2'
            onClick={() => handleEmployeeSelection(eachEmp)}
          >
            <span>{eachEmp.firstName}</span>
            <span onClick={()=>{handleRemoveEmployee(eachEmp.id)}}>X</span>
          </div>
        ))}
      </div>
      <div className='col-6'>
        {Object.entries(selectedEmployee).map(([key, value]) => (
          <p key={key}>
            <strong>{key}:</strong> {value}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Home;
