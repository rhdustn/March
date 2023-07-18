import React,{useRef,useState} from 'react'
import Todolist from "./Todolist"
const Container = ({content}) => {
  
  return (
    <div className='container'>
    <div className="app-title">Todo List</div>
      <div className="content">{content}</div>
    </div>
  )
  
}

export default Container