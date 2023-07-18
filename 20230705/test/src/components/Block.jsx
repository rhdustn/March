import React from 'react'

const Block = ({data,name,result}) => {
    let temp = "";
    if(name =="유저"){
        temp=result
    }else{
        // result =="무승부면 문제가 없음 무승부는 놔둠"
        // result =="이겼다"면 졌다라고 보여줘야함
        temp =result ==="무승부" ? "무승부" :result ==="이겼음" ? "졌음" :"이겼음"
    }
  return (
    <div className='block'>
        <div>{name}</div>
        {/* react에서 이미지 import해오는 방법 */}
        {/* 리액트에서 가장 많이 사용하는 조건부 랜더링 값이 있으면 값을 사용해라라는 구문 */}
        {/* 값이 없으면 페이지가 터지기 때문 */}
        <img src={data && data.img} alt="" />
        <div>{temp}</div>
    </div>
  )
}

export default Block