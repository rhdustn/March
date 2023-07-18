import React from 'react'
import { useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'

import { Count,CountView ,ItemList} from '../components/Order'

const Order = () => {
  
  return (
    <>
    <div>Order</div>
    {/* <Count /> */}
    {/* <CountView/> */}
    <ItemList />
    <br />
    <Link to={'/mypage'}>마이페이지로 이동</Link>
    </>
    
  )
}

export default Order