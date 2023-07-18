import React from 'react'
import {Link, Navigate,useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux';
const Main = () => {
  const navigate=useNavigate();
  return (
    <div>
      <Link to={'/login'}>로그인으로 이동</Link>
      <br />
      <Link to={'/mypage'}>마이페이지로 이동</Link>
      <br />
      <Link to={'/order'}>주문페이지로 이동</Link>
      {/* <div className="" onClick={()=>{
        // window.location.href='/login'
        navigate('/login')
      }} style={{cursor:'pointer'}}>로그인으로 이동함수</div> */}
    </div>
  )
}

export default Main