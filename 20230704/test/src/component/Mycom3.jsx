// 함수형 컴포넌트를 만들어보자
// rafce
// 
// 함수형 컴포넌트에서 state와 props의 값은 어떻게 관리해야하나
// react hook useState useEffect
// useState : 상태값을 만들어 준다. 상태값을 수정할때 사용할 메서드를 만들어 준다.
// useEffect : 라이프 사이클을 지원해준다


import React, { useEffect, useState } from 'react'
// 함수형 커포넌트의 props 값은 매개변수로 전달된다
// 구조분해할당해서 바로 사용해도 상관없음
const Mycom3 = ({newnum,newnum2,newnum3}) => {
    console.log(newnum,newnum2,newnum3)
    // count 변수 선언
    let count =0
    // 다시 리랜더링 되면 코드르 다시 실행 시키는 과정에서 변수가 다시 선언된다
    // useState : 첫번째 반환값이 상태변수 두번쨰 값은 업데이트랗 setState 함수
    // useState : 매개변수로 전달한 값이 초기ㄱ값
    const [num, setNum] =useState(0);
    const [active, setactive]=useState(false)

    // useEffect 라이프 사이클 함수
    // useEffect의 첫번째 매개변수 함수를 전달하고, 두번째 매개변수 배열을 전달한다
    // 첫번째로 전달한 함수를 두번쨰 매개변수의 상태를 확인하고 실행시킨다.
    // [] 빈배열을 전달한 경우 componentDodMount
    // [num] 배열에 전달된 값이 수정된 경우에 실행componentDidMount, componentDidUpdate
    // [num] 뱌열에 전달한 값만 주시한다

    
    useEffect(()=>{
        console.log("componentDidMount")
    },[])
    useEffect(()=>{
        // num이 변경된경우 이 업데이트 함수만 실행된다
        // 제어문을 사용해서 만들어 주면 된다
        console.log("componentDidMount, componentDidUpdate")
        console.log("나는 num")
        // 상태가 변화한 이후의 값을 사용하는 라이프사이클 함수
        console.log("상태 : "+num)
    },[num])
    useEffect(()=>{
        console.log("나는 active")
    },[active])

    useEffect(()=>{
        // num,active 둘 중 하나라도 뱐걍이 되면 업데이트 함수 실행
        console.log("num이나 active가 변경됨")
    },[num,active])
    function clickHandler(){
        console.log("클릭함")
        // 상태를 변경
        // 상태값을 사용하는 이유
        // 이전의 상태값이 보관이 된다
        // 상태의 값이 계속 유지가 된다
        setNum(num+1);
        count++;
        console.log("변수 : "+count)
        // console.log("상태 : "+num)
        // 실수가 많으니까 주의 상태값을 수정하고 바로 값을 사용하면 안됨
       
    }
    function activeHandler(){
        // active가 변경된경우 이 업데이트 함수만 실행된다
        setactive(!active)
    }
  return (
    <div><button onClick={clickHandler}>클릭</button>
    <button onClick={activeHandler}>활성화/비활성화</button></div>
  )
}

export default Mycom3