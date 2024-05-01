import React from 'react'

const DuplicateObjects = () => {
    let customList = [
        { voterName: 'Paul', eligibility: 'Yes' , city: "NewYork"},
        { voterName: 'Eva', eligibility: 'No', city: "Santiago"},
        { voterName: 'Veronica', eligibility: 'Yes' , city: "NewYork"}
      ];
      const filterList = customList.filter(user => user.city == "NewYork");
      console.log("filteredList",filterList)
  return (
    <div>DuplicateObjects</div>
  )
}

export default DuplicateObjects