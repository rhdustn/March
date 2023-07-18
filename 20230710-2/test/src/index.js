import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux"
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // provider 컴포넌트는 자식 컴포넌트에 store를 주입해준다
  <Provider store={store}>
    <App />
  </Provider>
  
);

reportWebVitals();

// 리덕스
// 스토어, 액션, 리듀서

// 스토어는 상태가 관리되는 오직 하나의 공간 컴포넌트와 별개로 store라는 공간이 있어서
// 필요한 상태값을 담아둔다
// 컴포넌트에서 전역으로 상태값이 필요할때 store에 접근해서 데이터를 가져온다

// 액션은 스토어에 전달할 데이터를 자칭 액션을 사용해서 스토어에 데이터를 보내게 된다
// 액션은 자바스크립트 객체 형식으로 만들어져 있음 dispatch함수를 사용해서 매개변수로
// 액션을 전달하면 리듀서가 호출되면서 매개변수로 액션을 받게된다
// dispatch(액션) => 리듀서가 호출이 되면서 리듀서에 액션을 전달하게 된다.

// 리듀서는 dispatch함수를 통해 액션을 리듀스 함수에 전달한다
// 리듀서함수는 매개변수로 전달받은 액션이 뭔지 보고 스토어에 상태를 업데이트 할지 여부를 결정

// 리덕스란

// 리액트에서 사용할 수 있는 하나의 라이브러리
// 리액트는 자식 컴포넌트에 props로 전달받은 값을 사용하는데
// 다른 컴포넌트와 데이터 공유를 직접하기 불가능 하다
// 그래서 공유해야할 데잍를 공유받는 자식 컴포넌트들이 사용할 때 공통적 부모 스토어를 store를 만들어서
// 데이터를 공유할 수 있도록 만들어준것. 리액트의 데이터 흐름은 단방향이라 이던 단점을
// 보완하기 위해 만들었다

// 리덕스는 사용하면 좋은데 사람들이 제일 많이 어려워 한다 
// 쉽게 말해서 데이터를 직접 부모에게 전달받는데 아니라 컴포넌트의 값을 요청하고 전달하는걸 직접 할 수 있다.
// 스토어에 있는 데이터를 변수에 값을 넣는것처럼 바로 바꿀 순 없고 함수를 사용해서 값을 전달할 수 있다

// 리덕스의 동작구조
// 컴포넌트 ->useDispatch -> Action -> Reducer -> store
// 컴포넌트가 Action을 보내고 Reducer가 던달 받고 값을 업데이트 할지 여부를 체크한 뒤 store의 값을 최신화 시켜준다
// Action은 동작할 기능 이름 행동(메뉴)
// Reducer 함수를 실행해서 내가 동작할  기능을 조건문으로 작성해둔 파일(메뉴판)
// 컴포넌트가 어떤 Action을 실행시킬지 Reducer함수로 받고 store의 값을 최신화 해준다.
// store의 값이 바뀌면 전역상태를 가져오고 있는 컴포넌트들을 리렌더링 된다

// 설치명령어
// npm install redux
//-------------------------------
// npm install react-redux


// 메인페이지 ->로그인페이지->음식주문페이지->마이페이지
// 주문한 음식들은 마이페이지에 보이고
// 로그인을 해야지 음식 주문 페이지로 갈 수 있음. 마이페이지도 물론

// react-router. react-redux

// props 값 전달 x
