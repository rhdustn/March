import React from 'react'
import { useDispatch } from 'react-redux'
import {Link, Navigate,useNavigate} from 'react-router-dom'


const Login = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const handlerAdd =()=>{
    dispatch({type : "LOGIN",payload : true})
    navigate('/main');

  }
  const handlerRemove = ()=>{
      dispatch({type : "LOGOUT",payload : false})
      navigate('/main');
  }
  
  return (
    <>
    <div>Login</div>
    <button onClick={handlerAdd}>로그인</button>
    <button onClick={handlerRemove}>로그아웃</button>
    </>
  )
}

export default Login