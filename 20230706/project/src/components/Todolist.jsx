import React from 'react';
import TodoItem from './TodoItem';
function TodoList({todoItems, onDelete,onCheck}){  
    console.log(todoItems) 
  return (   
    <ul>
      <li>         
        {
        todoItems.map((item, i)=> {
            console.log(item)
        return <TodoItem onCheck={onCheck} item={item} id={i} onDelete={onDelete}/>})}
      </li>      
    </ul>  )}    
export default TodoList;