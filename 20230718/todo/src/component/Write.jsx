import React from 'react'
import { useState,useContext } from 'react';
import Global from '../Global';


const Write = () => {

const {content,setContent,showWrite,setShowWrite}=useContext(Global)
  const handleClose = () => {
    setShowWrite(false);
  }
  const handleClick =()=>{

    const obj={
        content : document.querySelector(".write-input").value
    }
   
    setContent([...content, obj])
  }
  return (
    <>
    {showWrite &&(
         <div className='writecontain'>
        <div className='close'onClick={handleClose}>close</div>
        <input  className='write-input' type="text" placeholder='해야할 일' />
        <button onClick={handleClick} className='apply'>등록</button>
    </div>)}
   
    </>
  )
}

export default Write