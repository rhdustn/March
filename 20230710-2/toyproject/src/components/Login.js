import React from 'react'
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'

const Login = () => {
  return (
    <div>Login
    <Link to="/order">주문페이지로 이동</Link>
    </div>
  )
}

export default Login