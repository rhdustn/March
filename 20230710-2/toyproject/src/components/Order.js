import React from 'react'
import { useDispatch } from 'react-redux'
import {useSelector } from "react-redux"

const Count = () => {
const dispatch = useDispatch();


const handlerAdd =()=>{
    dispatch({type : "ADD"})
}
const handlerRemove = ()=>{
    dispatch({type : "REMOVE"})
}
const Buy =()=>{
  dispatch({type : "BUY"})
}
  return (
    <>
    <div>
        <button onClick={handlerAdd}>+</button>
        <button onClick={handlerRemove}>-</button>
    </div>
    <div>
    <button onClick={Buy}>Buy</button>
    </div>
    </>
  )
}


const CountView = () => {
  // 저장소값을 가져와보자
  // react-redux라이브러리에서 제공 react hook
  // useSelector 전역 상태값을 조회 할때 사용
  // 상태에서 count를 반환
  // count가 변경되었을때 리렌더링 된다
  // count 값ㅇ르 상태로 보고있음
  const count = useSelector(state=>state.count)
return (
  <div>
      {count}
  </div>
)
}

const ItemList = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.items);
  console.log(items)
  const Buy =(id)=>{
    dispatch({type : "BUY", payload:id})
  }
  return (
    <div>
      {items.map(item => (
        <div key={item.id}>{item.name} : {item.price}원 <button onClick={()=>{Buy(item.id)}}>구매</button></div>
      ))}
    </div>
  );
};

export {Count,CountView,ItemList}