import React from 'react'
import { Header } from '../components'
import { useLocation, useParams, useSearchParams } from 'react-router-dom'

// useLocation : hook 함수 현재 브라우저의 url 위치의 값을 가져오는데 사용'

// useParams : hook 함수 url에 params 값을 접근하는데 사용 갹체의 형태로 자려올 수 있다

// useSearchParams : hook 함ㅅ url 의 쿼리값을 가져올때 사용 문자열을 해석해서 쿼리 매개변수의 값을 가져온다
const Detail = () => {
  let temp =[{num :10, name:"셔츠"},{num :20, name:"바지"},{num :30, name:"모자"},{num :40, name:"장갑"}]
  const loaction =useLocation()
  console.log(loaction)
  const params = useParams()
  console.log(params)
  const [query,setQuery] =useSearchParams();
  // query.get 메서드 : 쿼리문의 키로 값을 가져올 수 있다
  console.log(query.get("id"))
  console.log(query.get("num"))
  return (
    <div>
      <Header name={"상세페이지"}></Header>
      <div>분류번호 : {temp && temp[params.id].num } 번</div>
      <div>상품이름 : {temp && temp[params.id].name }</div>
    </div>
  )
}

export default Detail