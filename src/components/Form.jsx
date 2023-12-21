import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/slices/todoSlice';
import Icon from '@mdi/react';
import { mdiPlus } from '@mdi/js';

function Form() {
  const [itemName, setItemName] = useState('');
  const dispatch = useDispatch();

  const handleAddItem = () => {
    if (!itemName) return
    dispatch(addItem({ id: Date.now(), name: itemName, checked: false }));
    setItemName('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAddItem();
    }
  };

  return (
    <div className="add-form">
      <input
        type="text"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleAddItem}>
        <Icon path={mdiPlus} size={1} />
      </button>
    </div>
  );
}

export default Form;
