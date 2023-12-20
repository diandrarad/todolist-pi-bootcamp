import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { editItem, deleteItem, toggleItem } from '../redux/slices/todoSlice';
import Icon from '@mdi/react';
import { mdiContentSaveCheck, mdiWindowClose, mdiPencil, mdiDelete } from '@mdi/js';

export default function Item({ item }) {
  const [isEditing, setEditing] = useState(false);
  const [editedName, setEditedName] = useState(item.name);
  const itemRef = useRef(null);
  const dispatch = useDispatch();
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (itemRef.current && !itemRef.current.contains(event.target)) {
        handleCancel();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [itemRef]);


  const handleSave = () => {
    dispatch(editItem({ id: item.id, name: editedName }));
    setEditing(false);
  };

  const handleCancel = () => {
    setEditing(false);
    setEditedName(item.name);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSave();
    }
  };

  return (
    <li key={item.id} ref={itemRef}>
      <input
        type="checkbox"
        checked={item.checked}
        onChange={() => dispatch(toggleItem(item.id))}
      />

      {isEditing ? (
        <input
          type="text"
          value={editedName}
          onChange={(e) => setEditedName(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      ) : (
        <span style={item.checked ? { textDecoration: 'line-through' } : {}}>
          {item.name}
        </span>
      )}

      <button onClick={isEditing ? handleSave : () => setEditing(true)}>
        <Icon path={isEditing ? mdiContentSaveCheck : mdiPencil} />
      </button>

      <button onClick={isEditing ? handleCancel : () => dispatch(deleteItem(item.id))}>
        <Icon path={isEditing ? mdiWindowClose : mdiDelete} />
      </button>
    </li>
  );
}
