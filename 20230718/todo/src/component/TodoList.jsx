import React, { useContext, useMemo } from 'react'
import Global from '../Global'
import { useState } from 'react'
import { useCallback } from 'react'

const TodoList = () => {
    const {content,setContent}=useContext(Global)

    const render = useMemo(()=>{
        console.log("렌더됨")
        let arr =[]
        if(content.length==0) return ""
        content.forEach((el,index) => {
            arr.push(
            <ul key={index}>
                <li>{el.content}</li>
            </ul>
            )
        });
        return arr
    },[content])

  return (
    <div className='list'>
    <h3>List</h3>
    {render}
    </div>
  )
}

export default TodoList