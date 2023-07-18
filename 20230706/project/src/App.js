

import React, {useState} from 'react';
import './App.css';
import { TodoList } from './components';

function App(){
  const [item, setItem] = useState({}); 
  const [todoItems, setTodoItems]= useState([]); 
 

  const handleClick =()=>{                
    setTodoItems([...todoItems, item]);
    setItem('');  };                   

  const handleKeyPress =(e)=> {         
    if(e.key==='Enter'){     
      handleClick();                     
    };
  };

 const handleDelete =(id)=>{           
      todoItems.splice(id, 1);        
      console.log(todoItems);           
      setTodoItems([...todoItems]);    
  };
  const handleCheck=(id)=>{
    const  updatedItems = todoItems.map((item, index) => {
    if (index === id) {
      
      return { item, checked: !item.checked };
    }
    return item;
  });
  console.log(updatedItems);
  setTodoItems(updatedItems);
  } 

 const initialize =()=>{setTodoItems([])};  

 return (
    <div className="App">
       <h1>Todo List</h1>
        <input type="text" value ={item}     
         onChange={(e)=>{                     
            const nextItem = e.target.value;
            setItem(nextItem);                
         }}
         onKeyPress={handleKeyPress}/>         
        <button onClick={handleClick}>추가</button> 
       
       
        <TodoList onCheck={handleCheck} todoItems={todoItems} onDelete={handleDelete}/> 
    </div>  );}  

export default App;
