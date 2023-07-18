import React from 'react'
import {Link ,useNavigate} from "react-router-dom"
// Link는 래액트에서 a 태그와 같은 역할을 해준다
// 페이지가 새로고침 되지 않고 url만 변경이 되는것

// react hook 함수 useNavigate 페이지 전환을 위해 사용
const Body = ({path,name,login,item}) => {
    const nav =useNavigate()
  return (
    <div className='body'>
        <Link to={path}>{name}페이지 이동</Link>
        <button onClick={()=>{
            nav(path);
        }}>{name}페이지 이동</button>
        {item && item.id ? <div>ID : {item.id}</div> :null}
        {item && item.num ? <div>분류번호 : {item.num }번</div> :null}
        {item && item.name ? <div>상품이름 : {item.name}</div> :null}
        {login ?<div>로그인 됨</div> :<div>로그인 안됨</div>}
    </div>
  )
}

export default Body