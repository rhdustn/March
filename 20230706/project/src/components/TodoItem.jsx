import React from 'react';

const TodoItem = ({ id, item, onDelete, onCheck }) => {
  const handleCheck = () => {
    onCheck(id);
  };

  const handleClick = () => {
    onDelete(id);
  };

  return (
    <div className="todo-item">
      <input type="checkbox" onChange={handleCheck} />
      <span>{id}: {item}</span>
      <button onClick={handleClick}>삭제</button>
    </div>
  );
};

export default TodoItem;