import React,{useReducer} from 'react'
const INCREMENT="INCREMENT"
const DECREMENT ="DECREMENT"
// 덜하기 뺄셈만 간단하게 구현
// useState를 사용하던 것과 별로 크게 차이가 없음
// react에서 제공해주는 내장 hook 함수
const Reducer = () => {
    // 상태 초기값
    const init={
        count :0
    }
    // reducer 함수 매개변수로 상태와 액션을 넣어줄 예정 (콜백함수)
    const reducer = (state, action)=>{
        // type 이라는 키값을 전달받을거임
        // action
        //reducer 함수는 반환값이 있어야 하니 return
        const {type}=action;
        switch (type) {
            case INCREMENT:  
            // 이전 상태를 가지고 기능을 작성한 뒤에 반환값으로 상태를 업데이트 해주면 된다
                return{...state, count : state.count+1}
            case DECREMENT:
                return{...state, count : state.count-1}
            default:
                return
        }
    }
    //useReducer 함수에 매개변수로 첫번째는 메뉴판 두번째는 초기값을 전달
    const [state, dispatch]=useReducer(reducer,init)
  return (
    <div>
        지금 count의 상태는 :{state.count}
        <button onClick={()=>{dispatch({type:INCREMENT})}}>더하기</button>
        <button onClick={()=>{dispatch({type:DECREMENT})}}>빼기</button>
    </div>
  )
}
// dispatch의 역할은 dispatch 함수는 리듀서에 액션을 보내는 트리거 역할을 하며,
// 리듀서는 useReducer 후크에 의해 관리되는 상태를 업데이트합니다.

export default Reducer