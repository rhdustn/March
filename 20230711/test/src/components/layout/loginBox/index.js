import React from 'react'
import { LoginBoxWrap,LoginBoxInput } from './Login.styled'

const LoginBox = () => {
  return (
    <div><LoginBoxWrap width={"500px"}>
      <p className='login-title'>로그인 박스</p>
      <LoginBoxInput>버튼</LoginBoxInput>
      </LoginBoxWrap></div>
  )
}

export default LoginBox