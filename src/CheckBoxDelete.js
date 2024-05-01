import React, { useState } from 'react';

const Checkbox = () => {
  const fruits = ["apple", "orange", "banana"];
  const [checkedItems, setCheckedItems] = useState([]);
    const [updateFruits, setUpdateFruits] = useState(fruits);
  const handleCheckbox = (index) => {
    if (checkedItems.includes(index)) {
      setCheckedItems(checkedItems.filter((item) => item !== index));
    } else {
      setCheckedItems([...checkedItems, index]);
    }
  };

  const handleDelete = (selectedItems,index) => {
    const updatedItems = updateFruits.filter((item) => item !== selectedItems);
    const removeIndex = checkedItems.filter((item)=>item !== index)
    // setCheckedItems(updatedItems);
    setCheckedItems([removeIndex])
    setUpdateFruits([...updatedItems]);
  };

  return (
    <React.Fragment>
      <div>Checkbox</div>
      {updateFruits.map((item, index) => {
        const isChecked = checkedItems.includes(index);

        return (
          <React.Fragment key={index}>
            <p>
              <input
                type="checkbox"
                value={item}
                checked={isChecked}
                onChange={() => handleCheckbox(index)}
              />
              {item}
            </p>
            {isChecked && <button onClick={() => handleDelete(item,index)}>Delete</button>}
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
};

export default Checkbox;
