import React from 'react'
import {useSelector } from "react-redux"
import CountView2 from './CountView2'

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

export default CountView