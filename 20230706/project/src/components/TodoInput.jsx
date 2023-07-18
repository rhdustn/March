import React from 'react'
import { useState, useCallback } from "react";


const TodoInput = ({ onInsert }) => {
    const [value, setValue] = useState("");
    const onChange = useCallback((e) => {
        setValue(e.target.value);
      }, []);
     
      const onSubmit = useCallback(
        (e) => {
          onInsert(value);
          setValue("");
     
          e.preventDefault();
        },
        [onInsert, value]
      );
  return (
    <form className="todoInput" onSubmit={onSubmit}>
    <input placeholder="할 일을 입력하세요" value={value} onChange={onChange} />
    <button type="submit">
      
    </button>
  </form>
  )
}

export default TodoInput