import { useSelector } from 'react-redux';

export default function Footer() {
  const items = useSelector((state) => state.todos);

  if (items.length === 0) return <footer className="stats">The todo list is still empty</footer>;

  const totalItems = items.length;
  const checkedItems = items.filter(item => item.checked).length;
  const percentage = Math.round((checkedItems / totalItems) * 100);

  return (
    <footer className="stats">
      There are {totalItems} tasks in the todo list, {checkedItems} tasks completed ({percentage}%)
    </footer>
  );
}
