import React from 'react'
import HeaderInput from './HeaderInput'
import Mypage from './Mypage'

const Header = () => {
  return (
    <div className='header-contain'>
       <img src="img/headerlogo.png" alt="" />
       <HeaderInput />
       <Mypage></Mypage>
    </div>
  )
}

export default Header