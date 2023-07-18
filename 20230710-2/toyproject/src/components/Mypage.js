import React from 'react'
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {useSelector } from "react-redux"


const MypageResult = () => {
  const result = useSelector(state=>state.myitems)
  console.log(result)
  return (
    <div>
      {result.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    <Link to="/main">메인페이지로 이동</Link>
    </div>
  )
}

export default MypageResult