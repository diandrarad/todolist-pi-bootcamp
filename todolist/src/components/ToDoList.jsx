import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { clearItems } from '../redux/slices/todoSlice';
import Item from './Item'

function ToDoList() {
  const items = useSelector(state => state.todos);

  const dispatch = useDispatch();

  const handleClearItems = () => {
    dispatch(clearItems());
  };

  const [filter, setFilter] = useState('all');

  const filteredItems = items.filter((item) => {
    if (filter === 'active') return !item.checked;
    else if (filter === 'completed') return item.checked;
    return true; // 'all' filter
  });

  return (
    <>
      <div className="filterButtons">
        <button
          style={{ backgroundColor: filter === 'all' ? '#cbd5e1' : 'transparent' }}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button
          style={{ backgroundColor: filter === 'active' ? '#cbd5e1' : 'transparent' }}
          onClick={() => setFilter('active')}
        >
          Active
        </button>
        <button
          style={{ backgroundColor: filter === 'completed' ? '#cbd5e1' : 'transparent' }}
          onClick={() => setFilter('completed')}
        >
          Completed
        </button>
        <button
          style={{ textDecoration: 'underline' }}
          onClick={handleClearItems}
        >
          Clear List
        </button>
      </div>

      <div className="list">
          {filteredItems.length === 0 ? (
            <h4> Nothing to show</h4>
          ) : (
            <ul>
              {
                filteredItems.map((item) => (
                  <Item
                    key={item.id}
                    item={item}
                  />
                ))
              }
            </ul>
          )}
      </div>
    </>
  );
}

export default ToDoList;